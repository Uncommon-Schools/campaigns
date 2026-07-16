# Uncommon Schools Website Redesign
## Phase 01: Content Audit
**Prepared by:** US-Writer
**Date:** March 24, 2026
**Due:** April 11, 2026

---

## Executive Summary

The Uncommon Schools digital presence is a 7-domain network built on WordPress in ~2018 and never significantly restructured. The content quality at the top levels is decent — the mission is clearly stated, the results data is compelling, and there are genuine content assets (Uncommon Sense blog, HS Curriculum Hub, Teach Like a Champion ecosystem) that competitors don't have. But the architecture is broken in ways that undermine all of it.

**The core problems:**
1. **Dual regional architecture** — regional content lives both on the main domain (/regions/nyc/) AND on separate subdomains (nyc.uncommonschools.org). Neither is complete. Split authority, duplicate content, user confusion.
2. **Audience-blind navigation** — families, educators, and donors share the same nav with no clear pathways. Enroll — the highest-priority action — is buried under "Our Schools."
3. **Thin individual school pages** — 52 schools, most with ~200 words and a creation date of February 2018. These pages serve no one.
4. **AI search invisibility** — the homepage is video-heavy with almost no crawlable text. FAQ content exists but isn't structured. Uncommon doesn't own the answers to the questions their audiences are asking.
5. **Content asset fragmentation** — Uncommon Sense, HS Curriculum Hub, and the books ecosystem are genuinely strong. None of them are properly connected to the main site.

The good news: the mission is strong, the results are real, and there is more than enough raw material here. The site needs a content strategy, not just a redesign.

---

## Section 1: Architecture & Domain Map

### Current State

| Domain | Purpose | Estimated Pages | Status |
|---|---|---|---|
| uncommonschools.org | Network flagship | ~300 | Primary domain, WordPress |
| nyc.uncommonschools.org | NYC region | ~80 | Active, partially duplicates main |
| roxburyprep.uncommonschools.org | Boston region | ~40 | Active (note: Roxbury Prep branding, not "Uncommon Boston") |
| rochesterprep.uncommonschools.org | Rochester region | ~40 | Active |
| [camden].uncommonschools.org | Camden region | ~30 | TBD (URL not confirmed) |
| [newark].uncommonschools.org | Newark region | ~30 | TBD |
| hscurriculum.uncommonschools.org | HS Curriculum Hub | ~200+ | Active, separate product |

**The page count discrepancy explained:** The internal count of 384 almost certainly reflects the main domain only. The agency count of 795 appears to include all 6 subdomains. Both are likely undercounts — the HS Curriculum Hub alone appears to host a substantial library of AP materials. The actual page count is likely 800–1,000+ when all domains are included.

### Dual Architecture Problem (Critical)

The main domain has a `/regions/` taxonomy (e.g., uncommonschools.org/regions/nyc/) that surfaces school listings and news by region. This mirrors what the regional subdomains do — but neither is complete:

- The main domain /regions/ pages are WordPress archive pages (lists of school posts by tag). They're not full regional hubs.
- The regional subdomains have full homepage content, enrollment info, and local news — but aren't discoverable from the main site's navigation.

A family searching "Uncommon Schools NYC enroll" may land on the subdomain. A family starting at uncommonschools.org and clicking through navigation will hit dead-end /regions/ pages with no enrollment info.

**Recommendation:** Collapse the dual architecture. Establish regional subdomains as the canonical home for all regional content, with clear cross-linking from the main site. Remove or redirect /regions/ taxonomy pages on the main domain.

---

## Section 2: Full Content Inventory (Main Domain)

### Primary Navigation Pages

