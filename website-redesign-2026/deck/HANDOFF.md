# HANDOFF: Website Redesign Support Work

Read this first. It is the complete state of the Claude-side work supporting the Uncommon Schools website redesign as of August 27, 2026. The person you are working with is Anthony Emezu, Creative Director. Read the "Working with Anthony" section before you send him anything.

## The project in one paragraph

Uncommon Schools is rebuilding uncommonschools.org and its five regional subdomains with the agency Spinutech (WordPress multisite, Figma designs, soft launch Jan–Feb 2027, live by end of March 2027). At the August 19 kickoff, Spinutech requested a set of pre-work deliverables from Uncommon. Mary Ann Villanueva (Chief External Officer) is tracking whether they've been sent. Anthony owns several of them; this workstream produces them.

## Deliverable status

| # | Deliverable | Status |
|---|---|---|
| 1 | Aspirational site examples (non-education sites with excellent design) | NOT STARTED. Next major task after the deck is approved. Research design blogs, award sites (Awwwards, siteinspire, etc.), build as pages appended to the audit deck. |
| 2 | Content + technical audit | DECK BUILT, v1 delivered Aug 27, awaiting Anthony's page-by-page review. |
| 3 | CMS workflow documentation / screen recording | Anthony + Courtney handle directly; not ours. |
| 4 | Cookie banner answer | ANSWERED: no banner exists on any of 7 domains; full detail on the deck's cookies page. |
| 5 | Visual direction / mood board | Anthony's own work; not ours. |
| 6 | Sitemap + taxonomy | WAITING on Spinutech's format sample. Build in PowerPoint per Anthony's stated preference. |
| 7 | Keep/kill/consolidate URL list | WAITING on 2 years of GA4 traffic data. The URL universe (~6,767 URLs) is enumerated in the browser audit sitemap captures. |

## What exists in this repo (`website-redesign-2026/`)

- `01-audit/dev|writer|creative/` — the original March 2026 audits (30 files). Superseded in parts; see the claims verification before citing anything from them.
- `01-audit/browser/` — August 26 live-site audit by a code agent: per-domain reports, `00-SUMMARY.md`, `00-CLAIMS-VERIFICATION.md` (75 March claims marked CONFIRMED/CHANGED/NOT REPRODUCIBLE), Lighthouse JSON, screenshots, raw robots/llms/sitemap captures.
- `deck/deck_source.md` — the single source of truth for the audit deck's content. Every fact, table, and judgment, merged from all audits + kickoff + verification. THE DECK IS GENERATED FROM THIS FILE. Edit this, not the pptx, for content changes.
- `deck/build_deck.py` — generator: parses deck_source.md, paginates, duplicates template slides, fills with python-pptx. Run it in an environment with the pptx skill scripts (`/mnt/skills/public/pptx/`). Needs `template.pptx` in the working directory.
- `deck/HANDOFF.md` — this file.

## The deck (v1, 63 slides)

- Built inside "Uncommon Presentation Template.pptx" (Anthony uploads it to chat on request; project-folder uploads strip binaries to text, do not rely on them). Cover = template slide 1; white content pages duplicate template slide 2; blue section dividers duplicate template slide 5.
- Fonts: Libre Franklin everywhere. Sizes are LOCKED per Anthony: titles 24pt, subheads 14pt blue #1034B3, body 11pt, bullets 10.5pt, tables 9pt. DO NOT CHANGE SIZES. If content grows, add a continued page.
- Palette: blue #1034B3, yellow #FBAE40, table header fill #F2F4FA, borders #C9CED8.
- Contents page lists 17 sections with slide numbers; regenerating the deck recomputes them.
- Rebuild loop: edit deck_source.md → `python3 build_deck.py` → validate with the pptx skill validator (`--original template.pptx`) → render to images → inspect every page → deliver .pptx (+ .pdf preview).
- After Anthony's review begins, switch to SURGICAL EDITS on his latest file at the run level; do not regenerate, because he hand-tunes formatting between rounds. Regeneration is only acceptable before his first formatting pass.

## Key facts you must not get wrong

- The live site changed after the March audits: six domains now run as one WordPress multisite on nginx at a DigitalOcean IP (no CDN, no Cloudflare); the Curriculum Hub remains separate on WP Engine. Who migrated it is unresolved (deck Section 17).
- Boston = roxburyprep.uncommonschools.org; Newark = northstar.uncommonschools.org.
- Headline findings: llms.txt serves Camden content on all six domains; entry popups on all regionals fail keyboard access (OCR-cited org, so legal weight); enroll pages weigh 20–60MB; no cookie consent anywhere; Camden has no GA4; Enroll clicks fire no conversion event on 5 of 6 sites; 58 paid campaign landing pages are indexed.
- Kickoff decisions: aim WCAG AAA with case-by-case trade-offs; reference site is kippnj.org (not kipp.org); Success Academy referenced only for its single-flow application; the new site must not look like any competitor; audience priority: prospective families and job candidates (primary), other educators (rising), donors/supporters (secondary), current families (not a target).

## Working with Anthony

These are hard rules learned in this project. Violating them costs trust immediately.

1. ONE ACTION ITEM AT A TIME. Give him a single next step, wait for it to be done, then the next. Never a list of things for him to do.
2. Brevity. He will not read long messages. Lead with the answer.
3. Never hand him questions to answer when you were given a task. Resolve what you can, record the rest as open items with the facts as found.
4. Do the verification yourself or arrange it (code agents); do not ask him to fact-check volume.
5. No trimming content without an itemized justification. "Consolidate" language alarms him; nothing gets shortened silently.
6. Documents to him: PDF or a link, never raw markdown. Messages meant for pasting (e.g., to a code agent) go IN THE CHAT, not in a file.
7. Deck copy: no em dashes, ever. Font sizes never change.
8. When he asks for a proposal, give one recommendation with reasoning, not options.
9. Build decks inside the real brand template, never a recreation.
10. He spins up code agents on request when browser/repo work is needed; write the agent a self-contained brief and have it write results into this repo.
11. PLAIN LANGUAGE. No jargon. Anthony is a creative director, not a developer. Say what you will do in everyday words ("I'll change only the words you flag on that slide, nothing else"), never in technical terms ("surgical run-level edits"). Every new agent must read this before its first message.

## Immediate next steps (in order)

1. Anthony reviews deck v1 → apply his notes as surgical edits.
2. Aspirational site examples research → new deck section or companion pages.
3. Sitemap/taxonomy once Spinutech's format sample arrives.
4. Keep/kill/consolidate once GA4 2-year traffic export arrives.
5. Separately promised to Anthony: draft project Instructions for the Claude project after the website tasks wrap.
