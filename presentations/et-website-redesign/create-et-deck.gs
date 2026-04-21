/**
 * Uncommon Schools — Website Redesign Approach (ET Deck)
 * Based on Mary Ann's April 21, 2026 version + feedback applied
 * ─────────────────────────────────────────────────────────────
 * CHANGES FROM PRIOR VERSION (feedback applied):
 *   1. Slide 7: Audit links moved INTO each column header (not footnote)
 *   2. Slide 7: Key takeaways row added at top; each issue flagged as
 *      "Interim Fix" or "Redesign Item"
 *   3. Slide 13: Converted from "What's Next" to a Questions page
 *
 * HOW TO RUN:
 *   1. Go to https://script.google.com
 *   2. New project → delete all code → paste this file
 *   3. Save (Cmd+S) → Run → createETDeck
 *   4. Approve permissions → find deck in Google Drive
 */

const W = 720, H = 405;

const C = {
  blue:    '#0033A0',
  gold:    '#F2A900',
  white:   '#FFFFFF',
  black:   '#000000',
  gray:    '#4A4A4A',
  ltGray:  '#F5F7FA',
  altRow:  '#EEF1F8',
  amber:   '#FFF3CD',
  amberTx: '#7A5C00',
  green:   '#27AE60',
  red:     '#C0392B',
  ltBlue:  '#E8ECF5'
};

const ML = 45, MR = 45, CW = W - ML - MR;
const TY = 26, TH = 40, RY = 70, RH = 3, CY = 82, FY = H - 52, FH = 52;

// ═══════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════
function createETDeck() {
  const pres = SlidesApp.create('Website Redesign Approach — ET (Updated)');
  const existing = pres.getSlides();
  existing[0].getPageElements().forEach(el => el.remove());

  const s = [existing[0]];
  for (let i = 0; i < 18; i++) s.push(pres.appendSlide(SlidesApp.PredefinedLayout.BLANK));

  slide01_Title(s[0]);
  slide02_Topics(s[1]);
  slide03_BackgroundSite(s[2]);
  slide04_BackgroundAgency(s[3]);
  slide05_ProcessRec(s[4]);
  slide06_AITeam(s[5]);
  slide07_AuditResults(s[6]);     // FEEDBACK: links in columns, key takeaways, interim vs redesign
  slide08_ETAgreeing(s[7]);
  slide09_Roles(s[8]);
  slide10_RAPID(s[9]);
  slide11_SurveyParticipants(s[10]);
  slide12_Timeline(s[11]);
  slide13_Questions(s[12]);       // FEEDBACK: converted from What's Next to Questions
  slide14_Appendix(s[13]);
  slide15_LippincottTable(s[14]);
  slide16_FutureOS(s[15]);
  slide17_WhatAIEnables(s[16]);
  slide18_Summary(s[17]);
  slide19_AgencyRelationship(s[18]);

  Logger.log('✅ Done! ' + pres.getUrl());
}

// ─── SLIDE 1: TITLE ──────────────────────────────────────────────────────────
function slide01_Title(slide) {
  slide.getBackground().setSolidFill(C.blue);
  addText(slide, 'UNCOMMON', ML, 28, 280, 22, {size:14, bold:true, color:C.white});
  addRect(slide, ML, 52, 200, 2, C.gold);
  addText(slide, 'SCHOOLS', ML, 56, 280, 18, {size:10, bold:true, color:C.gold});
  addRect(slide, ML, 76, 200, 2, C.gold);
  addText(slide, 'CHANGE HISTORY', W-170, 28, 160, 22,
    {size:10, bold:true, color:C.gold, align:'RIGHT'});
  addText(slide, 'Website Redesign\nApproach', ML, 130, CW, 100,
    {size:38, bold:true, color:C.white});
  addText(slide, 'Prepared for Executive Team', ML, 248, CW, 24,
    {size:14, color:C.gold});
  addText(slide, 'April 27, 2026', ML, 272, CW, 22,
    {size:12, color:C.white});
  addFooter(slide, '');
}

// ─── SLIDE 2: TOPICS FOR DISCUSSION ──────────────────────────────────────────
function slide02_Topics(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'Topics for discussion');
  addBullets(slide, [
    'Background',
    '    Current situation',
    '    Agency outreach',
    'Recommendation',
    '    Process, ownership',
    '    Results of AI Team audit',
    'Roles & responsibilities / RAPID',
    'Timeline',
  ], ML, CY, CW - 180, H - CY - FH - 20, {size:13, color:C.black});

  // Callout box
  addRect(slide, W - 210, CY, 175, 60, C.ltBlue);
  addRect(slide, W - 210, CY, 4, 60, C.blue);
  addText(slide, 'As you review, please add questions or thoughts as comments within the document.',
    W - 204, CY + 6, 165, 48, {size:9, italic:true, color:C.gray});
  addFooter(slide, 2);
}

