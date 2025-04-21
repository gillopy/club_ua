import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import { useContent } from "@/lib/data-provider"

export default function ArticlesSection() {
  const { content } = useContent()
  const { articles } = content

  return (
    <section className="cosmic-section">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-cosmic-900/50 border border-cosmic-700/30 px-3 py-1 text-sm text-cosmic-300">
              Latest Updates
            </div>
            <h2 className="text-3xl font-medium tracking-tighter text-white sm:text-4xl md:text-5xl">
              Featured Articles
            </h2>
            <p className="max-w-[900px] text-space-300 md:text-lg">
              Stay informed with our latest articles, event recaps, and economic insights.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          {articles.map((article, index) => (
            <article key={index} className="article-card">
              <div className="article-image">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="article-content">
                <div className="article-meta">
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
                <h3 className="mt-2">
                  <Link href={`/articles/${article.id}`} target="_blank" className="article-title">
                    {article.title}
                  </Link>
                </h3>
                <p className="article-excerpt">{article.excerpt}</p>
                <div className="article-footer">
                  <span className="article-tag">{article.category}</span>
                  <Link href={`/articles/${article.id}`} target="_blank" className="article-link">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/articles"
            className="cosmic-btn inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
