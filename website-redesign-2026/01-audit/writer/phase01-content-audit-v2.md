# Uncommon Schools Website Redesign
## Phase 01: Content Audit — v2 (Slide-Ready)
**Prepared by:** US-Writer
**Date:** July 16, 2026 (v2)
**Original audit:** March 24, 2026
**Redesign deadline:** April 11, 2026

---

## The One-Sentence Lede

**The site's biggest problem isn't design — it's that 52 schools have identical 2018 placeholder pages, Uncommon owns zero AI-search answers to the questions families are asking, and the enrollment path is buried three clicks deep.**

---

## Executive Summary (60 seconds)

Uncommon Schools has world-class content assets — Teach Like a Champion, the HS Curriculum Hub, Uncommon Sense, and a CREDO-validated "highest-performing large charter network" claim that KIPP literally cannot match. But the website that houses all of this was built in 2018 and hasn't been rethought since.

Five problems, in priority order:

1. **Placeholder school pages at scale.** 52 individual schools × ~200 words each × created February 2018 by "briteweb." Zero differentiation, zero trust-building, near-zero SEO value.
2. **AI-search invisibility.** Uncommon does not appear as the source AI engines cite for any priority query — including questions Uncommon is uniquely qualified to answer.
3. **Enrollment is buried.** The single highest-value action for families is 3–4 clicks deep, nested under "Our Schools." It should be a primary nav item and a homepage hero CTA.
4. **Dual regional architecture splits authority.** Main-domain /regions/ pages and regional subdomains both exist, neither is complete, and users hit dead ends depending on where they enter.
5. **No Spanish-language content.** 95% of students are Black or Latino, many from Spanish-speaking families. The site is English-only. This is both an equity gap and an enrollment gap.

Beneath these five: the homepage has ~300 words of crawlable text, the Alumni Impact page 404s, FAQ content lacks schema markup, and Uncommon Sense / Sharing Our Practices / Books / HS Curriculum Hub live in disconnected silos when together they'd be a category-defining educator resource.

The good news: **the raw material is there.** This is a content strategy and architecture problem, not a content-creation-from-scratch problem.

---

## Top 5 Fixes If You Only Do Five

If Uncommon shipped nothing else for the April 2026 relaunch, these five fixes alone would move every KPI that matters.

| # | Fix | Why It Matters | Effort |
|---|---|---|---|
| 1 | Rebuild every school page from a real template (hero photo, principal, key stats, differentiators, parent quote, enroll CTA) | 52 pages × broken = the biggest content debt on the site; every family Google search lands here | High |
| 2 | Make Enroll a primary nav item + homepage hero CTA with city-specific pathways | Direct impact on enrollment applications; current path is 3–4 clicks | Low |
| 3 | Build 8–10 "Answer Pages" targeting priority AEO/GEO queries (see Section 5) | Owns AI-search for questions Uncommon is uniquely qualified to answer | Medium |
| 4 | Collapse dual regional architecture — subdomains become canonical, /regions/ redirects | Ends duplicate content, restores link equity, fixes user confusion | Medium |
| 5 | Ship Spanish-language versions of homepage + enrollment flow + FAQ | Reaches ~40% of the family audience currently excluded from the site | Medium |

Everything else in this audit is real work. But these five, done well, move the numbers.

---

## Priority Matrix: All Findings

Ranked by Impact × Effort. Green = do first. Yellow = do next. Gray = later or absorb into templates.

**HIGH IMPACT / LOW EFFORT (do first — quick wins):**
- Move Enroll to primary nav
- Add homepage hero CTA for Enroll (city selector)
- Fix Alumni Impact 404
- Promote FAQ from footer/hidden to primary nav
- Add FAQ schema markup to existing FAQ page
- Update all "briteweb 2018" author/date metadata on school pages

**HIGH IMPACT / MEDIUM EFFORT (do soon):**
- Build 8–10 Answer Pages for AEO/GEO priority topics
- Collapse dual regional architecture (subdomain canonical, /regions/ redirect)
- Ship Spanish-language homepage + enrollment + core FAQ
- Restructure Results page for AI-extractability
- Add structured data (EducationalOrganization, LocalBusiness, FAQPage, Article) sitewide

