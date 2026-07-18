export interface TimetableEntry {
  course: string;
  type: "LEC" | "TUT" | "LAB" | "SEM";
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
  start: string;
  end: string;
  location: string;
  color: string;
}

export const TIMETABLE_META = {
  term: "Fall 2026",
  status: "Unofficial planning draft",
  audience: "Incoming SE31 students",
  lastChecked: "2026-07-16",
  sourceLabel: "Check your official schedule in Quest",
  sourceUrl: "https://uwaterloo.ca/quest/",
  notice:
    "This community-created draft was assembled before official schedules were released. Check Quest for your current official schedule; this draft may differ and should not be used for enrolment or travel decisions.",
} as const;

const COURSE_COLORS = {
  math135: "border-[#48301f] bg-[#fefdfa] text-[#48301f]",
  math117: "border-[#48301f] bg-[#6dacb1] text-[#48301f]",
  math115: "border-[#48301f] bg-[#f4ad4b] text-[#48301f]",
  cs137: "border-[#48301f] bg-[#83ced5] text-[#48301f]",
  che102: "border-[#48301f] bg-[#f8cb10] text-[#48301f]",
  se101: "border-[#fefdfa] bg-[#48301f] text-[#fefdfa]",
} as const;

export const TIMETABLE: TimetableEntry[] = [
  // Monday
  {
    course: "MATH 135",
    type: "LEC",
    day: "Monday",
    start: "08:30",
    end: "09:20",
    location: "RCH 302",
    color: COURSE_COLORS.math135,
  },
  {
    course: "MATH 117",
    type: "LEC",
    day: "Monday",
    start: "09:30",
    end: "10:20",
    location: "",
    color: COURSE_COLORS.math117,
  },
  {
    course: "CHE 102",
    type: "LEC",
    day: "Monday",
    start: "10:30",
    end: "11:20",
    location: "",
    color: COURSE_COLORS.che102,
  },
  {
    course: "MATH 115",
    type: "LEC",
    day: "Monday",
    start: "12:30",
    end: "13:20",
    location: "",
    color: COURSE_COLORS.math115,
  },
  {
    course: "CHE 102",
    type: "TUT",
    day: "Monday",
    start: "14:30",
    end: "16:20",
    location: "",
    color: COURSE_COLORS.che102,
  },

  // Tuesday
  {
    course: "CS 137",
    type: "LEC",
    day: "Tuesday",
    start: "10:00",
    end: "11:20",
    location: "STC 0040",
    color: COURSE_COLORS.cs137,
  },
  {
    course: "CS 137",
    type: "TUT",
    day: "Tuesday",
    start: "12:30",
    end: "14:20",
    location: "",
    color: COURSE_COLORS.cs137,
  },
  {
    course: "MATH 115",
    type: "TUT",
    day: "Tuesday",
    start: "14:30",
    end: "16:20",
    location: "",
    color: COURSE_COLORS.math115,
  },

  // Wednesday
  {
    course: "MATH 135",
    type: "LEC",
    day: "Wednesday",
    start: "08:30",
    end: "09:20",
    location: "RCH 302",
    color: COURSE_COLORS.math135,
  },
  {
    course: "MATH 117",
    type: "LEC",
    day: "Wednesday",
    start: "09:30",
    end: "10:20",
    location: "",
    color: COURSE_COLORS.math117,
  },
  {
    course: "CHE 102",
    type: "LEC",
    day: "Wednesday",
    start: "10:30",
    end: "11:20",
    location: "",
    color: COURSE_COLORS.che102,
  },
  {
    course: "MATH 115",
    type: "LEC",
    day: "Wednesday",
    start: "12:30",
    end: "13:20",
    location: "",
    color: COURSE_COLORS.math115,
  },
  {
    course: "SE 101",
    type: "LEC",
    day: "Wednesday",
    start: "15:30",
    end: "16:20",
    location: "",
    color: COURSE_COLORS.se101,
  },
  {
    course: "MATH 135",
    type: "TUT",
    day: "Wednesday",
    start: "16:30",
    end: "17:20",
    location: "",
    color: COURSE_COLORS.math135,
  },

  // Thursday
  {
    course: "CS 137",
    type: "LEC",
    day: "Thursday",
    start: "10:00",
    end: "11:20",
    location: "STC 0040",
    color: COURSE_COLORS.cs137,
  },
  {
    course: "SE 101",
    type: "LAB",
    day: "Thursday",
    start: "12:30",
    end: "14:20",
    location: "E2 1792",
    color: COURSE_COLORS.se101,
  },
  {
    course: "MATH 117",
    type: "TUT",
    day: "Thursday",
    start: "14:30",
    end: "16:20",
    location: "",
    color: COURSE_COLORS.math117,
  },

  // Friday
  {
    course: "MATH 135",
    type: "LEC",
    day: "Friday",
    start: "08:30",
    end: "09:20",
    location: "RCH 302",
    color: COURSE_COLORS.math135,
  },
  {
    course: "MATH 117",
    type: "LEC",
    day: "Friday",
    start: "09:30",
    end: "10:20",
    location: "",
    color: COURSE_COLORS.math117,
  },
  {
    course: "CHE 102",
    type: "LEC",
    day: "Friday",
    start: "10:30",
    end: "11:20",
    location: "",
    color: COURSE_COLORS.che102,
  },
  {
    course: "MATH 115",
    type: "LEC",
    day: "Friday",
    start: "12:30",
    end: "13:20",
    location: "",
    color: COURSE_COLORS.math115,
  },
  {
    course: "SE 101",
    type: "SEM",
    day: "Friday",
    start: "14:30",
    end: "15:20",
    location: "",
    color: COURSE_COLORS.se101,
  },
];
