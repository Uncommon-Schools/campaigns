# camdenprep.uncommonschools.org — Browser Audit

**Audited:** 2026-08-26 · Playwright/Chromium 151 + Lighthouse 13.4.1 · Mobile 375x812@3x (simulated 4G) and Desktop 1440x900 · every page loaded fresh (no cache, no cookies).

- Resolves: **200** → `https://camdenprep.uncommonschools.org/` · server: `nginx` · HTTP/2 · HSTS on
- Site #6 of the WordPress **multisite** (uploads at `wp-content/uploads/sites/6/`), nginx at 134.209.175.171. Theme `uncommon-region-theme`.

## 1. Performance (Lighthouse, median of 3 runs)

Raw JSON per page/viewport in `lighthouse/`. Mobile = 375x812 @3x, simulated 4G; Desktop = 1440x900.

> **Reading LCP here:** pages with the auto-rotating hero carousel report extreme LCP (up to 79–310s). Each slide rotation paints a new, larger LCP candidate, so the metric keeps climbing for as long as the carousel runs under throttling. The real first hero paint is at ~0.8–4s (PerformanceObserver capture in `data`). Treat FCP / Speed Index / TBT as the representative load metrics on carousel pages — and note the same carousel has no pause control (see §2).

### Mobile

| Page | Perf | LCP | CLS | TBT | FCP | SI | TTFB | Weight | Req | Unused JS | Unused CSS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [home](https://camdenprep.uncommonschools.org/) | **59** | 10.9s | 0.123 | 222ms | 1.1s | 8.4s | 881ms | 3.2MB | 135 | 930KB | 180KB |
| [enroll](https://camdenprep.uncommonschools.org/enroll/) | **54** | 103.6s | 0.143 | 252ms | 1.5s | 27.4s | 558ms | 20.9MB | 52 | 759KB | 25KB |
| [careers](https://camdenprep.uncommonschools.org/careers/) | **60** | 10.1s | 0.103 | 234ms | 1.0s | 8.2s | 548ms | 2.5MB | 113 | 933KB | 181KB |
| [donate](https://camdenprep.uncommonschools.org/donate/) | **76** | 5.7s | 0.037 | 119ms | 1.3s | 4.0s | 921ms | 1.8MB | 47 | 768KB | 26KB |
| [school](https://camdenprep.uncommonschools.org/copewood-es/) | **63** | 12.4s | 0.086 | 130ms | 1.0s | 10.3s | 660ms | 4.0MB | 124 | 926KB | 179KB |
| [news](https://camdenprep.uncommonschools.org/news/) | **37** | 19.3s | 1.040 | 266ms | 1.1s | 8.8s | 1.2s | 4.6MB | 120 | 921KB | 181KB |
| [es-home](https://camdenprep.uncommonschools.org/es/) | **49** | 10.0s | 0.249 | 234ms | 1.1s | 9.8s | 1.7s | 3.3MB | 138 | 930KB | 180KB |
| [contact](https://camdenprep.uncommonschools.org/contact/) | **58** | 16.6s | 0.111 | 269ms | 1.1s | 9.1s | 649ms | 2.3MB | 119 | 931KB | 181KB |
| [campaign-lp](https://camdenprep.uncommonschools.org/26-27-school-year-enrollment-prog/) | **67** | 7.0s | 0.048 | 278ms | 1.0s | 5.0s | 533ms | 2.3MB | 74 | 936KB | 25KB |
| [test-page](https://camdenprep.uncommonschools.org/test/) | **87** | 3.5s | 0.073 | 171ms | 1.3s | 1.4s | 495ms | 1.5MB | 42 | 770KB | 27KB |

### Desktop

| Page | Perf | LCP | CLS | TBT | FCP | SI | TTFB | Weight | Req | Unused JS | Unused CSS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [home](https://camdenprep.uncommonschools.org/) | **80** | 2.3s | 0.095 | 0ms | 406ms | 2.7s | 571ms | 3.3MB | 135 | 930KB | 180KB |
| [enroll](https://camdenprep.uncommonschools.org/enroll/) | **61** | 16.7s | 0.118 | 0ms | 359ms | 8.8s | 1.1s | 20.9MB | 52 | 759KB | 25KB |
| [careers](https://camdenprep.uncommonschools.org/careers/) | **86** | 1.9s | 0.055 | 0ms | 384ms | 2.2s | 594ms | 2.5MB | 113 | 933KB | 181KB |
| [donate](https://camdenprep.uncommonschools.org/donate/) | **94** | 1.5s | 0.064 | 0ms | 352ms | 931ms | 565ms | 1.8MB | 48 | 769KB | 26KB |
| [school](https://camdenprep.uncommonschools.org/copewood-es/) | **77** | 2.4s | 0.107 | 0ms | 400ms | 2.8s | 684ms | 4.0MB | 124 | 925KB | 179KB |
| [news](https://camdenprep.uncommonschools.org/news/) | **51** | 3.8s | 0.686 | 0ms | 476ms | 2.4s | 549ms | 4.6MB | 120 | 921KB | 181KB |
| [es-home](https://camdenprep.uncommonschools.org/es/) | **73** | 2.4s | 0.171 | 0ms | 466ms | 2.6s | 596ms | 3.3MB | 138 | 930KB | 180KB |
| [contact](https://camdenprep.uncommonschools.org/contact/) | **84** | 2.0s | 0.058 | 0ms | 396ms | 2.6s | 620ms | 2.3MB | 119 | 931KB | 181KB |
| [campaign-lp](https://camdenprep.uncommonschools.org/26-27-school-year-enrollment-prog/) | **93** | 1.4s | 0.088 | 0ms | 391ms | 1.4s | 541ms | 2.3MB | 74 | 937KB | 25KB |
| [test-page](https://camdenprep.uncommonschools.org/test/) | **100** | 732ms | 0.037 | 0ms | 355ms | 519ms | 508ms | 1.5MB | 42 | 770KB | 27KB |

**Real transfer on first load (Playwright, no throttling):**

| Page | VP | Total | JS | Images | Requests |
|---|---|---|---|---|---|
| home | mobile | 3.3MB | 2.1MB | 786KB | 137 |
| enroll | mobile | 20.9MB | 1.4MB | 19.4MB | 52 |
| careers | mobile | 2.5MB | 1.8MB | 373KB | 115 |
| donate | mobile | 1.8MB | 1.4MB | 275KB | 48 |
| school | mobile | 4.0MB | 1.8MB | 1.9MB | 126 |
| news | mobile | 4.6MB | 1.8MB | 2.4MB | 122 |
| es-home | mobile | 3.3MB | 2.2MB | 786KB | 140 |
| contact | mobile | 2.3MB | 1.9MB | 149KB | 121 |
| campaign-lp | mobile | 2.3MB | 1.8MB | 382KB | 75 |
| test-page | mobile | 1.5MB | 1.4MB | 71KB | 42 |

## 2. Accessibility (axe-core 4.x + manual checks)

### axe violations by page

| Page | VP | Rule | Impact | WCAG | Count | Example selector |
|---|---|---|---|---|---|---|
| home | M | `button-name` | critical | wcag2a,wcag412 | 1 | `button` |
| home | M | `heading-order` | moderate | — | 5 | `.content__title > h3` |
| home | M | `region` | moderate | — | 6 | `#trp-floater-ls` |
| home | D | `heading-order` | moderate | — | 5 | `.content__title > h3` |
| home | D | `region` | moderate | — | 6 | `#trp-floater-ls` |
| enroll | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| enroll | M | `heading-order` | moderate | — | 3 | `.container--md.container > .text-content > .content__title > h3` |
| enroll | M | `region` | moderate | — | 1 | `#trp-floater-ls` |
| enroll | D | `heading-order` | moderate | — | 3 | `.container--md.container > .text-content > .content__title > h3` |
| enroll | D | `region` | moderate | — | 1 | `#trp-floater-ls` |
| careers | M | `button-name` | critical | wcag2a,wcag412 | 1 | `button` |
| careers | M | `region` | moderate | — | 6 | `#trp-floater-ls` |
| careers | D | `region` | moderate | — | 6 | `#trp-floater-ls` |
| donate | M | `button-name` | critical | wcag2a,wcag412 | 1 | `button` |
| donate | M | `page-has-heading-one` | moderate | — | 1 | `html` |
| donate | M | `region` | moderate | — | 1 | `#trp-floater-ls` |
| donate | D | `page-has-heading-one` | moderate | — | 1 | `html` |
| donate | D | `region` | moderate | — | 1 | `#trp-floater-ls` |
| school | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| school | M | `heading-order` | moderate | — | 4 | `.block--content:nth-child(2) > .container--md.container > .text-content > .conte` |
| school | M | `region` | moderate | — | 6 | `#trp-floater-ls` |
| school | D | `heading-order` | moderate | — | 4 | `.block--content:nth-child(2) > .container--md.container > .text-content > .conte` |
| school | D | `region` | moderate | — | 6 | `#trp-floater-ls` |
| news | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| news | M | `heading-order` | moderate | — | 1 | `.card.an-child[target="_blank"]:nth-child(1) > .card__bg > .card__content.fade-b` |
| news | M | `region` | moderate | — | 6 | `#trp-floater-ls` |
| news | D | `color-contrast` | serious | wcag2aa,wcag143 | 8 | `#menu-item-2086 > a` |
| news | D | `heading-order` | moderate | — | 1 | `.card.an-child[target="_blank"]:nth-child(1) > .card__bg > .card__content.fade-b` |
| news | D | `region` | moderate | — | 6 | `#trp-floater-ls` |
| es-home | M | `button-name` | critical | wcag2a,wcag412 | 1 | `button` |
| es-home | M | `heading-order` | moderate | — | 5 | `.content__title > h3` |
| es-home | M | `region` | moderate | — | 6 | `#trp-floater-ls` |
| es-home | D | `heading-order` | moderate | — | 5 | `.content__title > h3` |
| es-home | D | `region` | moderate | — | 6 | `#trp-floater-ls` |
| contact | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| contact | M | `region` | moderate | — | 6 | `#trp-floater-ls` |
| contact | D | `region` | moderate | — | 6 | `#trp-floater-ls` |
| campaign-lp | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| campaign-lp | M | `color-contrast` | serious | wcag2aa,wcag143 | 2 | `a[target="”_blank”"]` |
| campaign-lp | M | `heading-order` | moderate | — | 1 | `.card.card--reveal.card--threeby:nth-child(1) > .card__bg > .card__content.fade-` |
| campaign-lp | M | `page-has-heading-one` | moderate | — | 2 | `html` |
| campaign-lp | M | `region` | moderate | — | 1 | `#trp-floater-ls` |
| campaign-lp | D | `color-contrast` | serious | wcag2aa,wcag143 | 10 | `#menu-item-2086 > a` |
| campaign-lp | D | `heading-order` | moderate | — | 1 | `.card.card--reveal.card--threeby:nth-child(1) > .card__bg > .card__content.fade-` |
| campaign-lp | D | `page-has-heading-one` | moderate | — | 2 | `html` |
| campaign-lp | D | `region` | moderate | — | 1 | `#trp-floater-ls` |
| test-page | M | `button-name` | critical | wcag2a,wcag412 | 1 | `button` |
| test-page | M | `page-has-heading-one` | moderate | — | 1 | `html` |
| test-page | M | `region` | moderate | — | 1 | `#trp-floater-ls` |
| test-page | D | `page-has-heading-one` | moderate | — | 1 | `html` |
| test-page | D | `region` | moderate | — | 1 | `#trp-floater-ls` |

### Images missing alt attribute

*(none found on audited pages)*

### Heading structure issues

| Page | H1 count | Skipped levels (first 3) |
|---|---|---|
| home | 3 | H1→H3, H3→H6, H3→H5 |
| enroll | 1 | H1→H3, H3→H5, H3→H5 |
| careers | 2 | — |
| donate | 0 | — |
| school | 3 | H1→H3, H3→H5, H3→H6 |
| news | 2 | H3→H6 |
| es-home | 3 | H1→H3, H3→H6, H3→H5 |
| contact | 2 | — |
| campaign-lp | 0 | H3→H5 |
| test-page | 0 | — |

### Form inputs: labels and autocomplete

| Page | Form | Field | Type | Labeled | autocomplete |
|---|---|---|---|---|---|
| contact | `form#gform_1` | input_1.3 | text | yes | **missing** |
| contact | `form#gform_1` | input_1.6 | text | yes | **missing** |
| contact | `form#gform_1` | input_2 | email | yes | **missing** |
| contact | `form#gform_1` | input_6 | tel | yes | **missing** |
| contact | `form#gform_1` | input_7 | select-one | yes | **missing** |
| contact | `form#gform_1` | input_8 | select-one | yes | **missing** |
| contact | `form#gform_1` | input_4 | textarea | yes | **missing** |
| contact | `form#gform_1` | ak_hp_textarea | textarea | yes | **missing** |
| campaign-lp | `form#gform_31` | input_4.3 | text | yes | **missing** |
| campaign-lp | `form#gform_31` | input_4.6 | text | yes | **missing** |
| campaign-lp | `form#gform_31` | input_8 | email | yes | **missing** |
| campaign-lp | `form#gform_31` | input_9 | tel | yes | **missing** |
| campaign-lp | `form#gform_31` | input_14 | number | yes | **missing** |
| campaign-lp | `form#gform_31` | input_7 | select-one | yes | **missing** |
| campaign-lp | `form#gform_31` | input_5 | text | yes | **missing** |
| campaign-lp | `form#gform_31` | input_13 | select-one | yes | **missing** |
| campaign-lp | `form#gform_31` | input_23 | select-one | yes | **missing** |
| campaign-lp | `form#gform_31` | input_20.1 | checkbox | yes | **missing** |
| campaign-lp | `form#gform_31` | g-recaptcha-response | textarea | **NO** | **missing** |
| campaign-lp | `form#gform_31` | ak_hp_textarea | textarea | yes | **missing** |

### Keyboard navigation (desktop, up to 110 tab stops per page)

| Page | Tab stops | Elements w/o visible focus | Keyboard trap |
|---|---|---|---|
| home | 24 | 7 | **YES** at `div.container.container--lg>div.text-content>div>iframe` (stop 24) |
| enroll | 38 | 0 | **YES** at `div#accordion-7-0>div.accordion>button.accordion__toggle.col` (stop 38) |
| careers | 107 | 0 | no |
| donate | 107 | 0 | no |
| contact | 108 | 0 | no |
| campaign-lp | 109 | 2 | no |

Elements with no visible focus indicator on `home` (first 8):

- `div.container.container--lg>div.text-content>div>iframe` — ""
- `div.container.container--lg>div.text-content>div>iframe` — ""
- `div.container.container--lg>div.text-content>div>iframe` — ""
- `div.container.container--lg>div.text-content>div>iframe` — ""
- `div.container.container--lg>div.text-content>div>iframe` — ""
- `div.container.container--lg>div.text-content>div>iframe` — ""
- `div.container.container--lg>div.text-content>div>iframe` — ""

Elements with no visible focus indicator on `campaign-lp` (first 8):

- `div#input_31_26>div>div>iframe` — ""
- `div#input_31_26>div>div>iframe` — ""

### Carousels, autoplay, media

- `enroll`: carousel `main#content > section.block.block--video > div.container > div.videos` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `school`: carousel `main#content > section.block.block--carousel` — controls: , , 1 of 4, 2 of 4, 3 of 4, 4 of 4; pause/stop control: **NO** (WCAG 2.2.2)
- `school`: carousel `main#content > section.block.block--carousel > div.container > div.car` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `school`: carousel `section.block.block--carousel > div.container > div.row.justify-conten` — controls: , , 1 of 4, 2 of 4, 3 of 4, 4 of 4; pause/stop control: **NO** (WCAG 2.2.2)

### Color contrast — undetermined pairs (text over images/gradients; manual check needed)

- `home`: `body` — Element has a 1:1 contrast ratio with the background
- `home`: `.hero__content > h1` — Element's background color could not be determined due to a pseudo element
- `home`: `.hero__content > p` — Element's background color could not be determined due to a pseudo element
- `enroll`: `body` — Element has a 1:1 contrast ratio with the background
- `enroll`: `h6` — Element's background color could not be determined due to a pseudo element
- `enroll`: `h1` — Element's background color could not be determined due to a pseudo element
- `careers`: `body` — Element has a 1:1 contrast ratio with the background
- `careers`: `.feature__content > h3` — Element's background color could not be determined due to a background image
- `careers`: `.feature__content > p:nth-child(2)` — Element's background color could not be determined due to a background image
- `donate`: `body` — Element has a 1:1 contrast ratio with the background
- `donate`: `h3` — Element's background color could not be determined due to a background image
- `donate`: `.feature__content > p:nth-child(2)` — Element's background color could not be determined due to a background image
- `school`: `body` — Element has a 1:1 contrast ratio with the background
- `school`: `.hero__content > h1` — Element's background color could not be determined due to a pseudo element
- `school`: `.hero__content > p:nth-child(2)` — Element's background color could not be determined due to a pseudo element

### Landmarks, skip link, language

- Skip link: `Skip to Main Content` → `#content`
- `<html lang>`: `en-US`
- Landmarks (home): main×1, nav×2, header×1, footer×1
- `/es/` lang attr: `es-MX` — 200-word sample: "1 Homepage - Uncommon Schools Camden Uncommon Schools Camden Prep Somos una escuela pública gratuita que sirve a los grados Pre-K a 12 en Camden, NJ. A través de nuestras cuatro escuelas, nuestros estudiantes se están preparando para alcanzar sus sue…"

## 3. Mobile usability (375x812 @3x)

| Page | Viewport meta | Horiz. scroll | Text <16px | Text <12px | Small tap targets (<24px) | Fixed/sticky elements |
|---|---|---|---|---|---|---|
| home | ok | no | 3 | 1 | 13 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| enroll | ok | no | 11 | 1 | 12 | header#header (7%); html > body.wp-singular.page-t (93%) |
| careers | ok | no | 1 | 1 | 12 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| donate | ok | no | 1 | 1 | 10 | header#header (7%); html > body.wp-singular.page-t (93%) |
| school | ok | no | 4 | 1 | 16 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| news | ok | no | 1 | 9 | 12 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| es-home | ok | no | 3 | 1 | 13 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| contact | ok | no | 1 | 1 | 12 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| campaign-lp | ok | no | 5 | 1 | 12 | header#header (7%); html > body.wp-singular.page-t (93%) |
| test-page | ok | no | 1 | 1 | 10 | header#header (7%); html > body.wp-singular.page-t (93%) |

Text under 12px (home, first 5):

- 11.2px `body.home.wp-singular > footer.footer > div.footer__copyright > div.co` — "© 2017-2026 Uncommon Schools, Inc. All r"

Tap targets under 24×24 CSS px (home, first 8):

- 20×15px `header#header > a.skipto` — "Skip to Main Content"
- 43×15px `section.block.block--content > div.container.container--md > div.text-` — "posted"
- 152×21px `div.container > div.row.align-items-start > div.col-12.col-md-4 > p > ` — "Uncommon Home"
- 46×20px `li#menu-item-541 > a` — "Enroll"
- 59×20px `li#menu-item-536 > a` — "About Us"
- 65×20px `li#menu-item-537 > a` — "Campuses"
- 52×20px `li#menu-item-542 > a` — "Results"
- 54×20px `li#menu-item-538 > a` — "Careers"

### Mobile navigation

- Enroll/Apply link visible somewhere on loaded homepage: True
- Menu toggle present: True; menu opened by standard click: False

### Entry popup (Thrive Leads lightbox)

- Appears on page load, covers full viewport: **"Seats Still Available! Apply for 2026-27 School Year! START YOUR APPLICATION LEARN ABOUT OUR NEW PRE"**
- Dismissible with Escape key: **False**
- Dismiss control reachable by Tab (15 stops): **False**
- Overlay `div.tve_p_lb_overlay` intercepts taps on the header menu button while open (WCAG 2.1.2 / 2.4.3).

Screenshots for every page at both viewports: `screenshots/camdenprep.uncommonschools.org/`.

## 4. Cookies and tracking

Cookies after first load of homepage (no interaction, fresh profile): **24**. No cookie consent banner exists on this domain.

| Cookie | Domain | Expiry |
|---|---|---|
| `tlf_3` | camdenprep.uncommonschools.org | 2026-08-27 |
| `__cf_bm` | .vimeo.com | 2026-08-26 |
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
| `vuid` | .vimeo.com | 2027-09-30 |
| `tve_leads_unique` | camdenprep.uncommonschools.org | 2026-09-25 |
| `tl_732_733_2` | camdenprep.uncommonschools.org | 2026-09-25 |
| `tl_732_983_3` | camdenprep.uncommonschools.org | 2026-09-25 |

Server-set cookies (Set-Cookie headers, first load):

- from `https://camdenprep.uncommonschools.org/`: `HandLtestDomainNameServer=HandLtestDomainValueServer; expires=Thu, 27 Aug 2026 21:00:38 GMT; Max-Age=86400; pa`
- from `https://player.vimeo.com/api/player.js`: `__cf_bm=BqDXg0FJgWquWDpBJupZp38N090n24BiZopOb.MUKa8-1787778038.776104-1.0.1.1-YN0Be1AXHjH1.ZIhRGL0Kvo1X0_U3H0b`
- from `https://cdn.fundraiseup.com/widget/AXGXSELV`: `fundraiseup_cid=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=.fundraiseup.com; path=/; SameSite=None; Secur`
- from `https://www.facebook.com/tr/?id=1361730677310357&ev=PageView&dl=https%`: `fr=0SChNwjtG2BRbRXnw..Bqj1P3...1.0.Bqj1P3.; expires=Tuesday, 24-Nov-2026 21:00:39 GMT; path=/; domain=.faceboo`
- from `https://camdenprep.uncommonschools.org/wp-admin/admin-ajax.php`: `HandLtestDomainNameServer=HandLtestDomainValueServer; expires=Thu, 27 Aug 2026 21:00:39 GMT; Max-Age=86400; pa`
- from `https://camdenprep.uncommonschools.org/wp-admin/admin-ajax.php`: `HandLtestDomainNameServer=HandLtestDomainValueServer; expires=Thu, 27 Aug 2026 21:00:39 GMT; Max-Age=86400; pa`
- from `https://vimeo.com/flarepoint/orion/v3/identity/settings`: `__cf_bm=l6z3ujT9CIsGc6McxDqbTUKdqLiSwrE8IDaF6WV_Yb0-1787778039.5311573-1.0.1.1-9kFCD4bwPvzMh4hm4H_SWrjFzMaesJY`
- from `https://vimeo.com/flarepoint/orion/v3/identity/settings`: `__cf_bm=di7rKwtyP.lSxLhX7cmt2J.U0A94iTThctoGVEeah50-1787778039.6196783-1.0.1.1-uouBo87VgVMk6BFr5ah.lA1Zksy7Cma`

Tag containers detected (`window.google_tag_manager`): none — gtag.js loads directly

Analytics/ad requests on page load:

- `https://connect.facebook.net/en_US/fbevents.js`
- `https://connect.facebook.net/en_US/sdk.js`
- `https://connect.facebook.net/signals/config/1361730677310357?v=2.9.385&r=stable&domain=camdenprep.uncommonschools.org&im=1&hme=1a72ec78e057d90ba48afa5`
- `https://connect.facebook.net/en_US/bundle/sdk.js/`
- `https://www.facebook.com/tr/?id=1361730677310357&ev=PageView&dl=https%3A%2F%2Fcamdenprep.uncommonschools.org%2F&rl=&if=false&ts=1787778039153&iw=false`

Analytics requests fired on primary CTA click ("Enroll"): 0

## 5. Integration traces (clicks followed, no forms submitted)

### Enrollment

| CTA text | Link href | Final URL after redirects |
|---|---|---|
| Camden Enrollment | `https://www.onecamden.org/` | `https://onecamden.org/` |
| Camden Enrollment | `https://www.camdenenrollment.org/` | `https://www.camdenenrollment.org/` |

### Careers

- Careers CTA click chain → **`https://careers.smartrecruiters.com/UncommonSchools/camdenprep-web`**

### Donate

- FundraiseUp widget loads: `https://cdn.fundraiseup.com/widget/AXGXSELV` (widget ID **AXGXSELV**). Checkout JS loads on the donate page; no payment was initiated.
- Donate page heading order: Donate

## 6. Per-page content metrics (rendered DOM, desktop)

| Page | Words | Title | Meta desc | Canonical | hreflang | JSON-LD types | OG tags | Links in/ext | Imgs |
|---|---|---|---|---|---|---|---|---|---|
| home | 456 | Homepage - Uncommon Schools Camden | **MISSING** | yes | 13 | BreadcrumbList, ListItem, Organization, ReadAction, SearchAc | 10 | 57/3 | 12 (12png) |
| enroll | 1321 | Enroll - Uncommon Schools Camden | **MISSING** | yes | 13 | BreadcrumbList, ListItem, Organization, ReadAction, SearchAc | 10 | 55/15 | 12 (12png) |
| careers | 171 | Careers - Uncommon Schools Camden | **MISSING** | yes | 13 | BreadcrumbList, ListItem, Organization, ReadAction, SearchAc | 10 | 52/5 | 12 (11png,1jpg) |
| donate | 77 | Donate - Uncommon Schools Camden | **MISSING** | yes | 13 | BreadcrumbList, ListItem, Organization, ReadAction, SearchAc | 10 | 50/1 | 11 (11png) |
| school | 689 | Copewood Elementary School - Uncommon Schools | **MISSING** | yes | 13 | BreadcrumbList, ListItem, Organization, ReadAction, SearchAc | 10 | 59/3 | 13 (11png,2jpg) |
| news | 171 | News - Uncommon Schools Camden | **MISSING** | yes | 13 | BreadcrumbList, ListItem, Organization, ReadAction, SearchAc | 10 | 52/11 | 11 (11png) |
| es-home | 505 | Homepage - Uncommon Schools Camden | **MISSING** | yes | 13 | BreadcrumbList, ListItem, Organization, ReadAction, SearchAc | 10 | 57/3 | 12 (12png) |
| contact | 127 | Contact - Uncommon Schools Camden | **MISSING** | yes | 13 | BreadcrumbList, ListItem, Organization, ReadAction, SearchAc | 10 | 52/3 | 11 (11png) |
| campaign-lp | 346 | 26-27 School Year Enrollment Programmatic - U | **MISSING** | yes | 13 | BreadcrumbList, ListItem, Organization, ReadAction, SearchAc | 10 | 53/3 | 11 (11png) |
| test-page | 16 | TEST - Uncommon Schools Camden | **MISSING** | yes | 13 | BreadcrumbList, ListItem, Organization, ReadAction, SearchAc | 10 | 49/1 | 11 (11png) |

## 7. Site-wide

- robots.txt, llms.txt, sitemap files saved verbatim in `raw/` (prefix `camdenprep.uncommonschools.org_`).
- Site search: **absent**
- Primary nav: Enroll, About Camden Prep, Student Experience, Campuses, Results, Family Resources, Donate
