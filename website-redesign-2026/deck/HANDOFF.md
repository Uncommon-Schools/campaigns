# HANDOFF: Website Redesign Support Work

Current as of Wednesday, September 9, 2026. You work with Anthony Emezu, Creative Director at Uncommon Schools.

**Who owns this file.** From September 3, a Cowork agent with GitHub read and write access takes over all Uncommon work: it maintains this handoff, commits to the repo, and briefs any code agents Anthony asks for. Update this file at the end of every session.

Read section 5, "Working with Anthony," before your first message.

---

## 1. Where things stand

Uncommon Schools is rebuilding uncommonschools.org and its five regional subdomains with the agency Spinutech. WordPress multisite, Figma designs, soft launch January to February 2027, live by end of March 2027. Kickoff was August 19.

**The live issue.** Spinutech says drafting the four strategy documents (taxonomy, navigation, keep/kill/consolidate, sitemap) sits outside their contracted scope and needs a change order: hours estimate in 1 to 2 days, roughly 4+ weeks added to the timeline. Anthony's deeper concern is that Spinutech is positioned to react to Uncommon's inputs rather than lead the redesign, which would produce a reskin of the current site rather than a new one. See section 3.

**Everything with Spinutech is paused.** Courtney Clayton is going to Jackson (Spinutech leadership) directly before any further team contact. Two meetings are on hold pending that conversation. Do not draft anything to Spinutech until Anthony says the pause is lifted.

**Anthony continues in the background:** the keep/kill/consolidate sheet (section 2), the files Spinutech requested, and conversations with potential copywriters.

The September 3 to 9 session worked only on the sheet. Nothing in it touched the Spinutech items, so section 3 and the pause are as of September 3. Do not assume the pause has lifted.

---

## 2. Current task: put the initial decisions into the sheet

**Where the sheet stands.** The rework is done and delivered. Anthony's current file is "Website Redesign KeepKillConsolidate V3.xlsx" (exported from Google Sheets on September 9). He will attach it at the start of the session; work in that file. No decisions are filled in yet.

What the sheet is now:

- One tab per site plus "Start here." Rows per tab: Main site 792, NYC 94, Boston 53, Newark 55, Camden 47, Rochester 45, Curriculum Hub 946. That is 2,022 pages plus 10 bold set rows. The five repeat Donor dashboard rows from the old sheet were deleted on Anthony's say-so.
- Columns: A Review group, B Section, C Page, D Web address, E What we know, F Views (12 months), G Decision (yellow, dropdown Keep, Kill, Consolidate), H Notes, I Pick needed (hidden; "yes", "set", or "in a set"; it drives the Progress table). Anthony dropped Page type, Last updated, and Visitors, and merged the audit note and the site facts into What we know.
- Review group sorts every tab from most to least important: 1 Core pages (in the site menu or on the enroll, donate, or careers path), 2 Legal and compliance, 3 Content pages (250 or more words, or at least one page linking in), 4 Content not readable from outside (staff bios; Curriculum Hub resources), 5 Thin pages nothing links to, 6 Paid campaign pages, 7 Dead or moved. Inside a group, pages keep section order; inside a section, most viewed first; Homepage first.
- Sets: one bold row with a yellow Decision cell covers a set of look-alike pages; the members underneath are grey, with no yellow cell. Sets: 141 social media posts, 106 live staff profiles, 76 auto-generated listing pages, and 57 school pages (all Main site); 10 to 13 paid campaign pages on each regional tab; 57 dead subject pages (Curriculum Hub). Anthony refused a set for the 870 Hub resources: each gets its own pick. Sets cut the picks from 2,022 to 1,536 (Main 412, NYC 84, Boston 41, Newark 43, Camden 34, Rochester 33, Hub 889).
- Views (12 months) comes from Google Analytics, September 3, 2025 to September 2, 2026, for the main site and the five regionals, pulled from the main uncommonschools.org property (it also receives the regional hostnames) by filtering on each site's hostname. Regional pages below what the pull captured say "Under N," where N is one more than the smallest count the pull captured for that site. Curriculum Hub rows say "Not pulled yet."
- Start here: what the sheet is, how to fill it in (four steps), what the words mean, what the review groups mean, an example row, and a Progress table (rows 33 to 41 in V3) that counts Pages, Picks, Decided, and Remaining per site from the Decision and Pick needed columns. Decided counts a row only when its yellow Decision cell has something in it. V3 does not carry the two paragraphs explaining What we know and Views that the delivered file had; treat V3 as his latest and do not add them back unless he asks.
- Styling is Anthony's: Arial 12; header fill 1034B3 with white bold text; Decision fill FFF3D6; Keep, Kill, and Consolidate color the cell C6EFCE, FFC7CE, FFE1B8; set rows bold on EDEFF5; members in grey 808080.

