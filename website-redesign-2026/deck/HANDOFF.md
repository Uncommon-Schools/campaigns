# HANDOFF: Website Redesign Support Work

Current as of Thursday, September 3, 2026. You work with Anthony Emezu, Creative Director at Uncommon Schools.

**Who owns this file.** From September 3, a Cowork agent with GitHub read and write access takes over all Uncommon work: it maintains this handoff, commits to the repo, and briefs any code agents Anthony asks for. Update this file at the end of every session.

Read section 5, "Working with Anthony," before your first message.

---

## 1. Where things stand

Uncommon Schools is rebuilding uncommonschools.org and its five regional subdomains with the agency Spinutech. WordPress multisite, Figma designs, soft launch January to February 2027, live by end of March 2027. Kickoff was August 19.

**The live issue.** Spinutech says drafting the four strategy documents (taxonomy, navigation, keep/kill/consolidate, sitemap) sits outside their contracted scope and needs a change order: hours estimate in 1 to 2 days, roughly 4+ weeks added to the timeline. Anthony's deeper concern is that Spinutech is positioned to react to Uncommon's inputs rather than lead the redesign, which would produce a reskin of the current site rather than a new one. See section 3.

**Everything with Spinutech is paused.** Courtney Clayton is going to Jackson (Spinutech leadership) directly before any further team contact. Two meetings are on hold pending that conversation. Do not draft anything to Spinutech until Anthony says the pause is lifted.

**Anthony continues in the background:** the keep/kill/consolidate sheet (section 2), the files Spinutech requested, and conversations with potential copywriters.

---

## 2. Current task: rework the keep/kill/consolidate sheet

**The problem.** The sheet lists 2,027 English pages. Mary Ann Villanueva flagged that stakeholders will be overwhelmed; Courtney agreed it cannot go out as-is. Anthony: "there's not a chance in hell we can send this to anyone."

**What Anthony asked for, in his words.** Create a hierarchy and organize the pages based on site data criteria pulled from the site audit. Not automated recommendations. Anthony was explicit: the agent ranks and orders, people decide. Do not put a machine-generated Keep/Kill/Consolidate call in the sheet unless he asks for it.

Also required: the lower-value pages must still be grouped by a sensible system, not dumped in an unordered tail. He called this out specifically.

The goal is that stakeholders review a manageable set rather than 2,027 dropdowns, with the highest-value pages surfaced first.

**Work in Anthony's file, not a rebuild.** He has applied his own styling. He will supply the current .xlsx.

**Current sheet structure.** One tab per site (Main site 788 rows, NYC 95, Boston 52, Newark 56, Camden 47, Rochester 44, Curriculum Hub 945), plus a "Start here" tab with instructions and a live progress count. Columns: Section, Page, Web address, Page type, Last updated, What the audit found, Decision (dropdown, column G), Notes. Translated pages are excluded; they follow the English page. In Google Sheets the dropdown is a chip; .xlsx cannot carry that format, so do not try to add it.

**The data is ready.** On September 2 the code agent read every one of the 2,022 English pages and produced `website-redesign-2026/page-decision-data/page-decision-data.csv`, with a column guide and caveats in `README.md` alongside it. Read the README in full before using the file. Key facts:

- One row per page, keyed by Web address. Merge into the sheet on that column. The sheet has 2,027 rows; five were added by hand and won't match. Leave them as they are.
- Signals for every page: loads OK / redirects / dead; redirect target; hidden from Google; word count and a content-amount rating; how many other pages link to it; whether it's in the site menu; links to broken pages; nearest near-duplicate and similarity; flagged as likely required (legal or compliance); on the enrollment, donation, or careers path. Mobile speed and page size for the 57 audited pages.
- What it found: 57 dead pages (56 on the Curriculum Hub, 1 on NYC); 123 near-duplicates, including live leftover clones of key main-site pages; 258 pages with almost no content and nothing linking to them; 25 likely-required pages and 127 on the money path.
- Caveats that matter for ranking: the 115 main-site people pages cannot be read this way (their bios load by script), so do not judge them on word count. The 931 Curriculum Hub resource pages are sign-in gated; this file can only say which are dead. A Hub owner has to make the rest of those calls.
- The file has a "What the data suggests" column, filled for 460 rows where the evidence is mechanical (dead, moved, duplicate, or empty and orphaned). **Anthony has said the sheet must not carry machine-made Keep/Kill/Consolidate calls.** Whether and how that column appears in the sheet is his decision. Ask before including it.

What the repo audit adds beyond the CSV: `01-audit/writer/03-CONTENT-INVENTORY.md` has quality ratings and page calls for about 25 main-domain pages, already reflected in the sheet's audit notes. Audience priority from kickoff: prospective families and job candidates first, other educators rising, donors secondary, current families not a target.

