import SEO from "../components/SEO";
import HeroSlider from "../components/HeroSlider";
import PresentationSection from "../components/PresentationSection";
import ServicesSection from "../components/ServicesSection";
import TeamSection from "../components/TeamSection";
import StatsSection from "../components/StatsSection";
import GalerySection from "../components/GalerySection";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <SEO
        title="Forge – Agence Digitale à Dakar | Développement Web, Mobile & Sécurité"
        description="Forge est une agence digitale basée à Dakar, spécialisée dans le développement de sites web modernes, d'applications mobiles et de solutions logicielles sur mesure pour les entreprises."
        keywords="agence digitale Dakar, développement web Sénégal, création site internet, application mobile, design UX/UI, Forge, solutions digitales"
        image="/images/forge-banner.jpg"
        url="https://forge.sn/"
      />

      {/* ✅ Contenu principal */}
      <main className="font-poppins text-text bg-white">
        <HeroSlider />
        <PresentationSection />
        <ServicesSection />
        <section id="team">
          <TeamSection />
        </section>
        <StatsSection />
        {/* <GalerySection /> */}
        <WhatsAppButton />
      </main>
    </>
  );
}
