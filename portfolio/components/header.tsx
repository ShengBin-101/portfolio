"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-background"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="font-bold text-xl">
          <Link href="/">Sheng Bin</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("work-experience")}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Experiences
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection("featured")}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Featured
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Projects
          </button>
          <Button onClick={() => scrollToSection("contact")} variant="default" size="sm">
            Contact
          </Button>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button className="ml-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="py-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="py-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("work-experience")}
              className="py-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              Experiences
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="py-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("featured")}
              className="py-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              Featured
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="py-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <Button onClick={() => scrollToSection("contact")} variant="default" className="w-full">
              Contact
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

