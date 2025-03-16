import Link from "next/link"
import { Github, Linkedin, Mail, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Sheng Bin</h3>
            <p className="text-sm text-muted-foreground">Software Engineer | Student</p>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="https://github.com/ShengBin-101" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/shengbinchan/" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://www.youtube.com/@shengbin" className="text-muted-foreground hover:text-foreground transition-colors">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href="mailto:shengbin.chan@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>

          <div className="text-sm text-muted-foreground">Created by Sheng Bin © {new Date().getFullYear()}</div>
        </div>
      </div>
    </footer>
  )
}

