import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string
  icon: LucideIcon
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center">
      <div className="bg-[#FF9D1B]/10 p-3 rounded-full mr-4">
        <Icon className="w-6 h-6 text-[#FF9D1B]" />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className="text-xl font-bold text-[#4A1D1F]">{value}</div>
      </div>
    </div>
  )
}

export default StatCard

