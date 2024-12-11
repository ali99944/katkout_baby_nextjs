'use client'

import { useState, useRef } from 'react'
import { Upload, X } from 'lucide-react'
import Image from 'next/image'

interface ImageUploadProps {
  onImageUpload: (file: File) => void
  initialImage?: string
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload, initialImage }) => {
  const [preview, setPreview] = useState<string | null>(initialImage || null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      onImageUpload(file)
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const file = e.dataTransfer.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      onImageUpload(file)
    }
  }

  const removeImage = () => {
    setPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
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
        className="hidden"
      />
      {preview ? (
        <div className="relative">
          <Image
            src={preview}
            alt="Product preview"
            width={200}
            height={200}
            className="mx-auto rounded-lg object-cover"
          />
          <button
            onClick={(e) => {
              e.stopPropagation()
              removeImage()
            }}
            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 m-1 hover:bg-red-600 transition-colors duration-300"
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-8">
          <Upload className="w-12 h-12 text-gray-400 mb-2" />
          <p className="text-gray-500">اسحب وأفلت الصورة هنا أو انقر للاختيار</p>
        </div>
      )}
    </div>
  )
}

export default ImageUpload

