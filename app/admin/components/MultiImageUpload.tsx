'use client'

import { useState, useRef } from 'react'
import { Upload, X } from 'lucide-react'
import Image from 'next/image'

interface MultiImageUploadProps {
  onImagesUpload: (files: File[]) => void
  initialImages?: string[]
}

const MultiImageUpload: React.FC<MultiImageUploadProps> = ({ onImagesUpload, initialImages = [] }) => {
  const [previews, setPreviews] = useState<string[]>(initialImages)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    handleFiles(files)
  }

  const handleFiles = (files: File[]) => {
    const newPreviews = files.map(file => URL.createObjectURL(file))
    setPreviews(prev => [...prev, ...newPreviews])
    onImagesUpload(files)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const files = Array.from(e.dataTransfer.files)
    handleFiles(files)
  }

  const removeImage = (index: number) => {
    setPreviews(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div
      className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-[#FF9D1B] transition-colors duration-300"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        multiple
        className="hidden"
      />
      <div className="grid grid-cols-3 gap-4 mb-4">
        {previews.map((preview, index) => (
          <div key={index} className="relative">
            <Image
              src={preview}
              alt={`Product preview ${index + 1}`}
              width={100}
              height={100}
              className="rounded-lg object-cover"
            />
            <button
              onClick={(e) => {
                e.stopPropagation()
                removeImage(index)
              }}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 m-1 hover:bg-red-600 transition-colors duration-300"
            >
              <X size={12} />
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center py-4">
        <Upload className="w-12 h-12 text-gray-400 mb-2" />
        <p className="text-gray-500">اسحب وأفلت الصور هنا أو انقر لاختيار صور متعددة</p>
      </div>
    </div>
  )
}

export default MultiImageUpload

