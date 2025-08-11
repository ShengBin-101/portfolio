import { Calendar, GraduationCap, Award, Users } from "lucide-react"

export default function Education() {
  const education = [
    {
      institution: "National University of Singapore",
      degree: "Bachelor of Engineering in Computer Engineering",
      period: "2023 - 2027",
      achievements: ["NUS Merit Scholarship Recipient"],
      coCurricular: [
        "NUS Team Bumblebee - Software Engineer",
        "NUS Team Bumblebee - Maritime RobotX Challenge 2024 Champions",
        "Hornet X Programme - Software Subteam Lead (Facilitator)",
        "Hornet 9.0 Programme - Perception/Localisation Lead",
      ],
      notes: ["Graduating May 2027"],
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