**HIGH IMPACT / HIGH EFFORT (do the work):**
- Rebuild all 52 school pages from template (staff highlights, real photos, differentiators, parent voices)
- Build unified "For Educators" hub connecting Uncommon Sense + Sharing Our Practices + Books + HS Curriculum Hub
- Full Alumni Impact section with named alumni stories (not just a page — an ongoing content stream)
- Homepage rewrite with audience gateway architecture

**MEDIUM IMPACT / LOW EFFORT (worth doing):**
- Expand "Why Uncommon?" into a flagship recruitment narrative
- Add teacher/staff testimonials with full arcs (not one-liners)
- Cross-link Teach Like a Champion → main site → careers
- Consolidate press/media coverage into a proper newsroom

**LATER (Phase 03+ or absorb into rebuild):**
- Deprecate PDF-only content; convert to HTML with proper schema
- Newsroom design for ongoing press releases
- Donor engagement pathway (impact reports, named funds, major gifts)
- Camp Uncommon content refresh

---

## Section 1: The 52-School-Page Problem (Deep Dive)

This finding gets its own section because it is the single largest piece of content debt on the site and the highest-scaling opportunity.

### What's There Now

Every one of the 52 individual school pages follows the same 2018 template built by web agency "briteweb." A representative sample:

- Page length: 150–300 words
- Structure: school name → grade levels → 2-sentence description → enroll CTA
- No principal bio. No test scores. No parent voices. No student quote. No photos of the actual school.
- Author byline: "by briteweb"
- Creation date: February 2018 (many)
- SEO signals: shallow, unclaimed, outdated — both to Google and to families

**Multiply that by 52.** Every family who Googles "Uncommon [school name]" lands on a page that tells them nothing. Every school-choice comparison a parent does — Uncommon vs. district, Uncommon vs. KIPP, Uncommon Rochester Prep vs. another charter — Uncommon loses on content depth.

### Proposed School Page Template

**Above the fold:**
- School-specific hero photo (real students, real building)
- School name, grades served, campus location
- One-line differentiator: what makes THIS school
- Primary CTA: Apply / Enroll

**Trust & Proof:**
- 3–5 key stats: enrollment, grades, college acceptance (if applicable), years in operation
- Principal bio + photo
- "Why families choose [school]" — 3 short points

**Experience:**
- Sample day at [school]
- 2–3 parent quotes with full names and photos
- 1 student quote
- Photo carousel of the actual school (not stock imagery)

**Programs & Approach:**
- Grade-specific programs
- Special education support at this campus
- Extracurriculars, athletics, arts specific to this school

**Take Action:**
- Enroll CTA (city-specific application link)
- School tour signup
- Contact the school (real phone number, address, map)

**Content governance:**
- Each school needs a content owner at the school level (probably principal or school leader delegate)
- Network provides template, brand voice, and photography standard
- Regional teams coordinate photography sprints (1 photographer, 1 school per day, all 52 shot over ~3 months)

### Rollout Recommendation

Don't try to launch all 52 at once. Prioritize:
1. **Highest-enrollment schools first** — biggest traffic, biggest impact
2. **Schools with active enrollment gaps** — where content depth could move applications
3. **Newest schools** — where families are most likely to have questions
4. **Everything else** — rolling rollout post-launch

Ship 10–15 model school pages for the April relaunch. Everything else launches on the new template with a "coming soon" state for the school-specific content, then fills in monthly.

---

## Section 2: AI Search Readiness — A Worked Example

The audit's original AEO/GEO section named 10 priority topics. Here's what one of those "Answer Pages" should actually look like — as a spec, not just a recommendation.

### Worked Example: "How to Enroll in a Charter School in NYC"

**URL:** `nyc.uncommonschools.org/enroll/how-charter-enrollment-works`

**Page structure (top to bottom):**

**H1:** How to Enroll in a Charter School in NYC (2026–2027 School Year)

**TL;DR box (top of page, before anything else):**
> Charter schools in NYC are free public schools. To enroll your child at an Uncommon Schools NYC campus, you complete one application, enter the lottery by the deadline (typically April), and receive placement in the summer. Here's exactly how it works.

**Numbered steps (each with H2 or H3 for AI extractability):**

1. **Confirm your child is eligible.** (grades served, residency, no prior test requirement)
2. **Choose your Uncommon Schools NYC campus(es).** (link to school finder)
3. **Complete the NYC Common Charter Application.** (link + deadline)
4. **Enter the lottery.** (how the lottery works, waitlist explanation)
5. **Receive placement.** (timeline)
6. **Complete enrollment paperwork.** (documents needed, deadlines)

