import type { Resource } from "./types";

export const RESOURCES: Resource[] = [
  {
    title: "University of Waterloo Official Website",
    description: "The main website for the University of Waterloo.",
    category: "University",
    url: "https://uwaterloo.ca/",
    official: true,
  },
  {
    title: "Quest Student Information System",
    description: "Access your grades, course selection, and academic records.",
    category: "Academics",
    url: "https://quest.pecs.uwaterloo.ca/",
    official: true,
  },
  {
    title: "Waterloo Works (Co-op Portal)",
    description: "Official portal for co-op job applications and processes.",
    category: "Co-op",
    url: "https://waterlooworks.uwaterloo.ca/",
    official: true,
  },
  {
    title: "Software Engineering Course Calendar",
    description: "Official course descriptions and academic regulations for SE.",
    category: "Academics",
    url: "https://ugradcalendar.uwaterloo.ca/group/ENG-Software-Engineering",
    official: true,
  },
  {
    title: "Learn (Learning Management System)",
    description: "Access course materials, submit assignments, and participate in discussions.",
    category: "Academics",
    url: "https://learn.uwaterloo.ca/",
    official: true,
  },
  {
    title: "VS Code",
    description: "A popular free code editor for web development.",
    category: "Developer tools",
    url: "https://code.visualstudio.com/",
    official: false,
  },
  {
    title: "Official UW Discord Hub",
    description: "Join the official University of Waterloo Discord server to connect with students.",
    category: "Community",
    url: "https://discord.com/invite/uwaterloo", // Placeholder, check official link
    official: true,
  },
  // Add more safe generic entries or placeholders here.
  // Make sure URLs are known with certainty or clearly marked for replacement.
];

// Example of an empty array with comments for production readiness:
/*
export const RESOURCES: Resource[] = [];
// Contributors can add new resources by editing this file and submitting a pull request.
// Each resource should include:
// - title (name of the resource)
// - description (brief explanation)
// - category (e.g., "University", "Academics", "Co-op", "Student life", "Developer tools", "Community")
// - url (link to the resource)
// - official (boolean, true if it's an official university resource)
*/
