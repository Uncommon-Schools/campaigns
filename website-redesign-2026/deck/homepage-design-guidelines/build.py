"""Build the Homepage Design Guidelines deck for Spinutech in the Uncommon template.

Run with /usr/bin/python3 (the only Python on the Mac mini with python-pptx) from this folder:
    /usr/bin/python3 build.py [--html OUTDIR]
Output: "Homepage Design Guidelines.pptx" in this folder. With --html, also writes one HTML twin per page
(same positions, same fonts) to OUTDIR for rendering preview pictures in Chrome; the Mac mini has no
PowerPoint or LibreOffice and Keynote hangs on AppleScript export (2026-11-12).
"""
import math, os, sys, tempfile, html as H
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
TEMPLATE = os.path.join(HERE, '..', '..', 'assets', 'Uncommon Presentation Template.pptx')
OUT = os.path.join(HERE, 'Homepage Design Guidelines.pptx')
ITEMS = os.path.join(HERE, 'anthony-items')
FIG = os.path.join(HERE, 'figma-sections')

FONT = 'Libre Franklin'
BLACK = RGBColor(0, 0, 0)
BLUE = RGBColor(16, 52, 180)          # 1034B3, the template's band and cover blue
TITLE_PT, BODY_PT, CAP_PT = 24, 13, 11
LEFT, TOP, RIGHT_EDGE, BOTTOM = 0.73, 1.25, 12.65, 6.25   # inches; the blue band starts at 6.5

def A(f): return os.path.join(ITEMS, f)
def F(f): return os.path.join(FIG, f)

