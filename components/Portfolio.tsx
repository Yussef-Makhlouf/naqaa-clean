import Image from "next/image";

const portfolioItems = [
  { title: "تنظيف فيلا فاخرة", image: "/Artboard 1.avif" },
  { title: "تعقيم مكتب شركة", image: "/Artboard 2.avif" },
  {
    title: "تنظيف واجهة زجاجية",
    image: "/Artboard 3.avif",
  },
  { title: "تنظيف سجاد فندق", image: "/Artboard 6.avif" },
  { title: "تنظيف بعد حفل", image: "/Artboard 3-1.avif" },
  { title: "تنظيف مطعم", image: "/Artboard 5.avif" },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-r from-[#ecf0f1] to-[#bdc3c7]"
    >
      <div className="container mx-auto px-6">
        <h2 className="section-title text-4xl font-bold text-center mb-12">
          معرض أعمالنا
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
