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
    name: 'Food Retail Pick-Up Ordering System',
    overview:
      'A full-stack web application designed to automate customer ordering and workflow management for a commercial food outlet. Handles the entire lifecycle of an order from customer placement to merchant fulfillment.',
    details: [
      'Real-Time State Management: Implemented real-time order state transitions using Supabase (PostgreSQL) replication, ensuring the kitchen dashboard updates instantly without page refreshes.',
      'Database Design: Structured a relational database schema to manage menu availability, customer inputs, and order history with strict data integrity constraints.',
      'Frontend Optimization: Utilized Next.js for efficient routing and component rendering, leveraging Tailwind CSS to ensure a mobile-first, responsive interface.',
      'Engineering Challenges Solved: Synchronized live merchant views with incoming database changes via real-time listeners and enforced data validation schemas.'
    ],
    tags: ['Next.js', 'React', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com', 
    live: "https://pickup-order-app.vercel.app/menu",
  },
  {
    name: 'AWS Minecraft Server Controller',
    overview:
      'A Discord bot integrated with AWS infrastructure to remotely manage and monitor the lifecycle of a dedicated game server instance.',
    details: [
      'Instance Orchestration: Deployed and configured a cloud server environment hosted on an Amazon EC2 instance.',
      'API Integration: Developed a functional Discord bot that interfaces directly with the AWS SDK to handle programmatic start, stop, and status retrieval commands.',
      'Resource Management: Implemented manual and automated lifecycle checks to manage operational uptime and control compute costs effectively.'
    ],
    tags: ['AWS EC2', 'Node.js', 'Discord API', 'Cloud Computing'],
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