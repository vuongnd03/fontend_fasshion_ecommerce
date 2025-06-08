# FashionStore - Modern E-commerce Platform

A modern, responsive e-commerce platform built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

### 🛍️ Core E-commerce Features
- **Product Catalog**: Browse products with filtering, sorting, and search
- **Product Details**: Detailed product pages with image galleries, size/color selection
- **Shopping Cart**: Add to cart functionality (frontend ready)
- **User Authentication**: Sign up, sign in with NextAuth.js
- **Order Management**: Create and track orders
- **Responsive Design**: Mobile-first, fully responsive layout

### 🎨 UI/UX Features
- **Dark/Light Mode**: Theme switching with next-themes
- **Modern Design**: Clean, professional interface with Tailwind CSS
- **Smooth Animations**: Hover effects and transitions
- **Loading States**: Skeleton loaders and loading indicators
- **Wishlist**: Save favorite products
- **Search**: Real-time product search

### 🔧 Technical Features
- **Next.js 15**: Latest version with App Router
- **TypeScript**: Full type safety
- **MongoDB**: Database with Mongoose ODM
- **API Routes**: RESTful API endpoints
- **Authentication**: NextAuth.js with credentials provider
- **Component Library**: Custom UI components with shadcn/ui patterns

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI primitives
- **Backend**: Next.js API Routes, MongoDB, Mongoose
- **Authentication**: NextAuth.js, bcryptjs
- **UI Components**: Custom components with class-variance-authority
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode

## Project Structure

```
fashion-ecommerce/
├── src/
│   ├── app/                    # Next.js 15 App Router
│   │   ├── api/               # API routes
│   │   │   ├── auth/          # Authentication endpoints
│   │   │   ├── products/      # Product CRUD operations
│   │   │   └── orders/        # Order management
│   │   ├── category/          # Category pages
│   │   ├── products/          # Product detail pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── ui/                # Base UI components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Site footer
│   │   ├── HomePage.tsx       # Homepage content
│   │   ├── ProductGrid.tsx    # Product listing
│   │   └── ThemeProvider.tsx  # Theme context
│   ├── lib/                   # Utility functions
│   │   ├── mongodb.ts         # Database connection
│   │   └── utils.ts           # Helper functions
│   └── models/                # Database models
│       ├── User.ts            # User schema
│       ├── Product.ts         # Product schema
│       └── Order.ts           # Order schema
├── public/                    # Static assets
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/[...nextauth]` - NextAuth.js endpoints

### Products
- `GET /api/products` - Get products with filtering and pagination
- `POST /api/products` - Create product (admin)
- `GET /api/products/[id]` - Get single product
- `PUT /api/products/[id]` - Update product (admin)
- `DELETE /api/products/[id]` - Delete product (admin)

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order

## Database Schema

### User Model
- Personal information (name, email, password)
- Address details
- Role-based access (user/admin)
- Order history

### Product Model
- Product details (name, description, price)
- Images and media
- Inventory management
- Categories and tags
- Size and color variants

### Order Model
- Order items and quantities
- Shipping and billing information
- Payment details
- Order status tracking

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fashion-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## Environment Variables

- `MONGODB_URI` - MongoDB connection string
- `NEXTAUTH_SECRET` - Secret for NextAuth.js
- `NEXTAUTH_URL` - Base URL for authentication

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features in Development

- [ ] Shopping cart functionality
- [ ] Payment integration (Stripe)
- [ ] Order tracking
- [ ] Admin dashboard
- [ ] Product reviews and ratings
- [ ] Email notifications
- [ ] Inventory management
- [ ] Advanced filtering
- [ ] Social authentication

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
