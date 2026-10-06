# HANDOFF: Website Redesign Support Work

Current as of Tuesday, October 6, 2026. You work with Anthony Emezu, Creative Director at Uncommon Schools.

**Who owns this file.** From September 3, a Cowork agent takes over all Uncommon work: it maintains this handoff, prepares commits, and briefs any code agents Anthony asks for. Update this file at the end of every session. Pushing to GitHub from the Cowork session has failed with a permissions error; the agent writes the files and Anthony commits them.

Read section 5, "Working with Anthony," before your first message.

---

## 1. Where things stand

Uncommon Schools is rebuilding uncommonschools.org and its five regional subdomains with the agency Spinutech. WordPress multisite, Figma designs, soft launch January to February 2027, live by end of March 2027. Kickoff was August 19.

**Work with Spinutech has resumed.** The September 3 pause (Courtney Clayton going to Jackson at Spinutech before any further team contact) is over in practice: Anthony met Spinutech on September 11 (design process call) and October 5 (Content Planning Workshop, Part 2), and Courtney and Mary Ann Villanueva were on the October 5 call. Whether Courtney's conversation with Jackson happened, and what came of it, was never stated in these sessions.

**Where Spinutech's process is.** Sitemap and taxonomy proposed (Google Sheet, section 4). Content mapping board done: 10 page templates plus page-level maps for the main site and the regional sites (image in `meetings/`). Next on their side: homepage wiring, then navigation. Their September 1 schedule had wireframe review on October 29; nothing since has confirmed or moved it.

**Change orders.** Portia said on September 11 that the site architecture change order was still awaiting approval and that she would combine it with a new change order for multiple design directions. Neither has been seen in these sessions since.

**A copywriter has joined.** Lindsey (he) will write the website copy. Copy is Uncommon's work, not Spinutech's. Spinutech called it the biggest lift on the project. The current task is his onboarding deck (section 2).

**Delivered September 9.** Anthony's keep/kill/consolidate sheet with the 661 initial decisions in the yellow Decision column and a reason on every row. On October 5 Spinutech was working from a keep/kill list with marks in it (they cited the Dean's List as Keep and the staff bio detail pages as Kill), so a version with decisions reached them. Which version, and whether Anthony loaded the September 9 file into Google Sheets, was not stated.

---

## 2. Current task: onboarding deck for Lindsey, the copywriter

Anthony confirmed this list on October 6. Build the deck against it and nothing more.

- A PowerPoint deck built inside Anthony's presentation template. He said he would attach the template; as of October 6 it had not arrived in the chat. Ask for it before building. (The Uncommon template rules are in "Uncommon at a Glance": Libre Franklin only; blue #1034B3, yellow #FBAE40, panel fill #F2F4FA; titles 24pt, subheads 14pt, body 13pt, tables 11pt; never shrink text, add a page; no em dashes.)
- Written for Lindsey. Enough to understand Uncommon, the current site, the new site, and the size of his job. Not everything; he will ask questions later. Anthony's words: "introduce the copywriter to Uncommon and get them up to speed enough for them to gain an understanding of the size and scope of their job without overwhelming them."
- Sections, in Anthony's order: the website redesign project (Spinutech, what is being built, how it is being approached); about Uncommon Schools; the current website, saying that Uncommon has a main site and regional sites, with links to the main site and each regional site; what the content audit found, good and bad, pulled from the audit files; the site taxonomy spreadsheet, linked, with what each tab shows ("Overview" is the existing pages, "v2 main site" is the proposed main-site structure, "regional template" is the proposed regional structure) and a note that it is not final but close enough to map a content writing path; the shape of the copy job.
- Facts about Uncommon (mission, history, size) come from uncommonschools.org and the audit files. Leave a bracket for anything that cannot be sourced. Do not invent.
- After the deck: a short, professional email to Lindsey thanking him for his patience and introducing the document, which gives him insight on the current site and what is being built.

**Sources for the deck, all in this repo unless noted.**