# ---------- content ----------
# Each page: title, layout ('side' = text left + pictures right, 'below' = text on top + pictures in a row),
# items = (bold lead, text), pics = (file, caption)
PAGES = [
    dict(title='Header', layout='below',
         items=[('Taller header.', 'Slightly taller than the wireframe, giving the logo and the navigation more room.'),
                ('Larger logo.', 'The Uncommon Schools logo is larger for a stronger brand presence at the top of the page.'),
                ('Rounded bottom corners.', 'The header sits as a shape over the hero image.')],
         pics=[(A('01-header.webp'), 'Header over the hero photo')]),
    dict(title='Hero', layout='side',
         items=[('Dark tint on the photo.', 'The hero photo carries a dark tint so the white headline stays readable over any image.'),
                ('Calmer type.', 'The headline and supporting text are set smaller than in the wireframe, so the photo carries more of the weight.'),
                ('Find a School stays in the hero.', 'Locked up with the headline and supporting text, so the first action a family needs is visible on arrival.')],
         pics=[(F('02-hero.png'), 'Homepage hero')]),
    dict(title='Announcement bar', layout='below',
         items=[('Yellow bar.', 'Matches the Find a School card, so announcements are noticed at a glance.'),
                ('Arrows cycle the announcements.', 'Several announcements, shown one at a time.')],
         pics=[(F('03-announcement.png'), 'Announcement bar under the hero')]),
    dict(title='Feature cards', layout='below',
         items=[('Yellow background, white selectors, black button.', 'Feature cards like the Find a School card use this combination.'),
                ('Yellow over blue.', 'Yellow adds vibrancy and energy where we want the eye to go.')],
         pics=[(A('02-feature-card.webp'), 'Find a School card in the hero')]),
    dict(title='Headline colours', layout='side',
         items=[('Two colour pairs.', 'White and yellow on dark backgrounds. Black and blue on light backgrounds.'),
                ('The second colour highlights the key words.', 'Yellow on dark sections, blue on light sections.'),
                ('Supporting text.', 'White on dark backgrounds, black on light backgrounds.')],
         pics=[(A('04b-headline-dark.png'), 'Dark background: white and yellow'),
               (A('04a-headline-light.png'), 'Light background: black and blue')]),
    dict(title='Headline type', layout='side',
         items=[('Section headlines: Knockout 49 Liteweight.', ''),
                ('Section supporting text: Libre Franklin Medium.', ''),
                ('No ellipsis in headlines.', 'The example on the right shows the one thing not to copy.')],
         pics=[(A('05-no-ellipsis.png'), 'Knockout 49 Liteweight. The ellipsis is not used.')]),
    dict(title='Colour', layout='below',
         items=[('Black, never dark navy.', 'Whenever a dark colour is needed, use black.'),
                ('Secondary colours as accents.', 'Where possible, use secondary colours from the brand guidelines to add a touch of variation, never in a significant way.')],
         pics=[(A('07-black-not-navy.png'), 'Black section background'),
               (A('08-secondary-colours.webp'), 'Secondary colours as accents in the media wall')]),
    dict(title='Buttons', layout='below',
         items=[('Calls to action are pills.', 'Always pill-shaped and one height, so they read as one family across the page.'),
                ('Secondary calls to action are circles.', 'The arrow buttons on cards and carousels.'),
                ('Outlined family.', 'The footer buttons, the menu button and the carousel next button use outlines, drawn thicker so they read at a glance.')],
         pics=[(A('03a-buttons-enroll-menu.png'), 'Primary: black pill and menu circle'),
               (A('03b-button-watch-video.png'), 'Yellow pill with icon'),
               (A('03e-button-learn-more.png'), 'Yellow pill'),
               (A('03c-arrow-outline.png'), 'Secondary: outlined circle'),
               (A('03d-arrows-prev-next.png'), 'Secondary: previous and next')]),
    dict(title='Regional cards', layout='below',
         items=[('Columns of three or two.', 'Regional cards are displayed in either.'),
                ('Find a School pairs with the group.', 'The card sits with the regional cards, as the sixth card in a grid of three.'),
                ('Always the circle arrow.', 'Regional cards always use the circle secondary call to action.'),
                ('Each card holds', 'a school exterior photo, the region name, the number of schools and the arrow.')],
         pics=[(A('06a-region-cards-3col.webp'), 'Three columns, Find a School as the sixth card'),
               (A('06b-region-cards-2col.webp'), 'Two columns')]),
    dict(title='Content cards', layout='side',
         items=[('Photography, not generic icons.', 'Icons feel generic and add no emotion or connection to a card.'),
                ('Colourful accent shapes and designs', 'carry the card instead, like the coloured title bands.')],
         pics=[(A('09-photos-not-icons.webp'), 'Your Connection cards')]),
    dict(title='Carousels', layout='below',
         items=[('Why Families is a slide carousel, not an accordion.', 'Each pillar is one slide: a blue card with the title, copy and button, paired with a photo. The next slides peek out behind the active one. The three pillars are Rigorous Academics, A Community That Knows Your Child, and Private-School Quality, Tuition-Free.'),
                ('Uncommon Stories is a carousel of stories.', 'Arrows and dots move between them. The quote card names the person and their role.'),
                ('The next button is the outlined circle', 'of the card arrows, not a solid button with a Next label.')],
         pics=[(F('07-why.png'), 'Why Families Choose Uncommon Schools'),
               (F('09-stories.png'), 'Uncommon Stories')]),
    dict(title='Photo and video', layout='below',
         items=[('Media wall.', 'The mission statement is a grid of photo tiles with openings for single-word brand descriptors. Each tile cycles through two or three images; each descriptor can cycle through a set of words.'),
                ('Video.', 'The thumbnail beside Joyful opens a lightbox that plays the brand video. The story card plays a short looping clip until Watch Video is pressed, which opens the full video.')],
         pics=[(F('04-mission.png'), 'Media wall'),
               (F('05-video.png'), 'Video card')]),
    dict(title='Footer', layout='side',
         items=[('The footer of choice.', 'Brand blue, logo top left, social icons top right, four buttons, five link columns, legal links and Back to Top along the bottom.'),
                ('Four outlined buttons.', 'White stroke outlines, never filled or coloured.'),
                ('Five columns.', 'This column orientation is the choice from the variations provided.')],
         pics=[(A('10-footer.webp'), 'Footer')]),
]

