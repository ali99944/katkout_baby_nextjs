'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, ShoppingBag, Users, BarChart2, Settings, LogOut, ChevronLeft, ChevronRight } from 'lucide-react'

const Sidebar = () => {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const menuItems = [
    { icon: Home, label: 'لوحة التحكم', href: '/admin' },
    { icon: ShoppingBag, label: 'المنتجات', href: '/admin/products' },
    { icon: Users, label: 'العملاء', href: '/admin/customers' },
    { icon: BarChart2, label: 'التقارير', href: '/admin/reports' },
    { icon: Settings, label: 'الإعدادات', href: '/admin/settings' },
  ]

  return (
    <aside className={`bg-[#4A1D1F] text-white ${isCollapsed ? 'w-20' : 'w-64'} min-h-screen p-4 transition-all duration-300 ease-in-out`}>
      <div className="flex items-center justify-between mb-8">
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'}`}>
          {!isCollapsed && <h1 className="text-xl font-bold mr-2">كتكوت بيبي</h1>}
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-white hover:text-[#FF9D1B] transition-colors duration-200"
        >
          {isCollapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
        </button>
      </div>
      
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                <span className={`flex items-center p-2 rounded-lg ${pathname === item.href ? 'bg-[#FF9D1B] text-white' : 'hover:bg-[#FF9D1B]/10'}`}>
                  <item.icon className={`w-5 h-5 ${isCollapsed ? 'mx-auto' : 'ml-2'}`} />
                  {!isCollapsed && <span className="mr-2">{item.label}</span>}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto pt-4 border-t border-[#FF9D1B]/20">
        <button className={`flex items-center p-2 w-full text-white hover:bg-[#FF9D1B]/10 rounded-lg ${isCollapsed ? 'justify-center' : 'justify-start'}`}>
          <LogOut className={`w-5 h-5 ${isCollapsed ? 'mx-auto' : 'ml-2'}`} />
          {!isCollapsed && <span className="mr-2">تسجيل الخروج</span>}
        </button>
      </div>
    </aside>
  )
}

export default Sidebar

