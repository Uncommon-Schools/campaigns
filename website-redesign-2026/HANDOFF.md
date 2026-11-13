# HANDOFF: Website Redesign Support Work

## Opening message for the next agent

Send this word for word as your first message, then wait for Anthony's go. Nothing else goes out before it, and no action is taken before his go.

> Hi Anthony. I have read the handoff. The Copywriting Master Map is built and the schedule is out of the Content Population document. First on the list is the chip colours in the map's Status column: you set them, I walk you through one screen at a time, starting from a picture of what opens when you click the arrow on any Status cell. After that, the auto-update, which needs your choice between a chat session and a Routine on claude.ai. Say go.

Last updated: 2026-11-13, evening, by the code agent on the Mac mini, at the end of a session Anthony ended because the work had stopped being effective (the chip colour instructions were guessed without seeing the screen, and the auto-update was promised and then could not be built from here). Read `INSTRUCTIONS.md` section 3 in full first, then the decisions this file names (D-065 to D-068) and the last ten.

Where things stand on November 13, one line each: Lindsey Miller is the copywriter, officially working from November 13; the counter SOW (its Drive title is now "Website Redesign: Copywriting SOW Counter-Final") is unsigned and every comment on it is answered; the Design Guidelines deck is 16 pages in the repo, three pages still to be imported into Slides by Anthony; the Content Population document has its new twelve statuses and no schedule section; the Copywriting Master Map exists with 321 pages and no auto-update yet; the hero supporting line is drafted and not approved; the website redesign agent's state was last recorded October 13.

---

## 1. Where things stand

