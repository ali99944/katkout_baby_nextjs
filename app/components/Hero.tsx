import Link from 'next/link'
import Image from 'next/image'
import * as React from 'react'

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        alt="Happy children"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#4A1D1F]/60"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            أزياء الأطفال بأناقة لا مثيل لها
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            اكتشف تشكيلتنا الواسعة من ملابس الأطفال العصرية والمريحة. جودة عالية وتصاميم مميزة تناسب أطفالك
          </p>
          <Link 
            href="/products"
            className="bg-[#FF9D1B] text-white px-8 py-3 rounded-lg text-lg font-semibold shadow"
          >
            تسوق الآن
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero

