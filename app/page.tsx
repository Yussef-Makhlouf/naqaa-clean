import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      
      <Pricing />
      <Blog />
      <FAQ />
      {/* <ContactForm /> */}
      <Footer />
    </main>
  )
}

