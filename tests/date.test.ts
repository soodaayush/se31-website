import assert from "node:assert/strict";
import test from "node:test";

import type { Deadline } from "../src/data/types.ts";
import { getDeadlineStatus } from "../src/utils/date.ts";

function makeDeadline(overrides: Partial<Deadline>): Deadline {
  return {
    id: "test-deadline",
    title: "Test deadline",
    category: "academic",
    startDate: "2026-06-15",
    deadlineType: "action",
    appliesTo: "Test students",
    description: "Test description",
    sourceLabel: "Test source",
    sourceUrl: "https://example.com",
    verified: true,
    lastVerified: "2026-06-01",
    priority: "normal",
    ...overrides,
  };
}

test("date-only action deadlines remain upcoming through the Toronto calendar day", () => {
  const deadline = makeDeadline({ startDate: "2026-06-15" });

  assert.equal(getDeadlineStatus(deadline, new Date("2026-06-16T03:59:59Z")), "upcoming");
  assert.equal(getDeadlineStatus(deadline, new Date("2026-06-16T04:00:00Z")), "past");
});

test("Toronto date handling uses the winter UTC offset", () => {
  const deadline = makeDeadline({ startDate: "2027-01-11" });

  assert.equal(getDeadlineStatus(deadline, new Date("2027-01-12T04:59:59Z")), "upcoming");
  assert.equal(getDeadlineStatus(deadline, new Date("2027-01-12T05:00:00Z")), "past");
});

test("multi-day events stay ongoing until the final Toronto date ends", () => {
  const deadline = makeDeadline({
    startDate: "2027-02-13",
    endDate: "2027-02-21",
    deadlineType: "event",
  });

  assert.equal(getDeadlineStatus(deadline, new Date("2027-02-14T17:00:00Z")), "ongoing");
  assert.equal(getDeadlineStatus(deadline, new Date("2027-02-22T05:00:00Z")), "past");
});

test("single-day events are ongoing for their full Toronto calendar day", () => {
  const deadline = makeDeadline({
    startDate: "2027-01-11",
    deadlineType: "event",
  });

  assert.equal(getDeadlineStatus(deadline, new Date("2027-01-11T17:00:00Z")), "ongoing");
  assert.equal(getDeadlineStatus(deadline, new Date("2027-01-12T05:00:00Z")), "past");
});

test("explicitly timed action deadlines use their exact instant", () => {
  const deadline = makeDeadline({ startDate: "2026-08-25T23:59:00-04:00" });

  assert.equal(getDeadlineStatus(deadline, new Date("2026-08-26T03:58:59Z")), "upcoming");
  assert.equal(getDeadlineStatus(deadline, new Date("2026-08-26T03:59:01Z")), "past");
});

test("timestamped events are treated as exact instants when no end is provided", () => {
  const deadline = makeDeadline({
    startDate: "2026-09-08T08:30:00-04:00",
    deadlineType: "event",
  });

  assert.equal(getDeadlineStatus(deadline, new Date("2026-09-08T12:29:59Z")), "upcoming");
  assert.equal(getDeadlineStatus(deadline, new Date("2026-09-08T12:30:01Z")), "past");
});

test("impossible date-only values are rejected", () => {
  const deadline = makeDeadline({ startDate: "2026-02-30" });

  assert.throws(() => getDeadlineStatus(deadline), /Invalid deadline date/);
});
