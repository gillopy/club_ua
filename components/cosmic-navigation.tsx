"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"

type CosmicNavigationProps = {
  items: {
    label: string
    href: string
  }[]
  className?: string
}

export default function CosmicNavigation({ items, className = "" }: CosmicNavigationProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoverStyle, setHoverStyle] = useState({})
  const [activeStyle, setActiveStyle] = useState({ left: "0px", width: "0px" })
  const tabRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (hoveredIndex !== null) {
      const hoveredElement = tabRefs.current[hoveredIndex]
      if (hoveredElement) {
        const { offsetLeft, offsetWidth } = hoveredElement
        setHoverStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        })
      }
    }
  }, [hoveredIndex])

  useEffect(() => {
    const activeElement = tabRefs.current[activeIndex]
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement
      setActiveStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      })
    }
  }, [activeIndex])

  useEffect(() => {
    requestAnimationFrame(() => {
      const firstElement = tabRefs.current[0]
      if (firstElement) {
        const { offsetLeft, offsetWidth } = firstElement
        setActiveStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        })
      }
    })
  }, [])

  return (
    <div className={`relative ${className}`}>
      {/* Hover Highlight */}
      <div
        className="absolute h-[30px] transition-all duration-300 ease-out bg-cosmic-500/10 rounded-[6px] flex items-center"
        style={{
          ...hoverStyle,
          opacity: hoveredIndex !== null ? 1 : 0,
        }}
      />

      {/* Active Indicator */}
      <div
        className="absolute bottom-[-6px] h-[2px] bg-cosmic-500 transition-all duration-300 ease-out"
        style={activeStyle}
      />

      {/* Tabs */}
      <div className="relative flex space-x-[6px] items-center">
        {items.map((item, index) => (
          <Link href={item.href} key={index}>
            <div
              ref={(el) => (tabRefs.current[index] = el)}
              className={`px-3 py-2 cursor-pointer transition-colors duration-300 h-[30px] ${
                index === activeIndex ? "text-white" : "text-space-400"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setActiveIndex(index)}
            >
              <div className="text-sm font-medium leading-5 whitespace-nowrap flex items-center justify-center h-full">
                {item.label}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
