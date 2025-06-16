import { Button } from "@/components/ui/button"
import { Calendar, Speech } from "lucide-react"

import Image from 'next/image';

export function HeroSession({ title, type, date, startTime, endTime, who, image, description }) {

  return (
    <section className="relative p-20 md:p-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="container relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center">
              {image &&
                <Image
                  src={`${image}`}
                  alt={`${image}`}
                  width={600}
                  height={150}
                />
              }
            </div>
            {title &&
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                {/*{jsonLD.name}*/}
                <span className="block text-primary">{title}</span>
              </h1>
            }
            {description &&
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto whitespace-pre">
                {description}
              </p>
            }
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">

            {who &&
              <div className="flex items-center gap-2">
                <Speech className="h-5 w-5 text-primary" />
                <span>{who}</span>
              </div>
            }
            {date && startTime && endTime &&
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>{date} {startTime}-{endTime} EST</span>
              </div>
            }
          </div>

          <div className="space-y-6">

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8"
              >
                <a href="/#schedule">View Schedule</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
