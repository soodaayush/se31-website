import assert from "node:assert/strict";
import test from "node:test";

import { DEADLINES } from "../src/data/deadlines.ts";
import { QUICK_LAUNCH, RESOURCES } from "../src/data/resources.ts";
import { SITE_CONFIG } from "../src/data/siteConfig.ts";

test("deadline IDs are unique", () => {
  const ids = DEADLINES.map((deadline) => deadline.id);
  assert.equal(new Set(ids).size, ids.length);
});

test("verified deadlines have valid sources and review dates", () => {
  for (const deadline of DEADLINES.filter((item) => item.verified)) {
    assert.doesNotThrow(() => new URL(deadline.sourceUrl), `${deadline.id} needs a valid source URL`);
    assert.match(deadline.lastVerified, /^\d{4}-\d{2}-\d{2}$/, `${deadline.id} needs a review date`);
  }
});

test("resource URLs are valid and unique", () => {
  const urls = RESOURCES.map((resource) => resource.url);
  for (const url of urls) assert.doesNotThrow(() => new URL(url));
  assert.equal(new Set(urls).size, urls.length);
});

test("quick launch contains unique official platform resources", () => {
  const titles = QUICK_LAUNCH.map((item) => item.resourceTitle);
  const labels = QUICK_LAUNCH.map((item) => item.label);
  assert.equal(new Set(titles).size, titles.length);
  assert.equal(new Set(labels).size, labels.length);

  for (const title of titles) {
    const resource = RESOURCES.find((item) => item.title === title);
    assert.ok(resource, `${title} needs a matching resource`);
    assert.equal(resource.official, true, `${title} should be an official platform`);
    assert.equal(new URL(resource.url).protocol, "https:", `${title} should use HTTPS`);
  }
});

test("site ownership points to the canonical AdvancedForge locations", () => {
  assert.equal(SITE_CONFIG.githubUrl, "https://github.com/AdvancedForge/se31-website");
  assert.equal(SITE_CONFIG.siteUrl, "https://advancedforge.github.io/se31-website/");
});

test("site identity uses the SE31 Nest brand", () => {
  assert.equal(SITE_CONFIG.siteTitle, "SE31 Nest");
  assert.equal(SITE_CONFIG.tagline, "Our cohort, all in one place.");
});
