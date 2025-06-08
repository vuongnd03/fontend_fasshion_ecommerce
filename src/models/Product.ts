import mongoose from 'mongoose'

export interface IProduct extends mongoose.Document {
  name: string
  description: string
  price: number
  originalPrice?: number
  category: string
  subcategory?: string
  brand?: string
  images: string[]
  sizes: string[]
  colors: string[]
  stock: number
  featured: boolean
  tags: string[]
  rating: number
  reviews: number
  createdAt: Date
  updatedAt: Date
}

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a product name'],
    maxLength: [200, 'Product name cannot be more than 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Please provide a product description'],
    maxLength: [2000, 'Description cannot be more than 2000 characters']
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price'],
    min: [0, 'Price cannot be negative']
  },
  originalPrice: {
    type: Number,
    min: [0, 'Original price cannot be negative']
  },
  category: {
    type: String,
    required: [true, 'Please provide a category'],
    enum: ['men', 'women', 'kids', 'accessories', 'shoes', 'bags']
  },
  subcategory: {
    type: String,
    enum: ['shirts', 'pants', 'dresses', 'jackets', 'tops', 'bottoms', 'underwear', 'sportswear']
  },
  brand: String,
  images: [{
    type: String,
    required: true
  }],
  sizes: [{
    type: String,
    enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36', '38', '40', '42']
  }],
  colors: [String],
  stock: {
    type: Number,
    required: [true, 'Please provide stock quantity'],
    min: [0, 'Stock cannot be negative'],
    default: 0
  },
  featured: {
    type: Boolean,
    default: false
  },
  tags: [String],
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  reviews: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

ProductSchema.index({ name: 'text', description: 'text', tags: 'text' })

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema)
