"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { useContent } from "@/lib/data-provider"

export default function ArticlePage({ params }: { params: { id: string } }) {
  const { content } = useContent()
  const [article, setArticle] = useState(null)

  useEffect(() => {
    const foundArticle = content.articles.find((a) => a.id === params.id)
    setArticle(foundArticle)
  }, [content.articles, params.id])

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-2xl font-medium text-white tracking-tighter">Article not found</h1>
          <p className="text-space-300">The article you are looking for does not exist.</p>
          <Link href="/">
            <Button className="cosmic-btn text-white">Return Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/" className="mb-8 inline-flex items-center text-cosmic-400 hover:text-cosmic-300">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-4 text-sm text-space-400">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-cosmic-400" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4 text-cosmic-400" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-cosmic-400" />
              <span>{article.readTime}</span>
            </div>
          </div>
          <h1 className="text-3xl font-medium text-white tracking-tighter md:text-4xl lg:text-5xl">{article.title}</h1>
          <p className="mt-4 text-lg text-space-300">{article.excerpt}</p>
        </div>
        <div className="mb-8 aspect-video w-full overflow-hidden rounded-xl border border-space-800/50 cosmic-card">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            width={800}
            height={450}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="prose prose-invert max-w-none prose-headings:font-medium prose-headings:tracking-tighter prose-p:text-space-300 prose-li:text-space-300">
          <p>{article.content}</p>
          {/* This would be expanded with the full article content */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl
            aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl,
            eu aliquam nisl nisl eu nisl.
          </p>
          <p>
            Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod,
            nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.
          </p>
          <h2>Key Insights</h2>
          <p>
            Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod,
            nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.
          </p>
          <ul>
            <li>Point one about the economic implications</li>
            <li>Point two about market trends</li>
            <li>Point three about policy recommendations</li>
          </ul>
          <h2>Conclusion</h2>
          <p>
            Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod,
            nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.
          </p>
        </div>
        <div className="mt-12 border-t border-space-800/50 pt-8">
          <h3 className="mb-4 text-xl font-medium text-white tracking-tighter">About the Author</h3>
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 overflow-hidden rounded-full border border-space-700/50 cosmic-glow">
              <Image
                src="/placeholder.svg?height=64&width=64&text=Author"
                alt={article.author}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-medium text-white tracking-tighter">{article.author}</h4>
              <p className="text-sm text-space-400">{article.authorRole}</p>
              <p className="mt-1 text-sm text-space-300">
                Expert in economic policy and financial markets with over 10 years of experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
