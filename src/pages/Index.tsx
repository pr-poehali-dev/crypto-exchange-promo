import { BackgroundGrid } from "@/components/ui/background-grid";
import Header from "@/components/sections/Header";
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
      <Header />
      <Hero />
      <Features />
      <AppInterface />
      <Roadmap />
      <Testimonials />
      <CallToAction />
      <Footer />

      {/* Background pattern */}
      <style jsx="true">{`
        .bg-grid-pattern {
          background-image: radial-gradient(
            rgba(139, 92, 246, 0.1) 1px,
            transparent 1px
          );
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
};

export default Index;