**Constraints from the September 1 internal call:**
- The blog may be driving organic traffic. Treat it as a consolidate candidate, not an automatic cut, until traffic data confirms.
- Legal and compliance pages must be vetted by Miriam before removal. Whether the standard is WCAG AA or AAA is an open question with her.
- Once a first pass exists, the plan is to send it to Spinutech as Uncommon's initial draft for their review and recommendations. That is paused with everything else.

---

## 3. The engagement problem

Do not lose this. It is the context behind every open item.

**Anthony's position.** Spinutech was hired to lead the redesign. Their language positions them as secondary: "reviewing and providing recommendations on client-provided materials," "drafting and iteration." Uncommon produced the 75-finding audit itself. Spinutech has asked Uncommon for the mood board, journey maps, content pillars, regional performance data, and all copy. The September 22 visual session is "based on the materials provided by Anthony." His words: "they're not doing any of their own research," and "if we're not [on the same page], then anything we're building, they're just reskinning."

On the user flow maps specifically: Spinutech says four weeks. Anthony says he could produce one the same day. His objection is not the document, it is that producing it internally means Spinutech builds from Uncommon's thinking rather than their own.

**Spinutech's position (Portia Griffin, September 1).** Their scope covers "Audit Review of Client-Provided Materials" and "Review Site Architecture": they review a client-provided performance analysis, sitemap, and taxonomy and recommend adjustments. Drafting the four documents "falls outside what was estimated for this engagement." Uncommon's role would be unchanged: inputs, stakeholder feedback, final decisions.

**Mary Ann's position.** The keep/kill/consolidate exercise is not only an inventory. The current site is the only anchor stakeholders have, so the exercise is how Uncommon learns what functionality matters to them, and it lets stakeholders see what existed and how thoroughly it was revamped. But the current site is the baseline for gathering feedback, not the thing to rebuild. The site is 8 years old and the executive team dislikes it. Her words on the goal: "best in class with the specific thing that we want to serve up, not broad stroke." She told Anthony to keep pushing Spinutech.

**Courtney's read after the September 1 call.** Portia may not be the right fit: uninformed rather than hostile, coming in blind. Brittany, Portia's senior and the person Uncommon dealt with through the pitch, should play a stronger day-to-day role. Courtney is raising both with Jackson one-to-one before any group call, to avoid escalating in front of ten people. She is confident the sitemap and UX disagreement is resolvable, including on cost.

**Timeline dispute.** Portia said Spinutech is not confident of hitting the timeline even if Uncommon delivered everything immediately. Internally: the SOW estimates 29 to 35 weeks with an August 3 start and February 26 completion; kickoff was August 19, so the range still holds if shifted. Portia also cited more than 500 pages in scope and 40 hours a week of external user testing not yet factored in. Uncommon's counter is that her page count includes blog and sub-pages that will not be tested, and that user testing was already in the signed scope.

**The RAPID on the change order:** Courtney recommends, Anthony and Anneliese give input, Anneliese performs, Mary Ann decides. Anneliese's open questions to Anthony, still unanswered: could he create the documents faster than four weeks, and is there anyone else who could.

---

## 4. Repo and project reference

`website-redesign-2026/` contains:
- `01-audit/dev|writer|creative/`: March 2026 audits, 30 files, superseded in parts.
- `01-audit/browser/`: August 26 live-site audit. `00-SUMMARY.md`, `00-CLAIMS-VERIFICATION.md`, per-domain reports, `lighthouse/`, `screenshots/`, `raw/` (robots, llms.txt, sitemap XML per domain).
- `deck/deck_source.md`: source of truth for the audit deck, 17 sections. Read in full; Anthony expects you to know it.
- `deck/build_deck.py`: deck generator. Needs `template.pptx` and the pptx skill scripts.
- `deck/HANDOFF.md`: this file.
- `page-decision-data/`: the September 2 page-level data file and README for the keep/kill/consolidate rework.

People: Anthony Emezu, Creative Director (your contact). Anneliese Tint runs the project. Mary Ann Villanueva, Chief External Officer, decides. Courtney Clayton, Senior Director of Brand and Marketing. Spinutech: Portia Griffin (lead), Brittany (her senior), Jackson (leadership), Meghan (UX strategist), Eric (designer).

Spinutech's schedule as of their September 1 email, subject to the pause: technical discovery September 3, 9, 10; strategy recommendations September 15; visual identity session September 22; content planning workshop October 1; wireframe review October 29. Copywriting is not in their scope; Uncommon provides final copy, expected January 2027.

### Key facts you must not get wrong

