import { Footer } from '@/components/Footer';
import Hero from '@/components/Hero';
import Banner from '@/components/Banner';
import NavBar from '@/NavBar';
import DawgsTicker from '@/components/DawgsTicker';
import Features from '@/components/Features';
import Showcase from '@/components/Showcase';
import FAQs from '@/components/FAQs';
import CallToAction from '@/components/CallToAction';
export const Landing = () => {
  return (
    <>
      <Banner />
      <NavBar />
      <Hero />
      <DawgsTicker />
      <Features />
      <Showcase />
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
};
