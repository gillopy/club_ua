import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-16 text-center">
      <div className="cosmic-glow">
        <h1 className="text-6xl font-medium text-white mb-6">404</h1>
      </div>
      <h2 className="text-3xl font-medium text-white mb-4">Page Not Found</h2>
      <p className="text-space-300 max-w-md mb-8">The page you are looking for doesn't exist or has been moved.</p>
      <Link href="/">
        <Button className="cosmic-btn text-white">Return to Home</Button>
      </Link>
    </div>
  )
}
