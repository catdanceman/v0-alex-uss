import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { WhyUsSection } from "@/components/why-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { StickyCallButton } from "@/components/sticky-call-button"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyCallButton />
    </>
  )
}
