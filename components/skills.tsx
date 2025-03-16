import { Code, Database, Layout, Cpu, PenToolIcon as Tool } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-8 w-8 text-primary" />,
      skills: ["C/C++", "Python", "Java", "HTML/CSS/JavaScript", "Dart", "XML", "ARM Assembly"],
    },
    {
      title: "Hardware",
      icon: <Cpu className="h-8 w-8 text-primary" />,
      skills: ["Robot Operating System (ROS)", "Arduino", "Verilog"],
    },
    {
      title: "Frameworks",
      icon: <Layout className="h-8 w-8 text-primary" />,
      skills: ["React", "Express", "Flutter", "Firebase"],
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: ["Firestore"],
    },
    {
      title: "Tools",
      icon: <Tool className="h-8 w-8 text-primary" />,
      skills: ["Git/GitHub", "Docker", "Kubernetes", "Jupyter Notebook", "Android Studio"],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 border-t">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Technical skills I've developed throughout my academic and project experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border">
            <div className="flex flex-col items-center text-center gap-2 mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

