"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Image from "next/legacy/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselMedia {
  src: string
  alt: string
  type?: "image" | "video"
  poster?: string
}

interface ImageCarouselProps {
  images: CarouselMedia[]
  href?: string
  autoPlayMs?: number
}

export default function ImageCarousel({ images, href, autoPlayMs = 5000 }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const hasMultiple = images.length > 1

  const goTo = (index: number) => setCurrent((index + images.length) % images.length)
  const next = () => goTo(current + 1)
  const prev = () => goTo(current - 1)

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  // Photos auto-advance on a timer, paused on hover/focus; videos advance when they finish playing
  useEffect(() => {
    if (!hasMultiple || paused || reducedMotion) return
    if (images[current].type === "video") return
    const timer = setTimeout(() => setCurrent((c) => (c + 1) % images.length), autoPlayMs)
    return () => clearTimeout(timer)
  }, [current, paused, reducedMotion, hasMultiple, images, autoPlayMs])

  // Play the active video from the start and pause the rest
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === current && !reducedMotion) {
        video.currentTime = 0
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    })
  }, [current, reducedMotion])

  const handleVideoEnded = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    if (hasMultiple && !paused) {
      next()
    } else {
      e.currentTarget.currentTime = 0
      e.currentTarget.play().catch(() => {})
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 40) {
      if (delta < 0) next()
      else prev()
    }
    touchStartX.current = null
  }

  return (
    <div
      className="group relative aspect-video overflow-hidden rounded-lg border shadow-sm"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
    >
      <div
        className="flex h-full transition-transform duration-500 ease-out motion-reduce:transition-none"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((item, i) => {
          let content: React.ReactNode
          if (item.type === "video") {
            content = (
              <video
                ref={(el) => {
                  videoRefs.current[i] = el
                }}
                src={item.src}
                poster={item.poster}
                aria-label={item.alt}
                muted
                playsInline
                preload={i === current ? "auto" : "metadata"}
                controls={reducedMotion}
                onEnded={handleVideoEnded}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )
          } else {
            const img = (
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                sizes="(min-width: 768px) 50vw, 100vw"
                loading="eager"
                className="object-cover"
              />
            )
            content = href ? (
              <a href={href} target="_blank" rel="noopener noreferrer" tabIndex={i === current ? 0 : -1}>
                {img}
              </a>
            ) : (
              img
            )
          }
          return (
            <div
              key={item.src}
              className="relative h-full w-full shrink-0"
              aria-hidden={i !== current}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${images.length}`}
            >
              {content}
            </div>
          )
        })}
      </div>

      {hasMultiple && (
        <>
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white transition-opacity hover:bg-black/60 md:opacity-0 md:group-hover:opacity-100 focus-visible:opacity-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white transition-opacity hover:bg-black/60 md:opacity-0 md:group-hover:opacity-100 focus-visible:opacity-100"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((item, i) => (
              <button
                key={item.src}
                onClick={() => goTo(i)}
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === current}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-6 bg-white" : "w-2 bg-white/60 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
