import { SquareArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

type Project = {
  name: string;
  overview: string;
  details: string[];
  tags: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    name: 'Sushi Pickup Ordering Web App',
    overview:
      'Developed and deployed a full-stack pickup ordering system for a sushi shop that supports the complete customer-to-kitchen workflow, including checkout, payment confirmation, order fulfillment, and fallback operations for delayed or failed webhooks.',
    tags: ['Next.js', 'TypeScript', 'React', 'Supabase (PostgreSQL)', 'Stripe', 'Vercel', 'Tailwind CSS'],
    github: 'https://github.com', 
    live: "https://pickup-order-app.vercel.app/menu",
  },
  {
    name: 'AWS Minecraft Server Discord Bot',
    overview:
      'A Discord bot integrated with AWS infrastructure to remotely manage and monitor the lifecycle of a dedicated Minecraft server instance.',
    tags: ['AWS EC2', 'Node.js', 'Discord API', 'AWS SDK'],
    github: 'https://github.com',
    live: "https://pickup-order-app.vercel.app/menu",
  }
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-4 py-8">
      <div className="flex justify-between">
        <h3 className="text-foreground font-medium">
          {project.name}
        </h3>
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on Github`}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <SiGithub className="size-5" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live demo`}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <SquareArrowUpRight className="size-6" />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        {project.overview}
      </p>

      <ul className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li 
            key={tag}
            className="border px-2.5 py-0.5 text-sm font-mono border-accent/20 rounded-sm text-accent bg-accent/10"
          >{tag}</li>
        ))}
      </ul>

    </article>
  )
}

export default function Projects() {
  return (
    <section className="flex flex-col">
      <h2 className="text-xs font-mono uppercase tracking-widest text-accent border-b border-border pb-2">
        Featured work
      </h2>      
      <div className="divide-y divide-border">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}