// ─── SLIDE 3: BACKGROUND — CURRENT SITE ──────────────────────────────────────
function slide03_BackgroundSite(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'Background: Current Uncommonschools.org website');

  addBullets(slide, [
    'Refreshed over 8 years ago at the cost of $120,000+ (BriteWeb proposal)',
    'Facing citations from the Office of Civil Rights for Web Content Accessibility Guidelines (WCAG) violations',
    'Significant outages causing xx hours of disruption to enrollment, staff recruitment (latest 4/16–17)',
    'Current annual cost of $46,730',
  ], ML, CY, CW, 78, {size:11, color:C.black});

  // Cost breakdown table
  const t = slide.insertTable(6, 2, ML + 20, CY + 82, CW - 20, 148);
  setCell(t,0,0,'Annual Subscriptions', {bg:C.blue, color:C.white, bold:true, size:10});
  setCell(t,0,1,'Cost',                 {bg:C.blue, color:C.white, bold:true, size:10, align:'CENTER'});
  [
    ['WordPress Web Hosting (uncommonschools.org)',       '$5,400/yr'],
    ['SiteCare Custom Maintenance Plan (uncommonschools.org)', '$23,400/yr'],
    ['SiteCare Plus (hscurriculum.uncommonschools.org)',  '$2,990/yr'],
    ['Development Retainer (2 hrs/mo)',                  '$300/mo'],
    ['Flex Pack — 15 hrs ADA (monthly)',                 '$945/mo'],
  ].forEach(([a,b],i) => {
    const bg = i%2===0 ? C.white : C.ltGray;
    setCell(t,i+1,0,a, {bg, color:C.black, size:9});
    setCell(t,i+1,1,b, {bg, color:C.black, size:9, align:'CENTER'});
  });

  addText(slide, '→ Complete audit findings of current website follow within this document.',
    ML, CY + 236, CW, 18, {size:9, italic:true, color:C.gray});
  addFooter(slide, 3);
}

// ─── SLIDE 4: BACKGROUND — AGENCY OUTREACH ───────────────────────────────────
function slide04_BackgroundAgency(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'Background: Agency Outreach');

  addText(slide,
    'Upon receiving conditional approval for our early round Resource Request, we issued a detailed brief to five agencies covering discovery & research, strategy, information architecture, design, prototyping, content migration, and ongoing support. Average project time: 6 months.',
    ML, CY, CW, 34, {size:10, italic:true, color:C.gray});

  const t = slide.insertTable(6, 2, ML, CY + 38, CW, 188);
  setCell(t,0,0,'Agency',{bg:C.blue, color:C.white, bold:true, size:11});
  setCell(t,0,1,'Cost',  {bg:C.blue, color:C.white, bold:true, size:11, align:'CENTER'});
  [
    ['The Next Rodeo — AI-native boutique, AEO partnership with Sentient.',                                                                              '$150K'],
    ['Lippincott — Global brand consultancy. Previously worked with Success Academy.',                                                                   '$750K\n(incl. $100K discount)'],
    ['The Charles Group — Uncommon\'s media agency, full-service.',                                                                                     '$500K'],
    ['Independent web developers — recommended by Pentagram Design (Paula Scher / Fran Gormley).',                                                      '~$200K (est)'],
    ['Cure Agency — Declined. Conflict of interest with existing client KIPP NYC.',                                                                      'N/A'],
  ].forEach(([a,b],i) => {
    const bg = i%2===0 ? C.white : C.ltGray;
    setCell(t,i+1,0,a, {bg, color:C.black, size:10});
    setCell(t,i+1,1,b, {bg, color:C.black, size:10, align:'CENTER'});
  });
  addFooter(slide, 4);
}

// ─── SLIDE 5: RECOMMENDATION — PROCESS ───────────────────────────────────────
function slide05_ProcessRec(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'Recommendation: Process to Develop New Website');

  addText(slide,
    'Instead of relying on a full-service external agency for the entire process, we recommend a hybrid approach combining internal expertise, AI agents, an external agency, and a Sr. Web Engineer — translating into significant cost savings from the original $850,000 estimate.',
    ML, CY, CW, 36, {size:10, italic:true, color:C.gray});

  const colW = Math.floor(CW / 3) - 5;
  const phases = [
    {
      label: 'Phase 1: Discovery',
      scope: ['Website audit', 'Competitive research', 'Best-in-class examples', 'Stakeholder interviews*'],
      resp:  'Anthony, Marketing, AI team',
      cost:  '~$500 (3 days)'
    },
    {
      label: 'Phase 2: Define & Design',
      scope: ['Archetypes and user journey', 'Content strategy', 'SEO / AEO', 'Wireframes', 'Design system, page design'],
      resp:  'Anthony, Marketing, AI team',
      cost:  '~$1,500 (3 months)'
    },
    {
      label: 'Phase 3: Develop & Deliver',
      scope: ['Full build', 'Quality assurance, security', 'Launch: July 1 soft / Oct full'],
      resp:  'External Agency, Marketing, D&IT, Sr. Web Engineer (PT)',
      cost:  '~$325,000 (TBD)'
    }
  ];

  phases.forEach(({label, scope, resp, cost}, i) => {
    const x = ML + i * (colW + 7);
    const y = CY + 42;
    const isInternal = i < 2;
    addRect(slide, x, y, colW, 20, C.blue);
    addText(slide, label, x, y, colW, 20,
      {size:9, bold:true, color:C.white, align:'CENTER', vAlign:'MIDDLE'});
    addBullets(slide, scope, x + 4, y + 22, colW - 8, 88, {size:9, color:C.black});
    addRect(slide, x, y + 114, colW, 14, isInternal ? C.gold : C.altRow);
    addText(slide, resp, x + 3, y + 114, colW - 6, 14,
      {size:8, bold:isInternal, color:isInternal ? C.black : C.gray, vAlign:'MIDDLE'});
    addRect(slide, x, y + 130, colW, 16, isInternal ? '#E8F5E9' : '#FFF3F3');
    addText(slide, cost, x, y + 130, colW, 16,
      {size:9, bold:true, color:isInternal ? C.green : C.red, align:'CENTER', vAlign:'MIDDLE'});
  });

  addText(slide, '*Stakeholder interviews to be conducted once recommended process is reviewed/approved.',
    ML, H - FH - 22, CW, 16, {size:8, italic:true, color:C.gray});
  addFooter(slide, 5);
}

// ─── SLIDE 6: AI TEAM ─────────────────────────────────────────────────────────
function slide06_AITeam(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'Recommendation: Leverage What We Built');

  addText(slide,
    'An in-house AI team built specifically for us — specialized agents briefed on our org, brand, audiences, and goals.',
    ML, CY, CW, 22, {size:12, bold:true, color:C.blue});
  addText(slide,
    'The team is self-organizing — the Coordinator oversees agents, assigns work, and tracks delivery. Agents coordinate directly with each other without Anthony managing every handoff.',
    ML, CY + 24, CW, 28, {size:10, italic:true, color:C.gray});

  const t = slide.insertTable(5, 2, ML, CY + 58, CW, 160);
  setCell(t,0,0,'Role',         {bg:C.blue, color:C.white, bold:true, size:12, align:'CENTER'});
  setCell(t,0,1,'What They Do', {bg:C.blue, color:C.white, bold:true, size:12});
  [
    ['Coordinator', 'Oversees the team, assigns work, tracks the pipeline, preps meeting agendas and leadership briefings'],
    ['Dev',         'Technical architecture, engineering audits, platform strategy'],
    ['Writer',      'Content strategy, copy, SEO, AI search optimization'],
    ['Creative',    'Visual direction, design systems, UX, audience experience'],
  ].forEach(([role, desc], i) => {
    const bg = i%2===0 ? C.white : C.ltGray;
    setCell(t,i+1,0,role, {bg, color:C.blue, bold:true, size:12, align:'CENTER'});
    setCell(t,i+1,1,desc, {bg, color:C.black, size:11});
  });
  addFooter(slide, 6);
}

// ─── SLIDE 7: AUDIT RESULTS (FEEDBACK APPLIED) ───────────────────────────────
function slide07_AuditResults(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'Proof of Concept: Audit Results');

  // Key takeaways bar
  addRect(slide, ML, CY, CW, 22, C.blue);
  addText(slide,
    'Key takeaways: 5 live issues requiring immediate action · Site serves 141K visitors/month with CDN bypassed · Full audit linked in each column below',
    ML + 6, CY, CW - 12, 22,
    {size:8.5, bold:true, color:C.white, vAlign:'MIDDLE'});

  addText(slide, 'Phase 1 equivalent — completed in days, for ~$500 in AI credits vs. agency cost of ~$125K and 3–4 weeks.',
    ML, CY + 26, CW, 16, {size:10, bold:true, color:C.blue});

  const colW = Math.floor(CW / 3) - 4;
  const auditCols = [
    {
      title: 'Dev — Technical Audit',
      link:  'github.com/Uncommon-Schools/campaigns/website-audit-2026/dev',
      items: [
        {text:'5 fragmented WordPress installs: 5× maintenance, zero content sharing', tag:'Redesign'},
        {text:'CDN bypassed ALL pages — 141K monthly visitors on origin (UTM misconfiguration)', tag:'Fix Now'},
        {text:'Camden 7–10× slower than all regional sites', tag:'Fix Now'},
        {text:'Spanish serving English content — live SEO failure', tag:'Fix Now'},
        {text:'WCAG 2.2 AA violations network-wide', tag:'Both'},
        {text:'Drupal 10 on Pantheon recommended', tag:'Redesign'},
      ]
    },
    {
      title: 'Writer — Content Audit',
      link:  'github.com/Uncommon-Schools/campaigns/website-audit-2026/writer',
      items: [
        {text:'Full content architecture mapped: network + 5 regional domains', tag:'Redesign'},
        {text:'All 5 sites serving broken llms.txt — AI search engines misinformed', tag:'Fix Now'},
        {text:'SEO gaps and audience pathway failures documented', tag:'Redesign'},
        {text:'Benchmarked against peer institutions', tag:'Redesign'},
      ]
    },
    {
      title: 'Creative — Experience Audit',
      link:  'github.com/Uncommon-Schools/campaigns/website-audit-2026/creative',
      items: [
        {text:'Visual design, UX, navigation assessed across full site', tag:'Redesign'},
        {text:'Alumni Impact page 404 — primary donor conversion path broken', tag:'Fix Now'},
        {text:'Audience pathways reviewed; major gaps identified', tag:'Redesign'},
        {text:'WCAG compliance gaps documented', tag:'Both'},
      ]
    }
  ];

  const tagColor = {
    'Fix Now':  {bg:'#FFEBEE', color:'#C0392B'},
    'Redesign': {bg:'#E3F2FD', color:'#0033A0'},
    'Both':     {bg:'#FFF8E1', color:'#7A5C00'},
  };

  const startY = CY + 46;
  const colH = H - startY - FH - 30;

  auditCols.forEach(({title, link, items}, i) => {
    const x = ML + i * (colW + 6);
    addRect(slide, x, startY, colW, 18, C.blue);
    addText(slide, title, x, startY, colW, 18,
      {size:8.5, bold:true, color:C.white, align:'CENTER', vAlign:'MIDDLE'});
    addText(slide, '→ ' + link, x, startY + 20, colW, 12,
      {size:7.5, color:C.blue, italic:true, align:'CENTER'});

    let itemY = startY + 34;
    items.forEach(({text, tag}) => {
      const tc = tagColor[tag];
      addRect(slide, x + colW - 42, itemY, 40, 10, tc.bg);
      addText(slide, tag, x + colW - 42, itemY, 40, 10,
        {size:6.5, bold:true, color:tc.color, align:'CENTER', vAlign:'MIDDLE'});
      addText(slide, '• ' + text, x + 2, itemY, colW - 46, 22,
        {size:8.5, color:C.black});
      itemY += 24;
    });
  });

  // Legend
  addText(slide, '■ Fix Now (interim)  ■ Redesign item  ■ Both',
    ML, H - FH - 16, CW, 14, {size:8, color:C.gray, align:'CENTER'});

  // Note
  addRect(slide, ML, H - FH - 30, CW, 16, C.amber);
  addText(slide,
    'Note: This phase did not include stakeholder interviews or best-practice research — a Research & Analytics agent would address this.',
    ML + 4, H - FH - 30, CW - 8, 16,
    {size:8, italic:true, color:C.amberTx, vAlign:'MIDDLE'});
  addFooter(slide, 7);
}

// ─── SLIDE 8: WHAT ET IS AGREEING TO ─────────────────────────────────────────
function slide08_ETAgreeing(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'Recommendation: What the ET Is Agreeing To');

  const halfW = Math.floor(CW / 2) - 6;
  const x2 = ML + halfW + 12;

  // Scope
  addRect(slide, ML, CY, halfW, 16, C.blue);
  addText(slide, 'Project Scope', ML, CY, halfW, 16,
    {size:9, bold:true, color:C.white, align:'CENTER', vAlign:'MIDDLE'});
  addBullets(slide, [
    'Phase 1 & 2: In-house (complete / active) — ~$1,000 in AI credits',
    'Phase 3 & 4: Agency-led — design, build, QA, launch',
    'Soft launch: July 1  ·  Full launch: October',
  ], ML + 4, CY + 18, halfW - 8, 56, {size:10, color:C.black});

  // Team
  addRect(slide, ML, CY + 78, halfW, 16, C.blue);
  addText(slide, 'Team & Responsibilities', ML, CY + 78, halfW, 16,
    {size:9, bold:true, color:C.white, align:'CENTER', vAlign:'MIDDLE'});
  addBullets(slide, [
    'Creative Director (Anthony Emezu) — creative oversight, agency relationship',
    'PMs (Rachel Kotler & Suezette Weir) — day-to-day agency management',
    'Freelance Web Engineer (to be hired) — independent technical review',
    'AI Team — strategy, architecture, content, ongoing support',
  ], ML + 4, CY + 96, halfW - 8, 80, {size:9.5, color:C.black});

  // Stakeholders
  addRect(slide, x2, CY, halfW, 16, C.blue);
  addText(slide, 'Key Stakeholders', x2, CY, halfW, 16,
    {size:9, bold:true, color:C.white, align:'CENTER', vAlign:'MIDDLE'});
  addBullets(slide, [
    'Mary Ann Villanueva, Chief External Officer — Final decision authority',
    'Bret Peiser, Co-Chief Executive Officer',
    'Julie Jackson, Co-Chief Executive Officer',
    'Priam Dutta, Chief Operating Officer',
    'Heather Evans, Chief Information Officer',
  ], x2 + 4, CY + 18, halfW - 8, 80, {size:9.5, color:C.black});

  // Costs
  addRect(slide, x2, CY + 104, halfW, 16, C.blue);
  addText(slide, 'Costs', x2, CY + 104, halfW, 16,
    {size:9, bold:true, color:C.white, align:'CENTER', vAlign:'MIDDLE'});
  addBullets(slide, [
    'Phases 1–2 (in-house): ~$1,000',
    'Phases 3–4 (agency): TBD — Lippincott benchmark $550,000',
  ], x2 + 4, CY + 122, halfW - 8, 40, {size:9.5, color:C.black});
  addFooter(slide, 8);
}

// ─── SLIDE 9: ROLES & RESPONSIBILITIES ───────────────────────────────────────
function slide09_Roles(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'Recommendation: Roles and Responsibilities');

  const halfW = Math.floor(CW / 2) - 6;
  const x2 = ML + halfW + 12;

  addRect(slide, ML, CY, halfW, 18, C.blue);
  addText(slide, 'Marketing', ML, CY, halfW, 18,
    {size:10, bold:true, color:C.white, align:'CENTER', vAlign:'MIDDLE'});
  addBullets(slide, [
    'Creative Director — creative/content oversight, agency relationship',
    'Content Editor — writes and updates content to keep the site fresh and relevant',
    'Product Manager — day-to-day agency management',
    'AI Team (Coordinator, Dev, Writer, Creative) — strategy, architecture, content, ongoing support',
  ], ML + 4, CY + 22, halfW - 8, 130, {size:10.5, color:C.black});

  addRect(slide, x2, CY, halfW, 18, C.blue);
  addText(slide, 'Data & IT', x2, CY, halfW, 18,
    {size:10, bold:true, color:C.white, align:'CENTER', vAlign:'MIDDLE'});
  addBullets(slide, [
    'Sr. Web Engineer — independent technical review of agency work alongside AI developers',
    'Project Manager — manage hosting platform, domain registration, security patches, plugin updates, and troubleshooting',
  ], x2 + 4, CY + 22, halfW - 8, 130, {size:10.5, color:C.black});
  addFooter(slide, 9);
}

// ─── SLIDE 10: RAPID ─────────────────────────────────────────────────────────
function slide10_RAPID(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'Recommendation: RAPID');

  const t = slide.insertTable(4, 5, ML, CY, CW, 160);
  const headers = ['Input*', 'Recommend', 'Agree', 'Decide', 'Perform'];
  headers.forEach((h, i) => setCell(t, 0, i, h,
    {bg:C.blue, color:C.white, bold:true, size:12, align:'CENTER'}));
  const rows = [
    ['Program Owners', 'Anthony',   'Executive Team', 'Brett',   'Marketing'],
    ['Marketing',      'Mary Ann',  '',               'Julie',   'D&IT'],
    ['D&IT',           '',          '',               '',        ''],
  ];
  rows.forEach((row, i) => {
    const bg = i%2===0 ? C.white : C.ltGray;
    row.forEach((cell, j) => setCell(t, i+1, j, cell, {bg, color:C.black, size:11}));
  });

  addText(slide,
    '*Stakeholder survey will provide input on functional requirements; partnership with D&IT needed to determine technical requirements.',
    ML, CY + 170, CW, 20, {size:9, italic:true, color:C.gray});
  addFooter(slide, 10);
}

// ─── SLIDE 11: STAKEHOLDER SURVEY PARTICIPANTS ───────────────────────────────
function slide11_SurveyParticipants(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'Stakeholder Survey Participants');

  addText(slide,
    'We would like broad input from our internal stakeholders whose work is dependent on having a robust and well-designed website.',
    ML, CY, CW, 30, {size:13, color:C.black});

  addText(slide,
    'Please add names to the participant list contained in the survey overview.',
    ML, CY + 36, CW, 24, {size:13, italic:true, color:C.gray});

  addRect(slide, ML, CY + 72, CW, 2, C.gold);

  addText(slide,
    'Survey overview and participant list will be shared separately.',
    ML, CY + 84, CW, 24, {size:11, color:C.gray, align:'CENTER'});
  addFooter(slide, 11);
}