Uncommon Schools is rebuilding uncommonschools.org and its five regional sites with the agency Spinutech. WordPress multisite, Figma designs, soft launch January to February 2027, live by end of March 2027 (Lindsey's SOW puts CMS loading at January 14 to February 17, 2027 and launch at April 13, 2027). Kickoff was August 19. In the approved taxonomy the regional sites become folders of uncommonschools.org.

- **Copy.** Copywriting is Uncommon's; Spinutech populates the CMS (D-015). Lindsey's SOW of November 2: $30,000 fixed, up to 350 pages, target completion January 28, 2027. The counter SOW, https://docs.google.com/document/d/10GsXJ7YMgGbHqSIZFCrV-gdEO37bx0KrfeHQpQUpP7I/edit, is Uncommon's answer; unsigned. Its process is sections 3, 5 and 6 and Attachment A (six batches); Attachment B is the Round 2 List (26 pages). Net 30 days waits on Annette Riffle. Anthony posts his own replies; the code agent never replies to, resolves or adds a comment, and never accepts a suggestion. The internal brief is https://docs.google.com/document/d/1pgd70oHWpds6ccyLLaVzNqIPq7y_RqX5zpTFMXv1Mn4/edit.
- **SEO.** Spinutech's, confirmed by Portia on November 10: Julie Rooda built the inventory's keywords and metadata and does the launch work and a crawl of the populated site.
- **Design.** Spinutech's 20 wireframes are in `wireframes/` (ten templates). Anthony designed the homepage himself in his Figma file (section 4). Spinutech's page designs run to December 7. The Design Guidelines deck (section 2) is how his homepage rules reach Spinutech for the other pages.
- **Spinutech's inventory.** "USI Content Inventory Matrix", https://docs.google.com/spreadsheets/d/16SNhrRgH-tizjs79ddF0PHRP3s9zUhgYanbunpWg6Yo/edit, is the Baseline for the SOW and, per Anneliese on November 13, the naming source of truth for pages. Tabs: Status Dashboard, MainSite, Alumni Profiles, NYC, NewarkNorthStar, RochesterPrep, BostonRoxburyPrep, CamdenPrep. Its Status Dashboard counts 71, 67, 56, 47, 43, 47 pages, 327 in all.
- **Spinutech's FAQ document.** "USI FAQ Recommendations", https://docs.google.com/document/d/1FSKaHsHzQm6k73q6CggQqSKnyv7lZNaBg-zL90xKtRc/edit; FAQ copy is part of each page under clause 2.7.

---

## 2. Current task: the Content Population document and the Copywriting Master Map

**The page document.** "Website Redesign: Copywriter Content Population - Homepage", https://docs.google.com/document/d/1yTgkbj7dAnRtlGqDoTkcz-vGa9j4v9dtnNhgbfoz0CA/edit. Anneliese confirmed on November 13 that it is the current version and that Lindsey has reviewed the format. Its parts now, top to bottom: title and one paragraph; Status board (one row, Homepage); "The statuses, in order" (one column, twelve dropdown chips); colour key (Blue Lindsey's turn, Yellow Uncommon's turn, Green Complete, Grey Not started); Rules (five); then the Homepage entry: a status row (Status, By when, Direction confirmed on, Final on), Final say and Reviewers, Page direction box, Draft 1, Draft 2 and Draft 3 boxes with the ten section labels and Anthony's bookmarks, Paid changes table, and the table Anthony renamed "Page Information" (was Facts), ending in "What stakeholders have asked for: Nothing recorded yet." The schedule section was removed on November 13 (D-068). The Status dropdown definition is kix.2os72u77iph; the twelve options, in order, are Not started; LM Page direction; US Confirm direction; LM Revise direction; LM Draft 1; US Comments Draft 1; LM Draft 2; US Comments Draft 2; LM Draft 3; US Final comments; LM Fix errors; Complete (D-066, D-067). The Homepage status row read Not started, By when November 5, at session end. Anthony edits this document himself at the same time as the agent; the revision guard refused two writes for that reason and a re-read fixed it.

**The master map.** "Website Redesign: Copywriting Master Map", a Google Sheet in Anthony's Drive, https://docs.google.com/spreadsheets/d/18fjYqpuM7aTuV_lmAX_QWcYSkGr5Ruq5avV0XFkUB8Q/edit (D-068). Tabs: Schedule (business-day note and the six Attachment A batch rows); Pages (321 rows, inventory matrix order and names; columns Site, Page, New address, Batch, Round 2, the six date windows, Status, By when, Page document; row 2 is the Homepage with its document link; the Status column is a dropdown of the twelve statuses, which Anthony switched to chip display); Not in scope (five legal pages, four pages Spinutech marks planned but not live, alumni profiles, news posts). Batches were assigned from Attachment A by address pattern. Counts: Batch 1 15, Batch 2 40, Batch 3 33, Batch 4 76, Batch 5 68, Batch 6 74, and 15 blank. The map has 321 pages against the SOW's 322 because the SOW's main-site count included the alumni profiles placeholder row; the inventory holds 57 school pages against the SOW's 56. The page list and batch rules used to build it are in `/tmp/mm/pages.py` and `/tmp/mm/gen.py` on the Mac mini, not in the repo; they may be gone by the next session.

**The tasks, in Anthony's confirmed order (November 13, end of session):**

1. **Chip colours in the map's Status column.** The chips need the page document's colours: LM blue (1034B3), US yellow (FBAE40), Complete green (2E7D32), Not started grey (E6E8EC). The Sheets connection cannot set a chip's colour (checked in the API reference: no such field). Anthony sets them in the sheet; the agent walks him through from a picture of his screen, one picture, one next click, never a guessed sequence. The cell-level colouring the agent had added was removed because it turned chip text white.
2. **Auto-update of the map.** Status and By when copied from each page document into the map's columns L and M on a timer. Not built. A Routine created from the Mac mini session carries no Google connections and cannot read the documents (one was created and deleted on November 13 for that reason). Two ways that work, Anthony to choose: a timer inside a chat session that holds the Google connections, which stops when that session ends; or a Routine Anthony creates on claude.ai under Routines with Google Docs and Google Sheets connected, hourly, using the instruction text in `log.md` (2026-11-13, master map auto-update row). The status to read is the dropdown in the first table whose first cell begins "Status"; By when is the text of the "By when" cell.
3. **Fifteen pages with no batch.** Academic Results, History and Leadership for each of the five regions. Attachment A's batch descriptions do not name them. Anthony places them.
4. **Round 2 note on the Schedule tab.** A line explaining that Yes in the Round 2 column means a second round of comments and No means the final say's check. Proposed, unanswered.
5. **Stakeholder input match.** Anneliese's stakeholder input, in a document of her own (no link in the repo; it has a "content draft main page" and a regional page, untouched since October 13, with Pat Rometty's notes still to be added by her), matched to the inventory matrix page names so every piece connects to a page, then sent to her to sort out questions. No input exists for the homepage or for development.
6. **The 320 remaining page documents**, made from the Homepage document, each with its stakeholder input in "What stakeholders have asked for", linked from the map's Page document column.
7. **Lindsey as owner** of the documents, after 6.

