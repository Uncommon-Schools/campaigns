# nyc.uncommonschools.org — Browser Audit

**Audited:** 2026-08-26 · Playwright/Chromium 151 + Lighthouse 13.4.1 · Mobile 375x812@3x (simulated 4G) and Desktop 1440x900 · every page loaded fresh (no cache, no cookies).

- Resolves: **200** → `https://nyc.uncommonschools.org/` · server: `nginx` · HTTP/2 · HSTS on
- Site #7 of the WordPress **multisite** (uploads at `wp-content/uploads/sites/7/`), nginx at 134.209.175.171. Theme `uncommon-region-theme`.

## 1. Performance (Lighthouse, median of 3 runs)

Raw JSON per page/viewport in `lighthouse/`. Mobile = 375x812 @3x, simulated 4G; Desktop = 1440x900.

> **Reading LCP here:** pages with the auto-rotating hero carousel report extreme LCP (up to 79–310s). Each slide rotation paints a new, larger LCP candidate, so the metric keeps climbing for as long as the carousel runs under throttling. The real first hero paint is at ~0.8–4s (PerformanceObserver capture in `data`). Treat FCP / Speed Index / TBT as the representative load metrics on carousel pages — and note the same carousel has no pause control (see §2).

### Mobile

| Page | Perf | LCP | CLS | TBT | FCP | SI | TTFB | Weight | Req | Unused JS | Unused CSS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [home](https://nyc.uncommonschools.org/) | **60** | 16.2s | 0.123 | 140ms | 1.1s | 9.7s | 554ms | 4.1MB | 124 | 1005KB | 180KB |
| [enroll](https://nyc.uncommonschools.org/enroll/) | **57** | 17.7s | 0.106 | 258ms | 1.2s | 10.8s | 748ms | 6.3MB | 159 | 1.0MB | 179KB |
| [careers](https://nyc.uncommonschools.org/careers/) | **61** | 17.2s | 0.133 | 118ms | 1.1s | 8.8s | 699ms | 3.6MB | 120 | 1004KB | 181KB |
| [donate](https://nyc.uncommonschools.org/donate/) | **61** | 16.8s | 0.111 | 149ms | 1.1s | 9.4s | 507ms | 3.6MB | 123 | 1004KB | 181KB |
| [school](https://nyc.uncommonschools.org/bed-stuy-west-elementary/) | **63** | 18.1s | 0.084 | 146ms | 1.1s | 9.1s | 495ms | 5.3MB | 131 | 999KB | 179KB |
| [news](https://nyc.uncommonschools.org/news/) | **37** | 22.7s | 1.124 | 259ms | 1.1s | 8.4s | 639ms | 5.6MB | 127 | 994KB | 181KB |
| [es-home](https://nyc.uncommonschools.org/es/) | **56** | 17.2s | 0.192 | 144ms | 1.1s | 9.7s | 509ms | 4.1MB | 127 | 1007KB | 180KB |
| [contact](https://nyc.uncommonschools.org/contact/) | **62** | 15.5s | 0.109 | 126ms | 1.1s | 8.2s | 506ms | 3.4MB | 126 | 1005KB | 181KB |
| [campaign-lp](https://nyc.uncommonschools.org/26-27-school-year-enrollment-prog/) | **64** | 12.7s | 0.043 | 196ms | 1.4s | 7.6s | 509ms | 3.4MB | 81 | 1010KB | 25KB |

### Desktop

| Page | Perf | LCP | CLS | TBT | FCP | SI | TTFB | Weight | Req | Unused JS | Unused CSS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [home](https://nyc.uncommonschools.org/) | **71** | 3.4s | 0.116 | 0ms | 418ms | 2.6s | 531ms | 4.1MB | 124 | 1005KB | 180KB |
| [enroll](https://nyc.uncommonschools.org/enroll/) | **68** | 3.4s | 0.143 | 0ms | 466ms | 3.2s | 911ms | 6.3MB | 159 | 1.0MB | 180KB |
| [careers](https://nyc.uncommonschools.org/careers/) | **68** | 3.3s | 0.159 | 0ms | 391ms | 3.1s | 1.0s | 3.6MB | 120 | 1003KB | 181KB |
| [donate](https://nyc.uncommonschools.org/donate/) | **75** | 3.2s | 0.056 | 0ms | 399ms | 2.7s | 457ms | 3.6MB | 124 | 1004KB | 181KB |
| [school](https://nyc.uncommonschools.org/bed-stuy-west-elementary/) | **69** | 3.3s | 0.151 | 0ms | 393ms | 2.9s | 561ms | 5.3MB | 131 | 999KB | 179KB |
| [news](https://nyc.uncommonschools.org/news/) | **46** | 5.4s | 0.743 | 0ms | 413ms | 2.8s | 637ms | 5.6MB | 127 | 993KB | 180KB |
| [es-home](https://nyc.uncommonschools.org/es/) | **63** | 3.4s | 0.227 | 0ms | 434ms | 3.1s | 479ms | 4.1MB | 127 | 1007KB | 180KB |
| [contact](https://nyc.uncommonschools.org/contact/) | **73** | 3.2s | 0.098 | 0ms | 440ms | 2.8s | 451ms | 3.4MB | 126 | 1005KB | 181KB |
| [campaign-lp](https://nyc.uncommonschools.org/26-27-school-year-enrollment-prog/) | **81** | 2.2s | 0.128 | 0ms | 416ms | 1.8s | 419ms | 3.4MB | 81 | 1011KB | 25KB |

**Real transfer on first load (Playwright, no throttling):**

| Page | VP | Total | JS | Images | Requests |
|---|---|---|---|---|---|
| home | mobile | 4.1MB | 2.0MB | 1.7MB | 128 |
| enroll | mobile | 6.4MB | 2.9MB | 3.0MB | 168 |
| careers | mobile | 3.6MB | 2.0MB | 1.2MB | 124 |
| donate | mobile | 3.6MB | 2.0MB | 1.2MB | 128 |
| school | mobile | 5.3MB | 2.0MB | 2.9MB | 135 |
| news | mobile | 5.6MB | 2.0MB | 3.3MB | 131 |
| es-home | mobile | 4.1MB | 2.0MB | 1.7MB | 131 |
| contact | mobile | 3.4MB | 2.1MB | 1.0MB | 130 |
| campaign-lp | mobile | 3.4MB | 2.0MB | 1.2MB | 83 |

## 2. Accessibility (axe-core 4.x + manual checks)

### axe violations by page

| Page | VP | Rule | Impact | WCAG | Count | Example selector |
|---|---|---|---|---|---|---|
| home | M | `button-name` | critical | wcag2a,wcag412 | 1 | `button` |
| home | M | `heading-order` | moderate | — | 4 | `.container--md.container > h3` |
| home | M | `region` | moderate | — | 6 | `#trp-floater-ls` |
| home | D | `heading-order` | moderate | — | 4 | `.container--md.container > h3` |
| home | D | `region` | moderate | — | 6 | `#trp-floater-ls` |
| enroll | M | `aria-allowed-attr` | critical | wcag2a,wcag412 | 1 | `iframe .ytmVideoInfoVideoTitle` |
| enroll | M | `aria-allowed-role` | minor | — | 4 | `p:nth-child(3) > .wp-image-3537.alignleft[alt="checkmark symbol"]` |
| enroll | M | `aria-prohibited-attr` | serious | wcag2a,wcag412 | 1 | `iframe #movie_player` |
| enroll | M | `button-name` | critical | wcag2a,wcag412 | 2 | `.site-header__toggle` |
| enroll | M | `heading-order` | moderate | — | 1 | `.an-in.feature__content.an-up > h5` |
| enroll | M | `region` | moderate | — | 6 | `#trp-floater-ls` |
| enroll | M | `tabindex` | serious | — | 1 | `.active-content > .button-link` |
| enroll | D | `aria-allowed-attr` | critical | wcag2a,wcag412 | 1 | `iframe .ytmVideoInfoVideoTitle` |
| enroll | D | `aria-allowed-role` | minor | — | 4 | `p:nth-child(3) > .wp-image-3537.alignleft[alt="checkmark symbol"]` |
| enroll | D | `aria-prohibited-attr` | serious | wcag2a,wcag412 | 1 | `iframe #movie_player` |
| enroll | D | `button-name` | critical | wcag2a,wcag412 | 1 | `iframe .ytmVideoInfoChannelAvatar` |
| enroll | D | `heading-order` | moderate | — | 1 | `.an-in.feature__content.an-up > h5` |
| enroll | D | `region` | moderate | — | 6 | `#trp-floater-ls` |
| enroll | D | `tabindex` | serious | — | 1 | `.active-content > .button-link` |
| careers | M | `button-name` | critical | wcag2a,wcag412 | 1 | `button` |
| careers | M | `region` | moderate | — | 6 | `#trp-floater-ls` |
| careers | D | `region` | moderate | — | 6 | `#trp-floater-ls` |
| donate | M | `button-name` | critical | wcag2a,wcag412 | 1 | `button` |
| donate | M | `region` | moderate | — | 6 | `#trp-floater-ls` |
| donate | D | `region` | moderate | — | 6 | `#trp-floater-ls` |
| school | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| school | M | `heading-order` | moderate | — | 4 | `.col-auto:nth-child(1) > h5` |
| school | M | `region` | moderate | — | 6 | `#trp-floater-ls` |
| school | D | `heading-order` | moderate | — | 4 | `.col-auto:nth-child(1) > h5` |
| school | D | `region` | moderate | — | 6 | `#trp-floater-ls` |
| news | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| news | M | `heading-order` | moderate | — | 1 | `.card.an-child[target=""]:nth-child(1) > .card__bg > .card__content.fade-box.ful` |
| news | M | `region` | moderate | — | 6 | `#trp-floater-ls` |
| news | D | `color-contrast` | serious | wcag2aa,wcag143 | 9 | `#menu-item-5350 > a` |
| news | D | `heading-order` | moderate | — | 1 | `.card.an-child[target=""]:nth-child(1) > .card__bg > .card__content.fade-box.ful` |
| news | D | `region` | moderate | — | 6 | `#trp-floater-ls` |
| es-home | M | `button-name` | critical | wcag2a,wcag412 | 1 | `button` |
| es-home | M | `heading-order` | moderate | — | 4 | `.container--md.container > h3` |
| es-home | M | `region` | moderate | — | 6 | `#trp-floater-ls` |
| es-home | D | `heading-order` | moderate | — | 4 | `.container--md.container > h3` |
| es-home | D | `region` | moderate | — | 6 | `#trp-floater-ls` |
| contact | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| contact | M | `region` | moderate | — | 6 | `#trp-floater-ls` |
| contact | D | `region` | moderate | — | 6 | `#trp-floater-ls` |
| campaign-lp | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| campaign-lp | M | `color-contrast` | serious | wcag2aa,wcag143 | 2 | `a[target="”_blank”"]` |
| campaign-lp | M | `heading-order` | moderate | — | 1 | `.card.card--reveal.card--threeby:nth-child(1) > .card__bg > .card__content.fade-` |
| campaign-lp | M | `page-has-heading-one` | moderate | — | 2 | `html` |
| campaign-lp | M | `region` | moderate | — | 1 | `#trp-floater-ls` |
| campaign-lp | D | `color-contrast` | serious | wcag2aa,wcag143 | 11 | `#menu-item-5350 > a` |
| campaign-lp | D | `heading-order` | moderate | — | 1 | `.card.card--reveal.card--threeby:nth-child(1) > .card__bg > .card__content.fade-` |
| campaign-lp | D | `page-has-heading-one` | moderate | — | 2 | `html` |
| campaign-lp | D | `region` | moderate | — | 1 | `#trp-floater-ls` |

### Images missing alt attribute

- `enroll`: `https://nyc.uncommonschools.org/wp-content/uploads/sites/7/2024/07/noun-checkmark-6304777.png`
- `enroll`: `https://nyc.uncommonschools.org/wp-content/uploads/sites/7/2024/07/noun-spanish-1054666.png`
- `enroll`: `https://nyc.uncommonschools.org/wp-content/uploads/sites/7/2024/10/noun-2532364-FFB500.svg`
- `enroll`: `https://nyc.uncommonschools.org/wp-content/uploads/sites/7/2024/10/noun-home-education-3492789-FFB500.svg`
- `enroll`: `https://nyc.uncommonschools.org/wp-content/uploads/sites/7/2024/10/noun-online-education-3492766-FFB500.svg`
- `enroll`: `https://nyc.uncommonschools.org/wp-content/uploads/sites/7/2024/10/noun-clipboard-1268751-FFB500.svg`
- `enroll`: `https://nyc.uncommonschools.org/wp-content/uploads/sites/7/2024/10/noun-3492906-FFB500.svg`
- `enroll`: `https://nyc.uncommonschools.org/wp-content/uploads/sites/7/2024/10/noun-2736806-FFB500.svg`

### Heading structure issues

| Page | H1 count | Skipped levels (first 3) |
|---|---|---|
| home | 1 | H1→H3, H3→H5, H3→H6 |
| enroll | 0 | H3→H5 |
| careers | 0 | — |
| donate | 0 | — |
| school | 1 | H1→H5, H3→H5, H3→H6 |
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
| contact | `form#gform_1` | input_7 | select-one | yes | **missing** |
| contact | `form#gform_1` | input_8 | select-one | yes | **missing** |
| contact | `form#gform_1` | input_4 | textarea | yes | **missing** |
| contact | `form#gform_1` | ak_hp_textarea | textarea | yes | **missing** |
| campaign-lp | `form#gform_39` | input_9.3 | text | yes | **missing** |
| campaign-lp | `form#gform_39` | input_9.6 | text | yes | **missing** |
| campaign-lp | `form#gform_39` | input_2 | email | yes | **missing** |
| campaign-lp | `form#gform_39` | input_3 | tel | yes | **missing** |
| campaign-lp | `form#gform_39` | input_16.5 | text | yes | **missing** |
| campaign-lp | `form#gform_39` | input_6 | select-one | yes | **missing** |
| campaign-lp | `form#gform_39` | input_14 | text | yes | **missing** |
| campaign-lp | `form#gform_39` | input_13 | select-one | yes | **missing** |
| campaign-lp | `form#gform_39` | input_23.1 | checkbox | yes | **missing** |
| campaign-lp | `form#gform_39` | g-recaptcha-response | textarea | **NO** | **missing** |
| campaign-lp | `form#gform_39` | ak_hp_textarea | textarea | yes | **missing** |

### Keyboard navigation (desktop, up to 110 tab stops per page)

| Page | Tab stops | Elements w/o visible focus | Keyboard trap |
|---|---|---|---|
| home | 108 | 0 | no |
| enroll | 109 | 25 | no |
| careers | 107 | 0 | no |
| donate | 107 | 0 | no |
| contact | 108 | 0 | no |
| campaign-lp | 109 | 2 | no |

Elements with no visible focus indicator on `enroll` (first 8):

- `section.block.block-journey-map>div.container>div.tabs>div.tab-icon.active-tab` — "Apply"
- `section.block.block-journey-map>div.container>div.tabs>div.tab-icon` — "Visit"
- `section.block.block-journey-map>div.container>div.tabs>div.tab-icon` — "Accept Offer"
- `section.block.block-journey-map>div.container>div.tabs>div.tab-icon` — "Register"
- `section.block.block-journey-map>div.container>div.tabs>div.tab-icon` — "Attend Orientation"
- `section.block.block-journey-map>div.container>div.tabs>div.tab-icon` — "First Day"
- `div.container.container--lg>div.text-content>p>iframe` — ""
- `div.container.container--lg>div.text-content>p>iframe` — ""

Elements with no visible focus indicator on `campaign-lp` (first 8):

- `div#input_39_24>div>div>iframe` — ""
- `div#input_39_24>div>div>iframe` — ""

### Carousels, autoplay, media

- `enroll`: carousel `main#content > section.block.block--card-carousel` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `enroll`: carousel `main#content > section.block.block--card-carousel > div.block__bg > di` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `enroll`: carousel `main#content > section.block.block--card-carousel` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `enroll`: carousel `main#content > section.block.block--card-carousel > div.block__bg > di` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `school`: carousel `main#content > section.block.block--carousel` — controls: , , 1 of 4, 2 of 4, 3 of 4, 4 of 4; pause/stop control: **NO** (WCAG 2.2.2)
- `school`: carousel `main#content > section.block.block--carousel > div.container > div.car` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `school`: carousel `section.block.block--carousel > div.container > div.row.justify-conten` — controls: , , 1 of 4, 2 of 4, 3 of 4, 4 of 4; pause/stop control: **NO** (WCAG 2.2.2)

### Color contrast — undetermined pairs (text over images/gradients; manual check needed)

- `home`: `body` — Element has a 1:1 contrast ratio with the background
- `home`: `h1` — Element's background color could not be determined due to a pseudo element
- `home`: `.hero__content > p` — Element's background color could not be determined due to a pseudo element
- `enroll`: `body` — Element has a 1:1 contrast ratio with the background
- `enroll`: `h6` — Element's background color could not be determined due to a background image
- `enroll`: `.an-in.feature__content.an-up > h3` — Element's background color could not be determined due to a background image
- `careers`: `body` — Element has a 1:1 contrast ratio with the background
- `careers`: `.feature__content > h3` — Element's background color could not be determined due to a background image
- `careers`: `.feature__content > p:nth-child(2)` — Element's background color could not be determined due to a background image
- `donate`: `body` — Element has a 1:1 contrast ratio with the background
- `donate`: `h3` — Element's background color could not be determined due to a background image
- `donate`: `.feature__content > p:nth-child(2)` — Element's background color could not be determined due to a background image
- `school`: `body` — Element has a 1:1 contrast ratio with the background
- `school`: `h1` — Element's background color could not be determined due to a pseudo element
- `school`: `i` — Element's background color could not be determined due to a pseudo element

### Landmarks, skip link, language

- Skip link: `Skip to Main Content` → `#content`
- `<html lang>`: `en-US`
- Landmarks (home): main×1, nav×2, header×1, footer×1
- `/es/` lang attr: `es-MX` — 200-word sample: "1 Homepage - Uncommon Schools New York City Uncommon Schools Nueva York Somos una escuela pública gratuita que imparte desde preescolar hasta duodécimo grado en Brooklyn. En nuestras 23 escuelas, nuestros alumnos se preparan para alcanzar sus sueños.…"

## 3. Mobile usability (375x812 @3x)

| Page | Viewport meta | Horiz. scroll | Text <16px | Text <12px | Small tap targets (<24px) | Fixed/sticky elements |
|---|---|---|---|---|---|---|
| home | ok | no | 1 | 2 | 13 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| enroll | ok | no | 26 | 2 | 25 | header#header (7%); font > font > font > font > na (93%) |
| careers | ok | no | 1 | 2 | 13 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| donate | ok | no | 1 | 2 | 13 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| school | ok | no | 6 | 2 | 17 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| news | ok | no | 1 | 10 | 13 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| es-home | ok | no | 1 | 2 | 12 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| contact | ok | no | 1 | 2 | 13 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| campaign-lp | ok | no | 4 | 1 | 13 | header#header (7%); html > body.wp-singular.page-t (93%) |

Text under 12px (home, first 5):

- 11.2px `body.home.wp-singular > footer.footer > div.footer__copyright > div.co` — "© 2017-2026 Uncommon Schools, Inc. All r"
- 11px `div.tcb-col.tve_empty_dropzone > div.thrv_wrapper.thrv_text_element > ` — "Not right now, thanks."

Tap targets under 24×24 CSS px (home, first 8):

- 20×15px `header#header > a.skipto` — "Skip to Main Content"
- 152×21px `div.container > div.row.align-items-start > div.col-12.col-md-4 > p > ` — "Uncommon Home"
- 46×20px `li#menu-item-3597 > a` — "Enroll"
- 59×20px `li#menu-item-677 > a` — "About Us"
- 83×20px `li#menu-item-679 > a` — "Our Schools"
- 52×20px `li#menu-item-680 > a` — "Results"
- 54×20px `li#menu-item-887 > a` — "Careers"
- 54×20px `li#menu-item-683 > a` — "Contact"

### Mobile navigation

- Enroll/Apply link visible somewhere on loaded homepage: True
- Menu toggle present: True; menu opened by standard click: False

### Entry popup (Thrive Leads lightbox)

- Appears on page load, covers full viewport: **"Seats Still Available for School Year 2026-27! Apply in Minutes Sign Up for Updates Not right now, t"**
- Dismissible with Escape key: **False**
- Dismiss control reachable by Tab (15 stops): **False**
- Overlay `div.tve_p_lb_overlay` intercepts taps on the header menu button while open (WCAG 2.1.2 / 2.4.3).

Screenshots for every page at both viewports: `screenshots/nyc.uncommonschools.org/`.

## 4. Cookies and tracking

Cookies after first load of homepage (no interaction, fresh profile): **25**. No cookie consent banner exists on this domain.

| Cookie | Domain | Expiry |
|---|---|---|
| `tlf_4` | nyc.uncommonschools.org | 2026-08-27 |
| `__cf_bm` | .js.ubembed.com | 2026-08-26 |
| `_ga_9LH50EMN1H` | .uncommonschools.org | 2027-09-30 |
| `_ga` | .uncommonschools.org | 2027-09-30 |
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
| `tve_leads_unique` | nyc.uncommonschools.org | 2026-09-25 |
| `tl_1525_1526_6` | nyc.uncommonschools.org | 2026-09-25 |
| `tl_1525_1774_4` | nyc.uncommonschools.org | 2026-09-25 |

Server-set cookies (Set-Cookie headers, first load):

- from `https://nyc.uncommonschools.org/`: `HandLtestDomainNameServer=HandLtestDomainValueServer; expires=Thu, 27 Aug 2026 20:53:01 GMT; Max-Age=86400; pa`
- from `https://f81be61f7f0b4708854a8039c634945a.js.ubembed.com/`: `__cf_bm=XNLOYN4_ADiEj.tvDTySMkakSWd4FrNbZdg62QBoa5k-1787777582.1454353-1.0.1.1-44YwW4jSacE6bmTQ4a7sj64Umh.4FX9`
- from `https://cdn.fundraiseup.com/widget/AXGXSELV`: `fundraiseup_cid=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=.fundraiseup.com; path=/; SameSite=None; Secur`
- from `https://www.facebook.com/tr/?id=1361730677310357&ev=PageView&dl=https%`: `fr=0ImlUJTBEqobbJSDH..Bqj1Iu...1.0.Bqj1Iu.; expires=Tuesday, 24-Nov-2026 20:53:02 GMT; path=/; domain=.faceboo`
- from `https://nyc.uncommonschools.org/wp-admin/admin-ajax.php`: `HandLtestDomainNameServer=HandLtestDomainValueServer; expires=Thu, 27 Aug 2026 20:53:02 GMT; Max-Age=86400; pa`
- from `https://nyc.uncommonschools.org/wp-admin/admin-ajax.php`: `HandLtestDomainNameServer=HandLtestDomainValueServer; expires=Thu, 27 Aug 2026 20:53:02 GMT; Max-Age=86400; pa`
- from `https://nyc.uncommonschools.org/wp-admin/admin-ajax.php`: `HandLtestDomainNameServer=HandLtestDomainValueServer; expires=Thu, 27 Aug 2026 20:53:03 GMT; Max-Age=86400; pa`

Tag containers detected (`window.google_tag_manager`): `G-9LH50EMN1H`

Analytics/ad requests on page load:

- `https://www.googletagmanager.com/gtag/js?id=G-9LH50EMN1H`
- `https://www.google-analytics.com/g/collect?v=2&tid=G-9LH50EMN1H&gtm=45je68p0h1v9209849341za200zd9209849341&_p=1787777581963&gcd=13l3l3l3l1l1&npa=0&dma`
- `https://connect.facebook.net/en_US/fbevents.js`
- `https://connect.facebook.net/en_US/sdk.js`
- `https://connect.facebook.net/en_US/bundle/sdk.js/`
- `https://connect.facebook.net/signals/config/1361730677310357?v=2.9.385&r=stable&domain=nyc.uncommonschools.org&im=1&hme=1a72ec78e057d90ba48afa55a82b06`
- `https://www.facebook.com/tr/?id=1361730677310357&ev=PageView&dl=https%3A%2F%2Fnyc.uncommonschools.org%2F&rl=&if=false&ts=1787777582668&iw=false&sw=375`

Analytics requests fired on primary CTA click ("Enroll"): 0

## 5. Integration traces (clicks followed, no forms submitted)

### Enrollment

| CTA text | Link href | Final URL after redirects |
|---|---|---|
| Apply Today! | `https://uncommonbrooklyn.schoolmint.net/` | `https://uncommonbrooklyn.schoolmint.net/welcomeback` |

### Careers

- Careers CTA click chain → **`https://careers.smartrecruiters.com/UncommonSchools`**

### Donate

- FundraiseUp widget loads: `https://cdn.fundraiseup.com/widget/AXGXSELV` (widget ID **AXGXSELV**). Checkout JS loads on the donate page; no payment was initiated.
- Donate page heading order: Donate

## 6. Per-page content metrics (rendered DOM, desktop)

| Page | Words | Title | Meta desc | Canonical | hreflang | JSON-LD types | OG tags | Links in/ext | Imgs |
|---|---|---|---|---|---|---|---|---|---|
| home | 426 | Homepage - Uncommon Schools New York City | **MISSING** | yes | 13 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 57/4 | 12 (11png,1jpg) |
| enroll | 938 | Enroll - Uncommon Schools New York City | **MISSING** | yes | 13 | BreadcrumbList, ImageObject, ListItem, ReadAction, SearchAct | 9 | 68/14 | 38 (26png,6svg,6jpg) |
| careers | 175 | Careers - Uncommon Schools New York City | **MISSING** | yes | 13 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 54/6 | 12 (11png,1jpg) |
| donate | 112 | Donate - Uncommon Schools New York City | **MISSING** | yes | 13 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 55/4 | 11 (11png) |
| school | 732 | Uncommon Bed-Stuy West Elementary School - Un | **MISSING** | yes | 13 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 63/6 | 13 (11png,2jpg) |
| news | 153 | News - Uncommon Schools New York City | **MISSING** | yes | 13 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 54/12 | 11 (11png) |
| es-home | 478 | Homepage - Uncommon Schools New York City | **MISSING** | yes | 13 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 57/4 | 12 (11png,1jpg) |
| contact | 206 | Contact - Uncommon Schools New York City | **MISSING** | yes | 13 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 54/4 | 11 (11png) |
| campaign-lp | 394 | Enrollment Programmatic Lead Form - Uncommon  | **MISSING** | yes | 13 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 6 | 56/3 | 12 (11png,1svg) |

## 7. Site-wide

- robots.txt, llms.txt, sitemap files saved verbatim in `raw/` (prefix `nyc.uncommonschools.org_`).
- Site search: **absent**
- Primary nav: Enroll, About Uncommon NYC, Student Experience, Our Schools, Results, Family Resources, Donate
