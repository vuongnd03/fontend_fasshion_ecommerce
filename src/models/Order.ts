import mongoose from 'mongoose'

export interface IOrderItem {
  product: mongoose.Types.ObjectId
  name: string
  price: number
  quantity: number
  size?: string
  color?: string
  image: string
}

export interface IOrder extends mongoose.Document {
  user: mongoose.Types.ObjectId
  items: IOrderItem[]
  totalAmount: number
  shippingAddress: {
    name: string
    street: string
    city: string
    state: string
    zipCode: string
    country: string
    phone: string
  }
  paymentInfo: {
    id: string
    status: string
    method: string
  }
  orderStatus: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  shippingCost: number
  taxAmount: number
  discountAmount: number
  trackingNumber?: string
  estimatedDelivery?: Date
  createdAt: Date
  updatedAt: Date
}

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    size: String,
    color: String,
    image: {
      type: String,
      required: true
    }
  }],
  totalAmount: {
    type: Number,
    required: true,
    min: 0
  },
  shippingAddress: {
    name: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true }
  },
  paymentInfo: {
    id: { type: String, required: true },
    status: { type: String, required: true },
    method: { type: String, required: true }
  },
  orderStatus: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },
  shippingCost: {
    type: Number,
    required: true,
    default: 0
  },
  taxAmount: {
    type: Number,
    required: true,
    default: 0
  },
  discountAmount: {
    type: Number,
    default: 0
  },
  trackingNumber: String,
  estimatedDelivery: Date
}, {
  timestamps: true
})

export default mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema)
