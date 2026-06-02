export interface SiteConfig {
  siteTitle: string;
  tagline: string;
  githubUrl: string;
  discordUrl?: string; // Optional
  disclaimer: string;
}

export const SITE_CONFIG: SiteConfig = {
  siteTitle: "SE31 Hub",
  tagline: "Built by SE31, for SE31.",
  githubUrl: "https://github.com/A-coder152/se31-website",
  discordUrl: undefined, // Optional: "https://discord.gg/your-invite"
  disclaimer: "Unofficial student-run project. Not affiliated with the University of Waterloo.",
};