**FAQ block (with FAQPage schema markup):**
- Is Uncommon Schools free? → Yes. Charter schools are public schools funded by the state.
- What if I miss the lottery deadline? → Rolling admissions may be available. Contact the school directly.
- What documents do I need? → Proof of residency, birth certificate, immunization records.
- Can my child attend if we move mid-year? → Yes, subject to seat availability.
- What's the difference between a charter school and a district public school? → [answer]

**Structured data:**
- Article schema
- FAQPage schema on the FAQ block
- BreadcrumbList schema
- EducationalOrganization schema linking to the school entity

**Cross-links:**
- To the NYC school finder
- To individual school pages (once rebuilt)
- To network FAQ

**Why this structure works for AI search:**
- Direct answer in TL;DR (what AI engines quote)
- Numbered steps (what AI engines list)
- FAQ block with schema (what AI engines extract as Q&A)
- Authoritative source markup (what AI engines cite)

**Replicate this template for the other 9 priority topics.** Each Answer Page takes ~1 day of writing + 1 day of dev implementation. Ten pages = ~4 weeks of combined work. This is the highest-ROI content investment in the entire redesign.

---

## Section 3: Baseline Metrics & Post-Launch KPIs

**Gap in the original audit:** No baselines, no KPIs. Without them, the redesign has no way to prove it worked.

### Baselines to Capture Before Relaunch (Phase 02)

**Requires analytics access. Coordinator to secure GA4 + Search Console access before Phase 02 begins.**

| Metric | Why It Matters |
|---|---|
| Organic sessions (last 12 months, by domain) | Baseline for SEO improvement |
| Enrollment page conversion rate (visit → application start) | Baseline for enrollment UX improvement |
| Top 25 landing pages by traffic | Where users actually enter the site |
| Top 25 exit pages | Where users give up |
| School page average time-on-page | Baseline for the 52-page rebuild |
| Bounce rate on homepage | Baseline for homepage rewrite |
| Search Console: top 100 queries + click-through rates | AEO baseline |
| Search Console: pages with 10+ impressions but 0 clicks | Quick-win optimization targets |
| Referral traffic from books.google, TLAC Blog, Twitter/X, LinkedIn | Baseline for connected-ecosystem strategy |
| Application starts by region (from application platform) | Baseline for regional performance |

### Post-Launch KPIs (measure at 90/180/365 days)

**Enrollment funnel:**
- Application starts (goal: +30% at 180 days)
- Enroll page → application start conversion (goal: 2x)
- Time from first visit to application start (goal: -50%)

**AI search & organic:**
- Number of priority queries where Uncommon appears in AI-search answers (goal: 8 of 10 top topics)
- Organic sessions to school pages (goal: +150% at 180 days, driven by rebuilt template)
- Featured snippet captures (goal: 20+ at 365 days)

**Content depth:**
- Average school page time-on-page (goal: 2x baseline)
- Bounce rate on homepage (goal: -30%)
- Spanish-language traffic (new metric — establish 30-day baseline post-launch)

**Educator ecosystem:**
- Careers page → application conversion (goal: +40%)
- Cross-clicks from Uncommon Sense → careers or curriculum hub (new metric)
- HS Curriculum Hub external referrals (baseline + growth)

**Donor engagement:**
- Alumni Impact page visits (was 404, so infinite)
- Donation conversion rate (baseline + goal)

---

## Section 4: Rewrite / Keep / Cut Table — With Owners & Effort

Rewriting the original table to include the two things it was missing: owner and effort estimate.

**Owner key:** W = Writer | C = Creative | D = Dev | R = Regional teams | Ex = External (photographer, translator, etc.)
**Effort key:** S = ≤1 day | M = 2–5 days | L = 1–3 weeks | XL = 1+ month

### Keep As-Is
| Page | Owner | Effort | Notes |
|---|---|---|---|
| About Us | W | S | Add schema, minor freshen |
| The Student Experience | W | S | Add FAQ schema |
| Donate | W | S | Confirm form still works |
| Sharing Our Practices | W | M | Expand, link to Books + Blog |

