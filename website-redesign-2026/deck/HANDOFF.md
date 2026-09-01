# HANDOFF: Website Redesign Support Work

Read this first, all of it, before you send Anthony anything. It is the complete state of the Claude-side work supporting the Uncommon Schools website redesign as of Friday, August 28, 2026. The person you are working with is Anthony Emezu, Creative Director. Read "Working with Anthony" and "How the last agent failed" before your first message.

## The project in one paragraph

Uncommon Schools is rebuilding uncommonschools.org and its five regional subdomains with the agency Spinutech (WordPress multisite, Figma designs, soft launch Jan to Feb 2027, live by end of March 2027). At the August 19 kickoff, Spinutech requested pre-work from Uncommon. Mary Ann Villanueva (Chief External Officer) tracks whether it has been sent. Anneliese Tint runs the project on the Uncommon side. Courtney Clayton is Senior Director of Brand and Marketing. Anthony owns several deliverables; this workstream produces them.

## Spinutech's role (settled facts)

- Spinutech is the outside agency: they design the site in Figma and build it on WordPress multisite.
- Spinutech contacts: Portia Griffin (lead), Meghan, Jacob, Julie, Wes, Jamey.
- On Wednesday August 26, Anneliese emailed the internal team ("Project Kick-Off Follow Up"): Spinutech reclassified four documents from "discovery" (due end of last week) to their "strategy" phase: **Taxonomy, Navigation, Keep/Kill/Consolidate, Sitemap.** Not due yet. Spinutech scheduled time with Anneliese, Anthony, and a Spinutech specialist to discuss them the week of August 31. A detailed project schedule from Spinutech is expected the first week of September.
- Spinutech sent an example taxonomy document from another client. In it, Spinutech built the taxonomy for the client.

## What happened on August 28 (this session)

1. Anthony raised a concern: the four strategy documents are landing on him. He does not want to do Spinutech's job. Keep/kill/consolidate needs input from content stakeholders and likely leadership; he does not have full insight into the value of every part of the site. Taxonomy is a large body of work that Spinutech did for their own client in the example.
2. Anthony sent an internal email to Anneliese, Courtney, and Mary Ann (full text in Appendix A). It is now the reference for tone and content.
3. Internal Slack thread (screenshots seen):
   - Anthony: "I'll connect with Spinutech directly regarding the division of labor. Wanted to flag it with this group before connecting with them."
   - Anneliese: "Appreciate this!!!!"
   - Mary Ann: "Appreciate this as well. Anthony if you can please cc this group in your exchange with Spinutech that would be helpful so we are all aware and in lock step."
   - Anthony: "Items like the Keep/kill/consolidate task requires a bit of internal leg work that includes connecting with stakeholders that own the content. Deciding which pages survive isn't a task I should have."
   - Mary Ann: "Agree, but we need to set the stage and show the audit and a reco on which to keep/kill/consolidate so that we can have a productive conversation with stakeholders. Perhaps Spinutech can take the first stab? We had originally talked about a simple format with the content organized by the site map and simple notations on each."
4. Anthony's read of Mary Ann's note: Uncommon builds an initial sitemap of current pages, stakeholders add notations internally, then Spinutech takes the baton. The last agent attempted the spreadsheet and it was rejected; the next agent builds it fresh (see Task 2).
5. Anthony reviewed audit deck v1 and found it did not follow the template (see Task 3).

## Open tasks, in the order Anthony wants them

### Task 1: Email to Spinutech about division of labor (SENT August 31, 2026; Spinutech replied September 1)

**Goal, in Anthony's words:** cordial, polite, professional. Manage expectations. Do not let Spinutech pass their work off to him. Cc Anneliese, Courtney, Mary Ann (per Mary Ann's Slack request).

**What the email must do:** set the working arrangement with Spinutech so that Spinutech drafts the four strategy documents and Uncommon supplies inputs and makes decisions. It is NOT a word-for-word rewrite of the internal email; it uses the same facts, reframed for a vendor: forward-looking, collaborative, "here is how we will work together and here is what you are getting from us," not "here is my concern."

