# uncommonschools.org — Browser Audit

**Audited:** 2026-08-26 · Playwright/Chromium 151 + Lighthouse 13.4.1 · Mobile 375x812@3x (simulated 4G) and Desktop 1440x900 · every page loaded fresh (no cache, no cookies).

- Resolves: **200** → `https://uncommonschools.org/` · server: `nginx` · HTTP/2 · HSTS on
- Primary site of a WordPress **multisite** on nginx at 134.209.175.171 (migrated off WP Engine/Cloudflare since the March audit). Theme `uncommon-theme`.

## 1. Performance (Lighthouse, median of 3 runs)

Raw JSON per page/viewport in `lighthouse/`. Mobile = 375x812 @3x, simulated 4G; Desktop = 1440x900.

> **Reading LCP here:** pages with the auto-rotating hero carousel report extreme LCP (up to 79–310s). Each slide rotation paints a new, larger LCP candidate, so the metric keeps climbing for as long as the carousel runs under throttling. The real first hero paint is at ~0.8–4s (PerformanceObserver capture in `data`). Treat FCP / Speed Index / TBT as the representative load metrics on carousel pages — and note the same carousel has no pause control (see §2).

### Mobile

| Page | Perf | LCP | CLS | TBT | FCP | SI | TTFB | Weight | Req | Unused JS | Unused CSS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [home](https://uncommonschools.org/) | **55** | 79.1s | 0.115 | 282ms | 1.5s | 24.8s | 9ms | 17.1MB | 73 | 883KB | 31KB |
| [enroll](https://uncommonschools.org/enroll/) | **66** | 15.4s | 0.035 | 271ms | 1.5s | 4.5s | 10ms | 2.8MB | 65 | 968KB | 32KB |
| [careers](https://uncommonschools.org/careers/) | **70** | 8.8s | 0.020 | 216ms | 1.4s | 3.2s | 9ms | 21.2MB | 64 | 900KB | 32KB |
| [jobs](https://uncommonschools.org/careers/jobs/) | **62** | 9.3s | 0.143 | 228ms | 1.5s | 5.0s | 12ms | 2.2MB | 65 | 875KB | 31KB |
| [donate](https://uncommonschools.org/donate/) | **67** | 9.2s | 0.096 | 220ms | 1.5s | 3.7s | 610ms | 5.7MB | 71 | 899KB | 31KB |
| [school](https://uncommonschools.org/schools/camden-prep-copewood-elementary-school/) | **70** | 7.4s | 0.074 | 220ms | 1.5s | 3.3s | 560ms | 2.0MB | 58 | 901KB | 32KB |
| [news-post](https://uncommonschools.org/news/when-educators-act-like-gateways-rather-than-gatekeepers-students-are-more-likely-to-get-through-college/) | **67** | 7.9s | 0.006 | 286ms | 1.5s | 4.5s | 1.3s | 2.1MB | 59 | 900KB | 32KB |
| [faq](https://uncommonschools.org/faq/) | **65** | 9.6s | 0.120 | 223ms | 1.4s | 4.1s | 10ms | 2.0MB | 57 | 900KB | 32KB |
| [es-home](https://uncommonschools.org/es/) | **59** | 79.3s | 0.031 | 277ms | 1.5s | 23.2s | 990ms | 17.1MB | 78 | 884KB | 31KB |
| [contact](https://uncommonschools.org/contact-us/) | **73** | 6.3s | 0.040 | 208ms | 1.5s | 3.1s | 484ms | 1.8MB | 59 | 900KB | 32KB |
| [results](https://uncommonschools.org/results/) | **67** | 10.3s | 0.032 | 246ms | 1.5s | 4.9s | 16ms | 87.1MB | 74 | 893KB | 32KB |
| [about](https://uncommonschools.org/about-us/) | **66** | 11.2s | 0.016 | 246ms | 1.5s | 5.5s | 547ms | 9.9MB | 67 | 893KB | 32KB |
| [why-uncommon](https://uncommonschools.org/why-uncommon/) | **67** | 9.4s | 0.042 | 223ms | 1.5s | 4.7s | 959ms | 2.9MB | 69 | 893KB | 31KB |

### Desktop

| Page | Perf | LCP | CLS | TBT | FCP | SI | TTFB | Weight | Req | Unused JS | Unused CSS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [home](https://uncommonschools.org/) | **65** | 13.0s | 0.043 | 0ms | 438ms | 4.4s | 11ms | 17.1MB | 73 | 884KB | 31KB |
| [enroll](https://uncommonschools.org/enroll/) | **88** | 2.1s | 0.063 | 0ms | 437ms | 1.2s | 14ms | 2.8MB | 65 | 969KB | 32KB |
| [careers](https://uncommonschools.org/careers/) | **86** | 2.6s | 0.038 | 0ms | 403ms | 844ms | 10ms | 21.2MB | 64 | 900KB | 31KB |
| [jobs](https://uncommonschools.org/careers/jobs/) | **88** | 1.9s | 0.096 | 0ms | 416ms | 1.2s | 11ms | 2.2MB | 64 | 871KB | 31KB |
| [donate](https://uncommonschools.org/donate/) | **93** | 1.7s | 0.039 | 0ms | 435ms | 920ms | 518ms | 5.6MB | 71 | 900KB | 31KB |
| [school](https://uncommonschools.org/schools/camden-prep-copewood-elementary-school/) | **93** | 1.5s | 0.087 | 0ms | 437ms | 939ms | 512ms | 2.0MB | 58 | 901KB | 32KB |
| [news-post](https://uncommonschools.org/news/when-educators-act-like-gateways-rather-than-gatekeepers-students-are-more-likely-to-get-through-college/) | **93** | 1.6s | 0.070 | 0ms | 432ms | 961ms | 475ms | 2.1MB | 59 | 901KB | 32KB |
| [faq](https://uncommonschools.org/faq/) | **93** | 1.6s | 0.071 | 0ms | 391ms | 956ms | 12ms | 2.0MB | 57 | 900KB | 32KB |
| [es-home](https://uncommonschools.org/es/) | **62** | 13.1s | 0.104 | 0ms | 423ms | 5.1s | 712ms | 17.1MB | 78 | 884KB | 31KB |
| [contact](https://uncommonschools.org/contact-us/) | **93** | 1.5s | 0.080 | 0ms | 391ms | 887ms | 567ms | 1.8MB | 58 | 900KB | 32KB |
| [results](https://uncommonschools.org/results/) | **92** | 1.7s | 0.053 | 0ms | 411ms | 1.3s | 10ms | 87.1MB | 74 | 892KB | 32KB |
| [about](https://uncommonschools.org/about-us/) | **89** | 2.0s | 0.063 | 0ms | 442ms | 1.4s | 643ms | 9.9MB | 67 | 894KB | 31KB |
| [why-uncommon](https://uncommonschools.org/why-uncommon/) | **93** | 1.6s | 0.037 | 0ms | 486ms | 1.3s | 665ms | 2.9MB | 69 | 892KB | 31KB |

**Real transfer on first load (Playwright, no throttling):**

| Page | VP | Total | JS | Images | Requests |
|---|---|---|---|---|---|
| home | mobile | 17.1MB | 1.6MB | 15.4MB | 74 |
| enroll | mobile | 2.8MB | 1.8MB | 915KB | 66 |
| careers | mobile | 21.2MB | 1.6MB | 19.5MB | 65 |
| jobs | mobile | 2.2MB | 1.6MB | 430KB | 66 |
| donate | mobile | 5.7MB | 1.6MB | 3.9MB | 72 |
| school | mobile | 2.0MB | 1.6MB | 230KB | 59 |
| news-post | mobile | 2.1MB | 1.6MB | 368KB | 60 |
| faq | mobile | 2.0MB | 1.6MB | 307KB | 58 |
| es-home | mobile | 17.1MB | 1.6MB | 15.4MB | 80 |
| contact | mobile | 1.8MB | 1.6MB | 69KB | 59 |
| results | mobile | 87.1MB | 1.6MB | 85.4MB | 75 |
| about | mobile | 9.9MB | 1.6MB | 8.1MB | 68 |
| why-uncommon | mobile | 2.9MB | 1.6MB | 1.2MB | 70 |

## 2. Accessibility (axe-core 4.x + manual checks)

### axe violations by page

| Page | VP | Rule | Impact | WCAG | Count | Example selector |
|---|---|---|---|---|---|---|
| home | M | `aria-hidden-focus` | serious | wcag2a,wcag412 | 1 | `.hero__container > .slick-list.draggable > .slick-track > .slick-slide[data-slic` |
| home | M | `heading-order` | moderate | — | 2 | `.col-sm:nth-child(1) > .bar__link > h4` |
| home | M | `landmark-unique` | moderate | — | 1 | `.hero__container` |
| home | M | `region` | moderate | — | 1 | `#trp-floater-ls` |
| home | D | `aria-hidden-focus` | serious | wcag2a,wcag412 | 1 | `.hero__container > .slick-list.draggable > .slick-track > .slick-slide[data-slic` |
| home | D | `heading-order` | moderate | — | 2 | `.col-sm:nth-child(1) > .bar__link > h4` |
| home | D | `landmark-unique` | moderate | — | 2 | `.site-header__split > .site-nav` |
| home | D | `region` | moderate | — | 1 | `#trp-floater-ls` |
| enroll | M | `heading-order` | moderate | — | 1 | `.feature--triple.banded:nth-child(2) > .container > .grid--rows.an-seq.an-child-` |
| enroll | M | `page-has-heading-one` | moderate | — | 1 | `html` |
| enroll | M | `region` | moderate | — | 1 | `#trp-floater-ls` |
| enroll | D | `heading-order` | moderate | — | 1 | `.feature--triple.banded:nth-child(2) > .container > .grid--rows.an-seq.an-child-` |
| enroll | D | `landmark-unique` | moderate | — | 1 | `.site-header__split > .site-nav` |
| enroll | D | `page-has-heading-one` | moderate | — | 1 | `html` |
| enroll | D | `region` | moderate | — | 1 | `#trp-floater-ls` |
| careers | M | `heading-order` | moderate | — | 3 | `.card.card--reveal.card--fourby:nth-child(1) > .card__bg > .card__content.fade-b` |
| careers | M | `page-has-heading-one` | moderate | — | 1 | `html` |
| careers | M | `region` | moderate | — | 1 | `#trp-floater-ls` |
| careers | D | `heading-order` | moderate | — | 3 | `.card.card--reveal.card--fourby:nth-child(1) > .card__bg > .card__content.fade-b` |
| careers | D | `landmark-unique` | moderate | — | 1 | `.site-header__split > .site-nav` |
| careers | D | `page-has-heading-one` | moderate | — | 1 | `html` |
| careers | D | `region` | moderate | — | 1 | `#trp-floater-ls` |
| jobs | M | `heading-order` | moderate | — | 5 | `#location-0 > .job-posting__items > div > .job-posting__item[data-index="0"] > .` |
| jobs | M | `page-has-heading-one` | moderate | — | 1 | `html` |
| jobs | M | `region` | moderate | — | 1 | `#trp-floater-ls` |
| jobs | D | `heading-order` | moderate | — | 5 | `#location-0 > .job-posting__items > div > .job-posting__item[data-index="0"] > .` |
| jobs | D | `landmark-unique` | moderate | — | 1 | `.site-header__split > .site-nav` |
| jobs | D | `page-has-heading-one` | moderate | — | 1 | `html` |
| jobs | D | `region` | moderate | — | 1 | `#trp-floater-ls` |
| donate | M | `heading-order` | moderate | — | 2 | `.pl-md-3 > h3` |
| donate | M | `region` | moderate | — | 1 | `#trp-floater-ls` |
| donate | D | `heading-order` | moderate | — | 2 | `.pl-md-3 > h3` |
| donate | D | `landmark-unique` | moderate | — | 1 | `.site-header__split > .site-nav` |
| donate | D | `region` | moderate | — | 1 | `#trp-floater-ls` |
| school | M | `region` | moderate | — | 1 | `#trp-floater-ls` |
| school | D | `landmark-unique` | moderate | — | 1 | `.site-header__split > .site-nav` |
| school | D | `region` | moderate | — | 1 | `#trp-floater-ls` |
| news-post | M | `region` | moderate | — | 1 | `#trp-floater-ls` |
| news-post | D | `landmark-unique` | moderate | — | 1 | `.site-header__split > .site-nav` |
| news-post | D | `region` | moderate | — | 1 | `#trp-floater-ls` |
| faq | M | `page-has-heading-one` | moderate | — | 1 | `html` |
| faq | M | `region` | moderate | — | 1 | `#trp-floater-ls` |
| faq | D | `landmark-unique` | moderate | — | 1 | `.site-header__split > .site-nav` |
| faq | D | `page-has-heading-one` | moderate | — | 1 | `html` |
| faq | D | `region` | moderate | — | 1 | `#trp-floater-ls` |
| es-home | M | `aria-hidden-focus` | serious | wcag2a,wcag412 | 1 | `.hero__container > .slick-list.draggable > .slick-track > .slick-slide[data-slic` |
| es-home | M | `heading-order` | moderate | — | 2 | `.col-sm:nth-child(1) > .bar__link > h4` |
| es-home | M | `landmark-unique` | moderate | — | 1 | `.hero__container` |
| es-home | M | `region` | moderate | — | 1 | `#trp-floater-ls` |
| es-home | D | `aria-hidden-focus` | serious | wcag2a,wcag412 | 1 | `.hero__container > .slick-list.draggable > .slick-track > .slick-slide[data-slic` |
| es-home | D | `heading-order` | moderate | — | 2 | `.col-sm:nth-child(1) > .bar__link > h4` |
| es-home | D | `landmark-unique` | moderate | — | 2 | `.site-header__split > .site-nav` |
| es-home | D | `region` | moderate | — | 1 | `#trp-floater-ls` |
| contact | M | `heading-order` | moderate | — | 1 | `#gform_wrapper_2 > .gform_heading > h3` |
| contact | M | `region` | moderate | — | 1 | `#trp-floater-ls` |
| contact | D | `heading-order` | moderate | — | 1 | `#gform_wrapper_2 > .gform_heading > h3` |
| contact | D | `landmark-unique` | moderate | — | 1 | `.site-header__split > .site-nav` |
| contact | D | `region` | moderate | — | 1 | `#trp-floater-ls` |
| results | M | `heading-order` | moderate | — | 5 | `.feature__content > h5` |
| results | M | `landmark-unique` | moderate | — | 1 | `.an-in.grid--rows.card-carousel` |
| results | M | `page-has-heading-one` | moderate | — | 1 | `html` |
| results | M | `region` | moderate | — | 1 | `#trp-floater-ls` |
| results | D | `heading-order` | moderate | — | 5 | `.feature__content > h5` |
| results | D | `landmark-unique` | moderate | — | 2 | `.site-header__split > .site-nav` |
| results | D | `page-has-heading-one` | moderate | — | 1 | `html` |
| results | D | `region` | moderate | — | 1 | `#trp-floater-ls` |
| about | M | `heading-order` | moderate | — | 2 | `.card--reveal.card--threeby[target=""]:nth-child(1) > .card__bg > .card__content` |
| about | M | `page-has-heading-one` | moderate | — | 1 | `html` |
| about | M | `region` | moderate | — | 1 | `#trp-floater-ls` |
| about | D | `heading-order` | moderate | — | 2 | `.card--reveal.card--threeby[target=""]:nth-child(1) > .card__bg > .card__content` |
| about | D | `landmark-unique` | moderate | — | 1 | `.site-header__split > .site-nav` |
| about | D | `page-has-heading-one` | moderate | — | 1 | `html` |
| about | D | `region` | moderate | — | 1 | `#trp-floater-ls` |
| why-uncommon | M | `heading-order` | moderate | — | 3 | `.col-md-4.card.an-child:nth-child(1) > .card__inner.brief-content > h4` |
| why-uncommon | M | `region` | moderate | — | 1 | `#trp-floater-ls` |
| why-uncommon | D | `heading-order` | moderate | — | 3 | `.col-md-4.card.an-child:nth-child(1) > .card__inner.brief-content > h4` |
| why-uncommon | D | `landmark-unique` | moderate | — | 1 | `.site-header__split > .site-nav` |
| why-uncommon | D | `region` | moderate | — | 1 | `#trp-floater-ls` |

### Images missing alt attribute

- `home`: `https://uncommonschools.org/wp-content/uploads/2019/02/Broad-Prize-Winner.svg`
- `home`: `https://uncommonschools.org/wp-content/uploads/2019/02/99-Accepted-1.svg`
- `home`: `https://uncommonschools.org/wp-content/uploads/2019/02/National-Recognition-1.svg`
- `why-uncommon`: `https://uncommonschools.org/wp-content/uploads/2019/02/Your-Impact-1.svg`
- `why-uncommon`: `https://uncommonschools.org/wp-content/uploads/2019/02/Career-Growth-1.svg`

### Heading structure issues

| Page | H1 count | Skipped levels (first 3) |
|---|---|---|
| home | 3 | H1→H6, H1→H6, H1→H4 |
| enroll | 0 | H3→H5 |
| careers | 0 | H3→H5, H3→H5, H3→H5 |
| jobs | 0 | H2→H5, H2→H5, H2→H5 |
| donate | 1 | H1→H3, H3→H5 |
| school | 1 | — |
| news-post | 1 | — |
| faq | 0 | — |
| es-home | 3 | H1→H6, H1→H6, H1→H4 |
| contact | 1 | H1→H3 |
| results | 0 | H3→H5, H3→H5, H3→H5 |
| about | 0 | H3→H5, H3→H6, H4→H6 |
| why-uncommon | 1 | H1→H4, H3→H5, H3→H6 |

### Form inputs: labels and autocomplete

| Page | Form | Field | Type | Labeled | autocomplete |
|---|---|---|---|---|---|
| home | `div.site-header__main > div.site-header_` | s | search | yes | **missing** |
| home | `body.home.wp-singular > footer.footer.hi` | zip | text | **NO** | **missing** |
| home | `form#gform_1` | input_2 | text | yes | **missing** |
| home | `form#gform_1` | ak_hp_textarea | textarea | yes | **missing** |
| enroll | `div.site-header__main > div.site-header_` | s | search | yes | **missing** |
| enroll | `body.wp-singular.page-template-default >` | zip | text | **NO** | **missing** |
| enroll | `form#gform_1` | input_2 | text | yes | **missing** |
| enroll | `form#gform_1` | ak_hp_textarea | textarea | yes | **missing** |
| careers | `div.site-header__main > div.site-header_` | s | search | yes | **missing** |
| careers | `body.wp-singular.page-template-default >` | zip | text | **NO** | **missing** |
| careers | `form#gform_1` | input_2 | text | yes | **missing** |
| careers | `form#gform_1` | ak_hp_textarea | textarea | yes | **missing** |
| jobs | `div.site-header__main > div.site-header_` | s | search | yes | **missing** |
| jobs | `body.wp-singular.page-template > footer.` | zip | text | **NO** | **missing** |
| jobs | `form#gform_1` | input_2 | text | yes | **missing** |
| jobs | `form#gform_1` | ak_hp_textarea | textarea | yes | **missing** |
| donate | `div.site-header__main > div.site-header_` | s | search | yes | **missing** |
| donate | `section.block.block--feature > div.conta` | amount | radio | yes | **missing** |
| donate | `section.block.block--feature > div.conta` | amount | radio | yes | **missing** |
| donate | `section.block.block--feature > div.conta` | amount | radio | yes | **missing** |
| donate | `section.block.block--feature > div.conta` | amount | radio | yes | **missing** |
| donate | `section.block.block--feature > div.conta` | amount | radio | yes | **missing** |
| donate | `body.wp-singular.page-template-default >` | zip | text | **NO** | **missing** |
| donate | `form#gform_1` | input_2 | text | yes | **missing** |
| donate | `form#gform_1` | ak_hp_textarea | textarea | yes | **missing** |
| school | `div.site-header__main > div.site-header_` | s | search | yes | **missing** |
| school | `body.wp-singular.school-template-default` | zip | text | **NO** | **missing** |
| school | `form#gform_1` | input_2 | text | yes | **missing** |
| school | `form#gform_1` | ak_hp_textarea | textarea | yes | **missing** |
| news-post | `div.site-header__main > div.site-header_` | s | search | yes | **missing** |
| news-post | `body.wp-singular.post-template-default >` | zip | text | **NO** | **missing** |
| news-post | `form#gform_1` | input_2 | text | yes | **missing** |
| news-post | `form#gform_1` | ak_hp_textarea | textarea | yes | **missing** |
| faq | `div.site-header__main > div.site-header_` | s | search | yes | **missing** |
| faq | `body.wp-singular.page-template-default >` | zip | text | **NO** | **missing** |
| faq | `form#gform_1` | input_2 | text | yes | **missing** |
| faq | `form#gform_1` | ak_hp_textarea | textarea | yes | **missing** |
| es-home | `div.site-header__main > div.site-header_` | s | search | yes | **missing** |
| es-home | `body.home.wp-singular > footer.footer.hi` | zip | text | **NO** | **missing** |
| es-home | `form#gform_1` | input_2 | text | yes | **missing** |
| es-home | `form#gform_1` | ak_hp_textarea | textarea | yes | **missing** |
| contact | `div.site-header__main > div.site-header_` | s | search | yes | **missing** |
| contact | `form#gform_2` | input_7 | text | yes | **missing** |
| contact | `form#gform_2` | input_5 | select-one | yes | **missing** |
| contact | `form#gform_2` | input_6 | textarea | yes | **missing** |
| contact | `form#gform_2` | ak_hp_textarea | textarea | yes | **missing** |
| contact | `body.wp-singular.page-template > footer.` | zip | text | **NO** | **missing** |
| contact | `form#gform_1` | input_2 | text | yes | **missing** |
| contact | `form#gform_1` | ak_hp_textarea | textarea | yes | **missing** |
| results | `div.site-header__main > div.site-header_` | s | search | yes | **missing** |
| results | `body.wp-singular.page-template-default >` | zip | text | **NO** | **missing** |
| results | `form#gform_1` | input_2 | text | yes | **missing** |
| results | `form#gform_1` | ak_hp_textarea | textarea | yes | **missing** |
| about | `div.site-header__main > div.site-header_` | s | search | yes | **missing** |
| about | `body.wp-singular.page-template-default >` | zip | text | **NO** | **missing** |
| about | `form#gform_1` | input_2 | text | yes | **missing** |
| about | `form#gform_1` | ak_hp_textarea | textarea | yes | **missing** |
| why-uncommon | `div.site-header__main > div.site-header_` | s | search | yes | **missing** |
| why-uncommon | `body.wp-singular.page-template-default >` | zip | text | **NO** | **missing** |
| why-uncommon | `form#gform_1` | input_2 | text | yes | **missing** |
| why-uncommon | `form#gform_1` | ak_hp_textarea | textarea | yes | **missing** |

### Keyboard navigation (desktop, up to 110 tab stops per page)

| Page | Tab stops | Elements w/o visible focus | Keyboard trap |
|---|---|---|---|
| home | 109 | 0 | no |
| enroll | 108 | 0 | no |
| careers | 108 | 0 | no |
| donate | 108 | 0 | no |
| faq | 108 | 0 | no |
| contact | 108 | 0 | no |

### Carousels, autoplay, media

- `home`: carousel `main#content > section.block.block--hero > div.hero__container.slick-i` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `home`: carousel `main#content > section.block.block--carousel` — controls: Previous Slide, Next Slide, Go to slide 1, Go to slide 2, Go to slide 3, Go to slide 4; pause/stop control: **NO** (WCAG 2.2.2)
- `home`: carousel `main#content > section.block.block--carousel > div.container > div.car` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `home`: carousel `section.block.block--carousel > div.container > div.row.justify-conten` — controls: Previous Slide, Next Slide, Go to slide 1, Go to slide 2, Go to slide 3, Go to slide 4; pause/stop control: **NO** (WCAG 2.2.2)
- `es-home`: carousel `main#content > section.block.block--hero > div.hero__container.slick-i` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `es-home`: carousel `main#content > section.block.block--carousel` — controls: Previous Slide, Next Slide, Ir a la diapositiva 1, Ir a la diapositiva 2, Go to slide 3, Go to slide 4; pause/stop control: **NO** (WCAG 2.2.2)
- `es-home`: carousel `main#content > section.block.block--carousel > div.container > div.car` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `es-home`: carousel `section.block.block--carousel > div.container > div.row.justify-conten` — controls: Previous Slide, Next Slide, Ir a la diapositiva 1, Ir a la diapositiva 2, Go to slide 3, Go to slide 4; pause/stop control: **NO** (WCAG 2.2.2)
- `results`: carousel `main#content > section.block.block--card-carousel` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `results`: carousel `main#content > section.block.block--card-carousel > div.container > di` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `results`: carousel `main#content > section.block.block--card-carousel` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `results`: carousel `main#content > section.block.block--card-carousel > div.container > di` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `results`: carousel `main#content > section.block.block--card-carousel` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `results`: carousel `main#content > section.block.block--card-carousel > div.container > di` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `results`: carousel `main#content > section.block.block--card-carousel` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `results`: carousel `main#content > section.block.block--card-carousel > div.container > di` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `about`: carousel `main#content > section.block.block--carousel` — controls: Previous Slide, Next Slide, Go to slide 1, Go to slide 2, Go to slide 3, Go to slide 4; pause/stop control: **NO** (WCAG 2.2.2)
- `about`: carousel `main#content > section.block.block--carousel > div.carousel__intro.con` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `about`: carousel `main#content > section.block.block--carousel > div.carousel__bg.active` — controls: none; pause/stop control: **NO** (WCAG 2.2.2)
- `about`: carousel `section.block.block--carousel > div.container.pt-2 > div.row > div.col` — controls: Previous Slide, Next Slide, Go to slide 1, Go to slide 2, Go to slide 3, Go to slide 4; pause/stop control: **NO** (WCAG 2.2.2)
- `why-uncommon`: carousel `main#content > section.block.block--card-carousel` — controls: Previous Slide, Next Slide, Go to slide 1, Go to slide 2, Go to slide 3, Go to slide 4; pause/stop control: **NO** (WCAG 2.2.2)
- `why-uncommon`: carousel `main#content > section.block.block--card-carousel > div.container > di` — controls: Previous Slide, Next Slide, Go to slide 1, Go to slide 2, Go to slide 3, Go to slide 4; pause/stop control: **NO** (WCAG 2.2.2)

### Color contrast — undetermined pairs (text over images/gradients; manual check needed)

- `home`: `.slick-uncommon-dots > .slick-dots > li:nth-child(1) > button[type="button"] > .` — Element has a 1:1 contrast ratio with the background
- `home`: `.slick-uncommon-dots > .slick-dots > .slick-active > button[aria-current="true"]` — Element's background color could not be determined due to a background image
- `home`: `.slick-uncommon-dots > .slick-dots > li:nth-child(3) > button[type="button"] > .` — Element's background color could not be determined due to a background image
- `enroll`: `.feature__content > h3` — Element's background color could not be determined due to a background image
- `enroll`: `.feature__content > p` — Element's background color could not be determined due to a background image
- `enroll`: `.feature--triple.banded:nth-child(2) > .container > .grid--rows.an-seq.an-child-` — Element's background color could not be determined due to a pseudo element
- `careers`: `.feature__content.an-up.an-in > h3` — Element's background color could not be determined due to a background image
- `careers`: `.feature__content.an-up.an-in > p:nth-child(2)` — Element's background color could not be determined due to a background image
- `careers`: `a[aria-label="View a list of open roles"]` — Element's background color could not be determined due to a background image
- `jobs`: `h6` — Element's background color could not be determined due to a background image
- `jobs`: `.feature__content > h3` — Element's background color could not be determined due to a background image
- `jobs`: `.feature__content > p` — Element's background color could not be determined due to a background image
- `donate`: `h6` — Element's background color could not be determined due to a pseudo element
- `donate`: `h1` — Element's background color could not be determined due to a pseudo element
- `donate`: `.hero__content > p:nth-child(3)` — Element's background color could not be determined due to a pseudo element

### Landmarks, skip link, language

- Skip link: `Skip to Main Content` → `#content`
- `<html lang>`: `en-US`
- Landmarks (home): main×1, nav×3, header×1, footer×1
- `/es/` lang attr: `es-MX` — 200-word sample: "Ir a la diapositiva 1Ir a la diapositiva 2Go to slide 3 Curioso. Seguro de sí mismo. Preparados para la universidad. Seniors Receive Full-Tuition Scholarships! Over the last three years, 74 Uncommon seniors have received prestigious, full-tuition, Qu…"

## 3. Mobile usability (375x812 @3x)

| Page | Viewport meta | Horiz. scroll | Text <16px | Text <12px | Small tap targets (<24px) | Fixed/sticky elements |
|---|---|---|---|---|---|---|
| home | ok | no | 1 | 6 | 37 | html > body.home.wp-singular > (7%); nav#mobile-nav (93%) |
| enroll | ok | no | 1 | 1 | 27 | html > body.wp-singular.page-t (7%); nav#mobile-nav (93%) |
| careers | ok | no | 8 | 1 | 34 | html > body.wp-singular.page-t (7%); nav#mobile-nav (93%) |
| jobs | ok | no | 16 | 1 | 35 | html > body.wp-singular.page-t (7%); nav#mobile-nav (93%) |
| donate | ok | no | 3 | 1 | 32 | html > body.wp-singular.page-t (7%); nav#mobile-nav (93%) |
| school | ok | no | 2 | 1 | 28 | html > body.wp-singular.school (7%); nav#mobile-nav (93%) |
| news-post | ok | no | 2 | 1 | 28 | html > body.wp-singular.post-t (7%); nav#mobile-nav (93%) |
| faq | ok | no | 1 | 1 | 27 | html > body.wp-singular.page-t (7%); nav#mobile-nav (93%) |
| es-home | ok | no | 1 | 6 | 36 | html > body.home.wp-singular > (7%); nav#mobile-nav (93%) |
| contact | ok | no | 6 | 1 | 28 | html > body.wp-singular.page-t (7%); nav#mobile-nav (93%) |
| results | ok | no | 1 | 1 | 31 | html > body.wp-singular.page-t (7%); nav#mobile-nav (93%) |
| about | ok | no | 9 | 1 | 34 | html > body.wp-singular.page-t (7%); nav#mobile-nav (93%) |
| why-uncommon | ok | no | 1 | 1 | 27 | html > body.wp-singular.page-t (7%); nav#mobile-nav (93%) |

Text under 12px (home, first 5):

- 11.2px `div.cards--masonry.an-q > a.card.an-child > div.card__bg > div.card__c` — "March 5"
- 11.2px `div.cards--masonry.an-q > a.card.an-child > div.card__bg > div.card__c` — "January 23"
- 11.2px `div.cards--masonry.an-q > a.card.an-child > div.card__bg > div.card__c` — "December 27"
- 11.2px `div.cards--masonry.an-q > a.card.an-child > div.card__bg > div.card__c` — "December 18"
- 11.2px `div.cards--masonry.an-q > a.card.an-child > div.card__bg > div.card__c` — "December 16"

Tap targets under 24×24 CSS px (home, first 8):

- 20×15px `html > body.home.wp-singular > header.site-header > a.skipto` — "Skip to Main Content"
- 56×22px `div.site-header__split.container > div.site-search > div.site-search__` — "Submit Search Form"
- 16×21px `div.site-header__main > div.site-header__split.container > div.site-se` — "Close Search Form"
- 58×19px `nav#mobile-nav > ul.mobile-nav__menu > li.search-row > button.site-sea` — "Open Search Form"
- 16×16px `nav#mobile-nav > ul.mobile-nav__social > li > a` — ""
- 16×16px `nav#mobile-nav > ul.mobile-nav__social > li > a` — ""
- 16×16px `nav#mobile-nav > ul.mobile-nav__social > li > a` — ""
- 16×16px `nav#mobile-nav > ul.mobile-nav__social > li > a` — ""

### Mobile navigation

- Enroll/Apply link visible somewhere on loaded homepage: True
- Menu toggle present: True; menu opened by standard click: False — **click intercepted** (see popup findings)

Screenshots for every page at both viewports: `screenshots/uncommonschools.org/`.

## 4. Cookies and tracking

Cookies after first load of homepage (no interaction, fresh profile): **17**. No cookie consent banner exists on this domain.

| Cookie | Domain | Expiry |
|---|---|---|
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

Server-set cookies (Set-Cookie headers, first load):

- from `https://cdn.fundraiseup.com/widget/AXGXSELV`: `fundraiseup_cid=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=.fundraiseup.com; path=/; SameSite=None; Secur`
- from `https://www.facebook.com/tr/?id=1361730677310357&ev=PageView&dl=https%`: `fr=0jVQ207ksc0E1spHm..Bqj1Gf...1.0.Bqj1Gf.; expires=Tuesday, 24-Nov-2026 20:50:39 GMT; path=/; domain=.faceboo`

Tag containers detected (`window.google_tag_manager`): none — gtag.js loads directly

Analytics/ad requests on page load:

- `https://www.googletagmanager.com/gtag/js?id=G-1Z558Q2T6W`
- `https://connect.facebook.net/en_US/fbevents.js`
- `https://connect.facebook.net/signals/config/1361730677310357?v=2.9.385&r=stable&domain=uncommonschools.org&im=1&hme=1a72ec78e057d90ba48afa55a82b063b1c`
- `https://www.facebook.com/tr/?id=1361730677310357&ev=PageView&dl=https%3A%2F%2Funcommonschools.org%2F&rl=&if=false&ts=1787777439188&iw=false&sw=375&sh=`

Analytics requests fired on primary CTA click ("Enroll"): 0

## 5. Integration traces (clicks followed, no forms submitted)

Enroll page region links (note `http://` scheme on several):

- Skip to Main Content: `https://uncommonschools.org/enroll/#content`
- Enroll: `https://uncommonschools.org/enroll/`
- Enroll in Boston: `http://roxburyprep.uncommonschools.org/enroll`
- Enroll in Camden: `http://camdenprep.uncommonschools.org/enroll/`
- Enroll in Newark: `http://northstar.uncommonschools.org/enroll/`
- Enroll in NYC: `https://nyc.uncommonschools.org/enroll/`
- Enroll in Rochester: `http://rochesterprep.uncommonschools.org/enroll/`
- Boston: `http://roxburyprep.uncommonschools.org/enroll`
- Camden: `http://camdenprep.uncommonschools.org/enroll/`
- New York City: `http://nyc.uncommonschools.org/enroll/`
- Newark: `http://northstar.uncommonschools.org/enroll/`
- Rochester: `http://rochesterprep.uncommonschools.org/enroll/`

- `/careers/jobs/` listing renders from same-origin REST proxy `/wp-json/wp/v2/careers/jobs/` (101 jobs, SmartRecruiters IDs). main.js references `smartrecruiters.com/web-sso/saml/UncommonSchools/login`. No Lever endpoints called.

### Donate

- FundraiseUp widget loads: `https://cdn.fundraiseup.com/widget/AXGXSELV` (widget ID **AXGXSELV**). Checkout JS loads on the donate page; no payment was initiated.
- Donate page heading order: Support Our Students and Staff → Donate → How Your Donations Help → Other Ways to Donate → Find a School Near You → Newsletter

## 6. Per-page content metrics (rendered DOM, desktop)

| Page | Words | Title | Meta desc | Canonical | hreflang | JSON-LD types | OG tags | Links in/ext | Imgs |
|---|---|---|---|---|---|---|---|---|---|
| home | 425 | Homepage - Uncommon Schools | yes | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 6 | 75/31 | 13 (10png,3svg) |
| enroll | 41 | Enroll - Uncommon Schools | **MISSING** | yes | 12 | BreadcrumbList, ImageObject, ListItem, ReadAction, SearchAct | 9 | 64/30 | 10 (10png) |
| careers | 469 | Careers - Uncommon Schools | **MISSING** | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 78/25 | 11 (10png,1jpg) |
| jobs | 233 | Jobs - Uncommon Schools | **MISSING** | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 87/25 | 10 (10png) |
| donate | 452 | Donate - Uncommon Schools | yes | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 6 | 67/27 | 11 (10png,1jpg) |
| school | 18 | Camden Prep Copewood Elementary School - Unco | **MISSING** | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 64/25 | 10 (10png) |
| news-post | 32 | Education Post: When Educators Act Like Gatew | **MISSING** | yes | 12 | Article, BreadcrumbList, CommentAction, ImageObject, ListIte | 9 | 64/25 | 11 (11png) |
| faq | 611 | FAQ - Uncommon Schools | **MISSING** | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 67/35 | 10 (10png) |
| es-home | 471 | Homepage - Uncommon Schools | yes | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 6 | 75/31 | 13 (10png,3svg) |
| contact | 85 | Contact Us - Uncommon Schools | **MISSING** | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 64/26 | 10 (10png) |
| results | 561 | Uncommon's Results - Uncommon Schools | yes | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 6 | 67/29 | 16 (16png) |
| about | 701 | About Us - Uncommon Schools | **MISSING** | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 70/25 | 10 (10png) |
| why-uncommon | 825 | Why Uncommon? - Uncommon Schools | **MISSING** | yes | 12 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 70/25 | 13 (10png,3svg) |

## 7. Site-wide

- robots.txt, llms.txt, sitemap files saved verbatim in `raw/` (prefix `uncommonschools.org_`).
- Site search: present
- Primary nav: About Us, Our Schools, Results, Sharing Our Practices, Careers
