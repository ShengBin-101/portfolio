"use client"

import { useState, useEffect } from "react"
import Image from "next/legacy/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface ProjectImage {
  src: string
  alt: string
}

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    longDescription?: string
    images: ProjectImage[]
    tags: string[]
    completedDate?: string
  } | null
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [project])

  if (!project) return null

  const nextImage = () => {
    if (project.images.length <= 1) return
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    if (project.images.length <= 1) return
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl w-[80vw] max-h-[85vh] overflow-y-auto p-6 shadow-lg rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">{project.title}</DialogTitle>
          {project.completedDate && (
            <DialogDescription className="text-sm text-muted-foreground">
              Completed on {project.completedDate}
            </DialogDescription>
          )}
        </DialogHeader>

        {/* Image Section */}
        <div className="relative aspect-[16/9] bg-muted rounded-md overflow-hidden my-4 border border-primary shadow-md">
          {project.images && project.images.length > 0 && project.images[currentImageIndex]?.src ? (
            <Image
              src={project.images[currentImageIndex].src}
              alt={project.images[currentImageIndex].alt || "Project image"}
              layout="fill"
              objectFit="cover"
              unoptimized={project.images[currentImageIndex].src.endsWith(".gif")}
            />
          ) : (
            <div className="text-muted flex items-center justify-center h-full">
              No Image Available
            </div>
          )}

          {project.images && project.images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 p-2 rounded-full shadow-lg"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 p-2 rounded-full shadow-lg"
                onClick={nextImage}
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </Button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentImageIndex ? "bg-primary" : "bg-background/60"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:bg-primary/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

