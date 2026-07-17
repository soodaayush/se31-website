export interface SiteConfig {
  siteTitle: string;
  tagline: string;
  siteUrl: string;
  githubUrl: string;
  discordUrl?: string; // Optional
  disclaimer: string;
}

export const SITE_CONFIG: SiteConfig = {
  siteTitle: "SE31 Nest",
  tagline: "Our cohort, all in one place.",
  siteUrl: "https://advancedforge.github.io/se31-website/",
  githubUrl: "https://github.com/AdvancedForge/se31-website",
  discordUrl: undefined, // Optional: "https://discord.gg/your-invite"
  disclaimer: "Unofficial student-run project. Not affiliated with the University of Waterloo.",
};
