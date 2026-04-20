/**
 * Uncommon Schools — AI Showcase: Gemini as a Design Thought Partner
 * Created: April 20, 2026
 * Presenter: Anthony Emezu, Creative Director
 * ─────────────────────────────────────────────────────────────────
 * HOW TO RUN:
 *   1. Go to https://script.google.com
 *   2. Click "New project"
 *   3. Delete all existing code
 *   4. Paste this entire file
 *   5. Save (Cmd+S), then click ▶ Run → createAIShowcaseDeck
 *   6. Approve permissions when prompted
 *   7. Find the deck in Google Drive
 *
 * AFTER RUNNING:
 *   - Slide 3 has a placeholder box — replace with your Gemini screenshot(s)
 *   - Add the Uncommon logo image to each footer if needed
 */

const W = 720, H = 405;

const C = {
  blue:   '#0033A0',
  gold:   '#F2A900',
  white:  '#FFFFFF',
  black:  '#000000',
  gray:   '#4A4A4A',
  ltGray: '#F5F7FA',
  altRow: '#EEF1F8'
};

const MARGIN_L  = 48;
const MARGIN_R  = 48;
const CONTENT_W = W - MARGIN_L - MARGIN_R;
const TITLE_Y   = 26;
const TITLE_H   = 40;
const RULE_Y    = 70;
const RULE_H    = 3;
const CONTENT_Y = 82;
const FOOTER_Y  = H - 52;
const FOOTER_H  = 52;

// ═══════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════
function createAIShowcaseDeck() {
  const pres = SlidesApp.create('AI Showcase — Gemini as a Design Thought Partner');
  const existing = pres.getSlides();
  existing[0].getPageElements().forEach(el => el.remove());

  const s = [existing[0]];
  for (let i = 0; i < 3; i++) s.push(pres.appendSlide(SlidesApp.PredefinedLayout.BLANK));

  slide01_Problem(s[0]);
  slide02_Approach(s[1]);
  slide03_PromptExample(s[2]);
  slide04_Impact(s[3]);

  Logger.log('✅ Done! ' + pres.getUrl());
}

// ─── SLIDE 1: PROBLEM STATEMENT ──────────────────────────────────────────────
function slide01_Problem(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'The Problem');

  // Large problem statement text
  addText(slide,
    'Every design project starts with the same pressure: make fast decisions that are visually right and defensible.',
    MARGIN_L, CONTENT_Y, CONTENT_W, 44,
    {size: 13, color: C.gray, italic: true});

  addBullets(slide, [
    'As Creative Director, I\'m making color, typography, and visual hierarchy decisions across dozens of projects simultaneously',
    'Each decision needs to work — for the audience, the brand, the message — with limited time to go deep on theory',
    'Intuition gets you far, but it\'s hard to articulate, hard to teach, and hard to pressure-test when you\'re moving fast',
    ' ',
    'I needed a thought partner who could meet me where I am in the process and push the thinking forward'
  ], MARGIN_L, CONTENT_Y + 52, CONTENT_W, 170,
    {size: 12, color: C.black, lastBold: true});

  addFooter(slide, 1);
}

// ─── SLIDE 2: THE APPROACH ────────────────────────────────────────────────────
function slide02_Approach(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'The Approach: Gemini as Thought Partner');

  addText(slide,
    'I use Gemini to develop color theory and visual concepts — not to generate final outputs, but to sharpen my own thinking.',
    MARGIN_L, CONTENT_Y, CONTENT_W, 30,
    {size: 12, italic: true, color: C.gray});

  // Step boxes
  const steps = [
    ['1', 'Set the Context', 'Project parameters, primary colors, typography requirements, audience, and emotional tone'],
    ['2', 'Share the Research', 'Pinterest boards, past project examples, brand references — give Gemini what you\'re reacting to'],
    ['3', 'Ask the Right Questions', '"What color relationships would reinforce this feeling?" "How would you describe the tension between these two palettes?" "What am I missing?"'],
    ['4', 'Refine the Direction', 'Take the theory back into the work. The creative judgment is still mine — Gemini just removed the blank page']
  ];

  const boxH = 56;
  const boxGap = 8;
  const startY = CONTENT_Y + 36;

  steps.forEach(([num, title, desc], i) => {
    const y = startY + i * (boxH + boxGap);
    addRect(slide, MARGIN_L, y, 32, boxH, C.blue);
    addText(slide, num, MARGIN_L, y, 32, boxH,
      {size: 18, bold: true, color: C.white, vAlign: 'MIDDLE', align: 'CENTER'});
    addRect(slide, MARGIN_L + 32, y, CONTENT_W - 32, boxH, C.ltGray);
    addText(slide, title, MARGIN_L + 40, y + 6, CONTENT_W - 48, 18,
      {size: 11, bold: true, color: C.blue});
    addText(slide, desc, MARGIN_L + 40, y + 22, CONTENT_W - 48, 30,
      {size: 10, color: C.gray});
  });

  addFooter(slide, 2);
}

