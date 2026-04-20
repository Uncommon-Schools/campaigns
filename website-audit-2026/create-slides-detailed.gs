/**
 * Uncommon Schools — Website Redesign: Full Audit Presentation
 * Detailed executive deck — auto-generates in Google Slides
 * Brand: #0033A0 blue, #F2A900 gold, white content area, blue footer
 *
 * HOW TO USE:
 * 1. Open Google Drive → New → Google Apps Script
 * 2. Paste this entire script and save
 * 3. Click Run → createDetailedDeck
 * 4. Authorize when prompted
 * 5. Deck appears in your Drive root
 */

function createDetailedDeck() {
  var presentation = SlidesApp.create("Uncommon Schools — Website Redesign: Full Audit");
  var slides = presentation.getSlides();
  var BLUE = "#0033A0";
  var GOLD = "#F2A900";
  var WHITE = "#FFFFFF";
  var LIGHT_GRAY = "#F4F6FB";
  var DARK_GRAY = "#222222";

  // ─── HELPERS ──────────────────────────────────────────────────────────────

  function setSlideBackground(slide, color) {
    slide.getBackground().setSolidFill(color || WHITE);
  }

  function addFooter(slide, label) {
    var footer = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, 0, 502, 720, 28);
    footer.getFill().setSolidFill(BLUE);
    footer.getBorder().setTransparent();
    var ft = footer.getText();
    ft.setText("© 2026 Uncommon Schools, Inc. All rights reserved.   |   " + (label || ""));
    ft.getTextStyle().setFontSize(8).setForegroundColor(WHITE).setFontFamily("Arial");
    ft.getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.END);
  }

  function addSectionBadge(slide, label, color) {
    var badge = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, 40, 36, 160, 20);
    badge.getFill().setSolidFill(color || GOLD);
    badge.getBorder().setTransparent();
    var bt = badge.getText();
    bt.setText(label.toUpperCase());
    bt.getTextStyle().setFontSize(8).setBold(true).setForegroundColor(BLUE).setFontFamily("Arial");
    bt.getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
  }

  function addTitle(slide, title, y, fontSize, color) {
    var tb = slide.insertTextBox(title, 40, y || 60, 640, 60);
    tb.getText().getTextStyle()
      .setFontSize(fontSize || 28).setBold(true)
      .setForegroundColor(color || BLUE).setFontFamily("Arial");
    return tb;
  }

  function addBody(slide, text, x, y, w, h, fontSize, color) {
    var tb = slide.insertTextBox(text, x || 40, y || 130, w || 640, h || 320);
    tb.getText().getTextStyle()
      .setFontSize(fontSize || 13).setForegroundColor(color || DARK_GRAY).setFontFamily("Arial");
    return tb;
  }

  function addAccentBar(slide, color) {
    var bar = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, 40, 58, 4, 34);
    bar.getFill().setSolidFill(color || GOLD);
    bar.getBorder().setTransparent();
  }

  function addDivider(slide, y, color) {
    var line = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, 40, y || 120, 640, 1);
    line.getFill().setSolidFill(color || GOLD);
    line.getBorder().setTransparent();
  }

  function addCallout(slide, text, x, y, w, h, bgColor) {
    var box = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, x || 40, y || 130, w || 640, h || 40);
    box.getFill().setSolidFill(bgColor || LIGHT_GRAY);
    box.getBorder().setTransparent();
    var bt = box.getText();
    bt.setText(text);
    bt.getTextStyle().setFontSize(11).setForegroundColor(DARK_GRAY).setFontFamily("Arial");
  }

  // ─── SLIDE 1: TITLE ───────────────────────────────────────────────────────
  var s1 = slides[0];
  setSlideBackground(s1, BLUE);
  var title1 = s1.insertTextBox("Website Redesign\nFull Audit Report", 60, 140, 580, 160);
  title1.getText().getTextStyle().setFontSize(44).setBold(true).setForegroundColor(WHITE).setFontFamily("Arial");
  var sub1 = s1.insertTextBox("Technical · Content · UX & Visual\nPhase 01: Dig — Complete", 60, 310, 580, 60);
  sub1.getText().getTextStyle().setFontSize(18).setForegroundColor(GOLD).setFontFamily("Arial");
  var date1 = s1.insertTextBox("April 2026  |  Prepared by the Uncommon AI Team", 60, 420, 580, 30);
  date1.getText().getTextStyle().setFontSize(12).setForegroundColor(WHITE).setFontFamily("Arial");
  var bar1 = s1.insertShape(SlidesApp.ShapeType.RECTANGLE, 60, 130, 6, 200);
  bar1.getFill().setSolidFill(GOLD); bar1.getBorder().setTransparent();

  // ─── SLIDE 2: AGENDA ──────────────────────────────────────────────────────
  var s2 = presentation.appendSlide();
  setSlideBackground(s2, WHITE);
  addAccentBar(s2);
  addTitle(s2, "What's In This Report", 60, 24);
  addDivider(s2, 100);
  addBody(s2,
    "SECTION 1 — The Problem & What We Built (slides 3–4)\n\n" +
    "SECTION 2 — Technical Audit (slides 5–9)\n" +
    "    Infrastructure & CMS · Performance · SEO · AI Readiness · Integration Ecosystem\n\n" +
    "SECTION 3 — Content Audit (slides 10–14)\n" +
    "    Domain Architecture · Audience Mapping · AI Search · Competitive · Strategy\n\n" +
    "SECTION 4 — UX & Visual Audit (slides 15–18)\n" +
    "    Visual Design · Accessibility · Priority Actions · Design Direction\n\n" +
    "SECTION 5 — Cost & Phase Summary (slides 19–20)\n" +
    "    Financial comparison · Phase 02 scope · Open discussion",
    40, 110, 640, 360, 13);
  addFooter(s2, "Agenda");

  // ─── SLIDE 3: THE PROBLEM ─────────────────────────────────────────────────
  var s3 = presentation.appendSlide();
  setSlideBackground(s3, WHITE);
  addSectionBadge(s3, "Section 1 of 5");
  addAccentBar(s3);
  addTitle(s3, "The Problem", 60, 28);
  addDivider(s3, 100);
  addBody(s3,
    "52 schools across 5 cities — 1 Creative Director, 3 designers, 2 PMs.\n\n" +
    "The annual calendar includes: graduation ceremonies, enrollment campaigns, recruitment, " +
    "a 30th anniversary, and a full website redesign — all running simultaneously.\n\n" +
    "Maintaining big-picture strategy while executing day-to-day operations at this volume " +
    "is not feasible without either significantly expanding the team or finding a fundamentally different model.\n\n" +
    "Outside help at this strategic level: hundreds of thousands of dollars and months of ramp-up.\n\n" +
    "We needed a way to scale capacity without scaling headcount.",
    40, 110, 640, 340, 13);
  addFooter(s3, "The Problem");

  // ─── SLIDE 4: WHAT WE BUILT ───────────────────────────────────────────────
  var s4 = presentation.appendSlide();
  setSlideBackground(s4, WHITE);
  addSectionBadge(s4, "Section 1 of 5");
  addAccentBar(s4);
  addTitle(s4, "What We Built", 60, 28);
  addDivider(s4, 100);
  addBody(s4,
    "An in-house AI team built specifically for Uncommon — specialized agents briefed on our org, brand, audiences, and goals.\n\n" +
    "COORDINATOR  —  Oversees the team, assigns work, tracks the pipeline, preps meeting agendas and leadership briefings\n\n" +
    "DEV  —  Technical architecture, engineering audits, platform strategy\n\n" +
    "WRITER  —  Content strategy, copy, SEO, AI search optimization\n\n" +
    "CREATIVE  —  Visual direction, design systems, UX, audience experience\n\n" +
    "The team is self-organizing. Agents coordinate directly with each other. Anthony manages outcomes — not every handoff.",
    40, 110, 640, 350, 13);
  addFooter(s4, "What We Built");

  // ─── SLIDE 5: TECHNICAL AUDIT — INTRO ────────────────────────────────────
  var s5 = presentation.appendSlide();
  setSlideBackground(s5, BLUE);
  var st5 = s5.insertTextBox("Section 2\nTechnical Audit", 60, 160, 580, 120);
  st5.getText().getTextStyle().setFontSize(40).setBold(true).setForegroundColor(WHITE).setFontFamily("Arial");
  var ss5 = s5.insertTextBox("Infrastructure · CMS · Performance · SEO · AI Readiness · Integrations", 60, 290, 580, 40);
  ss5.getText().getTextStyle().setFontSize(15).setForegroundColor(GOLD).setFontFamily("Arial");
  var bar5 = s5.insertShape(SlidesApp.ShapeType.RECTANGLE, 60, 155, 6, 140);
  bar5.getFill().setSolidFill(GOLD); bar5.getBorder().setTransparent();
  addFooter(s5, "Technical Audit");

  // ─── SLIDE 6: TECH — INFRASTRUCTURE & CMS ────────────────────────────────
  var s6 = presentation.appendSlide();
  setSlideBackground(s6, WHITE);
  addSectionBadge(s6, "Technical Audit");
  addAccentBar(s6);
  addTitle(s6, "Infrastructure & CMS — Current State", 60, 24);
  addDivider(s6, 100);
  addBody(s6,
    "HOSTING:  5 separate WordPress installs on WP Engine — no multisite, no shared content, no shared users\n\n" +
    "CDN BYPASS (CRITICAL):  Cloudflare CDN bypassed on ALL pages. The 'handl UTM Grabber' plugin sets 9 cookies per request, forcing cf-cache-status: DYNAMIC. " +
    "This means 141,000+ monthly visitors receive zero CDN benefit. Fix: move UTM tracking to GTM + localStorage.\n\n" +
    "MAINTENANCE OVERHEAD:  5 independent installs = 5x security patching, 5x plugin management, 5x user administration, zero content reuse between sites\n\n" +
    "JS BLOAT:  Thrive Leads + jQuery loaded on every page, including pages with no forms\n\n" +
    "NO IMAGE OPTIMIZATION:  No lazy loading, no WebP, no <picture> tags across any of the 5 installs\n\n" +
    "CACHE TTL:  600 seconds (10 min) — far too short for static pages. Should be 86,400+",
    40, 110, 640, 355, 12);
  addFooter(s6, "Technical Audit — Infrastructure");

  // ─── SLIDE 7: TECH — PERFORMANCE ──────────────────────────────────────────
  var s7 = presentation.appendSlide();
  setSlideBackground(s7, WHITE);
  addSectionBadge(s7, "Technical Audit");
  addAccentBar(s7);
  addTitle(s7, "Performance — Camden Is Broken", 60, 24);
  addDivider(s7, 100);

  addCallout(s7,
    "⚠️  Camden Prep loads in 1,418ms TTFB — 7 to 10× slower than every other regional site.",
    40, 110, 640, 36, "#FFF3CD");

  addBody(s7,
    "BENCHMARK RESULTS:\n\n" +
    "uncommonschools.org      85–247ms TTFB  |  110–125KB HTML  |  Acceptable TTFB, heavy HTML\n" +
    "camdenprep              1,418ms TTFB  |  — KB HTML  |  CRITICAL — requires immediate investigation\n" +
    "nyc / rochester / northstar   ~100–300ms TTFB  |  ~110–125KB HTML  |  Consistent with main\n\n" +
    "SHARED ISSUES ACROSS ALL SITES:\n" +
    "  ·  No WebP images\n" +
    "  ·  No lazy loading\n" +
    "  ·  No <picture> tags\n" +
    "  ·  HTML payloads 2–4× over target\n" +
    "  ·  CDN bypassed entirely — see Infrastructure\n\n" +
    "IMPACT:  Slow sites increase bounce rate, harm SEO rankings, and reduce enrollment form completions.",
    40, 155, 640, 310, 12);
  addFooter(s7, "Technical Audit — Performance");

  // ─── SLIDE 8: TECH — SEO DIAGNOSTICS ─────────────────────────────────────
  var s8 = presentation.appendSlide();
  setSlideBackground(s8, WHITE);
  addSectionBadge(s8, "Technical Audit");
  addAccentBar(s8);
  addTitle(s8, "SEO — Multiple Live Failures", 60, 24);
  addDivider(s8, 100);
  addBody(s8,
    "HOMEPAGE TITLE:  'Homepage - Uncommon Schools' — not keyword-optimized\n\n" +
    "MULTIPLE H1 TAGS:  3× H1 on homepage from rotating hero banners — Google sees duplicate primary headings. Also a WCAG violation.\n\n" +
    "MISSING META DESCRIPTIONS:  /enroll/ and /careers/ — two of the highest-traffic conversion pages\n\n" +
    "BROKEN SPANISH TRANSLATION:  Spanish /es/ translation is live but serves English content with an es-MX language tag. " +
    "Google sees this as duplicate content. Screen readers announce Spanish that is actually English. " +
    "This is a legal accessibility risk and a direct failure to serve Spanish-speaking families.\n\n" +
    "ROBOTS.TXT CONFLICT:  Two conflicting User-agent blocks — crawl behavior is unpredictable. " +
    "Crawl-delay: 10 set — slows Googlebot unnecessarily across 3,843+ indexed URLs.\n\n" +
    "INCONSISTENT SEO PLUGINS:  Main domain uses Yoast. Subdomains use All in One SEO. " +
    "Fragmented meta tags, OG data, and sitemap behavior across the network.",
    40, 110, 640, 355, 12);
  addFooter(s8, "Technical Audit — SEO");

  // ─── SLIDE 9: TECH — AI READINESS ─────────────────────────────────────────
  var s9 = presentation.appendSlide();
  setSlideBackground(s9, WHITE);
  addSectionBadge(s9, "Technical Audit");
  addAccentBar(s9);
  addTitle(s9, "AI Readiness — We Are Invisible", 60, 24);
  addDivider(s9, 100);

  addCallout(s9,
    "⚠️  All 5 Uncommon domains serve Camden Prep's llms.txt content. Google AI, ChatGPT, and Perplexity all read the wrong organization.",
    40, 110, 640, 36, "#FFF3CD");

  addBody(s9,
    "AI SEARCH ENGINES (ChatGPT, Perplexity, Google AI Overview) read llms.txt to understand an organization before surfacing answers. " +
    "Every Uncommon domain points to Camden Prep's file. The entire network is misrepresented to AI search.\n\n" +
    "NO STRUCTURED DATA:  No Organization schema, no EducationalOrganization schema, no FAQ schema, no Article markup.\n\n" +
    "KEY STATS ARE INVISIBLE:  '20,000+ students,' '52 schools,' '95% Black or Latino' — none of this is machine-readable. " +
    "AI engines cannot extract or surface these facts.\n\n" +
    "NO AI BOT POLICY:  GPTBot, Claude-Web, PerplexityBot not addressed in robots.txt — behavior undefined.\n\n" +
    "ROOT CAUSE:  AIOSEO on subdomains + Yoast on main = fragmented, inconsistent llms.txt generation with no unified output.",
    40, 155, 640, 300, 12);
  addFooter(s9, "Technical Audit — AI Readiness");

  // ─── SLIDE 10: TECH — INTEGRATIONS ────────────────────────────────────────
  var s10 = presentation.appendSlide();
  setSlideBackground(s10, WHITE);
  addSectionBadge(s10, "Technical Audit");
  addAccentBar(s10);
  addTitle(s10, "Integration Ecosystem", 60, 24);
  addDivider(s10, 100);
  addBody(s10,
    "ACTIVE — LOW MIGRATION RISK:\n" +
    "  ·  GTM-K6VDVNK  ·  GA4 G-1Z558Q2T6W  ·  Hotjar  ·  Facebook Pixel  ·  FundraiseUp  ·  MonsterInsights (redundant — remove)\n\n" +
    "ACTIVE — MEDIUM MIGRATION RISK:\n" +
    "  ·  Gravity Forms v2.9.29 → rebuild as Drupal Webform\n" +
    "  ·  Thrive Leads v10.8.8 → replace with JS component\n" +
    "  ·  Yoast / AIOSEO → Drupal Metatag module\n" +
    "  ·  handl UTM Grabber → recreate in GTM (also breaks CDN — remove immediately)\n\n" +
    "ACTIVE — HIGH MIGRATION RISK:\n" +
    "  ·  SmartRecruiters — custom API integration, full rebuild required\n" +
    "  ·  TranslatePress v3.1.2 — active but broken (Spanish serving English). Drupal multilingual is a native replacement.\n\n" +
    "UNCONFIRMED — BLOCKING PHASE 02:\n" +
    "  ·  Lever (detected in codebase — is it active or legacy?)\n" +
    "  ·  Avela + SchoolMint (enrollment flow — where do they appear?)\n" +
    "  ·  Salesforce (not detected on-page — confirm integration point)\n" +
    "  ·  GA4 G-X5WHC48ND7 (unknown property — what is it tracking?)",
    40, 110, 640, 360, 11.5);
  addFooter(s10, "Technical Audit — Integrations");

  // ─── SLIDE 11: TECH — RECOMMENDATION ─────────────────────────────────────
  var s11 = presentation.appendSlide();
  setSlideBackground(s11, WHITE);
  addSectionBadge(s11, "Technical Audit");
  addAccentBar(s11);
  addTitle(s11, "Recommendation: Drupal 10 on Pantheon", 60, 24);
  addDivider(s11, 100);
  addBody(s11,
    "WHY DRUPAL 10:\n" +
    "  ·  Open source — no license fee\n" +
    "  ·  Native multisite — one codebase manages all 9 domains simultaneously\n" +
    "  ·  Native multilingual — replaces broken TranslatePress with a core-supported solution\n" +
    "  ·  Metatag + Schema.org + Pathauto modules provide full SEO and AI readiness coverage\n" +
    "  ·  Strong Salesforce, SmartRecruiters, and Webform modules exist\n" +
    "  ·  Endorsed by Lippincott (our design partner for Phases 3–4)\n\n" +
    "WHY PANTHEON (Performance tier, ~$200–400/month):\n" +
    "  ·  Purpose-built for Drupal multisite\n" +
    "  ·  Global CDN is not cookie-dependent — solves the UTM bypass issue permanently\n" +
    "  ·  Built-in multidev environments for staging and QA\n" +
    "  ·  Automated backups and one-click upstream updates\n" +
    "  ·  Likely replaces 5 separate WP Engine instances at lower total cost\n\n" +
    "ALTERNATIVES EVALUATED:  Webflow (too limited at scale), Sanity (high dev cost), Payload (early stage). " +
    "Drupal 10 is the clear recommendation for a network of this complexity.",
    40, 110, 640, 355, 12);
  addFooter(s11, "Technical Audit — Recommendation");

  // ─── SLIDE 12: CONTENT AUDIT INTRO ───────────────────────────────────────
  var s12 = presentation.appendSlide();
  setSlideBackground(s12, BLUE);
  var st12 = s12.insertTextBox("Section 3\nContent Audit", 60, 160, 580, 120);
  st12.getText().getTextStyle().setFontSize(40).setBold(true).setForegroundColor(WHITE).setFontFamily("Arial");
  var ss12 = s12.insertTextBox("Architecture · Audience Mapping · AI Search · Competitive · Strategy", 60, 290, 580, 40);
  ss12.getText().getTextStyle().setFontSize(15).setForegroundColor(GOLD).setFontFamily("Arial");
  var bar12 = s12.insertShape(SlidesApp.ShapeType.RECTANGLE, 60, 155, 6, 140);
  bar12.getFill().setSolidFill(GOLD); bar12.getBorder().setTransparent();
  addFooter(s12, "Content Audit");

  // ─── SLIDE 13: CONTENT — ARCHITECTURE ────────────────────────────────────
  var s13 = presentation.appendSlide();
  setSlideBackground(s13, WHITE);
  addSectionBadge(s13, "Content Audit");
  addAccentBar(s13);
  addTitle(s13, "Architecture — A Broken Dual System", 60, 24);
  addDivider(s13, 100);
  addCallout(s13,
    "Critical: Regional content exists both on the main domain (/regions/nyc/) AND on separate subdomains (nyc.uncommonschools.org). Neither is complete. Split authority, duplicate content, user confusion.",
    40, 110, 640, 44, "#FFF3CD");
  addBody(s13,
    "CONFIRMED DOMAINS:  uncommonschools.org (~300 pages) · nyc · roxburyprep (Boston) · rochesterprep · northstar (Newark) · camdenprep\n" +
    "HS CURRICULUM HUB:  hscurriculum.uncommonschools.org — separate product, disconnected from main brand\n" +
    "TOTAL ESTIMATED PAGES:  800–1,000+ when all domains included (internal count of 384 reflects main domain only)\n" +
    "4 DOMAINS STILL UNCONFIRMED — blocking full Phase 02 scope\n\n" +
    "THE CORE PROBLEM:\n" +
    "  ·  A family starting at uncommonschools.org hits dead-end /regions/ archive pages with no enrollment info\n" +
    "  ·  A family who Googles 'Uncommon Schools NYC enroll' lands on a subdomain that isn't discoverable from main nav\n" +
    "  ·  52 school pages — nearly all created February 2018 — average ~200 words, essentially identical in structure\n\n" +
    "RECOMMENDATION:  Collapse the dual architecture. Establish regional subdomains as canonical for regional content, " +
    "with strong cross-linking from the main domain. Redirect all /regions/ taxonomy pages.",
    40, 162, 640, 295, 11.5);
  addFooter(s13, "Content Audit — Architecture");

  // ─── SLIDE 14: CONTENT — AUDIENCE MAPPING ────────────────────────────────
  var s14 = presentation.appendSlide();
  setSlideBackground(s14, WHITE);
  addSectionBadge(s14, "Content Audit");
  addAccentBar(s14);
  addTitle(s14, "Audience Mapping — Three Paths, None Clear", 60, 24);
  addDivider(s14, 100);
  addBody(s14,
    "FAMILIES — What's missing:\n" +
    "  ·  Enroll CTA buried under 'Our Schools' — should be primary nav or hero\n" +
    "  ·  Individual school pages don't help families evaluate schools — all 52 are virtually identical\n" +
    "  ·  No Spanish-language content — 95% of students are Black or Latino; a significant portion of families are Spanish-speaking\n" +
    "  ·  No grade-level guidance — a parent of a 5th grader has different questions than a parent of a 9th grader\n\n" +
    "EDUCATORS (Prospective + Current) — What's missing:\n" +
    "  ·  'Why Uncommon?' is a dropdown item — it should be a flagship recruitment narrative page\n" +
    "  ·  No connection between thought leadership (Teach Like a Champion, Uncommon Sense) and career recruitment\n" +
    "  ·  Uncommon Sense, Books, and HS Curriculum Hub exist in silos — no unified educator content hub\n\n" +
    "DONORS — What's missing:\n" +
    "  ·  Alumni Impact page 404s — this is the primary emotional proof point for donors and it goes nowhere\n" +
    "  ·  No annual/impact report equivalent on site\n" +
    "  ·  No major donor pathway, no foundation/grants section\n" +
    "  ·  Giving amounts on donate page lack full-arc impact stories",
    40, 110, 640, 355, 11.5);
  addFooter(s14, "Content Audit — Audience Mapping");

  // ─── SLIDE 15: CONTENT — AI SEARCH ───────────────────────────────────────
  var s15 = presentation.appendSlide();
  setSlideBackground(s15, WHITE);
  addSectionBadge(s15, "Content Audit");
  addAccentBar(s15);
  addTitle(s15, "AI Search — We Don't Own Our Own Answers", 60, 24);
  addDivider(s15, 100);
  addCallout(s15,
    "Testing top queries against ChatGPT, Perplexity, and Google AI Overview: Uncommon is not the source for any of them.",
    40, 110, 640, 30, "#FFF3CD");
  addBody(s15,
    "QUERY:  'Best charter school network'  →  AI cites US News, Niche, Fordham — not Uncommon\n" +
    "QUERY:  'How to enroll in charter school NYC'  →  SchoolMint and NYC DOE; Uncommon not primary answer\n" +
    "QUERY:  'College prep charter school Newark'  →  Niche.com; North Star in third-party context only\n" +
    "QUERY:  'Best schools for Black students college prep'  →  Third parties; Uncommon not present despite perfect mission match\n\n" +
    "ROOT CAUSES:\n" +
    "  ·  Homepage is video-heavy — almost no crawlable text for AI to extract from\n" +
    "  ·  No FAQ schema markup — /faq/ has good content but AI engines can't parse it as Q&A\n" +
    "  ·  No topic authority pages — no page definitively answers 'what is the Uncommon model?'\n" +
    "  ·  Blog content is essay-format — AI engines prefer direct answers at the top\n\n" +
    "10 HIGH-PRIORITY TOPICS WE SHOULD OWN:\n" +
    "  How to enroll in charter school by city · What is the Uncommon model · College acceptance rates at charter schools · " +
    "Charter lottery explained · Teaching jobs at charter schools · Best schools for Black and Latino students · " +
    "AP courses at charter schools · Teach Like a Champion connection · Special education at charter schools · " +
    "What support do charter schools provide",
    40, 148, 640, 315, 11.5);
  addFooter(s15, "Content Audit — AI Search Readiness");

  // ─── SLIDE 16: CONTENT — COMPETITIVE ─────────────────────────────────────
  var s16 = presentation.appendSlide();
  setSlideBackground(s16, WHITE);
  addSectionBadge(s16, "Content Audit");
  addAccentBar(s16);
  addTitle(s16, "Competitive — Where We Win, Where We Don't", 60, 24);
  addDivider(s16, 100);
  addBody(s16,
    "VS. KIPP (primary peer — 279 schools, 210,000+ students):\n" +
    "  ✅  We win:  Our college outcome claim (96%, CREDO-verified) is stronger — KIPP doesn't have an equivalent stat\n" +
    "  ✅  We win:  Teach Like a Champion thought leadership ecosystem is a moat KIPP doesn't have\n" +
    "  ❌  They win:  Alumni testimonials are better surfaced on KIPP's homepage\n" +
    "  ❌  They win:  Larger content footprint = more inbound links = stronger AI search authority\n\n" +
    "OUTSIDE-SECTOR EXEMPLARS — WHAT TO ADOPT:\n\n" +
    "  College Board:  Audience segmentation (Students | K-12 Educators | Higher Ed | Counselors) — adopt this nav model\n\n" +
    "  Year Up:  Full-arc student stories (before → program → outcome) — adopt this storytelling structure\n\n" +
    "  Khan Academy:  Answer-first content structure, searchable content library — adopt for blog + Curriculum Hub\n\n" +
    "  University of Michigan:  Alumni network engagement, named funds, full donor ecosystem — model our donor section on this",
    40, 110, 640, 355, 12);
  addFooter(s16, "Content Audit — Competitive");

  // ─── SLIDE 17: UX/VISUAL INTRO ────────────────────────────────────────────
  var s17 = presentation.appendSlide();
  setSlideBackground(s17, BLUE);
  var st17 = s17.insertTextBox("Section 4\nUX & Visual Audit", 60, 160, 580, 120);
  st17.getText().getTextStyle().setFontSize(40).setBold(true).setForegroundColor(WHITE).setFontFamily("Arial");
  var ss17 = s17.insertTextBox("Visual Design · Accessibility · Priority Actions · Design Direction", 60, 290, 580, 40);
  ss17.getText().getTextStyle().setFontSize(15).setForegroundColor(GOLD).setFontFamily("Arial");
  var bar17 = s17.insertShape(SlidesApp.ShapeType.RECTANGLE, 60, 155, 6, 140);
  bar17.getFill().setSolidFill(GOLD); bar17.getBorder().setTransparent();
  addFooter(s17, "UX & Visual Audit");

  // ─── SLIDE 18: VISUAL DESIGN ──────────────────────────────────────────────
  var s18 = presentation.appendSlide();
  setSlideBackground(s18, WHITE);
  addSectionBadge(s18, "UX & Visual Audit");
  addAccentBar(s18);
  addTitle(s18, "Visual Design — Underperforming the Brand", 60, 24);
  addDivider(s18, 100);
  addCallout(s18, "Overall Visual Rating: 5/10 — The brand has been refreshed; the site is not consistently expressing it.", 40, 110, 640, 30, LIGHT_GRAY);
  addBody(s18,
    "SCORES BY DIMENSION:\n" +
    "  Photography                8/10    —  Strongest existing asset; high quality, authentic student imagery. Currently underused.\n" +
    "  Typography                 6/10    —  Improved at brand level. Inconsistently applied across pages.\n" +
    "  Color system               6/10    —  Color refresh exists at brand level. Not uniformly applied.\n" +
    "  Component consistency      4/10    —  Components are inconsistent across pages and regional sites.\n" +
    "  Brand cohesion across regions   3/10    —  Regional sites feel like separate brands.\n\n" +
    "KEY FINDINGS:\n" +
    "  ·  The CREDO claim ('greatest academic gains of any large charter network') is buried in body text on /about-us/\n" +
    "  ·  Homepage leads with a video loop that doesn't communicate student outcomes\n" +
    "  ·  No documented design system or component library being applied across sites\n" +
    "  ·  No full-arc student storytelling — journey from enrollment to college graduation is not told visually\n\n" +
    "RECOMMENDATION:  Build a design system (color tokens, type scale, component library, spacing system). " +
    "Apply uniformly. Lead with photography. Anchor the CREDO claim on homepage, about, and donor pages.",
    40, 148, 640, 315, 11.5);
  addFooter(s18, "UX & Visual Audit — Visual Design");

  // ─── SLIDE 19: ACCESSIBILITY ──────────────────────────────────────────────
  var s19 = presentation.appendSlide();
  setSlideBackground(s19, WHITE);
  addSectionBadge(s19, "UX & Visual Audit");
  addAccentBar(s19);
  addTitle(s19, "Accessibility — Live Violations (WCAG 2.2 AA)", 60, 24);
  addDivider(s19, 100);
  addCallout(s19,
    "Title II ADA compliance applies. Several violations are live today and represent legal exposure.",
    40, 110, 640, 28, "#FFF3CD");
  addBody(s19,
    "🔴  CRITICAL — Video autoplay with audio (WCAG 1.4.2)\n" +
    "     Homepage hero video plays with sound automatically. No pause/stop control visible. Live violation.\n\n" +
    "🔴  CRITICAL — Spanish translation failure (WCAG 3.1.2)\n" +
    "     Spanish /es/ pages are tagged es-MX but serve English content. Screen readers announce Spanish and read English. " +
    "     Serves zero Spanish-speaking families despite 95% Black/Latino student population.\n\n" +
    "🟠  HIGH — 3× H1 tags on homepage (WCAG 1.3.1)\n" +
    "     Rotating hero banners generate multiple H1 elements. Structural failure for both SEO and screen readers.\n\n" +
    "🟠  HIGH — Missing alt text on multiple homepage images (WCAG 1.1.1)\n" +
    "     4 images found without alternative text.\n\n" +
    "🟡  MEDIUM — Low contrast ratios in footer (WCAG 1.4.3)\n\n" +
    "🟡  MEDIUM — Form inputs potentially unlabeled (WCAG 1.3.1) — 8 found on homepage\n\n" +
    "⚠️  PENDING:  Full keyboard navigation, color contrast, and focus indicator audit (Phase 02 scope)",
    40, 145, 640, 320, 11.5);
  addFooter(s19, "UX & Visual Audit — Accessibility");

  // ─── SLIDE 20: UX PRIORITY ACTIONS ───────────────────────────────────────
  var s20 = presentation.appendSlide();
  setSlideBackground(s20, WHITE);
  addSectionBadge(s20, "UX & Visual Audit");
  addAccentBar(s20);
  addTitle(s20, "Priority Action List", 60, 24);
  addDivider(s20, 100);
  addBody(s20,
    "🔴  IMMEDIATE (fix before Phase 02 begins):\n" +
    "  ·  Repair Alumni Impact 404 — primary donor conversion path goes nowhere\n" +
    "  ·  Fix Spanish translation — es-MX lang tag serving English content\n" +
    "  ·  Disable video autoplay with audio — live WCAG violation\n" +
    "  ·  Remove handl UTM Grabber — breaks Cloudflare CDN for all 141K monthly visitors\n" +
    "  ·  Unify llms.txt — all domains pointing to Camden Prep content\n\n" +
    "🟠  PHASE 02 (April 14 – May 23):\n" +
    "  ·  Redesign enrollment page — currently one sentence of content on the highest-priority conversion path\n" +
    "  ·  Add audience gateway to homepage (Families | Educators | Donors)\n" +
    "  ·  Anchor CREDO claim on homepage\n" +
    "  ·  Fix H1 structure site-wide\n" +
    "  ·  Add FAQ schema markup to all Q&A content\n" +
    "  ·  Build design system + component library\n" +
    "  ·  Begin school page template redesign (52 pages to update)\n\n" +
    "🟡  SUMMER:\n" +
    "  ·  Align all regional sub-sites to unified design system\n" +
    "  ·  Spanish-language enrollment content\n" +
    "  ·  Create Alumni Impact section\n" +
    "  ·  AI readiness: structured data layer, topic authority pages",
    40, 110, 640, 355, 11.5);
  addFooter(s20, "UX & Visual Audit — Priority Actions");

  // ─── SLIDE 21: PHASE 02 DESIGN DIRECTION ─────────────────────────────────
  var s21 = presentation.appendSlide();
  setSlideBackground(s21, WHITE);
  addSectionBadge(s21, "UX & Visual Audit");
  addAccentBar(s21);
  addTitle(s21, "Phase 02 Design Direction", 60, 24);
  addDivider(s21, 100);
  addBody(s21,
    "VISUAL TONE:  Bold. Warm. Editorial. Not institutional. Not corporate. Not generic nonprofit.\n" +
    "The brand has real assets: photography, a compelling mission, and verified data. " +
    "The design should make all three impossible to miss.\n\n" +
    "TWO NAVIGATION CONCEPTS TO BE DEVELOPED IN PHASE 02:\n\n" +
    "  Concept A — Audience-First Gateway\n" +
    "  Homepage leads with audience selector. Each path (Families / Educators / Donors) has tailored content and CTAs.\n" +
    "  Tested by: College Board, Year Up, KIPP NJ\n\n" +
    "  Concept B — Outcome-First Hero\n" +
    "  CREDO performance claim is the first thing visitors see. Everything else flows from that proof.\n" +
    "  Tested by: Leading charter networks and nonprofit impact organizations\n\n" +
    "PHASE 02 CREATIVE DELIVERABLES:\n" +
    "  ·  2 navigation concepts (A vs. B above)\n" +
    "  ·  Wireframes: up to 10 page templates, up to 25 module types\n" +
    "  ·  UX interaction flows: enrollment, donation, school finder\n" +
    "  ·  3 audience archetypes: The Searching Parent · The Mission Donor · The Educator\n" +
    "  ·  Design system foundation: color tokens, type scale, component library\n\n" +
    "TIMELINE:  April 14 – May 23, 2026  |  Requires Anthony + leadership sign-off to proceed",
    40, 110, 640, 355, 12);
  addFooter(s21, "UX & Visual Audit — Design Direction");

  // ─── SLIDE 22: COST SECTION ───────────────────────────────────────────────
  var s22 = presentation.appendSlide();
  setSlideBackground(s22, BLUE);
  var st22 = s22.insertTextBox("Section 5\nCost & Phase Summary", 60, 160, 580, 120);
  st22.getText().getTextStyle().setFontSize(40).setBold(true).setForegroundColor(WHITE).setFontFamily("Arial");
  var ss22 = s22.insertTextBox("Financial Comparison · Phase Timeline · Open Discussion", 60, 290, 580, 40);
  ss22.getText().getTextStyle().setFontSize(15).setForegroundColor(GOLD).setFontFamily("Arial");
  var bar22 = s22.insertShape(SlidesApp.ShapeType.RECTANGLE, 60, 155, 6, 140);
  bar22.getFill().setSolidFill(GOLD); bar22.getBorder().setTransparent();
  addFooter(s22, "Cost & Phase Summary");

  // ─── SLIDE 23: FINANCIAL COMPARISON ──────────────────────────────────────
  var s23 = presentation.appendSlide();
  setSlideBackground(s23, WHITE);
  addSectionBadge(s23, "Cost Summary");
  addAccentBar(s23);
  addTitle(s23, "What We Saved — Phase by Phase", 60, 24);
  addDivider(s23, 100);
  addBody(s23,
    "LIPPINCOTT PROPOSAL (Full Agency, All Phases):\n" +
    "  Phase 1: Dig        Audits, research, stakeholder interviews          $125,000   3–4 weeks\n" +
    "  Phase 2: Define     Archetypes, content strategy, SEO, wireframes     $175,000   4–6 weeks\n" +
    "  Phase 3: Design     Design system, page layouts, motion, copy         $225,000   4–6 weeks\n" +
    "  Phase 4: Deliver    Full build, QA, launch                            $325,000   Through July 1\n" +
    "  TOTAL                                                                  $750,000   7+ months\n\n" +
    "OUR APPROACH:\n" +
    "  Phase 1: Dig        Full technical + content + UX audit                  $500 in AI credits   Days\n" +
    "  Phase 2: Define     Architecture, content strategy, wireframes           $500 in AI credits   Underway (due May 23)\n" +
    "  Phase 3: Design     Agency-led with our architecture + strategy ready    TBD (agency quote)\n" +
    "  Phase 4: Deliver    Agency-led build + QA + launch                       TBD (agency quote)\n\n" +
    "WHAT WE ARRIVE WITH WHEN WE ENGAGE THE AGENCY:\n" +
    "  Full technical audit · CMS recommendation (Drupal 10) · Integration map · Content architecture · " +
    "Audience framework · SEO/AEO strategy · Design direction · Wireframes · Site taxonomy\n\n" +
    "We are not cutting the agency for design and build. We are arriving as a prepared partner — not a passive client.",
    40, 110, 640, 355, 11.5);
  addFooter(s23, "Cost Summary");

  // ─── SLIDE 24: WHAT'S NEXT ────────────────────────────────────────────────
  var s24 = presentation.appendSlide();
  setSlideBackground(s24, WHITE);
  addSectionBadge(s24, "Next Steps");
  addAccentBar(s24);
  addTitle(s24, "What's Next", 60, 24);
  addDivider(s24, 100);
  addBody(s24,
    "IMMEDIATE (This Week):\n" +
    "  ·  Fix Alumni Impact 404\n" +
    "  ·  Fix Spanish translation (es-MX serving English)\n" +
    "  ·  Fix video autoplay\n" +
    "  ·  Remove handl UTM Grabber plugin\n" +
    "  ·  Unify llms.txt across all domains\n" +
    "  ·  Resolve 5 blocking questions (Boston domain, Lever vs. SmartRecruiters, Avela/SchoolMint, GA4 property, 9th domain)\n\n" +
    "PHASE 02 — DEFINE (April 14 – May 23, 2026):\n" +
    "  ·  2 navigation concepts + audience archetypes\n" +
    "  ·  10 wireframe templates + 25 modules\n" +
    "  ·  Full content architecture + URL taxonomy\n" +
    "  ·  SEO/AEO keyword strategy + 10 topic authority page plans\n" +
    "  ·  Design system foundation\n" +
    "  ·  Drupal 10 architecture spec\n" +
    "  ·  Stakeholder review before Phase 03\n\n" +
    "PHASE 03 ONWARDS (Agency-led, June 20 forward):\n" +
    "  Design system · Page design · Copy · Build · QA · Soft launch July 1 · Full launch September 15",
    40, 110, 640, 355, 12);
  addFooter(s24, "Next Steps");

  // ─── SLIDE 25: OPEN DISCUSSION ────────────────────────────────────────────
  var s25 = presentation.appendSlide();
  setSlideBackground(s25, BLUE);
  var st25 = s25.insertTextBox("Open for Discussion.", 60, 180, 580, 80);
  st25.getText().getTextStyle().setFontSize(44).setBold(true).setForegroundColor(WHITE).setFontFamily("Arial");
  var ss25 = s25.insertTextBox(
    "Questions · Priorities · Decisions needed\n\n" +
    "Full audit available at:\ngithub.com/Uncommon-Schools/website-audit-2026",
    60, 275, 580, 100);
  ss25.getText().getTextStyle().setFontSize(16).setForegroundColor(GOLD).setFontFamily("Arial");
  var bar25 = s25.insertShape(SlidesApp.ShapeType.RECTANGLE, 60, 175, 6, 180);
  bar25.getFill().setSolidFill(GOLD); bar25.getBorder().setTransparent();
  addFooter(s25, "Uncommon Schools — Website Audit 2026");

  Logger.log("✅ Detailed deck created: " + presentation.getUrl());
  return presentation.getUrl();
}