- Live site changed after the March audits: six domains run as one WordPress multisite on nginx at a DigitalOcean IP (no CDN); the Curriculum Hub is separate on WP Engine. Who migrated it is unresolved.
- Boston = roxburyprep.uncommonschools.org; Newark = northstar.uncommonschools.org; NYC = nyc.uncommonschools.org; Camden = camdenprep.uncommonschools.org; Rochester = rochesterprep.uncommonschools.org.
- Headline findings: llms.txt serves Camden content on all six domains; entry popups on all regionals fail keyboard access (OCR-cited org); enroll pages weigh 20 to 60MB; no cookie consent anywhere; Camden has no GA4; Enroll clicks fire no conversion event on 5 of 6 sites; 58 paid campaign landing pages are indexed.
- Kickoff decisions: aim WCAG AAA case by case; reference site kippnj.org; Success Academy referenced only for its single-flow application; do not look like any competitor; audience priority: prospective families and job candidates (primary), other educators (rising), donors (secondary), current families (not a target).
- Deck brand rules: Libre Franklin only; blue #1034B3, yellow #FBAE40, panel fill #F2F4FA, borders #C9CED8; sizes locked as above; no em dashes anywhere in deck copy.

**Completed and delivered:** the audit deck v3 (58 pages, August 31); the division-of-labor email to Spinutech (sent August 31); the keep/kill/consolidate spreadsheet (live in Sheets, being reworked per section 2); the page-level data file (September 2, code agent).

**Queued after the current task:** aspirational site examples (non-education sites with excellent design, appended to the audit deck); review of Spinutech's sitemap and taxonomy when they produce them; the keep/kill/consolidate final list once stakeholder input and traffic data are in.

---

## 5. Working with Anthony

Hard rules. Violating them costs trust immediately.

1. ONE ACTION ITEM AT A TIME. One next step, wait, then the next.
2. Brevity. He will not read long messages. Lead with the answer.
3. Never hand him questions when you were given a task. Resolve what you can; record the rest as open items.
4. Do the verification yourself. Do not ask him to fact-check volume.
5. No trimming content without an itemized justification. Nothing gets shortened silently. This applies to emails too: if he gives you a list to include, include the whole list.
6. Documents to him: real files (xlsx, pptx, PDF), never raw markdown. Messages meant for pasting go in the chat.
7. Deck copy: no em dashes, ever. Font sizes never change.
8. When he asks for a proposal, give one recommendation with reasoning, not options.
9. Build decks inside the real brand template, never a recreation.
10. He spins up code agents on request; write them a self-contained brief and have them write results into this repo.
11. PLAIN LANGUAGE. No jargon. Anthony is a creative director, not a developer. Say what you will do in everyday words ("I'll change only the words you flag on that slide, nothing else"), never in technical terms ("surgical run-level edits", "crawl", "regenerate"). Every new agent must read this before its first message.
12. Do not add content he did not ask for. If you think something is missing, say so in one line and ask; do not put it in the draft.
13. When he says something is wrong, fix that thing and keep everything else. Do not overcorrect by stripping things he did ask for.
14. Before any draft with more than one requirement, list the requirements back to him in a few lines and get a yes. Then write once against that list.
15. He will tell you bluntly when work is bad. Do not apologize at length. Say what went wrong in one sentence and fix it.
16. NEVER MAKE ANYTHING UP. Do not invent facts, names, timings, claims, or details Anthony did not state or that are not confirmed in source material. If something is unknown, say so or leave a bracket for him to fill in. This applies to drafts, recommendations, and questions alike.

### His writing style, captured verbatim

He wrote this himself after rejecting several attempts. Match the pattern: link first, three bullets, concrete mechanics, no framing, no rationale, no sign-off.

> Hi @all,
> The Keep, Kill, or Consolidate review sheet can be found [here](link).
>
> * There's a tab for the main site, NYC, Boston, Newark, Camden, Rochester, and Curriculum Hub. Every page is listed with its link, page type, and any notes from the August audit.
> * To mark a decision, use the dropdown in column G on each tab. If you pick Consolidate, note where it folds into in the Notes column.
> * The Start here tab has instructions and a Progress table that counts decisions as they're made.

### How past agents have failed

Two sessions ended badly, August 28 and September 1, the second because Anthony stopped it. The same failures both times: over-explaining what the reader already knew, then over-correcting by stripping content he had asked to keep; inventing details he never supplied; using jargon he had to ask about; writing questions for a paid vendor that read like a quiz, including one already answered in writing; and answering from memory instead of checking the source.

The fixes: hold every stated requirement at once rather than reacting to the last complaint. Never add a fact he did not give. When shortening, remove words, not information. Verify before stating, every time.
