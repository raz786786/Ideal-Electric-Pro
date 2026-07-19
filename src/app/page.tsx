import Hero from '@/components/sections/Hero/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid/ServicesGrid';
import WhyChooseUs from '@/components/sections/WhyChooseUs/WhyChooseUs';
import StatsCounter from '@/components/sections/StatsCounter/StatsCounter';
import Testimonials from '@/components/sections/Testimonials/Testimonials';
import EmergencyCTA from '@/components/sections/EmergencyCTA/EmergencyCTA';
import FAQ from '@/components/sections/FAQ/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid limit={6} showViewAll={true} />
      <WhyChooseUs />
      <StatsCounter />
      <EmergencyCTA />
      <Testimonials />
      <FAQ />
    </>
  );
}
