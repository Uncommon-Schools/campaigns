# Browser Audit — Cross-Domain Summary

**Audited:** 2026-08-26 · all seven domains, ~60 pages, mobile (375x812@3x, simulated 4G) + desktop (1440x900), Lighthouse median of 3 runs per page/viewport.

Read this with `00-CLAIMS-VERIFICATION.md`: the platform was migrated to a WordPress multisite on new hosting after the March audits, so many March findings are superseded.

## Lighthouse scores (homepage, median of 3)

> LCP on carousel homepages is inflated by design: the auto-rotating hero paints a new, larger LCP candidate on every slide change, so the metric climbs for as long as the carousel runs (main reads 79s; first hero paint is actually ~0.8s). Compare FCP/TBT/Speed Index across domains instead; the carousel itself is an accessibility finding (no pause control).

| Domain | Perf (M) | Perf (D) | A11y (M) | LCP (M) | TBT (M) | CLS (M) | Weight (M) |
|---|---|---|---|---|---|---|---|
| main | **55** | 65 | 98 | 79.1s | 282ms | 0.115 | 17.1MB |
| nyc | **60** | 71 | 93 | 16.2s | 140ms | 0.123 | 4.1MB |
| roxbury (Boston) | **49** | 69 | 94 | 15.8s | 195ms | 0.299 | 6.8MB |
| northstar (Newark) | **68** | 91 | 93 | 8.7s | 188ms | 0.063 | 9.0MB |
| camden | **59** | 80 | 93 | 10.9s | 222ms | 0.123 | 3.2MB |
| rochester | **62** | 75 | 93 | 11.0s | 212ms | 0.108 | 2.8MB |
| hub | **45** | 93 | 86 | 6.1s | 1.3s | 0.032 | 2.6MB |

## Ten worst pages by mobile performance score

| Score | LCP | Page |
|---|---|---|
| 24 | 5.6s | hscurriculum.uncommonschools.org `collection` |
| 37 | 19.3s | camdenprep.uncommonschools.org `news` |
| 37 | 22.7s | nyc.uncommonschools.org `news` |
| 39 | 25.5s | roxburyprep.uncommonschools.org `news` |
| 41 | 15.7s | roxburyprep.uncommonschools.org `es-home` |
| 41 | 19.8s | rochesterprep.uncommonschools.org `news` |
| 45 | 6.1s | hscurriculum.uncommonschools.org `home` |
| 46 | 7.2s | hscurriculum.uncommonschools.org `about` |
| 47 | 10.9s | rochesterprep.uncommonschools.org `es-home` |
| 47 | 309.6s | roxburyprep.uncommonschools.org `enroll` |

## axe violations (sum across audited pages, mobile)

| Domain | Critical | Serious | Moderate | Minor | Total nodes | Top rules |
|---|---|---|---|---|---|---|
| main | 0 | 2 | 48 | 0 | 50 | heading-order (26), region (13), page-has-heading-one (6) |
| nyc | 11 | 4 | 66 | 4 | 85 | region (49), heading-order (15), button-name (10) |
| roxbury (Boston) | 10 | 2 | 54 | 1 | 67 | region (30), heading-order (24), button-name (10) |
| northstar (Newark) | 9 | 4 | 52 | 0 | 65 | region (30), heading-order (19), button-name (9) |
| camden | 10 | 2 | 63 | 0 | 75 | region (40), heading-order (19), button-name (10) |
| rochester | 11 | 7 | 41 | 9 | 68 | region (27), heading-order (14), button-name (10) |
| hub | 4 | 7 | 43 | 3 | 57 | region (31), heading-order (10), aria-allowed-role (3) |

## Cookies on first load (homepage, no consent UI anywhere)

| Domain | Cookies | Third-party trackers seen on load |
|---|---|---|
| main | **17** | GA4, Meta pixel |
| nyc | **25** | GA4, Meta pixel |
| roxbury (Boston) | **23** | GA4, Meta pixel |
| northstar (Newark) | **22** | GA4, Meta pixel |
| camden | **24** | Meta pixel |
| rochester | **22** | GA4, Meta pixel |
| hub | **65** | DoubleClick, GA4, GTM, Hotjar, Meta pixel |

## Taps from mobile homepage to an enrollment application form

