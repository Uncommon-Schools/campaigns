# roxburyprep.uncommonschools.org — Browser Audit

**Audited:** 2026-08-26 · Playwright/Chromium 151 + Lighthouse 13.4.1 · Mobile 375x812@3x (simulated 4G) and Desktop 1440x900 · every page loaded fresh (no cache, no cookies).

- Resolves: **200** → `https://roxburyprep.uncommonschools.org/` · server: `nginx` · HTTP/2 · HSTS on
- Site #5 of the WordPress **multisite** (uploads at `wp-content/uploads/sites/5/`), nginx at 134.209.175.171. Theme `uncommon-region-theme`.

## 1. Performance (Lighthouse, median of 3 runs)

Raw JSON per page/viewport in `lighthouse/`. Mobile = 375x812 @3x, simulated 4G; Desktop = 1440x900.

> **Reading LCP here:** pages with the auto-rotating hero carousel report extreme LCP (up to 79–310s). Each slide rotation paints a new, larger LCP candidate, so the metric keeps climbing for as long as the carousel runs under throttling. The real first hero paint is at ~0.8–4s (PerformanceObserver capture in `data`). Treat FCP / Speed Index / TBT as the representative load metrics on carousel pages — and note the same carousel has no pause control (see §2).

### Mobile

| Page | Perf | LCP | CLS | TBT | FCP | SI | TTFB | Weight | Req | Unused JS | Unused CSS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [home](https://roxburyprep.uncommonschools.org/) | **49** | 15.8s | 0.299 | 195ms | 1.2s | 7.9s | 404ms | 6.8MB | 121 | 989KB | 179KB |
| [enroll](https://roxburyprep.uncommonschools.org/enroll/) | **47** | 309.6s | 0.288 | 220ms | 994ms | 104.2s | 1.8s | 60.2MB | 136 | 997KB | 179KB |
| [careers](https://roxburyprep.uncommonschools.org/careers/) | **48** | 11.6s | 0.341 | 196ms | 1.0s | 7.6s | 649ms | 2.6MB | 110 | 997KB | 181KB |
| [donate](https://roxburyprep.uncommonschools.org/donate/) | **55** | 8.2s | 0.207 | 230ms | 1.1s | 6.5s | 514ms | 2.6MB | 110 | 996KB | 181KB |
| [school](https://roxburyprep.uncommonschools.org/proctor-middle/) | **48** | 10.4s | 0.343 | 186ms | 1.1s | 7.9s | 528ms | 4.9MB | 138 | 990KB | 179KB |
| [news](https://roxburyprep.uncommonschools.org/news/) | **39** | 25.5s | 0.859 | 242ms | 1.1s | 7.6s | 660ms | 5.6MB | 117 | 984KB | 180KB |
| [faq](https://roxburyprep.uncommonschools.org/new-family-faq/) | **55** | 11.8s | 0.180 | 190ms | 1.1s | 8.9s | 1.6s | 2.6MB | 109 | 998KB | 181KB |
| [es-home](https://roxburyprep.uncommonschools.org/es/) | **41** | 15.7s | 0.291 | 472ms | 1.1s | 7.1s | 602ms | 6.8MB | 125 | 989KB | 179KB |
| [contact](https://roxburyprep.uncommonschools.org/contact/) | **57** | 11.5s | 0.202 | 220ms | 1.1s | 5.6s | 471ms | 2.5MB | 116 | 994KB | 181KB |
| [campaign-lp](https://roxburyprep.uncommonschools.org/26-27-school-year-enrollment-prog/) | **54** | 10.0s | 0.212 | 239ms | 1.1s | 6.8s | 494ms | 3.1MB | 137 | 1.1MB | 180KB |

### Desktop

| Page | Perf | LCP | CLS | TBT | FCP | SI | TTFB | Weight | Req | Unused JS | Unused CSS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [home](https://roxburyprep.uncommonschools.org/) | **69** | 3.1s | 0.184 | 0ms | 420ms | 2.3s | 563ms | 6.8MB | 121 | 990KB | 179KB |
| [enroll](https://roxburyprep.uncommonschools.org/enroll/) | **63** | 49.5s | 0.094 | 0ms | 299ms | 20.3s | 901ms | 60.2MB | 131 | 998KB | 179KB |
| [careers](https://roxburyprep.uncommonschools.org/careers/) | **81** | 2.5s | 0.120 | 0ms | 392ms | 1.6s | 514ms | 2.6MB | 110 | 997KB | 181KB |
| [donate](https://roxburyprep.uncommonschools.org/donate/) | **82** | 2.4s | 0.120 | 0ms | 336ms | 1.4s | 507ms | 2.6MB | 110 | 997KB | 181KB |
| [school](https://roxburyprep.uncommonschools.org/proctor-middle/) | **80** | 2.3s | 0.107 | 0ms | 378ms | 2.2s | 562ms | 4.9MB | 138 | 991KB | 179KB |
| [news](https://roxburyprep.uncommonschools.org/news/) | **54** | 5.8s | 0.302 | 0ms | 382ms | 2.8s | 430ms | 5.6MB | 117 | 986KB | 180KB |
| [faq](https://roxburyprep.uncommonschools.org/new-family-faq/) | **82** | 2.5s | 0.105 | 0ms | 347ms | 1.5s | 503ms | 2.6MB | 109 | 999KB | 181KB |
| [es-home](https://roxburyprep.uncommonschools.org/es/) | **76** | 2.9s | 0.097 | 0ms | 398ms | 2.4s | 865ms | 6.8MB | 125 | 989KB | 179KB |
| [contact](https://roxburyprep.uncommonschools.org/contact/) | **85** | 2.4s | 0.072 | 0ms | 518ms | 1.5s | 467ms | 2.5MB | 116 | 997KB | 181KB |
| [campaign-lp](https://roxburyprep.uncommonschools.org/26-27-school-year-enrollment-prog/) | **78** | 2.4s | 0.153 | 0ms | 395ms | 1.9s | 482ms | 3.1MB | 137 | 1.1MB | 180KB |

**Real transfer on first load (Playwright, no throttling):**

| Page | VP | Total | JS | Images | Requests |
|---|---|---|---|---|---|
| home | mobile | 6.8MB | 2.0MB | 4.5MB | 130 |
| enroll | mobile | 60.3MB | 2.0MB | 57.9MB | 144 |
| careers | mobile | 2.7MB | 2.0MB | 377KB | 118 |
| donate | mobile | 2.7MB | 2.0MB | 353KB | 119 |
| school | mobile | 5.0MB | 2.0MB | 2.6MB | 139 |
| news | mobile | 5.7MB | 2.0MB | 3.4MB | 125 |
| faq | mobile | 2.7MB | 2.0MB | 384KB | 117 |
| es-home | mobile | 6.8MB | 2.0MB | 4.5MB | 133 |
| contact | mobile | 2.5MB | 2.0MB | 150KB | 124 |
| campaign-lp | mobile | 3.2MB | 2.4MB | 403KB | 146 |

## 2. Accessibility (axe-core 4.x + manual checks)

### axe violations by page

| Page | VP | Rule | Impact | WCAG | Count | Example selector |
|---|---|---|---|---|---|---|
| home | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| home | M | `heading-order` | moderate | — | 5 | `.dark > h6` |
| home | M | `region` | moderate | — | 3 | `div[data-css="tve-u-18f4e4a3451"]` |
| home | D | `heading-order` | moderate | — | 5 | `.dark > h6` |
| home | D | `region` | moderate | — | 3 | `div[data-css="tve-u-18f4e4a3451"]` |
| enroll | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| enroll | M | `empty-heading` | minor | — | 1 | `.text-content > h3` |
| enroll | M | `heading-order` | moderate | — | 8 | `.waiting.block--content-band:nth-child(2) > .container--lg.container > .align-it` |
| enroll | M | `list` | serious | wcag2a,wcag131 | 1 | `.container--md.container > .text-content > ul:nth-child(4)` |
| enroll | M | `region` | moderate | — | 3 | `div[data-css="tve-u-18f4e4a3451"]` |
| enroll | M | `tabindex` | serious | — | 1 | `.active-content > .button-link` |
| enroll | D | `empty-heading` | minor | — | 1 | `.text-content > h3` |
| enroll | D | `heading-order` | moderate | — | 8 | `.waiting.block--content-band:nth-child(2) > .container--lg.container > .align-it` |
| enroll | D | `list` | serious | wcag2a,wcag131 | 1 | `.container--md.container > .text-content > ul:nth-child(4)` |
| enroll | D | `region` | moderate | — | 3 | `div[data-css="tve-u-18f4e4a3451"]` |
| enroll | D | `tabindex` | serious | — | 1 | `.active-content > .button-link` |
| careers | M | `button-name` | critical | wcag2a,wcag412 | 1 | `button` |
| careers | M | `region` | moderate | — | 3 | `div[data-css="tve-u-18f4e4a3451"]` |
| careers | D | `region` | moderate | — | 3 | `div[data-css="tve-u-18f4e4a3451"]` |
| donate | M | `button-name` | critical | wcag2a,wcag412 | 1 | `button` |
| donate | M | `region` | moderate | — | 3 | `div[data-css="tve-u-18f4e4a3451"]` |
| donate | D | `region` | moderate | — | 3 | `div[data-css="tve-u-18f4e4a3451"]` |
| school | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| school | M | `heading-order` | moderate | — | 5 | `.dark.block__intro.an-intro > h6` |
| school | M | `region` | moderate | — | 3 | `div[data-css="tve-u-18f4e4a3451"]` |
| school | D | `heading-order` | moderate | — | 5 | `.dark.block__intro.an-intro > h6` |
| school | D | `region` | moderate | — | 3 | `div[data-css="tve-u-18f4e4a3451"]` |
| news | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| news | M | `region` | moderate | — | 3 | `div[data-css="tve-u-18f4e4a3451"]` |
| news | D | `color-contrast` | serious | wcag2aa,wcag143 | 8 | `#menu-item-3337 > a` |
| news | D | `region` | moderate | — | 3 | `div[data-css="tve-u-18f4e4a3451"]` |
| faq | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| faq | M | `region` | moderate | — | 3 | `div[data-css="tve-u-18f4e4a3451"]` |
| faq | D | `region` | moderate | — | 3 | `div[data-css="tve-u-18f4e4a3451"]` |
| es-home | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| es-home | M | `heading-order` | moderate | — | 5 | `.dark > h6` |
| es-home | M | `region` | moderate | — | 3 | `div[data-css="tve-u-18f4e4a3451"]` |
| es-home | D | `heading-order` | moderate | — | 5 | `.dark > h6` |
| es-home | D | `region` | moderate | — | 3 | `div[data-css="tve-u-18f4e4a3451"]` |
| contact | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| contact | M | `region` | moderate | — | 3 | `div[data-css="tve-u-18f4e4a3451"]` |
| contact | D | `region` | moderate | — | 3 | `div[data-css="tve-u-18f4e4a3451"]` |
| campaign-lp | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.site-header__toggle` |
| campaign-lp | M | `heading-order` | moderate | — | 1 | `.card.card--reveal.card--threeby:nth-child(1) > .card__bg > .card__content.fade-` |
| campaign-lp | M | `region` | moderate | — | 3 | `div[data-css="tve-u-18f4e4a3451"]` |
| campaign-lp | D | `color-contrast` | serious | wcag2aa,wcag143 | 8 | `#menu-item-3337 > a` |
| campaign-lp | D | `heading-order` | moderate | — | 1 | `.card.card--reveal.card--threeby:nth-child(1) > .card__bg > .card__content.fade-` |
| campaign-lp | D | `region` | moderate | — | 3 | `div[data-css="tve-u-18f4e4a3451"]` |

### Images missing alt attribute

- `enroll`: `https://roxburyprep.uncommonschools.org/wp-content/uploads/sites/5/2024/09/noun-2532364-FFB500.svg`
- `enroll`: `https://roxburyprep.uncommonschools.org/wp-content/uploads/sites/5/2024/09/noun-home-education-3492789-FFB500.svg`
- `enroll`: `https://roxburyprep.uncommonschools.org/wp-content/uploads/sites/5/2024/09/noun-online-education-3492766-FFB500.svg`
- `enroll`: `https://roxburyprep.uncommonschools.org/wp-content/uploads/sites/5/2024/09/noun-clipboard-1268751-FFB500.svg`
- `enroll`: `https://roxburyprep.uncommonschools.org/wp-content/uploads/sites/5/2024/09/noun-2736806-FFB500.svg`
- `enroll`: `https://roxburyprep.uncommonschools.org/wp-content/uploads/sites/5/2024/09/noun-3492906-FFB500.svg`

### Heading structure issues

| Page | H1 count | Skipped levels (first 3) |
|---|---|---|
| home | 1 | H1→H6, H3→H6, H3→H5 |
| enroll | 1 | H1→H5, H3→H6, H3→H5 |
| careers | 0 | — |
| donate | 0 | — |
| school | 1 | H1→H6, H3→H6, H3→H5 |
| news | 0 | — |
| faq | 0 | — |
| es-home | 1 | H1→H6, H3→H6, H3→H5 |
| contact | 0 | — |
| campaign-lp | 0 | H3→H5 |

### Form inputs: labels and autocomplete

| Page | Form | Field | Type | Labeled | autocomplete |
|---|---|---|---|---|---|
| contact | `form#gform_1` | input_1.3 | text | yes | **missing** |
| contact | `form#gform_1` | input_1.6 | text | yes | **missing** |
| contact | `form#gform_1` | input_2 | email | yes | **missing** |
| contact | `form#gform_1` | input_6 | tel | yes | **missing** |
| contact | `form#gform_1` | input_9 | select-one | yes | **missing** |
| contact | `form#gform_1` | input_8 | select-one | yes | **missing** |
| contact | `form#gform_1` | input_4 | textarea | yes | **missing** |
| contact | `form#gform_1` | ak_hp_textarea | textarea | yes | **missing** |
| campaign-lp | `form#gform_28` | input_8.3 | text | yes | **missing** |
| campaign-lp | `form#gform_28` | input_8.6 | text | yes | **missing** |
| campaign-lp | `form#gform_28` | input_3 | email | yes | **missing** |
| campaign-lp | `form#gform_28` | input_4 | tel | yes | **missing** |
| campaign-lp | `form#gform_28` | input_6 | number | yes | **missing** |
| campaign-lp | `form#gform_28` | input_7 | select-one | yes | **missing** |
| campaign-lp | `form#gform_28` | input_9 | text | yes | **missing** |
| campaign-lp | `form#gform_28` | input_12 | select-one | yes | **missing** |
| campaign-lp | `form#gform_28` | input_19.1 | checkbox | yes | **missing** |
| campaign-lp | `form#gform_28` | g-recaptcha-response | textarea | **NO** | **missing** |
| campaign-lp | `form#gform_28` | ak_hp_textarea | textarea | yes | **missing** |

### Keyboard navigation (desktop, up to 110 tab stops per page)

| Page | Tab stops | Elements w/o visible focus | Keyboard trap |
|---|---|---|---|
| home | 108 | 6 | no |
| enroll | 109 | 16 | no |
| careers | 107 | 0 | no |
| donate | 107 | 0 | no |
| faq | 24 | 0 | **YES** at `div#accordion-0-0>div.accordion>button.accordion__toggle.col` (stop 24) |
| contact | 108 | 0 | no |
| campaign-lp | 109 | 2 | no |

Elements with no visible focus indicator on `home` (first 8):

- `div.row.justify-content-end>div.col-sm-7>div.fade-box.carousel__slides>button.slick-prev.s` — ""
- `div.row.justify-content-end>div.col-sm-7>div.fade-box.carousel__slides>button.slick-next.s` — ""
- `div.row.justify-content-end>div.col-sm-7>div.fade-box.carousel__slides>button.slick-prev.s` — ""
- `div.row.justify-content-end>div.col-sm-7>div.fade-box.carousel__slides>button.slick-next.s` — ""
- `div.row.justify-content-end>div.col-sm-7>div.fade-box.carousel__slides>button.slick-prev.s` — ""
- `div.row.justify-content-end>div.col-sm-7>div.fade-box.carousel__slides>button.slick-next.s` — ""

Elements with no visible focus indicator on `enroll` (first 8):

- `section.block.block-journey-map>div.container>div.tabs>div.tab-icon.active-tab` — "Apply"
- `section.block.block-journey-map>div.container>div.tabs>div.tab-icon` — "Visit"
- `section.block.block-journey-map>div.container>div.tabs>div.tab-icon` — "Accept Offer"
- `section.block.block-journey-map>div.container>div.tabs>div.tab-icon` — "Register"
- `section.block.block-journey-map>div.container>div.tabs>div.tab-icon` — "Open House"
- `section.block.block-journey-map>div.container>div.tabs>div.tab-icon` — "Orientation"
- `section.block.block--card-carousel>div.container>div.grid--rows.card-carousel>button.slick` — "Previous Slide"
- `section.block.block--card-carousel>div.container>div.grid--rows.card-carousel>button.slick` — "Next Slide"

Elements with no visible focus indicator on `campaign-lp` (first 8):

- `div#input_28_23>div>div>iframe` — ""
- `div#input_28_23>div>div>iframe` — ""

### Carousels, autoplay, media

- `home`: carousel `main#content > section.block.block--carousel` — controls: , , 1 of 6, 2 of 6, 3 of 6, 4 of 6; pause/stop control: **NO** (WCAG 2.2.2)
- `home`: carousel `main#content > section.block.block--carousel > div.container > div.car` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `home`: carousel `section.block.block--carousel > div.container > div.row.justify-conten` — controls: , , 1 of 6, 2 of 6, 3 of 6, 4 of 6; pause/stop control: **NO** (WCAG 2.2.2)
- `home`: carousel `main#content > section.block.block--video > div.container > div.videos` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `enroll`: carousel `main#content > section.block.block--card-carousel` — controls: Watch video, Watch video, Watch video, Watch video, Watch video; pause/stop control: **NO** (WCAG 2.2.2)
- `enroll`: carousel `main#content > section.block.block--card-carousel > div.container > di` — controls: Watch video, Watch video, Watch video, Watch video, Watch video; pause/stop control: **NO** (WCAG 2.2.2)
- `school`: carousel `main#content > section.block.block--carousel` — controls: , , 1 of 6, 2 of 6, 3 of 6, 4 of 6; pause/stop control: **NO** (WCAG 2.2.2)
- `school`: carousel `main#content > section.block.block--carousel > div.container > div.car` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `school`: carousel `section.block.block--carousel > div.container > div.row.justify-conten` — controls: , , 1 of 6, 2 of 6, 3 of 6, 4 of 6; pause/stop control: **NO** (WCAG 2.2.2)
- `school`: carousel `main#content > section.block.block--carousel` — controls: , , 1 of 4, 2 of 4, 3 of 4, 4 of 4; pause/stop control: **NO** (WCAG 2.2.2)
- `school`: carousel `main#content > section.block.block--carousel > div.container > div.car` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `school`: carousel `section.block.block--carousel > div.container > div.row.justify-conten` — controls: , , 1 of 4, 2 of 4, 3 of 4, 4 of 4; pause/stop control: **NO** (WCAG 2.2.2)
- `es-home`: carousel `main#content > section.block.block--carousel` — controls: , , 1 of 6, 2 of 6, 3 of 6, 4 of 6; pause/stop control: **NO** (WCAG 2.2.2)
- `es-home`: carousel `main#content > section.block.block--carousel > div.container > div.car` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `es-home`: carousel `section.block.block--carousel > div.container > div.row.justify-conten` — controls: , , 1 of 6, 2 of 6, 3 of 6, 4 of 6; pause/stop control: **NO** (WCAG 2.2.2)
- `es-home`: carousel `main#content > section.block.block--video > div.container > div.videos` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)

### Color contrast — undetermined pairs (text over images/gradients; manual check needed)

- `home`: `body` — Element has a 1:1 contrast ratio with the background
- `home`: `h1` — Element's background color could not be determined due to a pseudo element
- `home`: `.hero__content > p` — Element's background color could not be determined due to a pseudo element
- `enroll`: `body` — Element has a 1:1 contrast ratio with the background
- `enroll`: `.hero__content > h6` — Element's background color could not be determined due to a pseudo element
- `enroll`: `h1` — Element's background color could not be determined due to a pseudo element
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
- Landmarks (home): main×1, nav×3, header×1, footer×1
- `/es/` lang attr: `es-MX` — 200-word sample: "1 Homepage - Uncommon Schools Boston Escuelas no comunes Roxbury Prep Across our three schools, our students are preparing to achieve their dreams. A vibrant, modern campus where students in grades 6–12 learn, create, and thrive every day. Welcome to…"

## 3. Mobile usability (375x812 @3x)

| Page | Viewport meta | Horiz. scroll | Text <16px | Text <12px | Small tap targets (<24px) | Fixed/sticky elements |
|---|---|---|---|---|---|---|
| home | ok | no | 1 | 1 | 18 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| enroll | ok | no | 40 | 1 | 18 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| careers | ok | no | 1 | 1 | 10 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| donate | ok | no | 1 | 1 | 10 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| school | ok | no | 6 | 1 | 21 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| news | ok | no | 1 | 9 | 10 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| faq | ok | no | 1 | 1 | 10 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| es-home | ok | no | 1 | 1 | 18 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| contact | ok | no | 1 | 1 | 10 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |
| campaign-lp | ok | no | 4 | 1 | 12 | header#header (7%); html.tve-o-hidden.tve-l-open > (93%) |

Text under 12px (home, first 5):

- 11.2px `body.home.wp-singular > footer.footer > div.footer__copyright > div.co` — "© 2017-2026 Uncommon Schools, Inc. All r"

Tap targets under 24×24 CSS px (home, first 8):

- 20×15px `header#header > a.skipto` — "Skip to Main Content"
- 16×16px `button#slick-slide-control00` — "1 of 6"
- 16×16px `button#slick-slide-control01` — "2 of 6"
- 16×16px `button#slick-slide-control02` — "3 of 6"
- 16×16px `button#slick-slide-control03` — "4 of 6"
- 16×16px `button#slick-slide-control04` — "5 of 6"
- 16×16px `button#slick-slide-control05` — "6 of 6"
- 158×16px `section.block.block--video > div.container > div.video-nav.row > div.c` — "Go to slide 1"

### Mobile navigation

- Enroll/Apply link visible somewhere on loaded homepage: True
- Menu toggle present: True; menu opened by standard click: False — **click intercepted** (see popup findings)

### Entry popup (Thrive Leads lightbox)

- Appears on page load, covers full viewport: **"Last Chance to Apply for Fall 2026! Apply Now!"**
- Dismissible with Escape key: **False**
- Dismiss control reachable by Tab (15 stops): **False**
- Overlay `div.tve_p_lb_overlay` intercepts taps on the header menu button while open (WCAG 2.1.2 / 2.4.3).

Screenshots for every page at both viewports: `screenshots/roxburyprep.uncommonschools.org/`.

## 4. Cookies and tracking

Cookies after first load of homepage (no interaction, fresh profile): **23**. No cookie consent banner exists on this domain.

| Cookie | Domain | Expiry |
|---|---|---|
| `_ga_R8QJG3YSFS` | .uncommonschools.org | 2027-09-30 |
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
| `tve_leads_unique` | roxburyprep.uncommonschools.org | 2026-09-25 |
| `tl_1167_2757_19` | roxburyprep.uncommonschools.org | 2026-09-25 |
| `tl_1167_2338_17` | roxburyprep.uncommonschools.org | 2026-09-25 |

Server-set cookies (Set-Cookie headers, first load):

- from `https://roxburyprep.uncommonschools.org/`: `HandLtestDomainNameServer=HandLtestDomainValueServer; expires=Thu, 27 Aug 2026 20:56:33 GMT; Max-Age=86400; pa`
- from `https://cdn.fundraiseup.com/widget/AXGXSELV`: `fundraiseup_cid=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=.fundraiseup.com; path=/; SameSite=None; Secur`
- from `https://www.facebook.com/tr/?id=1361730677310357&ev=PageView&dl=https%`: `fr=0pk2Vl2yvH4ZLXH8S..Bqj1MC...1.0.Bqj1MC.; expires=Tuesday, 24-Nov-2026 20:56:34 GMT; path=/; domain=.faceboo`
- from `https://roxburyprep.uncommonschools.org/wp-admin/admin-ajax.php`: `HandLtestDomainNameServer=HandLtestDomainValueServer; expires=Thu, 27 Aug 2026 20:56:34 GMT; Max-Age=86400; pa`
- from `https://roxburyprep.uncommonschools.org/wp-admin/admin-ajax.php`: `HandLtestDomainNameServer=HandLtestDomainValueServer; expires=Thu, 27 Aug 2026 20:56:35 GMT; Max-Age=86400; pa`
- from `https://roxburyprep.uncommonschools.org/wp-admin/admin-ajax.php`: `HandLtestDomainNameServer=HandLtestDomainValueServer; expires=Thu, 27 Aug 2026 20:56:35 GMT; Max-Age=86400; pa`

Tag containers detected (`window.google_tag_manager`): `G-R8QJG3YSFS`

Analytics/ad requests on page load:

- `https://www.googletagmanager.com/gtag/js?id=G-R8QJG3YSFS`
- `https://www.google-analytics.com/g/collect?v=2&tid=G-R8QJG3YSFS&gtm=45je68p0v9209848949za200zd9209848949&_p=1787777794223&gcd=13l3l3l3l1l1&npa=0&dma=0`
- `https://www.googletagmanager.com/td?id=G-R8QJG3YSFS&v=3&t=t&pid=326569258&gtm=45je68p0v9209848949za200zd9209848949&seq=1&exp=115938465~115938469~11889`
- `https://connect.facebook.net/en_US/fbevents.js`
- `https://connect.facebook.net/en_US/sdk.js`
- `https://connect.facebook.net/en_US/bundle/sdk.js/`
- `https://connect.facebook.net/signals/config/1361730677310357?v=2.9.385&r=stable&domain=roxburyprep.uncommonschools.org&im=1&hme=1a72ec78e057d90ba48afa`
- `https://www.facebook.com/tr/?id=1361730677310357&ev=PageView&dl=https%3A%2F%2Froxburyprep.uncommonschools.org%2F&rl=&if=false&ts=1787777794849&iw=fals`

Analytics requests fired on primary CTA click ("Enroll"): 0

## 5. Integration traces (clicks followed, no forms submitted)

### Enrollment

| CTA text | Link href | Final URL after redirects |
|---|---|---|
| Enroll your child today! | `https://bostoncharterschools.schoolmint.net/welcomeback?_ga=2.155605048.28143468` | `https://bostoncharterschools.schoolmint.net/welcomeback?_ga=2.155605048.281434681.1715011463-5668585` |
| Apply Boston Charters | `https://bostoncharterschools.schoolmint.net/welcomeback?_ga=2.186268713.16797596` | `https://bostoncharterschools.schoolmint.net/welcomeback?_ga=2.186268713.1679759628.1604598679-401076` |
| Apply Online | `https://bostoncharterschools.schoolmint.net/welcome` | `https://bostoncharterschools.schoolmint.net/welcome` |
| Apply Online | `https://bostoncharterschools.schoolmint.net/welcomeback?_ga=2.71249299.202079042` | `https://bostoncharterschools.schoolmint.net/welcomeback?_ga=2.71249299.2020790422.1557411416-3328469` |
| Apply Now! | `https://bostoncharterschools.schoolmint.net/` | `https://bostoncharterschools.schoolmint.net/welcomeback` |

### Careers

- Careers CTA click chain → **`https://roxburyprep.uncommonschools.org/careers/`**

### Donate

- FundraiseUp widget loads: `https://cdn.fundraiseup.com/widget/AXGXSELV` (widget ID **AXGXSELV**). Checkout JS loads on the donate page; no payment was initiated.
- Donate page heading order: Donate

## 6. Per-page content metrics (rendered DOM, desktop)

| Page | Words | Title | Meta desc | Canonical | hreflang | JSON-LD types | OG tags | Links in/ext | Imgs |
|---|---|---|---|---|---|---|---|---|---|
| home | 929 | Homepage - Uncommon Schools Boston | **MISSING** | yes | 13 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 51/9 | 10 (3png,7svg) |
| enroll | 1310 | Enroll - Uncommon Schools Boston | **MISSING** | yes | 13 | BreadcrumbList, ImageObject, ListItem, ReadAction, SearchAct | 10 | 57/15 | 22 (3png,13svg,6jpg) |
| careers | 148 | Careers - Uncommon Schools Boston | **MISSING** | yes | 13 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 48/5 | 10 (2png,1jpg,7svg) |
| donate | 86 | Donate - Uncommon Schools Boston | **MISSING** | yes | 13 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 49/3 | 9 (2png,7svg) |
| school | 836 | Roxbury Prep Proctor St. Middle School - Unco | **MISSING** | yes | 13 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 56/7 | 11 (2png,2jpg,7svg) |
| news | 110 | News - Uncommon Schools Boston | **MISSING** | yes | 13 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 48/11 | 9 (2png,7svg) |
| faq | 711 | New Family FAQ - Uncommon Schools Boston | **MISSING** | yes | 13 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 48/8 | 9 (2png,7svg) |
| es-home | 999 | Homepage - Uncommon Schools Boston | **MISSING** | yes | 13 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 51/9 | 10 (3png,7svg) |
| contact | 107 | Contact - Uncommon Schools Boston | **MISSING** | yes | 13 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 48/3 | 9 (2png,7svg) |
| campaign-lp | 378 | Enrollment Programmatic Form - Uncommon Schoo | **MISSING** | yes | 13 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 52/5 | 9 (2png,7svg) |

## 7. Site-wide

- robots.txt, llms.txt, sitemap files saved verbatim in `raw/` (prefix `roxburyprep.uncommonschools.org_`).
- Site search: **absent**
- Primary nav: Enroll, About Roxbury Prep, Student Experience, Campuses, Results, Family Resources, Donate
