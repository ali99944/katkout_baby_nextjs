'use client'

import { useState, useEffect, Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

async function getProductDetails(id: string) {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  return {
    id: parseInt(id),
    name: "فستان زهري للبنات",
    price: 129,
    description: "فستان جميل ومريح مصنوع من القطن الناعم، مثالي للمناسبات الخاصة والاستخدام اليومي. يتميز بتصميم زهري أنيق وألوان زاهية تناسب الصيف.",
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1524920535880-3700b5959c11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    ],
    sizes: ["2-3 سنوات", "3-4 سنوات", "4-5 سنوات", "5-6 سنوات"],
    features: [
      "قماش قطني 100%",
      "سهل الغسيل والعناية",
      "تصميم مريح للحركة",
      "ألوان ثابتة لا تبهت مع الغسيل"
    ],
    category: "بنات",
    reviews: [
      { id: 1, user: "سارة", rating: 5, comment: "فستان رائع! ابنتي تحبه كثيرًا." },
      { id: 2, user: "فاطمة", rating: 4, comment: "جودة ممتازة ولكن المقاس أكبر قليلاً." },
      { id: 3, user: "نورة", rating: 5, comment: "تصميم جميل وخامة مريحة للغاية." }
    ]
  }
}

async function getRelatedProducts() {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500))
  return [
    { id: 2, name: "بدلة رسمية للأولاد", price: 199, image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" },
    { id: 3, name: "طقم مولود جديد", price: 89, image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" },
    { id: 4, name: "جاكيت شتوي للأطفال", price: 159, image: "https://images.unsplash.com/photo-1545991842-850bdf12ee24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
    { id: 5, name: "فستان حفلات للبنات", price: 179, image: "https://images.unsplash.com/photo-1524920535880-3700b5959c11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
    { id: 6, name: "بيجامة قطنية للأطفال", price: 79, image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" },
  ]
}

function ProductImageGallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div className="space-y-4">
      <div className="relative h-96 rounded-lg overflow-hidden">
        <Image src={mainImage} alt="صورة المنتج الرئيسية" layout="fill" objectFit="cover" className="transition-all duration-300 ease-in-out" />
      </div>
      <div className="flex justify-center space-x-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(image)}
            className={`relative w-20 h-20 rounded-md overflow-hidden ${mainImage === image ? 'ring-2 ring-[#FF9D1B]' : ''}`}
          >
            <Image src={image} alt={`صورة المنتج ${index + 1}`} layout="fill" objectFit="cover" />
          </button>
        ))}
      </div>
    </div>
  )
}

function ProductInfo({ product }) {
  const [selectedSize, setSelectedSize] = useState(null)
  const [quantity, setQuantity] = useState(1)

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#4A1D1F] mb-4">{product.name}</h1>
      <div className="flex items-center mb-4">
        <div className="flex text-yellow-400">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        <span className="mr-2 text-gray-600">({product.reviews.length} تقييمات)</span>
      </div>
      <p className="text-2xl font-bold text-[#FF9D1B] mb-6">{product.price} ر.س</p>
      <p className="text-gray-700 mb-6">{product.description}</p>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[#4A1D1F] mb-2">اختر المقاس:</h3>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size, index) => (
            <button
              key={index}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 border rounded-full transition-colors duration-300 ${
                selectedSize === size
                  ? 'bg-[#4A1D1F] text-white'
                  : 'border-[#4A1D1F] text-[#4A1D1F] hover:bg-[#4A1D1F] hover:text-white'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[#4A1D1F] mb-2">الكمية:</h3>
        <div className="flex items-center border border-gray-300 rounded-lg w-32">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 text-2xl py-2 text-[#4A1D1F] hover:bg-gray-100 transition-colors duration-300"
          >
            -
          </button>
          <span className="flex-1 text-center text-xl font-semibold">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-2 text-[#4A1D1F] hover:bg-gray-100 transition-colors duration-300"
          >
            +
          </button>
        </div>
      </div>
      <button className="w-full bg-[#FF9D1B] text-white py-3 rounded-lg text-lg font-semibold transition-colors duration-300 hover:bg-[#4A1D1F]">
        أضف إلى السلة
      </button>
    </div>
  )
}

function ProductFeatures({ features }) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-[#4A1D1F] mb-4">مميزات المنتج</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2 bg-[#FF9D1B]/10 p-4 rounded-lg">
            <svg className="w-6 h-6 text-[#FF9D1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[#4A1D1F]">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function RelatedProducts({ products }) {
  return (
    <div className="mt-16 container mx-auto">
      <h2 className="text-2xl font-bold text-[#4A1D1F] mb-4">منتجات ذات صلة</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map(product => (
          <Link key={product.id} href={`/products/${product.id}`} className="block">
            <div className="bg-white rounded-lg overflow-hidden shadow">
              <div className="relative h-48">
                <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#4A1D1F] mb-2">{product.name}</h3>
                <p className="text-[#FF9D1B] font-bold">{product.price} ر.س</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function ReviewSection({ reviews }) {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-[#4A1D1F] mb-6">تقييمات العملاء</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-4 rounded-lg shadow flex items-start">
            <div className="w-10 h-10 bg-[#FF9D1B] rounded-full flex items-center justify-center text-white font-bold text-xl ml-4 flex-shrink-0">
              {review.user[0]}
            </div>
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-[#4A1D1F]">{review.user}</h3>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className={`w-4 h-4 ${star <= review.rating ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ProductDetailsPage({ params }) {
  const [product, setProduct] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const productData = await getProductDetails(params.id)
      setProduct(productData)
      const relatedProductsData = await getRelatedProducts()
      setRelatedProducts(relatedProductsData)
    }
    fetchData()
  }, [params.id])

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center" dir="rtl">
        <div className="text-2xl text-[#4A1D1F]">جاري تحميل المنتج...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <ProductImageGallery images={product.images} />
            </div>
            <div className="md:w-1/2">
              <ProductInfo product={product} />
            </div>
          </div>
          <ProductFeatures features={product.features} />
        </div>
        <ReviewSection reviews={product.reviews} />
      </main>
      <Suspense fallback={<div>جاري تحميل المنتجات ذات الصلة...</div>}>
        <RelatedProducts products={relatedProducts} />
      </Suspense>
      <Footer />
    </div>
  )
}