Anthony's own items from the call: the email introducing Anneliese to Lindsey, the follow-up with Mary Ann about her feedback, the huddle with Anneliese, and her question whether the schedule dates stand (not decided on the call).

**Mary Ann's feedback of November 11** (still relevant): she likes all versions in one place; the instructions are simplistic, repetitive and distracting; she wants a separate timeline and guidance tab, the colour legend as a footer on every page, and every page on its own tab.

**The Design Guidelines deck, where it stands.** `deck/homepage-design-guidelines/Homepage Design Guidelines.pptx`, 16 pages, built by `build.py` in that folder. Anthony's Google Slides copy, https://docs.google.com/presentation/d/1-bDIDBQlEtRxAz204lhuVq1ceSbsESwAiYYK-fRsyUc/edit, lacks pages 2 (How to use this document, D-060), 5 (Announcement bar, black, D-062) and 10 (Section corners, D-063); only Anthony can import them (File, Import slides). All four Slides comments are closed. Two items remain unasked and unapproved: renaming Headline type to Fonts, and a Results and News page. Standing orders: black, never dark navy (D-057); nothing added unasked.

**Hero supporting line, open.** Replacement for "Sentence providing high level detail about Uncommon Schools." Last version shown, not approved: "Thirty years of tuition-free schools in New York City, Newark, Rochester, Boston, and Camden, where every student is college-bound from day one." Rejected on the way: a plain list of cities, "rigorous academics", "the families who call these cities home", "putting college within reach", anything over two lines. Anthony's bar: what an agency would write for a project of this price.

