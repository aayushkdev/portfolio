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
    title: "Torrcli - terminal bittorrent client",
    description: "A feature-rich terminal-based BitTorrent client, providing an intuitive command-line interface for managing torrents, searching, streaming, and downloading content.",
    tags: ["Python", "libtorrent", "rich"],
    githubLink: "https://github.com/aayushkdev/torrcli",

  },
  {
    title: "Kargo - open-source paas on kubernetes",
    description: "An open-source PaaS that lets users upload Docker images and instantly host them on Kubernetes, offering a simplified, Heroku-like deployment experience without vendor lock-in.",
    tags: ["TypeScript", "Express.js", "Next.js", "MongoDB", "Docker", "Kubernetes"],
    githubLink: "https://github.com/GDGVIT/kargo-backend",
    demoLink: "kargo.dscvit.com",
  },
  {
    title: "Vellorun - gamified exploration app",
    description: "A gamified map-based app allowing users to explore locations, earn XP, unlock new places, and collect badges, with a backend providing personalized suggestions using AI.",
    tags: ["React Native", "Django", "Python", "JWT"],
    githubLink: "https://github.com/aayushkdev/vellorun-backend",
  },
  {
    title: "Disco-ai - multipurpose discord bot",
    description:
      "A smart, multipurpose Discord bot powered by Gemini AI that brings intelligent chat, polls, reminders, and automated welcomes to any server. From witty AI conversations and TL;DR summaries to interactive polls and reminder management, Disco-AI makes your community fun, organized, and alive.",
    tags: ["Python", "Discord.py", "Gemini API", "AI", "Automation"],
    githubLink: "https://github.com/aayushkdev/disco-ai",
  },
  {
    title: "Elecshion - school voting software",
    description:
      "A desktop voting application built with Python's customtkinter for managing school elections. Features include candidate management, CSV import, graphical results visualization, and a simple, accessible interface for seamless voting and administration.",
    tags: ["Python", "customtkinter", "Matplotlib", "CSV", "GUI", "Data Visualization"],
    githubLink: "https://github.com/aayushkdev/E-voting-Software",
  },
  {
    title: "2d car racer - endless road challenge",
    description:
      "A fast-paced 2D racing game built with Python and Pygame, featuring smooth controls, random obstacle generation, real-time score tracking, and a clean restartable gameplay loop. Simple, addictive, and designed for quick play sessions.",
    tags: ["Python", "Pygame", "Game Development", "2D Graphics"],
    githubLink: "https://github.com/aayushkdev/2d-car-racer",
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
    skills: [{ name: "Python" }, { name: "JavaScript" }, { name: "Go" }, { name: "C/C++" }, { name: "SQL" }],
  },
  {
    title: "Frameworks & Libraries",
    skills: [{ name: "Django" }, { name: "Flask" }, { name: "React.js" }, { name: "Next.js" }, { name: "Node.js" }],
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

export const TERMINAL_COMMANDS = {
  about: [
    'Aayush Kumar - Full Stack Developer',
    'CS Student at VIT Vellore',
    'Passionate about open-source development',
    ''
  ],
  skills: [
    'Languages: Python, JavaScript, Go, C/C++, SQL',
    'Frameworks: Django, Flask, React.js, Next.js, Node.js',
    'Tools: Docker, Kubernetes, PostgreSQL, MongoDB, Redis, Git, Linux',
    ''
  ],
  contact: [
    'Email: contact@aayushk.dev',
    'GitHub: https://github.com/aayushkdev',
    'LinkedIn: https://linkedin.com/in/aayushkdev',
    ''
  ]
};