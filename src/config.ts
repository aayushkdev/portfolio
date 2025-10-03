export const siteConfig = {
  name: "Aayush Kumar",
  title: "CS Undergrad & Aspiring Software Engineer",
  description: "Portfolio website of Aayush Kumar",
  accentColor: "#1d4ed8",
  social: {
    email: "contact@aayushk.dev",
    linkedin: "https://linkedin.com/in/aayushkdev",
    github: "https://github.com/aayushkdev",
  },
  aboutMe:
    "I’m Aayush Kumar, a computer science undergrad with a strong interest in software engineering, cybersecurity, and open source. I enjoy exploring how systems work, solving problems through code, and contributing to projects that make technology more accessible and reliable. Alongside my development experience, I’m passionate about Linux and the open-source ecosystem, which has shaped how I learn, build, and collaborate. I’m always eager to expand my skills, take on new challenges, and create software that is both impactful and secure.",
  skills: ["Javascript", "Typescript", "React", "Node.js", "Next.js", "Python", "Django", "Flutter", "Docker"],
  projects: [
    {
      name: "Torrcli - Terminal-Based BitTorrent Client ",
      description:
        "Developed a feature-rich terminal-based BitTorrent client with an intuitive command-line interface for managing torrents, including built-in torrent search functionality that enables users to search, stream, and download content directly from the terminal.",
      link: "https://github.com/aayushkdev/torrcli/",
      skills: ["Python", "libtorrent", "rich"],
    },
    {
      name: "Vellorun - Gamified Exploration App",
      description:
        "Developed a gamified map-based mobile application that allows users to explore locations, earn XP, unlock new places, and collect badges. Designed and implemented backend APIs for secure JWT-based authentication, profile management, and personalized place suggestions powered by AI. Collaborated with a team to integrate the backend with the React Native frontend, ensuring seamless user experience and engaging gameplay features.",
      link: "https://github.com/aayushkdev/vellorun-backend",
      skills: ["React Native", "Node.js", "Python", "Django"],
    },
    {
      name: "Elecshion - School Voting Software",
      description:
        "Developed a desktop application for school elections featuring secure voting, dynamic candidate management, and real-time result visualization, with an intuitive CustomTkinter-based UI that supports CSV import, candidate images, and interactive bar chart displays.",
      link: "https://github.com/aayushkdev/E-voting-Software",
      skills: ["Python", "Customtkinter"],
    },
    {
      name: "SYA Marketplace",
      description:
        "Developed a modern marketplace platform that enables users to buy, sell, and rent products with secure authentication, intuitive product management for images, descriptions, pricing, and rental durations, and a responsive design optimized for both desktop and mobile devices.",
      link: "https://github.com/aayushkdev/sya-marketplace",
      skills: ["Python", "Django", "Html", "Css", "Javascript"],
    },
  ],
  experience: [
    {
      company: "Google Summer Of Code @Aboutcode",
      title: "Open Source Developer",
      dateRange: "Jun 2025 - Sep 2025",
      bullets: [
        "Developed a file-system tree view for ScanCode.io to enable intuitive browsing of scanned codebases, using HTMX for dynamic UI updates and Django for backend APIs.",
        "Designed and implemented efficient APIs with lazy loading, path-based querying, and caching to handle large nested directories with optimal performance",
      ],
    },
    {
      company: "Yuusoft",
      title: "SDE Intern",
      dateRange: "Jul 2025 - Aug 2025",
      bullets: [
        "Built an internal Discord bot that integrates with Claude to edit code and push commits directly to Git repositories using natural language commands.",
        "Worked on Yuusoft’s visual novel creator platform, building several core pages and features from scratch, including input data flows, UI components, and scene management tools.",
      ],
    },
  ],

};
