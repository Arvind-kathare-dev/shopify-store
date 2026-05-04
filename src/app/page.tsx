import Comparison from "@/sections/Comparison";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import VideoSection from "@/sections/VideoSection";
import FeaturesAdvanced from "@/sections/FeaturesAdvanced";
import CTAFormAdvanced from "@/sections/CTAFormAdvanced";
import HeroSection from "@/sections/Hero";
import NumbersAdvanced from "@/sections/NumbersAdvanced";
import TimelineSteps from "@/sections/TimelineSteps";
import CTABanner from "@/sections/CTABanner";
import ToolsGrid from "@/sections/ToolsGrid";
import Footer from "@/sections/Footer";
import RevenueUpside from "@/sections/RevenueUpside";
import CaseStudy from "@/sections/CaseStudy";
import ScrollToTop from "@/components/ScrollToTop";

export default function Page() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <ScrollToTop />
      <HeroSection />
      <NumbersAdvanced />
      <TimelineSteps />
      <FeaturesAdvanced />
      <ToolsGrid />
      <VideoSection />
      <RevenueUpside />
      <CaseStudy />
      <Comparison />
      <CTAFormAdvanced />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}