# 07 — Content Strategy Preview (Phase 02 Setup)
**Phase 01: Content Audit | Uncommon Schools**

> Based on Phase 01 findings: five content pillars, voice and tone direction, network vs. regional structure, and the full Phase 02 priority list. This is the bridge between audit and strategy.

← [06-COMPETITIVE-AUDIT.md](./06-COMPETITIVE-AUDIT.md) | ↑ [Back to README](./00-README.md)

---

## Five Content Pillars

**1. Proof**
Academic results, college outcomes, Stanford CREDO data, QuestBridge scholarships, student achievement. The evidence that the mission works. Every audience needs this — families for trust, donors for confidence, media for credibility.

**2. Experience**
What school actually looks and feels like day-to-day. School day narrative, student and parent voices, joy and rigor coexisting. This is the trust-builder for families. The Student Experience page already does this well — it needs to be the model for the rest of the site.

**3. People**
Teachers, leaders, students, alumni. The humans behind the mission. This is the emotional case — for families choosing a school, for donors connecting to impact, for educators considering a career change.

**4. Expertise**
Uncommon Sense, Teach Like a Champion, HS Curriculum Hub, district partnerships. The knowledge that extends beyond 52 schools to millions of educators nationally. This is Uncommon's moat — no competitor has it. It needs to be owned, not scattered across disconnected subdomains.

**5. Action**
Enroll. Give. Join us. Each pillar ultimately feeds one of these three audience-specific conversion actions. Every page should know which action it's trying to drive.

---

## Audience-First Architecture

The new site needs three doors:

| Audience | Entry Point | Primary Conversion |
|---|---|---|
| **Families** | Find a school, learn what to expect | Enroll |
| **Educators** | Find open roles, access resources | Apply / Engage |
| **Donors & Partners** | See the impact, understand the mission | Give |

Network domain (`uncommonschools.org`) = mission, results, thought leadership, donor engagement, national media, careers.
Regional subdomains = schools, enrollment, local news, regional identity, community.
Both = consistent design system, shared CMS, clear cross-linking in both directions.

---

## Voice and Tone

The current site copy is **functional but institutional** — it describes what Uncommon does without conveying what it feels like to be there. The revision should write to a specific reader: a mother in Brooklyn deciding whether to enter the lottery; a teacher in Newark weighing whether to leave their current school. Not a general audience.

**Voice:** Direct. Warm. Conviction-filled. Not corporate. Not a press release.

More: *"Your child will love school here. That's a promise, not a tagline."*
Less: *"Uncommon Schools leverages a rigorous academic framework to drive measurable outcomes."*

**By audience:**
- **Families:** Warm, specific, ambitious on behalf of their kids. Reassuring without being soft. Speaks to the lottery anxiety and the "is this really worth it?" question directly.
- **Educators:** Collegial, expert-to-expert, genuinely challenging. Writes to the educator who already cares about craft and wants to get better.
- **Donors:** Evidence-driven, emotionally grounded, specific about impact. Not guilt-based. Confidence-based.

---

## Phase 02 Priorities

**Content work (Writer):**
1. Audience journey maps — 3 audiences × key tasks × content touchpoints
2. Content pillar framework with editorial standards and voice guides per pillar
3. SEO/AEO/GEO keyword strategy centered on the 10 high-priority topics (see [05-AI-SEARCH.md](./05-AI-SEARCH.md))
4. Full URL taxonomy — map every URL before anyone writes a word
5. School page template — define the content model for all 52 schools
6. Spanish-language content strategy — enrollment pages at minimum
7. "Answer pages" — 5–8 pages targeting the priority AI search topics directly
8. Alumni impact story format — full-arc narrative template for Phase 03 content production

**Technical dependencies (Dev — pre-Phase 02):**
- Fix main domain `llms.txt` misconfiguration (resolving to Camden)
- Exclude campaign tracking URLs from sitemaps and llms.txt across all subdomains
- Delete TEST page on Camden
- Confirm Newark subdomain URL
- Add FAQ schema markup to `/faq/` and all Q&A content

**Process note (from Coordinator, March 24):**
> *"When your content audit is complete, post it here and flag me. Anthony and I will review it together before you move to Phase 02. You do not advance on your own — every phase requires sign-off."*

Phase 01 audit posted March 24, 2026. Awaiting sign-off before Phase 02 begins.

---

↑ [Back to README — Full Audit Index](./00-README.md)
