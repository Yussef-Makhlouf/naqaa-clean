import './globals.css'
import { Tajawal } from 'next/font/google'

const tajawal = Tajawal({ subsets: ['arabic'], weight: ['400', '700'] })

export const metadata = {
  title: 'شركة  نقاء كلين - خدمات تنظيف عصرية',
  description: 'نقدم خدمات تنظيف مبتكرة وعالية الجودة للمنازل والشركات. تجربة تنظيف فريدة مع ضمان رضا العملاء 100%.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>{children}</body>
    </html>
  )
}

