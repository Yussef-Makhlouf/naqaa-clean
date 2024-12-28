import { Sparkles, Home, Building, Brush, Droplet, Shield, Recycle } from 'lucide-react'

const services = [
  { 
    name: 'تنظيف المنازل', 
    description: 'خدمة شاملة لتنظيف كل ركن في منزلك', 
    icon: Home,
    features: ['تنظيف الغرف', 'تلميع الأرضيات', 'تنظيف المطبخ', 'تعقيم الحمامات']
  },
  { 
    name: 'تنظيف المكاتب', 
    description: 'حلول تنظيف مخصصة للشركات والمؤسسات', 
    icon: Building,
    features: ['تنظيف المكاتب', 'تنظيف قاعات الاجتماعات', 'تنظيف المداخل', 'تعقيم المساحات المشتركة']
  },
  { 
    name: 'تنظيف السجاد', 
    description: 'تنظيف عميق وإزالة البقع من جميع أنواع السجاد', 
    icon: Brush,
    features: ['غسيل عميق', 'إزالة البقع', 'تعطير', 'تجفيف سريع']
  },
  { 
    name: 'تنظيف النوافذ', 
    description: 'تلميع النوافذ والواجهات الزجاجية بدقة عالية', 
    icon: Droplet,
    features: ['تنظيف زجاج', 'تلميع إطارات', 'تنظيف الشرفات', 'معالجة خاصة']
  },
  { 
    name: 'التعقيم الشامل', 
    description: 'خدمات تعقيم متقدمة للحماية من الجراثيم', 
    icon: Shield,
    features: ['تعقيم كامل', 'رش مبيدات', 'إزالة الروائح', 'حماية صحية']
  },
  { 
    name: 'تنظيف صديق للبيئة', 
    description: 'استخدام منتجات ومواد تنظيف صديقة للبيئة', 
    icon: Recycle,
    features: ['مواد عضوية', 'منتجات آمنة', 'تنظيف مستدام', 'حماية البيئة']
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">خدماتنا المتميزة</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">نقدم مجموعة متكاملة من خدمات التنظيف الاحترافية لتلبية جميع احتياجاتكم</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <Sparkles className="w-5 h-5 text-green-500 ml-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-gray-100 p-4 bg-gray-50">
                  <button className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300">
                    احجز الخدمة
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}