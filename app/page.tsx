import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SpeakersSection } from "@/components/speakers-section"
import { ScheduleSection } from "@/components/schedule-section"
import { CallForProposals } from "@/components/tickets-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SpeakersSection />
        <ScheduleSection />
        <CallForProposals />
      </main>
      <Footer />
    </div>
  )
}
