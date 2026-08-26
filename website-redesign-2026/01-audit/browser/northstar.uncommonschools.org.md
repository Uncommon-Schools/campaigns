# northstar.uncommonschools.org — Browser Audit

**Audited:** 2026-08-26 · Playwright/Chromium 151 + Lighthouse 13.4.1 · Mobile 375x812@3x (simulated 4G) and Desktop 1440x900 · every page loaded fresh (no cache, no cookies).

- Resolves: **200** → `https://northstar.uncommonschools.org/` · server: `nginx` · HTTP/2 · HSTS on
- Site #2 of the WordPress **multisite** (uploads at `wp-content/uploads/sites/2/`), nginx at 134.209.175.171. Theme `uncommon-region-theme`.

## 1. Performance (Lighthouse, median of 3 runs)

Raw JSON per page/viewport in `lighthouse/`. Mobile = 375x812 @3x, simulated 4G; Desktop = 1440x900.

> **Reading LCP here:** pages with the auto-rotating hero carousel report extreme LCP (up to 79–310s). Each slide rotation paints a new, larger LCP candidate, so the metric keeps climbing for as long as the carousel runs under throttling. The real first hero paint is at ~0.8–4s (PerformanceObserver capture in `data`). Treat FCP / Speed Index / TBT as the representative load metrics on carousel pages — and note the same carousel has no pause control (see §2).

### Mobile

