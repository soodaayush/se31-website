export interface Deadline {
  id: string;
  title: string;
  category: "financial" | "housing" | "academic" | "co-op" | "orientation" | "residence" | "international";
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

export interface CourseAssessment {
  name: string;
  weight: string;
  detail?: string;
}

export interface CourseGradingScheme {
  name?: string;
  assessments: CourseAssessment[];
  note?: string;
}

export interface CourseHighlight {
  label: string;
  value: string;
}

export interface Course {
  code: string;
  slug: string;
  title: string;
  archivedTerm: string;
  outlineUrl: string;
  summary: string;
  overview: string;
  highlights: CourseHighlight[];
  topics: string[];
  outcomes: string[];
  gradingSchemes: CourseGradingScheme[];
  gradingNotes: string[];
  materials: string[];
  workload: string[];
  policies: string[];
}
