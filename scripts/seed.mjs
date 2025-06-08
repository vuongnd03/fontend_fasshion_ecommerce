import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

// Define schemas and models directly in the seed file
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  addresses: [{
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
    isDefault: { type: Boolean, default: false }
  }],
  phone: String,
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
}, {
  timestamps: true
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, unique: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: Number,
  category: { type: String, required: true },
  subcategory: String,
  brand: String,
  images: [String],
  sizes: [String],
  colors: [String],
  tags: [String],
  stock: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
  featured: { type: Boolean, default: false }
}, {
  timestamps: true
});

// Generate slug from name before saving
productSchema.pre('save', function(next) {
  if (!this.slug) {
    this.slug = this.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-').replace(/--+/g, '-').replace(/^-|-$/g, '');
  }
  next();
});

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    name: String,
    price: Number,
    quantity: Number,
    size: String,
    color: String,
    image: String
  }],
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  billingAddress: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  paymentMethod: String,
  totalAmount: Number,
  shippingCost: { type: Number, default: 0 },
  taxAmount: { type: Number, default: 0 },
  discountAmount: { type: Number, default: 0 },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },
  trackingNumber: String
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);
const Product = mongoose.model('Product', productSchema);
const Order = mongoose.model('Order', orderSchema);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://vaugheu:tempA@cluster0.yfpgp8o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
}

const demoUsers = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj3QJjNQs1oi', // password: password123
    role: 'user',
    addresses: [{
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA',
      isDefault: true
    }],
    phone: '+1 (555) 123-4567'
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj3QJjNQs1oi', // password: password123
    role: 'user',
    addresses: [{
      street: '456 Oak Ave',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90210',
      country: 'USA',
      isDefault: true
    }],
    phone: '+1 (555) 987-6543'
  },
  {
    name: 'Admin User',
    email: 'admin@fashionstore.com',
    password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj3QJjNQs1oi', // password: password123
    role: 'admin',
    addresses: [{
      street: '789 Fashion St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA',
      isDefault: true
    }],
    phone: '+1 (555) 111-2222'
  }
];

