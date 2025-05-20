import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "VoGit",
    description:
      "A file transfer application with automated version control and secure transfer, developed as an end-of-study project.",
    image: "/images/vogit.png",
    tags: ["Node.js", "React", "AWS", "Git", "OpenSSH"],
    demoUrl: "#",
    githubUrl: "https://github.com/Shiro-cha/VoGit-back",
  },
  {
    title: "Potify",
    description:
      "A personalized music experience platform, integrating Spotify API with machine learning for recommendations.",
    image: "/images/potify.png",
    tags: ["Next.js", "Tailwind CSS", "Spotify API", "Machine Learning"],
    demoUrl: "#",
    githubUrl: "https://github.com/Shiro-cha/potify",
  },
  {
    title: "STP (Smart Transmission Protocol)",
    description:
      "An experimental data transfer system optimized for low-bandwidth environments, focusing on efficiency and reliability.",
    image: "/images/stp.png",
    tags: ["C++", "Linux", "Networking", "Protocol Design"],
    demoUrl: "#",
    githubUrl: "https://github.com/Shiro-cha/stp",
  },
  {
    title: "Origami Generator",
    description:
      "A tool that generates folder structures based on JSON/YAML configurations, streamlining project setup.",
    image: "/images/origami-generator.png",
    tags: ["YAML", "JSON", "Automation", "CLI"],
    demoUrl: "#",
    githubUrl: "https://github.com/Shiro-cha/origami-generator",
  },
  {
    title: "TeaCherS Client",
    description:
      "Front-end application for the TeaCherS platform, enhancing educational experiences through interactive features.",
    image: "/images/teachers-client.png",
    tags: ["React", "TypeScript", "Education", "UI/UX"],
    demoUrl: "#",
    githubUrl: "https://github.com/Shiro-cha/TeaCherS-client",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <Github className="h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  Live Demo
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