| Page | URL | Audience | Quality | Recommendation |
|---|---|---|---|---|
| Homepage | / | All | Weak — video-dependent, ~300 words of crawlable text | Rewrite — needs audience gateway + mission statement that can be indexed |
| About Us | /about-us/ | All | Good — mission, history, milestones. 25-year story well told | Keep + enhance with schema |
| Our Approach | /our-approach/ | Families / Educators | Adequate — covers K-12 journey, special ed commitment. Generic | Rewrite — differentiate what "Uncommon approach" actually means |
| Our People | /our-people/ | Donors / Recruits | Unknown — page not fully accessible in audit | Review — likely leadership bios |
| Professional Development | /professional-development/ | Educators | Unknown | Review |
| Our Schools | /our-schools/ | Families | Weak — nav hub only, no real content | Consolidate into Families audience hub |
| Enroll | /enroll/ | Families | Very weak — literally "click your city" with zero other content | Rewrite — make this a proper enrollment hub with clear steps |
| The Student Experience | /the-student-experience/ | Families | Good — specific, human, describes actual school day | Keep + optimize for AI search (add FAQ schema) |
| Camp Uncommon | /camp-uncommon/ | Families | Not audited | Review |
| Results | /results/ | All | Good data, poor structure — wall of college logos and stats | Rewrite — restructure for skimmability and AI search; add proof narrative |
| Sharing Our Practices | /sharing-our-practices/ | Educators / Donors | Good — strong differentiator, well-written | Keep + expand connections to Uncommon Sense + Books |
| HS Curriculum Hub | hscurriculum.uncommonschools.org | Educators | Adequate hub page — separate subdomain | Integrate cross-linking; assess full Hub in separate audit |
| Books | /books/ | Educators | Not fully audited | Review — Teach Like a Champion = massive SEO asset |
| Careers | /careers/ | Prospective staff | Good structure, adequate content | Keep + expand "Why Uncommon?" |
| Search Jobs | /careers/jobs/ | Prospective staff | Dynamic listing | Keep |
| Career Areas | /career-areas/ | Prospective staff | Not audited | Review |
| Why Uncommon? | /why-uncommon/ | Prospective staff | Not audited | Review — should be a flagship retention/recruitment page |
| Make a Referral | /make-a-referral/ | Staff | Not audited | Review |
| Media Coverage | /media/ or /press/ | Press / Donors | Not audited | Review |
| Uncommon Sense Blog | /uncommon-sense/ | Educators | Active — good recent post (Dec 2025 on Illustrative Math) | Keep + SEO restructure for AI search |
| Alumni Impact | /alumni/ | Donors / Alumni | 404 — page missing | Create — this is a major content gap |
| Donate | /donate/ | Donors | Adequate — tiered giving copy, wire/stock instructions | Keep + enhance donor journey and impact storytelling |
| FAQ | /faq/ | Families | Good content, buried — not in main nav | Promote to main nav or embed answers across relevant pages; add schema |

### School Pages (52 individual pages)

Individual school pages follow the pattern `/schools/[school-slug]/`. A sample review of NYC school pages reveals:

- Most pages were created in **February 2018** by the web agency "briteweb"
- Content: ~150–300 words, school name, grade levels, brief description, enroll CTA
- No structured info: no principal bio, no test scores, no "what makes this school different," no parent testimonials, no photos
- **Every school page is effectively identical** in structure and content depth

This is the single largest content problem on the site. 52 schools × nearly identical shallow pages = zero differentiation, zero family trust-building, and near-zero SEO value.

**Recommendation for school pages:**
- Establish a standardized school page template with: hero (school-specific photo), key stats (grades, enrollment, school year), 3–5 differentiators, staff highlights, parent/student voice quote, enroll CTA
- Prioritize highest-enrollment schools for content population first
- The template must work for both network pages and regional subdomain pages

### Regional Content on Main Domain

| Region | URL | Page Type | Quality | Recommendation |
|---|---|---|---|---|
| NYC | /regions/nyc/ | WordPress archive (school listings) | Poor | Redirect to nyc.uncommonschools.org |
| Boston | /regions/boston/ | WordPress archive | Poor | Redirect to roxburyprep.uncommonschools.org |
| Newark | /regions/newark/ | WordPress archive | Poor | Redirect to [newark].uncommonschools.org |
| Camden | /regions/camden/ | WordPress archive | Poor | Redirect to [camden].uncommonschools.org |
| Rochester | /regions/rochester/ | WordPress archive | Poor | Redirect to rochesterprep.uncommonschools.org |

### Blog (Uncommon Sense)