**Content that must be in it (all of it, none summarized):**
- Agency model: in a typical agency redesign these are the agency's strategy deliverables; client supplies inputs and decides, agency does the analysis and puts a draft in front of the client. Spinutech now calls these their strategy documents, which fits.
- Keep/kill/consolidate: covers roughly 6,700 URLs; that analysis is what the agency was hired for; decisions need the stakeholders who own the content and likely leadership.
- Taxonomy: large body of work; in Spinutech's own example they built it for the client; same model here.
- Uncommon is organizing the current pages into a simple sitemap for internal stakeholder notes (Mary Ann's format), then hands it to Spinutech.
- The full "What the new audit adds" bullet list, exactly as Anthony wrote it in Appendix A (seven bullets), then the closing point that with this more detailed audit, which now includes mobile, Spinutech has more than enough to hit the ground running.

**Content that must NOT be in it:** the GA4 export (never discussed for this email), an agenda or "what we'll bring to the meeting" list, "who signs off on what," anything Anthony did not ask for. Do not invent lines like "they have access to every resource I do."

**Process Anthony agreed to for the next attempt:** before drafting, send him four short lines stating what the email needs to accomplish and what content goes in. He confirms or corrects. Then write it once against that list.

### Task 2: Sitemap spreadsheet for internal keep/kill/consolidate notes (BUILD FROM SCRATCH)

The last agent's version was rejected. Do not look for it; build your own.

**Purpose (Mary Ann's format):** a simple document with the current site content organized by sitemap and a place for a notation on each item, so stakeholders who own content can mark keep, kill, or consolidate before it goes to Spinutech.

**Source data:** `01-audit/browser/raw/*-sitemap.xml` (the page lists each site published, captured August 26). Ignore the `*_wp-sitemap.xml` files (indexes, not page lists). Every entry has a `<loc>` and a `<lastmod>`.

**Facts about the data:** 6,750 addresses in total. 4,728 are automatic translations (paths starting /ar/, /zh/, /fr/, /pt/, /es/, /ht/) of 2,022 English pages. The main site has 788 English pages, not 5,516. Decisions belong on the English pages; translations follow. Page types come from the sitemap file names (page, post, people, school, social, impact-blog, book, and listing types like category, tag, region, level, role, author; the Curriculum Hub has collection, subject, content-type).

**The audit already has page-level findings** in `deck/deck_source.md`: Section 8.1 (main-domain pages), 8.2 (regional pages), 8.3 (keep / rewrite / consolidate / cut list), 3.7 (58 paid campaign landing pages), 3.9 and 7.1 (/regions/ archives, /test/, 404s), 7.2 (57 empty main-domain school pages), 15 (content volumes). Carry them in where they apply to a page.

**Anthony's requirements:** a professional deliverable that could go to stakeholders. Readable type (11pt or larger). Plain-language column names and a plain-language instructions tab. Only add a column if he asked for it or you have confirmed it with him first; he rejected "Owner" and "Consolidate into" because their purpose was not clear. Render the file and look at it as a document before sending. Deliver as .xlsx.

### Task 3: Fix audit deck v1 (DONE — audit deck v3 delivered August 31, 2026; see Deliverable status row 2)

Anthony reviewed v1 (63 slides) and found:
- It did not follow the provided template. The cover slide format is wrong (compare the SY26-27 Design Guidelines deck cover, which is correct: white logo top left, yellow rule, title lower left, 30 Years badge bottom right, copyright centered at bottom).
- Text is far too small. The build ignored the locked sizes (titles 24pt, subheads 14pt, body 11pt, bullets 10.5pt, tables 9pt, all Libre Franklin). Compare the "About This Audit" content slide (small dense paragraphs) with the "What stayed the same" slide from the Guidelines deck (correct sizes).
- Blue section-divider slides carry a yellow "Section 0" style tag above the title that was never requested and is not in the template. Remove it.

**Files needed, neither is in this repo or in the project folder:** (1) Anthony's original brand template .pptx ("Uncommon Presentation Template.pptx"; the deck-building playbook also references "30th Anniversary Logo Branding - Final.pptx"); (2) the v1 audit deck .pptx. Ask Anthony to attach both as chat attachments (not the project folder, which strips binaries). Say exactly that, in those words. Do not describe the fix in technical terms.

**How to fix once you have them:** the deck is generated by `deck/build_deck.py` from `deck/deck_source.md`. Since Anthony has NOT yet done his own formatting pass on v1 (he stopped at review because the format was wrong), regenerating is acceptable this once. Fix the generator: use the template's real cover layout; remove the section tag; set the locked font sizes; if content no longer fits at those sizes, add continued pages, never shrink text. Render every slide to images and inspect before delivering. Deliver .pptx plus .pdf preview.

### Tasks 4 to 6 (unchanged, in order after the above)

4. Aspirational site examples (non-education sites with excellent design): research design blogs and award sites, build as pages appended to the audit deck.
5. Sitemap and taxonomy in Spinutech's format, once their format sample arrives (the current expectation is that Spinutech drafts these; see Task 1).
6. Keep/kill/consolidate final list, once GA4 two-year traffic export arrives and stakeholder notes are in the sitemap spreadsheet.
7. Promised earlier: draft project Instructions for the Claude project folder after the website tasks wrap.

## Deliverable status (Spinutech pre-work)

| # | Deliverable | Status |
|---|---|---|
| 1 | Aspirational site examples | NOT STARTED |
| 2 | Content + technical audit | Audit deck v3 delivered August 31, 2026. 58 pages, sections 0–12 only (13–17 cut). All March/comparison references removed from the source. Section covers rebuilt from slideLayout8 plus the cover lockup; body text 13pt. deck_source.md and build_deck.py in this folder are the v3 versions and match the delivered deck. |
| 3 | CMS workflow documentation / screen recording | Anthony + Courtney; not ours |
| 4 | Cookie banner answer | ANSWERED: no banner on any of 7 domains |
| 5 | Visual direction / mood board | Anthony's own work; not ours |
| 6 | Sitemap + taxonomy | Reclassified by Spinutech to their strategy phase; Uncommon position is that Spinutech drafts (Task 1). Internal sitemap spreadsheet to be built (Task 2). |
| 7 | Keep/kill/consolidate | Same as 6. Waiting on GA4 two-year export and stakeholder notes. |

## What exists in this repo (`website-redesign-2026/`)

- `01-audit/dev|writer|creative/`: the original March 2026 audits (30 files). Superseded in parts.
- `01-audit/browser/`: August 26 live-site audit. `00-SUMMARY.md`, `00-CLAIMS-VERIFICATION.md`, per-domain reports, `lighthouse/`, `screenshots/<domain>/`, `raw/` (robots, llms.txt, sitemap XML per domain).
- `deck/deck_source.md`: single source of truth for the audit deck content (17 sections). Read it in full before doing anything; Anthony expects you to know it.
- `deck/build_deck.py`: generator. Needs `template.pptx` in the working directory and the pptx skill scripts.
- `deck/HANDOFF.md`: this file.

Repo access: GitHub API is rate limited from the sandbox. Use `https://raw.githubusercontent.com/uncommon-schools/campaigns/main/<path>` for single files, or download the whole repo as a zip from `https://codeload.github.com/uncommon-schools/campaigns/zip/refs/heads/main` (about 70MB, works). You cannot push; Anthony commits.

## Key facts you must not get wrong

- Live site changed after the March audits: six domains run as one WordPress multisite on nginx at a DigitalOcean IP (no CDN); the Curriculum Hub is separate on WP Engine. Who migrated it is unresolved.
- Boston = roxburyprep.uncommonschools.org; Newark = northstar.uncommonschools.org; NYC = nyc.uncommonschools.org; Camden = camdenprep.uncommonschools.org; Rochester = rochesterprep.uncommonschools.org.
- Headline findings: llms.txt serves Camden content on all six domains; entry popups on all regionals fail keyboard access (OCR-cited org); enroll pages weigh 20 to 60MB; no cookie consent anywhere; Camden has no GA4; Enroll clicks fire no conversion event on 5 of 6 sites; 58 paid campaign landing pages are indexed.
- Kickoff decisions: aim WCAG AAA case by case; reference site kippnj.org; Success Academy referenced only for its single-flow application; do not look like any competitor; audience priority: prospective families and job candidates (primary), other educators (rising), donors (secondary), current families (not a target).
- Deck brand rules: Libre Franklin only; blue #1034B3, yellow #FBAE40, panel fill #F2F4FA, borders #C9CED8; sizes locked as above; no em dashes anywhere in deck copy.

## Working with Anthony

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

## How the last agent failed (August 28), so you do not repeat it

- Used jargon in the first message ("surgical edits at the run level"). Anthony had already banned this repeatedly.
- Wrote the Spinutech email five times and got it wrong five times: added content never discussed (GA4 export, meeting agenda, sign-off list); then stripped content he had explicitly asked for (the audit bullet list); then pasted the internal email nearly word for word when he wanted it reframed for a vendor. The root causes: reacting to the last complaint instead of holding all requirements at once; never checking a draft against his three stated goals; drafting before reading the audit.
- Built the first sitemap without reading the audit source, added columns he did not understand, used small type, and used the word "crawl."
- Was vague about the deck for three messages instead of saying plainly: "Neither your template nor the v1 deck is in this chat or in GitHub. Please attach both here."
- Let context fill up with the full audit source and multiple drafts, then had earlier tool results trimmed. If you need the deck source, read it once and take notes; do not re-read it.

## Appendix A: Anthony's internal email, August 28, 1:49 PM (to Anneliese Tint, Courtney Clayton, Mary Ann Villanueva)

Hi everyone,
Thanks for the update Anneliese.

I want to flag a concern with the four strategy documents (taxonomy, navigation, keep/kill/consolidate, sitemap) now sitting with me.

In a typical agency redesign, these are the agency's strategy deliverables. The client supplies the inputs and makes the decisions; the agency does the analysis and puts a draft in front of us to react to. Spinutech is now calling these their strategy documents, which fits that model. Right now, though, a good amount of that analysis is being passed to our side. Two of these in particular should not land on me:

Keep/kill/consolidate: this covers roughly 6,700 URLs, and that analysis is exactly what we hired an agency to do. Beyond the analysis, deciding what stays, goes, or merges requires input from the stakeholders who own that content, and likely leadership. I don't have full insight into the value of every part of the site, and I shouldn't be the one making those calls alone.

Taxonomy: this is a large body of work. In the example Spinutech sent, they built the taxonomy for their client. That's how it should work here too.

My recommendation is that Spinutech drafts these documents using what we give them, and we review, gather stakeholder input, and decide.

Separately, our audit has grown considerably beyond the March version. What the new audit adds:

- Real browser testing for the first time. Every key page on all seven sites (about 60 pages) actually loaded and measured, on both phone and desktop.
- Mobile testing for the first time, where 76% of our conversions happen. Every page now has phone speed scores and full-page screenshots.
- Every claim from the March audit fact-checked against the live site. All 75 findings are marked confirmed, changed, or no longer true, each with proof.
- Deeper accessibility testing. Not just scans but actual keyboard testing, which found the enrollment popups on every regional site can't be closed without a mouse and block the mobile menu. This matters given the OCR citation.
- Cookie and tracking inventory. Every cookie counted per site, confirmation there's no consent banner anywhere, and a gap found: Camden has no analytics running at all.
- Every Enroll, Careers, and Donate button clicked and traced to where it actually sends families, which settled old open questions (Boston's site exists, Avela is nowhere on the network, Lever is gone).
- Evidence behind every finding: the exact page, the exact element, and a screenshot, so Spinutech's developers can fix things without coming back to us with questions.

Let me know your thoughts.

## Appendix B: Anneliese's email, Wednesday August 26 ("Project Kick-Off Follow Up"), key points

- TLDR: on track for the first round of milestones, including a detailed project schedule from Spinutech by the first week of September.
- Spinutech determined that Taxonomy, Navigation, Keep Kill Consolidate, and Sitemap are part of their strategy planning, not discovery. They were not due at the end of last week. Anthony has more time; Spinutech scheduled time with Anneliese, Anthony, and a specialist on their team next week.
- Spinutech reviewed and gave feedback on Anneliese's interview questions for the Enrollment and Recruitment teams.

## Immediate next steps (in order)

1. Await Spinutech's hours estimate, broken out by document, and Mary Ann's decision on the change order.
2. Support Anthony's input to the internal decision thread (Anneliese leads, Mary Ann decides, Courtney recommends).
3. Then Tasks 4 to 7.

---

## Session notes — August 31, 2026

**Task 3 (deck) is DONE.** v3 delivered: 58 pages, sections 0–12; sections 13–17 cut (Spinutech's work). All March/comparison references removed from the deck and from deck_source.md. Section covers match the main cover (top lockup, 53pt title) and keep their bottom footer. Body/bullets 13pt, subheads 14pt, tables 11pt, titles 24pt. deck_source.md and build_deck.py in this folder are the v3 versions matching the delivered deck.

**Current task: the Spinutech email (Task 1).** Scope approved by Anthony; write ONE draft, no options:
- To Portia Griffin; cc Anneliese, Courtney, Mary Ann. Cordial, forward-looking.
- Point: Spinutech drafts the four strategy documents (taxonomy, navigation, keep/kill/consolidate, sitemap); Uncommon supplies inputs and decisions.
- Why: standard agency strategy deliverables, and Spinutech names them as such; keep/kill/consolidate spans ~6,700 URLs and needs their analysis plus decisions from content owners and leadership; taxonomy is a large body of work Spinutech built for the client in their own example.
- What Uncommon provides: a simple sitemap of current pages with internal stakeholder notes (Mary Ann's format), plus the v3 audit deck. Reference the deck in the email and leave a placeholder where Anthony drops the link. Include the seven-bullet "What the new audit adds" list from this file IN FULL, then close that section: with mobile now included, they have more than enough to hit the ground running.
- Leave out: GA4 export, meeting agenda, sign-off list, anything not asked for.

**Then:** Task 2, sitemap spreadsheet, rebuilt from scratch to a higher standard (~2,000 English pages, seven sites), for internal keep/kill/consolidate notes before handoff to Spinutech.

**Task order update:** Tasks 5 and 6 are review tasks (Spinutech drafts; Uncommon reviews against the audit and stakeholder notes). Tasks 4 and 7 stand.

---

## Session notes — September 1, 2026

**Task 1 (Spinutech email) is DONE.** Sent August 31 as a reply on Spinutech's "Project Kick-Off Follow Up" thread, cc Anneliese, Courtney, Mary Ann. Final version dropped the "how agencies work" explanation (read as passive aggressive), dropped "more than enough to hit the ground running," added a line that the mood board ships this week, and kept the seven audit bullets in shortened form. Four details were cut from those bullets for length: popups blocking the mobile menu, the OCR citation, "no consent banner anywhere," and the Boston/Avela/Lever examples.

**Task 2 (sitemap spreadsheet) is DONE.** Delivered as "Website Content Review - Keep Kill Consolidate.xlsx" and now live in Google Sheets. Built fresh from the August 26 sitemap XML in `01-audit/browser/raw/`, not from the rejected version.
- 2,027 English pages; translated pages excluded (they follow the English page). Counts: Main site 788, NYC 95, Boston 52, Newark 56, Camden 47, Rochester 44, Curriculum Hub 945.
- One tab per site plus a "Start here" tab with instructions and a Progress table that counts decisions live per site.
- Columns: Section, Page, Web address (clickable), Page type, Last updated, What the audit found, Decision, Notes. Decision is a dropdown (Keep / Kill / Consolidate) in column G.
- Rows grouped into plain-language sections (Enrollment, Careers, Donations, Paid campaign pages, etc.), 12pt type, frozen header, filter arrows.
- Anthony converted the Decision dropdown to Google Sheets chips (green/red/orange) himself. Excel cannot carry that format in.
- Audit notes appear only on rows the August audit flagged.

**Mary Ann's point about the exercise (from her call with Anthony, September 1):** keep/kill/consolidate is not only an inventory. The current site is the only anchor stakeholders have to base feedback on, so the exercise is how we learn what functionality matters to them. But the current site is the baseline for gathering feedback, NOT the thing to rebuild. She also said the site is 8 years old, the executive team dislikes it, and the goal is "best in class at the specific thing we want to serve up, not broad stroke." She told Anthony to keep pushing Spinutech.

**Spinutech's reply (Portia Griffin, September 1, 10:37 AM).** Their position, in their words: the SOW covers "Audit Review of Client-Provided Materials" and "Review Site Architecture," meaning Spinutech reviews a client-provided website performance analysis, sitemap, and taxonomy and gives recommendations. Drafting and creating the four strategy documents falls outside the estimate, so it needs a change order. They offered: an hours estimate in 1 to 2 days on confirmation; roughly 4+ weeks added to the timeline, driven mainly by keep/kill/consolidate across 6,700 URLs; and Uncommon's role unchanged (inputs, stakeholder feedback, final decisions).

**Anthony's read, and the real issue.** Spinutech's role keeps shrinking to reviewing what Uncommon hands them. Their own documents show it: Uncommon produced the 75-finding audit, Spinutech asked Uncommon for the mood board, journey maps, content pillars, regional performance data, and all copy, and the September 22 visual session is "based on the materials provided by Anthony." If Spinutech only reacts to Uncommon's inputs, the new site becomes Uncommon's thinking about its current site, built in WordPress by someone else. Uncommon said from the start it does not want a tweaked version of the existing site.

**Internal decision thread (Anneliese, September 1, 11:05 AM).** RAPID: Courtney recommends, Anneliese and Anthony give input, Anneliese performs, Mary Ann decides. Her open questions: can Anthony create these documents faster than 4 weeks, and is there anyone else who could.

**REJECTED WORK — REDO FROM SCRATCH. Do not reuse, adapt, or build on any of it.**

Two deliverables were attempted on September 1 and rejected by Anthony:

1. *Anthony's reply to the internal thread.* Multiple drafts, all rejected. Write this fresh. Ask Anthony what he wants it to say before drafting; do not assume the prior framing was correct.
2. *Questions for the September 1, 1:30 PM Spinutech call.* Multiple sets, all rejected. Anthony's stated objections: they were quiz-style rather than direct questions a client asks a vendor; several asked about things Portia had already answered in writing (notably the 4-week timeline); one set was built around a purpose for the call that Anthony never stated; the prior-client-work question was irrelevant. The call has now happened. Ask Anthony what came out of it before proposing any follow-up.

Any recommendation the previous agent gave on the change order, the scoping split, or the SOW should be treated as unverified opinion, not settled direction. Confirm current thinking with Anthony directly.

**Where things stand.** Awaiting Spinutech's hours estimate and Mary Ann's decision. The 1:30 PM call on September 1 has happened; its outcome is not recorded here. Get it from Anthony.

**How this session went wrong, so the next agent avoids it.** Repeated the August 28 failures, and Anthony ended the session because of it. Over-explained things Spinutech and the internal team already knew, then over-corrected by stripping information Anthony had asked for. Added details he never gave (that stakeholders own specific site areas; a named contractor as an alternative). Wrote questions for the Spinutech call that were quiz-style, asked about things Portia had already answered in writing, and invented a purpose for the call he never stated. Used unclear, machine-like phrasing he had to ask about twice. Fixes: hold every stated requirement at once instead of reacting to the last complaint; never add a fact not given; when shortening, cut words and not content; write questions that a client asks a vendor, not a teacher asks a student.