// ─── SLIDE 12: TIMELINE ───────────────────────────────────────────────────────
function slide12_Timeline(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'Timeline');

  const t = slide.insertTable(6, 3, ML, CY, CW, 218);
  setCell(t,0,0,'Activity',    {bg:C.blue, color:C.white, bold:true, size:11});
  setCell(t,0,1,'Responsible', {bg:C.blue, color:C.white, bold:true, size:11, align:'CENTER'});
  setCell(t,0,2,'Timing',      {bg:C.blue, color:C.white, bold:true, size:11, align:'CENTER'});
  [
    ['Administer stakeholder survey',
     '',
     'May 4'],
    ['Present findings from stakeholder input & share initial design concepts\n(including design for "30 Years of Impact" interim page)',
     'Anthony',
     'May 28'],
    ['Award development work to external agency',
     '',
     'Early June'],
    ['Development and security testing complete',
     '',
     'September'],
    ['Full site launch',
     '',
     'October'],
  ].forEach(([a, b, c], i) => {
    const bg = i%2===0 ? C.white : C.ltGray;
    setCell(t,i+1,0,a, {bg, color:C.black, size:10});
    setCell(t,i+1,1,b, {bg, color:C.black, size:10, align:'CENTER'});
    setCell(t,i+1,2,c, {bg, color:C.blue,  size:11, bold:true, align:'CENTER'});
  });
  addFooter(slide, 12);
}

// ─── SLIDE 13: QUESTIONS (converted from What's Next) ────────────────────────
function slide13_Questions(slide) {
  slide.getBackground().setSolidFill(C.blue);
  addText(slide, 'UNCOMMON', ML, 28, 240, 20, {size:13, bold:true, color:C.white});
  addRect(slide, ML, 50, 175, 2, C.gold);
  addText(slide, 'SCHOOLS', ML, 54, 240, 16, {size:9, bold:true, color:C.gold});
  addRect(slide, ML, 72, 175, 2, C.gold);

  addText(slide, 'Questions', ML, 90, CW, 34,
    {size:28, bold:true, color:C.white});
  addRect(slide, ML, 128, CW, 3, C.gold);

  addBullets(slide, [
    'Clarifying questions on the process, timeline, or cost structure',
    'Input on what we might have missed in the audit or agency evaluation',
    'Validation on the stakeholder list — who should be included in the survey?',
  ], ML, 140, CW, 100, {size:13, color:C.white});

  addText(slide, 'Please add any additional comments or questions directly in the document.',
    ML, 256, CW, 28,
    {size:12, italic:true, color:C.gold, align:'CENTER'});
  addFooter(slide, 13);
}

// ─── SLIDE 14: APPENDIX DIVIDER ──────────────────────────────────────────────
function slide14_Appendix(slide) {
  slide.getBackground().setSolidFill(C.blue);
  addText(slide, 'APPENDIX', ML, H/2 - 30, CW, 60,
    {size:40, bold:true, color:C.white, align:'CENTER', vAlign:'MIDDLE'});
  addRect(slide, ML + 60, H/2 + 24, CW - 120, 3, C.gold);
  addFooter(slide, '');
}

// ─── SLIDE 15: LIPPINCOTT TABLE ───────────────────────────────────────────────
function slide15_LippincottTable(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'Agency Example: The Website Redesign');
  addText(slide,
    'Lippincott — a premier brand and experience firm — submitted a proposal to redesign uncommonschools.org.',
    ML, CY, CW, 20, {size:10, italic:true, color:C.gray});

  const t = slide.insertTable(6, 3, ML, CY + 24, CW, 178);
  setCell(t,0,0,'Phase', {bg:C.blue, color:C.white, bold:true, size:11, align:'CENTER'});
  setCell(t,0,1,'Scope', {bg:C.blue, color:C.white, bold:true, size:11});
  setCell(t,0,2,'Fee',   {bg:C.blue, color:C.white, bold:true, size:11, align:'CENTER'});
  [
    ['Phase 1: Dig',    'Audits, research, stakeholder interviews',       '$125,000'],
    ['Phase 2: Define', 'Archetypes, content strategy, SEO, wireframes',  '$175,000'],
    ['Phase 3: Design', 'Design system, page layouts, motion, copy',      '$225,000'],
    ['Phase 4: Deliver','Full build, QA, launch',                         '$325,000'],
    ['Total',           '',                                                '$750,000'],
  ].forEach(([a,b,c],i) => {
    const isTotal = i===4;
    const bg = isTotal ? '#FFF3F3' : (i%2===0 ? C.white : C.ltGray);
    setCell(t,i+1,0,a, {bg, color:C.black, bold:isTotal, size:isTotal?12:11});
    setCell(t,i+1,1,b, {bg, color:C.black, size:11});
    setCell(t,i+1,2,c, {bg, color:isTotal?C.red:C.black, bold:isTotal, size:isTotal?13:11, align:'CENTER'});
  });

  addText(slide, 'Timeline: 7+ months  ·  March through October',
    ML, CY + 210, CW, 22, {size:13, bold:true, color:C.red, align:'CENTER'});
  addFooter(slide, 15);
}