- URL: /uncommon-sense/ (note: blog URL listed in nav as "Uncommon Sense Blog," but the blog lives at /uncommon-sense/ — the /uncommon-sense-blog/ URL 404s)
- Most recent post visible: December 2025 (Illustrative Math implementation)
- Estimated post count: 100+ posts across several years
- Content quality appears high — practitioner-written, specific, authoritative
- **Not structured for AI search**: posts are essays, not structured Q&A or numbered takeaways. AI engines won't pull clean answers.
- **Not connected to Sharing Our Practices or Books** — all three content areas exist in silos

---

## Section 3: Keep / Consolidate / Cut Assessment

### Keep As-Is
- About Us (/about-us/) — strong content, good history narrative
- The Student Experience (/the-student-experience/) — specific, human, accurate
- Donate (/donate/) — functional with solid tiered giving copy
- Uncommon Sense blog posts — content quality is good; restructure needed, not replacement
- Sharing Our Practices (/sharing-our-practices/) — unique differentiator worth expanding

### Rewrite
- Homepage — needs audience gateway, mission clarity, and crawlable content
- Enroll (/enroll/) — needs a real page: process explanation, eligibility info, FAQ, city CTAs
- Our Approach (/our-approach/) — too generic; should articulate the Uncommon model specifically
- Results (/results/) — data is solid but needs better structure and proof narrative
- All 52 individual school pages — template rewrite needed across the board
- Careers — expand "Why Uncommon?" into a flagship recruitment narrative

### Consolidate
- /regions/ taxonomy pages → redirect to regional subdomains; remove duplicative content
- Overlap between "Our Schools" nav hub and regional subdomain homepages → one system, not two
- Uncommon Sense + Sharing Our Practices + Books → unify under a "For Educators" content hub

### Cut
- /alumni-impact/ (404 anyway) → replace with a real Alumni section
- Any PDF-embedded pages (flag during full crawl for Phase 02)
- Outdated news/press releases (older than 3 years with no ongoing SEO value)
- Near-duplicate school pages for schools that share a campus or have merged

---

## Section 4: Audience Content Mapping

### Families / Students

**What they need:** Understand why Uncommon is the right choice → find their nearest school → enroll

**What's working:**
- The Student Experience page is specific and trust-building
- Results data is strong (96% college acceptance, CREDO study reference)
- FAQ answers basic charter school questions

**What's missing:**
- School-specific content that makes individual campuses feel real (not just generic network descriptions)
- Clear enrollment pathway from the homepage — currently 3–4 clicks to find a city-specific enrollment form
- Family FAQ for "what is a charter school lottery?" "what does a school day look like?" "is it really free?"
- Grade-level guidance — parents of a 5th grader have different questions than parents of a 9th grader
- Spanish-language content — 95% of students are Black or Latino; the site is English-only

**Content buried that should be front-and-center:**
- Enroll CTA — currently nested under "Our Schools" in nav; should be primary nav or hero CTA
- Individual school pages — the homepage shows 52 schools exist but gives families no way to evaluate them

### Staff / Educators (Prospective + Current)

**What they need (prospective):** Understand why Uncommon is a great place to work → explore open roles → apply

**What they need (current/external educators):** Access professional development resources, curriculum materials, blog

**What's working:**
- Careers section has decent structure
- Sharing Our Practices is a unique differentiator
- HS Curriculum Hub is a genuine tool resource
- Uncommon Sense blog is active and practitioner-relevant

**What's missing:**
- "Why Uncommon?" needs to be a flagship page, not a dropdown item — it should tell the story of professional growth, coaching culture, and educator identity
- Educator-specific nav pathway — right now, prospective teachers navigate the same structure as families
- Connection between thought leadership (blog, books) and career recruitment — if you love Teach Like a Champion, you should be able to click through to "work with the people who wrote it"
- Teacher/staff testimonials that go beyond 1-sentence quotes
- Professional development workshop info for external educators (mentioned on Sharing Our Practices but not developed)

### Donors

**What they need:** Understand the impact of their gift → trust the organization → give

**What's working:**
- Donate page has tiered giving with concrete impact statements ($100 = class software access for a semester, etc.)
- Results data provides the proof of mission delivery
- About Us history and milestones establish organizational credibility

