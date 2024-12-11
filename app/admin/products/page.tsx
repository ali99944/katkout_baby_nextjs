'use client'

import { useState, useEffect } from 'react'
import { Plus, Edit, Trash2 } from 'lucide-react'
import Image from 'next/image'
import DeleteModal from '../components/DeleteModal'
import ProductModal from '../components/ProductModal'

// Dummy data for products
const initialProducts = [
  { id: 1, name: "فستان زهري للبنات", price: 129, category: "بنات", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" },
  { id: 2, name: "بدلة رسمية للأولاد", price: 199, category: "أولاد", image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" },
  { id: 3, name: "طقم مولود جديد", price: 89, category: "مواليد", image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" },
]

// Dummy data for categories
const categories = [
  { id: 1, name: 'ملابس الأولاد' },
  { id: 2, name: 'ملابس البنات' },
  { id: 3, name: 'ملابس المواليد' },
  { id: 4, name: 'إكسسوارات' },
]

export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [productToDelete, setProductToDelete] = useState(null)

  const handleCreateProduct = (newProduct) => {
    const newId = Math.max(...products.map(p => p.id)) + 1
    setProducts([...products, { ...newProduct, id: newId }])
  }

  const handleEditProduct = (editedProduct) => {
    setProducts(products.map(product => 
      product.id === editedProduct.id ? { ...product, ...editedProduct } : product
    ))
  }

  const handleDeleteProduct = () => {
    if (productToDelete) {
      setProducts(products.filter(product => product.id !== productToDelete.id))
    }
    setIsDeleteModalOpen(false)
  }

  const openEditModal = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const openDeleteModal = (product) => {
    setProductToDelete(product)
    setIsDeleteModalOpen(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#4A1D1F]">إدارة المنتجات</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#FF9D1B] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[#4A1D1F] transition-colors duration-300"
        >
          <Plus className="ml-2" size={20} />
          إضافة منتج جديد
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                الصورة
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                اسم المنتج
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                السعر
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                الفئة
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                الإجراءات
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Image src={product.image} alt={product.name} width={50} height={50} className="rounded-full" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.price} ر.س
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button 
                    onClick={() => openEditModal(product)}
                    className="text-[#FF9D1B] hover:text-[#4A1D1F] ml-4"
                  >
                    <Edit size={18} />
                  </button>
                  <button 
                    onClick={() => openDeleteModal(product)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedProduct(null)
        }}
        onSave={(product) => {
          if (selectedProduct) {
            handleEditProduct(product)
          } else {
            handleCreateProduct(product)
          }
          setIsModalOpen(false)
          setSelectedProduct(null)
        }}
        product={selectedProduct}
        categories={categories}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteProduct}
        message="هل أنت متأكد أنك تريد حذف هذا المنتج؟"
        itemName={productToDelete?.name}
      />
    </div>
  )
}

