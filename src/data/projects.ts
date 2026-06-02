import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    name: "SE31 Hub",
    description: "Open-source website for the Waterloo Software Engineering Class of 2031. Built by SE31, for SE31.",
    authors: ["Your Name/GitHub Handle"], // Placeholder
    repoUrl: "https://github.com/your-org/se31-hub", // TODO: Update with actual GitHub repo URL
    demoUrl: "https://se31.vercel.app", // Placeholder
    tags: ["web", "open-source", "community", "astro", "tailwind", "typescript"],
    featured: true,
  },
  // Add more example projects here.
  // Ensure names or GitHub handles are only used when voluntarily provided.
];

// Example of an empty array with comments for production readiness:
/*
export const PROJECTS: Project[] = [];
// Contributors can add new projects by editing this file and submitting a pull request.
// Each project should include:
// - name (name of the project)
// - description (brief explanation)
// - authors (optional, array of names or GitHub handles)
// - repoUrl (optional, link to GitHub repository)
// - demoUrl (optional, link to live demo)
// - tags (array of keywords, e.g., "web", "mobile", "AI", "game")
// - featured (boolean, true if it should be highlighted)
*/