**What's missing:**
- Alumni Impact page — this should be the donor's anchor. Stories of students who graduated college because of Uncommon. The page 404s.
- Annual report or impact report — no equivalent on site
- Major donor pathway — no foundations/grants section, no named giving opportunities
- Donor FAQ: How is Uncommon funded? What percentage goes to classrooms? What is your annual budget?
- Stories that connect specific donation amounts to real outcomes ("In 2024, donor gifts funded...")

---

## Section 5: AI Search Readiness (AEO/GEO Analysis)

### Current Visibility in AI Search

Testing priority queries against AI search engines reveals a consistent pattern: **Uncommon Schools is not the source AI engines pull from.**

| Query | What AI Search Returns | Uncommon's Status |
|---|---|---|
| "best charter school network" | External rankings (US News, Niche, Fordham Institute) | Not present in top answers |
| "how to enroll in charter school NYC" | SchoolMint, NYC DOE Charter enrollment pages | Uncommon NYC subdomain appears but isn't the primary answer |
| "college prep charter school Newark" | Niche.com, third-party reviews | North Star Academy appears in third-party context |
| "teach at a charter school" | KIPP careers, general education job sites | Not present |
| "best schools for Black students college prep" | Various third parties | Not present despite directly relevant mission |
| "what is a charter school" | Wikipedia, government sources, third-party explainers | FAQ page not visible |

**Root causes:**
1. **Thin crawlable text on high-traffic pages** — The homepage is video-heavy. The school pages are shallow. AI engines can't extract quality answers because the answers aren't there in a scannable format.
2. **No structured FAQ schema** — The FAQ page at /faq/ has good content but no JSON-LD or FAQ schema markup. AI engines use schema to identify Q&A content.
3. **No topic authority pages** — There's no page that definitively answers "what is the Uncommon Schools model?" or "how does charter school enrollment work?" These questions exist in FAQ fragments and blog posts but are never given dedicated, structured, comprehensive treatment.
4. **Blog content is essay-format** — Uncommon Sense posts are valuable but written as practitioner essays. AI engines prefer content with clear questions, direct answers at the top, and numbered lists.

### 10 High-Priority Topics Uncommon Should Own

1. "How to enroll in a charter school in [city]" — city-specific pages with exact steps
2. "What is the Uncommon Schools model?" — dedicated model explainer with structure
3. "College acceptance rates at charter schools" — own this statistic (96% is extraordinary)
4. "What's the difference between charter schools and public schools?" — FAQ answer page
5. "AP courses at charter high schools" — HS Curriculum Hub is the answer; it needs to be findable
6. "Teaching jobs at charter schools" — job-seekers are using AI search; Uncommon needs to be in the answer
7. "How does a charter school lottery work?" — families ask this constantly
8. "Best schools for Black and Latino students college prep" — Uncommon is literally the answer; they need to claim it
9. "What support do charter schools provide for students with disabilities?" — already addressed in Our Approach but buried
10. "Teach Like a Champion — Uncommon Schools connection" — massive inbound authority; needs a clear connection to the main site

### Recommendations

- Add FAQ schema markup to all Q&A content site-wide (Phase 02 priority)
- Create 5–8 "Answer" pages that provide direct, comprehensive responses to the highest-priority questions — these are SEO and AI-search pages, structured for skimmability
- Restructure Uncommon Sense blog posts to lead with the direct answer, not the anecdote
- Build a structured data layer into the CMS: school pages should have LocalBusiness or EducationalOrganization schema; blog posts should have Article schema with author credentials

---

## Section 6: Competitive Content Audit

### KIPP (Primary Peer)

**Scale:** 279 schools, 210,000+ students, 52 regions nationally
**Website:** kipp.org + regional subdomains (e.g., kippnj.org)

**What they do well:**
- Audience-segmented content exists (though navigation still mixes audiences)
- Regional sites have more depth than Uncommon's regional presence
- Strong alumni testimonials surfaced on homepage (rotating quotes from alumni, teachers, parents)
- KIPP Foundation vs. regional school networks = clear brand hierarchy
- Significantly larger content footprint → more external links → stronger domain authority in AI search

