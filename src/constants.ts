import { ExperienceItem, ProjectItem, SkillCategory } from './types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Yuusoft",
    role: "SDE Intern",
    period: "Jul 2025 – Aug 2025",
    location: "Remote, Singapore",
    description: [
      "Built an internal Discord bot that integrates with Claude to edit code and push commits directly to Git repositories using natural language commands.",
      "Worked on Yuusoft’s visual novel creator platform, building several core pages and features from scratch, including input data flows, UI components, and scene management tools.",
    ],
  },
  {
    company: "AboutCode",
    role: "Google Summer of Code 2025",
    period: "May 2025 – Sep 2025",
    location: "Remote, United States",
    description: [
      "Developed a file-system tree view for ScanCode.io to enable intuitive browsing of scanned codebases, using HTMX for dynamic UI updates and Django for backend APIs.",
      "Designed and implemented efficient APIs with lazy loading, path-based querying, and caching to handle large nested directories with optimal performance.",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "torrcli - terminal bittorrent client",
    description: "A feature-rich terminal-based BitTorrent client, providing an intuitive command-line interface for managing torrents, searching, streaming, and downloading content.",
    tags: ["Python", "libtorrent", "rich"],
    githubLink: "https://github.com/aayushkdev",
    demoLink: "https://github.com/aayushkdev",
  },
  {
    title: "kargo - open-source paas on kubernetes",
    description: "An open-source PaaS that lets users upload Docker images and instantly host them on Kubernetes, offering a simplified, Heroku-like deployment experience without vendor lock-in.",
    tags: ["TypeScript", "Express.js", "Next.js", "MongoDB", "Docker", "Kubernetes"],
    githubLink: "https://github.com/aayushkdev",
    demoLink: "https://github.com/aayushkdev",
  },
  {
    title: "vellorun - gamified exploration app",
    description: "A gamified map-based app allowing users to explore locations, earn XP, unlock new places, and collect badges, with a backend providing personalized suggestions using AI.",
    tags: ["React Native", "Django", "Python", "JWT"],
    githubLink: "https://github.com/aayushkdev",
    demoLink: "https://github.com/aayushkdev",
  },
];

export const NAV_LINKS = [
    { name: "overview", href: "overview" },
    { name: "experience", href: "experience" },
    { name: "projects", href: "projects" },
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    skills: [{ name: "C/C++" }, { name: "Python" }, { name: "JavaScript" }, { name: "SQL" }],
  },
  {
    title: "Frameworks & Libraries",
    skills: [{ name: "Django" }, { name: "Flask" }, { name: "React.js" }, { name: "Node.js" }],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Socket.io" },
      { name: "Git" },
      { name: "Linux" },
    ],
  },
];