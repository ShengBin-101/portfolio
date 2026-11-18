import { ArrowUpRight, Newspaper } from "lucide-react"

export default function News() {
  const articles = [
    {
      source: "Lianhe Zaobao",
      date: "Nov 2026",
      language: "Chinese",
      title: "新美合办国际空海潜三域机器人挑战赛 10国22队以机器人“应对暴风雨”",
      subtitle: "Singapore and the US co-host RobotX 2026: 22 teams from 10 countries take on “Storm Response”",
      description:
        "Featured as the student leading NUS Team Bumblebee at the Maritime RobotX Challenge 2026, held at Marina Bay. I shared my journey from first picking up robotics in polytechnic to competing on the international stage for the third time, and what it meant to watch our vessel set off autonomously on home waters.",
      url: "https://www.zaobao.com.sg/news/singapore/story20261110-9977401",
      linkLabel: "Read article",
    },
    {
      source: "NUS College of Design and Engineering",
      date: "",
      language: "",
      title: "“Seeing the robot in person provided a clear vision of what it means for a robot to become an ‘avatar’ for the user.”",
      subtitle: "",
      description: "Quoted as Team Lead of NUS Team Bumblebee in a post by the NUS College of Design and Engineering.",
      url: "https://www.facebook.com/nus.cde/posts/seeing-the-robot-in-person-provided-a-clear-vision-of-what-it-means-for-a-robot-/1690712982499503/",
      linkLabel: "View post",
    },
    {
      source: "NUS Electrical and Computer Engineering",
      date: "2025",
      language: "",
      title: "NUS CEG students won 1st place in the SONDRA Challenge 2025",
      subtitle: "",
      description:
        "Our team won 1st place with DroneGuard, a real-time drone detection system combining SDR-based RF machine learning and computer vision.",
      url: "https://cde.nus.edu.sg/ece/news/nus-ceg-students-won-1st-place-in-the-sondra-challenge-2025/",
      linkLabel: "Read article",
    },
  ]

  return (
    <section id="news" className="py-16 md:py-24 border-t">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">In the News</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Media and school features on my work and my team.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-card text-card-foreground p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
          >
            <div className="flex items-center text-sm text-muted-foreground mb-3">
              <Newspaper className="h-4 w-4 mr-2 shrink-0 text-primary" />
              <span>
                {article.source}
                {article.date && ` · ${article.date}`}
                {article.language && ` · ${article.language}`}
              </span>
            </div>
            <h3
              className={`text-lg font-semibold group-hover:text-primary transition-colors ${article.subtitle ? "mb-1" : "mb-3"}`}
            >
              {article.title}
            </h3>
            {article.subtitle && <p className="text-sm text-muted-foreground italic mb-3">{article.subtitle}</p>}
            <p className="text-muted-foreground mb-4 flex-1">{article.description}</p>
            <span className="inline-flex items-center text-sm font-medium text-primary">
              {article.linkLabel} <ArrowUpRight className="h-4 w-4 ml-1" />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
