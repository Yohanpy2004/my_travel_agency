// app/page.tsx
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import GallerySection from './sections/GallerySection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <GallerySection />
      {/*   <ContactSection />*/}
    
      <FooterSection />
    </main>
  );
}
