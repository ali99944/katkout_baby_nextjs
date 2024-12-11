import Sidebar from '../components/admin/Sidebar'
import Header from '../components/admin/Header'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-100" dir="rtl">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  )
}

