'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OrderConfirmationModal from '../components/OrderConfirmationModal'
import DeleteConfirmationModal from '../components/DeleteConfirmationModal'
import SuccessFeedback from '../components/SuccessFeedback'

// Dummy data for cart items
const initialCartItems = [
  {
    id: 1,
    name: "فستان زهري للبنات",
    price: 129,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    quantity: 1,
  },
  {
    id: 2,
    name: "بدلة رسمية للأولاد",
    price: 199,
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    quantity: 2,
  },
  {
    id: 3,
    name: "طقم مولود جديد",
    price: 89,
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    quantity: 1,
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [couponCode] = useState('')
  const [discount, setDiscount] = useState(0)
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false)
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const [itemToDelete, setItemToDelete] = useState(null)
  const [showSuccessFeedback, setShowSuccessFeedback] = useState(false)
  const [clientDetails, setClientDetails] = useState({
    name: '',
    address: '',
    phone: ''
  })

  const router = useRouter()

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setItemToDelete(id)
    setShowDeleteConfirmation(true)
  }

  const confirmRemoveItem = () => {
    setCartItems(items => items.filter(item => item.id !== itemToDelete))
    setShowDeleteConfirmation(false)
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 300 ? 0 : 30
  const total = subtotal + shipping - discount

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'خصم10') {
      setDiscount(subtotal * 0.1)
    } else {
      setDiscount(0)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setClientDetails(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmitOrder = () => {
    setShowOrderConfirmation(true)
  }

  const confirmOrder = () => {
    setShowOrderConfirmation(false)
    setShowSuccessFeedback(true)
    setTimeout(() => {
      setShowSuccessFeedback(false)
      router.push('/')
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#4A1D1F] mb-8 text-center">سلة التسوق</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 mb-4">سلة التسوق فارغة</p>
            <Link href="/products" className="bg-[#FF9D1B] text-white px-6 py-2 rounded-lg text-lg font-semibold transition-colors duration-300 hover:bg-[#4A1D1F]">
              تسوق الآن
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow mb-4">
                  <div className="relative w-24 h-24 ml-4">
                    <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" className="rounded-md" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-[#4A1D1F]">{item.name}</h3>
                    <p className="text-[#FF9D1B] font-bold">{item.price} ر.س</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 bg-gray-200 rounded-r-md text-[#4A1D1F]"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 rounded-l-md text-[#4A1D1F]"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="mr-4 text-red-500 hover:text-red-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <div className="lg:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-xl font-semibold text-[#4A1D1F] mb-4">بيانات العميل</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">الاسم</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={clientDetails.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9D1B]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">العنوان</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={clientDetails.address}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9D1B]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={clientDetails.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9D1B]"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-[#4A1D1F] mb-4">ملخص الطلب</h2>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>المجموع الفرعي:</span>
                    <span>{subtotal} ر.س</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الشحن:</span>
                    <span>{shipping === 0 ? 'مجاني' : `${shipping} ر.س`}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>الخصم:</span>
                      <span>- {discount} ر.س</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-lg">
                    <span>الإجمالي:</span>
                    <span>{total} ر.س</span>
                  </div>
                </div>
                <button 
                  onClick={handleSubmitOrder}
                  className="w-full bg-[#FF9D1B] text-white py-3 rounded-lg text-lg font-semibold transition-colors duration-300 hover:bg-opacity-80"
                >
                  إتمام الشراء
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
      <OrderConfirmationModal
        isOpen={showOrderConfirmation}
        onClose={() => setShowOrderConfirmation(false)}
        onConfirm={confirmOrder}
        orderDetails={{ ...clientDetails, total }}
      />
      <DeleteConfirmationModal
        isOpen={showDeleteConfirmation}
        onClose={() => setShowDeleteConfirmation(false)}
        onConfirm={confirmRemoveItem}
      />
      <SuccessFeedback
        isOpen={showSuccessFeedback}
        message="تم تأكيد طلبك بنجاح! شكراً لتسوقك معنا."
      />
    </div>
  )
}

