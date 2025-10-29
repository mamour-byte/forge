import HeroSlider from '../components/HeroSlider';
import PresentationSection from '../components/PresentationSection';
import ServicesSection from '../components/ServicesSection';
import TeamSection from '../components/TeamSection';
import StatsSection from '../components/StatsSection';
import GalerySection from '../components/GalerySection';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <main className="font-poppins text-text bg-white">
      <HeroSlider />
      <PresentationSection />
      <ServicesSection />
      <section id="team">
        <TeamSection />
      </section>
      <StatsSection />
      <GalerySection />
      <WhatsAppButton />
    </main>
  );
}
