import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { Calendar, MapPin, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative p-20 md:p-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="container relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Nulledge
              <span className="block text-primary">Conference 2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Join the leading minds in technology for a day of innovation, networking, and cutting-edge insights.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>October 17, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Virtually</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span>300+ Attendees</span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Event Starts In</h2>
              <CountdownTimer />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button
                asChild
                size="lg"
                className="text-lg px-8"
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfJx1aIUdkiQc0RLlU0D3ZZIiYO-WJRosxst7s5F5g7FMDzEw/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </a>
              </Button> */}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8"
              >
                <a href="#schedule">View Schedule</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
