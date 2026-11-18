import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ImageCarousel from "@/components/image-carousel"

export default function Featured() {
  const featuredProjects = [
    {
      title: "Maritime RobotX Challenge 2026 🚢",
      description:
        "The Maritime RobotX Challenge 2026 was held in Singapore. As Team Lead of NUS Team Bumblebee, I led the team to first place in the Autonomy Challenge, defending the title we won at RobotX 2024.",
      images: [
        { src: "/project_images/rx26_win.jpg", alt: "NUS Team Bumblebee celebrating as RobotX 2026 Autonomy Challenge champions" },
        {
          src: "/project_images/rx26_vessel.mp4",
          poster: "/project_images/rx26_vessel_poster.jpg",
          alt: "Team Bumblebee's autonomous vessel decoding the light sequence at RobotX 2026",
          type: "video" as const,
        },
        {
          src: "/project_images/rx26_drone.mp4",
          poster: "/project_images/rx26_drone_poster.jpg",
          alt: "Team Bumblebee's drone dropping a green tin onto the target at RobotX 2026",
          type: "video" as const,
        },
      ],
      tags: ["Robotics", "Autonomous Systems", "Team Leadership"],
      demoUrl: "https://bumblebee.sg/competitions/robotx/2026/",
      codeUrl: "",
      showCodeButton: false,
    },
    {
      title: "RoboSub 2026 🌊",
      description:
        "RoboSub is RoboNation's international autonomous underwater vehicle competition. As Team Lead of NUS Team Bumblebee, I led the team to 1st Place Overall and 1st Place Design Documentation at RoboSub 2026, along with the Best System Assessment, Best Video and Best Report awards. We competed with two vehicles, BBAUV 5.0 and BBAUV 4.5, defending our RoboSub 2025 title.",
      images: [
        { src: "/project_images/rs26_win.webp", alt: "NUS Team Bumblebee celebrating as RoboSub 2026 champions" },
        { src: "/project_images/rs26_auv45.webp", alt: "BBAUV 4.5 on the water surface" },
        { src: "/project_images/rs26_auv_pool.webp", alt: "Team Bumblebee's AUV during pool testing" },
      ],
      tags: ["Robotics", "Autonomous Underwater Vehicles", "Team Leadership"],
      demoUrl: "https://bumblebee.sg/competitions/robosub/2026/",
      codeUrl: "",
      showCodeButton: false,
    },
    {
      title: "Maritime RobotX Challenge 2024 🚢",
      description:
        "The Maritime RobotX Challenge is an international robotics competition focused on maritime systems. As part of NUS Team Bumblebee, I contributed to our first-place victory by developing perception systems for our Autonomous Surface Vehicle (ASV).",
      images: [
        { src: "/project_images/bbasv4_thumbnail.webp", alt: "Team Bumblebee's Autonomous Surface Vehicle" },
        { src: "/project_images/rx24_sea_trial.jpg", alt: "LiDAR perception map of the RobotX 2024 course" },
        { src: "/project_images/rx24_team.jpg", alt: "NUS Team Bumblebee team photo at RobotX 2024" },
        { src: "/project_images/rx24_win.jpg", alt: "Team celebrating the RobotX 2024 win under fireworks" },
      ],
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
      images: [{ src: "/project_images/DroneGuard_Team.avif", alt: "DroneGuard team at the SONDRA Challenge 2025" }],
      tags: ["Software-Defined Radio (SDR)", "Signal Processing", "Computer Vision", "YOLOv8", "TensorFlow", "Edge AI", "Hailo AI Accelerator", "Raspberry Pi", "Python"],
      demoUrl: "https://cde.nus.edu.sg/ece/news/nus-ceg-students-won-1st-place-in-the-sondra-challenge-2025/", // Add a demo URL
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
            <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
              <ImageCarousel images={project.images} href={project.demoUrl || undefined} />
            </div>

            {/* Make the title clickable */}
            <div className={index % 2 === 1 ? "md:col-start-1" : ""}>
              <h3 className="text-2xl font-bold mb-4">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-primary"
                  >
                    {project.title}
                  </a>
                ) : (
                  <span className="text-primary">{project.title}</span>
                )}
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
                {project.demoUrl && (
                  <Button variant="outline" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Click to learn more <ArrowUpRight size={16} className="inline" />
                    </a>
                  </Button>
                )}

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

