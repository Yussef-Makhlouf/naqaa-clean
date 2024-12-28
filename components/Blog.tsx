import Image from "next/image"
const blogPosts = [
    {
      title: "أفضل طرق تنظيف السجاد",
      excerpt: "تعرف على أحدث الطرق المهنية لتنظيف السجاد والمحافظة عليه",
      image: "/cover.avif",
      date: "2024-01-15",
      category: "نصائح تنظيف",
      link: "https://mawdoo3.com/%D8%A3%D9%81%D8%B6%D9%84_%D8%B7%D8%B1%D9%8A%D9%82%D8%A9_%D9%84%D8%BA%D8%B3%D9%8A%D9%84_%D8%A7%D9%84%D8%B3%D8%AC%D8%A7%D8%AF"
    },
    {
      title: "كيفية تعقيم المنزل",
      excerpt: "خطوات بسيطة للحفاظ على منزل صحي ونظيف",
      image: "/cover.avif",
      date: "2024-01-10",
      category: "صحة وسلامة",
      link: "https://www.webteb.com/articles/%D8%AA%D8%B7%D9%87%D9%8A%D8%B1-%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84-%D9%85%D9%86-%D8%A7%D9%84%D8%AC%D8%B1%D8%A7%D8%AB%D9%8A%D9%85-%D8%A8%D8%B9%D8%AF-%D8%A7%D9%84%D9%85%D8%B1%D8%B6_20405"
    },
    {
      title: "تنظيف المكاتب التجارية",
      excerpt: "دليلك الشامل لتنظيف وتعقيم المكاتب بشكل احترافي",
      image: "/cover.avif",
      date: "2024-01-05",
      category: "خدمات تجارية",
      link: "https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%AA%D9%86%D8%B8%D9%8A%D9%81"
    }
  ]
  
  export default function Blog() {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">المدونة</h2>
            <p className="text-gray-600">آخر المقالات والنصائح في عالم التنظيف</p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                    width={400}
                    height={300}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-green-600">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a 
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-green-600 font-semibold hover:text-green-800 transition-colors duration-300"
                  >
                    اقرأ المزيد
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
  }
  