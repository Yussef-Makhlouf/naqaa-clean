import Image from 'next/image'

export default function Hero() {
  return (
    <section className="diagonal-bg pt-32 pb-40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">نظافة مبتكرة<br />لحياة أفضل</h1>
            <p className="text-xl mb-8">نقدم حلول تنظيف متطورة تجمع بين التكنولوجيا والخبرة لمنحك بيئة نظيفة وصحية</p>
            <a href="#contact" className="btn-primary text-lg">احصل على عرض مجاني</a>
          </div>
          <div className="relative">
            <Image 
              src="/ar white.avif" 
              alt="تنظيف احترافي" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-3xl font-bold text-[#3498db]">100%</p>
              <p className="text-sm text-[#2c3e50]">رضا العملاء</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