// ─── SLIDE 3: PROMPT EXAMPLE ──────────────────────────────────────────────────
function slide03_PromptExample(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'Prompt Example');

  // Left: context text
  const leftW = Math.floor(CONTENT_W * 0.4);
  const rightW = CONTENT_W - leftW - 16;
  const rightX = MARGIN_L + leftW + 16;

  addText(slide, 'The prompt', MARGIN_L, CONTENT_Y, leftW, 18,
    {size: 10, bold: true, color: C.blue});

  addBullets(slide, [
    'Project type and audience stated upfront',
    'Primary and secondary colors named',
    'Emotional tone described ("warm but authoritative")',
    'Reference images described or linked',
    'Specific question asked — not "what looks good" but "why does this work"'
  ], MARGIN_L, CONTENT_Y + 20, leftW, 150,
    {size: 10, color: C.black});

  addText(slide, 'What comes back', MARGIN_L, CONTENT_Y + 178, leftW, 18,
    {size: 10, bold: true, color: C.blue});

  addBullets(slide, [
    'Color theory rationale, not just a palette',
    'Named relationships: complementary, analogous, split-complementary',
    'Specific adjustments with reasons',
    'Language I can use to brief the team'
  ], MARGIN_L, CONTENT_Y + 198, leftW, 100,
    {size: 10, color: C.black});

  // Right: screenshot placeholder
  addRect(slide, rightX, CONTENT_Y, rightW, 248, '#E8ECF5');
  addText(slide, '[ Screenshot: Gemini prompt + response ]',
    rightX, CONTENT_Y, rightW, 248,
    {size: 11, italic: true, color: '#8896BC', align: 'CENTER', vAlign: 'MIDDLE'});

  // Dashed border effect (approximated with thin rect outline)
  addRect(slide, rightX, CONTENT_Y, rightW, 2, '#8896BC');
  addRect(slide, rightX, CONTENT_Y + 246, rightW, 2, '#8896BC');
  addRect(slide, rightX, CONTENT_Y, 2, 248, '#8896BC');
  addRect(slide, rightX + rightW - 2, CONTENT_Y, 2, 248, '#8896BC');

  addFooter(slide, 3);
}

// ─── SLIDE 4: IMPACT ──────────────────────────────────────────────────────────
function slide04_Impact(slide) {
  slide.getBackground().setSolidFill(C.blue);

  // Uncommon wordmark
  addText(slide, 'UNCOMMON', 48, 28, 240, 20, {size: 13, bold: true, color: C.white});
  addRect(slide, 48, 50, 180, 2, C.gold);
  addText(slide, 'SCHOOLS', 48, 54, 240, 16, {size: 9, bold: true, color: C.gold});
  addRect(slide, 48, 70, 180, 2, C.gold);

  // Central quote
  addText(slide,
    'The biggest value isn\'t that AI replaces the creative process —\nit\'s that it gives you a thought partner\nwho always starts with the theory.',
    MARGIN_L, 95, CONTENT_W, 100,
    {size: 22, bold: true, color: C.white, align: 'CENTER', vAlign: 'MIDDLE'});

  addRect(slide, MARGIN_L + 80, 198, CONTENT_W - 160, 3, C.gold);

  // Three outcomes
  const cols = [
    ['Faster decisions', 'Color direction in minutes, not hours of second-guessing'],
    ['More defensible work', 'I can explain the theory behind every choice'],
    ['Better briefs', 'I\'m giving my team language, not just instinct']
  ];
  const colW = Math.floor(CONTENT_W / 3) - 8;
  cols.forEach(([title, desc], i) => {
    const x = MARGIN_L + i * (colW + 12);
    addText(slide, title, x, 210, colW, 22,
      {size: 12, bold: true, color: C.gold, align: 'CENTER'});
    addText(slide, desc, x, 234, colW, 40,
      {size: 10, color: C.white, align: 'CENTER'});
  });

  addFooter(slide, 4);
}

// ═══════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════
function addContentHeader(slide, title) {
  addText(slide, title, MARGIN_L, TITLE_Y, CONTENT_W, TITLE_H,
    {size: 26, bold: true, color: C.black, vAlign: 'MIDDLE'});
  addRect(slide, MARGIN_L, RULE_Y, CONTENT_W, RULE_H, C.gold);
}

function addFooter(slide, pageNum) {
  addRect(slide, 0, FOOTER_Y, W, FOOTER_H, C.blue);
  addText(slide, 'UNCOMMON', 14, FOOTER_Y + 5, 130, 15,
    {size: 9, bold: true, color: C.white});
  addRect(slide, 14, FOOTER_Y + 22, 100, 1, C.gold);
  addText(slide, 'SCHOOLS', 14, FOOTER_Y + 25, 130, 12,
    {size: 7, bold: true, color: C.gold});
  addRect(slide, 14, FOOTER_Y + 38, 100, 1, C.gold);
  addText(slide, '© 2025–26 Uncommon Schools, Inc. All rights reserved.',
    150, FOOTER_Y + 16, W - 220, 18,
    {size: 8, color: C.white, align: 'CENTER', vAlign: 'MIDDLE'});
  addText(slide, String(pageNum), W - 30, FOOTER_Y + 16, 20, 18,
    {size: 9, color: C.white, align: 'CENTER', vAlign: 'MIDDLE'});
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
  if (opts.lastBold) {
    let lastIdx = -1;
    for (let i = lines.length - 1; i >= 0; i--) {
      if (lines[i].trim() !== '') { lastIdx = i; break; }
    }
    if (lastIdx >= 0) {
      const fullText = lines.join('\n');
      const start = lines.slice(0, lastIdx).join('\n').length + (lastIdx > 0 ? 1 : 0);
      const end = start + lines[lastIdx].length;
      tr.getRange(start, end).getTextStyle().setBold(true);
    }
  }
  return shape;
}