const demoProducts = [
  // WOMEN'S CLOTHING
  {
    name: 'Summer Floral Dress',
    slug: 'summer-floral-dress',
    description: 'Beautiful floral print dress perfect for summer occasions. Made with lightweight, breathable fabric that drapes elegantly. Features a flattering A-line silhouette with adjustable straps.',
    price: 89.99,
    originalPrice: 129.99,
    category: 'women',
    subcategory: 'dresses',
    brand: 'Elegant Wear',
    images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop', 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=500&h=600&fit=crop'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['blue', 'pink', 'white'],
    tags: ['summer', 'floral', 'casual', 'dress'],
    stock: 25,
    rating: 4.5,
    reviews: 128,
    featured: true
  },
  {
    name: 'Elegant Evening Gown',
    slug: 'elegant-evening-gown',
    description: 'Stunning evening gown perfect for formal events. Features intricate beadwork and a flowing silhouette that flatters every figure.',
    price: 299.99,
    originalPrice: 399.99,
    category: 'women',
    subcategory: 'dresses',
    brand: 'Luxury Couture',
    images: ['https://images.unsplash.com/photo-1566479179817-c0c74e6b2e28?w=500&h=600&fit=crop', 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['black', 'navy', 'burgundy'],
    tags: ['evening', 'formal', 'elegant', 'gown'],
    stock: 8,
    rating: 4.9,
    reviews: 42,
    featured: true
  },
  {
    name: 'High-Waisted Jeans',
    slug: 'high-waisted-jeans',
    description: 'Trendy high-waisted jeans with perfect fit. Made from stretch denim for comfort and style. Flattering silhouette for all body types.',
    price: 79.99,
    category: 'women',
    subcategory: 'jeans',
    brand: 'DenimCo',
    images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=600&fit=crop'],
    sizes: ['24', '25', '26', '27', '28', '29', '30', '31', '32'],
    colors: ['dark blue', 'light blue', 'black'],
    tags: ['jeans', 'high-waisted', 'denim', 'trendy'],
    stock: 30,
    rating: 4.4,
    reviews: 198,
    featured: false
  },
  {
    name: 'Silk Blouse',
    slug: 'silk-blouse',
    description: 'Luxurious silk blouse perfect for professional settings. Features mother-of-pearl buttons and a classic fit.',
    price: 129.99,
    category: 'women',
    subcategory: 'blouses',
    brand: 'Professional Plus',
    images: ['https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500&h=600&fit=crop'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['white', 'cream', 'light blue'],
    tags: ['silk', 'professional', 'blouse', 'elegant'],
    stock: 22,
    rating: 4.6,
    reviews: 89,
    featured: false
  },
  {
    name: 'Sports Bra',
    slug: 'sports-bra',
    description: 'High-performance sports bra for active lifestyle. Moisture-wicking fabric and supportive design. Perfect for workouts and sports activities.',
    price: 34.99,
    category: 'women',
    subcategory: 'activewear',
    brand: 'ActiveFit',
    images: ['https://images.unsplash.com/photo-1506629905542-b5bd8ee4ea5f?w=500&h=600&fit=crop'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['black', 'gray', 'pink', 'blue'],
    tags: ['sports bra', 'activewear', 'fitness', 'support'],
    stock: 40,
    rating: 4.7,
    reviews: 112,
    featured: false
  },
  {
    name: 'Yoga Leggings',
    slug: 'yoga-leggings',
    description: 'Premium yoga leggings with four-way stretch. High-waisted design with side pockets for convenience.',
    price: 59.99,
    category: 'women',
    subcategory: 'activewear',
    brand: 'YogaFlow',
    images: ['https://images.unsplash.com/photo-1506629905542-b5bd8ee4ea5f?w=500&h=600&fit=crop'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['black', 'charcoal', 'navy', 'purple'],
    tags: ['yoga', 'leggings', 'activewear', 'stretch'],
    stock: 35,
    rating: 4.8,
    reviews: 167,
    featured: false
  },
  {
    name: 'Cashmere Sweater',
    slug: 'cashmere-sweater',
    description: 'Ultra-soft cashmere sweater perfect for cooler weather. Classic crew neck design with ribbed trim.',
    price: 189.99,
    originalPrice: 249.99,
    category: 'women',
    subcategory: 'sweaters',
    brand: 'Luxury Knits',
    images: ['https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['cream', 'gray', 'camel', 'black'],
    tags: ['cashmere', 'sweater', 'luxury', 'warm'],
    stock: 15,
    rating: 4.9,
    reviews: 78,
    featured: true
  },

  // MEN'S CLOTHING
  {
    name: 'Classic Denim Jacket',
    slug: 'classic-denim-jacket',
    description: 'Timeless denim jacket that never goes out of style. Premium quality cotton denim with vintage wash. Perfect for layering over any outfit.',
    price: 79.99,
    originalPrice: 99.99,
    category: 'men',
    subcategory: 'jackets',
    brand: 'Urban Classic',
    images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop', 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=600&fit=crop'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['blue', 'black', 'light blue'],
    tags: ['denim', 'jacket', 'casual', 'vintage'],
    stock: 18,
    rating: 4.8,
    reviews: 89,
    featured: true
  },
  {
    name: 'Premium Cotton T-Shirt',
    slug: 'premium-cotton-t-shirt',
    description: 'Premium cotton t-shirt with comfortable fit. Perfect for casual wear or layering. Available in multiple colors.',
    price: 24.99,
    category: 'men',
    subcategory: 'shirts',
    brand: 'BasicWear',
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['white', 'black', 'gray', 'navy', 'red'],
    tags: ['t-shirt', 'cotton', 'basic', 'casual'],
    stock: 50,
    rating: 4.3,
    reviews: 156,
    featured: false
  },
  {
    name: 'Formal Dress Shirt',
    slug: 'formal-dress-shirt',
    description: 'Crisp formal dress shirt perfect for business or special occasions. Non-iron fabric with classic fit.',
    price: 69.99,
    category: 'men',
    subcategory: 'shirts',
    brand: 'Executive Style',
    images: ['https://images.unsplash.com/photo-1603252109303-2751441d8607?w=500&h=600&fit=crop'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['white', 'light blue', 'light pink'],
    tags: ['formal', 'dress shirt', 'business', 'professional'],
    stock: 28,
    rating: 4.5,
    reviews: 134,
    featured: false
  },
  {
    name: 'Slim Fit Chinos',
    slug: 'slim-fit-chinos',
    description: 'Modern slim-fit chinos in premium cotton twill. Perfect for both casual and smart-casual occasions.',
    price: 89.99,
    category: 'men',
    subcategory: 'pants',
    brand: 'Modern Fit',
    images: ['https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=600&fit=crop'],
    sizes: ['28', '30', '32', '34', '36', '38', '40'],
    colors: ['khaki', 'navy', 'olive', 'charcoal'],
    tags: ['chinos', 'slim fit', 'casual', 'modern'],
    stock: 32,
    rating: 4.4,
    reviews: 201,
    featured: false
  },
  {
    name: 'Wool Blazer',
    slug: 'wool-blazer',
    description: 'Classic wool blazer perfect for professional settings. Tailored fit with notched lapels and working buttonholes.',
    price: 299.99,
    originalPrice: 399.99,
    category: 'men',
    subcategory: 'blazers',
    brand: 'Tailored Excellence',
    images: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['navy', 'charcoal', 'black'],
    tags: ['blazer', 'wool', 'professional', 'formal'],
    stock: 12,
    rating: 4.7,
    reviews: 67,
    featured: true
  },

  // SHOES
  {
    name: 'Casual Sneakers',
    slug: 'casual-sneakers',
    description: 'Comfortable sneakers perfect for everyday wear. Cushioned sole provides all-day comfort. Made with breathable materials and modern design.',
    price: 119.99,
    category: 'shoes',
    subcategory: 'sneakers',
    brand: 'ComfortWalk',
    images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop', 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=600&fit=crop'],
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['white', 'black', 'gray'],
    tags: ['sneakers', 'casual', 'comfortable', 'sports'],
    stock: 35,
    rating: 4.6,
    reviews: 234,
    featured: true
  },
  {
    name: 'Leather Boots',
    slug: 'leather-boots',
    description: 'Stylish leather boots perfect for fall and winter. Water-resistant and durable construction. Classic design that complements any outfit.',
    price: 159.99,
    category: 'shoes',
    subcategory: 'boots',
    brand: 'BootCraft',
    images: ['https://images.unsplash.com/photo-1608256246200-53e8b47b2565?w=500&h=600&fit=crop'],
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['brown', 'black', 'tan'],
    tags: ['boots', 'leather', 'winter', 'durable'],
    stock: 15,
    rating: 4.5,
    reviews: 87,
    featured: false
  },
  {
    name: 'Running Shoes',
    slug: 'running-shoes',
    description: 'High-performance running shoes with advanced cushioning technology. Lightweight design for maximum speed and comfort.',
    price: 149.99,
    category: 'shoes',
    subcategory: 'athletic',
    brand: 'SpeedRunner',
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=600&fit=crop'],
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['black', 'blue', 'red', 'gray'],
    tags: ['running', 'athletic', 'performance', 'lightweight'],
    stock: 42,
    rating: 4.8,
    reviews: 312,
    featured: true
  },
  {
    name: 'Formal Oxford Shoes',
    slug: 'formal-oxford-shoes',
    description: 'Classic Oxford dress shoes crafted from premium leather. Perfect for business meetings and formal events.',
    price: 199.99,
    category: 'shoes',
    subcategory: 'formal',
    brand: 'Gentleman\'s Choice',
    images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['black', 'brown'],
    tags: ['oxford', 'formal', 'leather', 'business'],
    stock: 18,
    rating: 4.6,
    reviews: 94,
    featured: false
  },
  {
    name: 'High Heel Pumps',
    slug: 'high-heel-pumps',
    description: 'Elegant high heel pumps perfect for professional and formal occasions. Comfortable fit with cushioned insole.',
    price: 129.99,
    category: 'shoes',
    subcategory: 'heels',
    brand: 'Elegant Steps',
    images: ['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=600&fit=crop'],
    sizes: ['5', '6', '7', '8', '9', '10', '11'],
    colors: ['black', 'nude', 'red'],
    tags: ['heels', 'pumps', 'formal', 'elegant'],
    stock: 25,
    rating: 4.3,
    reviews: 156,
    featured: false
  },

  // ACCESSORIES
  {
    name: 'Elegant Handbag',
    slug: 'elegant-handbag',
    description: 'Sophisticated handbag crafted from premium leather. Features multiple compartments for organization. Perfect for both professional and casual settings.',
    price: 149.99,
    originalPrice: 199.99,
    category: 'accessories',
    subcategory: 'bags',
    brand: 'Luxury Touch',
    images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=600&fit=crop', 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop'],
    sizes: ['One Size'],
    colors: ['black', 'brown', 'navy'],
    tags: ['handbag', 'leather', 'elegant', 'professional'],
    stock: 12,
    rating: 4.7,
    reviews: 67,
    featured: true
  },
  {
    name: 'Silk Scarf',
    slug: 'silk-scarf',
    description: 'Luxurious silk scarf with elegant patterns. Perfect accessory for any outfit. Lightweight and versatile styling options.',
    price: 45.99,
    category: 'accessories',
    subcategory: 'scarves',
    brand: 'SilkElegance',
    images: ['https://images.unsplash.com/photo-1601049676869-702ea24cfd58?w=500&h=600&fit=crop'],
    sizes: ['One Size'],
    colors: ['red', 'blue', 'green', 'gold'],
    tags: ['scarf', 'silk', 'elegant', 'accessory'],
    stock: 25,
    rating: 4.2,
    reviews: 34,
    featured: false
  },
  {
    name: 'Designer Sunglasses',
    slug: 'designer-sunglasses',
    description: 'Premium designer sunglasses with UV protection. Classic aviator style with polarized lenses.',
    price: 189.99,
    originalPrice: 249.99,
    category: 'accessories',
    subcategory: 'sunglasses',
    brand: 'SunStyle',
    images: ['https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=600&fit=crop'],
    sizes: ['One Size'],
    colors: ['gold', 'silver', 'black'],
    tags: ['sunglasses', 'designer', 'UV protection', 'aviator'],
    stock: 30,
    rating: 4.5,
    reviews: 123,
    featured: false
  },
  {
    name: 'Leather Watch',
    slug: 'leather-watch',
    description: 'Classic leather watch with Swiss movement. Timeless design that complements both casual and formal attire.',
    price: 299.99,
    category: 'accessories',
    subcategory: 'watches',
    brand: 'TimeClassic',
    images: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=600&fit=crop'],
    sizes: ['One Size'],
    colors: ['brown', 'black'],
    tags: ['watch', 'leather', 'classic', 'swiss'],
    stock: 20,
    rating: 4.8,
    reviews: 89,
    featured: true
  },
  {
    name: 'Crossbody Bag',
    slug: 'crossbody-bag',
    description: 'Trendy crossbody bag perfect for everyday use. Adjustable strap and multiple pockets for organization.',
    price: 79.99,
    category: 'accessories',
    subcategory: 'bags',
    brand: 'Urban Carry',
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop'],
    sizes: ['One Size'],
    colors: ['black', 'tan', 'burgundy'],
    tags: ['crossbody', 'bag', 'casual', 'trendy'],
    stock: 35,
    rating: 4.4,
    reviews: 167,
    featured: false
  },

  // KIDS
  {
    name: 'Kids Rainbow Hoodie',
    slug: 'kids-rainbow-hoodie',
    description: 'Colorful hoodie for kids with fun rainbow design. Soft and cozy material perfect for playtime. Easy care and durable construction.',
    price: 39.99,
    category: 'kids',
    subcategory: 'hoodies',
    brand: 'FunKids',
    images: ['https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=500&h=600&fit=crop'],
    sizes: ['2T', '3T', '4T', '5T', '6', '7', '8'],
    colors: ['rainbow', 'pink', 'blue'],
    tags: ['kids', 'hoodie', 'colorful', 'fun'],
    stock: 20,
    rating: 4.6,
    reviews: 45,
    featured: false
  },
  {
    name: 'Kids Denim Jacket',
    slug: 'kids-denim-jacket',
    description: 'Adorable denim jacket for kids. Mini version of the classic adult style with fun patches and details.',
    price: 49.99,
    category: 'kids',
    subcategory: 'jackets',
    brand: 'Little Trendsetter',
    images: ['https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=500&h=600&fit=crop'],
    sizes: ['2T', '3T', '4T', '5T', '6', '7', '8'],
    colors: ['blue', 'light blue'],
    tags: ['kids', 'denim', 'jacket', 'trendy'],
    stock: 25,
    rating: 4.7,
    reviews: 62,
    featured: false
  },
  {
    name: 'Kids Sneakers',
    slug: 'kids-sneakers',
    description: 'Comfortable sneakers designed for active kids. Non-slip sole and easy velcro closure for independence.',
    price: 59.99,
    category: 'kids',
    subcategory: 'shoes',
    brand: 'ActiveKids',
    images: ['https://images.unsplash.com/photo-1515396800500-f06eca1c5cc0?w=500&h=600&fit=crop'],
    sizes: ['10', '11', '12', '13', '1', '2', '3'],
    colors: ['blue', 'pink', 'red', 'white'],
    tags: ['kids', 'sneakers', 'comfortable', 'active'],
    stock: 40,
    rating: 4.5,
    reviews: 134,
    featured: false
  },
  {
    name: 'Kids Dress',
    slug: 'kids-dress',
    description: 'Pretty dress for special occasions. Comfortable cotton blend with fun patterns and easy care instructions.',
    price: 44.99,
    category: 'kids',
    subcategory: 'dresses',
    brand: 'Little Princess',
    images: ['https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=500&h=600&fit=crop'],
    sizes: ['2T', '3T', '4T', '5T', '6', '7', '8'],
    colors: ['pink', 'purple', 'blue'],
    tags: ['kids', 'dress', 'special occasion', 'pretty'],
    stock: 18,
    rating: 4.8,
    reviews: 73,
    featured: false
  }
];

async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding...');

    // Clear existing data
    await User.deleteMany({});
    await Product.deleteMany({});
    await Order.deleteMany({});
    console.log('🗑️ Cleared existing data');

    // Insert demo users
    const insertedUsers = await User.insertMany(demoUsers);
    console.log(`👥 Inserted ${insertedUsers.length} demo users`);

    // Insert demo products
    const insertedProducts = await Product.insertMany(demoProducts);
    console.log(`📦 Inserted ${insertedProducts.length} demo products`);

    // Create a sample order
    const sampleOrder = {
      user: insertedUsers[0]._id,
      items: [
        {
          product: insertedProducts[0]._id,
          name: insertedProducts[0].name,
          price: insertedProducts[0].price,
          quantity: 2,
          size: 'M',
          color: 'blue',
          image: insertedProducts[0].images[0]
        },
        {
          product: insertedProducts[1]._id,
          name: insertedProducts[1].name,
          price: insertedProducts[1].price,
          quantity: 1,
          size: 'L',
          color: 'blue',
          image: insertedProducts[1].images[0]
        }
      ],
      shippingAddress: insertedUsers[0].addresses[0],
      billingAddress: insertedUsers[0].addresses[0],
      paymentMethod: 'credit_card',
      totalAmount: 259.97,
      shippingCost: 9.99,
      taxAmount: 20.80,
      status: 'confirmed',
      trackingNumber: 'FS123456789'
    };

    const insertedOrder = await Order.create(sampleOrder);
    console.log(`🛒 Created sample order: ${insertedOrder._id}`);

    console.log('✅ Database seeding completed successfully!');
    console.log('\n📊 Summary:');
    console.log(`   Users: ${insertedUsers.length}`);
    console.log(`   Products: ${insertedProducts.length}`);
    console.log(`   Orders: 1`);
    console.log('\n🔐 Demo accounts:');
    console.log('   User: john@example.com / password123');
    console.log('   User: jane@example.com / password123');
    console.log('   Admin: admin@fashionstore.com / password123');

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
  }
}

connectDB().then(seedDatabase);
