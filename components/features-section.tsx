import Image from "next/image"
import { Award, BarChart2, BookOpen, BriefcaseBusiness, GraduationCap, LineChart, Users } from "lucide-react"
import { useContent } from "@/lib/data-provider"

export default function FeaturesSection() {
  const { content } = useContent()
  const { features } = content

  // Map icon names to components
  const iconMap = {
    GraduationCap: <GraduationCap className="h-10 w-10 text-cosmic-400" />,
    BriefcaseBusiness: <BriefcaseBusiness className="h-10 w-10 text-cosmic-400" />,
    Users: <Users className="h-10 w-10 text-cosmic-400" />,
    LineChart: <LineChart className="h-10 w-10 text-cosmic-400" />,
    Award: <Award className="h-10 w-10 text-cosmic-400" />,
    BarChart2: <BarChart2 className="h-10 w-10 text-cosmic-400" />,
  }

  return (
    <section className="cosmic-section">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-cosmic-900/50 border border-cosmic-700/30 px-3 py-1 text-sm text-cosmic-300">
              What We Offer
            </div>
            <h2 className="text-3xl font-medium tracking-tighter text-white sm:text-4xl md:text-5xl">Club Benefits</h2>
            <p className="max-w-[900px] text-space-300 md:text-lg">
              Discover the advantages of joining Club de Economia UA and how we can help you succeed in your academic
              and professional journey.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="cosmic-card flex flex-col items-center space-y-4 p-6 hover:translate-y-[-5px]">
              <div className="cosmic-glow rounded-full bg-space-800/50 p-4">{iconMap[feature.icon]}</div>
              <h3 className="text-xl font-medium text-white tracking-tighter">{feature.title}</h3>
              <p className="text-center text-space-300">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-8 md:flex-row">
          <div className="flex flex-col gap-4 md:w-1/2">
            <h3 className="text-2xl font-medium text-white tracking-tighter">Why Choose Us?</h3>
            <p className="text-space-300">
              Club de Economia UA has been the leading economics student organization at Universidad de Alicante for
              over 15 years. Our club provides a unique platform for students to explore economic theories, develop
              practical skills, and build professional networks.
            </p>
            <ul className="grid gap-2">
              <li className="flex items-center gap-2">
                <div className="cosmic-glow">
                  <BookOpen className="h-5 w-5 text-cosmic-400" />
                </div>
                <span className="text-space-200">Access to exclusive economic publications and resources</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="cosmic-glow">
                  <Users className="h-5 w-5 text-cosmic-400" />
                </div>
                <span className="text-space-200">Network with industry professionals and alumni</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="cosmic-glow">
                  <GraduationCap className="h-5 w-5 text-cosmic-400" />
                </div>
                <span className="text-space-200">Enhance your resume with club leadership opportunities</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <div className="overflow-hidden rounded-xl border border-space-800/50 cosmic-card">
              <Image
                src="/placeholder.svg?height=300&width=500&text=Economics+Workshop"
                alt="Economics Workshop"
                width={500}
                height={300}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
