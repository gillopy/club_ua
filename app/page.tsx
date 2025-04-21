import HeroSection from "@/components/hero-section"
import MissionSection from "@/components/mission-section"
import VisionSection from "@/components/vision-section"
import AboutUsSection from "@/components/about-us-section"
import FeaturesSection from "@/components/features-section"
import ArticlesSection from "@/components/articles-section"
import DirectorySection from "@/components/directory-section"
import ResourcesSection from "@/components/resources-section"
import TestimonialsSection from "@/components/testimonials-section"
import CtaSection from "@/components/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <MissionSection />
      <VisionSection />
      <AboutUsSection />
      <FeaturesSection />
      <ArticlesSection />
      <DirectorySection />
      <ResourcesSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  )
}
