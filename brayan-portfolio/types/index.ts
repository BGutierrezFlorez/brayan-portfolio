export type Project = {
  slug: string;
  title: string;
  type: "personal" | "professional";
  context: string;
  technicalName?: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  problem: string;
  solution: string;
  githubUrl: string;
  demoUrl: string;
  image: string;
  architecture: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Experience = {
  company: string;
  role: string;
  stage: string;
  period: string;
  description: string;
  projectSlugs: string[];
};
