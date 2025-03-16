import { Calendar, Briefcase, Users, Tag, ExternalLink } from "lucide-react"

export default function WorkExperience() {
  const workExperience = [
    {
      company: "Bumblebee Autonomous Systems",
      role: "Robotics Engineer",
      period: "May 2024 - Present",
      location: "Singapore",
      website: "https://bumblebee.sg", // Added website link
      additionalInfo: [
        "Part of the Software Team, focusing on developing robot autonomy for our different robot platforms.",
        "Team Bumblebee is a competitive robotics team specialising in autonomous maritime systems, comprising students from multiple disciplines such as Mechanical Engineering, Electrical Engineering, Computer Engineering, and Computer Science.",
      ],
      responsibilities: [],
    },
    {
      company: "DSO National Laboratories",
      role: "Research And Development Intern (Robotics)",
      period: "May 2024 - Aug 2024 (3 months)",
      location: "Singapore",
      additionalInfo: [
        "Researched and improved state-of-the-art Targetless Multi-Sensor Extrinsic Calibration for Robot Systems.",
        "Calibration software implemented in C++.",
      ],
      tags: ["C++", "Robotics", "Sensor Calibration", "Research"],
      responsibilities: [], 
    },
    {
      company: "NUS Computing",
      role: "Teaching Assistant - Engineering Principles & Practice II",
      period: "Jan 2025 - Apr 2025 (4 months)",
      location: "Singapore, Singapore",
      additionalInfo: ["AY24/25 Sem 2"],
      responsibilities: [
        "Teaching students hardware interfacing, debugging techniques and problem-solving skills",
        "Guiding students during laboratory sessions and assisting in debugging Baremetal Programming on Atmega328P Microcontroller and TLS Programming",
        "Grading Lab Reports for Cohort",
      ],
    },
    {
      company: "NUS College of Engineering and Design (CDE)",
      role: "Teaching Assistant - Engineering Principles & Practice I",
      period: "Aug 2024 - Nov 2024 (4 months)",
      location: "Singapore, Singapore",
      additionalInfo: ["AY24/25 Sem 1"],
      responsibilities: [
        "Teaching students hardware debugging techniques and problem-solving skills",
        "Guiding students during laboratory sessions and assisting in debugging electrical components and Arduino scripts",
        "Grading Lab Reports for Cohort",
      ],
    },
  ]

  return (
    <section id="work-experience" className="py-16 md:py-24 border-t">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">My professional journey and contributions.</p>
      </div>

      <div className="space-y-8 max-w-3xl mx-auto">
        {workExperience.map((item, index) => (
          <div key={index} className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold flex items-center">
                  {item.company}
                  {item.website && (
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-primary hover:underline flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  )}
                </h3>
                <div className="flex items-center text-muted-foreground mt-1">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span>{item.role}</span>
                </div>
              </div>
              <div className="mt-2 md:mt-0 md:text-right">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2 md:order-1 md:ml-2 md:mr-0" />
                  <span className="md:order-0">{item.period}</span>
                </div>
              </div>
            </div>

            {item.responsibilities.length > 0 && (
              <div className="mt-4">
                <h4 className="font-medium flex items-center mb-2">
                  <Users className="h-4 w-4 mr-2" />
                  Responsibilities
                </h4>
                <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                  {item.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.additionalInfo.length > 0 && (
              <div className="mt-4 text-muted-foreground">
                {item.additionalInfo.map((info, i) => (
                  <p key={i}>{info}</p>
                ))}
              </div>
            )}

            {item.tags && item.tags.length > 0 && (
              <div className="mt-4">
                <h4 className="font-medium flex items-center mb-2">
                  <Tag className="h-4 w-4 mr-2" />
                  Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

