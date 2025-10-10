import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { Calendar, MapPin, Users } from "lucide-react"
import { jsonLD } from "@/app/details"
import Image from 'next/image';
export function HeroSection() {
  let date = new Date(jsonLD.startDate);
  let when = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })
  return (
    <section className="relative p-20 md:p-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="container relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
			<div className="flex justify-center">
              <Image
                src="/nullEDGElogo.jpg"
                alt="nullEDGE Logo"
                width={600}
                height={150}
              />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
			{/*{jsonLD.name}*/}
              <span className="block text-primary">Conference {date.getFullYear()}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Join the leading minds in{" "}
              <span className="underline decoration-dotted cursor-pointer relative group">
              ServiceNow
              <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-max px-3 py-2 rounded bg-background border text-sm text-foreground shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
               nullEDGE is not affiliated with nor sponsored by ServiceNow.
              </span>
              </span>{" "}
              for a day of innovation, networking, and cutting-edge insights.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>{when}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Virtually</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span>800+ Attendees</span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Event Starts In</h2>
              <CountdownTimer DateTime={date} />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
