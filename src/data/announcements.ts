export interface Announcement {
  title: string;
  date: string;
  content: string;
}

// Announcements are only published when there is a real, dated cohort update.
export const ANNOUNCEMENTS: Announcement[] = [];
