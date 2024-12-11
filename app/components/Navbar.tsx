import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 flex-row-reverse">
            <span className="text-2xl font-bold text-[#4A1D1F]">كتكوت بيبي</span>
            <Image src="/images/logo-nobg.png" alt="Katkout Baby Logo" width={50} height={50} />
          </Link>
          <div className="hidden md:flex space-x-8 flex-row-reverse">
            <Link href="/contact" className="text-[#4A1D1F] hover:text-[#FF9D1B]">اتصل بنا</Link>
            <Link href="/about" className="text-[#4A1D1F] hover:text-[#FF9D1B]">من نحن</Link>
            <Link href="/categories" className="text-[#4A1D1F] hover:text-[#FF9D1B]">الفئات</Link>
            <Link href="/products" className="text-[#4A1D1F] hover:text-[#FF9D1B]">المنتجات</Link>
            <Link href="/" className="text-[#4A1D1F] hover:text-[#FF9D1B]">الرئيسية</Link>
          </div>
          <div className="flex items-center space-x-4 flex-row-reverse">
            <button className="text-[#4A1D1F]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-[#4A1D1F]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

