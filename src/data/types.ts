export interface Deadline {
  id: string;
  title: string;
  date: string; // ISO 8601 format
  category: string;
  description?: string;
  sourceLabel?: string;
  sourceUrl?: string;
  verified: boolean;
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
