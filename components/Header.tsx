'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'الرئيسية', href: '#' },
  { name: 'خدماتنا', href: '#services' },
  { name: 'أعمالنا', href: '#portfolio' },
  { name: 'الأسعار', href: '#pricing' },
  { name: 'تواصل معنا', href: '#contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className={`text-2xl font-bold ${isScrolled ? 'text-[#3498db]' : 'text-white'}`}>شركة نقاء كلين المبتكرة</div>
          <div className="hidden md:flex space-x-6 space-x-reverse">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className={`${isScrolled ? 'text-[#2c3e50]' : 'text-white'} hover:text-[#3498db] transition duration-300`}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolled ? 'text-[#2c3e50]' : 'text-white'}`}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-6 py-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="block py-2 text-[#2c3e50] hover:text-[#3498db] transition duration-300">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

