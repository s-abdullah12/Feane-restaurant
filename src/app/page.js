import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import FeaturedDishes from '@/components/FeaturedDishes';
import Menu from '@/components/Menu';
import About from '@/components/About';
import WhyFeane from '@/components/WhyFeane';
import AIDiningAssistant from '@/components/AIDiningAssistant';
import Testimonials from '@/components/Testimonials';
import ReservationForm from '@/components/ReservationForm';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedDishes />
      <Menu />
      <About />
      <WhyFeane />
      <AIDiningAssistant />
      <Testimonials />
      <ReservationForm />
      <Contact />
    </>
  );
}
