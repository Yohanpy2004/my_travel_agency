// app/page.tsx
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      {/* Ajoutez d'autres sections au besoin */}
    </main>
  );
}
