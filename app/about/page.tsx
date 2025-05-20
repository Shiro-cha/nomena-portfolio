import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <div className="relative w-full aspect-square max-w-xs mx-auto mb-6">
              <Image
                src="/images/profile.jpg" // Remplace par ta vraie image
                alt="Nomena Fitiavana Razafimahandry"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Location</h3>
                <p className="text-muted-foreground">Ambohidratrimo, Madagascar</p>
              </div>

              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-muted-foreground">noum.rzdr@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Background</h2>
            <p className="text-muted-foreground mb-4">
              I'm Nomena Fitiavana, a software engineer focused on clean architecture, developer experience,
              and scalable systems. I have hands-on experience with modern frameworks like React, Laravel, Node.js, and Spring,
              and I've worked on both web platforms and telecom-grade infrastructures.
            </p>
            <p className="text-muted-foreground">
              Currently working as an IN VAS Engineer, I manage critical telecom services, automate systems with Shell & Python,
              and deploy secure infrastructures using Huawei tech and cloud tools. I'm driven by the desire to build robust,
              elegant solutions, and to always stay learning, building, and leveling up.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Programming Languages</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>JavaScript / TypeScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>PHP</li>
                  <li>Bash / Shell</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Frameworks & Libraries</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>React, Next.js, Angular</li>
                  <li>Laravel, Symfony</li>
                  <li>Node.js, Express, NestJS</li>
                  <li>Spring Boot, Vaadin</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Tools & Technologies</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Git, Docker, GitLab CI/CD</li>
                  <li>AWS (S3, EC2, CodePipeline)</li>
                  <li>Linux Systems & Shell Automation</li>
                  <li>REST APIs, OpenSSH, GraphQL</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Other Skills</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Clean Architecture & SOLID Principles</li>
                  <li>CI/CD & DevOps Mindset</li>
                  <li>Agile / Team Collaboration</li>
                  <li>Critical Infrastructure Ops</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Master II – Systems & Information Processing</h3>
                <p className="text-muted-foreground">ESPA Vontovorona • 2019 – 2024</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Baccalauréat – Série C</h3>
                <p className="text-muted-foreground">Lycée Rambolamasoandro • 2015 – 2018</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
