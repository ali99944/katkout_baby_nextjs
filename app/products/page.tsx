import { Suspense } from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

async function getProducts() {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  return [
    { id: 1, name: "فستان زهري للبنات", price: 129, image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80", category: "بنات" },
    { id: 2, name: "بدلة رسمية للأولاد", price: 199, image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80", category: "أولاد" },
    { id: 3, name: "طقم مولود جديد", price: 89, image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80", category: "مواليد" },
    { id: 4, name: "جاكيت شتوي للأطفال", price: 159, image: "https://images.unsplash.com/photo-1545991842-850bdf12ee24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80", category: "أولاد" },
    { id: 5, name: "فستان حفلات للبنات", price: 179, image: "https://images.unsplash.com/photo-1524920535880-3700b5959c11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80", category: "بنات" },
    { id: 6, name: "بيجامة قطنية للأطفال", price: 79, image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80", category: "مواليد" },
  ]
}

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow transition-shadow duration-300 hover:shadow-md">
      <div className="relative h-64">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
        <div className="absolute top-2 right-2 bg-[#FF9D1B] text-white px-2 py-1 rounded-full text-sm">
          {product.category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#4A1D1F] mb-2">{product.name}</h3>
        <p className="text-[#FF9D1B] font-bold">{product.price} ر.س</p>
        <button className="mt-4 w-full bg-[#4A1D1F] text-white py-2 rounded-lg transition-colors duration-300 hover:bg-[#FF9D1B]">
          أضف إلى السلة
        </button>
      </div>
    </div>
  )
}

function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

function ProductSkeleton() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow animate-pulse">
      <div className="h-64 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
        <div className="h-8 bg-gray-300 rounded"></div>
      </div>
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  )
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-[#4A1D1F] mb-8 text-center">منتجاتنا المميزة</h1>
        
        <div className="mb-8">
          <input
            type="text"
            placeholder="ابحث عن منتج..."
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9D1B]"
          />
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          {['الكل', 'بنات', 'أولاد', 'مواليد'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-white text-[#4A1D1F] border border-[#4A1D1F] transition-colors duration-300 hover:bg-[#4A1D1F] hover:text-white"
            >
              {category}
            </button>
          ))}
        </div>

        <Suspense fallback={<LoadingSkeleton />}>
          <ProductGrid products={products} />
        </Suspense>

        <div className="mt-12 text-center">
          <button className="bg-[#FF9D1B] text-white px-8 py-3 rounded-lg text-lg font-semibold shadow transition-colors duration-300 hover:bg-[#4A1D1F]">
            تحميل المزيد
          </button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

