"use client"

import { JSX, useState } from "react"
import { ArrowUpRight, Github, BookOpen, Ship, BotIcon as Robot, Cpu, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ProjectModal from "@/components/project-modal"
import Image from "next/legacy/image"

// Define a custom Project interface for your portfolio
interface PortfolioProject {
  title: string
  description: string
  longDescription: string
  images: { src: string; alt: string }[]
  category: string
  completedDate?: string
  tags: string[]
  codeUrl?: string
  demoUrl?: string
  infoUrl?: string
  videoUrl?: string
  newsUrl?: string
  icon: JSX.Element
}

export default function Projects() {
  const categories = ["All", "Ongoing", "Completed"]
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Ensure the projects array uses the PortfolioProject type
  const projects: PortfolioProject[] = [
    {
      title: "Gitbook 📚",
      description:
        "A collection of notes and resources for Robotics. I try to keep it updated with my learning journey in Robotics.",
      longDescription: `
        <p>This Gitbook serves as my personal knowledge base for robotics concepts, tutorials, and resources. I regularly update it with new information as I learn.</p>
        <p>The content includes:</p>
        <ul>
          <li>ROS tutorials and best practices</li>
          <li>Computer vision techniques for robotics</li>
          <li>SLAM and navigation algorithms</li>
          <li>Sensor fusion approaches</li>
          <li>Code snippets and examples</li>
        </ul>
        <p>I created this resource to help myself and others in the robotics community have a centralized place for learning materials.</p>
      `,
      images: [
        { src: "/project_images/gitbook.png", alt: "Gitbook screenshot showing ROS tutorials" },
        // { src: "/placeholder.svg?height=600&width=800", alt: "Gitbook screenshot showing computer vision examples" },
        // { src: "/placeholder.svg?height=600&width=800", alt: "Gitbook screenshot showing SLAM algorithms" },
      ],
      category: "Ongoing",
      tags: ["Gitbook", "ROS", "Tutorials", "Robotics"],
      demoUrl: "https://leftover-ice.gitbook.io/resources",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
    },
    {
      title: "Mellow - Conversational AI for Mental Health 🧠",
      description:
        "A conversational AI solution analyzing speech for workplace mental health insights. Built during a 36-Hour hackathon (NTU Deep Learning Week 2025).",
      longDescription: `
        <p>Mellow is a conversational AI solution designed to analyze speech and provide insights into workplace mental health. The project was developed during a hackathon and focuses on using AI to promote mental well-being.</p>
        <p>Key features of Mellow:</p>
        <ul>
          <li>AI-powered chatbot gathers voice data from users for analysis</li>
          <li>Speech analysis detects patterns correlated to mental health issues</li>
          <li>Dashboard displays screening results and trends</li>
          <li>Screening trend analysis based on historical data</li>
          <li>Targeted improvement plans for mental health support</li>
        </ul>
        <p>The project leverages technologies such as Twilio, Python, PyTorch, Firebase, and Next.js to provide actionable insights and promote mental health awareness in the workplace.</p>
      `,
      images: [
        { src: "/project_images/mellow_dashboard.png", alt: "Mellow Dashboard" },
        // { src: "/project_images/mellow_chatbot.png", alt: "Mellow Chatbot Interface" },
      ],
      category: "Completed",
      completedDate: "March 2025",
      tags: ["Hackathon", "AI", "Speech Analysis", "Mental Health", "Twilio", "Python", "PyTorch", "Firebase", "Next.js"],
      codeUrl: "https://github.com/Joel-Milla/depression_predictor/tree/master", // Replace with your actual GitHub repo URL
      videoUrl: "https://youtu.be/4y0V633iIqU", // Replace with your actual demo video URL
      icon: <Monitor className="h-10 w-10 text-primary" />,
    },
    {
      title: "SONDRA Challenge 2025",
      description:
        "The SONDRA Challenge 2025 focuses on SDR in urban environments. Our team won 1st place with DroneGuard, a real-time drone detection system combining SDR-based RF machine learning and YOLOv8 computer vision. Powered by Hailo AI and Raspberry Pi with real-time alerts via web and Telegram.",
      longDescription: `
        <p>The SONDRA Challenge 2025 is an international competition focused on Software-Defined Radio (SDR) applications in urban environments. Our team developed <strong>DroneGuard</strong>, a real-time drone detection system that combines SDR-based RF machine learning and YOLOv8 computer vision.</p>
        <p>Key features of DroneGuard:</p>
        <ul>
          <li>SDR-based RF signal processing for drone detection</li>
          <li>YOLOv8-powered computer vision for visual confirmation</li>
          <li>Edge AI implementation using Hailo AI Accelerator and Raspberry Pi</li>
          <li>Real-time alerts via web interface and Telegram notifications</li>
          <li>Achieved 95% detection accuracy in real-world tests</li>
        </ul>
        <p>As winners, our team was awarded a sponsored trip to the 6th SONDRA Workshop in France, where we networked with researchers, engineers, and PhD students from leading European institutes.</p>
      `,
      images: [
        { src: "/project_images/DroneGuard_Team.avif", alt: "DroneGuard Team Photo" },
        // { src: "/project_images/DroneGuard_Interface.png", alt: "DroneGuard Web Interface" },
        // { src: "/project_images/DroneGuard_Detection.png", alt: "Drone Detection Visualization" },
      ],
      category: "Completed",
      completedDate: "February 2025",
      tags: [
        "Software-Defined Radio (SDR)",
        "Signal Processing",
        "Computer Vision",
        "YOLOv8",
        "TensorFlow",
        "Edge AI",
        "Hailo AI Accelerator",
        "Raspberry Pi",
        "Python",
      ],
      infoUrl: "https://cde.nus.edu.sg/ece/news-detail/nus-ceg-students-won-1st-place-in-the-sondra-challenge-2025/",
      codeUrl: "https://github.com/ShengBin-101/sdr-pi5-vercel/tree/main",
      icon: <Monitor className="h-10 w-10 text-primary" />,
    },
    {
      title: "Hack For Good 2025",
      description:
        "Developed a Minimart and Voucher System for Muhammadiyah Welfare Home as part of Hack For Good 2025, a student-driven hackathon focused on social good.",
      longDescription: `
        <p>Hack For Good (H4G) 2025 is a student-driven hackathon organized by the Developer Group at NUS. The mission of the hackathon is to inspire students to harness technology for social good by solving real-world challenges faced by Non-Profit Organizations (NPOs).</p>
        <p>Our team, Gone4Good, developed a Minimart and Voucher System for Muhammadiyah Welfare Home. The system aimed to streamline the welfare home's operations and improve the distribution of resources to beneficiaries.</p>
        <p>Key features of the project:</p>
        <ul>
          <li>Digital voucher system for beneficiaries to redeem essential items</li>
          <li>Inventory management system for tracking stock levels</li>
          <li>User-friendly interface for administrators and beneficiaries</li>
          <li>Real-time reporting and analytics for resource allocation</li>
        </ul>
        <p>This project demonstrated the potential of technology to address the operational challenges faced by NPOs and improve their impact on the community.</p>
      `,
      images: [
        { src: "/project_images/hack4good2025.png", alt: "Minimart and Voucher Login Page" },
      ],
      category: "Completed",
      completedDate: "January 2025",
      tags: ["Hackathon", "Social Good", "Inventory Management", "Digital Vouchers", "Web Development"],
      codeUrl: "https://github.com/ShengBin-101/Hack4Good2025",
      videoUrl: "https://youtu.be/0zOUbmb2gpM",
      icon: <Monitor className="h-10 w-10 text-primary" />,
    },
    {
      title: "Maritime RobotX Challenge 2024 🚢",
      description:
        "Under Team Bumblebee, I worked on LiDAR and Camera Perception for the Autonomous Surface Vehicle (ASV), this vehicle, along with the drone, won first place.",
      longDescription: `
        <p>The Maritime RobotX Challenge is an international robotics competition focused on maritime systems. As part of NUS Team Bumblebee, I contributed to our first-place victory by developing perception systems for our Autonomous Surface Vehicle (ASV).</p>
        <p>My contributions included:</p>
        <ul>
          <li>Implementing LiDAR-based obstacle detection and classification</li>
          <li>Developing camera-based object recognition for maritime objects</li>
          <li>Creating sensor fusion algorithms to combine LiDAR and camera data</li>
          <li>Optimizing perception pipelines for real-time performance</li>
          <li>Testing and validating perception systems in various environmental conditions</li>
        </ul>
        <p>The competition required our ASV to autonomously navigate through a course, identify objects, and perform various tasks without human intervention.</p>
      `,
      images: [
        { src: "/project_images/bbasv4_thumbnail.webp", alt: "Team Bumblebee's ASV in action" },
        { src: "/project_images/rx24_sea_trial.jpg", alt: "LiDAR perception visualization" },
        { src: "/project_images/rx24_team.jpg", alt: "Camera object detection results" },
        { src: "/project_images/rx24_win.jpg", alt: "Team receiving first place award" },
      ],
      category: "Completed",
      completedDate: "October 2024",
      tags: ["Robotics", "LiDAR-Camera Perception", "ROS"],
      newsUrl: "https://cde.nus.edu.sg/news-detail/team-bumblebee-robotx-challenge-2024/",
      infoUrl: "https://bumblebee.sg/competitions/robotx/robotx24/2024/",
      icon: <Ship className="h-10 w-10 text-primary" />,
    },
    {
      title: "Hornet 9.0 🚢",
      description:
        "NUS Bumblebee's Hornet Program, a 9-month training program to build a Autonomous Underwater Vehicle (AUV) from scratch. Part of the Software Team, worked on Perception. Competed in Singapore Autonomous Underwater Vehicle Challenge (SAUVC) 2024.",
      longDescription: `
        <p>Hornet 9.0 was a comprehensive 9-month program where we built an Autonomous Underwater Vehicle (AUV) from scratch. As the Perception/Localisation Lead, I was responsible for developing the computer vision systems that allowed our AUV to navigate underwater environments.</p>
        <p>Key responsibilities and achievements:</p>
        <ul>
          <li>Led a team of 5 software engineers working on perception systems</li>
          <li>Implemented underwater object detection using YOLO and custom datasets</li>
          <li>Developed color filtering algorithms for identifying competition elements</li>
          <li>Created a localization system using visual markers and sonar data</li>
          <li>Integrated perception outputs with the navigation and control systems</li>
        </ul>
        <p>Our team competed in the Singapore Autonomous Underwater Vehicle Challenge (SAUVC) 2024, where our AUV successfully completed multiple competition tasks autonomously.</p>
      `,
      images: [
        { src: "/project_images/Hornet9.gif", alt: "Hornet 9.0 AUV" },
        // { src: "/placeholder.svg?height=600&width=800", alt: "Underwater testing" },
        // { src: "/placeholder.svg?height=600&width=800", alt: "Vision system output" },
        // { src: "/placeholder.svg?height=600&width=800", alt: "Team working on the AUV" },
      ],
      category: "Completed",
      completedDate: "April 2024",
      tags: ["ROS", "OpenCV", "YOLO", "Robotics"],
      infoUrl: "https://sauvc.org/#teams",
      icon: <Ship className="h-10 w-10 text-primary" />,
    },
    {
      title: "Alex - Search & Rescue Robot 🤖",
      description:
        "Tele-operated vehicle with search and rescue functions using Raspberry Pi, Arduino Uno, ROS, and Lidar. Done as a group project for CG2111A course which focuses on Bare Metal Programming and secure networking with TLS.",
      longDescription: `
        <p>Alex is a search and rescue robot developed as part of the CG2111A course on Bare Metal Programming. The robot is designed to navigate through disaster scenarios and identify potential survivors.</p>
        <p>Technical features:</p>
        <ul>
          <li>Raspberry Pi for high-level control and communication</li>
          <li>Arduino Uno for low-level motor control and sensor integration</li>
          <li>LiDAR sensor for mapping and obstacle avoidance</li>
          <li>Secure communication using TLS for remote operation</li>
          <li>Custom bare metal programming for efficient resource utilization</li>
        </ul>
        <p>The project required implementing communication protocols between the Raspberry Pi and Arduino, creating mapping algorithms using LiDAR data, and ensuring secure remote operation through TLS.</p>
      `,
      images: [
        { src: "/project_images/alex.jpeg", alt: "Alex robot" },
        { src: "/project_images/alex.gif", alt: "LiDAR mapping visualization" },
      ],
      category: "Completed",
      completedDate: "April 2024",
      tags: ["ROS", "Raspberry Pi", "Bare Metal Programming", "TLS"],
      codeUrl: "https://github.com/ShengBin-101/alex_ws",
      videoUrl: "https://youtu.be/yZxzk0InYiY/",
      icon: <Robot className="h-10 w-10 text-primary" />,
    },
    {
      title: "FPGA Project 💻",
      description:
        "Programmed a multiplayer game involving inter-board serial communication for synchronisation of state machines. Done as a group project for a Digital System Design course (EE2026).",
      longDescription: `
        <p>This FPGA project involved creating a multiplayer game that ran on multiple FPGA boards communicating with each other. The project was implemented using VHDL and focused on digital system design principles.</p>
        <p>Key technical aspects:</p>
        <ul>
          <li>State machine design and implementation</li>
          <li>Serial communication protocols between FPGA boards</li>
          <li>Synchronization of game states across multiple devices</li>
          <li>VGA display output for game visualization</li>
          <li>Input handling from buttons and switches</li>
        </ul>
        <p>The game featured multiple players competing in a maze-like environment, with each player controlled from a separate FPGA board. The boards communicated game state updates to ensure all players saw a consistent game world.</p>
      `,
      images: [
        { src: "/project_images/fpga.gif", alt: "FPGA board setup" },
      ],
      category: "Completed",
      completedDate: "April 2024",
      tags: ["FPGA", "VHDL"],
      icon: <Cpu className="h-10 w-10 text-primary" />,
    },
    {
      title: "mBot - Maze Solving Robot 🤖",
      description:
        "Done as a group project for CG1111A. An autonomous robot that can solve a maze, detect and process data from the environment using Arduino Uno. Utilizes PID control for line following and obstacle avoidance and K-NN algorithm for colour identification.",
      longDescription: `
        <p>The mBot project was an autonomous maze-solving robot built using Arduino Uno. The robot was designed to navigate through a maze, follow lines, avoid obstacles, and identify colors using various sensors.</p>
        <p>Technical implementation:</p>
        <ul>
          <li>PID control algorithm for smooth line following</li>
          <li>Ultrasonic sensors for obstacle detection and avoidance</li>
          <li>Color sensors with K-NN algorithm for color classification</li>
          <li>Motor control for precise movement and turning</li>
          <li>Maze-solving algorithm implementation</li>
        </ul>
        <p>The robot successfully demonstrated autonomous navigation through complex mazes while identifying colored markers along the path.</p>
      `,
      images: [
        { src: "/project_images/mbot.gif", alt: "mBot robot" },
        // { src: "/placeholder.svg?height=600&width=800", alt: "Maze setup" },
        // { src: "/placeholder.svg?height=600&width=800", alt: "Robot navigating the maze" },
      ],
      category: "Completed",
      completedDate: "November 2023",
      tags: ["Arduino"],
      codeUrl: "https://github.com/ShengBin-101/CG1111A-Final-Project",
      icon: <Robot className="h-10 w-10 text-primary" />,
    },
    {
      title: "Intelligent Transport System 🚦",
      description:
        "Done as a Final Year Project in Ngee Ann Poly (2 person team). Streamlines on-campus Autonomous Vehicle(AV) trials with real-time traffic analysis and enable traffic prioritization for AVs at junctions.",
      longDescription: `
        <p>The Intelligent Transport System was my final year project at Ngee Ann Polytechnic, developed to support autonomous vehicle trials on campus. The system provided real-time traffic analysis and prioritization for AVs at intersections.</p>
        <p>System components:</p>
        <ul>
          <li>ESP32 microcontrollers for traffic light control and communication</li>
          <li>Tiny-YOLO deep learning model for vehicle and pedestrian detection</li>
          <li>Bluetooth Low Energy (BLE) for communication between AVs and traffic infrastructure</li>
          <li>Real-time traffic flow analysis algorithms</li>
          <li>Priority scheduling system for autonomous vehicles</li>
        </ul>
        <p>The system successfully demonstrated improved traffic flow and reduced wait times for autonomous vehicles during campus trials.</p>
      `,
      images: [
        { src: "/project_images/ITS.gif", alt: "Traffic junction setup" },
        // { src: "/placeholder.svg?height=600&width=800", alt: "Object detection visualization" },
        // { src: "/placeholder.svg?height=600&width=800", alt: "System architecture diagram" },
      ],
      category: "Completed",
      completedDate: "October 2020",
      tags: ["Microcontroller (ESP32)", "Deep Learning (Tiny-Yolo)", "Bluetooth Low Energy (BLE)"],
      codeUrl: "https://github.com/tanxuanyun/Tiny-YOLO-Vehicle-Detection-and-Counting",
      icon: <Monitor className="h-10 w-10 text-primary" />,
    },
    {
      title: "Lego Brick Detection 📷",
      description:
        "Done as an assignment for a computer vision (OpenCV) course in Python. A lego detection and counting program using image processing techniques for identification.",
      longDescription: `
        <p>The Lego Brick Detection project was developed as part of a computer vision course. It uses image processing techniques to identify and count different types of Lego bricks in images.</p>
        <p>Technical implementation:</p>
        <ul>
          <li>Color segmentation for initial brick detection</li>
          <li>Contour analysis for shape identification</li>
          <li>Feature extraction to classify brick types</li>
          <li>Counting algorithm to tally different brick categories</li>
          <li>Web interface for uploading images and viewing results</li>
        </ul>
        <p>The system could accurately identify and count different Lego brick types, sizes, and colors from photographs with varying lighting conditions.</p>
      `,
      images: [
        { src: "/project_images/lego_opencv.gif", alt: "Lego brick detection results" },
        // { src: "/placeholder.svg?height=600&width=800", alt: "Image processing steps" },
        // { src: "/placeholder.svg?height=600&width=800", alt: "Web interface" },
      ],
      category: "Completed",
      completedDate: "October 2020",
      tags: ["Python", "OpenCV", "HTML/CSS/JavaScript"],
      codeUrl: "https://github.com/ShengBin-101/lego-brick-detection",
      icon: <Monitor className="h-10 w-10 text-primary" />,
    },
    {
      title: "Autonomous Robot Car 🚗",
      description:
        "Developed teaching materials to guide students with hardware/electronics assembly and ROS basics to future students. This was also my first time working with ROS.",
      longDescription: `
        <p>The Autonomous Robot Car project involved developing a small-scale autonomous vehicle and creating comprehensive teaching materials for future students. This was my first experience with ROS (Robot Operating System).</p>
        <p>Project components:</p>
        <ul>
          <li>3D CAD design and printing of custom chassis components</li>
          <li>ROS implementation for sensor integration and control</li>
          <li>Raspberry Pi configuration for onboard computing</li>
          <li>Development of detailed assembly instructions</li>
          <li>Creation of step-by-step ROS tutorials for beginners</li>
        </ul>
        <p>The teaching materials were successfully used to guide other students in building and programming their own autonomous vehicles, providing a hands-on introduction to robotics and ROS.</p>
      `,
      images: [
        { src: "/project_images/rnd_robot.gif", alt: "Autonomous robot car" }
      ],
      category: "Completed",
      completedDate: "April 2020",
      tags: ["ROS", "3D CAD", "Raspberry Pi"],
      icon: <Robot className="h-10 w-10 text-primary" />,
    },
  ]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  // Update the openProjectModal function to use the correct type
  const openProjectModal = (project: PortfolioProject) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section id="projects" className="py-16 md:py-24 border-t">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          A showcase of my technical projects and contributions.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <Card
            key={index}
            className="overflow-hidden flex flex-col h-full cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => openProjectModal(project)}
          >
            {/* Thumbnail */}
            <div className="relative h-48 w-full overflow-hidden bg-muted flex items-center justify-center">
              {project.images && project.images.length > 0 ? (
                <Image
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image maintains aspect ratio and covers the container
                  priority={index === 0} // Optionally prioritize the first image for faster loading
                  unoptimized={project.images[0].src.endsWith(".gif")} // Add unoptimized for .gif files
                />
              ) : (
                project.icon
              )}
            </div>

            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{project.title}</CardTitle>
                {project.category === "Completed" && project.completedDate && (
                  <Badge variant="outline">Completed on {project.completedDate}</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              {project.codeUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(project.codeUrl, "_blank")
                  }}
                >
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              )}
              {project.demoUrl && (
                <Button
                  size="sm"
                  asChild
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(project.demoUrl, "_blank")
                  }}
                >
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    Demo
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
              {project.infoUrl && (
                <Button
                  size="sm"
                  asChild
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(project.infoUrl, "_blank")
                  }}
                >
                  <a href={project.infoUrl} target="_blank" rel="noopener noreferrer">
                    More Info
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
              {project.videoUrl && (
                <Button
                  size="sm"
                  asChild
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(project.videoUrl, "_blank")
                  }}
                >
                  <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                    Video
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      <ProjectModal isOpen={isModalOpen} onClose={closeProjectModal} project={selectedProject} />
    </section>
  )
}

