"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import contentData from "@/data/content.json"

type ContentContextType = typeof contentData

const ContentContext = createContext<{
  content: ContentContextType
  updateContent: (newContent: Partial<ContentContextType>) => void
}>({
  content: contentData,
  updateContent: () => {},
})

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ContentContextType>(contentData)

  const updateContent = (newContent: Partial<ContentContextType>) => {
    setContent((prevContent) => ({
      ...prevContent,
      ...newContent,
    }))
    // In a real application, you would save this to a database or API
    console.log("Content updated:", { ...content, ...newContent })
  }

  return <ContentContext.Provider value={{ content, updateContent }}>{children}</ContentContext.Provider>
}

export function useContent() {
  return useContext(ContentContext)
}
