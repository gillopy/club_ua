import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-cosmic-900/50 backdrop-blur-sm border-t border-cosmic-700/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-medium tracking-tighter text-white sm:text-4xl md:text-5xl">
              Ready to Join Club de Economia UA?
            </h2>
            <p className="max-w-[900px] text-space-300 md:text-lg">
              Take the first step towards enhancing your economic knowledge and building your professional network.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row mt-6">
            <Button className="cosmic-btn text-white group">
              Become a Member
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-space-700 text-space-300 hover:text-white hover:bg-space-800/50"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