- Live sites: main uncommonschools.org; NYC nyc.uncommonschools.org; Boston roxburyprep.uncommonschools.org; Newark northstar.uncommonschools.org; Camden camdenprep.uncommonschools.org; Rochester rochesterprep.uncommonschools.org. The Curriculum Hub (hscurriculum.uncommonschools.org) is a separate WP Engine site behind a sign-in; mention only if useful.
- Taxonomy spreadsheet (Spinutech's, not final): https://docs.google.com/spreadsheets/d/14-UM09axweiHqllJXnfut8FNM3ItjfiFshuKB6Cva3c/edit?gid=0#gid=0
- Audit: `01-audit/writer/` (the March content and copy audit), `01-audit/browser/00-SUMMARY.md` and `00-CLAIMS-VERIFICATION.md` (August 26 live-site audit; check it before citing anything from March), `deck/deck_source.md` (every audit fact, sections 0 to 17).
- Page counts and copy process: the October 5 transcript, `meetings/transcripts/2026-10-05-content-planning-workshop-part-2.md`, and section 3 below.
- Current site in numbers (from the sheet rework): 2,022 English pages across the seven sites; main site 792, NYC 94, Boston 53, Newark 55, Camden 47, Rochester 45, Curriculum Hub 946.

**Unknowns to resolve with Anthony before or while building:** the template file; whether to show the September 9 decision counts (Keep 399, Kill 249, Consolidate 13) or only the audit findings; whether Lindsey is in-house or freelance (never stated); whether the five copywriting questions in the October 5 notes were asked and answered.

---

## 3. What Spinutech has told us (September 11 and October 5)

### Their design process, in order

1. Sitemap and taxonomy. A visual sitemap and a spreadsheet of every URL by section. Approval locks the structure; pages can still be added before launch.
2. Template planning. 10 templates in scope, chosen by Spinutech for the pages with the most impact on the redesign goals. Their UX and SEO teams map the content blocks (they say "modules") for each on a card-sorting board. The 10: Main Domain Home, Regional Home, Find a School, Quick Apply, Grade Level Page (Pre-K, Elementary, Middle, High), School Profile, About Uncommon, Careers, Open Positions, Donate/Support. A template is designed once and duplicated with new copy (grade level is four pages on the main site plus regional versions; regional home is five). Resource Library was in the 10 originally and was swapped out for School Profile.
3. Style card. Replaces the visual identity session. One visual direction from the brand guidelines and Anthony's reference deck; Uncommon signs off. More than one direction is an addition to the project (change order). Anthony asked for a week to review it; Portia put five days in the schedule.
4. Wireframes. The content blocks on each template and their order, unstyled. One approach, not options. Feedback is about missing or misplaced blocks.
5. Design. Every wireframe designed in Figma for desktop. The homepage is shown in desktop and mobile; nine pages can be designed for mobile. The blog uses out-of-the-box WordPress functionality with the design styles applied; resource category pages are standard modules stacked.

Feedback at every stage goes in as Figma comments: Uncommon reviews as a group and one person enters the combined feedback. The schedule gives Uncommon one day for feedback and Spinutech one day for revisions, set to hold the March date; Portia will extend windows for phases Uncommon names, and the launch date moves with them.

### The gaps found September 11

- Spinutech scoped the project expecting Uncommon to hand them a finished design concept and read the reference deck as preferences, not a direction. So: one design concept, not options.
- Icons come from a stock library, recolored. Custom icons are outside scope: Uncommon supplies them, or library icons launch and custom ones replace them later.
- Anthony told them: the site is new work, not a rebuild from the existing Figma component library; primary and secondary colors stay as in the brand guide; fonts are open (Knockout primary and Libre Franklin secondary today, but not required).
- Anthony's deliverable from that call: "Spinutech Design Process.docx" (two pages: the short version, a gap table, Spinutech's position on each gap, decisions, what was settled, their process) and a message to his boss and team, both delivered October 11 session, not in the repo.

### October 5: Content Planning Workshop, Part 2

Present: Anthony, Anneliese Tint, Courtney Clayton, Mary Ann Villanueva, Jacob R. (Uncommon); Meghan McAtasney, Portia Griffin, Julie (SEO) (Spinutech). The transcript ends mid-call during the Our People discussion; the FAQ library and CMS items (custom post types, imported content) were still to come.

