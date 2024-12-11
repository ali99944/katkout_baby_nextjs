import './globals.css'

export const metadata = {
  title: 'كتكوت - ملابس أطفال',
  description: 'متجر كتكوت - تسوق أجمل ملابس الأطفال',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}