# ---------- helpers ----------
TMP = tempfile.mkdtemp()
ELEMS = []            # recorder for the HTML twin: one list of element dicts per page
def rec(**k): ELEMS[-1].append(k)

def as_png(path):
    """python-pptx takes PNG/JPEG; convert webp. Returns (path, w, h)."""
    im = Image.open(path)
    if path.lower().endswith('.webp'):
        out = os.path.join(TMP, os.path.basename(path)[:-5] + '.png')
        im.convert('RGB').save(out); path = out
    return path, im.width, im.height

def text_lines(text, width_in, pt):
    cpl = max(10, int(width_in * 72 / (pt * 0.5)))
    return max(1, math.ceil(len(text) / cpl))

def add_title(slide, text):
    tb = slide.shapes.add_textbox(Inches(0.38), Inches(0.30), Inches(12.40), Inches(0.53))
    tf = tb.text_frame; tf.word_wrap = True; tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    r = tf.paragraphs[0].add_run(); r.text = text
    r.font.name = FONT; r.font.size = Pt(TITLE_PT); r.font.bold = True; r.font.color.rgb = BLACK
    rec(kind='title', x=0.38, y=0.30, w=12.40, h=0.53, text=text)
    return tb

def add_body(slide, items, x, y, w):
    tb = slide.shapes.add_textbox(Inches(x), Inches(y), Inches(w), Inches(1))
    tf = tb.text_frame; tf.word_wrap = True
    tf.margin_left = tf.margin_right = tf.margin_top = tf.margin_bottom = 0
    h = 0
    for i, (lead, rest) in enumerate(items, 1):
        p = tf.paragraphs[0] if i == 1 else tf.add_paragraph()
        p.line_spacing = 1.15; p.space_after = Pt(7)
        r = p.add_run(); r.text = f'{i}.  {lead}'; r.font.name = FONT; r.font.size = Pt(BODY_PT); r.font.bold = True; r.font.color.rgb = BLACK
        if rest:
            r2 = p.add_run(); r2.text = ' ' + rest; r2.font.name = FONT; r2.font.size = Pt(BODY_PT); r2.font.bold = False; r2.font.color.rgb = BLACK
        n = text_lines(f'{i}.  {lead} {rest}', w, BODY_PT)
        h += n * BODY_PT * 1.15 / 72 + 7 / 72
    tb.height = Inches(h + 0.05)
    rec(kind='body', x=x, y=y, w=w, items=items)
    return h

def add_caption(slide, text, x, y, w):
    tb = slide.shapes.add_textbox(Inches(x), Inches(y), Inches(w), Inches(0.25))
    tf = tb.text_frame; tf.word_wrap = True
    tf.margin_left = tf.margin_right = tf.margin_top = tf.margin_bottom = 0
    p = tf.paragraphs[0]; p.alignment = PP_ALIGN.CENTER
    r = p.add_run(); r.text = text; r.font.name = FONT + ' Medium'; r.font.size = Pt(CAP_PT); r.font.color.rgb = BLACK
    rec(kind='caption', x=x, y=y, w=w, text=text)

def add_pic(slide, path, x, y, w, h):
    slide.shapes.add_picture(path, Inches(x), Inches(y), width=Inches(w), height=Inches(h))
    rec(kind='pic', x=x, y=y, w=w, h=h, path=path)