Facts and decisions from the call:

- **Page counts (Meghan).** Main site about 110 URLs: 70 content pages and 40 alumni profiles. Regional sites about 70 pages each, five regions, about 350. Under 500 pages in the new structure, blog excluded (the blog is imported). Pages marked Keep on the keep/kill list that are not in the new structure are not in that count.
- **Content population stays with Spinutech** because the total is under the 500-page threshold. Spinutech will produce a content inventory sheet after the final taxonomy, with assignees and the template each page uses. Uncommon could take the easy pieces (alumni profiles, blog cleanup after import) or one region, if it wants CMS practice.
- **Copywriting is Uncommon's and "a lot."** Spinutech will: say which template each page writes to; provide copy doc templates based on the wireframes and the inventory sheet; give SEO and AEO guidance; write some FAQs in scope and hand over an import sheet for the rest; take homepage and regional home copy as Figma comments on the designs. Copy docs are the standard format for interior pages. Some pages can reuse existing copy (leadership, alumni profiles) and be updated after launch. What Uncommon can start now: gathering material (employee stories, staff testimonials, student voices, day-in-the-life video, the benefits two-pagers Anneliese has by region).
- **Apply vs Enroll.** Anthony raised that "Apply Now" on the homepage could mean enrollment or a job. Meghan already had "should Apply Now be Enroll Now" in the content development document; Hadley decides the word. The current NYC page says Enroll at the top and Apply below for the same action. Meghan added a CTA strategy card. Portia thinks job seekers would not be confused; the room wanted consistency.
- **Our Results.** College Grads and Dean's List combine into one page, "Alumni College Success," under Our Results, with redirects. Joemi Espinal's team owns the Dean's List data and does not need it on the site. Pat Rometty has not been consulted on the results pages. Mary Ann wants an ownable visual system for results data (infographics, not text), with the 30th anniversary site as a reference, and said it is Anthony's domain. The development team is working on an impact report (video or PDF); the page should carry a key-takeaways section. Network stats appear on both About and Results.
- **8th to 9th grade transition** is a key organizational goal: college and career readiness content must be reachable in the middle school journey, on grade level pages and school profiles.
- **Student Experience.** Show, don't tell: video, photos, day in the life (Hadley agrees). Regional and main-site versions must be additive, not duplicative (Mary Ann); a strategy for that is needed.
- **For Educators.** The audience is external educators who may buy services (principal residency, school launch partnerships, professional development and curriculum sharing). The CTA is subscribe or express interest, not careers. "Educator Value Props" on the board means an overview of why to trust Uncommon's resources, not an employee page. Uncommon has a strategy session pending with the team that runs this area. Reachable from a Resources menu (for families, for educators, for alumni), not a homepage module; Meghan added a Resources page card. Navigation strategy comes after homepage wiring.
- **Careers.** Pages: Our Roles, Working at Uncommon, Benefits, Professional Development (confirmed as a key differentiator; the open question is how to frame it). Benefits vs Total Rewards: URL and meta say "benefits"; the H1 or H2 can say Total Rewards; an FAQ can bridge the two. Julie will send a paragraph with search-volume data. For Educators resources and Careers FAQs were removed from some careers pages on the board.
- **Our People.** Individual bio detail pages were marked Kill on the keep/kill list and get few views (2 to 27). "Bios can't be read from outside" is because they load by script. Mary Ann wants bios shown in place (hover flip or modal) rather than separate pages, with one protocol for network leadership, regional leadership, boards, and school leaders (principal and DOO). Spinutech owes a recommendation on how nonprofits present leadership versus board. Regional leaders may get short bios they do not have today.
- **Regional URLs.** Anneliese and Portia are aligned on copying the NYC URL structure and swapping the regional terms. Spinutech flagged the risk to existing pages and that each region has its own keep/kill. Spinutech's written answers to Uncommon's domain and URL questions are in the revisions log; Anneliese had not seen them and will read them. Courtney wants the SEO rationale and Mary Ann's comfort before agreeing.
- **Still open on their side:** geolocation strategy for Find a School and Quick Apply, the CTA wording, bio display, the FAQ library, CMS custom post types.

