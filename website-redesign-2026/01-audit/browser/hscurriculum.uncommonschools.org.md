# hscurriculum.uncommonschools.org — Browser Audit

**Audited:** 2026-08-26 · Playwright/Chromium 151 + Lighthouse 13.4.1 · Mobile 375x812@3x (simulated 4G) and Desktop 1440x900 · every page loaded fresh (no cache, no cookies).

- Resolves: **200** → `https://hscurriculum.uncommonschools.org/` · server: `cloudflare` · HTTP/2 · HSTS on
- Separate WordPress install on WP Engine behind Cloudflare (cf-ray/x-cache headers). Theme `uncommon-hub`.

## 1. Performance (Lighthouse, median of 3 runs)

Raw JSON per page/viewport in `lighthouse/`. Mobile = 375x812 @3x, simulated 4G; Desktop = 1440x900.

> **Reading LCP here:** pages with the auto-rotating hero carousel report extreme LCP (up to 79–310s). Each slide rotation paints a new, larger LCP candidate, so the metric keeps climbing for as long as the carousel runs under throttling. The real first hero paint is at ~0.8–4s (PerformanceObserver capture in `data`). Treat FCP / Speed Index / TBT as the representative load metrics on carousel pages — and note the same carousel has no pause control (see §2).

### Mobile

