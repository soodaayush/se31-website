import type { Deadline } from "../data/types";

const TORONTO_TIME_ZONE = "America/Toronto";
const DATE_ONLY_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export type DeadlineStatus = "upcoming" | "ongoing" | "past";

const offsetFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: TORONTO_TIME_ZONE,
  timeZoneName: "longOffset",
});

function getTorontoOffsetMilliseconds(utcTimestamp: number): number {
  const offsetName = offsetFormatter
    .formatToParts(new Date(utcTimestamp))
    .find((part) => part.type === "timeZoneName")?.value;
  const match = offsetName?.match(/^GMT([+-])(\d{2}):(\d{2})$/);

  if (!match) {
    throw new Error(`Unable to determine Toronto UTC offset for ${new Date(utcTimestamp).toISOString()}`);
  }

  const sign = match[1] === "+" ? 1 : -1;
  const minutes = Number(match[2]) * 60 + Number(match[3]);
  return sign * minutes * 60 * 1000;
}

function parseTorontoDateOnly(dateStr: string, boundary: "start" | "end"): number {
  const [year, month, day] = dateStr.split("-").map(Number);
  const calendarDate = new Date(Date.UTC(year, month - 1, day));

  if (
    calendarDate.getUTCFullYear() !== year ||
    calendarDate.getUTCMonth() !== month - 1 ||
    calendarDate.getUTCDate() !== day
  ) {
    throw new Error(`Invalid deadline date: ${dateStr}`);
  }

  const isEnd = boundary === "end";
  const utcGuess = Date.UTC(
    year,
    month - 1,
    day,
    isEnd ? 23 : 0,
    isEnd ? 59 : 0,
    isEnd ? 59 : 0,
    isEnd ? 999 : 0,
  );

  return utcGuess - getTorontoOffsetMilliseconds(utcGuess);
}

function parseDeadlineDate(dateStr: string, boundary: "start" | "end"): number {
  if (DATE_ONLY_PATTERN.test(dateStr)) {
    return parseTorontoDateOnly(dateStr, boundary);
  }

  const timestamp = Date.parse(dateStr);
  if (Number.isNaN(timestamp)) {
    throw new Error(`Invalid deadline date: ${dateStr}`);
  }

  return timestamp;
}

export function getDeadlineStartTime(deadline: Deadline): number {
  const boundary = deadline.deadlineType === "action" ? "end" : "start";
  return parseDeadlineDate(deadline.startDate, boundary);
}

export function getDeadlineEndTime(deadline: Deadline): number {
  if (deadline.endDate) {
    return parseDeadlineDate(deadline.endDate, "end");
  }

  const boundary = DATE_ONLY_PATTERN.test(deadline.startDate) ? "end" : "start";
  return parseDeadlineDate(deadline.startDate, boundary);
}

export function getDeadlineStatus(
  deadline: Deadline,
  now: Date = new Date(),
): DeadlineStatus {
  const nowTime = now.getTime();
  const startTime = getDeadlineStartTime(deadline);
  const endTime = getDeadlineEndTime(deadline);

  if (deadline.deadlineType === "action") {
    return nowTime <= endTime ? "upcoming" : "past";
  }

  if (nowTime < startTime) return "upcoming";
  if (nowTime <= endTime) return "ongoing";
  return "past";
}

export function formatTorontoDate(dateStr: string): string {
  const timestamp = DATE_ONLY_PATTERN.test(dateStr)
    ? parseTorontoDateOnly(dateStr, "start")
    : parseDeadlineDate(dateStr, "start");

  return new Date(timestamp).toLocaleDateString("en-CA", {
    timeZone: TORONTO_TIME_ZONE,
    dateStyle: "full",
  });
}

export function formatTorontoDateTime(dateStr: string): string {
  if (DATE_ONLY_PATTERN.test(dateStr)) {
    return formatTorontoDate(dateStr);
  }

  return new Date(parseDeadlineDate(dateStr, "start")).toLocaleString("en-CA", {
    timeZone: TORONTO_TIME_ZONE,
    dateStyle: "full",
    timeStyle: "short",
  });
}
