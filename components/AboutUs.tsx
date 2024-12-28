import { FaUsers, FaAward, FaClock } from 'react-icons/fa'
import Image from 'next/image'

export default function AboutUs() {
  const features = [
    {
      icon: <FaUsers size={32} color="#16a34a" />,
      title: "فريق محترف",
      description: "فريق مدرب على أعلى مستوى من الكفاءة والاحترافية"
    },
    {
      icon: <FaAward size={32} color="#16a34a" />,
      title: "خدمة متميزة",
      description: "نقدم خدمات تنظيف عالية الجودة بأسعار تنافسية"
    },
    {
      icon: <FaClock size={32} color="#16a34a" />,
      title: "خدمة 24/7",
      description: "متوفرون على مدار الساعة لتلبية احتياجاتكم"
    }
  ]

  return (
    <section id="about-us" className="py-20 bg-gradient-to-r from-white to-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side - Image */}
          <div className="lg:w-1/2 relative">
              <Image 
                src="/ar color.avif" 
                alt="Cleaning Team" 
                width={500}
                height={300}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-4 rounded-lg">
                <p className="font-bold text-2xl">10+</p>
                <p className="text-sm">سنوات خبرة</p>
              </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-right">من نحن</h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              نحن شركة تنظيف محترفة تقدم خدمات تنظيف عالية الجودة للمنازل والمكاتب والمباني التجارية. فريقنا مدرب بشكل جيد ويستخدم أحدث التقنيات والمعدات لضمان تقديم أفضل النتائج لعملائنا.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-gray-700">
              نحن ملتزمون بتقديم خدمة ممتازة ورضا العملاء هو أولويتنا القصوى.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8 text-center lg:text-right">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
                تواصل معنا
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}