### The board (`meetings/2026-10-05-spinutech-content-mapping-board.jpg`)

Blue cards are pages or templates. Yellow cards under them are the content blocks on that page, top to bottom; several cards may become one module. Teal cards are SEO requirements (H1 wording, breadcrumbs, schema, FAQs). Pink cards are open questions. Orange cards look like suggested or optional sections; Anthony planned to confirm that with Meghan. The "Main Site, Page-Level Content Mapping" group is the breakout pages under the home page sections (Our Results under Results/Proof Points, Student Experience under the Student Experience Feature, the careers pages under the Careers Feature, and so on), confirmed by Meghan. The "Regional Sites, Page-Level Content Mapping" group is the regional page types, repeated per region.

### The five copywriting questions Anthony planned to ask on October 5

1. When does the content inventory sheet arrive?
2. What are the copy limits per module, and do they come with the wireframes on October 29 or later?
3. Working back from population and launch, when is copy due, by page group, and which group goes first?
4. For the five regional sites, is copy written once and varied, or written five times?
5. Can the copywriter get view access to the board and the taxonomy sheet now?

Whether he asked them, and the answers, are unknown.

### Anthony's position, unchanged since September 1

Spinutech was hired to lead the redesign. Their scope language positions them as reviewing client-provided materials. Mary Ann's goal: "best in class with the specific thing that we want to serve up, not broad stroke." The September 11 call confirmed the pattern: the plan as scoped delivers one direction, library icons, nine mobile pages, and one-day review windows unless Uncommon pays to change it. Anthony's words on the templated approach: "build a bear."

---

## 4. Repo and project reference

`website-redesign-2026/` contains:
- `01-audit/dev|writer|creative/`: March 2026 audits, 30 files, superseded in parts.
- `01-audit/browser/`: August 26 live-site audit. `00-SUMMARY.md`, `00-CLAIMS-VERIFICATION.md`, per-domain reports, `lighthouse/`, `screenshots/`, `raw/`.
- `deck/deck_source.md`: source of truth for the audit deck, 17 sections. Read in full; Anthony expects you to know it.
- `deck/build_deck.py`: deck generator. Needs `template.pptx` and the pptx skill scripts.
- `deck/HANDOFF.md`: this file.
- `page-decision-data/`: the September 2 page-level data file and its README, and `initial-decisions.csv` (the 2,032 initial Keep, Kill, Consolidate decisions with reasons, in V3 sheet order).
- `references/screenshots/`: 112 screenshots of 17 reference sites for the website reference deck (a separate workstream; this file does not track it).
- `meetings/transcripts/2026-09-11-spinutech-design-process-call.md`: full transcript.
- `meetings/transcripts/2026-10-05-content-planning-workshop-part-2.md`: transcript, ends mid-call.
- `meetings/2026-10-05-spinutech-content-mapping-board.jpg`: Spinutech's Mural board (10 templates, main-site and regional page maps), reduced to 3,448 px wide.

Spinutech's taxonomy spreadsheet (Google Sheets, not in the repo): https://docs.google.com/spreadsheets/d/14-UM09axweiHqllJXnfut8FNM3ItjfiFshuKB6Cva3c/edit?gid=0#gid=0. Tabs: "Overview" (existing pages), "v2 main site" (proposed main-site structure), "regional template" (proposed regional structure). Not final.

People: Anthony Emezu, Creative Director (your contact). Anneliese Tint runs the project. Mary Ann Villanueva, Chief External Officer, decides. Courtney Clayton, Senior Director of Brand and Marketing. Lindsey, copywriter (new). Named on the October 5 call: Hadley (enrollment; decides Apply vs Enroll), Joemi Espinal and Ken (impact and alumni data), Pat Rometty (college access and persistence), Cassie, Wes (Spinutech, imports), Jacob R. Spinutech: Portia Griffin (lead), Brittany (her senior), Jackson (leadership), Meghan McAtasney (UX strategist), Mark Palmer (lead designer), Julie (SEO), Eric (designer).

