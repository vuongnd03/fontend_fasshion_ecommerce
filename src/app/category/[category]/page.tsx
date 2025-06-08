'use client'

import { useParams } from 'next/navigation'
import ProductGrid from '@/components/ProductGrid'

export default function CategoryPage() {
  const params = useParams()
  const category = params.category as string

  const categoryNames: { [key: string]: string } = {
    'women': 'Women\'s Fashion',
    'men': 'Men\'s Fashion',
    'kids': 'Kids\' Fashion',
    'accessories': 'Accessories',
    'shoes': 'Shoes',
    'bags': 'Bags'
  }

  const categoryName = categoryNames[category] || 'Products'

  return (
    <div className="min-h-screen">
      <div className="bg-muted/50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{categoryName}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection of {categoryName.toLowerCase()} with the latest trends and timeless classics.
          </p>
        </div>
      </div>
      
      <ProductGrid category={category} />
    </div>
  )
}
