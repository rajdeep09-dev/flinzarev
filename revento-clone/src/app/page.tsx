import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import WorkingMethodSection from '@/components/home/WorkingMethodSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import FaqSection from '@/components/home/FaqSection';
import CtaSection from '@/components/home/CtaSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <WorkingMethodSection />
      <ProjectsSection />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
