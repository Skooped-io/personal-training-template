import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import ProgramsSection from "@/components/home/ProgramsSection";
import TransformationsSection from "@/components/home/TransformationsSection";
import AboutTeaser from "@/components/home/AboutTeaser";
import PhilosophySection from "@/components/home/PhilosophySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <ProgramsSection />
        <TransformationsSection />
        <AboutTeaser />
        <PhilosophySection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
