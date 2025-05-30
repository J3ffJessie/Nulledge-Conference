import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { Suspense } from "react"

export function CallForProposals() {
  const tickets = [
    {
      name: "Early Bird",
      price: "$FREE",
      originalPrice: "$1,000,000",
      description: "Perfect for individual attendees",
      features: ["Access to all sessions", "Welcome kit", "Networking events", "Digital resources"],
      popular: false,
      available: true,
    },
  ]

  // The Google Form URL should be provided via an environment variable.
  // In Next.js, you must prefix public env variables with NEXT_PUBLIC_
  // Directly use the Google Form URL here
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScMoi3ZWPeSAtDEX4kX1LqkZ2N5thCUJO0AeyFbrJyX9VVlcw/viewform"

  return (
    <section id="cfp" className="p-20 md:p-32 bg-muted/50">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Call for Proposals</h2>
          <p className="text-xl text-muted-foreground">
            We invite you to submit your talk, workshop, or panel ideas for Nulledge Conference! Share your expertise and help shape the event.
          </p>
        </div>
        <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-white">
          <Suspense fallback={<div>Loading form…</div>}>
            <iframe
              src={formUrl}
              title="Call for Proposals Form"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              allowFullScreen
              className="w-full h-[600px] border-none"
            />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
