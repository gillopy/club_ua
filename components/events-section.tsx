import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

export default function EventsSection() {
  const events = [
    {
      title: "Economic Policy Symposium",
      date: "June 15, 2023",
      time: "10:00 AM - 4:00 PM",
      location: "Aula Magna, Facultad de Económicas",
      image: "/placeholder.svg?height=200&width=300&text=Economic+Policy",
      attendees: 120,
    },
    {
      title: "Financial Markets Workshop",
      date: "July 5, 2023",
      time: "2:00 PM - 6:00 PM",
      location: "Sala de Grados, Facultad de Económicas",
      image: "/placeholder.svg?height=200&width=300&text=Financial+Markets",
      attendees: 85,
    },
    {
      title: "Career Fair: Economics Edition",
      date: "July 20, 2023",
      time: "11:00 AM - 5:00 PM",
      location: "Aulario II, Universidad de Alicante",
      image: "/placeholder.svg?height=200&width=300&text=Career+Fair",
      attendees: 200,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Mark Your Calendar</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl">
              Join us for our upcoming events, workshops, and conferences to expand your knowledge and network.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={300}
                  height={200}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{event.title}</h3>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <Clock className="h-4 w-4 text-accent" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <Users className="h-4 w-4 text-accent" />
                    <span>{event.attendees} Attendees</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full bg-accent text-white hover:bg-accent/90">Register Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/events">
            <Button variant="outline" className="text-foreground hover:text-accent hover:bg-secondary">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
