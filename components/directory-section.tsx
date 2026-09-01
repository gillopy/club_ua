"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { useContent } from "@/lib/data-provider"

export default function DirectorySection() {
  const { content } = useContent()
  const { directory } = content

  // Only show a preview of members on the homepage
  const previewMembers = directory.members.slice(0, 4)

  return (
    <section className="cosmic-section">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-cosmic-900/50 border border-cosmic-700/30 px-3 py-1 text-sm text-cosmic-300">
              Our Community
            </div>
            <h2 className="text-3xl font-medium tracking-tighter text-white sm:text-4xl md:text-5xl">
              {directory.title}
            </h2>
            <p className="max-w-[900px] text-space-300 md:text-lg">{directory.description}</p>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-2 flex-wrap">
          {directory.categories.map((category, index) => (
            <Button
              key={index}
              variant="outline"
              className="m-1 border-space-700 bg-space-900/50 text-space-300 hover:bg-space-800 hover:text-white"
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {previewMembers.map((member, index) => (
            <div key={index} className="cosmic-card flex flex-col items-center p-6 hover:translate-y-[-5px]">
              <div className="mb-4 h-24 w-24 overflow-hidden rounded-full border border-space-700/50 cosmic-glow">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-white tracking-tighter">{member.name}</h3>
              <p className="text-sm text-cosmic-300">{member.role}</p>
              {member.department && <p className="text-sm text-space-400">{member.department}</p>}
              {member.year && <p className="text-sm text-space-400">{member.year}</p>}
              {member.company && <p className="text-sm text-space-400">{member.company}</p>}
              <p className="mt-2 text-xs text-space-500">{member.category}</p>
              <Button
                variant="ghost"
                size="sm"
                className="mt-4 flex items-center gap-1 text-cosmic-400 hover:bg-space-800 hover:text-cosmic-300"
              >
                <Mail className="h-4 w-4" />
                <span>Contact</span>
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button className="cosmic-btn text-white">View Full Directory</Button>
        </div>
      </div>
    </section>
  )
}
