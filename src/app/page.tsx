import Comparison from "@/sections/Comparison";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import VideoSection from "@/sections/VideoSection";
import FeaturesAdvanced from "@/sections/FeaturesAdvanced";
import CTAFormAdvanced from "@/sections/CTAFormAdvanced";
import HeroSection from "@/sections/Hero";
import NumbersAdvanced from "@/sections/NumbersAdvanced";
import CTABanner from "@/sections/CTABanner";
import Footer from "@/sections/Footer";
import { Navbar2 } from "@/components/Navbar2";

export default function Page() {

  return (
    <main className=" min-h-screen w-full overflow-x-hidden ">
      <Navbar2 />
      <HeroSection />
      <NumbersAdvanced />
      <FeaturesAdvanced />
      <VideoSection />
      <Comparison />
      <CTAFormAdvanced />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />

    </main>
  );
}