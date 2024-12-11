'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import ImageUpload from './ImageUpload'
import MultiImageUpload from './MultiImageUpload'

interface Product {
  name: string
  price: number
  description: string
  category: string
  sizes: string[]
  features: string[]
  mainImage: string
  additionalImages: string[]
}

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (product: Product) => void
  product?: Product
  categories: { id: number; name: string }[]
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, onSave, product, categories }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    sizes: [''],
    features: [''],
  })
  const [mainImage, setMainImage] = useState<File | null>(null)
  const [additionalImages, setAdditionalImages] = useState<File[]>([])

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price.toString(),
        description: product.description,
        category: product.category,
        sizes: product.sizes,
        features: product.features,
      })
    } else {
      setFormData({
        name: '',
        price: '',
        description: '',
        category: '',
        sizes: [''],
        features: [''],
      })
    }
    setMainImage(null)
    setAdditionalImages([])
  }, [product])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleArrayInputChange = (index: number, value: string, field: 'sizes' | 'features') => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }))
  }

  const addArrayItem = (field: 'sizes' | 'features') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], ''],
    }))
  }

  const removeArrayItem = (index: number, field: 'sizes' | 'features') => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const productData = {
      ...formData,
      price: parseFloat(formData.price),
      mainImage: mainImage,
      additionalImages: additionalImages,
    }
    onSave(productData as unknown as Product)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#4A1D1F]">{product ? 'تعديل المنتج' : 'إضافة منتج جديد'}</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">اسم المنتج</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9D1B]"
                  required
                />
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">السعر</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9D1B]"
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">الوصف</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9D1B]"
                  required
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">الفئة</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9D1B]"
                  required
                >
                  <option value="">اختر الفئة</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.name}>{category.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">المقاسات</label>
                {formData.sizes.map((size, index) => (
                  <div key={index} className="flex mb-2">
                    <input
                      type="text"
                      value={size}
                      onChange={(e) => handleArrayInputChange(index, e.target.value, 'sizes')}
                      className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9D1B]"
                    />
                    <button
                      type="button"
                      onClick={() => removeArrayItem(index, 'sizes')}
                      className="ml-2 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      حذف
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem('sizes')}
                  className="px-3 py-2 bg-[#FF9D1B] text-white rounded-md hover:bg-[#4A1D1F]"
                >
                  إضافة مقاس
                </button>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">المميزات</label>
                {formData.features.map((feature, index) => (
                  <div key={index} className="flex mb-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => handleArrayInputChange(index, e.target.value, 'features')}
                      className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9D1B]"
                    />
                    <button
                      type="button"
                      onClick={() => removeArrayItem(index, 'features')}
                      className="ml-2 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      حذف
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem('features')}
                  className="px-3 py-2 bg-[#FF9D1B] text-white rounded-md hover:bg-[#4A1D1F]"
                >
                  إضافة ميزة
                </button>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">الصورة الرئيسية</label>
                <ImageUpload onImageUpload={(file) => setMainImage(file)} initialImage={product?.additionalImages[0]} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">صور إضافية</label>
                <MultiImageUpload onImagesUpload={(files) => setAdditionalImages(files)} initialImages={product?.additionalImages.slice(1)} />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="ml-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-[#FF9D1B] rounded-md hover:bg-[#4A1D1F] focus:outline-none focus:ring-2 focus:ring-[#FF9D1B]"
                >
                  {product ? 'حفظ التغييرات' : 'إضافة المنتج'}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProductModal

