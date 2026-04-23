import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Products from '@/components/Products';
import HowItWorks from '@/components/HowItWorks';
import Author from '@/components/Author';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import StitchBackground from '@/components/StitchBackground';
import CustomCursor from '@/components/CustomCursor';
import ScrollReveal from '@/components/ScrollReveal';

export default function Page() {
  return (
    <>
      <CustomCursor />
      <ScrollReveal />
      <StitchBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Products />
        <HowItWorks />
        <Author />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
