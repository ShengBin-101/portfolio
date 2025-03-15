import Header from "@/components/header"
import AboutMe from "@/components/about-me"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Featured from "@/components/featured"
import WorkExperience from "@/components/experience"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <AboutMe />
        <Skills />
        <WorkExperience />
        <Education />
        <Featured />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

