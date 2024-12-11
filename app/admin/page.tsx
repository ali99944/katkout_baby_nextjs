import { ShoppingBag, Users, DollarSign, TrendingUp } from 'lucide-react'
import StatCard from '../components/admin/StatCard'
import AnalyticsChart from '../components/admin/AnalyticsChart'
import TrendChart from '../components/admin/TrendChart'

const recentOrders = [
  { id: '1', customer: 'أحمد محمد', date: '2024-12-10', total: '199 ر.س', status: 'مكتمل' },
  { id: '2', customer: 'سارة أحمد', date: '2024-12-09', total: '350 ر.س', status: 'قيد التنفيذ' },
  { id: '3', customer: 'محمد علي', date: '2024-12-08', total: '120 ر.س', status: 'مكتمل' },
]

const popularProducts = [
  { id: '1', name: 'فستان أطفال مزركش', sales: 120, stock: 50 },
  { id: '2', name: 'طقم أطفال قطن', sales: 95, stock: 30 },
  { id: '3', name: 'بيجامة أطفال', sales: 80, stock: 45 },
]

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <StatCard title="إجمالي المبيعات" value="15,350 ر.س" icon={DollarSign} />
        <StatCard title="الطلبات" value="234" icon={ShoppingBag} />
        <StatCard title="العملاء الجدد" value="54" icon={Users} />
        <StatCard title="معدل التحويل" value="3.6%" icon={TrendingUp} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="bg-white rounded-lg shadow p-4">
          <AnalyticsChart />
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <TrendChart />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-2/3 bg-white rounded-lg shadow">
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-[#4A1D1F]">الطلبات الأخيرة</h2>
          </div>
          <div className="p-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">رقم الطلب</th>
                    <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">العميل</th>
                    <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">التاريخ</th>
                    <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">المبلغ</th>
                    <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الحالة</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentOrders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-4 py-3 text-sm text-gray-900">#{order.id}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{order.customer}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{order.date}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{order.total}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          order.status === 'مكتمل' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow">
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-[#4A1D1F]">المنتجات الأكثر مبيعًا</h2>
          </div>
          <div className="p-4">
            <ul className="space-y-4">
              {popularProducts.map((product) => (
                <li key={product.id} className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-[#4A1D1F]">{product.name}</h3>
                    <p className="text-xs text-gray-500">{product.sales} مبيعات</p>
                  </div>
                  <span className="text-sm font-medium text-[#FF9D1B]">{product.stock} في المخزون</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

