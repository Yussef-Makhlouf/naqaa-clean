'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "ما هي مواعيد العمل لديكم؟",
    answer: "نعمل على مدار الساعة طوال أيام الأسبوع لخدمتكم في أي وقت يناسبكم"
  },
  {
    question: "هل تستخدمون مواد تنظيف آمنة؟",
    answer: "نعم، نستخدم فقط مواد تنظيف معتمدة وآمنة للأطفال والحيوانات الأليفة"
  },
  {
    question: "كم تستغرق عملية التنظيف؟",
    answer: "تختلف المدة حسب حجم المكان ونوع الخدمة، لكن معظم الخدمات تكتمل خلال 2-4 ساعات"
  },
  {
    question: "هل تقدمون ضمان على خدماتكم؟",
    answer: "نعم، نقدم ضمان رضا العملاء ونعيد التنظيف مجاناً إذا لم تكونوا راضين عن النتيجة"
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">الأسئلة الشائعة</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-right flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-blue-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
