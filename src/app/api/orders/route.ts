import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Order from '@/models/Order'
import Product from '@/models/Product'

// GET /api/orders - Get user's orders
export async function GET(request: NextRequest) {
  try {
    await dbConnect()

    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      )
    }

    const skip = (page - 1) * limit

    const [orders, totalCount] = await Promise.all([
      Order.find({ user: userId })
        .populate('items.product', 'name images')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Order.countDocuments({ user: userId })
    ])

    const totalPages = Math.ceil(totalCount / limit)

    return NextResponse.json({
      orders,
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      }
    })
  } catch (error) {
    console.error('Get orders error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST /api/orders - Create a new order
export async function POST(request: NextRequest) {
  try {
    await dbConnect()

    const orderData = await request.json()

    // Validate order items and calculate total
    let calculatedTotal = 0
    const validatedItems = []

    for (const item of orderData.items) {
      const product = await Product.findById(item.product)
      if (!product) {
        return NextResponse.json(
          { error: `Product not found: ${item.product}` },
          { status: 400 }
        )
      }

      if (product.stock < item.quantity) {
        return NextResponse.json(
          { error: `Insufficient stock for product: ${product.name}` },
          { status: 400 }
        )
      }

      const itemTotal = product.price * item.quantity
      calculatedTotal += itemTotal

      validatedItems.push({
        ...item,
        name: product.name,
        price: product.price,
        image: product.images[0] || ''
      })

      // Update product stock
      await Product.findByIdAndUpdate(
        item.product,
        { $inc: { stock: -item.quantity } }
      )
    }

    // Add shipping and tax
    const shippingCost = orderData.shippingCost || 0
    const taxAmount = orderData.taxAmount || 0
    const discountAmount = orderData.discountAmount || 0
    
    const finalTotal = calculatedTotal + shippingCost + taxAmount - discountAmount

    // Create order
    const order = await Order.create({
      ...orderData,
      items: validatedItems,
      totalAmount: finalTotal,
      shippingCost,
      taxAmount,
      discountAmount
    })

    return NextResponse.json(order, { status: 201 })
  } catch (error) {
    console.error('Create order error:', error)
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    )
  }
}
