'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, Facebook, Instagram, MessageCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState('info')

  const contactInfo = [
    { icon: Mail, label: 'البريد الإلكتروني', value: 'info@katkoutbaby.com', href: 'mailto:info@katkoutbaby.com' },
    { icon: Phone, label: 'رقم الهاتف', value: '+966 12 345 6789', href: 'tel:+966123456789' },
    { icon: MessageCircle, label: 'واتساب', value: '+966 12 345 6789', href: 'https://wa.me/966123456789' },
  ]

  const socialMedia = [
    { icon: Facebook, label: 'فيسبوك', link: 'https://www.facebook.com/katkoutbaby' },
    { icon: Instagram, label: 'انستغرام', link: 'https://www.instagram.com/katkoutbaby' },
  ]

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        
        <div className="bg-white rounded-lg shadow">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-6 md:p-12">
              <h2 className="text-2xl font-semibold text-[#4A1D1F] mb-6">نحن هنا لمساعدتك</h2>
              <p className="text-gray-600 mb-8">
                لديك أسئلة أو استفسارات؟ لا تتردد في التواصل معنا. فريقنا جاهز لمساعدتك والرد على جميع استفساراتك.
              </p>

              <div className="mb-8">
                <div className="flex space-x-4 mb-4 flex-row-reverse justify-end">
                  <button
                    className={`px-4 py-2 rounded-full ${activeTab === 'social' ? 'bg-[#FF9D1B] text-white' : 'bg-gray-200 text-gray-700'}`}
                    onClick={() => setActiveTab('social')}
                  >
                    وسائل التواصل الاجتماعي
                  </button>
                  <button
                    className={`px-4 py-2 rounded-full ${activeTab === 'info' ? 'bg-[#FF9D1B] text-white' : 'bg-gray-200 text-gray-700'}`}
                    onClick={() => setActiveTab('info')}
                  >
                    معلومات الاتصال
                  </button>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {activeTab === 'info' && (
                    <ul className="space-y-4">
                      {contactInfo.map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center space-x-4 flex-row-reverse justify-end"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div>
                            <h3 className="font-semibold text-[#4A1D1F]">{item.label}</h3>
                            <a href={item.href} className="text-[#FF9D1B] hover:underline">{item.value}</a>
                          </div>
                          <div className="bg-[#FF9D1B] rounded-full p-2">
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  {activeTab === 'social' && (
                    <ul className="space-y-4">
                      {socialMedia.map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center space-x-4 flex-row-reverse justify-end"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div>
                            <h3 className="font-semibold text-[#4A1D1F]">{item.label}</h3>
                            <Link href={item.link} target="_blank" rel="noopener noreferrer" className="text-[#FF9D1B] hover:underline">
                              زيارة الصفحة
                            </Link>
                          </div>

                          <div className="bg-[#FF9D1B] rounded-full p-2">
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold text-[#4A1D1F] mb-2">ساعات العمل</h3>
                <p className="text-gray-600">الأحد - الخميس: 9:00 صباحاً - 9:00 مساءً</p>
                <p className="text-gray-600">الجمعة - السبت: 10:00 صباحاً - 10:00 مساءً</p>
              </div>
            </div>

            <div className="md:w-1/2 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.0307647491745!2d39.173236375491726!3d21.5827774731641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0x36b9699a4346c95!2sRed%20Sea%20Mall!5e0!3m2!1sen!2ssa!4v1685123456789!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <motion.div
          className="mt-12 bg-[#FF9D1B]/10 p-8 rounded-lg text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#4A1D1F]">هل لديك أي أسئلة أخرى؟</h2>
          <p className="mb-6 text-gray-700">نحن هنا للإجابة على جميع استفساراتك. لا تتردد في التواصل معنا في أي وقت.</p>
          <Link
            href="mailto:info@katkoutbaby.com"
            className="bg-[#4A1D1F] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#4A1D1F]/80 transition duration-300"
          >
            راسلنا الآن
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

export default ContactPage