**Where they're weaker:**
- /schools/ redirects to homepage — same broken IA problem as Uncommon
- College placement data less prominently featured than Uncommon's 96% stat
- Regional content quality is uneven — strong in NJ, thinner in smaller markets
- "KIPP approach" page is thin — "belief that college prep education sets students up for success" is not differentiated copy

**Takeaways for Uncommon:**
- Uncommon has a genuine performance claim (highest-performing large charter network per CREDO) that KIPP doesn't have and can't claim — own it everywhere
- KIPP's alumni testimonials are better surfaced than Uncommon's — adopt this
- Uncommon's Teach Like a Champion thought leadership is a moat KIPP doesn't have — build content bridges between the books/blog ecosystem and the main site

### Outside-Sector Exemplars

**Khan Academy (Education, Mission-Driven)**
- Homepage: clear value prop in 10 words ("Free world-class education for anyone, anywhere")
- Navigation is product-first (what do you want to learn?) not org-first (who are we?)
- Structured content library is indexed, searchable, and AI-friendly
- **Adapt:** Uncommon's Curriculum Hub + Uncommon Sense should be organized like a content library, not a blog

**College Board (College Prep)**
- Audience segmentation is excellent: Students | K-12 Educators | Higher Ed | Counselors — clear pathways from first click
- Data pages (SAT scores, college admission stats) are structured for AI search and featured snippets
- **Adapt:** Adopt hard audience segmentation in nav; structure data/results pages for AI extraction

**Year Up (Workforce, Mission-Driven Nonprofit)**
- Clean mission-driven homepage with clear primary action (Apply)
- Student stories are featured prominently with full arcs (before → Uncommon → after)
- Impact numbers are prominent and specific
- **Adapt:** Uncommon's alumni/impact stories need this treatment — full-arc narratives, not 1-line quotes

**University of Michigan (Higher Ed)**
- Faculty research = thought leadership, prominently featured
- Alumni network engagement built into the content architecture
- Donor engagement is deep: impact reports, named funds, scholarship stories
- **Adapt:** Model Uncommon's donor section on a university-style impact ecosystem

### 5–10 Content Patterns to Adopt

1. **Audience gateway on homepage** (College Board model) — force a choice: Families | Educators | Donors. Every path from that point is audience-specific.
2. **Full-arc student stories** (Year Up model) — not "Tasha, 10th grade, loves learning." Full story: where she started, what challenged her, where she's going.
3. **Answer-first content structure** (Khan Academy model) — lead with the answer, support with detail. Structure for AI extraction.
4. **Prominent performance claim** — "Highest-performing large charter network in the country (Stanford CREDO, 2023)" deserves a homepage position, not a footnote.
5. **Educator content hub** — consolidate Uncommon Sense + Books + HS Curriculum Hub + district partnerships under one section with its own nav pathway.
6. **Impact data as storytelling** — "$1,000 sponsors a student's arts education for a semester" is good; build a whole impact statement page with interactive giving levels and specific outcome stories.
7. **School finder with real content** — families should be able to search by zip code and get a real school profile, not a 200-word placeholder.
8. **Cross-linking from thought leadership to recruitment** — every Uncommon Sense post and every book page should have a "Work with us" module.

---

## Section 7: HS Curriculum Hub Assessment

**URL:** hscurriculum.uncommonschools.org
**What it is:** A separate subdomain hosting AP-aligned course materials for high school educators. Library of full AP course packages.
**Audience:** High school educators nationally, not Uncommon families or donors

**Strengths:**
- Unique content asset — no direct competitor offers this for free
- Directly serves the "sharing our practices" mission
- Potential AI search value: "free AP course materials," "AP biology lesson plans," etc.