### Rewrite
| Page | Owner | Effort | Notes |
|---|---|---|---|
| Homepage | W + C | L | Audience gateway + crawlable content + hero CTA |
| Enroll | W | M | Real page: process, eligibility, FAQ, city CTAs |
| Our Approach | W | M | Articulate the Uncommon model specifically |
| Results | W + D | M | Restructure for skimmability + AI search |
| All 52 school pages | W + R + Ex | XL | Template + photography sprint (see Section 1) |
| Careers → Why Uncommon? | W | M | Flagship recruitment narrative |
| Uncommon Sense (top 20 posts) | W | L | Restructure lede + add schema |

### Consolidate
| Change | Owner | Effort | Notes |
|---|---|---|---|
| /regions/ → subdomains | D | M | 301 redirects + nav update |
| Educator hub (Sense + Practices + Books + Curriculum Hub) | W + C + D | L | Cross-linking + shared IA |
| Nav simplification (3-door architecture) | W + C + D | M | Families / Educators / Donors |

### Cut / Fix
| Item | Owner | Effort | Notes |
|---|---|---|---|
| Alumni Impact 404 | W + D | M | Build the real section |
| Outdated news (>3 yrs, no SEO value) | W | S | Archive or delete |
| PDF-embedded content | W + D | L | Convert to HTML + schema |
| Near-duplicate school pages (merged/shared campuses) | W | S | Consolidate or delete |

### New
| Item | Owner | Effort | Notes |
|---|---|---|---|
| 8–10 Answer Pages (AEO/GEO) | W + D | L | See Section 2 |
| Spanish-language track (home + enroll + FAQ) | W + Ex | L | Native Spanish translator, not machine |
| Alumni Impact section | W + R | XL | Ongoing story stream |
| KPI dashboard (post-launch) | D | M | GA4 + Search Console + application data |

---

## Section 5: Visual Assets Needed for Slide Deck

Deck version will need these — flagging now so Creative can queue them.

**Screenshots (before state, annotated):**
- Current homepage with "300 words of crawlable text" and "no audience gateway" callouts
- Current /enroll/ page showing the "click your city" dead end
- One representative school page (say, North Star Academy) with "2018 briteweb template" and "150 words" callouts
- Current /regions/nyc/ archive page vs. nyc.uncommonschools.org (side by side, showing duplicate architecture)
- Alumni Impact 404 screenshot
- AI search result for "best charter school network" showing Uncommon absent

**Comparison shots (Uncommon vs. peers):**
- Uncommon homepage vs. KIPP homepage
- Uncommon school page vs. KIPP school page (network comparison)
- Uncommon homepage vs. Khan Academy (audience-gateway pattern)
- Uncommon Results page vs. College Board data pages (AI-search structure)

**Diagrams (Creative to design):**
- Current site architecture (7 domains, dual regional structure, silos)
- Proposed site architecture (unified, audience-first, connected ecosystem)
- Proposed school page wireframe (from Section 1)
- Proposed Answer Page structure (from Section 2)
- Content pillar map (Proof / Experience / People / Expertise / Action)

**Data visualizations (post-analytics-access):**
- Priority matrix chart (Impact × Effort with all findings plotted)
- Baseline metrics table (once GA4 access is secured)
- 90/180/365 day KPI roadmap

---

## Sections 6–11 (Retained from v1, Lightly Updated)

The full content audit — architecture map, complete content inventory, audience content mapping, AI search analysis with all 10 priority topics, competitive audit (KIPP + outside exemplars), technical/SEO signals, and Phase 02 preview — carries forward from v1 unchanged. See `phase01-content-audit.md` for full detail. The v2 changes are additive: new lede, new exec summary, top-5-fixes, priority matrix, school-page deep dive, worked AEO example, baselines/KPIs, and owner-tagged rewrite table.

---

## Phase 02 Handoff

Once this audit is signed off, Phase 02 (Define) work includes:

1. Finalize 3-audience segmentation model + journey maps
2. Establish content pillar framework with editorial standards
3. SEO/AEO/GEO keyword strategy — expand from 10 priority topics to full keyword universe
4. Site taxonomy: full URL structure before anyone writes a word
5. School page template — finalize IA, photography brief, principal interview guide
6. Spanish-language strategy — scope, translator selection, ongoing governance
7. Content governance model: who owns what at network vs. regional levels
8. **Analytics access secured + baselines captured** (blocking dependency for KPI measurement)

---

*v2 revision by US-Writer, July 16, 2026. Original audit March 24, 2026. Full crawl and analytics integration pending analytics access.*
