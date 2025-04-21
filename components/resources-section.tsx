import Link from "next/link"
import { Briefcase, Database, FileText, PenToolIcon as Tool } from "lucide-react"
import { useContent } from "@/lib/data-provider"

export default function ResourcesSection() {
  const { content } = useContent()
  const { resources } = content

  // Map icon names to components
  const iconMap = {
    FileText: <FileText className="h-8 w-8 text-cosmic-400" />,
    Database: <Database className="h-8 w-8 text-cosmic-400" />,
    Tool: <Tool className="h-8 w-8 text-cosmic-400" />,
    Briefcase: <Briefcase className="h-8 w-8 text-cosmic-400" />,
  }

  // Only show a preview of categories on the homepage
  const previewCategories = resources.categories.slice(0, 2)

  return (
    <section className="cosmic-section">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-cosmic-900/50 border border-cosmic-700/30 px-3 py-1 text-sm text-cosmic-300">
              Knowledge Base
            </div>
            <h2 className="text-3xl font-medium tracking-tighter text-white sm:text-4xl md:text-5xl">
              {resources.title}
            </h2>
            <p className="max-w-[900px] text-space-300 md:text-lg">{resources.description}</p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 lg:grid-cols-2">
          {previewCategories.map((category, index) => (
            <div key={index} className="cosmic-card p-6 hover:translate-y-[-5px]">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-space-800/70 p-3 cosmic-glow">{iconMap[category.icon]}</div>
                <h3 className="text-xl font-medium text-white tracking-tighter">{category.name}</h3>
              </div>
              <p className="mb-6 text-space-300">{category.description}</p>
              <ul className="space-y-4">
                {category.items.slice(0, 3).map((item, itemIndex) => (
                  <li key={itemIndex} className="rounded-lg border border-space-800/50 bg-space-900/50 p-4">
                    <h4 className="font-medium text-white tracking-tighter">{item.title}</h4>
                    {item.author && <p className="text-sm text-space-400">By {item.author}</p>}
                    {item.date && <p className="text-sm text-space-400">{item.date}</p>}
                    {item.source && <p className="text-sm text-space-400">Source: {item.source}</p>}
                    {item.format && <p className="text-sm text-space-400">Format: {item.format}</p>}
                    {item.description && <p className="text-sm text-space-400">{item.description}</p>}
                    {item.type && <p className="text-sm text-space-400">Type: {item.type}</p>}
                    <Link
                      href={item.link}
                      className="mt-2 inline-block text-sm font-medium text-cosmic-400 hover:text-cosmic-300"
                    >
                      Access Resource →
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <Link
                  href={`/resources/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-block text-sm font-medium text-cosmic-400 hover:text-cosmic-300"
                >
                  View All {category.name} →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/resources"
            className="cosmic-btn inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white"
          >
            Explore All Resources
          </Link>
        </div>
      </div>
    </section>
  )
}