**How comment work is done** (Anthony's orders, November 10 to 13). One comment per message, in document order. State first where the comment sits, where the change goes, and where the reply goes. Then the change as it will read, the reply as it will appear, and "Yes makes the change. You post the reply." Suggestion first, reasoning second. Replies in Anthony's own voice, short, no colons or semicolons, no opener like "Good question", never the commenter's name. Only on his yes is a change made.

**Counter SOW: done.** All nine second-round comments answered (D-050 to D-056); Net 30 days waits on Annette; signature pending.

---

## 3. What Spinutech has told us

Their process (September 11): sitemap and taxonomy; 10 templates; one design direction, more is a change order (D-012); wireframes, one approach; feedback as Figma comments from one person; stock icons recolored; brand colours stay, fonts open (D-013). October 5 workshop: content population stays with Spinutech (D-015); Spinutech provides the inventory, copy doc templates, SEO and AEO guidance and some FAQs; College Grads and Dean's List combine into "Alumni College Success" (D-014); Apply Now or Enroll Now is Hadley's call (D-016); For Educators sits under a Resources menu (D-017); regional URLs copy the NYC structure, pending Mary Ann (D-018). Their timeline is in `references/2026-11-04-spinutech-timeline-smartsheet.md`; transcripts in `meetings/transcripts/` (the November 13 call is `2026-11-13-copywriting-workflow-with-anneliese.md`); open either only when the task needs it.

---

## 4. Repo and project reference

The brand voice document for Lindsey has its own record files in `brand-voice/`; the second code agent works there and does not write to this file, `decisions.md` or `log.md`.

`website-redesign-2026/` contains: `00-overview/`; `01-audit/`; `02-current-site-fixes/`; `03-full-redesign/` (empty); `deck/` (`deck_source.md`, the August audit facts, open only for audit or deck work; `build_deck.py`; the November 4 copy-options deck; `homepage-design-guidelines/`); `wireframes/batch-1/` and `batch-2/`; `page-decision-data/`; `references/`; `meetings/transcripts/`; `content-population-v2/`; `assets/Uncommon Presentation Template.pptx` (the voice model for anything written for an outside reader); the record files; and `content-population-document-proposal.md` (superseded, D-044).

Links not in the repo: the approved taxonomy sheet https://docs.google.com/spreadsheets/d/1kiiq4kodCtIZz0qtf5FWfh1EMvxaTyIdgOhLHY3YN4s; the documents in sections 1 and 2; the original alumni content population document https://docs.google.com/document/d/1qzw3hKj1amodx9aZSsx5PCx_fiHWsZlX72uYqKfHpCU/edit (October 16, do not edit); wireframe prototypes, batch 1 https://www.figma.com/proto/wVE9tgqrt8bisnFXd7SHdJ/Uncommon-Schools-Wireframes?node-id=61-2946&page-id=1%3A4038 and batch 2 https://www.figma.com/proto/wVE9tgqrt8bisnFXd7SHdJ/Uncommon-Schools-Wireframes?node-id=474-15170&page-id=474%3A4241; Anthony's design file https://www.figma.com/design/1Jq9rEkeqsJ3YolJZBM16n (page "Page 2", frame "Homepage / Desktop 1440 ALT 3", node 249:583; his notes are the frame "Notes", node 249:1083); the division of labor deck https://docs.google.com/presentation/d/1CF1yXkel2IMwky6G7z_KCOHBlZ75OQRRcVaQKlDqxuk/edit; the copywriter overview deck https://docs.google.com/presentation/d/1r5WWbO1qriznMESe6HLp7kbWNPtZhu4vnwAWGIpS7KE/edit.

**Machine notes.** Sessions run on the Mac mini; fetch and pull `main` before reading. Google Docs: read_doc returns the full JSON (about 300 KB, saved to a file; parse it with a script); the Docs connection edits with a revision guard, and a stale revision is refused, so re-read and resend; it can rename and reorder dropdown options (updateDropdownDefinitionProperties, keeping option IDs so existing chips survive) and insert dropdowns (insertDropdown); it cannot restore a version, accept a suggestion or post a comment. Google Sheets: the connection creates sheets (Drive create_file), writes values and formatting, sets dropdown validation and conditional formats, but cannot set dropdown chip colours. Scheduled Routines created from this session carry no Google connections; a Routine that needs them must be created on claude.ai by Anthony. Google Slides: readable, not editable. Figma: ask before reading. Decks: `/usr/bin/python3` is the only Python with python-pptx; previews by headless Chrome from `build.py --html`. Files cannot be attached in the chat; pictures and files go to the repo and he opens them on GitHub (D-039).

**People.** Anthony Emezu, Creative Director (your contact). Anneliese Tint runs the project and holds the stakeholder input. Mary Ann Villanueva, Chief External Officer, decides. Courtney Clayton, Senior Director of Brand and Marketing, Anthony's manager, confirms page direction. Lindsey Miller (he), the copywriter, West Coast. Annette Riffle (payment terms), Miriam (legal and compliance), Hadley (enrollment), Pat Rometty (stakeholder input), Shané Jensen (Newark enrollment coordinator), Keith (designer) and Wenni (developer) on Uncommon's side. Spinutech: Portia Griffin (lead), Brittany, Jackson, Meghan McAtasney (UX strategist), Mark Palmer (lead designer), Julie Rooda (SEO), Eric, Wes.

**Key facts you must not get wrong.**

- Uncommon Schools is a network of charter schools. Never "public school" in anything we write (D-019).
- Live site: six domains on one WordPress multisite; the Curriculum Hub is separate. Boston = roxburyprep, Newark = northstar, NYC = nyc, Camden = camdenprep, Rochester = rochesterprep, all .uncommonschools.org.
- Kickoff decisions: WCAG AAA case by case; reference site kippnj.org; look like no competitor; audience priority prospective families and job candidates, then other educators, then donors; current families not a target (D-001 to D-003).
- Counts in the counter SOW since November 12: 322 in-scope pages (66 main, 256 regional and school), the five main-site legal pages out (D-056). The map holds 321 (see section 2).
- Deck brand rules: Libre Franklin only; blue #1034B3, yellow #FBAE40, panel fill #F2F4FA, borders #C9CED8; sizes locked; no em dashes. Website design rules are in the Design Guidelines deck; black never dark navy (D-057).

---

## 5. Session log

Earlier entries are in git history (last long version: commit 9095c3e).

### November 12 to 13, 2026 (code agent; ended by Anthony for loss of trust)

How to use this document page written and built (D-059, D-060). Announcement bar changed to black (D-061, D-062). Section corners page added (D-063). Deck now 16 pages; cover retitled (D-058). Hero supporting line drafted six times, not approved. Transcript of the November 13 call saved; a breakdown of the call listed an item the call never said; Anthony ended the session and ordered that none of its Content Population work be used.

### November 13, 2026, evening (code agent; ended by Anthony)

Four-question check before every message added to the instructions (D-065). Content Population document: statuses rebuilt as one column of twelve, renamed with LM and US prefixes (D-066, D-067); schedule section removed (D-068). Copywriting Master Map built as a Google Sheet, three tabs, 321 pages (D-068). Chip colour instructions were given without seeing the screen and rejected. A Routine for the auto-update was created, found to carry no Google connections, and deleted. Anthony ended the session because the work had stopped being effective.
