import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin } from "lucide-react"
import { jsonLD } from "@/app/details"
export function ScheduleSection() {
  let jsonLDevents = jsonLD.subEvents.map(function (event) {
    let start = new Date(event.startDate).toLocaleTimeString('en-US', { hour: "numeric", minute: "2-digit" })
    let end = new Date(event.endDate).toLocaleTimeString('en-US', { hour: "numeric", minute: "2-digit" })
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    let startUTC = new Date(event.startDate).toString();
    let endUTC = new Date(event.endDate).toString();
    let speaker = event.performers.map(function (person) {
      return person.name
    }).join(', ');
    return {
      time: `${start} - ${end} ${timeZone}`,
      timeUTC: `${startUTC} - ${endUTC}`,
      title: event.description,
      speaker: speaker,
      type: event.additionalType,
      location: event.location
    }
  })
  let schedule = [
    {
      day: "Day 1 - October 17",
      events: jsonLDevents
    }
  ]
  const getTypeColor = (type: string) => {
    switch (type) {
      case "introduction":
        return "bg-yellow-500 text-white"
      case "keynote":
        return "bg-primary text-primary-foreground"
      case "workshop":
        return "bg-green-500 text-white"
      case "talk":
        return "bg-blue-500 text-white"
      case "networking":
        return "bg-orange-500 text-white"
      default:
        return "bg-secondary text-secondary-foreground"
    }
  }

  return (
    <section id="schedule" className="p-20 md:p-32">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Event Schedule</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for a day packed with inspiring talks, hands-on workshops, and networking opportunities.
          </p>
        </div>

        <div className="space-y-8">
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex}>
              <h3 className="text-2xl font-bold mb-6">{day.day}</h3>
              <div className="grid gap-4">
                {day.events.map((event, eventIndex) => (
                  <Card key={eventIndex}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex items-center gap-2 text-muted-foreground min-w-[100px]">
                          <Clock className="h-4 w-4" />
                          <details className="inline">
                            <summary className="list-none text-sm">
                              <span className="font-medium" title={event.timeUTC}>{event.time}</span>
                            </summary>
                            <span className="font-medium">{event.timeUTC}</span>
                          </details>

                        </div>

                        <div className="flex-1 space-y-2">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <h4 className="text-lg font-semibold">{event.title}</h4>
                            <Badge className={getTypeColor(event.type)}>{event.type}</Badge>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                            {event?.speaker && <span>Speaker: {event.speaker}</span>}
                            {event?.location &&
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                <span>{event?.location}</span>
                              </div>
                            }
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
