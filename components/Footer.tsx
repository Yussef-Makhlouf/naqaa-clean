import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">نقاء كلين</h3>
            <p className="text-gray-400 mb-4">خدمات تنظيف احترافية لمنزل أكثر نظافة وصحة</p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-blue-500">
                <Facebook />
              </Link>
              <Link href="https://instagram.com" className="hover:text-pink-500">
                <Instagram />
              </Link>
              <Link href="https://twitter.com" className="hover:text-blue-400">
                <Twitter />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link href="#about-us" className="text-gray-400 hover:text-white">من نحن</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white">خدماتنا</Link></li>
              <li><Link href="#blog" className="text-gray-400 hover:text-white">المدونة</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white">اتصل بنا</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">معلومات التواصل</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone className="ml-2" size={20} />
                <span>+966 50 000 0000</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="ml-2" size={20} />
                <span>info@naqaaclean.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="ml-2" size={20} />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">ساعات العمل</h3>
            <ul className="space-y-2 text-gray-400">
              <li>الأحد - الخميس: 8 صباحاً - 8 مساءً</li>
              <li>الجمعة: 2 مساءً - 8 مساءً</li>
              <li>السبت: 9 صباحاً - 6 مساءً</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 نقاء كلين. جميع الحقوق محفوظة</p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              تم التطوير بواسطة{' '}
              <a 
                href="https://fashne.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                فشني للتسويق الرقمي
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
