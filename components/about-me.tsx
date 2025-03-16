"use client"

import Image from "next/legacy/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Youtube } from "lucide-react"

export default function AboutMe() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I&apos;m <span className="text-primary">Sheng Bin</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">Software Engineer | Student</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Hey there! I&apos;m a Computer Engineering undergraduate student at National University of Singapore (NUS).
          </p>
          <p>Graduating in July 2026.</p>
          <p>Open for Summer Internship in 2025 (19 May - 12 August).</p>
          <br />
          <ul className="space-y-2 mb-8">
            <li>Passionate in Robot Autonomy and Computer Vision.</li>
            <li>I am also part of NUS Team Bumblebee as a Software Engineer.</li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact Me
            </Button>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/ShengBin-101" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/shengbinchan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.youtube.com/@shengbin" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
            <Image
              src="/personal/hk.jpg"
              alt="Photo of Sheng Bin in Hong Kong"
              layout="fill"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

