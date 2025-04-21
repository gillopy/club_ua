"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, TrendingUp, X } from "lucide-react"
import { useContent } from "@/lib/data-provider"
import CosmicNavigation from "@/components/cosmic-navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { content } = useContent()

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Resources", href: "/resources" },
    { label: "Directory", href: "/directory" },
    { label: "Membership", href: "/membership" },
    { label: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-space-950/80 backdrop-blur-md border-b border-space-800/50" : "bg-transparent border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="cosmic-glow">
              <TrendingUp className="h-6 w-6 text-cosmic-400 group-hover:text-cosmic-300 transition-colors duration-300" />
            </div>
            <span className="font-display text-xl font-medium tracking-tighter text-white group-hover:text-cosmic-300 transition-colors duration-300">
              {content.siteInfo.title}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <CosmicNavigation items={navigationItems} />

          <div className="flex items-center gap-4 ml-6">
            <Button
              variant="ghost"
              className="text-space-300 hover:text-white hover:bg-space-800/50 transition-all duration-300"
            >
              Log In
            </Button>
            <Button className="cosmic-btn text-white px-4 py-2 h-9">Join Now</Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden text-space-300 hover:text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[350px] border-space-800 bg-space-950/95 backdrop-blur-md"
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
                <div className="cosmic-glow">
                  <TrendingUp className="h-6 w-6 text-cosmic-400" />
                </div>
                <span className="font-display text-xl font-medium tracking-tighter text-white">
                  {content.siteInfo.title}
                </span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-space-300 hover:text-white"
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="mt-8 flex flex-col gap-6">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center gap-2 text-lg font-medium tracking-tighter text-white hover:text-cosmic-300 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-6">
                <Button
                  variant="ghost"
                  className="w-full text-space-300 hover:text-white hover:bg-space-800/50 transition-all duration-300"
                >
                  Log In
                </Button>
                <Button className="cosmic-btn w-full text-white">Join Now</Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