def place_pictures(slide, pics, x, y, w, h_avail, stacked):
    """stacked=True: one column, pictures under each other. False: one row. Each with a caption."""
    sizes = [as_png(p) for p, _ in pics]
    cap_h = 0.32
    n = len(pics)
    if stacked:
        gap = 0.15
        hs = [w * ih / iw for _, iw, ih in sizes]
        scale = min(1.0, (h_avail - n * (cap_h + gap)) / sum(hs))
        pw = w * scale; used = sum(hs) * scale + n * (cap_h + gap) - gap
        cy = y + max(0, (h_avail - used) / 2)     # centre the column in the space under the title
        for (p, cap), (path, iw, ih), ph in zip(pics, sizes, hs):
            ph *= scale; px = x + (w - pw) / 2
            add_pic(slide, path, px, cy, pw, ph)
            add_caption(slide, cap, px, cy + ph + 0.06, pw); cy += ph + cap_h + gap
    else:
        gap = 0.3
        ph_max = h_avail - cap_h
        ws = [ph_max * iw / ih for _, iw, ih in sizes]
        scale = min(1.0, (w - (n - 1) * gap) / sum(ws))
        ph = ph_max * scale; ws = [a * scale for a in ws]
        total = sum(ws) + (n - 1) * gap; cx = x + (w - total) / 2
        y = y + max(0, (h_avail - ph - cap_h) / 2)   # centre the row between the text and the band
        for (p, cap), (path, iw, ih), pw in zip(pics, sizes, ws):
            add_pic(slide, path, cx, y, pw, ph)
            add_caption(slide, cap, cx - 0.3, y + ph + 0.06, pw + 0.6); cx += pw + gap

def build_page(prs, layout, page):
    ELEMS.append([])
    s = prs.slides.add_slide(layout)
    add_title(s, page['title'])
    if page['layout'] == 'side':
        body_w = 4.6
        add_body(s, page['items'], LEFT, TOP, body_w)
        px = LEFT + body_w + 0.4; pw = RIGHT_EDGE - px
        place_pictures(s, page['pics'], px, TOP, pw, BOTTOM - TOP, stacked=True)
    else:
        body_w = RIGHT_EDGE - LEFT
        h = add_body(s, page['items'], LEFT, TOP, body_w)
        py = TOP + h + 0.3
        place_pictures(s, page['pics'], LEFT, py, body_w, BOTTOM - py, stacked=False)
    return s

COVER_TITLE = 'Website Redesign\nHomepage Design Guidelines'

def build(prs):
    cover, model = prs.slides[0], prs.slides[1]
    content_layout = model.slide_layout
    ph = cover.shapes[0]
    ph.text_frame.text = COVER_TITLE
    for page in PAGES:
        build_page(prs, content_layout, page)
    sldIdLst = prs.slides._sldIdLst
    for sld in list(sldIdLst)[1:9]:
        prs.part.drop_rel(sld.rId); sldIdLst.remove(sld)