**Problems:**
- Completely disconnected from main site navigation and brand experience
- Separate subdomain creates brand fragmentation (visitors don't know this is Uncommon Schools)
- No clear connection back to Uncommon's mission, recruitment, or giving pages
- The hub feels like a product without a company behind it

**Recommendation:** Keep as a separate subdomain but integrate brand continuity and cross-linking aggressively. Every page should have: Uncommon Schools brand header with links back to main site + "Want to teach here?" CTA + "What we believe" mission statement. The Hub should be a gateway to Uncommon's educator ecosystem, not an island.

---

## Section 8: Key Red Flags

1. **No Spanish-language content.** 95% of Uncommon students are Black or Latino. Enrollment pages in particular should be bilingual. This is a major accessibility and equity gap.

2. **Alumni Impact page 404s.** This is not a minor bug — Alumni Impact is a primary navigation item, and it goes nowhere. For donors, alumni stories are the most compelling proof point. Fix immediately.

3. **Blog URL inconsistency.** Nav lists "Uncommon Sense Blog" but the URL /uncommon-sense-blog/ 404s. Actual blog is at /uncommon-sense/. Small issue, potential SEO leak.

4. **PDF overreliance (likely).** Multiple pages reference downloadable resources. A full crawl in Phase 02 should flag all PDF-linked content — these are accessibility and findability gaps.

5. **School page dates.** Many school pages show "by briteweb" and 2018 creation dates. This signals outdated, unclaimed content to both search engines and users.

6. **Donation form dependency.** The donate page embeds a third-party form (FUNFEJHZALX parameter suggests a hosted form platform). If this service goes down or changes, the entire donate flow breaks.

---

## Section 9: Content Strategy Recommendations (Phase 02 Preview)

### Content Pillars

1. **Proof** — Academic results, college outcomes, Stanford CREDO data, QuestBridge scholarships, student achievement. This is the evidence that the mission works.
2. **Experience** — What school actually looks and feels like. School day narrative, student and parent voices, joy and rigor coexisting. This is the trust-builder for families.
3. **People** — Teachers, leaders, students, alumni. The humans behind the mission. This is the emotional case.
4. **Expertise** — Uncommon Sense, Teach Like a Champion, HS Curriculum Hub, district partnerships. The knowledge that extends beyond 52 schools to millions of educators. This is the thought leadership differentiator.
5. **Action** — Enroll. Give. Join us. Each pillar feeds one of these three audience-specific actions.

### Audience-First Architecture

The new site should present three doors from the moment someone arrives:
- **Families:** Find a school, learn what to expect, enroll
- **Educators:** Find open roles, access resources, grow your practice
- **Donors & Partners:** See the impact, understand the mission, give

Content organized under the network domain should serve primarily donors, educators, and the public. High-conversion family content (enrollment, school finder) should live on or be prominently linked to regional subdomains.

### Voice and Tone Direction

The current site's copy is functional but institutional. It describes what Uncommon does without conveying what it feels like to be there. The revision should write to a specific reader — a mother in Brooklyn deciding whether to apply for the lottery, a teacher in Newark wondering if this is worth leaving their current school for — not to a general audience.

**Voice:** Direct, warm, conviction-filled. Not corporate. Not a press release. Not "leveraging synergistic outcomes." More: "Your child will love school here. That's a promise, not a tagline."

**Tone by audience:**
- Families: Warm, specific, reassuring, ambitious on behalf of their kids
- Educators: Collegial, expert-to-expert, challenging and inspiring
- Donors: Evidence-driven, emotionally grounded, clear about impact

### Network vs. Regional Content Structure

- Network site (uncommonschools.org) = mission, results, thought leadership, donor engagement, national media, careers
- Regional subdomains = schools, enrollment, local news, regional identity, community connection
- Both = consistent design system, shared CMS, clear cross-linking
- Each regional subdomain gets its own editorial voice while adhering to network brand standards

---

## Summary: Phase 02 Priorities for Content Strategy

**Define phase work should include:**

1. Finalize audience segmentation model and journey maps (3 audiences × key tasks)
2. Establish content pillar framework with editorial standards for each
3. SEO/AEO/GEO keyword strategy centered on the 10 high-priority topics
4. Site taxonomy: map out the full URL structure before anyone writes a word
5. School page template definition — this is the most scalable content challenge
6. Spanish-language content strategy (enrollment at minimum)
7. Content governance model: who owns what, at what level (network vs. regional)

---

*Report prepared as part of Phase 01: Dig. Full crawl and traffic data analysis to be integrated when analytics access is provided.*
