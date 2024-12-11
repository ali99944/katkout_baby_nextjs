'use client'

import { useState, useRef, useEffect } from 'react'
import { Bell, User, LogOut, Settings } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const notificationRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)

  const notifications = [
    { id: 1, message: 'طلب جديد #1234', time: 'منذ 5 دقائق' },
    { id: 2, message: 'اكتمل الطلب #1230', time: 'منذ 10 دقائق' },
    { id: 3, message: 'منتج جديد تمت إضافته', time: 'منذ 30 دقيقة' },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false)
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20
      } 
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95, 
      transition: { 
        duration: 0.2, 
        ease: 'easeInOut' 
      } 
    }
  }

  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h2 className="text-2xl font-bold text-[#4A1D1F]">كتكوت بيبي - لوحة التحكم</h2>
      <div className="flex items-center space-x-4">
        <div className="relative" ref={notificationRef}>
          <button
            className="relative p-2 text-gray-400 hover:text-[#FF9D1B] transition-colors duration-200"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
          <AnimatePresence>
            {showNotifications && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg py-1 z-10"
              >
                <div className="px-4 py-2 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-[#4A1D1F]">الإشعارات</h3>
                </div>
                {notifications.map((notification) => (
                  <div key={notification.id} className="px-4 py-3 hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                    <p className="text-sm text-gray-800">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                ))}
                <div className="px-4 py-2 border-t border-gray-200">
                  <button className="text-[#FF9D1B] text-sm font-medium hover:underline">
                    عرض كل الإشعارات
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative" ref={profileRef}>
          <button
            className="flex items-center space-x-2"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <span className="text-[#4A1D1F] font-medium">مدير النظام</span>
            <div className="w-10 h-10 rounded-full bg-[#FF9D1B] flex items-center justify-center">
              <User className="text-white" />
            </div>
          </button>
          <AnimatePresence>
            {showProfileMenu && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
              >
                <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  <User className="ml-2 h-4 w-4" />
                  الملف الشخصي
                </button>
                <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  <Settings className="ml-2 h-4 w-4" />
                  الإعدادات
                </button>
                <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                  <LogOut className="ml-2 h-4 w-4" />
                  تسجيل الخروج
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}

export default Header

