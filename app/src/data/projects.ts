export interface Project {
  id: number;
  title: string;
  description: string;
  details: string;
  outcome: string;
  tech: string[];
  status: string;
  link: string;
  github: string;
  color: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Aspiring Adda",
    description: "An analytics workspace that helps teams monitor product, growth, and operational signals in one place.",
    details: "Aspiring Adda was designed as a fast, executive-friendly dashboard with focused views, smarter filtering, and clear visual hierarchy. The experience centers on helping teams move from raw data to decisions without fighting the interface.",
    outcome: "Improved visibility for product and ops stakeholders with faster access to high-signal metrics.",
    tech: ["React", "D3.js", "Go"],
    status: "Live",
    link: "",
    github: "",
    color: "from-indigo-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Gyan Setu",
    description: "A modular design system that gives teams accessible, reusable building blocks for shipping faster.",
    details: "Gyan Setu brings consistency across screens, components, and states while keeping accessibility at the center. The system emphasizes clean tokens, composable primitives, and a developer experience that scales well with product growth.",
    outcome: "Reduced UI inconsistency and made feature delivery more predictable across the product surface.",
    tech: ["TypeScript", "Radix UI", "Storybook"],
    status: "Beta",
    link: "",
    github: "",
    color: "from-fuchsia-500 to-rose-500"
  },
  {
    id: 3,
    title: "Mind Merge AI",
    description: "A real-time intelligence interface for tracking volatile signals, alerts, and trend shifts.",
    details: "Mind Merge AI focuses on speed and clarity in fast-moving environments. The product pairs live updates with prioritized alerts and compact interaction patterns so users can stay informed without feeling overwhelmed.",
    outcome: "Created a more immediate, action-oriented experience for users monitoring live market movement.",
    tech: ["Next.js", "WebSockets", "AI Workflows"],
    status: "In Development",
    link: "",
    github: "",
    color: "from-sky-500 to-emerald-500"
  }
];
