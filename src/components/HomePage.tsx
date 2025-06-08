'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Star, 
  Heart, 
  ShoppingCart,
  ArrowRight,
  Truck,
  Shield,
  RotateCcw,
  Headphones
} from 'lucide-react'

export default function HomePage() {
  const [wishlist, setWishlist] = useState<string[]>([])

  const featuredProducts = [
    {
      id: '1',
      name: 'Summer Floral Dress',
      price: 89.99,
      originalPrice: 129.99,
      image: '/placeholder-product.jpg',
      rating: 4.5,
      reviews: 128,
      category: 'women',
      isNew: true,
    },
    {
      id: '2',
      name: 'Classic Denim Jacket',
      price: 79.99,
      originalPrice: 99.99,
      image: '/placeholder-product.jpg',
      rating: 4.8,
      reviews: 89,
      category: 'men',
      sale: true,
    },
    {
      id: '3',
      name: 'Casual Sneakers',
      price: 119.99,
      image: '/placeholder-product.jpg',
      rating: 4.6,
      reviews: 234,
      category: 'shoes',
    },
    {
      id: '4',
      name: 'Elegant Handbag',
      price: 149.99,
      originalPrice: 199.99,
      image: '/placeholder-product.jpg',
      rating: 4.7,
      reviews: 67,
      category: 'accessories',
      sale: true,
    },
  ]

  const categories = [
    {
      name: 'Women',
      image: '/placeholder-category.jpg',
      href: '/category/women',
      description: 'Discover the latest trends',
    },
    {
      name: 'Men',
      image: '/placeholder-category.jpg',
      href: '/category/men',
      description: 'Style that speaks volumes',
    },
    {
      name: 'Kids',
      image: '/placeholder-category.jpg',
      href: '/category/kids',
      description: 'Fun and comfortable',
    },
    {
      name: 'Accessories',
      image: '/placeholder-category.jpg',
      href: '/category/accessories',
      description: 'Complete your look',
    },
  ]

  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders over $50',
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: '100% secure checkout',
    },
    {
      icon: RotateCcw,
      title: 'Easy Returns',
      description: '30-day return policy',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Always here to help',
    },
  ]

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-primary/10 to-primary/5 flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Fashion That
                <span className="text-primary block">Defines You</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Discover the latest trends and timeless classics in our curated collection of fashion essentials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Collections
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder-hero.jpg"
                  alt="Fashion Hero"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of fashion categories and find exactly what you're looking for.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={index} href={category.href}>
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="p-4">
                    <div className="text-center w-full">
                      <h3 className="font-semibold text-lg">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Handpicked items that are trending right now. Don't miss out on these popular choices.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="relative h-64 overflow-hidden rounded-t-lg">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                      />
                    </div>
                    {product.isNew && (
                      <Badge className="absolute top-2 left-2 bg-green-500">
                        New
                      </Badge>
                    )}
                    {product.sale && (
                      <Badge className="absolute top-2 left-2 bg-red-500">
                        Sale
                      </Badge>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`absolute top-2 right-2 ${
                        wishlist.includes(product.id) ? 'text-red-500' : 'text-gray-500'
                      }`}
                      onClick={() => toggleWishlist(product.id)}
                    >
                      <Heart 
                        className="h-5 w-5" 
                        fill={wishlist.includes(product.id) ? 'currentColor' : 'none'}
                      />
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="p-4">
                  <div className="w-full space-y-2">
                    <h3 className="font-semibold truncate">{product.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{product.rating}</span>
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <Button size="sm" variant="outline">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in Style</h2>
          <p className="text-lg mb-8 opacity-90">
            Subscribe to our newsletter and be the first to know about new arrivals and exclusive offers.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-foreground"
            />
            <Button variant="secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
