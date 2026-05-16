# Portfolio

portfolio/
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── package.json
├── eslint.config.js
├── public/
│   ├── CNAME
│   ├── favicon.svg
│   ├── resume.pdf
│   ├── fonts/
│   │   ├── Calibre/
│   │   │   ├── Calibre-Regular.woff2
│   │   │   ├── Calibre-Medium.woff2
│   │   │   └── Calibre-Semibold.woff2
│   │   └── SFMono/
│   │       ├── SFMono-Regular.woff2
│   │       └── SFMono-Semibold.woff2
│   ├── images/
│   │   ├── profile.gif
│   │   ├── icons/
│   │   │   ├── github.svg
│   │   │   ├── linkedin.svg
│   │   │   ├── mail.svg
│   │   │   ├── external.svg
│   │   │   └── folder.svg
│   │   └── projects/
│   │       ├── crate.png
│   │       ├── kargo.png
│   │       ├── pastez.png
│   │       └── torrcli.png
│   └── data/
│       ├── projects.json
│       └── experience.json
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── vite-env.d.ts
    ├── pages/
    │   ├── Home.tsx
    │   └── Projects.tsx
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx
    │   │   ├── MobileMenu.tsx
    │   │   ├── Footer.tsx
    │   │   ├── SocialSidebar.tsx
    │   │   └── EmailSidebar.tsx
    │   ├── sections/
    │   │   ├── Hero.tsx
    │   │   ├── About.tsx
    │   │   ├── Experience.tsx
    │   │   ├── FeaturedProjects.tsx
    │   │   └── Contact.tsx
    │   ├── projects/
    │   │   ├── ProjectCard.tsx
    │   │   └── FilterBar.tsx
    │   └── shared/
    │       ├── SectionHeading.tsx
    │       └── Tag.tsx
    ├── hooks/
    │   ├── useScrollSpy.ts
    │   ├── useScrollReveal.ts
    │   └── useNavbarScroll.ts
    ├── types/
    │   ├── project.ts
    │   └── experience.ts
    └── context/
        └── NavbarContext.tsx