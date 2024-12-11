import { motion, AnimatePresence } from 'framer-motion'

interface OrderConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  orderDetails: {
    name: string
    address: string
    phone: string
    total: number
  }
}

const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({ isOpen, onClose, onConfirm, orderDetails }) => {
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
            className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-[#4A1D1F] mb-4">تأكيد الطلب</h2>
            <div className="mb-4">
              <p><strong>الاسم:</strong> {orderDetails.name}</p>
              <p><strong>العنوان:</strong> {orderDetails.address}</p>
              <p><strong>رقم الهاتف:</strong> {orderDetails.phone}</p>
              <p><strong>الإجمالي:</strong> {orderDetails.total} ر.س</p>
            </div>
            <p className="mb-4">هل أنت متأكد من رغبتك في تأكيد هذا الطلب؟</p>
            <div className="flex flex-row-reverse space-x-4">
            <button
                onClick={onConfirm}
                className="px-4 py-2 bg-[#FF9D1B] text-white rounded-md hover:bg-[#4A1D1F] transition-colors duration-300"
              >
                تأكيد الطلب
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-300"
              >
                إلغاء
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default OrderConfirmationModal

