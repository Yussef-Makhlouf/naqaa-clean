import { Shield, Clock, Award, Heart } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: "خدمة موثوقة",
    description: "فريق محترف ومدرب على أعلى مستوى"
  },
  {
    icon: Clock,
    title: "سرعة في التنفيذ",
    description: "نلتزم بالمواعيد ونحترم وقت عملائنا"
  },
  {
    icon: Award,
    title: "جودة عالية",
    description: "نستخدم أحدث المعدات وأفضل مواد التنظيف"
  },
  {
    icon: Heart,
    title: "رضا العملاء",
    description: "رضا عملائنا هو أولويتنا القصوى"
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">لماذا تختارنا؟</h2>
          <p className="text-gray-600">نحن نتميز بالخبرة والاحترافية في تقديم خدمات التنظيف</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="text-center p-6 hover:transform hover:scale-105 transition-transform duration-300">
                <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
