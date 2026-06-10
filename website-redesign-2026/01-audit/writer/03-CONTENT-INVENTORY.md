# 03 — Content Inventory
**Phase 01: Content Audit | Uncommon Schools**

> Full page inventory for the main domain with Keep / Rewrite / Consolidate / Cut recommendations. School pages and regional content assessed separately.

← [02-ARCHITECTURE.md](./02-ARCHITECTURE.md) | → [04-AUDIENCE-MAPPING.md](./04-AUDIENCE-MAPPING.md)

---

## Primary Navigation Pages

| Page | URL | Audience | Quality | Recommendation |
|---|---|---|---|---|
| Homepage | / | All | Weak — video-dependent, ~300 words crawlable text | **Rewrite** — needs audience gateway + indexable mission statement |
| About Us | /about-us/ | All | Good — mission, history, milestones | **Keep** + add schema markup |
| Our Approach | /our-approach/ | Families / Educators | Adequate — covers K–12 journey, special ed. Generic. | **Rewrite** — needs to articulate what the Uncommon model actually is |
| Our People | /our-people/ | Donors / Recruits | Not fully accessible in audit | **Review** — likely leadership bios |
| Professional Development | /professional-development/ | Educators | Not audited | **Review** |
| Our Schools | /our-schools/ | Families | Weak — nav hub only, no real content | **Consolidate** into Families audience hub |
| Enroll | /enroll/ | Families | Very weak — literally "click your city" | **Rewrite** — proper enrollment hub: steps, eligibility, FAQ, city CTAs |
| The Student Experience | /the-student-experience/ | Families | Good — specific, human, describes actual school day | **Keep** + add FAQ schema for AI search |
| Camp Uncommon | /camp-uncommon/ | Families | Not audited | **Review** |
| Results | /results/ | All | Good data, poor structure — wall of logos and stats | **Rewrite** — restructure for skimmability + AI extraction |
| Sharing Our Practices | /sharing-our-practices/ | Educators / Donors | Good — strong unique differentiator | **Keep** + expand cross-links to Uncommon Sense + Books |
| HS Curriculum Hub | hscurriculum.uncommonschools.org | Educators | Adequate — separate subdomain | **Integrate** brand continuity; full Hub assessment separate |
| Books | /books/ | Educators | Not fully audited | **Review** — Teach Like a Champion = massive SEO asset sitting idle |
| Careers | /careers/ | Prospective staff | Good structure, adequate content | **Keep** + expand "Why Uncommon?" |
| Search Jobs | /careers/jobs/ | Prospective staff | Dynamic listing | **Keep** |
| Career Areas | /career-areas/ | Prospective staff | Not audited | **Review** |
| Why Uncommon? | /why-uncommon/ | Prospective staff | Not audited | **Review** — should be a flagship recruitment page |
| Make a Referral | /make-a-referral/ | Staff | Not audited | **Review** |
| Media / Press | /media/ or /press/ | Press / Donors | Not audited | **Review** |
| Uncommon Sense Blog | /uncommon-sense/ | Educators | Active, high quality writing | **Keep** + restructure posts for AI search (answer-first format) |
| Alumni Impact | /alumni/ | Donors / Alumni | **404 — page missing** | **Create** — critical gap for donor storytelling |
| Donate | /donate/ | Donors | Adequate — tiered giving copy, wire/stock info | **Keep** + enhance donor journey and impact storytelling |
| FAQ | /faq/ | Families | Good content, buried — not in main nav | **Promote** to main nav or embed answers across relevant pages; add schema |

---

## Keep / Consolidate / Cut

### ✅ Keep As-Is
- About Us — strong mission narrative, good history
- The Student Experience — specific, human, accurate
- Donate — functional with solid tiered giving copy
- Uncommon Sense blog posts — quality is good; structure needs work, content doesn't
- Sharing Our Practices — unique differentiator worth expanding

### ✏️ Rewrite
- Homepage — audience gateway, crawlable mission statement, primary CTAs
- Enroll — real enrollment hub with process, eligibility, FAQ, city-specific CTAs
- Our Approach — specific articulation of the Uncommon model, not generic ed-speak
- Results — restructure for skimmability; build proof narrative around the CREDO stat
- All 52 individual school pages — template rewrite (see below)
- Careers — "Why Uncommon?" needs to be a flagship page, not a dropdown

### 🔀 Consolidate
- `/regions/` taxonomy pages → 301 redirect to regional subdomains
- "Our Schools" nav hub + regional subdomain homepages → one unified system
- Uncommon Sense + Sharing Our Practices + Books → unified "For Educators" content hub

### ✂️ Cut
- `/alumni-impact/` (404 anyway) → replace with a real, built Alumni section
- PDF-embedded pages — flag during full crawl; convert to inline content
- Press releases older than 3 years with no ongoing SEO value
- Near-duplicate school pages for schools that share a campus or have merged

---

## School Pages (52 pages)

Individual school pages at `/schools/[school-slug]/`. Sample review of NYC school pages:

- Created **February 2018** by agency "briteweb"
- Content: ~150–300 words, school name, grade levels, brief description, enroll CTA
- No principal bio, no test scores, no differentiation, no parent quotes, no photos
- Every single school page is structurally identical

This is the largest content problem on the site. 52 schools × identical shallow pages = zero family trust-building, zero SEO value, zero differentiation.

**School page template required for Phase 02:**
- Hero: school-specific photography
- Key stats: grades served, enrollment size, school year
- 3–5 differentiators: what makes *this* school different from the other 51
- Staff highlight: principal name and brief bio
- Voice: one parent or student quote (real, attributed, specific)
- CTA: Enroll at this school → regional subdomain enrollment page

Priority order for content population: highest-enrollment schools first.

---

## Regional Pages on Main Domain

| Region | URL | Current State | Action |
|---|---|---|---|
| NYC | /regions/nyc/ | WordPress archive (school list by tag) | 301 → nyc.uncommonschools.org |
| Boston | /regions/boston/ | WordPress archive | 301 → roxburyprep.uncommonschools.org |
| Newark | /regions/newark/ | WordPress archive | 301 → [newark subdomain — confirm URL] |
| Camden | /regions/camden/ | WordPress archive | 301 → camdenprep.uncommonschools.org |
| Rochester | /regions/rochester/ | WordPress archive | 301 → rochesterprep.uncommonschools.org |

---

→ Next: [04-AUDIENCE-MAPPING.md — What's Working and Missing for Each Audience](./04-AUDIENCE-MAPPING.md)