| Page | Perf | LCP | CLS | TBT | FCP | SI | TTFB | Weight | Req | Unused JS | Unused CSS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [home](https://hscurriculum.uncommonschools.org/) | **45** | 6.1s | 0.032 | 1.3s | 2.4s | 5.9s | 53ms | 2.6MB | 182 | 659KB | 279KB |
| [about](https://hscurriculum.uncommonschools.org/about/) | **46** | 7.2s | 0.027 | 910ms | 2.6s | 6.7s | 22ms | 2.6MB | 157 | 718KB | 228KB |
| [collection](https://hscurriculum.uncommonschools.org/collection/1-01-function-notation/) | **24** | 5.6s | 0.835 | 2.0s | 2.4s | 2.7s | 31ms | 2.2MB | 162 | 642KB | 228KB |

### Desktop

| Page | Perf | LCP | CLS | TBT | FCP | SI | TTFB | Weight | Req | Unused JS | Unused CSS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [home](https://hscurriculum.uncommonschools.org/) | **93** | 1.3s | 0.049 | 131ms | 568ms | 1.5s | 119ms | 2.6MB | 171 | 671KB | 278KB |
| [about](https://hscurriculum.uncommonschools.org/about/) | **95** | 1.2s | 0.034 | 130ms | 524ms | 926ms | 22ms | 2.5MB | 142 | 722KB | 227KB |
| [collection](https://hscurriculum.uncommonschools.org/collection/1-01-function-notation/) | **68** | 925ms | 0.463 | 277ms | 503ms | 747ms | 28ms | 2.2MB | 150 | 644KB | 227KB |

**Real transfer on first load (Playwright, no throttling):**

| Page | VP | Total | JS | Images | Requests |
|---|---|---|---|---|---|
| home | mobile | 2.6MB | 1.9MB | 392KB | 140 |
| about | mobile | 2.5MB | 1.8MB | 430KB | 110 |
| collection | mobile | 2.1MB | 1.8MB | 23KB | 118 |

## 2. Accessibility (axe-core 4.x + manual checks)

### axe violations by page

| Page | VP | Rule | Impact | WCAG | Count | Example selector |
|---|---|---|---|---|---|---|
| home | M | `aria-allowed-role` | minor | — | 1 | `#main` |
| home | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.text-grey-light` |
| home | M | `heading-order` | moderate | — | 5 | `h3` |
| home | M | `landmark-one-main` | moderate | — | 1 | `html` |
| home | M | `region` | moderate | — | 19 | `h1` |
| home | M | `role-img-alt` | serious | wcag2a,wcag111 | 1 | `#slick-slide00 > div > .lg\:w-1\/3.xl\:px-20.md\:px-10 > .card-bg.hover\:scale-1` |
| home | M | `tabindex` | serious | — | 1 | `.skipto` |
| home | D | `aria-allowed-role` | minor | — | 1 | `#main` |
| home | D | `heading-order` | moderate | — | 10 | `h3` |
| home | D | `landmark-one-main` | moderate | — | 1 | `html` |
| home | D | `landmark-unique` | moderate | — | 1 | `.site-header__split > .site-nav` |
| home | D | `region` | moderate | — | 17 | `h1` |
| home | D | `role-img-alt` | serious | wcag2a,wcag111 | 6 | `.lg\:w-1\/3.xl\:px-20.md\:px-10:nth-child(1) > .card-bg.hover\:scale-106.tile-wr` |
| home | D | `tabindex` | serious | — | 1 | `.skipto` |
| about | M | `aria-allowed-role` | minor | — | 1 | `#main` |
| about | M | `heading-order` | moderate | — | 3 | `h3` |
| about | M | `landmark-one-main` | moderate | — | 1 | `html` |
| about | M | `region` | moderate | — | 1 | `article` |
| about | M | `tabindex` | serious | — | 1 | `.skipto` |
| about | D | `aria-allowed-role` | minor | — | 1 | `#main` |
| about | D | `heading-order` | moderate | — | 3 | `h3` |
| about | D | `landmark-one-main` | moderate | — | 1 | `html` |
| about | D | `landmark-unique` | moderate | — | 1 | `.site-header__split > .site-nav` |
| about | D | `region` | moderate | — | 1 | `article` |
| about | D | `tabindex` | serious | — | 1 | `.skipto` |
| collection | M | `aria-allowed-role` | minor | — | 1 | `#main` |
| collection | M | `aria-dialog-name` | serious | — | 2 | `#\34 420` |
| collection | M | `aria-required-children` | critical | wcag2a,wcag131 | 1 | `div[role="list"]` |
| collection | M | `button-name` | critical | wcag2a,wcag412 | 1 | `.rotate-180` |
| collection | M | `heading-order` | moderate | — | 2 | `#card-11024 > .px-34.py-36.flex-col > .items-start.md\:flex > .mr-30.flex-1 > .m` |
| collection | M | `label` | critical | wcag2a,wcag412 | 1 | `.bg-transparent` |
| collection | M | `link-name` | serious | wcag2a,wcag244 | 1 | `a[download=".pdf"]` |
| collection | M | `region` | moderate | — | 11 | `.bg-blue-light` |
| collection | M | `tabindex` | serious | — | 1 | `.skipto` |
| collection | D | `aria-allowed-role` | minor | — | 1 | `#main` |
| collection | D | `aria-dialog-name` | serious | — | 2 | `#\34 420` |
| collection | D | `aria-required-children` | critical | wcag2a,wcag131 | 1 | `div[role="list"]` |
| collection | D | `heading-order` | moderate | — | 2 | `.collection > .mb-20.text-grey` |
| collection | D | `label` | critical | wcag2a,wcag412 | 1 | `.bg-transparent` |
| collection | D | `landmark-unique` | moderate | — | 1 | `.site-header__split > .site-nav` |
| collection | D | `link-name` | serious | wcag2a,wcag244 | 2 | `.overflow-hidden.relative > a` |
| collection | D | `region` | moderate | — | 28 | `.bg-blue-light` |
| collection | D | `tabindex` | serious | — | 2 | `.skipto` |

### Images missing alt attribute

*(none found on audited pages)*

### Heading structure issues

| Page | H1 count | Skipped levels (first 3) |
|---|---|---|
| home | 1 | H1→H3, H3→H5, H2→H6 |
| about | 1 | H1→H3, H3→H6, H2→H5 |
| collection | 0 | H2→H6, H3→H6 |

### Form inputs: labels and autocomplete

| Page | Form | Field | Type | Labeled | autocomplete |
|---|---|---|---|---|---|
| home | `div#ur-frontend-form > form.user-registr` | username | text | yes | **missing** |
| home | `div#ur-frontend-form > form.user-registr` | password | password | yes | **missing** |
| home | `div#ur-frontend-form > form.user-registr` | rememberme | checkbox | yes | **missing** |

### Keyboard navigation (desktop, up to 110 tab stops per page)

| Page | Tab stops | Elements w/o visible focus | Keyboard trap |
|---|---|---|---|
| home | 109 | 4 | no |

Elements with no visible focus indicator on `home` (first 8):

- `input#username` — ""
- `input#password` — ""
- `input#username` — ""
- `input#password` — ""

### Carousels, autoplay, media

*(no carousels or videos detected)*

### Color contrast — undetermined pairs (text over images/gradients; manual check needed)

- `home`: `.mb-0` — Element's background color could not be determined because it partially overlaps other elements
- `home`: `h1` — Element's background color could not be determined due to a pseudo element
- `home`: `.mt-10.text-secondary` — Element's background color could not be determined due to a pseudo element
- `about`: `.mb-0` — Element's background color could not be determined because it partially overlaps other elements
- `about`: `.mb-10` — Element's background color could not be determined due to a pseudo element
- `about`: `h1` — Element's background color could not be determined due to a pseudo element
- `collection`: `.mb-0` — Element's background color could not be determined because it partially overlaps other elements
- `collection`: `h2` — Element's background color could not be determined because it's partially obscured by another elemen
- `collection`: `#card-11024 > .px-34.py-36.flex-col > .items-start.md\:flex > .mr-30.flex-1 > .m` — Element's background color could not be determined because it is overlapped by another element

### Landmarks, skip link, language

- Skip link: `Skip to Main Content` → `#main-content`
- `<html lang>`: `en-CA`
- Landmarks (home): main×1, nav×3, header×0, footer×1

## 3. Mobile usability (375x812 @3x)

| Page | Viewport meta | Horiz. scroll | Text <16px | Text <12px | Small tap targets (<24px) | Fixed/sticky elements |
|---|---|---|---|---|---|---|
| home | ok | no | 7 | 11 | 37 | main#main > header.site-header (23%); nav#mobile-nav (93%) |
| about | ok | no | 2 | 5 | 14 | main#main > header.site-header (23%); nav#mobile-nav (93%) |
| collection | ok | no | 2 | 5 | 23 | main#main > header.site-header (23%); nav#mobile-nav (93%) |

Text under 12px (home, first 5):

- 0px `button#slick-slide-control00` — "1"
- 0px `button#slick-slide-control01` — "2"
- 0px `button#slick-slide-control02` — "3"
- 0px `button#slick-slide-control03` — "4"
- 0px `button#slick-slide-control04` — "5"

Tap targets under 24×24 CSS px (home, first 8):

- 143×21px `div#notice-banner > div.container.md:flex > a.text-secondary.btn-plain` — "Contact Us"
- 20×15px `main#main > header.site-header > a.skipto` — "Skip to Main Content"
- 18×18px `nav#mobile-nav > ul.mobile-nav__social > li > a` — ""
- 18×18px `nav#mobile-nav > ul.mobile-nav__social > li > a` — ""
- 18×18px `nav#mobile-nav > ul.mobile-nav__social > li > a` — ""
- 18×18px `nav#mobile-nav > ul.mobile-nav__social > li > a` — ""
- 18×18px `nav#mobile-nav > ul.mobile-nav__social > li > a` — ""
- 50×16px `section.block.block--content > div.container.container--lg > div.text-` — "Visit Uncommon Schools Practices pa"

### Mobile navigation

- Enroll/Apply link visible somewhere on loaded homepage: False
- Menu toggle present: True; menu opened by standard click: False

Screenshots for every page at both viewports: `screenshots/hscurriculum.uncommonschools.org/`.

## 4. Cookies and tracking

Cookies after first load of homepage (no interaction, fresh profile): **65**. No cookie consent banner exists on this domain.

| Cookie | Domain | Expiry |
|---|---|---|
| `cf_clearance` | .uncommonschools.org | 2027-08-26 |
| `__cf_bm` | .hscurriculum.uncommonschools.org | 2026-08-26 |
| `_gcl_au` | .uncommonschools.org | 2026-11-24 |
| `__ps_r` | .uncommonschools.org | 2027-08-26 |
| `__ps_sr` | .uncommonschools.org | 2026-08-26 |
| `__ps_lu` | .uncommonschools.org | 2027-08-26 |
| `__ps_slu` | .uncommonschools.org | 2026-08-26 |
| `__ps_did` | .uncommonschools.org | 2027-08-26 |
| `__ps_fva` | .uncommonschools.org | 2027-08-26 |
| `_ttp` | .tiktok.com | 2027-09-20 |
| `sa-user-id` | qvdt3feo.com | 2027-08-26 |
| `sa-user-id` | .qvdt3feo.com | 2027-08-26 |
| `sa-user-id-v2` | qvdt3feo.com | 2027-08-26 |
| `sa-user-id-v2` | .qvdt3feo.com | 2027-08-26 |
| `li_sugr` | .linkedin.com | 2026-11-24 |
| `_ga_ZFR6PMBMGL` | .uncommonschools.org | 2027-09-30 |
| `_ga` | .uncommonschools.org | 2027-09-30 |
| `_ga_THEWKE0N3N` | .uncommonschools.org | 2027-09-30 |
| `sa-user-id` | hscurriculum.uncommonschools.org | 2027-08-26 |
| `sa-user-id-v2` | hscurriculum.uncommonschools.org | 2027-08-26 |
| `sa-user-id-v3` | hscurriculum.uncommonschools.org | 2027-08-26 |
| `lidc` | .linkedin.com | 2026-08-27 |
| `_fbp` | .uncommonschools.org | 2026-11-24 |
| `cu` | .ipredictive.com | 2027-08-26 |
| `UserMatchHistory` | .linkedin.com | 2026-09-25 |
| `AnalyticsSyncHistory` | .linkedin.com | 2026-09-25 |
| `bcookie` | .linkedin.com | 2027-08-26 |
| `_tt_enable_cookie` | .uncommonschools.org | 2027-09-20 |
| `_ttp` | .uncommonschools.org | 2027-09-20 |
| `_hjSessionUser_2540248` | .uncommonschools.org | 2027-08-26 |
| `_hjSession_2540248` | .uncommonschools.org | 2026-08-26 |
| `IDE` | .doubleclick.net | 2027-09-30 |
| `bscookie` | .www.linkedin.com | 2027-08-26 |
| `barometric[cuid]` | .trkn.us | 2027-08-26 |
| `TDID` | .adsrvr.org | 2027-08-26 |
| `A3` | .yahoo.com | 2027-08-27 |
| `XANDR_PANID` | .adnxs.com | 2026-11-24 |
| `uuid2` | .adnxs.com | 2026-11-24 |
| `wfivefivec` | .w55c.net | 2027-09-26 |
| `matchgoogle` | .w55c.net | 2026-09-25 |

Server-set cookies (Set-Cookie headers, first load):

- from `https://hscurriculum.uncommonschools.org/`: `__cf_bm=1OvZSL1zHLvevoPrBu9CvHUeoSuZQ6aFzh22yMxt_68-1787778261.5528786-1.0.1.1-MToVJo07C1MOUqxuB9cGf4HBqyRz8Sv`
- from `https://hscurriculum.uncommonschools.org/cdn-cgi/challenge-platform/sc`: `__cf_bm=StEYeHacaSshfxw4wln81WCBKisNRU70L6X_bXfS9V4-1787778261.8834858-1.0.1.1-J20Rv9.kYRn_FIh7FtF0lfGZyRqTAIQ`
- from `https://hscurriculum.uncommonschools.org/cdn-cgi/challenge-platform/h/`: `__cf_bm=_Px7oWBHY9iUFcBQxfX5RienjHlegSvqRVJ4rHELYrE-1787778261.8981686-1.0.1.1-TgE0rzdkuT2sFv8fdqWFFchYE12C_5N`
- from `https://hscurriculum.uncommonschools.org/cdn-cgi/challenge-platform/h/`: `cf_clearance=SKd8OgPTOvoQsWigCPC9iD_oPlsVZbpYAzZIKGJG2b8-1787778262-1.2.1.1-jZGnxVIxGyPpZwgpmRuP43IHBJ9sn7sFgq`
- from `https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=COK0P4RC77U7P5`: `_ttp=3ITAcGS6BYacJ1WBAcg5jQQSm54; Path=/; Domain=tiktok.com; Max-Age=33696000; Secure; SameSite=None`
- from `https://qvdt3feo.com/events.js`: `sa-user-id=s%3A0-a714a57e-2cc2-569a-4ad1-a1d6b3cc9b78.JWOTZ%2BJ%2BG%2FkV%2BBCtVrYHWgnNtRkfwYqGFEZ7rWWoOZU; Max`
- from `https://px.ads.linkedin.com/collect?v=2&fmt=js&pid=3267546&time=178777`: `li_sugr=8ed73a04-54e0-42cf-b27e-9f28d4c2ea3f; Max-Age=7776000; Expires=Tue, 24 Nov 2026 21:04:22 GMT; SameSite`
- from `https://googleads.g.doubleclick.net/pagead/viewthroughconversion/81844`: `test_cookie=CheckForPermission; expires=Wed, 26-Aug-2026 21:19:22 GMT; path=/; domain=.doubleclick.net; Secure`

Tag containers detected (`window.google_tag_manager`): `GTM-K6VDVNK`, `AW-818447639`, `DC-12169991`, `DC-16036914`, `G-ZFR6PMBMGL`, `AW-994690573`, `AW-844857988`

Analytics/ad requests on page load:

- `https://www.googletagmanager.com/gtm.js?id=GTM-K6VDVNK`
- `https://www.googletagmanager.com/gtag/js?id=AW-818447639&cx=c&gtm=4e68p0`
- `https://www.googletagmanager.com/gtag/js?id=DC-12169991&cx=c&gtm=4e68p0`
- `https://www.googletagmanager.com/gtag/js?id=AW-994690573&cx=c&gtm=4e68p0`
- `https://www.googletagmanager.com/gtag/js?id=DC-16036914&cx=c&gtm=4e68p0`
- `https://www.googletagmanager.com/gtag/js?id=G-ZFR6PMBMGL&cx=c&gtm=4e68p0`
- `https://snap.licdn.com/li.lms-analytics/insight.min.js`
- `https://connect.facebook.net/en_US/fbevents.js`
- `https://static.hotjar.com/c/hotjar-2540248.js?sv=7`
- `https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=COK0P4RC77U7P5ED42H0&lib=ttq`
- `https://www.google.com/ccm/collect?rcb=18&frm=0&apvc=1&ae=g&auid=1675996493.1787778263&dt=AP-Aligned%20Resources%20for%20Educators%20-Uncommon%20Curri`
- `https://ad.doubleclick.net/ccm/s/collect?auid=1675996493.1787778263&gtm=45He68p0v76992538za200zd76992538xea&fmt=8`
- `https://snap.licdn.com/li.lms-analytics/insight.old.min.js`
- `https://connect.facebook.net/signals/config/3108057466086159?v=2.9.385&r=stable&domain=hscurriculum.uncommonschools.org&im=1&hme=1a72ec78e057d90ba48af`
- `https://px.ads.linkedin.com/attribution_trigger?pid=3267546&time=1787778262639&url=https%3A%2F%2Fhscurriculum.uncommonschools.org%2F`

## 5. Integration traces (clicks followed, no forms submitted)

## 6. Per-page content metrics (rendered DOM, desktop)

| Page | Words | Title | Meta desc | Canonical | hreflang | JSON-LD types | OG tags | Links in/ext | Imgs |
|---|---|---|---|---|---|---|---|---|---|
| home | 374 | AP-Aligned Resources for Educators -Uncommon  | yes | yes | 0 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 6 | 34/17 | 5 (4png,1other) |
| about | 289 | About - Uncommon Curriculum Hub | yes | yes | 0 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 6 | 21/16 | 5 (4png,1other) |
| collection | 663 | 1.01: Function Notation - Uncommon Curriculum | **MISSING** | yes | 0 | BreadcrumbList, ListItem, ReadAction, SearchAction, WebPage, | 5 | 40/20 | 5 (4png,1other) |

## 7. Site-wide

- robots.txt, llms.txt, sitemap files saved verbatim in `raw/` (prefix `hscurriculum.uncommonschools.org_`).
- Site search: present
- Primary nav: Resources, How it Works, About, Contact Us
