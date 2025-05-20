import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Building Reliable Software, One Layer at a Time
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            I'm a software engineer passionate about crafting clean, scalable, and maintainable systems.
            I focus on architecture, performance, and developer experience—always learning, always iterating.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/resume" className="flex items-center gap-2">
                Resume <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
          <div className="flex gap-4 mt-8">
            <Link
              href="https://github.com/Shiro-cha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/nomena-razafimahandry/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/placeholder-user.jpg?height=320&width=320"
              alt="Profile Image"
              width={320}
              height={320}
              className="rounded-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full mix-blend-overlay" />
          </div>
        </div>
      </div>
    </div>
  )
}
