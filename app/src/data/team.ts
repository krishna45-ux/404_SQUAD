export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  focus: string;
  skills: string[];
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Alankrita",
    role: "Product Designer",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
    bio: "Shapes complex product flows into interfaces that feel calm, premium, and effortless on first use.",
    focus: "Design systems, flows, and rapid prototyping",
    skills: ["Figma", "UI/UX", "Prototyping"],
    socials: {}
  },
  {
    id: 2,
    name: "Krishna Upadhyay",
    role: "Frontend Developer",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
    bio: "Builds responsive interfaces with a strong eye for polish, motion, and component architecture.",
    focus: "React experiences with animation and performance in mind",
    skills: ["React", "Tailwind", "Animation"],
    socials: {}
  },
  {
    id: 3,
    name: "Saksham Chaturvedi",
    role: "Backend Developer",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
    bio: "Designs stable APIs and deployment pipelines so product ideas can scale without drama.",
    focus: "Reliable services, data models, and deployment workflows",
    skills: ["Node.js", "PostgreSQL", "Docker"],
    socials: {}
  },
  {
    id: 4,
    name: "Pradyumn Rana",
    role: "Lead Engineer",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
    bio: "Connects strategy, architecture, and delivery so ambitious concepts ship as usable products.",
    focus: "Technical strategy, systems thinking, and team direction",
    skills: ["System Design", "Go", "Cloud Architecture"],
    socials: {}
  }
];