// ─── SLIDE 16: FUTURE OPERATING SYSTEM ───────────────────────────────────────
function slide16_FutureOS(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'The Future Operating System');

  const halfW = Math.floor(CW/2) - 6;
  const x2 = ML + halfW + 12;

  addRect(slide, ML, CY, halfW, 18, C.blue);
  addText(slide, 'For Project Management', ML, CY, halfW, 18,
    {size:9, bold:true, color:C.white, align:'CENTER', vAlign:'MIDDLE'});
  addBullets(slide, [
    'Every project tracked: owner, status, deadline — near- and long-term in one view',
    'Ticket writing with consistent formatting and clear scope',
    'Campaign tracking and performance analysis',
    'Competitor and market monitoring — ongoing, not one-time',
    'Region and stakeholder-specific strategy',
    '48-hour rule: blockers flagged immediately, not in weekly reports',
  ], ML + 4, CY + 22, halfW - 8, CONTENT_H() - 22, {size:10, color:C.black});

  addRect(slide, x2, CY, halfW, 18, C.blue);
  addText(slide, 'For Design Execution', x2, CY, halfW, 18,
    {size:9, bold:true, color:C.white, align:'CENTER', vAlign:'MIDDLE'});
  addBullets(slide, [
    'Creative briefs written before designers open a file',
    'Prototype direction, copy, and specs prepared upfront',
    'Reduces revision cycles by defining scope early',
    'Frees designers to focus on high-value creative work',
    'Ongoing management of all brand guides — standards, video, logo library, photography',
  ], x2 + 4, CY + 22, halfW - 8, CONTENT_H() - 22, {size:10, color:C.black});

  addText(slide, "The agents don't replace the PMs or designers. They remove the friction so the team can do their best work.",
    ML, FY - 22, CW, 18, {size:10, italic:true, color:C.gray, align:'CENTER'});
  addFooter(slide, 16);
}

// ─── SLIDE 17: WHAT AI ENABLES ────────────────────────────────────────────────
function slide17_WhatAIEnables(slide) {
  slide.getBackground().setSolidFill(C.blue);
  addText(slide, 'UNCOMMON', ML, 28, 240, 20, {size:13, bold:true, color:C.white});
  addRect(slide, ML, 50, 175, 2, C.gold);
  addText(slide, 'SCHOOLS', ML, 54, 240, 16, {size:9, bold:true, color:C.gold});
  addRect(slide, ML, 72, 175, 2, C.gold);

  addText(slide, 'What an AI Team Will Enable', ML, 88, CW, 32,
    {size:24, bold:true, color:C.white});
  addRect(slide, ML, 124, CW, 3, C.gold);

  addBullets(slide, [
    'Need engineering capacity? Brief the Dev agent on the project.',
    'Need copy for a fast turnaround? The Writer agent has our voice.',
    'Need strategy or competitive research? Done in hours, not weeks.',
    ' ',
    'The system gets smarter over time — every document shared deepens the knowledge base. The team compounds.',
    ' ',
    'Expand for any need: Research & Analytics, media strategist, specialized dev, PM support. The model is flexible and additive.',
  ], ML, 134, CW, 185, {size:13, color:C.white});
  addFooter(slide, 17);
}

// ─── SLIDE 18: SUMMARY ────────────────────────────────────────────────────────
function slide18_Summary(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'Summary');

  const t = slide.insertTable(7, 2, ML, CY, CW, 228);
  setCell(t,0,0,'What We Built', {bg:C.blue, color:C.white, bold:true, size:12});
  setCell(t,0,1,'Impact',        {bg:C.blue, color:C.white, bold:true, size:12});
  [
    ['In-house AI team',                    'Reduces dependence on agency retainers for strategy and research'],
    ['Coordinated project management',      'PM team amplified — less friction, more execution'],
    ['Deep org knowledge, always current',  'No vendor onboarding — every agent already knows Uncommon'],
    ['Website Phase 1 in-house',            '$125K agency cost → ~$500 in credits'],
    ['Phases 1 + 2 in-house',              '~$300K in agency fees handled internally before engagement'],
    ['Agency engaged for Phases 3–4',       'Design system, build, and launch remain agency-led — we arrive prepared'],
  ].forEach(([a,b],i) => {
    const bg = i%2===0 ? C.white : C.ltGray;
    setCell(t,i+1,0,a, {bg, color:C.blue, bold:true, size:11});
    setCell(t,i+1,1,b, {bg, color:C.black,           size:11});
  });

  addText(slide, "We're not eliminating the redesign budget. We're maximizing what we get for it.",
    ML, FY - 24, CW, 20, {size:12, bold:true, color:C.blue, align:'CENTER'});
  addFooter(slide, 18);
}

