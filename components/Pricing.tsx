'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'أساسي',
    monthlyPrice: 199,
    yearlyPrice: 2149,
    features: ['تنظيف أسبوعي', 'تنظيف الأرضيات', 'إزالة الغبار', 'تنظيف الحمامات'],
  },
  {
    name: 'احترافي',
    monthlyPrice: 399,
    yearlyPrice: 4309,
    features: ['كل ما في الأساسي', 'تنظيف النوافذ', 'تنظيف المطبخ', 'كي الملابس'],
  },
  {
    name: 'متميز',
    monthlyPrice: 599,
    yearlyPrice: 6469,
    features: ['كل ما في الاحترافي', 'تنظيف السجاد', 'تلميع الأثاث', 'تعقيم شامل'],
  },
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">باقات الأسعار</h2>
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="flex bg-[#ecf0f1] p-1 rounded-full">
              <button
                className={`px-4 py-2 rounded-full ${!isYearly ? 'bg-[#16a34a] text-white' : 'text-[#2c3e50]'}`}
                onClick={() => setIsYearly(false)}
              >
                شهري
              </button>
              <button
                className={`px-4 py-2 rounded-full ${isYearly ? 'bg-[#16a34a] text-white' : 'text-[#2c3e50]'}`}
                onClick={() => setIsYearly(true)}
              >
                سنوي
              </button>
            </div>
            {isYearly && (
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#e74c3c] text-white px-2 py-1 rounded text-sm">وفر 15%</span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="card relative">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-6 text-[#16a34a]">
                  {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  <span className="text-sm font-normal text-[#7f8c8d]"> ريال / {isYearly ? 'سنويًا' : 'شهريًا'}</span>
                </p>
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-[#2ecc71] ml-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn-primary w-full">اختر الباقة</button>
              </div>
              {index === 1 && (
                <div className="absolute top-0 right-0 bg-[#e74c3c] text-white px-4 py-2 rounded-tr-lg rounded-bl-lg">
                  الأكثر شعبية
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

