"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, BookOpen, TrendingUp } from "lucide-react"
import { useContent } from "@/lib/data-provider"

export default function HeroSection() {
  const { content } = useContent()
  const { hero } = content
  const orbitRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const orbitEl = orbitRef.current
    if (!orbitEl) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { left, top, width, height } = orbitEl.getBoundingClientRect()

      const centerX = left + width / 2
      const centerY = top + height / 2

      const moveX = (clientX - centerX) / 50
      const moveY = (clientY - centerY) / 50

      orbitEl.style.transform = `translate(${moveX}px, ${moveY}px)`
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-block rounded-lg bg-cosmic-900/50 border border-cosmic-700/30 px-3 py-1 text-sm text-cosmic-300">
              {hero.subtitle}
            </div>
            <h1 className="text-3xl font-medium tracking-tighter text-white sm:text-4xl md:text-5xl xl:text-6xl/none">
              {hero.title}
            </h1>
            <p className="max-w-[600px] text-space-300 md:text-lg">{hero.description}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="cosmic-btn text-white group">
                {hero.primaryButton.text}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="border-space-700 text-space-300 hover:text-white hover:bg-space-800/50"
              >
                {hero.secondaryButton.text}
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="inline-block h-8 w-8 overflow-hidden rounded-full border-2 border-space-900">
                    <Image
                      src={`/placeholder.svg?height=32&width=32&text=${i}`}
                      alt={`Member ${i}`}
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-space-400">
                Join <span className="font-medium text-cosmic-400">{hero.memberCount}</span> members
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full overflow-hidden rounded-xl border border-space-800/50 bg-space-900/30 backdrop-blur-sm sm:h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  ref={orbitRef}
                  className="relative h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px] transition-transform duration-300 ease-out"
                >
                  <div className="absolute left-0 top-0 h-full w-full animate-spin-slow">
                    <TrendingUp className="absolute left-0 top-0 h-10 w-10 text-cosmic-500 opacity-70" />
                    <BarChart2 className="absolute bottom-0 right-0 h-10 w-10 text-cosmic-500 opacity-70" />
                    <BookOpen className="absolute bottom-0 left-1/2 h-10 w-10 text-cosmic-500 opacity-70" />
                  </div>
                  <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-space-800/50 backdrop-blur-sm border border-cosmic-700/30 cosmic-glow">
                    <Image
                      src="/placeholder.svg?height=200&width=200&text=CE"
                      alt="Club de Economia Logo"
                      width={200}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
