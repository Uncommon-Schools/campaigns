# rochesterprep.uncommonschools.org — Browser Audit

**Audited:** 2026-08-26 · Playwright/Chromium 151 + Lighthouse 13.4.1 · Mobile 375x812@3x (simulated 4G) and Desktop 1440x900 · every page loaded fresh (no cache, no cookies).

- Resolves: **200** → `https://rochesterprep.uncommonschools.org/` · server: `nginx` · HTTP/2 · HSTS on
- Site #8 of the WordPress **multisite** (uploads at `wp-content/uploads/sites/8/`), nginx at 134.209.175.171. Theme `uncommon-region-theme`.

## 1. Performance (Lighthouse, median of 3 runs)

Raw JSON per page/viewport in `lighthouse/`. Mobile = 375x812 @3x, simulated 4G; Desktop = 1440x900.

> **Reading LCP here:** pages with the auto-rotating hero carousel report extreme LCP (up to 79–310s). Each slide rotation paints a new, larger LCP candidate, so the metric keeps climbing for as long as the carousel runs under throttling. The real first hero paint is at ~0.8–4s (PerformanceObserver capture in `data`). Treat FCP / Speed Index / TBT as the representative load metrics on carousel pages — and note the same carousel has no pause control (see §2).

### Mobile

| Page | Perf | LCP | CLS | TBT | FCP | SI | TTFB | Weight | Req | Unused JS | Unused CSS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [home](https://rochesterprep.uncommonschools.org/) | **62** | 11.0s | 0.108 | 212ms | 1.2s | 6.3s | 481ms | 2.8MB | 117 | 998KB | 180KB |
| [enroll](https://rochesterprep.uncommonschools.org/enroll/) | **58** | 26.8s | 0.111 | 279ms | 1.1s | 8.1s | 705ms | 4.5MB | 146 | 987KB | 179KB |
| [careers](https://rochesterprep.uncommonschools.org/careers/) | **59** | 12.0s | 0.145 | 208ms | 1.1s | 6.9s | 473ms | 2.6MB | 114 | 996KB | 181KB |
| [donate](https://rochesterprep.uncommonschools.org/donate/) | **61** | 11.6s | 0.124 | 220ms | 1.1s | 6.3s | 403ms | 2.6MB | 118 | 997KB | 181KB |
| [school](https://rochesterprep.uncommonschools.org/brooks-campus-ms/) | **61** | 14.7s | 0.101 | 216ms | 1.0s | 8.0s | 538ms | 4.7MB | 124 | 991KB | 179KB |
| [news](https://rochesterprep.uncommonschools.org/news/) | **41** | 19.8s | 0.594 | 244ms | 1.1s | 7.3s | 670ms | 6.0MB | 121 | 984KB | 181KB |
| [es-home](https://rochesterprep.uncommonschools.org/es/) | **47** | 10.9s | 0.334 | 222ms | 1.1s | 7.5s | 914ms | 2.8MB | 120 | 998KB | 180KB |
| [contact](https://rochesterprep.uncommonschools.org/contact/) | **61** | 10.9s | 0.126 | 210ms | 1.1s | 6.4s | 525ms | 2.5MB | 120 | 995KB | 181KB |
| [campaign-lp](https://rochesterprep.uncommonschools.org/26-27-enrollment-prog/) | **56** | 20.0s | 0.148 | 274ms | 1.1s | 7.6s | 484ms | 3.2MB | 141 | 1.1MB | 180KB |

### Desktop

| Page | Perf | LCP | CLS | TBT | FCP | SI | TTFB | Weight | Req | Unused JS | Unused CSS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [home](https://rochesterprep.uncommonschools.org/) | **75** | 2.4s | 0.136 | 0ms | 396ms | 3.2s | 610ms | 2.8MB | 118 | 998KB | 180KB |
| [enroll](https://rochesterprep.uncommonschools.org/enroll/) | **67** | 5.0s | 0.126 | 0ms | 434ms | 2.5s | 820ms | 4.5MB | 146 | 988KB | 179KB |
| [careers](https://rochesterprep.uncommonschools.org/careers/) | **78** | 2.5s | 0.131 | 0ms | 438ms | 1.9s | 721ms | 2.6MB | 114 | 999KB | 181KB |
| [donate](https://rochesterprep.uncommonschools.org/donate/) | **84** | 2.5s | 0.056 | 0ms | 514ms | 1.6s | 415ms | 2.6MB | 119 | 995KB | 181KB |
| [school](https://rochesterprep.uncommonschools.org/brooks-campus-ms/) | **72** | 3.1s | 0.148 | 0ms | 379ms | 2.3s | 906ms | 4.7MB | 124 | 991KB | 179KB |
| [news](https://rochesterprep.uncommonschools.org/news/) | **57** | 4.4s | 0.322 | 0ms | 390ms | 2.4s | 1.2s | 6.0MB | 121 | 984KB | 181KB |
| [es-home](https://rochesterprep.uncommonschools.org/es/) | **78** | 2.3s | 0.164 | 0ms | 347ms | 1.8s | 525ms | 2.9MB | 120 | 999KB | 180KB |
| [contact](https://rochesterprep.uncommonschools.org/contact/) | **85** | 2.3s | 0.058 | 0ms | 408ms | 1.7s | 485ms | 2.5MB | 120 | 996KB | 181KB |
| [campaign-lp](https://rochesterprep.uncommonschools.org/26-27-enrollment-prog/) | **78** | 2.3s | 0.151 | 0ms | 394ms | 2.2s | 449ms | 3.2MB | 141 | 1.1MB | 180KB |

**Real transfer on first load (Playwright, no throttling):**

| Page | VP | Total | JS | Images | Requests |
|---|---|---|---|---|---|
| home | mobile | 2.8MB | 2.0MB | 606KB | 119 |
| enroll | mobile | 4.8MB | 2.8MB | 1.5MB | 148 |
| careers | mobile | 2.6MB | 2.0MB | 376KB | 116 |
| donate | mobile | 2.6MB | 2.0MB | 336KB | 120 |
| school | mobile | 4.7MB | 2.0MB | 2.5MB | 126 |
| news | mobile | 6.0MB | 2.0MB | 3.8MB | 123 |
| es-home | mobile | 2.9MB | 2.0MB | 606KB | 122 |
| contact | mobile | 2.5MB | 2.0MB | 200KB | 122 |
| campaign-lp | mobile | 3.2MB | 2.3MB | 523KB | 144 |

## 2. Accessibility (axe-core 4.x + manual checks)

### axe violations by page

| Page | VP | Rule | Impact | WCAG | Count | Example selector |
|---|---|---|---|---|---|---|
| home | M | `button-name` | critical | wcag2a,wcag412 | 1 | `button` |
| home | M | `color-contrast` | serious | wcag2aa,wcag143 | 1 | `span[data-css="tve-u-19c9057ea79"]` |
| home | M | `empty-heading` | minor | — | 1 | `h3[data-css="tve-u-660355c3ed250e"]` |
| home | M | `heading-order` | moderate | — | 4 | `.container--md.container > h3` |
| home | M | `region` | moderate | — | 3 | `#trp-floater-ls` |
| home | D | `color-contrast` | serious | wcag2aa,wcag143 | 1 | `span[data-css="tve-u-19c9057ea79"]` |
| home | D | `empty-heading` | minor | — | 1 | `h3[data-css="tve-u-660355c3ed250e"]` |
| home | D | `heading-order` | moderate | — | 4 | `.container--md.container > h3` |
| home | D | `region` | moderate | — | 3 | `#trp-floater-ls` |
| enroll | M | `aria-allowed-attr` | critical | wcag2a,wcag412 | 1 | `iframe .ytmVideoInfoVideoTitle` |
| enroll | M | `aria-prohibited-attr` | serious | wcag2a,wcag412 | 1 | `iframe #movie_player` |
| enroll | M | `button-name` | critical | wcag2a,wcag412 | 2 | `.site-header__toggle` |
| enroll | M | `color-contrast` | serious | wcag2aa,wcag143 | 1 | `span[data-css="tve-u-19c9057ea79"]` |
| enroll | M | `empty-heading` | minor | — | 1 | `h3[data-css="tve-u-660355c3ed250e"]` |
| enroll | M | `region` | moderate | — | 3 | `#trp-floater-ls` |
| enroll | M | `tabindex` | serious | — | 1 | `.active-content > .button-link` |
| enroll | D | `aria-allowed-attr` | critical | wcag2a,wcag412 | 1 | `iframe .ytmVideoInfoVideoTitle` |
| enroll | D | `aria-prohibited-attr` | serious | wcag2a,wcag412 | 1 | `iframe #movie_player` |
| enroll | D | `button-name` | critical | wcag2a,wcag412 | 1 | `iframe .ytmVideoInfoChannelAvatar` |
| enroll | D | `color-contrast` | serious | wcag2aa,wcag143 | 1 | `span[data-css="tve-u-19c9057ea79"]` |
| enroll | D | `empty-heading` | minor | — | 1 | `h3[data-css="tve-u-660355c3ed250e"]` |
| enroll | D | `region` | moderate | — | 3 | `#trp-floater-ls` |
| enroll | D | `tabindex` | serious | — | 1 | `.active-content > .button-link` |
| careers | M | `button-name` | critical | wcag2a,wcag412 | 1 | `button` |
| careers | M | `empty-heading` | minor | — | 1 | `h3[data-css="tve-u-660355c3ed250e"]` |
| careers | M | `region` | moderate | — | 3 | `#trp-floater-ls` |
| careers | D | `color-contrast` | serious | wcag2aa,wcag143 | 1 | `span[data-css="tve-u-19c9057ea79"]` |
| careers | D | `empty-heading` | minor | — | 1 | `h3[data-css="tve-u-660355c3ed250e"]` |
| careers | D | `region` | moderate | — | 3 | `#trp-floater-ls` |
| donate | M | `button-name` | critical | wcag2a,wcag412 | 1 | `button` |
| donate | M | `empty-heading` | minor | — | 1 | `h3[data-css="tve-u-660355c3ed250e"]` |
| donate | M | `region` | moderate | — | 3 | `#trp-floater-ls` |
| donate | D | `color-contrast` | serious | wcag2aa,wcag143 | 1 | `span[data-css="tve-u-19c9057ea79"]` |
| donate | D | `empty-heading` | minor | — | 1 | `h3[data-css="tve-u-660355c3ed250e"]` |
| donate | D | `region` | moderate | — | 3 | `#trp-floater-ls` |
| school | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| school | M | `empty-heading` | minor | — | 1 | `h3[data-css="tve-u-660355c3ed250e"]` |
| school | M | `heading-order` | moderate | — | 4 | `.block--content:nth-child(2) > .container--md.container > .text-content > .conte` |
| school | M | `region` | moderate | — | 3 | `#trp-floater-ls` |
| school | D | `color-contrast` | serious | wcag2aa,wcag143 | 1 | `span[data-css="tve-u-19c9057ea79"]` |
| school | D | `empty-heading` | minor | — | 1 | `h3[data-css="tve-u-660355c3ed250e"]` |
| school | D | `heading-order` | moderate | — | 4 | `.block--content:nth-child(2) > .container--md.container > .text-content > .conte` |
| school | D | `region` | moderate | — | 3 | `#trp-floater-ls` |
| news | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| news | M | `color-contrast` | serious | wcag2aa,wcag143 | 1 | `span[data-css="tve-u-19c9057ea79"]` |
| news | M | `empty-heading` | minor | — | 1 | `h3[data-css="tve-u-660355c3ed250e"]` |
| news | M | `heading-order` | moderate | — | 1 | `.card.an-child[target="_blank"]:nth-child(1) > .card__bg > .card__content.fade-b` |
| news | M | `region` | moderate | — | 3 | `#trp-floater-ls` |
| news | D | `color-contrast` | serious | wcag2aa,wcag143 | 6 | `#menu-item-1641 > a[aria-current="page"]` |
| news | D | `empty-heading` | minor | — | 1 | `h3[data-css="tve-u-660355c3ed250e"]` |
| news | D | `heading-order` | moderate | — | 1 | `.card.an-child[target="_blank"]:nth-child(1) > .card__bg > .card__content.fade-b` |
| news | D | `region` | moderate | — | 3 | `#trp-floater-ls` |
| es-home | M | `button-name` | critical | wcag2a,wcag412 | 1 | `button` |
| es-home | M | `color-contrast` | serious | wcag2aa,wcag143 | 1 | `span[data-css="tve-u-19c9057ea79"]` |
| es-home | M | `empty-heading` | minor | — | 1 | `h3[data-css="tve-u-660355c3ed250e"]` |
| es-home | M | `heading-order` | moderate | — | 4 | `.container--md.container > h3` |
| es-home | M | `region` | moderate | — | 3 | `#trp-floater-ls` |
| es-home | D | `color-contrast` | serious | wcag2aa,wcag143 | 1 | `span[data-css="tve-u-19c9057ea79"]` |
| es-home | D | `empty-heading` | minor | — | 1 | `h3[data-css="tve-u-660355c3ed250e"]` |
| es-home | D | `heading-order` | moderate | — | 4 | `.container--md.container > h3` |
| es-home | D | `region` | moderate | — | 3 | `#trp-floater-ls` |
| contact | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| contact | M | `empty-heading` | minor | — | 1 | `h3[data-css="tve-u-660355c3ed250e"]` |
| contact | M | `region` | moderate | — | 3 | `#trp-floater-ls` |
| contact | D | `color-contrast` | serious | wcag2aa,wcag143 | 1 | `span[data-css="tve-u-19c9057ea79"]` |
| contact | D | `empty-heading` | minor | — | 1 | `h3[data-css="tve-u-660355c3ed250e"]` |
| contact | D | `region` | moderate | — | 3 | `#trp-floater-ls` |
| campaign-lp | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| campaign-lp | M | `empty-heading` | minor | — | 1 | `h3[data-css="tve-u-660355c3ed250e"]` |
| campaign-lp | M | `heading-order` | moderate | — | 1 | `.card.card--reveal.card--threeby:nth-child(1) > .card__bg > .card__content.fade-` |
| campaign-lp | M | `label-title-only` | serious | — | 1 | `#input_16_16_1` |
| campaign-lp | M | `region` | moderate | — | 3 | `#trp-floater-ls` |
| campaign-lp | D | `color-contrast` | serious | wcag2aa,wcag143 | 6 | `#menu-item-1641 > a` |
| campaign-lp | D | `empty-heading` | minor | — | 1 | `h3[data-css="tve-u-660355c3ed250e"]` |
| campaign-lp | D | `heading-order` | moderate | — | 1 | `.card.card--reveal.card--threeby:nth-child(1) > .card__bg > .card__content.fade-` |
| campaign-lp | D | `label-title-only` | serious | — | 1 | `#input_16_16_1` |
| campaign-lp | D | `region` | moderate | — | 3 | `#trp-floater-ls` |

### Images missing alt attribute

- `enroll`: `https://rochesterprep.uncommonschools.org/wp-content/uploads/sites/8/2024/11/noun-2532364-FFB500.svg`
- `enroll`: `https://rochesterprep.uncommonschools.org/wp-content/uploads/sites/8/2024/11/noun-home-education-3492789-FFB500.svg`
- `enroll`: `https://rochesterprep.uncommonschools.org/wp-content/uploads/sites/8/2024/11/noun-online-education-3492766-FFB500.svg`
- `enroll`: `https://rochesterprep.uncommonschools.org/wp-content/uploads/sites/8/2024/11/noun-clipboard-1268751-FFB500.svg`
- `enroll`: `https://rochesterprep.uncommonschools.org/wp-content/uploads/sites/8/2024/11/noun-2736806-FFB500.svg`
- `enroll`: `https://rochesterprep.uncommonschools.org/wp-content/uploads/sites/8/2024/11/noun-backpack-4868143-FFB500.svg`

### Heading structure issues

| Page | H1 count | Skipped levels (first 3) |
|---|---|---|
| home | 1 | H1→H3, H3→H5, H3→H6 |
| enroll | 0 | — |
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
| contact | `form#gform_1` | input_7 | select-one | yes | **missing** |
| contact | `form#gform_1` | input_8 | select-one | yes | **missing** |
| contact | `form#gform_1` | input_4 | textarea | yes | **missing** |
| contact | `form#gform_1` | ak_hp_textarea | textarea | yes | **missing** |
| campaign-lp | `form#gform_16` | input_1.3 | text | yes | **missing** |
| campaign-lp | `form#gform_16` | input_1.6 | text | yes | **missing** |
| campaign-lp | `form#gform_16` | input_2 | email | yes | **missing** |
| campaign-lp | `form#gform_16` | input_3 | tel | yes | **missing** |
| campaign-lp | `form#gform_16` | input_4 | select-one | yes | **missing** |
| campaign-lp | `form#gform_16` | input_5 | text | yes | **missing** |
| campaign-lp | `form#gform_16` | input_6.5 | text | yes | **missing** |
| campaign-lp | `form#gform_16` | input_9 | select-one | yes | **missing** |
| campaign-lp | `form#gform_16` | input_16.1 | checkbox | yes | **missing** |
| campaign-lp | `form#gform_16` | g-recaptcha-response | textarea | **NO** | **missing** |
| campaign-lp | `form#gform_16` | ak_hp_textarea | textarea | yes | **missing** |

### Keyboard navigation (desktop, up to 110 tab stops per page)

| Page | Tab stops | Elements w/o visible focus | Keyboard trap |
|---|---|---|---|
| home | 107 | 0 | no |
| enroll | 108 | 25 | no |
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
- `div.container.container--lg>div.text-content>p>iframe` — ""
- `div.container.container--lg>div.text-content>p>iframe` — ""

Elements with no visible focus indicator on `campaign-lp` (first 8):

- `div#input_16_19>div>div>iframe` — ""
- `div#input_16_19>div>div>iframe` — ""

### Carousels, autoplay, media

- `enroll`: carousel `main#content > section.block.block--card-carousel` — controls: Learn more, Learn more, Learn more; pause/stop control: **NO** (WCAG 2.2.2)
- `enroll`: carousel `main#content > section.block.block--card-carousel > div.container > di` — controls: Learn more, Learn more, Learn more; pause/stop control: **NO** (WCAG 2.2.2)
- `school`: carousel `main#content > section.block.block--carousel` — controls: , , 1 of 4, 2 of 4, 3 of 4, 4 of 4; pause/stop control: **NO** (WCAG 2.2.2)
- `school`: carousel `main#content > section.block.block--carousel > div.container > div.car` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `school`: carousel `section.block.block--carousel > div.container > div.row.justify-conten` — controls: , , 1 of 4, 2 of 4, 3 of 4, 4 of 4; pause/stop control: **NO** (WCAG 2.2.2)

### Color contrast — undetermined pairs (text over images/gradients; manual check needed)

- `home`: `body` — Element has a 1:1 contrast ratio with the background
- `home`: `h1` — Element's background color could not be determined due to a pseudo element
- `home`: `.hero__content > p` — Element's background color could not be determined due to a pseudo element
- `enroll`: `body` — Element has a 1:1 contrast ratio with the background
- `enroll`: `h6` — Element's background color could not be determined due to a pseudo element
- `enroll`: `.order-md-1.pr-md-3.an-in > h3` — Element's background color could not be determined due to a pseudo element
- `careers`: `body` — Element has a 1:1 contrast ratio with the background
- `careers`: `.feature__content > h3` — Element's background color could not be determined due to a background image
- `careers`: `.feature__content > p:nth-child(2)` — Element's background color could not be determined due to a background image
- `donate`: `body` — Element has a 1:1 contrast ratio with the background
- `donate`: `.feature__content > h3` — Element's background color could not be determined due to a background image
- `donate`: `.feature__content > p:nth-child(2)` — Element's background color could not be determined due to a background image
- `school`: `body` — Element has a 1:1 contrast ratio with the background
- `school`: `h1` — Element's background color could not be determined due to a pseudo element
- `school`: `.hero__content > p:nth-child(2)` — Element's background color could not be determined due to a pseudo element

### Landmarks, skip link, language

- Skip link: `Skip to Main Content` → `#content`
- `<html lang>`: `en-US`
- Landmarks (home): main×1, nav×2, header×1, footer×1
- `/es/` lang attr: `es-MX` — 200-word sample: "1 Homepage - Uncommon Schools Rochester Escuelas no comunes Rochester Prep Somos una escuela pública gratuita de Rochester, Nueva York, que imparte enseñanza de Kinder a 12º grado. A través de nuestras siete escuelas, nuestros estudiantes se están pr…"

## 3. Mobile usability (375x812 @3x)

| Page | Viewport meta | Horiz. scroll | Text <16px | Text <12px | Small tap targets (<24px) | Fixed/sticky elements |
|---|---|---|---|---|---|---|
| home | ok | no | 1 | 1 | 11 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| enroll | ok | no | 13 | 4 | 13 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| careers | ok | no | 1 | 1 | 11 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| donate | ok | no | 1 | 1 | 11 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| school | ok | no | 7 | 1 | 15 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| news | ok | no | 1 | 9 | 11 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| es-home | ok | no | 1 | 1 | 11 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| contact | ok | no | 1 | 1 | 11 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| campaign-lp | ok | no | 4 | 1 | 13 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |

Text under 12px (home, first 5):

- 11.2px `body.home.wp-singular > footer.footer > div.footer__copyright > div.co` — "© 2017-2026 Uncommon Schools, Inc. All r"

Tap targets under 24×24 CSS px (home, first 8):

- 20×15px `header#header > a.skipto` — "Skip to Main Content"
- 152×21px `div.container > div.row.align-items-start > div.col-12.col-md-4 > p > ` — "Uncommon Home"
- 46×20px `li#menu-item-626 > a` — "Enroll"
- 59×20px `li#menu-item-622 > a` — "About Us"
- 65×20px `li#menu-item-623 > a` — "Campuses"
- 52×20px `li#menu-item-628 > a` — "Results"
- 54×20px `li#menu-item-624 > a` — "Careers"
- 54×20px `li#menu-item-625 > a` — "Contact"

### Mobile navigation

- Enroll/Apply link visible somewhere on loaded homepage: True
- Menu toggle present: True; menu opened by standard click: False

### Entry popup (Thrive Leads lightbox)

- Appears on page load, covers full viewport: **"Still Accepting Applications! Start Your Application Not now, thanks."**
- Dismissible with Escape key: **False**
- Dismiss control reachable by Tab (15 stops): **False**
- Overlay `div.tve_p_lb_overlay` intercepts taps on the header menu button while open (WCAG 2.1.2 / 2.4.3).

Screenshots for every page at both viewports: `screenshots/rochesterprep.uncommonschools.org/`.

## 4. Cookies and tracking

Cookies after first load of homepage (no interaction, fresh profile): **22**. No cookie consent banner exists on this domain.

| Cookie | Domain | Expiry |
|---|---|---|
| `_ga_XTYEV5J8WV` | .uncommonschools.org | 2027-09-30 |
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
| `_fbp` | .uncommonschools.org | 2026-11-24 |
| `fundraiseup_cid` | .uncommonschools.org | 2027-09-30 |
| `fundraiseup_stat` | .uncommonschools.org | session |
| `fundraiseup_func` | .uncommonschools.org | session |
| `tve_leads_unique` | rochesterprep.uncommonschools.org | 2026-09-25 |
| `tl_829_830_2` | rochesterprep.uncommonschools.org | 2026-09-25 |

Server-set cookies (Set-Cookie headers, first load):

- from `https://rochesterprep.uncommonschools.org/`: `HandLtestDomainNameServer=HandLtestDomainValueServer; expires=Thu, 27 Aug 2026 21:02:33 GMT; Max-Age=86400; pa`
- from `https://www.facebook.com/tr/?id=1361730677310357&ev=PageView&dl=https%`: `fr=0kHnCIXwG2wIw69XG..Bqj1Rq...1.0.Bqj1Rq.; expires=Tuesday, 24-Nov-2026 21:02:34 GMT; path=/; domain=.faceboo`
- from `https://cdn.fundraiseup.com/widget/AXGXSELV`: `fundraiseup_cid=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=.fundraiseup.com; path=/; SameSite=None; Secur`
- from `https://rochesterprep.uncommonschools.org/wp-admin/admin-ajax.php`: `HandLtestDomainNameServer=HandLtestDomainValueServer; expires=Thu, 27 Aug 2026 21:02:34 GMT; Max-Age=86400; pa`
- from `https://rochesterprep.uncommonschools.org/wp-admin/admin-ajax.php`: `HandLtestDomainNameServer=HandLtestDomainValueServer; expires=Thu, 27 Aug 2026 21:02:34 GMT; Max-Age=86400; pa`

Tag containers detected (`window.google_tag_manager`): `G-XTYEV5J8WV`

Analytics/ad requests on page load:

- `https://www.googletagmanager.com/gtag/js?id=G-XTYEV5J8WV`
- `https://www.google-analytics.com/g/collect?v=2&tid=G-XTYEV5J8WV&gtm=45je68p0v9209849284za200zd9209849284&_p=1787778153803&gcd=13l3l3l3l1l1&npa=0&dma=0`
- `https://connect.facebook.net/en_US/fbevents.js`
- `https://connect.facebook.net/en_US/sdk.js`
- `https://connect.facebook.net/en_US/bundle/sdk.js/`
- `https://connect.facebook.net/signals/config/1361730677310357?v=2.9.385&r=stable&domain=rochesterprep.uncommonschools.org&im=1&hme=1a72ec78e057d90ba48a`
- `https://www.facebook.com/tr/?id=1361730677310357&ev=PageView&dl=https%3A%2F%2Frochesterprep.uncommonschools.org%2F&rl=&if=false&ts=1787778154183&iw=fa`

Analytics requests fired on primary CTA click ("Enroll"): 10
- `https://www.facebook.com/tr/`
- `https://www.googletagmanager.com/gtag/js?id=G-XTYEV5J8WV`
- `https://connect.facebook.net/en_US/fbevents.js`
- `https://connect.facebook.net/en_US/sdk.js`
- `https://connect.facebook.net/signals/config/1361730677310357?v=2.9.385&r=stable&domain=rochesterprep.uncommonschools.org&im=1&hme=1a72ec78e057d90ba48a`
- `https://connect.facebook.net/en_US/bundle/sdk.js/`
- `https://www.facebook.com/tr/?id=1361730677310357&ev=PageView&dl=https%3A%2F%2Frochesterprep.uncommonschools.org%2Fenroll%2F&rl=&if=false&ts=1787779006`
- `https://googleads.g.doubleclick.net/pagead/id`
- `https://static.doubleclick.net/instream/ad_status.js`
- `https://googleads.g.doubleclick.net/pagead/id?slf_rd=1`

## 5. Integration traces (clicks followed, no forms submitted)

### Enrollment

| CTA text | Link href | Final URL after redirects |
|---|---|---|
| Apply Today! | `https://www.goodschoolsroc.org/applynow/` | `https://www.goodschoolsroc.org/applynow/` |
| Apply Today! | `http://goodschoolsroc.org/applynow` | `https://www.goodschoolsroc.org/applynow/` |
| Apply Today | `http://www.goodschoolsroc.org/applynow/` | `https://www.goodschoolsroc.org/applynow/` |

### Careers

- Careers CTA click chain → **`https://careers.smartrecruiters.com/UncommonSchools/rochesterprep-web`**

### Donate

- FundraiseUp widget loads: `https://cdn.fundraiseup.com/widget/AXGXSELV` (widget ID **AXGXSELV**). Checkout JS loads on the donate page; no payment was initiated.
- Donate page heading order: Donate

## 6. Per-page content metrics (rendered DOM, desktop)

| Page | Words | Title | Meta desc | Canonical | hreflang | JSON-LD types | OG tags | Links in/ext | Imgs |
|---|---|---|---|---|---|---|---|---|---|
| home | 443 | Homepage - Uncommon Schools Rochester | **MISSING** | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 46/5 | 11 (10png,1jpg) |
| enroll | 1137 | Enroll Page New - Uncommon Schools Rochester | **MISSING** | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 47/12 | 26 (12png,8jpg,6svg) |
| careers | 157 | Careers - Uncommon Schools Rochester | **MISSING** | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 43/6 | 11 (10png,1jpg) |
| donate | 95 | Donate - Uncommon Schools Rochester | **MISSING** | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 44/4 | 10 (10png) |
| school | 670 | Rochester Prep Brooks Campus — Middle School  | **MISSING** | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 48/4 | 12 (11png,1jpg) |
| news | 125 | News - Uncommon Schools Rochester | **MISSING** | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 43/12 | 10 (10png) |
| es-home | 502 | Homepage - Uncommon Schools Rochester | **MISSING** | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 46/5 | 11 (10png,1jpg) |
| contact | 138 | Contact - Uncommon Schools Rochester | **MISSING** | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 43/4 | 10 (10png) |
| campaign-lp | 520 | 26-27 Enrollment Programmatic - Uncommon Scho | **MISSING** | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 45/6 | 10 (10png) |

## 7. Site-wide

- robots.txt, llms.txt, sitemap files saved verbatim in `raw/` (prefix `rochesterprep.uncommonschools.org_`).
- Site search: **absent**
- Primary nav: Enroll, About Rochester Prep, Student Experience, Campuses, Results, Family Resources, Donate
