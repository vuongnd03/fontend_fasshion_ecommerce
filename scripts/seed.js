const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

// Import models
const User = require('../src/models/User');
const Product = require('../src/models/Product');
const Order = require('../src/models/Order');

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
  {
    name: 'Summer Floral Dress',
    description: 'Beautiful floral print dress perfect for summer occasions. Made with lightweight, breathable fabric that drapes elegantly. Features a flattering A-line silhouette with adjustable straps.',
    price: 89.99,
    originalPrice: 129.99,
    category: 'women',
    subcategory: 'dresses',
    brand: 'Elegant Wear',
    images: ['/placeholder-product.jpg', '/placeholder-product.jpg'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['blue', 'pink', 'white'],
    tags: ['summer', 'floral', 'casual', 'dress'],
    stock: 25,
    rating: 4.5,
    reviews: 128,
    featured: true
  },
  {
    name: 'Classic Denim Jacket',
    description: 'Timeless denim jacket that never goes out of style. Premium quality cotton denim with vintage wash. Perfect for layering over any outfit.',
    price: 79.99,
    originalPrice: 99.99,
    category: 'men',
    subcategory: 'jackets',
    brand: 'Urban Classic',
    images: ['/placeholder-product.jpg', '/placeholder-product.jpg'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['blue', 'black', 'light blue'],
    tags: ['denim', 'jacket', 'casual', 'vintage'],
    stock: 18,
    rating: 4.8,
    reviews: 89,
    featured: true
  },
  {
    name: 'Casual Sneakers',
    description: 'Comfortable sneakers perfect for everyday wear. Cushioned sole provides all-day comfort. Made with breathable materials and modern design.',
    price: 119.99,
    category: 'shoes',
    subcategory: 'sneakers',
    brand: 'ComfortWalk',
    images: ['/placeholder-product.jpg', '/placeholder-product.jpg'],
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['white', 'black', 'gray'],
    tags: ['sneakers', 'casual', 'comfortable', 'sports'],
    stock: 35,
    rating: 4.6,
    reviews: 234,
    featured: true
  },
  {
    name: 'Elegant Handbag',
    description: 'Sophisticated handbag crafted from premium leather. Features multiple compartments for organization. Perfect for both professional and casual settings.',
    price: 149.99,
    originalPrice: 199.99,
    category: 'accessories',
    subcategory: 'bags',
    brand: 'Luxury Touch',
    images: ['/placeholder-product.jpg', '/placeholder-product.jpg'],
    sizes: ['One Size'],
    colors: ['black', 'brown', 'navy'],
    tags: ['handbag', 'leather', 'elegant', 'professional'],
    stock: 12,
    rating: 4.7,
    reviews: 67,
    featured: true
  },
  {
    name: 'Cotton T-Shirt',
    description: 'Premium cotton t-shirt with comfortable fit. Perfect for casual wear or layering. Available in multiple colors.',
    price: 24.99,
    category: 'men',
    subcategory: 'shirts',
    brand: 'BasicWear',
    images: ['/placeholder-product.jpg'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['white', 'black', 'gray', 'navy', 'red'],
    tags: ['t-shirt', 'cotton', 'basic', 'casual'],
    stock: 50,
    rating: 4.3,
    reviews: 156,
    featured: false
  },
  {
    name: 'High-Waisted Jeans',
    description: 'Trendy high-waisted jeans with perfect fit. Made from stretch denim for comfort and style. Flattering silhouette for all body types.',
    price: 79.99,
    category: 'women',
    subcategory: 'jeans',
    brand: 'DenimCo',
    images: ['/placeholder-product.jpg'],
    sizes: ['24', '25', '26', '27', '28', '29', '30', '31', '32'],
    colors: ['dark blue', 'light blue', 'black'],
    tags: ['jeans', 'high-waisted', 'denim', 'trendy'],
    stock: 30,
    rating: 4.4,
    reviews: 198,
    featured: false
  },
  {
    name: 'Kids Rainbow Hoodie',
    description: 'Colorful hoodie for kids with fun rainbow design. Soft and cozy material perfect for playtime. Easy care and durable construction.',
    price: 39.99,
    category: 'kids',
    subcategory: 'hoodies',
    brand: 'FunKids',
    images: ['/placeholder-product.jpg'],
    sizes: ['2T', '3T', '4T', '5T', '6', '7', '8'],
    colors: ['rainbow', 'pink', 'blue'],
    tags: ['kids', 'hoodie', 'colorful', 'fun'],
    stock: 20,
    rating: 4.6,
    reviews: 45,
    featured: false
  },
  {
    name: 'Leather Boots',
    description: 'Stylish leather boots perfect for fall and winter. Water-resistant and durable construction. Classic design that complements any outfit.',
    price: 159.99,
    category: 'shoes',
    subcategory: 'boots',
    brand: 'BootCraft',
    images: ['/placeholder-product.jpg'],
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['brown', 'black', 'tan'],
    tags: ['boots', 'leather', 'winter', 'durable'],
    stock: 15,
    rating: 4.5,
    reviews: 87,
    featured: false
  },
  {
    name: 'Silk Scarf',
    description: 'Luxurious silk scarf with elegant patterns. Perfect accessory for any outfit. Lightweight and versatile styling options.',
    price: 45.99,
    category: 'accessories',
    subcategory: 'scarves',
    brand: 'SilkElegance',
    images: ['/placeholder-product.jpg'],
    sizes: ['One Size'],
    colors: ['red', 'blue', 'green', 'gold'],
    tags: ['scarf', 'silk', 'elegant', 'accessory'],
    stock: 25,
    rating: 4.2,
    reviews: 34,
    featured: false
  },
  {
    name: 'Sports Bra',
    description: 'High-performance sports bra for active lifestyle. Moisture-wicking fabric and supportive design. Perfect for workouts and sports activities.',
    price: 34.99,
    category: 'women',
    subcategory: 'activewear',
    brand: 'ActiveFit',
    images: ['/placeholder-product.jpg'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['black', 'gray', 'pink', 'blue'],
    tags: ['sports bra', 'activewear', 'fitness', 'support'],
    stock: 40,
    rating: 4.7,
    reviews: 112,
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
