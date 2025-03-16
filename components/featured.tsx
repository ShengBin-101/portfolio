import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Featured() {
  const featuredProjects = [
    {
      title: "Maritime RobotX Challenge 2024 🚢",
      description:
        "The Maritime RobotX Challenge is an international robotics competition focused on maritime systems. As part of NUS Team Bumblebee, I contributed to our first-place victory by developing perception systems for our Autonomous Surface Vehicle (ASV).",
      image: "/project_images/bbasv4_thumbnail.webp",
      tags: ["Robotics", "LiDAR", "Camera Perception", "Localisation", "ROS", "C++", "Python"],
      demoUrl: "https://cde.nus.edu.sg/news-detail/team-bumblebee-robotx-challenge-2024/", // Add a demo URL
      codeUrl: "",
      bbUrl: "https://bumblebee.sg/competitions/robotx/robotx24/2024/",
      showCodeButton: false,
      showBBWebsite: true,
    },
    {
      title: "SONDRA Challenge 2025",
      description:
        "The SONDRA Challenge 2025 focuses on SDR in urban environments. Our team won 1st place with DroneGuard, a real-time drone detection system combining SDR-based RF machine learning and YOLOv8 computer vision. Powered by Hailo AI and Raspberry Pi, it achieves 95% accuracy with real-time alerts via web and Telegram. The team earned a sponsored trip to the 6th SONDRA Workshop in France to network with researchers, engineers, and PhD students from European institutes.",
      image: "/project_images/DroneGuard_Team.avif",
      tags: ["Software-Defined Radio (SDR)", "Signal Processing", "Computer Vision", "YOLOv8", "TensorFlow", "Edge AI", "Hailo AI Accelerator", "Raspberry Pi", "Python"],
      demoUrl: "https://cde.nus.edu.sg/ece/news-detail/nus-ceg-students-won-1st-place-in-the-sondra-challenge-2025/", // Add a demo URL
      codeUrl: "https://github.com/ShengBin-101/sdr-pi5-vercel/tree/main",
      showCodeButton: true,
    },
  ]

  return (
    <section id="featured" className="py-16 md:py-24 border-t">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Here are some of my best and most impactful projects that showcase my skills and expertise.
        </p>
      </div>

      <div className="space-y-16">
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
          >
            {/* Make the image clickable */}
            <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <div className="relative aspect-video overflow-hidden rounded-lg border shadow-sm">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
              </a>
            </div>

            {/* Make the title clickable */}
            <div className={index % 2 === 1 ? "md:col-start-1" : ""}>
              <h3 className="text-2xl font-bold mb-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-primary"
                >
                  {project.title}
                </a>
              </h3>
              <p className="text-muted-foreground mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.showCodeButton && (
                  <Button variant="outline" asChild>
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  </Button>
                )}
                  <Button variant="outline" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Click to learn more <ArrowUpRight size={16} className="inline" />
                    </a>
                  </Button>

                {project.showBBWebsite && (
                  <Button variant="outline" asChild>
                    <a href={project.bbUrl} target="_blank" rel="noopener noreferrer">
                      Team Bumblebee Website
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