// ─── SLIDE 19: AGENCY RELATIONSHIP ───────────────────────────────────────────
function slide19_AgencyRelationship(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'How Agents Change Our Agency Relationship');
  addText(slide,
    "We're not replacing the agency for design and build. We're walking in as an informed, prepared client.",
    ML, CY, CW, 22, {size:11, italic:true, color:C.gray});

  const t = slide.insertTable(6, 3, ML, CY + 26, CW, 148);
  setCell(t,0,0,'Phase',               {bg:C.blue, color:C.white, bold:true, size:11, align:'CENTER'});
  setCell(t,0,1,'Lippincott Duration', {bg:C.blue, color:C.white, bold:true, size:11, align:'CENTER'});
  setCell(t,0,2,'Our Status',          {bg:C.blue, color:C.white, bold:true, size:11, align:'CENTER'});
  [
    ['Phase 1: Dig',    '3–4 weeks',     '✅  Complete (days)'],
    ['Phase 2: Define', '4–6 weeks',     'In progress'],
    ['Phase 3: Design', '4–6 weeks',     'Agency-led'],
    ['Deliver / Soft Launch','Through July 1','Agency-led'],
    ['Full CMS Launch', 'October',       'Agency-led'],
  ].forEach(([a,b,c],i) => {
    const bg = i%2===0 ? C.white : C.ltGray;
    setCell(t,i+1,0,a, {bg, color:C.black, size:11});
    setCell(t,i+1,1,b, {bg, color:C.black, align:'CENTER', size:11});
    setCell(t,i+1,2,c, {bg, color:i===0?C.green:C.black, bold:i===0, align:'CENTER', size:11});
  });

  addText(slide,
    "We're not cutting the agency. We're cutting our dependence on them. We arrive at every phase with strategy defined, architecture documented, and audiences mapped — a prepared partner, not a passive client.",
    ML, CY + 182, CW, 50, {size:11, color:C.black});
  addFooter(slide, 19);
}

// ═══════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════
function CONTENT_H() { return H - CY - FH - 8; }

function addContentHeader(slide, title) {
  addText(slide, title, ML, TY, CW, TH, {size:24, bold:true, color:C.black, vAlign:'MIDDLE'});
  addRect(slide, ML, RY, CW, RH, C.gold);
}

function addFooter(slide, pageNum) {
  addRect(slide, 0, FY, W, FH, C.blue);
  addText(slide, 'UNCOMMON', 14, FY + 5,  130, 14, {size:9,  bold:true, color:C.white});
  addRect(slide, 14, FY + 21, 100, 1, C.gold);
  addText(slide, 'SCHOOLS',  14, FY + 24, 130, 12, {size:7,  bold:true, color:C.gold});
  addRect(slide, 14, FY + 37, 100, 1, C.gold);
  addText(slide,
    '© 2026 Uncommon Schools, Inc. All rights reserved.',
    150, FY + 14, W - 220, 18,
    {size:8, color:C.white, align:'CENTER', vAlign:'MIDDLE'});
  if (pageNum !== '') {
    addText(slide, String(pageNum), W - 30, FY + 14, 20, 18,
      {size:9, color:C.white, align:'CENTER', vAlign:'MIDDLE'});
  }
}

function addText(slide, text, x, y, w, h, opts) {
  const shape = slide.insertTextBox(text, x, y, w, h);
  shape.getFill().setTransparent();
  shape.getBorder().setTransparent();
  const tr = shape.getText();
  const ts = tr.getTextStyle();
  if (opts.size)   ts.setFontSize(opts.size);
  if (opts.bold)   ts.setBold(true);
  if (opts.italic) ts.setItalic(true);
  if (opts.color)  ts.setForegroundColor(opts.color);
  const ps = tr.getParagraphStyle();
  if (opts.align === 'CENTER') ps.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
  if (opts.align === 'RIGHT')  ps.setParagraphAlignment(SlidesApp.ParagraphAlignment.END);
  if (opts.vAlign === 'MIDDLE') shape.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE);
  if (opts.vAlign === 'TOP')    shape.setContentAlignment(SlidesApp.ContentAlignment.TOP);
  return shape;
}

function addRect(slide, x, y, w, h, fillColor) {
  const shape = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, x, y, w, h);
  shape.getFill().setSolidFill(fillColor);
  shape.getBorder().setTransparent();
  return shape;
}

function addBullets(slide, items, x, y, w, h, opts) {
  const lines = items.map(item => item.trim() === '' ? '' : '\u2022  ' + item);
  const shape = slide.insertTextBox(lines.join('\n'), x, y, w, h);
  shape.getFill().setTransparent();
  shape.getBorder().setTransparent();
  shape.setContentAlignment(SlidesApp.ContentAlignment.TOP);
  const tr = shape.getText();
  const ts = tr.getTextStyle();
  if (opts.size)  ts.setFontSize(opts.size);
  if (opts.color) ts.setForegroundColor(opts.color);
  return shape;
}

function setCell(table, row, col, text, opts) {
  const cell = table.getCell(row, col);
  if (opts.bg) cell.getFill().setSolidFill(opts.bg);
  const tr = cell.getText();
  tr.setText(text || ' ');
  const ts = tr.getTextStyle();
  if (opts.size)   ts.setFontSize(opts.size);
  if (opts.bold)   ts.setBold(true);
  if (opts.italic) ts.setItalic(true);
  if (opts.color)  ts.setForegroundColor(opts.color);
  if (opts.align === 'CENTER')
    tr.getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
  cell.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE);
}
