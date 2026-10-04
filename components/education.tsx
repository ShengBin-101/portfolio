import { Calendar, GraduationCap, Award, Users, BookOpen, FlaskConical } from "lucide-react"

export default function Education() {
  const education = [
    {
      institution: "National University of Singapore",
      degree: "Bachelor of Engineering in Computer Engineering",
      period: "2023 - Jan 2027",
      achievements: ["NUS Merit Scholarship Recipient"],
      research: [
        "Bachelor's Thesis: Transparent Object Grasping - developing an end-to-end pipeline to estimate grasp poses for transparent and opaque objects for robotic grasping. NUS Advanced Robotics Centre, supervised by Prof Marcelo Ang.",
      ],
      courses: [],
      coCurricular: [
        "NUS Team Bumblebee - Team Lead (Jan 2026 - Dec 2026)",
        "NUS Team Bumblebee - Software Engineer",
        "NUS Team Bumblebee - Maritime RobotX Challenge 2024 Champions",
        "Hornet X Programme - Software Subteam Lead (Facilitator)",
        "Hornet 9.0 Programme - Perception/Localisation Lead",
      ],
      notes: ["Graduating January 2027"],
    },
    {
      institution: "Lund University (LTH)",
      degree: "Exchange Programme, Faculty of Engineering",
      period: "Aug 2025 - Jan 2026",
      achievements: [],
      research: [],
      courses: ["Non-linear Optimisation", "Markov Chains", "Multi-variable Calculus", "Computer Architecture"],
      coCurricular: [],
      notes: [],
    },
    {
      institution: "Ngee Ann Polytechnic",
      degree: "Diploma in Engineering",
      period: "2018 - 2021",
      achievements: [
        "Diploma with Merit",
        "Lien Ying Chow Scholarship Recipient",
        "Placed on Dean's List (2019, 2020)",
        "Faculty Merit Award",
      ],
      research: [],
      courses: [],
      coCurricular: ["Archery Club - Team Captain"],
      notes: [],
    },
  ]

  return (
    <section id="education" className="py-16 md:py-24 border-t">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">My academic journey and achievements.</p>
      </div>

      <div className="space-y-8 max-w-3xl mx-auto">
        {education.map((item, index) => (
          <div key={index} className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">{item.institution}</h3>
                <div className="flex items-center text-muted-foreground mt-1">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  <span>{item.degree}</span>
                </div>
              </div>
              <div className="mt-2 md:mt-0 md:text-right">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2 md:order-1 md:ml-2 md:mr-0" />
                  <span className="md:order-0">{item.period}</span>
                </div>
              </div>
            </div>

            {item.achievements.length > 0 && (
              <div className="mt-4">
                <h4 className="font-medium flex items-center mb-2">
                  <Award className="h-4 w-4 mr-2" />
                  Achievements
                </h4>
                <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                  {item.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.research.length > 0 && (
              <div className="mt-4">
                <h4 className="font-medium flex items-center mb-2">
                  <FlaskConical className="h-4 w-4 mr-2" />
                  Research
                </h4>
                <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                  {item.research.map((entry, i) => (
                    <li key={i}>{entry}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.courses.length > 0 && (
              <div className="mt-4">
                <h4 className="font-medium flex items-center mb-2">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Courses Completed
                </h4>
                <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                  {item.courses.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.coCurricular.length > 0 && (
              <div className="mt-4">
                <h4 className="font-medium flex items-center mb-2">
                  <Users className="h-4 w-4 mr-2" />
                  Co-Curricular
                </h4>
                <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                  {item.coCurricular.map((activity, i) => (
                    <li key={i}>{activity}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.notes.length > 0 && (
              <div className="mt-4 text-muted-foreground italic">
                {item.notes.map((note, i) => (
                  <p key={i}>{note}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