# ---------- HTML twin (preview only) ----------
def write_html(prs, outdir):
    os.makedirs(outdir, exist_ok=True)
    lay2 = prs.slides[1].slide_layout; lay1 = prs.slides[0].slide_layout
    def dump(shape, name):
        p = os.path.join(outdir, name + '.' + shape.image.ext); open(p, 'wb').write(shape.image.blob); return p
    cover_bg = dump(lay1.shapes[0], 'cover_bg'); cover_badge = dump(lay1.shapes[4], 'cover_badge')
    pics = [sh for sh in lay2.shapes if sh.shape_type == 13]
    band_strip = dump(pics[0], 'band_strip'); band_badge = dump(pics[1], 'band_badge')
    fonts = '/tmp/dg/fonts'
    css = f"""
    @font-face{{font-family:'LF';src:url(file://{fonts}/LibreFranklin-400.woff2);font-weight:400}}
    @font-face{{font-family:'LF';src:url(file://{fonts}/LibreFranklin-500.woff2);font-weight:500}}
    @font-face{{font-family:'LF';src:url(file://{fonts}/LibreFranklin-600.woff2);font-weight:600}}
    @font-face{{font-family:'LF';src:url(file://{fonts}/LibreFranklin-700.woff2);font-weight:700}}
    html,body{{margin:0;padding:0}} body{{width:13.333in;height:7.5in;position:relative;overflow:hidden;background:#fff;font-family:'LF',sans-serif;color:#000}}
    .a{{position:absolute}} .t{{font-size:{TITLE_PT}pt;font-weight:700;display:flex;align-items:center;padding-left:0.095in}}
    .b p{{margin:0 0 7pt 0;font-size:{BODY_PT}pt;line-height:1.15}} .b b{{font-weight:700}}
    .c{{font-size:{CAP_PT}pt;font-weight:500;text-align:center;line-height:1.1}}
    .band{{left:-0.02in;top:6.5in;width:13.38in;height:1.02in;background:#1034B3}}
    .small{{font-size:9pt;color:#fff}}
    """
    def box(x, y, w, h=None, cls='a', extra=''):
        return f'<div class="{cls}" style="left:{x}in;top:{y}in;width:{w}in;{"height:%sin;" % h if h else ""}{extra}">'
    # cover
    t1, t2 = COVER_TITLE.split('\n')
    cover = f"""<html><head><meta charset="utf-8"><style>{css}</style></head><body>
    <img class="a" src="file://{cover_bg}" style="left:0;top:0;width:13.333in;height:7.5in">
    {box(0.33, 1.9, 11.22, 2.35, extra='display:flex;align-items:center;padding-left:0.1in;box-sizing:border-box')}<div style="font-size:53pt;font-weight:700;color:#fff;line-height:1.1">{H.escape(t1)}<br>{H.escape(t2)}</div></div>
    <img class="a" src="file://{cover_badge}" style="left:11.29in;top:6.05in;width:1.74in;height:1.25in">
    <div class="a small" style="left:3.94in;top:7.11in;width:4.97in;text-align:center">© 2026–27 Uncommon Schools, Inc. All rights reserved.</div>
    </body></html>"""
    open(os.path.join(outdir, 'p01.html'), 'w').write(cover)
    for n, elems in enumerate(ELEMS, 2):
        parts = [f'<html><head><meta charset="utf-8"><style>{css}</style></head><body>']
        parts.append('<div class="a" style="left:0.33in;top:0.97in;width:12.67in;height:0;border-top:2pt solid #FBB500"></div>')
        parts.append('<div class="a band"></div>')
        parts.append(f'<img class="a" src="file://{band_strip}" style="left:0.22in;top:6.57in;width:12.77in;height:0.83in">')
        parts.append(f'<img class="a" src="file://{band_badge}" style="left:12.11in;top:6.64in;width:0.91in;height:0.65in">')
        parts.append(f'<div class="a small" style="left:12.44in;top:6.91in;width:0.67in;text-align:right">{n}</div>')
        parts.append('<div class="a small" style="left:4.11in;top:7.25in;width:5.11in;text-align:center">© 2026–27 Uncommon Schools, Inc. All rights reserved.</div>')
        for e in elems:
            if e['kind'] == 'title':
                parts.append(box(e['x'], e['y'], e['w'], e['h'], cls='a t') + H.escape(e['text']) + '</div>')
            elif e['kind'] == 'body':
                ps = ''.join(f'<p><b>{i}.&nbsp; {H.escape(l)}</b>{" " + H.escape(r) if r else ""}</p>' for i, (l, r) in enumerate(e['items'], 1))
                parts.append(box(e['x'], e['y'], e['w'], cls='a b') + ps + '</div>')
            elif e['kind'] == 'caption':
                parts.append(box(e['x'], e['y'], e['w'], cls='a c') + H.escape(e['text']) + '</div>')
            elif e['kind'] == 'pic':
                parts.append(f'<img class="a" src="file://{e["path"]}" style="left:{e["x"]}in;top:{e["y"]}in;width:{e["w"]}in;height:{e["h"]}in">')
        parts.append('</body></html>')
        open(os.path.join(outdir, f'p{n:02d}.html'), 'w').write('\n'.join(parts))
    print('html pages written to', outdir)

def main():
    prs = Presentation(TEMPLATE)
    build(prs)
    prs.save(OUT)
    print('saved', OUT, 'pages', len(prs.slides))
    if '--html' in sys.argv:
        write_html(Presentation(TEMPLATE), sys.argv[sys.argv.index('--html') + 1])

if __name__ == '__main__':
    main()
