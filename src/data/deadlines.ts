import type { Deadline } from "./types";

export const DEADLINES: Deadline[] = [
  {
    id: "orientation-fall-2024",
    title: "Fall 2024 Orientation",
    date: "2024-09-02T09:00:00-04:00", // September 2, 2024 9:00 AM America/Toronto
    category: "Academic",
    description: "Welcome to Waterloo! Official orientation events for incoming students.",
    sourceLabel: "UWaterloo Registrar",
    sourceUrl: "https://uwaterloo.ca/registrar",
    verified: true,
  },
  {
    id: "coop-info-session-fall-2024",
    title: "Co-op Information Session",
    date: "2024-10-15T14:30:00-04:00", // October 15, 2024 2:30 PM America/Toronto
    category: "Co-op",
    description: "Learn about the co-op program and upcoming application cycles.",
    sourceLabel: "CECA",
    sourceUrl: "https://uwaterloo.ca/co-operative-education",
    verified: true,
  },
  {
    id: "winter-2025-course-selection",
    title: "Winter 2025 Course Selection Period",
    date: "2024-11-20T23:59:59-05:00", // November 20, 2024 11:59 PM America/Toronto
    category: "Academic",
    description: "Window to select courses for the Winter 2025 term on Quest.",
    sourceLabel: "Quest",
    sourceUrl: "https://quest.pecs.uwaterloo.ca/",
    verified: false, // Example of an unverified entry
  },
  {
    id: "hackathon-example-past",
    title: "SE31 Hackathon (Example Past)",
    date: "2023-03-10T17:00:00-05:00", // March 10, 2023 5:00 PM America/Toronto
    category: "Student Life",
    description: "A fun weekend of building cool projects with your cohort!",
    sourceLabel: "SE31 Discord",
    sourceUrl: "#",
    verified: false,
  },
  // Add more example deadlines here. For real deployment, ensure these are actual dates or clearly marked as placeholders.
];

// Example of an empty array with comments for production readiness:
/*
export const DEADLINES: Deadline[] = [];
// When no deadlines are present, the website should display a friendly empty state.
// Contributors can add new deadlines by editing this file and submitting a pull request.
// Each deadline should include:
// - id (unique string)
// - title (brief name)
// - date (ISO 8601 string, e.g., "YYYY-MM-DDTHH:mm:ss-HH:MM" for America/Toronto)
// - category (e.g., "Academic", "Co-op", "Student Life")
// - description (optional, brief details)
// - sourceLabel (optional, e.g., "Quest", "CECA")
// - sourceUrl (optional, link to official source)
// - verified (boolean, true if confirmed by official source)
*/
