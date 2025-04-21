import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  BarChart3,
  BookOpen,
  Calendar,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  TrendingUp,
  Twitter,
} from "lucide-react"
import { useContent } from "@/lib/data-provider"

export default function Footer() {
  const { content } = useContent()
  const { footer } = content

  return (
    <footer className="border-t border-space-800/50 bg-space-900/80 backdrop-blur-sm">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="cosmic-glow">
                <TrendingUp className="h-6 w-6 text-cosmic-400 group-hover:text-cosmic-300 transition-colors duration-300" />
              </div>
              <span className="font-display text-xl font-medium tracking-tighter text-white group-hover:text-cosmic-300 transition-colors duration-300">
                {content.siteInfo.title}
              </span>
            </Link>
            <p className="text-sm text-space-300 max-w-xs">
              Empowering students with economic knowledge and professional opportunities since 2005.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {footer.socialLinks.map((social, index) => (
                <Link key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full bg-space-800/70 hover:bg-cosmic-900/70 hover:text-cosmic-300 cosmic-glow"
                  >
                    {social.platform === "Twitter" && <Twitter className="h-4 w-4" />}
                    {social.platform === "Facebook" && <Facebook className="h-4 w-4" />}
                    {social.platform === "Instagram" && <Instagram className="h-4 w-4" />}
                    {social.platform === "LinkedIn" && <Linkedin className="h-4 w-4" />}
                    <span className="sr-only">{social.platform}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-medium text-white tracking-tighter">Quick Links</h3>
            <div className="grid grid-cols-1 gap-2">
              {footer.quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="text-sm text-space-300 hover:text-cosmic-300 transition-colors"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-medium text-white tracking-tighter">Resources</h3>
            <div className="grid grid-cols-1 gap-2">
              <Link
                href="/blog"
                className="flex items-center gap-2 text-sm text-space-300 hover:text-cosmic-300 transition-colors"
              >
                <BookOpen className="h-4 w-4 text-cosmic-400" />
                <span>Blog</span>
              </Link>
              <Link
                href="/events"
                className="flex items-center gap-2 text-sm text-space-300 hover:text-cosmic-300 transition-colors"
              >
                <Calendar className="h-4 w-4 text-cosmic-400" />
                <span>Events Calendar</span>
              </Link>
              <Link
                href="/research"
                className="flex items-center gap-2 text-sm text-space-300 hover:text-cosmic-300 transition-colors"
              >
                <BarChart3 className="h-4 w-4 text-cosmic-400" />
                <span>Research Papers</span>
              </Link>
            </div>

            <h3 className="text-lg font-medium mt-4 text-white tracking-tighter">Contact Us</h3>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-start gap-2 text-sm text-space-300">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-cosmic-400" />
                <span>{footer.contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-space-300">
                <Phone className="h-4 w-4 text-cosmic-400" />
                <span>{footer.contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-space-300">
                <Mail className="h-4 w-4 text-cosmic-400" />
                <span>{footer.contactInfo.email}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-medium text-white tracking-tighter">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-space-300">Stay updated with our latest events, research, and opportunities.</p>
            <div className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-space-800/50 border-space-700 focus-visible:ring-cosmic-500 text-white"
              />
              <Button className="cosmic-btn w-full text-white">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-space-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-space-400">
              © {new Date().getFullYear()} Club de Economia UA. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {footer.legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="text-sm text-space-400 hover:text-cosmic-300 transition-colors"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