| Page | Perf | LCP | CLS | TBT | FCP | SI | TTFB | Weight | Req | Unused JS | Unused CSS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [home](https://northstar.uncommonschools.org/) | **68** | 8.7s | 0.063 | 188ms | 1.6s | 5.0s | 485ms | 9.0MB | 69 | 768KB | 26KB |
| [enroll](https://northstar.uncommonschools.org/enroll/) | **53** | 194.3s | 0.154 | 259ms | 1.7s | 67.6s | 559ms | 37.8MB | 76 | 767KB | 25KB |
| [careers](https://northstar.uncommonschools.org/careers/) | **65** | 16.5s | 0.045 | 179ms | 1.8s | 6.9s | 475ms | 3.1MB | 62 | 768KB | 26KB |
| [donate](https://northstar.uncommonschools.org/donate/) | **74** | 6.1s | 0.026 | 176ms | 1.4s | 3.3s | 433ms | 1.7MB | 49 | 768KB | 26KB |
| [school](https://northstar.uncommonschools.org/alexander-street-es/) | **64** | 13.1s | 0.018 | 206ms | 1.7s | 7.3s | 486ms | 4.2MB | 75 | 761KB | 25KB |
| [news](https://northstar.uncommonschools.org/news/) | **65** | 15.1s | 0.089 | 224ms | 1.7s | 4.7s | 503ms | 52.4MB | 69 | 755KB | 26KB |
| [es-home](https://northstar.uncommonschools.org/es/) | **61** | 8.0s | 0.163 | 194ms | 1.8s | 4.9s | 547ms | 9.0MB | 72 | 768KB | 26KB |
| [contact](https://northstar.uncommonschools.org/contact/) | **70** | 6.8s | 0.065 | 183ms | 1.7s | 4.2s | 507ms | 1.8MB | 68 | 768KB | 26KB |
| [campaign-lp](https://northstar.uncommonschools.org/26-27-school-year-enrollment-prog/) | **66** | 6.8s | 0.064 | 261ms | 1.4s | 5.3s | 596ms | 2.4MB | 75 | 936KB | 25KB |

### Desktop

| Page | Perf | LCP | CLS | TBT | FCP | SI | TTFB | Weight | Req | Unused JS | Unused CSS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [home](https://northstar.uncommonschools.org/) | **91** | 1.6s | 0.095 | 0ms | 322ms | 1.4s | 457ms | 9.0MB | 69 | 769KB | 25KB |
| [enroll](https://northstar.uncommonschools.org/enroll/) | **61** | 30.6s | 0.113 | 0ms | 687ms | 9.4s | 540ms | 37.8MB | 76 | 768KB | 25KB |
| [careers](https://northstar.uncommonschools.org/careers/) | **78** | 2.7s | 0.107 | 0ms | 394ms | 2.1s | 414ms | 3.1MB | 62 | 769KB | 26KB |
| [donate](https://northstar.uncommonschools.org/donate/) | **96** | 1.4s | 0.015 | 0ms | 374ms | 930ms | 501ms | 1.7MB | 50 | 768KB | 26KB |
| [school](https://northstar.uncommonschools.org/alexander-street-es/) | **79** | 2.4s | 0.135 | 0ms | 425ms | 1.8s | 482ms | 4.2MB | 75 | 761KB | 25KB |
| [news](https://northstar.uncommonschools.org/news/) | **56** | 3.7s | 0.706 | 0ms | 361ms | 1.3s | 429ms | 52.4MB | 69 | 756KB | 26KB |
| [es-home](https://northstar.uncommonschools.org/es/) | **90** | 1.5s | 0.061 | 0ms | 425ms | 2.2s | 626ms | 9.0MB | 72 | 768KB | 25KB |
| [contact](https://northstar.uncommonschools.org/contact/) | **93** | 1.5s | 0.054 | 0ms | 418ms | 1.4s | 463ms | 1.8MB | 68 | 768KB | 26KB |
| [campaign-lp](https://northstar.uncommonschools.org/26-27-school-year-enrollment-prog/) | **91** | 1.4s | 0.115 | 0ms | 388ms | 1.3s | 460ms | 2.4MB | 75 | 936KB | 25KB |

**Real transfer on first load (Playwright, no throttling):**

| Page | VP | Total | JS | Images | Requests |
|---|---|---|---|---|---|
| home | mobile | 9.0MB | 1.5MB | 7.4MB | 71 |
| enroll | mobile | 37.8MB | 1.5MB | 36.2MB | 78 |
| careers | mobile | 3.1MB | 1.5MB | 1.5MB | 64 |
| donate | mobile | 1.7MB | 1.4MB | 178KB | 48 |
| school | mobile | 4.3MB | 1.5MB | 2.6MB | 77 |
| news | mobile | 52.5MB | 1.5MB | 50.8MB | 71 |
| es-home | mobile | 9.1MB | 1.5MB | 7.4MB | 74 |
| contact | mobile | 1.8MB | 1.5MB | 146KB | 70 |
| campaign-lp | mobile | 2.4MB | 1.8MB | 400KB | 75 |

## 2. Accessibility (axe-core 4.x + manual checks)

### axe violations by page

| Page | VP | Rule | Impact | WCAG | Count | Example selector |
|---|---|---|---|---|---|---|
| home | M | `button-name` | critical | wcag2a,wcag412 | 1 | `button` |
| home | M | `heading-order` | moderate | — | 5 | `.block--headline.waiting:nth-child(2) > .container--md.container > .headline.an-` |
| home | M | `region` | moderate | — | 4 | `#trp-floater-ls` |
| home | D | `heading-order` | moderate | — | 5 | `.block--headline.waiting:nth-child(2) > .container--md.container > .headline.an-` |
| home | D | `region` | moderate | — | 4 | `#trp-floater-ls` |
| enroll | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| enroll | M | `heading-order` | moderate | — | 2 | `div:nth-child(2) > h5` |
| enroll | M | `region` | moderate | — | 4 | `#trp-floater-ls` |
| enroll | M | `tabindex` | serious | — | 1 | `.active-content > .button-link` |
| enroll | D | `heading-order` | moderate | — | 2 | `div:nth-child(2) > h5` |
| enroll | D | `region` | moderate | — | 4 | `#trp-floater-ls` |
| enroll | D | `tabindex` | serious | — | 1 | `.active-content > .button-link` |
| careers | M | `button-name` | critical | wcag2a,wcag412 | 1 | `button` |
| careers | M | `region` | moderate | — | 4 | `#trp-floater-ls` |
| careers | D | `region` | moderate | — | 4 | `#trp-floater-ls` |
| donate | M | `button-name` | critical | wcag2a,wcag412 | 1 | `button` |
| donate | M | `page-has-heading-one` | moderate | — | 1 | `html` |
| donate | M | `region` | moderate | — | 1 | `#trp-floater-ls` |
| donate | D | `page-has-heading-one` | moderate | — | 1 | `html` |
| donate | D | `region` | moderate | — | 1 | `#trp-floater-ls` |
| school | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| school | M | `heading-order` | moderate | — | 5 | `.block--content:nth-child(2) > .container--md.container > .text-content > .conte` |
| school | M | `region` | moderate | — | 4 | `#trp-floater-ls` |
| school | D | `heading-order` | moderate | — | 5 | `.block--content:nth-child(2) > .container--md.container > .text-content > .conte` |
| school | D | `region` | moderate | — | 4 | `#trp-floater-ls` |
| news | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| news | M | `heading-order` | moderate | — | 1 | `.card.an-child[target="_blank"]:nth-child(1) > .card__bg > .card__content.fade-b` |
| news | M | `region` | moderate | — | 4 | `#trp-floater-ls` |
| news | D | `color-contrast` | serious | wcag2aa,wcag143 | 7 | `#menu-item-1905 > a[aria-current="page"]` |
| news | D | `heading-order` | moderate | — | 1 | `.card.an-child[target="_blank"]:nth-child(1) > .card__bg > .card__content.fade-b` |
| news | D | `region` | moderate | — | 4 | `#trp-floater-ls` |
| es-home | M | `button-name` | critical | wcag2a,wcag412 | 1 | `button` |
| es-home | M | `heading-order` | moderate | — | 5 | `.block--headline.waiting:nth-child(2) > .container--md.container > .headline.an-` |
| es-home | M | `region` | moderate | — | 4 | `#trp-floater-ls` |
| es-home | D | `heading-order` | moderate | — | 5 | `.block--headline.waiting:nth-child(2) > .container--md.container > .headline.an-` |
| es-home | D | `region` | moderate | — | 4 | `#trp-floater-ls` |
| contact | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| contact | M | `region` | moderate | — | 4 | `#trp-floater-ls` |
| contact | D | `region` | moderate | — | 4 | `#trp-floater-ls` |
| campaign-lp | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| campaign-lp | M | `color-contrast` | serious | wcag2aa,wcag143 | 2 | `a[target="”_blank”"]` |
| campaign-lp | M | `heading-order` | moderate | — | 1 | `.card.card--reveal.card--threeby:nth-child(1) > .card__bg > .card__content.fade-` |
| campaign-lp | M | `label-title-only` | serious | — | 1 | `#input_18_21_1` |
| campaign-lp | M | `page-has-heading-one` | moderate | — | 2 | `html` |
| campaign-lp | M | `region` | moderate | — | 1 | `#trp-floater-ls` |
| campaign-lp | D | `color-contrast` | serious | wcag2aa,wcag143 | 9 | `#menu-item-1905 > a` |
| campaign-lp | D | `heading-order` | moderate | — | 1 | `.card.card--reveal.card--threeby:nth-child(1) > .card__bg > .card__content.fade-` |
| campaign-lp | D | `label-title-only` | serious | — | 1 | `#input_18_21_1` |
| campaign-lp | D | `page-has-heading-one` | moderate | — | 2 | `html` |
| campaign-lp | D | `region` | moderate | — | 1 | `#trp-floater-ls` |

### Images missing alt attribute

- `enroll`: `https://northstar.uncommonschools.org/wp-content/uploads/sites/2/2024/10/noun-2532364-FFB500.svg`
- `enroll`: `https://northstar.uncommonschools.org/wp-content/uploads/sites/2/2024/10/noun-home-education-3492789-FFB500.svg`
- `enroll`: `https://northstar.uncommonschools.org/wp-content/uploads/sites/2/2024/10/noun-online-education-3492766-FFB500.svg`
- `enroll`: `https://northstar.uncommonschools.org/wp-content/uploads/sites/2/2024/10/noun-clipboard-1268751-FFB500.svg`
- `enroll`: `https://northstar.uncommonschools.org/wp-content/uploads/sites/2/2024/10/noun-2736806-FFB500.svg`
- `enroll`: `https://northstar.uncommonschools.org/wp-content/uploads/sites/2/2024/10/noun-backpack-4868143-FFB500.svg`

### Heading structure issues

| Page | H1 count | Skipped levels (first 3) |
|---|---|---|
| home | 1 | H1→H3, H3→H5, H3→H6 |
| enroll | 1 | H1→H5, H3→H5 |
| careers | 0 | — |
| donate | 0 | — |
| school | 1 | H1→H3, H3→H5, H3→H6 |
| news | 0 | H3→H6 |
| es-home | 1 | H1→H3, H3→H5, H3→H6 |
| contact | 0 | — |
| campaign-lp | 0 | H3→H5 |

### Form inputs: labels and autocomplete

| Page | Form | Field | Type | Labeled | autocomplete |
|---|---|---|---|---|---|
| contact | `form#gform_1` | input_1.3 | text | yes | **missing** |
| contact | `form#gform_1` | input_1.6 | text | yes | **missing** |
| contact | `form#gform_1` | input_2 | email | yes | **missing** |
| contact | `form#gform_1` | input_6 | tel | yes | **missing** |
| contact | `form#gform_1` | input_10 | select-one | yes | **missing** |
| contact | `form#gform_1` | input_7 | select-one | yes | **missing** |
| contact | `form#gform_1` | input_4 | textarea | yes | **missing** |
| contact | `form#gform_1` | ak_hp_textarea | textarea | yes | **missing** |
| campaign-lp | `form#gform_18` | input_8.3 | text | yes | **missing** |
| campaign-lp | `form#gform_18` | input_8.6 | text | yes | **missing** |
| campaign-lp | `form#gform_18` | input_2 | email | yes | **missing** |
| campaign-lp | `form#gform_18` | input_3 | tel | yes | **missing** |
| campaign-lp | `form#gform_18` | input_4 | number | yes | **missing** |
| campaign-lp | `form#gform_18` | input_5 | select-one | yes | **missing** |
| campaign-lp | `form#gform_18` | input_9 | text | yes | **missing** |
| campaign-lp | `form#gform_18` | input_14 | select-one | yes | **missing** |
| campaign-lp | `form#gform_18` | input_21.1 | checkbox | yes | **missing** |
| campaign-lp | `form#gform_18` | g-recaptcha-response | textarea | **NO** | **missing** |
| campaign-lp | `form#gform_18` | ak_hp_textarea | textarea | yes | **missing** |

### Keyboard navigation (desktop, up to 110 tab stops per page)

| Page | Tab stops | Elements w/o visible focus | Keyboard trap |
|---|---|---|---|
| home | 107 | 0 | no |
| enroll | 42 | 6 | **YES** at `div#accordion-6-0>div.accordion>button.accordion__toggle.col` (stop 42) |
| careers | 107 | 0 | no |
| donate | 107 | 0 | no |
| contact | 107 | 0 | no |
| campaign-lp | 109 | 2 | no |

Elements with no visible focus indicator on `enroll` (first 8):

- `section.block.block-journey-map>div.container>div.tabs>div.tab-icon.active-tab` — "Apply"
- `section.block.block-journey-map>div.container>div.tabs>div.tab-icon` — "Visit"
- `section.block.block-journey-map>div.container>div.tabs>div.tab-icon` — "Accept Offer"
- `section.block.block-journey-map>div.container>div.tabs>div.tab-icon` — "Register"
- `section.block.block-journey-map>div.container>div.tabs>div.tab-icon` — "Orientation"
- `section.block.block-journey-map>div.container>div.tabs>div.tab-icon` — "First Day!"

Elements with no visible focus indicator on `campaign-lp` (first 8):

- `div#input_18_24>div>div>iframe` — ""
- `div#input_18_24>div>div>iframe` — ""

### Carousels, autoplay, media

- `school`: carousel `main#content > section.block.block--carousel` — controls: , , 1 of 5, 2 of 5, 3 of 5, 4 of 5; pause/stop control: **NO** (WCAG 2.2.2)
- `school`: carousel `main#content > section.block.block--carousel > div.container > div.car` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `school`: carousel `section.block.block--carousel > div.container > div.row.justify-conten` — controls: , , 1 of 5, 2 of 5, 3 of 5, 4 of 5; pause/stop control: **NO** (WCAG 2.2.2)

### Color contrast — undetermined pairs (text over images/gradients; manual check needed)

- `home`: `body` — Element has a 1:1 contrast ratio with the background
- `home`: `h1` — Element's background color could not be determined due to a pseudo element
- `home`: `.hero__content > p` — Element's background color could not be determined due to a pseudo element
- `enroll`: `body` — Element has a 1:1 contrast ratio with the background
- `enroll`: `h1` — Element's background color could not be determined due to a pseudo element
- `enroll`: `.hero__content > p:nth-child(2)` — Element's background color could not be determined due to a pseudo element
- `careers`: `body` — Element has a 1:1 contrast ratio with the background
- `careers`: `.feature__content > h3` — Element's background color could not be determined due to a background image
- `careers`: `.feature__content > p:nth-child(2)` — Element's background color could not be determined due to a background image
- `donate`: `body` — Element has a 1:1 contrast ratio with the background
- `donate`: `h3` — Element's background color could not be determined due to a background image
- `donate`: `.feature__content > p:nth-child(2)` — Element's background color could not be determined due to a background image
- `school`: `body` — Element has a 1:1 contrast ratio with the background
- `school`: `h1` — Element's background color could not be determined due to a pseudo element
- `school`: `.hero__content > p:nth-child(2)` — Element's background color could not be determined due to a pseudo element

### Landmarks, skip link, language

- Skip link: `Skip to Main Content` → `#content`
- `<html lang>`: `en-US`
- Landmarks (home): main×1, nav×2, header×1, footer×1
- `/es/` lang attr: `es-MX` — 200-word sample: "1 Homepage - Uncommon Schools Newark Academia Estrella del Norte Somos una escuela pública y gratuita que atiende desde jardín de niños hasta el grado 12 en Newark, Nueva Jersey. A través de nuestros 15 campus, nuestros estudiantes se están preparand…"

## 3. Mobile usability (375x812 @3x)

| Page | Viewport meta | Horiz. scroll | Text <16px | Text <12px | Small tap targets (<24px) | Fixed/sticky elements |
|---|---|---|---|---|---|---|
| home | ok | no | 6 | 1 | 12 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| enroll | ok | no | 21 | 1 | 13 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| careers | ok | no | 1 | 1 | 11 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| donate | ok | no | 1 | 1 | 10 | header#header (7%); html > body.wp-singular.page-t (93%) |
| school | ok | no | 9 | 1 | 16 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| news | ok | no | 1 | 9 | 11 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| es-home | ok | no | 6 | 1 | 12 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| contact | ok | no | 1 | 1 | 11 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| campaign-lp | ok | no | 4 | 1 | 12 | header#header (7%); html > body.wp-singular.page-t (93%) |

Text under 12px (home, first 5):

- 11.2px `body.home.wp-singular > footer.footer > div.footer__copyright > div.co` — "© 2017-2026 Uncommon Schools, Inc. All r"

Tap targets under 24×24 CSS px (home, first 8):

- 20×15px `header#header > a.skipto` — "Skip to Main Content"
- 58×15px `section.block.block--content > div.container.container--lg > div.text-` — "visit here"
- 152×21px `div.container > div.row.align-items-start > div.col-12.col-md-4 > p > ` — "Uncommon Home"
- 46×20px `li#menu-item-484 > a` — "Enroll"
- 59×20px `li#menu-item-481 > a` — "About Us"
- 65×20px `li#menu-item-482 > a` — "Campuses"
- 52×20px `li#menu-item-486 > a` — "Results"
- 54×20px `li#menu-item-638 > a` — "Careers"

### Mobile navigation

- Enroll/Apply link visible somewhere on loaded homepage: True
- Menu toggle present: True; menu opened by standard click: False

### Entry popup (Thrive Leads lightbox)

- Appears on page load, covers full viewport: **"School Year 2026-27 Applications Open! Secure your spot today! Apply Today!"**
- Dismissible with Escape key: **False**
- Dismiss control reachable by Tab (15 stops): **False**
- Overlay `div.tve_p_lb_overlay` intercepts taps on the header menu button while open (WCAG 2.1.2 / 2.4.3).

Screenshots for every page at both viewports: `screenshots/northstar.uncommonschools.org/`.

## 4. Cookies and tracking

Cookies after first load of homepage (no interaction, fresh profile): **22**. No cookie consent banner exists on this domain.

| Cookie | Domain | Expiry |
|---|---|---|
| `tlf_8` | northstar.uncommonschools.org | 2026-08-27 |
| `HandLtestDomainName` | .uncommonschools.org | session |
| `handlID` | .uncommonschools.org | 2026-09-25 |
| `handl_url_base` | .uncommonschools.org | 2026-09-25 |
| `handl_url` | .uncommonschools.org | 2026-09-25 |
| `handl_ref` | .uncommonschools.org | 2026-09-25 |
| `handl_ref_domain` | .uncommonschools.org | 2026-09-25 |
| `handl_landing_page` | .uncommonschools.org | 2026-09-25 |
| `handl_landing_page_base` | .uncommonschools.org | 2026-09-25 |
| `handl_original_ref` | .uncommonschools.org | 2026-09-25 |
| `organic_source` | .uncommonschools.org | 2026-09-25 |
| `organic_source_str` | .uncommonschools.org | 2026-09-25 |
| `traffic_source` | .uncommonschools.org | 2026-09-25 |
| `first_traffic_source` | .uncommonschools.org | 2026-09-25 |
| `user_agent` | .uncommonschools.org | 2026-09-25 |
| `fundraiseup_cid` | .uncommonschools.org | 2027-09-30 |
| `fundraiseup_stat` | .uncommonschools.org | session |
| `fundraiseup_func` | .uncommonschools.org | session |
| `_fbp` | .uncommonschools.org | 2026-11-24 |
| `tve_leads_unique` | northstar.uncommonschools.org | 2026-09-25 |
| `tl_1010_1218_8` | northstar.uncommonschools.org | 2026-09-25 |
| `tl_1010_1012_12` | northstar.uncommonschools.org | 2026-09-25 |

Server-set cookies (Set-Cookie headers, first load):

- from `https://northstar.uncommonschools.org/`: `HandLtestDomainNameServer=HandLtestDomainValueServer; expires=Thu, 27 Aug 2026 20:58:48 GMT; Max-Age=86400; pa`
- from `https://cdn.fundraiseup.com/widget/AXGXSELV`: `fundraiseup_cid=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=.fundraiseup.com; path=/; SameSite=None; Secur`
- from `https://www.facebook.com/tr/?id=1361730677310357&ev=PageView&dl=https%`: `fr=0CtaLwIA27v02AewC..Bqj1OI...1.0.Bqj1OI.; expires=Tuesday, 24-Nov-2026 20:58:48 GMT; path=/; domain=.faceboo`
- from `https://northstar.uncommonschools.org/wp-admin/admin-ajax.php`: `HandLtestDomainNameServer=HandLtestDomainValueServer; expires=Thu, 27 Aug 2026 20:58:48 GMT; Max-Age=86400; pa`
- from `https://northstar.uncommonschools.org/wp-admin/admin-ajax.php`: `HandLtestDomainNameServer=HandLtestDomainValueServer; expires=Thu, 27 Aug 2026 20:58:48 GMT; Max-Age=86400; pa`

Tag containers detected (`window.google_tag_manager`): none — gtag.js loads directly

Analytics/ad requests on page load:

- `https://www.googletagmanager.com/gtag/js?id=G-88J23DQ2FN`
- `https://connect.facebook.net/en_US/fbevents.js`
- `https://connect.facebook.net/signals/config/1361730677310357?v=2.9.385&r=stable&domain=northstar.uncommonschools.org&im=1&hme=1a72ec78e057d90ba48afa55`
- `https://www.facebook.com/tr/?id=1361730677310357&ev=PageView&dl=https%3A%2F%2Fnorthstar.uncommonschools.org%2F&rl=&if=false&ts=1787777928717&iw=false&`

Analytics requests fired on primary CTA click ("Enroll"): 0

## 5. Integration traces (clicks followed, no forms submitted)

### Enrollment

| CTA text | Link href | Final URL after redirects |
|---|---|---|
| Enroll your child today! | `https://newarkcommonapp.org/` | `https://newarkcommonapp.org/` |
| Apply Now! | `http://www.newarkcommonapp.org/` | `https://newarkcommonapp.org/` |

### Careers

- Careers CTA click chain → **`https://careers.smartrecruiters.com/UncommonSchools/northstar-web`**

### Donate

- FundraiseUp widget loads: `https://cdn.fundraiseup.com/widget/AXGXSELV` (widget ID **AXGXSELV**). Checkout JS loads on the donate page; no payment was initiated.
- Donate page heading order: Donate

## 6. Per-page content metrics (rendered DOM, desktop)

| Page | Words | Title | Meta desc | Canonical | hreflang | JSON-LD types | OG tags | Links in/ext | Imgs |
|---|---|---|---|---|---|---|---|---|---|
| home | 619 | Homepage - Uncommon Schools Newark | **MISSING** | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 47/9 | 11 (11png) |
| enroll | 1566 | Enroll - Uncommon Schools Newark | yes | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 6 | 48/25 | 24 (11png,7svg,6jpg) |
| careers | 162 | Careers - Uncommon Schools Newark | **MISSING** | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 42/10 | 11 (10png,1jpg) |
| donate | 77 | Donate - Uncommon Schools Newark | **MISSING** | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 43/5 | 10 (10png) |
| school | 676 | Alexander Street ES - Uncommon Schools Newark | **MISSING** | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 49/8 | 13 (12png,1jpg) |
| news | 149 | News - Uncommon Schools Newark | **MISSING** | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 42/16 | 10 (10png) |
| es-home | 744 | Homepage - Uncommon Schools Newark | **MISSING** | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 47/9 | 11 (11png) |
| contact | 135 | Contact - Uncommon Schools Newark | **MISSING** | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 42/8 | 10 (10png) |
| campaign-lp | 352 | 26-27 School Year Enrollment Programmatic - U | **MISSING** | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 46/7 | 10 (10png) |

## 7. Site-wide

- robots.txt, llms.txt, sitemap files saved verbatim in `raw/` (prefix `northstar.uncommonschools.org_`).
- Site search: **absent**
- Primary nav: Enroll, About North Star, Student Experience, Campuses, Results, Family Resources, Donate
