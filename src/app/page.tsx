import TechStack from "@/components/TechStack";
import HeroSection from "@/components/HeroSection";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import  Footer  from "@/components/Footer";
import SImpleCard from "@/components/SimpleCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-white/95 dark:bg-black antialiased dark:bg-grid-small-white/[0.2] bg-grid-small-black">
      <HeroHighlight>
        <HeroSection/>
        {/* <GridImages/> */}
        {/* <HeroSec/> */}
        <TechStack/>
        <SImpleCard/>
        {/* <WhyChooseUs/> */}
        {/* <TestinomialCards/> */}
        {/* <UpcomingFeatures/> */}
        {/* <Brand/> */}
        
        <Footer/>
      </HeroHighlight>
    </main>  
  );
}