**What was rejected, and why.** Late in the session Anthony asked for an initial round of Keep, Kill, and Consolidate decisions and approved the rules for making them (below). The agent delivered them as a separate review copy with two extra columns, Suggested call and Why, and left the yellow Decision column empty. The Progress table then showed Decided 0 everywhere. Anthony: "That is very confusing. The point of making those changes was to make initial decisions and pass it off to stakeholders to either change or decide (if undecided)." He reverted to V3 and asked for the task to be redone in a new session. The decisions themselves were not rejected.

**The task now.** Put the initial decisions into the yellow Decision column of Anthony's latest file, so stakeholders change a decision or fill in the blanks. Every decision, with its reason, is in `page-decision-data/initial-decisions.csv` (the file and the rules are described below). Rows marked "Undecided" (the 874 Curriculum Hub pages behind the sign-in, 870 of them resources, and the staff-bio set) stay blank. Change only what the task needs and keep his styling, dropdowns, hidden column, and formulas as they are. Before touching the file, list the requirements back to him and get his yes (rule 14).

Settle these with him first, in one question card. Recommendations follow each, with the reason.

1. Whether the Reason text goes into the Notes column beside each decision. Recommend yes, so a stakeholder can see why without asking; the Notes column is theirs to overwrite.
2. Set members: fill the set row only, or every member too. Recommend the set row only, because the Start here instructions say one pick on the set row covers the set, and a filled member reads as an exception.
3. With decisions pre-filled, the Progress table will count them as Decided. Whether that is fine or the table needs a change. Recommend leaving the table and adding one line to Start here saying the Decision column comes pre-filled with initial decisions that stakeholders confirm or change; that is his decision.
4. The guide deck (below) and the Start here text describe an empty Decision column. Whether to update them once the decisions are in.
5. How he wants the file back: an .xlsx to re-import into Google Sheets is the working assumption.

**The decisions file: `page-decision-data/initial-decisions.csv`.** 2,032 rows: the 2,022 pages plus the 10 set rows, in the same order as the sheet. Columns: Tab; Row in V3 (the row number in that tab of the V3 file); Review group; Section; Page; Web address (same as column D; set rows have none); Pick needed (copied from hidden column I: "yes" = needs its own pick, "set" = a bold set row, "in a set" = a grey member); Initial decision (Keep, Kill, Consolidate, or Undecided); Reason (in plain words, written for a stakeholder). Match rows on Tab and Row in V3 and confirm the Web address agrees; if Anthony has re-sorted or edited rows since V3, match on Web address. Member rows carry a decision too, so a reader can see what each page would get, but the set row is what counts. Counts among the 1,536 rows that need a pick: Keep 399, Kill 249, Consolidate 13, Undecided 875.

**The rules behind the decisions, in the order they were applied.** The first rule that fits a page decides it. Anthony approved the rules and the 50-views cutoff.