### Key facts you must not get wrong

- Live site: six domains run as one WordPress multisite on nginx at a DigitalOcean IP (no CDN); the Curriculum Hub is separate on WP Engine.
- Boston = roxburyprep.uncommonschools.org; Newark = northstar.uncommonschools.org; NYC = nyc.uncommonschools.org; Camden = camdenprep.uncommonschools.org; Rochester = rochesterprep.uncommonschools.org.
- Headline audit findings: llms.txt serves Camden content on all six domains; entry popups on all regionals fail keyboard access; enroll pages weigh 20 to 60MB; no cookie consent anywhere; Camden has no GA4; Enroll clicks fire no conversion event on 5 of 6 sites; 58 paid campaign landing pages are indexed; 123 near-duplicate pages; 258 thin pages nothing links to; 57 dead pages.
- Kickoff decisions: aim WCAG AAA case by case; reference site kippnj.org; Success Academy referenced only for its single-flow application; do not look like any competitor; audience priority: prospective families and job candidates (primary), other educators (rising), donors (secondary), current families (not a target).
- Deck brand rules: Libre Franklin only; blue #1034B3, yellow #FBAE40, panel fill #F2F4FA, borders #C9CED8; sizes locked; no em dashes anywhere.

**Completed and delivered:** audit deck v3 (August 31); division-of-labor email to Spinutech (August 31); page-level data file (September 2); reworked keep/kill/consolidate sheet (September 3 to 8); sheet guide deck (September 3); the sheet with initial decisions filled in (September 9); the September 11 call breakdown document and team message (September 11).

**Queued:** the copywriter onboarding deck (section 2, current); Curriculum Hub views for the sheet (never pulled); aspirational site examples for the audit deck; review of Spinutech's sitemap and taxonomy when asked; the keep/kill final list once stakeholder input is in.

---

## 5. Working with Anthony

Hard rules. Violating them costs trust immediately.

