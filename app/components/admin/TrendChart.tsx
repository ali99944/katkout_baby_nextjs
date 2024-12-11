'use client'

import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const TrendChart = () => {
  const data = {
    labels: ['فستان أطفال', 'طقم أطفال', 'بيجامة أطفال', 'جاكيت أطفال', 'حذاء أطفال'],
    datasets: [
      {
        label: 'المبيعات',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(255, 157, 27, 0.5)',
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'اتجاهات المنتجات',
      },
    },
  }

  return <Bar options={options} data={data} />
}

export default TrendChart

