import Image from "next/image"
import { Quote } from "lucide-react"
import { useContent } from "@/lib/data-provider"

export default function TestimonialsSection() {
  const { content } = useContent()
  const { testimonials } = content

  return (
    <section className="cosmic-section">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-cosmic-900/50 border border-cosmic-700/30 px-3 py-1 text-sm text-cosmic-300">
              Success Stories
            </div>
            <h2 className="text-3xl font-medium tracking-tighter text-white sm:text-4xl md:text-5xl">
              What Our Members Say
            </h2>
            <p className="max-w-[900px] text-space-300 md:text-lg">
              Hear from our current members and alumni about their experiences with Club de Economia UA.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="cosmic-card p-6 hover:translate-y-[-5px]">
              <Quote className="absolute right-6 top-6 h-8 w-8 text-space-700" />
              <p className="mb-4 text-space-300 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full border border-space-700/50 cosmic-glow">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-white tracking-tighter">{testimonial.author}</h4>
                  <p className="text-sm text-space-400">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
