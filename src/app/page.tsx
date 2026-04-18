import Comparison from "@/sections/Comparison";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import VideoSection from "@/sections/VideoSection";
import FeaturesAdvanced from "@/sections/FeaturesAdvanced";
import CTAFormAdvanced from "@/sections/CTAFormAdvanced";
import HeroSection from "@/sections/Hero";
import NumbersAdvanced from "@/sections/NumbersAdvanced";
import CTABanner from "@/sections/CTABanner";

export default function Page() {
  
  return (
    <main>
      <HeroSection />
      <NumbersAdvanced/>
      <FeaturesAdvanced/>
      <VideoSection />
      <Comparison />
      <CTAFormAdvanced/>
      <Testimonials />
      <FAQ />
      <CTABanner/>


     
    </main>
  );
}