| Domain | Entry popup in the way | Fastest path | Taps |
|---|---|---|---|
| main | no popup | Enroll button → region chooser → regional /enroll/ → dismiss regional popup → Apply → external form | 5 |
| nyc | yes | popup "Apply in Minutes" → uncommonbrooklyn.schoolmint.net | 1 (via popup); 4 via nav (dismiss popup → menu → Enroll → Apply) |
| roxbury (Boston) | yes | popup "Apply Now!" → bostoncharterschools.schoolmint.net | 1 (via popup); 4 via nav |
| northstar (Newark) | yes | popup "Apply Today!" → newarkcommonapp.org | 1 (via popup); 4 via nav |
| camden | yes | popup "START YOUR APPLICATION" → onecamden.org | 1 (via popup); 4 via nav |
| rochester | yes | popup "Start Your Application" → goodschoolsroc.org/applynow | 1 (via popup); 4 via nav |
| hub | no | n/a (no enrollment) | — |

The popup is also the biggest obstacle: it covers the viewport on load, cannot be dismissed with the keyboard (Escape ignored, dismiss link unreachable by Tab), and its overlay intercepts taps on the menu button while open.

## Enrollment / careers / donation platform map (from click traces)

| Region | Enrollment platform | Careers | Donations |
|---|---|---|---|
| NYC | uncommonbrooklyn.schoolmint.net (SchoolMint) | careers.smartrecruiters.com/UncommonSchools/* | FundraiseUp AXGXSELV |
| Boston | bostoncharterschools.schoolmint.net (SchoolMint) — apply links carry hardcoded stale `_ga` params | same | same |
| Newark | newarkcommonapp.org | same | same |
| Camden | onecamden.org + camdenenrollment.org (two different portals linked) | same | same |
| Rochester | goodschoolsroc.org/applynow (some links `http://`) | same | same |
| main /careers/jobs/ | — | same-origin REST proxy `/wp-json/wp/v2/careers/jobs/` (SmartRecruiters data, 101 jobs) | — |

**Avela was not found anywhere. Lever is no longer referenced.** Salesforce: not detected on any page.

## Findings that need the most attention (evidence in per-domain files)

1. **Full-viewport entry popup on all five regional sites** fails keyboard access (WCAG 2.1.2) and blocks the mobile menu button. It is also the #1 conversion variable on the mobile enrollment path.
2. **Unnamed buttons ("button-name", axe critical) on every regional page** — the mobile menu toggle `button.site-header__toggle` has no accessible name, and carousel controls repeat this. ~49 critical nodes across the network.
3. **Keyboard traps** in accordion components: roxburyprep `new-family-faq`, northstar `enroll`, camdenprep home + enroll (focus cycles inside `button.accordion__toggle`).
4. **No cookie consent on any domain** while ad/analytics trackers fire on load; hscurriculum sets 65 cookies incl. TikTok/LinkedIn/StackAdapt; HandL sets a cookie containing the visitor IP. OCR context makes this a compliance question, not a style one.
5. **Page weight**: regional pages run 3.4–6.4MB on mobile with ~2MB JS sitewide (Thrive/jQuery stack loads everywhere); zero WebP images network-wide; no `<picture>` responsive images.
6. **Main-domain school profile pages render no body content** (~18 words) — 57 pages of thin duplicate-ish content dated Feb 2018.
7. **Camden fires no GA4 at all**; every other region has its own new GA4 property; GTM only survives on the hub. Attribution for the 76% of conversions that happen on mobile currently depends on this fragmented setup plus HandL cookies.
8. **58 paid-campaign landing pages are indexed** in public sitemaps across regionals (also fully listed in Camden-branded llms.txt on every domain).
9. **Mixed-protocol internal links**: main /enroll/ and regional footers link regional enroll pages via `http://`, adding a redirect to the highest-value click on the site.
10. **Spanish is partially fixed**: /es/ now serves Spanish under es-MX, but titles stay English, English blocks remain mid-page, and the brand renders as "Escuelas no comunes" on two regionals.

## Output map

- `00-CLAIMS-VERIFICATION.md` — all 75 March-audit claims re-verified with evidence
- `<domain>.md` — per-domain findings, sections 1–7 per the brief
- `lighthouse/` — raw Lighthouse JSON (median run) per page × viewport
- `screenshots/<domain>/` — full-page screenshots, every page × both viewports
- `raw/` — robots.txt, llms.txt, sitemap XML saved verbatim per domain
