import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SpeakersSection } from "@/components/speakers-section"
import { ScheduleSection } from "@/components/schedule-section"
import { Footer } from "@/components/footer"
import { jsonLD } from "./details.js"
import { getDataFromRingCentral } from "./api/sheets.js"
import { Timeline } from "@/components/timeline"
import Contributors from "@/components/contributors"


export default async function HomePage() {
  var sessionData = await getSheetData()
  return (
    <div className="min-h-screen bg-background">
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLD).replace(/</g, '\\u003c'),
        }}
      />
      {/* ... */}
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SpeakersSection sessionData={sessionData} />
        <ScheduleSection sessionData={sessionData} />
        <Contributors />
        
        <Timeline />
      </main>
      <Footer />
    </div>
  )
}
export async function getSheetData() {
  const sheet = await getDataFromRingCentral();
  return {
    props: {
      data: sheet.slice(0, sheet.length), // remove sheet header
    },
    revalidate: 1, // In seconds
  };
}