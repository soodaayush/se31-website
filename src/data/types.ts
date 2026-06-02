export interface Deadline {
  id: string;
  title: string;
  category: "financial" | "housing" | "academic" | "orientation" | "residence" | "international";
  startDate: string;
  endDate?: string;
  deadlineType: "action" | "event";
  appliesTo: string;
  description: string;
  sourceLabel: string;
  sourceUrl: string;
  verified: boolean;
  lastVerified: string;
  priority: "high" | "normal";
}

export interface Resource {
  title: string;
  description: string;
  category: string;
  url: string;
  official: boolean;
}

export interface Project {
  name: string;
  description: string;
  authors?: string[]; // Names or GitHub handles
  repoUrl?: string;
  demoUrl?: string;
  tags: string[];
  featured: boolean;
}