1. ONE ACTION ITEM AT A TIME. One next step, wait, then the next.
2. Brevity. He will not read long messages. Lead with the answer.
3. Never hand him questions when you were given a task. Resolve what you can; record the rest as open items.
4. Do the verification yourself. Do not ask him to fact-check volume.
5. No trimming content without an itemized justification. Nothing gets shortened silently. If he gives you a list to include, include the whole list.
6. Documents to him: real files (xlsx, pptx, docx, PDF), never raw markdown. Messages meant for pasting go in the chat.
7. Deck copy: no em dashes, ever. Font sizes never change.
8. When he asks for a proposal, give one recommendation with reasoning, not options. When he has not asked, give no recommendation. On October 6 he said no to a recommendation in a stakeholder document and asked why he would take one.
9. Build decks inside the real brand template, never a recreation.
10. He spins up code agents on request; write them a self-contained brief and have them write results into this repo.
11. PLAIN LANGUAGE. No jargon. Anthony is a creative director, not a developer. Say what you will do in everyday words. Every new agent must read this before its first message.
12. Do not add content he did not ask for. If you think something is missing, say so in one line and ask; do not put it in the draft.
13. When he says something is wrong, fix that thing and keep everything else.
14. Before any draft with more than one requirement, list the requirements back to him in a few lines and get a yes. Then write once against that list. List back what you will do, not what he has already settled: when the task is defined by a source file (the decisions csv on September 9), carry out what the file says; a question card that reopens the premise reads as repeating the previous agent's mistake.
15. He will tell you bluntly when work is bad. Do not apologize at length. Say what went wrong in one sentence and fix it.
16. NEVER MAKE ANYTHING UP. Do not invent facts, names, timings, claims, or details he did not state or that are not confirmed in source material. Leave a bracket for him to fill in.
17. When he does not follow an explanation, explain it again in different everyday words. Do not drop the idea.
18. When a session's memory has been squeezed, or he asks whether context is high, answer honestly and offer the handoff. He asked three times in the September to October session; "high but not squeezed" with an offer to hand off was the right answer, and he took it.
19. Several questions at once go in the tappable question card; a single question goes in one line of chat.
20. A document about a call or a decision contains only what that source established. Do not pull names, roles, or decisions from this file or project notes into it (naming Mary Ann as the decider, listing next week's sitemap review, were both rejected as "blurring the lines with other website tasks"). No participants list, no "who said what."
21. A breakdown is not a transcript in bullets. State what the call means: the gap between what Uncommon expected and what the vendor planned, the vendor's position, the decisions. He rejected two drafts as "retyping the transcript" before the third landed.
22. When he says a layout is poorly thought through, show the reasoning for the structure in a few lines before building again. Do not ship another build on instinct.
23. Lists of questions: filter every question against what was already answered on the call, keep only what unblocks the work, and say why each matters. A long list was rejected as "asking for the sake of asking."
24. He is often on a live call when he pastes a transcript. Answer fast, short, and only with what the new part raises.

### His writing style, captured verbatim

He wrote this himself after rejecting several attempts. Match the pattern: link first, three bullets, concrete mechanics, no framing, no rationale, no sign-off.

> Hi @all,
> The Keep, Kill, or Consolidate review sheet can be found [here](link).
>
> * There's a tab for the main site, NYC, Boston, Newark, Camden, Rochester, and Curriculum Hub. Every page is listed with its link, page type, and any notes from the August audit.
> * To mark a decision, use the dropdown in column G on each tab. If you pick Consolidate, note where it folds into in the Notes column.
> * The Start here tab has instructions and a Progress table that counts decisions as they're made.

### How past agents have failed

August 28 and September 1: over-explaining, then over-correcting by stripping content he asked to keep; inventing details; jargon; questions for a paid vendor that read like a quiz; answering from memory instead of checking the source.

September 3 to 9: the Google Analytics pull stalled because the session was linked to a computer he was not looking at; the initial decisions were delivered in a separate review copy with their own columns instead of the sheet's Decision column; the agent named things in its own jargon ("first-pass calls").

September 9 to October 6 (this session): the sheet task went right once the agent stopped asking and did what the csv said. The September 11 call breakdown went wrong three times: a transcript-order narration with a participants list; a version with next steps from other workstreams and a decider named from project notes; a version with a "cost to close" column that stated costs the call never gave. What landed: a two-column gap table (what we expected, what Spinutech planned), Spinutech's stated position on each gap, decisions with no steer, and their process at the back. The copywriting questions list went wrong once (25 questions, many already answered) and landed at five, each with its reason.

---

## Session notes

### September 9, 2026

Delivered: Anthony's "Website Redesign KeepKillConsolidate v2.xlsx" (his file name; it matches the V3 layout row for row) with the 661 initial decisions in column G and the reason from `initial-decisions.csv` in column H on all 2,032 rows, set rows only for sets, Undecided rows left blank with their reason in Notes, Progress table stored values corrected (Decided 661, Remaining 875). Styling, dropdowns, hidden column I, and formulas untouched. Rejected: a question card asking whether reasons go in Notes and whether set members get filled, because the csv and the task already settled it. Open: whether to add a line to Start here saying decisions are pre-filled; he did not answer.

### September 11, 2026

Spinutech design process call (transcript in `meetings/transcripts/`). Delivered: "Spinutech Design Process.docx" (two pages) and a message to his boss and team, both in chat. Rejected first: drafts that narrated the call, listed participants, carried next steps from other workstreams, named Mary Ann as decider from project notes, or offered a recommendation. Facts are in section 3.

### October 5, 2026

Anthony shared Spinutech's content mapping board during the Content Planning Workshop, Part 2, then the transcript (ends mid-call). The agent's board read: the point that landed was that "Apply Now" means enrollment on some pages and a job on others; the agent misread the main-site page-level group as unmapped pages when it is the breakout pages under the home sections. Delivered in chat: how the copywriter can use the board, the call read, and five copywriting questions (section 3). Rejected: a 25-question list, mostly already answered on the call.

### October 6, 2026

Anthony asked for the copywriter onboarding deck (section 2) and an email to Lindsey. The agent flagged that context was high; Anthony chose a handoff to a fresh session. This file, the two transcripts, and the board image were written for him to commit. The deck has not been started. The template has not been attached.
