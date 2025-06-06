import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectSlider from "@/components/ProjectSlider";
import Reviews from "@/components/Reviews";
import ServicesSection from "@/components/Service";
import InfiniteProjectScroller from "@/components/Slider";


export default function Home() {
  return (
    <div className="overflow-hidden ">
      <Nav/>
      <Hero/>
      <ServicesSection />
      <InfiniteProjectScroller />
      <ProjectSlider />
      <ProcessSection />
      <PricingSection />
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  );
}
