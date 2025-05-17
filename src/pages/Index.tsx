import BackgroundGrid from "@/components/ui/background-grid";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import AppInterface from "@/components/sections/AppInterface";
import Roadmap from "@/components/sections/Roadmap";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <BackgroundGrid />
      <Hero />
      <Features />
      <AppInterface />
      <Roadmap />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