1. Dead or moved pages: Kill. If the address already redirects somewhere, keep the redirect and drop the page.
2. Sets. Social media posts captured as pages: Kill. Auto-generated listing pages: Kill (the new site builds its own lists). Main-site school pages: Consolidate into the real page on the regional site. Paid campaign pages: Keep (per the audit: keep for the ad buy, retire old school years after the cycle). Live staff profiles: Undecided (the Our People owner decides; 33 of the 106 are not linked from the Our People page, so confirm they are still on staff).
3. Curriculum Hub. The 874 pages behind the sign-in (870 curriculum resources and 4 listing pages): Undecided (the Hub owner decides). Four WordPress leftovers (Sample page, Hello world, the Sitecare author page, the Uncategorized category page): Kill. The Hub's own 10 pages (the 7 menu pages, Privacy policy, My account, Registration): Keep.
4. Live copies of key pages: Consolidate into the original. Homepage 2 into the Homepage; Northstar gma into North star on gma; Uncommon sense faq into the blog's own FAQ page.
5. Decided by hand, marked "Decided by hand" in the Reason column. Main site: Results 2 2 (Consolidate into Results); Alumni impact contact us (Consolidate into Alumni); Nyc school tours (Consolidate into the NYC site's School tours); Subscribe to uncommon sense (Keep); Sms and Mobile terms and conditions (Keep, they pair); Vote, World autism day, 2425survey guidelines, Standard page (Kill). NYC: Virtual tour crown heights (Keep). Boston: Family council (Consolidate into Family resources); Dr j keith motley (Consolidate into Board of trustees). All five regional sites: Family newsletters (Consolidate into Family resources); Technology and internet use (Keep; Miriam vets any change).
6. Legal and compliance pages (review group 2): Keep. Miriam vets any change.
7. Core pages (review group 1): Keep.
8. Impact blog posts: Keep. The blog moves as one unit until traffic data says otherwise.
9. Any page with 50 or more views in the 12 months: Keep.
10. News posts from 2024 or later: Keep. Older News posts: Kill.
11. Thin pages nothing links to (review group 5): Kill.
12. Anything left would have been marked "Needs a look." Nothing was left.

**Also delivered in the session.** A companion deck, "Website Content Review Sheet Guide.pptx," eight slides built inside the Uncommon template with pictures of the sheet: what it is, how to fill it in, the eight columns, the seven review groups, the sets, what the sets trim (2,022 to 1,536 picks; 667 if the Hub's 870 resources were also one set, which Anthony ruled out), and tracking progress. Anthony has the file; it is not in the repo. Two short bullet messages to his boss announcing the sheet and the guide were written and delivered in chat.

**Still to do on views.** Curriculum Hub views were never pulled: the computer the session was linked to went offline before that pull. How the other six were pulled: Anthony signs in to Google Analytics in Claude's built-in browser pane on the computer the session is linked to; open the main property's Reports, Engagement, "Pages and screens" report; set the dates; add Hostname as a secondary dimension; add a report filter where Hostname exactly matches the site's hostname (for the Hub, hscurriculum.uncommonschools.org); show 250 rows per page and copy the table page by page. Go back to page 1 of the table before applying a new filter, or it shows "No data." Then add the views into column F of the Curriculum Hub tab by matching the page path. Whether the Hub's traffic lands in the main property, or in a property of its own, was not confirmed; check in GA before pulling.

**Constraints from the September 1 internal call, still in force:**
- The blog may be driving organic traffic. Treat it as a consolidate candidate, not an automatic cut, until traffic data confirms. (The initial decisions keep every Impact blog post for this reason.)
- Legal and compliance pages must be vetted by Miriam before removal. Whether the standard is WCAG AA or AAA is an open question with her.
- Once the initial decisions exist, the plan is to send them to Spinutech as Uncommon's initial draft for their review and recommendations. That is paused with everything else.

**Background on the rework, for reference.** The old sheet listed 2,027 pages in a flat list; Mary Ann Villanueva and Courtney Clayton said it could not go to stakeholders as-is. Anthony's rule for the rework: the agent ranks and orders, people decide. The page-level data behind the ranking is `page-decision-data/page-decision-data.csv` (one row per page, keyed by Web address; column guide and caveats in its `README.md`). Its "What the data suggests" column was left out of the sheet on Anthony's say-so. Audience priority from kickoff: prospective families and job candidates first, other educators rising, donors secondary, current families not a target.

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
- `page-decision-data/`: the September 2 page-level data file and its README, and `initial-decisions.csv` (the initial Keep, Kill, or Consolidate decisions; see section 2).
- `references/screenshots/`: 112 screenshots of 17 reference sites, captured September 4 by a code agent for the website reference deck (a separate workstream Anthony runs in other sessions; its README lists the sites and caveats). This file does not track that deck.

People: Anthony Emezu, Creative Director (your contact). Anneliese Tint runs the project. Mary Ann Villanueva, Chief External Officer, decides. Courtney Clayton, Senior Director of Brand and Marketing. Spinutech: Portia Griffin (lead), Brittany (her senior), Jackson (leadership), Meghan (UX strategist), Eric (designer).

Spinutech's schedule as of their September 1 email, subject to the pause: technical discovery September 3, 9, 10; strategy recommendations September 15; visual identity session September 22; content planning workshop October 1; wireframe review October 29. Copywriting is not in their scope; Uncommon provides final copy, expected January 2027.

### Key facts you must not get wrong

- Live site changed after the March audits: six domains run as one WordPress multisite on nginx at a DigitalOcean IP (no CDN); the Curriculum Hub is separate on WP Engine. Who migrated it is unresolved.
- Boston = roxburyprep.uncommonschools.org; Newark = northstar.uncommonschools.org; NYC = nyc.uncommonschools.org; Camden = camdenprep.uncommonschools.org; Rochester = rochesterprep.uncommonschools.org.
- Headline findings: llms.txt serves Camden content on all six domains; entry popups on all regionals fail keyboard access (OCR-cited org); enroll pages weigh 20 to 60MB; no cookie consent anywhere; Camden has no GA4; Enroll clicks fire no conversion event on 5 of 6 sites; 58 paid campaign landing pages are indexed.
- Kickoff decisions: aim WCAG AAA case by case; reference site kippnj.org; Success Academy referenced only for its single-flow application; do not look like any competitor; audience priority: prospective families and job candidates (primary), other educators (rising), donors (secondary), current families (not a target).
- Deck brand rules: Libre Franklin only; blue #1034B3, yellow #FBAE40, panel fill #F2F4FA, borders #C9CED8; sizes locked as above; no em dashes anywhere in deck copy.

**Completed and delivered:** the audit deck v3 (58 pages, August 31); the division-of-labor email to Spinutech (sent August 31); the page-level data file (September 2, code agent); the reworked keep/kill/consolidate sheet with review groups, sets, and Google Analytics views for six of the seven sites (delivered September 3, last revised September 8; live in Sheets as V3); the sheet guide deck (September 3); two announcement messages for Anthony's boss (in chat).

**Queued after the current task:** Curriculum Hub views (section 2); aspirational site examples (non-education sites with excellent design, appended to the audit deck); review of Spinutech's sitemap and taxonomy when they produce them; the keep/kill/consolidate final list once stakeholder input and traffic data are in.

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
17. When he does not follow an explanation, explain it again in different everyday words. Do not drop the idea because it was explained badly; he called that out in his words: "You failing to explain something clearly is not grounds to drop it."
18. When a session's memory has been squeezed (the app summarizes the earlier conversation to make room), tell him and hand off to a new session through this file. He does not trust work done after that point.
19. Several questions at once go in the tappable question card, one question per card entry, in plain words. A single question goes in one line of chat.

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

The September 3 to 9 session delivered the sheet, the deck, and the boss messages, then went wrong twice. First, the Google Analytics pull: the session was linked to one of Anthony's computers while he was working on another, so the browser pane the agent opened was not the one he was looking at, and the agent took too long to work that out and explain it. Check which computer the session is linked to before asking him to sign in anywhere. Second, the initial decisions: the agent put them in a separate review copy in their own columns, so nothing showed as decided; Anthony wanted them in the sheet's Decision column for stakeholders to change. When he asks for initial decisions, put them where decisions go. The agent also named things in its own jargon ("first-pass calls"); use his words.
