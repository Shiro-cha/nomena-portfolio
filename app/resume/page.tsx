import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Resume</h1>
        <Button asChild>
          <Link href="/CV_2025-05-20_Nomena_Fitiavana_RAZAFIMAHANDRY.pdf" download className="flex items-center gap-2">
            <Download className="h-4 w-4" /> Download PDF
          </Link>
        </Button>
      </div>

      <div className="space-y-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Nomena Fitiavana Razafimahandry</h2>
          <p className="text-muted-foreground">Software Engineer</p>
          <div className="flex justify-center gap-4 text-sm">
            <span>Madagascar</span>
            <span>•</span>
            <a href="mailto:noum.rzdr@gmail.com" className="text-primary hover:underline">
              contact@nomena.dev
            </a>
            <span>•</span>
            <a
              href="https://github.com/Shiro-cha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/fitiavana.razafimahandry/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Summary */}
        <section>
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">Professional Summary</h3>
          <p className="text-muted-foreground">
            Passionate and detail-oriented software engineer with experience across modern web technologies,
            system automation, and cloud infrastructure. Strong advocate for clean architecture, DevOps practices, 
            and continuous improvement. Skilled in building scalable, secure, and maintainable solutions.
          </p>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Programming Languages</h4>
              <p className="text-muted-foreground">Java, JavaScript, TypeScript, PHP, Python, Bash</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Frameworks & Libraries</h4>
              <p className="text-muted-foreground">React, Next.js, Symfony, Laravel, Spring, Angular, Node.js, Express</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Databases</h4>
              <p className="text-muted-foreground">PostgreSQL, Oracle, MongoDB, MySQL, GaussDB</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">DevOps & Tools</h4>
              <p className="text-muted-foreground">Linux, Docker, GitLab CI/CD, AWS (S3, EC2, CodePipeline), Git, OpenSSH</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">Work Experience</h3>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-medium">IN VAS Operating Engineer</h4>
                <span className="text-sm text-muted-foreground">Jul 2024 – Present</span>
              </div>
              <p className="text-muted-foreground mb-2">Yas Madagascar, Analakely</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Automation and monitoring using Python, Bash, and Linux</li>
                <li>Managed Intelligent Network systems and Mobile Money databases</li>
                <li>Deployed and optimized services on Huawei telecom infrastructure</li>
                <li>Maintained critical environments and wrote automation scripts</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-medium">PHP/Symfony Developer</h4>
                <span className="text-sm text-muted-foreground">Sep 2023 – 2024</span>
              </div>
              <p className="text-muted-foreground mb-2">Ritec, Anosizato</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Created and secured dynamic websites</li>
                <li>Automated deployments using GitLab CI/CD pipelines</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-medium">React/Laravel Developer</h4>
                <span className="text-sm text-muted-foreground">May 2022 – 2023</span>
              </div>
              <p className="text-muted-foreground mb-2">MEDDoC, Ampefiloha</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Built a healthcare platform with user dashboards and admin tools</li>
                <li>Used AWS services for hosting and scalability</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-medium">End of Study Project – VoGit</h4>
                <span className="text-sm text-muted-foreground">Aug 2022</span>
              </div>
              <p className="text-muted-foreground mb-2">ESPA, Vontovorona</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Built a secure file transfer app with automated version control</li>
                <li>Used Node.js, React, Git, OpenSSH, AWS</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">Education</h3>

          <div>
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-medium">Master II – Systems & Information Processing</h4>
              <span className="text-sm text-muted-foreground">2019 – 2024</span>
            </div>
            <p className="text-muted-foreground">ESPA Vontovorona, Antananarivo</p>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">Certifications</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>SQL (Intermediate) – HackerRank</li>
            <li>REST API (Intermediate) – HackerRank</li>
            <li>Frontend Developer (React) – HackerRank</li>
            <li>JavaScript (Intermediate) – HackerRank</li>
            <li>Node.js (Basic & Intermediate) – HackerRank</li>
          </ul>
        </section>

        {/* Languages */}
        <section>
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">Languages</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium">English</h4>
              <p className="text-muted-foreground">Professional working proficiency</p>
            </div>
            <div>
              <h4 className="font-medium">French</h4>
              <p className="text-muted-foreground">Professional working proficiency</p>
            </div>
            <div>
              <h4 className="font-medium">Malagasy</h4>
              <p className="text-muted-foreground">Native proficiency</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
