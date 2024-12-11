'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import CreateCategoryModal from '../components/CreateCategoryModal'
import DeleteModal from '../components/DeleteModal'
import EditCategoryModal from '../components/EditCategoryModal'

// Dummy data for categories
const initialCategories = [
  { id: 1, name: 'ملابس الأولاد', productCount: 25 },
  { id: 2, name: 'ملابس البنات', productCount: 30 },
  { id: 3, name: 'ملابس المواليد', productCount: 15 },
  { id: 4, name: 'إكسسوارات', productCount: 20 },
]

export default function CategoriesPage() {
  const [categories, setCategories] = useState(initialCategories)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<{ id: number; name: string } | null>(null)

  const handleCreateCategory = (newCategory: { name: string }) => {
    const newId = Math.max(...categories.map(c => c.id)) + 1
    setCategories([...categories, { ...newCategory, id: newId, productCount: 0 }])
    setIsCreateModalOpen(false)
  }

  const handleEditCategory = (editedCategory: { id: number; name: string }) => {
    setCategories(categories.map(category => 
      category.id === editedCategory.id ? { ...category, name: editedCategory.name } : category
    ))
    setIsEditModalOpen(false)
  }

  const handleDeleteCategory = () => {
    if (selectedCategory) {
      setCategories(categories.filter(category => category.id !== selectedCategory.id))
    }
    setIsDeleteModalOpen(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#4A1D1F]">إدارة الفئات</h1>
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="bg-[#FF9D1B] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[#4A1D1F] transition-colors duration-300"
        >
          <Plus className="ml-2" size={20} />
          إضافة فئة جديدة
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                الرقم التعريفي
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                اسم الفئة
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                عدد المنتجات
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                الإجراءات
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {category.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {category.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {category.productCount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button 
                    className="text-[#FF9D1B] hover:text-[#4A1D1F] ml-4"
                    onClick={() => {
                      setSelectedCategory(category)
                      setIsEditModalOpen(true)
                    }}
                  >
                    تعديل
                  </button>
                  <button 
                    className="text-red-600 hover:text-red-900"
                    onClick={() => {
                      setSelectedCategory(category)
                      setIsDeleteModalOpen(true)
                    }}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CreateCategoryModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreateCategory={handleCreateCategory}
      />

      <EditCategoryModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onEditCategory={handleEditCategory}
        category={selectedCategory}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteCategory}
        message="هل أنت متأكد أنك تريد حذف هذه الفئة؟"
        itemName={selectedCategory?.name}
      />
    </div>
  )
}

