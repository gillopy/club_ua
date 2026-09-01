"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { useContent } from "@/lib/data-provider"

export default function MissionSection() {
  const { content } = useContent()
  const { mission } = content

  return (
    <section className="cosmic-section">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-cosmic-900/50 border border-cosmic-700/30 px-3 py-1 text-sm text-cosmic-300">
              Our Purpose
            </div>
            <h2 className="text-3xl font-medium tracking-tighter text-white sm:text-4xl md:text-5xl">
              {mission.title}
            </h2>
            <p className="max-w-[900px] text-space-300 md:text-lg">{mission.description}</p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-3">
              {mission.points.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 cosmic-glow">
                    <Check className="h-5 w-5 shrink-0 text-cosmic-400" />
                  </div>
                  <span className="text-space-200">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="overflow-hidden rounded-xl border border-space-800/50 cosmic-card">
              <Image
                src={mission.image || "/placeholder.svg"}
                alt="Our Mission"
                width={600}
                height={400}
                className="h-auto w-full object-cover transition-transform hover:scale-105 duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
