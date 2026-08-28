## 0. About This Audit

### How this audit was produced

**Sources.** Three March 2026 audits (dev, writer, creative; 30 files), the writer v2 revision of July 16, 2026, and a browser audit run August 26, 2026 across all seven domains (~63 pages, mobile and desktop, Lighthouse, axe-core, Playwright click traces, cookie capture, sitemap and robots/llms.txt capture). Every one of the 75 factual claims in the March audits was re-verified against the live site; results are in Section 17.

**How to read it.** Every finding is current as of August 26, 2026. Where the March audit said something different, the old value is noted so Spinutech can see what moved. Tags: **OPEN ITEM** for the items only Uncommon can answer; **PENDING: WP admin** for items that need CMS access. Opinion-level content (page quality ratings, design direction, strategy) is carried from the source audits unchanged and marked as such.

**The single biggest change since March.** The six network domains (main + five regionals) now run as one WordPress multisite on nginx at 134.209.175.171 (a DigitalOcean range), not five separate WP Engine installs behind Cloudflare. The regionals use a new `uncommon-region-theme`; the main domain kept `uncommon-theme`. Navigation, Enroll placement, the Alumni page, Spanish, and the video hero were all changed in the same window. The Curriculum Hub is still a separate install on WP Engine + Cloudflare. OPEN ITEM who performed this migration and when; nothing in the project record describes it.

---

## 1. Site at a Glance

### 1.1 Domain inventory

| Domain | Region / purpose | Multisite ID | Theme | Enrollment platform (click-traced) | Careers | Notes |
|---|---|---|---|---|---|---|
| uncommonschools.org | Network flagship | primary | uncommon-theme | Routes to regionals via header region chooser | `/careers/jobs/` (SmartRecruiters via same-origin REST proxy, 101 jobs) | Site search present |
| nyc.uncommonschools.org | New York City (Brooklyn, 23 schools) | 7 | uncommon-region-theme | uncommonbrooklyn.schoolmint.net (SchoolMint) | careers.smartrecruiters.com/UncommonSchools | |
| roxburyprep.uncommonschools.org | Boston (Roxbury Prep, 3 schools) | 5 | uncommon-region-theme | bostoncharterschools.schoolmint.net (SchoolMint); apply links carry hardcoded stale `_ga` parameters from 2019–2024 | Links to own /careers/ page, not SmartRecruiters | |
| northstar.uncommonschools.org | Newark (North Star Academy, 15 campuses) | 2 | uncommon-region-theme | newarkcommonapp.org; one CTA uses `http://www.` | careers.smartrecruiters.com/UncommonSchools/northstar-web | Best-performing regional |
| camdenprep.uncommonschools.org | Camden (Camden Prep, 4 schools) | 6 | uncommon-region-theme | Two different portals linked: onecamden.org and camdenenrollment.org | careers.smartrecruiters.com/UncommonSchools/camdenprep-web | No GA4 fires at all; only site emitting Organization schema |
| rochesterprep.uncommonschools.org | Rochester (Rochester Prep, 7 schools) | 8 | uncommon-region-theme | goodschoolsroc.org/applynow; two of three CTAs use `http://` | careers.smartrecruiters.com/UncommonSchools/rochesterprep-web | |
| hscurriculum.uncommonschools.org | HS Curriculum Hub (educator product) | separate install, WP Engine + Cloudflare | uncommon-hub | n/a | n/a | `lang="en-CA"`; 65 cookies on load; GTM only survives here |

Multisite IDs 3 and 4 are unaccounted for (deleted or non-public network sites). OPEN ITEM with SiteCare.

**Other domains discovered**

| Domain | Status | What it is |
|---|---|---|
| store.uncommonschools.org | 200 | Third-party merch store on IIS/ASP.NET; footer "Shop" link |
| jobs.uncommonschools.org | 200 | CNAME to enterprise.jobiak.ai (third-party job-ad distribution) |
| blog.uncommonschools.org | Dead; connection fails | Stale A record 63.210.44.2 still published in DNS |
| www.uncommonschools.org | 301 to apex | |
| uncommonkbase.zendesk.com | Linked from /faq/ | Zendesk knowledge base |

These, plus multisite IDs 3–4, account for the "9 domains" figure in the external brief. **Avela was not found anywhere on the network. Lever is no longer referenced. Salesforce was not detected on any of 126 page loads.** OPEN ITEM whether Avela and Salesforce are used off-site (e.g., inside SchoolMint or by the enrollment team) and therefore still count as integrations for the new build.

### 1.2 URL inventory (from live sitemaps, August 26)

The March figures (3,843 URLs; 602 or 795 pages) are superseded. The main domain alone now lists 5,516 URLs; the network total is roughly 6,767.

**Main domain, by sitemap**

| Content type | URLs |
|---|---|
| Pages | 623 |
| Posts (news) | 1,848 |
| People profiles | 805 |
| School profiles | 399 (57 English-language schools × language variants) |
| Social | 987 |
| Impact blog | 259 |
| Books | 63 |
| Taxonomy: category 63, impact-blog-tag 301, impact-blog-category 63, region 35, level 28, role 21, author 21 | 532 |
| **Main domain total** | **5,516** |

**Regionals:** nyc 96, roxburyprep 53, northstar 57, camdenprep 48, rochesterprep 45 (each has a page-sitemap only).
**Curriculum Hub:** 952 (7 sub-sitemaps).

The March "602 vs 795 pages" discrepancy resolves as 623 pages plus taxonomy sitemaps counted separately. All sitemap XML is saved verbatim in the repo under `01-audit/browser/raw/`.

**Migration implication:** every one of these ~6,767 URLs needs a redirect decision (keep, consolidate, or discard). Zero SEO regression is a hard requirement. The 987 "social" URLs and 532 taxonomy URLs are the first candidates for discard.

### 1.3 Traffic and conversion baseline (from external brief and ET deck; no audit captured a baseline)

| Metric | Value |
|---|---|
| Monthly visitors | 141,000+ average |
| New users, last 6 months | ~1,000,000 |
| Conversion rate | ~2% |
| Share of conversions on mobile | 76% |
| Share of traffic on mobile | 60% |
| Highest-converting channel | Paid social, 17.1% of conversion volume |
| Largest organic driver | Branded NYC terms, 20% of active users |
| Primary KPI | Click to apply (enrollment, job application) |
| Secondary KPIs | Time on site, lead form fills, pages visited |
| Redesign target | +20% conversion rate in year one |

PENDING: GA4 access for the fuller baseline in Section 11.4. Note that with per-region GA4 properties (Section 6.1) and no GA4 on Camden, the network-level numbers above may be undercounting.

### 1.4 Cost and operating context (ET deck)

- Last refreshed 8+ years ago at $120,000+ (BriteWeb)
- Annual cost $48,472: WP Engine hosting $5,400; SiteCare custom maintenance $23,400; SiteCare Plus for Curriculum Hub $2,990; plugins (TranslatePress, Gravity Forms, Thrive Themes, User Registration, handl UTM Grabber) $1,742; development retainer $300/mo; ADA flex pack $945/mo. OPEN ITEM how the hosting line changed with the DigitalOcean migration.
- April 16, 2026 outage: ~7 hours of disruption to enrollment, recruitment, and donor access
- Office of Civil Rights citations for WCAG violations
- ET-approved interim fixes: dedicated server upgrade, remaining Critical/Very High compliance fixes, repair broken conversion paths, SEO/AEO and speed improvements

---

## 2. Technical Audit: Infrastructure and Performance

### 2.1 Hosting and infrastructure (current)

| Item | March audit | August 26 live |
|---|---|---|
| Platform | WP Engine + Cloudflare | Six domains: nginx at 134.209.175.171 with fastcgi-cache and an `x-edge-cache: cache,platform=wordpress` header; no Cloudflare. Hub: WP Engine + Cloudflare unchanged. |
| Architecture | 5 separate installs | One WordPress multisite (uploads under `wp-content/uploads/sites/N/`), plus the separate Hub install |
| Themes | uncommon-theme (Sage) | Main: uncommon-theme. Regionals: uncommon-region-theme. Hub: uncommon-hub. All require a build step; template changes need a developer. |
| HSTS | Enforced | Confirmed on all 7 domains (`max-age=31536000; includeSubDomains`) |
| HTTP/2 | Yes | Confirmed on all 7 |
| Cache-control on HTML | 600s | None sent at all on the six network domains; the nginx `fastcgi-cache: HIT/MISS` header is the only caching signal. Hub still sends `max-age=600, must-revalidate`. |
| CDN | Cloudflare, bypassed on every request | No CDN in front of the six network domains. All traffic hits the origin directly. |
| Custom post types | people, schools, impact-blog, books, regions, roles, levels | Same CPTs exist (visible in sitemaps) but are now hidden from the REST API; `/wp-json/wp/v2/types` returns only core and Thrive types |
| `vary` header duplication | 4x | Fixed: one per response |

**What's working:** HSTS, HTTP/2, canonical tags, a well-structured main-domain sitemap index (14 sub-sitemaps), and a mature plugin stack editors know.

### 2.2 The CDN and cookie problem, restated

The March audit's headline finding was "Cloudflare caches nothing because handl UTM Grabber sets cookies on every request." That specific mechanism is gone because Cloudflare is gone. The underlying condition is worse:

- The six network domains now have **no CDN at all**. 141,000 monthly visitors, 76% of them on phones, load every asset from a single origin.
- handl UTM Grabber (v7.0.4) now sets **13 first-party attribution cookies** on first load (up from 9): handlID, handl_url_base, handl_url, handl_ref, handl_ref_domain, handl_landing_page, handl_landing_page_base, handl_original_ref, organic_source, organic_source_str, traffic_source, first_traffic_source, user_agent. The server additionally sets `handl_ip`, a cookie **containing the visitor's IP address**. Camden also sets `HandLtestDomainNameServer` with `domain=.org`, an invalid public-suffix attribute.
- Any future CDN will hit the same bypass problem unless UTM capture moves off cookies.

**Requirement for the new build:** cookie-independent edge caching (GTM or first-party script with localStorage for UTM persistence), a CDN in front of the origin, and correct `cache-control` headers on HTML.

### 2.3 Origin response time (TTFB, median of 3, unthrottled)

| Page | March | August 26 |
|---|---|---|
| uncommonschools.org | 186ms | 39ms (cache hit) |
| /enroll/ | 247ms | 526ms (cache miss) |
| /careers/ | 189ms | 40ms |
| /donate/ | 121ms | 539ms |
| nyc | 283ms | 493ms |
| roxburyprep | not measured | 621ms |
| northstar | 216ms | 567ms |
| camdenprep | **1,418ms** | 571ms (the outlier is gone) |
| rochesterprep | 198ms | 562ms |
| hscurriculum | not measured | 54ms |

Pattern: nginx fastcgi-cache hits return in ~40ms; misses take 500–620ms. Which pages are cached is inconsistent (the homepage hits, the enroll page misses). Under Lighthouse's simulated 4G, TTFB on regional pages ranged 400ms–1.8s.

### 2.4 Lighthouse scores (homepage, median of 3)

Mobile = 375x812 @3x, simulated 4G. Desktop = 1440x900. Raw JSON per page and viewport in `01-audit/browser/lighthouse/`.

| Domain | Perf mobile | Perf desktop | A11y mobile | TBT mobile | CLS mobile | Page weight |
|---|---|---|---|---|---|---|
| uncommonschools.org | **55** | 65 | 98 | 282ms | 0.115 | 17.1MB |
| nyc | **60** | 71 | 93 | 140ms | 0.123 | 4.1MB |
| roxburyprep (Boston) | **49** | 69 | 94 | 195ms | 0.299 | 6.8MB |
| northstar (Newark) | **68** | 91 | 93 | 188ms | 0.063 | 9.0MB |
| camdenprep | **59** | 80 | 93 | 222ms | 0.123 | 3.2MB |
| rochesterprep | **62** | 75 | 93 | 212ms | 0.108 | 2.8MB |
| hscurriculum | **45** | 93 | 86 | 1.3s | 0.032 | 2.6MB |

**A note on LCP.** Pages with the auto-rotating hero carousel report absurd LCP values (79s on the main homepage, 310s on Boston's enroll page) because each slide rotation paints a new, larger LCP candidate for as long as the carousel runs. The real first hero paint is ~0.8–4s. Read FCP, Speed Index, and TBT as the load metrics on carousel pages, and treat the carousel itself as the defect (no pause control, Section 5).

**Ten worst pages by mobile performance**

| Score | Page |
|---|---|
| 24 | hscurriculum `/collection/1-01-function-notation/` (CLS 0.835, TBT 2.0s) |
| 37 | camdenprep `/news/` (CLS 1.040) |
| 37 | nyc `/news/` (CLS 1.124) |
| 39 | roxburyprep `/news/` (CLS 0.859) |
| 41 | roxburyprep `/es/` |
| 41 | rochesterprep `/news/` (CLS 0.594) |
| 45 | hscurriculum home |
| 46 | hscurriculum `/about/` |
| 47 | rochesterprep `/es/` |
| 47 | roxburyprep `/enroll/` (60MB) |

Every regional `/news/` page has catastrophic layout shift (CLS 0.59–1.12; the passing threshold is 0.1).

### 2.5 Page weight and payload

**Real transfer on first mobile load, unthrottled (Playwright):**

| Page | Total | JS | Images |
|---|---|---|---|
| uncommonschools.org `/results/` | **87.1MB** | 1.6MB | 85.4MB |
| roxburyprep `/enroll/` | **60.3MB** | 2.0MB | 57.9MB |
| northstar `/news/` | **52.5MB** | 1.5MB | 50.8MB |
| northstar `/enroll/` | 37.8MB | 1.5MB | 36.2MB |
| uncommonschools.org `/careers/` | 21.2MB | 1.6MB | 19.5MB |
| camdenprep `/enroll/` | 20.9MB | 1.4MB | 19.4MB |
| uncommonschools.org home | 17.1MB | 1.6MB | 15.4MB |
| uncommonschools.org `/about-us/` | 9.9MB | 1.6MB | 8.1MB |
| northstar home | 9.0MB | 1.5MB | 7.4MB |
| Typical regional page | 2.5–6MB | 2.0MB | 0.2–3MB |

Images are the problem. Three of the five regional enroll pages, the highest-value pages on the network, are 20–60MB. The main Results page is 87MB. A family on a phone with a data cap cannot reasonably load them.

**JavaScript:** ~1.5–2.0MB on every page of every network domain, ~0.9–1.0MB of it unused per Lighthouse. Sources: Thrive Leads v10.9.3.2 and Thrive Dashboard (present on 60 of 60 network pages tested, including pages with no forms), jQuery + jQuery Migrate sitewide, and on NYC additionally jQuery UI autocomplete/menu and Masonry. Gravity Forms v2.10.5 and FundraiseUp checkout JS also load on every page, not just pages with a form or the donate page.

**HTML payload:** homepage 117,810 bytes; /careers/ 119,413; /donate/ 121,799 (March: 118/122/119KB; confirmed). Target for a marketing page is 30–60KB.

### 2.6 Images

- **0 WebP images** among 748 `<img>` elements across all 63 audited pages: 595 PNG, 45 JPG, 105 SVG, 3 other. Heavy use of PNG for photographic content explains the payloads above.
- **0 `<picture>` elements** anywhere; no responsive image sets.
- `loading="lazy"` is now present on 95 images (WordPress core default), an improvement since March.
- Homepage: 3 award-badge SVGs missing alt text (Broad-Prize-Winner.svg, 99-Accepted-1.svg, National-Recognition-1.svg) and the same three plus the footer logo missing width/height.
- Regional enroll pages: 6–8 icon images each missing alt text (noun-project icons: checkmark, clipboard, backpack, home-education, etc.). Same icon set repeated on nyc, roxburyprep, northstar, rochesterprep.
- Creative audit judgment (unchanged): photography is the site's strongest asset but is compressed and underperforming at display size; regional sites use different libraries with inconsistent treatment.

---

## 3. Technical Audit: SEO

### 3.1 SEO plugin state

| Domain | March | August 26 |
|---|---|---|
| Main | Yoast v27.2 | Yoast v28.3 |
| nyc, roxburyprep, northstar, rochesterprep | AIOSEO v4.9.5.1 | Yoast v28.3 (generator comments and Yoast sitemaps) |
| camdenprep | AIOSEO v4.9.5.1 | Sitemap still generated by **All in One SEO v5.0.0.1** |
| Network llms.txt | AIOSEO | Still generated by AIOSEO v5.0.0.1 on every domain |

Both plugins are active in parts of the network. The consolidation onto Yoast is mostly done but Camden and the llms.txt generator were missed. Standardize on one system in the new build.

### 3.2 What's working
- Main sitemap index with 14 sub-sitemaps; canonical tags on every audited page; 12 hreflang entries on the main homepage (en-US, ar, zh-CN, fr-FR, pt-BR, es-MX, ht, en, zh, fr, pt, es); HSTS; HTTP/2.
- `/results/` title entity bug is fixed (now renders a proper apostrophe).
- `Crawl-delay: 10` is gone from the six network domains (still present on the Hub).

### 3.3 Titles and meta descriptions

Meta descriptions are missing on nearly every page audited:

| Domain | Pages audited | Missing meta description |
|---|---|---|
| uncommonschools.org | 13 | 9 (all except home, donate, es-home, results) |
| nyc | 9 | 9 |
| roxburyprep | 10 | 10 |
| northstar | 9 | 8 (enroll has one) |
| camdenprep | 10 | 10 |
| rochesterprep | 9 | 9 |
| hscurriculum | 3 | 1 |

Title issues: the homepage title is still "Homepage - Uncommon Schools" and every regional follows the same pattern ("Homepage - Uncommon Schools Newark"). Rochester's enroll page is titled "Enroll Page New - Uncommon Schools Rochester." The main homepage still has 3 H1s, all inside the hero carousel ("Seniors Receive Full-Tuition Scholarships!", "Uncommon's A.I. Literacy Class On The New York Times Front Page…", "Enroll with Us!"). Camden's home, school, and es-home pages have 3 H1s; its careers, news, and contact pages have 2. Main /enroll/, /careers/, /careers/jobs/, /faq/, /results/, and /about-us/ have **zero** H1s.

### 3.4 robots.txt

- All six network domains: a custom `User-agent: *` block (disallowing gravityexport paths and /wp-admin/) followed by Yoast's own `User-agent: * / Disallow:` block. Two blocks for the same agent; crawler behavior at the conflict is unpredictable.
- **Camden's robots.txt begins `1User-agent: *`**: a stray "1" corrupts the first directive.
- No directives for GPTBot, ClaudeBot, PerplexityBot on any domain. OPEN ITEM Uncommon's AI-crawler policy.
- Hub: `Crawl-delay: 10` still present.
- All seven files saved verbatim in `01-audit/browser/raw/`.

### 3.5 Translation

- 6 translation languages via TranslatePress-multilingual v3.3.3 (March: v3.1.2): Arabic, Chinese, French, Portuguese, Spanish, Haitian Creole, plus English source. Machine translation via translate.googleapis.com was observed at runtime.
- **Spanish is partially fixed.** In March `/es/` served English under `es-MX`. Now `/es/` serves mostly Spanish on all six domains, but: page titles stay English ("Homepage - Uncommon Schools"); English blocks remain mid-page (main `/es/` hero still reads "Seniors Receive Full-Tuition Scholarships! Over the last three years, 74 Uncommon seniors…"; Boston's `/es/` body reverts to English after the first sentence); and the brand name is machine-translated as **"Escuelas no comunes"** on roxburyprep and rochesterprep. 200-word samples are in the per-domain reports.
- The `/es/` homepages are also among the slowest pages on the network (Boston 41, Rochester 47 mobile).
- Requirement for the new build: one content node with language variants; a native-speaker review of Spanish enroll, FAQ, and homepage content; brand name excluded from machine translation.

### 3.6 Structured data

JSON-LD on home, about, results, FAQ, and school pages across the network: WebPage, WebSite, BreadcrumbList, SearchAction, ReadAction only (Yoast auto-output). Two exceptions: news posts now emit Article + Person + ImageObject (Yoast auto), and **Camden alone emits an Organization node on every page**. Still absent everywhere: EducationalOrganization, FAQPage (the /faq/ page has 611 words of Q&A and no schema), Speakable, Event, LocalBusiness per school. The Curriculum Hub has 0 hreflang and the same minimal schema.

### 3.7 Campaign landing pages: 58 indexed, network-wide

The March writer audit found campaign landing pages in Camden's llms.txt. The browser audit found **58 paid-media landing pages in public sitemaps across the five regionals**: nyc 10, roxburyprep 12, northstar 12, camdenprep 12 (plus `/start-your-application-for-school-year-2026-2027/`), rochesterprep 12. Patterns span the 24-25, 25-26, and 26-27 school years with channel suffixes: organic, etarget, google-search, meta-rollover, demgen, dooh, great-schools, pmax, prog. Each carries a Gravity Forms interest form (with a reCAPTCHA textarea that is unlabeled) and, on nyc, northstar, and camdenprep, two `color-contrast` failures on links with a malformed `target="”_blank”"` attribute (curly quotes in the HTML).

These are live campaign assets, not junk. They should stay live for the media buys that point to them, but they must be `noindex`, excluded from sitemaps and llms.txt, and the 24-25 and 25-26 variants retired once their campaigns end. Full URL list per domain in the browser reports.

### 3.8 Site search

Main domain now has header search (`button.site-search__toggle`), and the Hub has search. The five regionals still have none. There is no on-site search-terms data for the regionals.

### 3.9 Other crawl defects

- `/uncommon-sense-blog/` still 404s (no redirect); the blog lives at `/uncommon-sense/`.
- `/alumni-impact/` still 404s but is no longer linked; the nav now points to `/uncommon-alumni/` which 301s to `/alumni/` (200). Fixed since March.
- `/regions/nyc/`, `/boston/`, `/newark/`, `/camden/`, `/rochester/` are still raw taxonomy archives (`body.archive.tax-region`) listing school posts with dates and author bylines ("By briteweb", "By gina", "By brandi"), no enrollment content.
- Camden `/test/` is still live (200), in the sitemap, in llms.txt, 16 words.
- Main `/enroll/` links to Boston, Camden, Newark, and Rochester enroll pages via `http://`, forcing a redirect on the primary conversion path. Regional footers do the same.

---

## 4. Technical Audit: AI Readiness

### 4.1 llms.txt: still broken network-wide

All six network domains serve a **byte-identical** llms.txt (md5 `0855263b63b72cdf82624c70c3b4542f`) titled "# Uncommon Schools Camden," with all 48 links pointing to camdenprep, including the 12 Camden campaign landing pages and `/test/`. It also leaks raw GiveWP shortcodes (`[give_donor_dashboard]`, `[give_receipt]`) as page descriptions. Generated by AIOSEO v5.0.0.1. The Hub returns 404 for `/llms.txt`.

The main domain's About, Results, Careers, Donate, Uncommon Sense, and Sharing Our Practices content is invisible to structured AI indexing, and every regional presents itself to AI crawlers as Camden.

### 4.2 Key stats invisible to machines
96% college acceptance; 4x national average graduation rate; CREDO 2023 "greatest academic gains of any large charter network in the country"; 20,000+ students, 57 schools, 30 years. All exist only as prose, mostly on /results/ and /about-us/, neither of which has an H1.

### 4.3 Target state for the new build
Per-domain llms.txt with accurate organizational context; Organization + EducationalOrganization on all pages; LocalBusiness per school; Article on all posts; FAQPage on all Q&A content; key stats as structured data; explicit AI-bot policy in robots.txt.

---

## 5. Technical Audit: Accessibility

### 5.1 Compliance context
Title II of the ADA applies to charter schools; WCAG 2.2 AA is the floor. The kickoff agreed to aim for AAA with trade-offs handled case by case. The site has been cited by the Office of Civil Rights. Courtney sent the SiteCare/OCR accessibility spreadsheet ("USI Accessibility Audit.xlsx") to Spinutech. OPEN ITEM whether it goes in this deck as an appendix.

### 5.2 Automated results (axe-core, mobile, summed across audited pages)

| Domain | Critical | Serious | Moderate | Minor | Top rules |
|---|---|---|---|---|---|
| uncommonschools.org | 0 | 2 | 48 | 0 | heading-order 26, region 13, page-has-heading-one 6 |
| nyc | 11 | 4 | 66 | 4 | region 49, heading-order 15, button-name 10 |
| roxburyprep | 10 | 2 | 54 | 1 | region 30, heading-order 24, button-name 10 |
| northstar | 9 | 4 | 52 | 0 | region 30, heading-order 19, button-name 9 |
| camdenprep | 10 | 2 | 63 | 0 | region 40, heading-order 19, button-name 10 |
| rochesterprep | 11 | 7 | 41 | 9 | region 27, heading-order 14, button-name 10 |
| hscurriculum | 4 | 7 | 43 | 3 | region 31, heading-order 10, aria-allowed-role 3 |

Every violation with selector, WCAG criterion, and count is in the per-domain reports.

### 5.3 The findings that matter most

**1. Full-viewport entry popup on all five regionals (WCAG 2.1.2 No Keyboard Trap, 2.4.3 Focus Order).** A Thrive Leads lightbox covers the viewport on load ("Seats Still Available for School Year 2026-27! Apply in Minutes" on NYC; "Last Chance to Apply for Fall 2026!" on Boston; "School Year 2026-27 Applications Open!" on Newark; "Seats Still Available! Apply for 2026-27 School Year!" on Camden; "Still Accepting Applications!" on Rochester). It cannot be dismissed with Escape, its dismiss link is unreachable by Tab within 15 stops, and its overlay intercepts taps on the mobile menu button while open. On the main domain the same overlay blocks the menu button. A keyboard or screen-reader user cannot get past the first screen of any regional site.

**2. Unnamed buttons (axe `button-name`, critical, WCAG 4.1.2).** The mobile menu toggle `button.site-header__toggle` has no accessible name on every regional page. Carousel prev/next controls repeat the failure. ~49 critical nodes across the network. Hub: the login toggle and a collection-page `.rotate-180` button.

**3. Keyboard traps in accordion components (WCAG 2.1.2).** Focus cycles inside `button.accordion__toggle` on roxburyprep `/new-family-faq/` (stop 24), northstar `/enroll/` (stop 42), camdenprep `/enroll/` (stop 38). Camden's homepage traps focus in an embedded iframe at stop 24.

**4. Carousels with no pause control (WCAG 2.2.2).** Main homepage hero and content carousel, results card carousels (8 instances), about carousel, why-uncommon carousel; every regional school page carousel; Boston and Rochester enroll video carousels. None has a pause, stop, or hide control. The March finding of a video hero with autoplaying audio is gone; there is no `<video>` element on any homepage now.

**5. Focus visibility (WCAG 2.4.7).** The enrollment "journey map" tabs (Apply, Visit, Accept Offer, Register, Orientation, First Day) have no visible focus indicator on nyc, roxburyprep, northstar, rochesterprep enroll pages (16–25 unfocusable stops each). Boston homepage carousel prev/next buttons (6). Hub login inputs.

**6. Contrast (WCAG 1.4.3).** Confirmed failures: Rochester `span[data-css="tve-u-19c9057ea79"]` on home, enroll, news, es-home; campaign landing page links on nyc, northstar, camdenprep. Undetermined (text over images or pseudo-element backgrounds; needs manual check): hero H1 and subhead on every regional home, enroll, and school page; feature H3/P blocks on careers and donate pages network-wide; homepage carousel dots on main.

**7. Headings.** Main domain: 3 H1s on home, 0 on six key pages, skipped levels everywhere (H1→H6, H3→H5). Regionals: 0 H1s on careers, donate, news, contact, campaign pages; Camden 2–3 H1s on most pages. Rochester: an empty `<h3>` from Thrive on every page.

**8. Forms.** Every form field on every domain is missing `autocomplete`. Unlabeled: the footer ZIP field ("Zip code…") on every main-domain page; reCAPTCHA textarea on every campaign landing page; a `label-title-only` field on northstar and rochesterprep campaign forms; Hub collection page has an unlabeled input (axe `label`, critical).

**9. Tap targets (WCAG 2.5.8, 24×24 CSS px).** Main homepage: 37 undersized targets including the skip link (20×15), search controls, and four 16×16 social icons. Regionals 10–25 per page: skip link, all primary nav items at 46–83×20px, carousel dots at 16×16. Hub homepage: 37.

**10. Text size.** Every regional footer copyright at 11.2px; news pages have 9–10 sub-12px date labels each; NYC enroll page has 26 sub-16px text runs, Boston enroll 40, Newark enroll 21. Hub carousel dots render at 0px.

**11. Other.** Hub `lang="en-CA"` (should be en-US); Hub `.skipto` has a positive tabindex; Hub collection page has `aria-required-children` (critical) and an unnamed PDF download link; main homepage `aria-hidden-focus` on hidden carousel slides; NYC and Rochester enroll pages have YouTube iframe ARIA violations (`aria-allowed-attr` critical, `aria-prohibited-attr` serious); Boston enroll has a malformed `<ul>` (axe `list`, serious).

### 5.4 What's in place
Skip link ("Skip to Main Content" → `#content`) on all network domains; `lang="en-US"`; landmarks main×1, nav×2–3, header×1, footer×1; accessibility-checker v1.48.0 + Pro v2.2.0 on all six network domains (Hub v1.47.0 only); labeled Gravity Forms fields on contact pages. Keyboard traversal of main-domain pages is clean (0 elements without focus, no traps on 6 pages tested).

### 5.5 Requirement
Accessibility QA as a discrete workstream in the build, not post-launch remediation. The new theme ships with one H1 per page, semantic heading order, named controls, no focus traps, pausable or non-rotating carousels, visible focus on every interactive element, labeled forms with autocomplete, 24px minimum targets, 16px minimum body text, and no entry interstitials that block keyboard users.

---

## 6. Technical Audit: Integrations

### 6.1 Analytics and tracking (verified by network capture)

| Integration | March | August 26 | Migration risk |
|---|---|---|---|
| GTM GTM-K6VDVNK | All sites | **Hub only**, alongside AW-818447639, AW-994690573, AW-844857988, DC-12169991, DC-16036914. The six network domains load gtag.js directly with no container. | LOW, but the tagging architecture must be rebuilt |
| GA4 G-1Z558Q2T6W | Primary | Main domain only | LOW |
| GA4 G-X5WHC48ND7 | "Purpose unknown" | **Not observed on any of 126 page loads.** Retired or never fired. | Remove from scope |
| Regional GA4 | n/a | nyc G-9LH50EMN1H; roxburyprep G-R8QJG3YSFS; northstar G-88J23DQ2FN; rochesterprep G-XTYEV5J8WV; Hub G-ZFR6PMBMGL. **camdenprep fires no GA4 at all.** | Camden gap must be fixed now |
| MonsterInsights Premium | v10.1.0 | v11.1.3; redundant wrapper on top of gtag | Remove |
| Hotjar | ID 1236109 on main | **None on the six network domains.** Hub loads Hotjar ID 2540248. | Kickoff was right that no heat mapping exists on the network sites |
| Facebook Pixel | Present | ID 1361730677310357 fires PageView on all 7 domains; Hub also fires pixel 3108057466086159 | LOW |
| handl UTM Grabber | v3, 9 cookies | v7.0.4, 13 cookies + `handl_ip` | Replace |
| Conversion tracking on Enroll click | not tested | 0 analytics requests fired on Enroll click on main, nyc, roxburyprep, northstar, camdenprep. Rochester fired 10 (including DoubleClick). | The primary KPI is not instrumented on five of six sites |

### 6.2 Forms and lead capture

| Integration | Version | Where it renders | Risk |
|---|---|---|---|
| Gravity Forms | v2.10.5 (March 2.9.29) | Newsletter gform_1 on every main-domain page; contact gform_2; every regional /contact/; every campaign landing page (gform_16/18/28/31/39 etc.). Assets load on every network page. | MEDIUM; PENDING: WP admin for form-by-form routing inventory |
| Thrive Leads | v10.9.3.2 (March 10.8.8) | Entry popups on all five regionals; loads on 60/60 network pages | MEDIUM; the popup pattern should not survive the rebuild |
| reCAPTCHA | on campaign forms | Unlabeled textarea | |

### 6.3 Enrollment (click-traced; March said "Avela, SchoolMint not detected")

| Region | Platform | Observed defects |
|---|---|---|
| NYC | uncommonbrooklyn.schoolmint.net (lands on /welcomeback) | |
| Boston | bostoncharterschools.schoolmint.net | Four of five apply links carry hardcoded `_ga=` parameters dating from 2019, 2020, and 2024 client IDs; cross-domain tracking is broken and pollutes SchoolMint analytics |
| Newark | newarkcommonapp.org | One CTA uses `http://www.` |
| Camden | onecamden.org **and** camdenenrollment.org, both linked as "Camden Enrollment" | Two portals for one region; OPEN ITEM which is current |
| Rochester | goodschoolsroc.org/applynow | Two of three CTAs use `http://` |
| Main /enroll/ | Region chooser → regional /enroll/ | Four of five links use `http://` |

Avela: not found. Salesforce: not found. Formstack quick-apply (kickoff): not found. OPEN ITEM status of all three.

### 6.4 Careers
SmartRecruiters confirmed. Main `/careers/jobs/` renders client-side from the site's own REST proxy `/wp-json/wp/v2/careers/jobs/` (101 jobs with SmartRecruiters numeric IDs); main.js references `smartrecruiters.com/web-sso/saml/UncommonSchools/login`. Regionals link to `careers.smartrecruiters.com/UncommonSchools/<region>-web`; Boston links to its own /careers/ page instead. Lever: no reference in current main.js, no runtime call. The jobs page has 5 heading-order violations and 16 sub-16px text runs on mobile. Risk: HIGH; the REST proxy and its caching must be rebuilt.

### 6.5 Donations
FundraiseUp widget AXGXSELV confirmed, and it now loads on **every page of every network domain**, not just /donate/ (adds three cookies and checkout JS sitewide). On /donate/ the giving section (Donate H3, $100–$5,000 tiles) renders above "Other Ways to Donate," so the March "form below the fold" finding is resolved. Regional donate pages are 77–112 words. Risk: LOW.

### 6.6 Other
Zendesk (uncommonkbase.zendesk.com) linked from /faq/. Vimeo on Camden (sets `vuid` and `__cf_bm`). Unbounce embed on NYC (`js.ubembed.com`). YouTube iframes on NYC and Rochester enroll. User Registration Pro on the Hub (gated downloads). Hub also loads LinkedIn Insight, TikTok pixel, StackAdapt (qvdt3feo.com), and Google Ads conversion tags.

### 6.7 Cookies and consent
No consent banner or CMP on any of the seven domains. Cookies set on first load with no interaction:

| Domain | Cookies | Notable |
|---|---|---|
| uncommonschools.org | 17 | 13 HandL, 3 FundraiseUp, `_fbp`; Facebook `fr` |
| nyc | 25 | + `_ga`, `_ga_9LH50EMN1H`, 3 Thrive, Unbounce `__cf_bm` |
| roxburyprep | 23 | |
| northstar | 22 | |
| camdenprep | 24 | + Vimeo `vuid`; invalid `domain=.org` cookie |
| rochesterprep | 22 | |
| hscurriculum | **65** | TikTok `_ttp`, LinkedIn (`li_sugr`, `bcookie`, `UserMatchHistory`…), StackAdapt `sa-user-id*`, DoubleClick `IDE`, Trade Desk `TDID`, Xandr, Yahoo, ipredictive, `_gcl_au`, Hotjar |

`handl_ip` stores the visitor's IP in a cookie. Given the OCR history and an audience of families in NY, NJ, and MA, this is the highest-risk tracking finding on the site. A consent management platform is a launch requirement, and the Hub's ad-tech stack needs a review of whether each tag is still wanted.

### 6.8 Migration risk summary

| Risk | Integrations |
|---|---|
| LOW | FundraiseUp, Facebook Pixel, GA4 (rebuild tagging), Zendesk |
| MEDIUM | Gravity Forms (form-by-form), Thrive Leads (retire), Yoast/AIOSEO (standardize), TranslatePress (QA per language) |
| HIGH | SmartRecruiters REST proxy; five external enrollment platforms with region-specific URLs and parameters; consent management (new) |
| REMOVE | handl UTM Grabber, MonsterInsights, G-X5WHC48ND7, stale `_ga` parameters, `http://` internal links |
| OPEN ITEM | Avela, Salesforce, Formstack, Camden's two portals, Hub ad tags |

---

## 7. Content Audit: Architecture

### 7.1 Dual regional architecture (still present)

The main domain's `/regions/*` taxonomy archives still exist alongside full regional subdomains. What changed: the main header now links every regional ("Enroll in Boston/Camden/Newark/NYC/Rochester") and the Curriculum Hub, so regionals are discoverable. What didn't: the `/regions/` pages remain raw archives with "By briteweb" bylines and no enrollment content, still reachable from "Our Schools."

| Region | URL | State | Action |
|---|---|---|---|
| NYC | /regions/nyc/ | tax-region archive | 301 to nyc.uncommonschools.org |
| Boston | /regions/boston/ | tax-region archive | 301 to roxburyprep.uncommonschools.org |
| Newark | /regions/newark/ | tax-region archive | 301 to northstar.uncommonschools.org |
| Camden | /regions/camden/ | tax-region archive | 301 to camdenprep.uncommonschools.org |
| Rochester | /regions/rochester/ | tax-region archive | 301 to rochesterprep.uncommonschools.org |

**Network vs regional content split (writer strategy, unchanged):** network domain owns mission, results, thought leadership, donor engagement, national media, careers; regionals own schools, enrollment, local news, regional identity, community; both share a design system, CMS, and cross-linking.

### 7.2 Main-domain school pages (worse than March)
57 English-language school URLs (399 with language variants), all `datePublished: 2018-02-21`. The March audit found 150–300 words. The template now renders **~18 words**: title, "February 21, 2018", the Find-a-School block, footer. Screenshot: `screenshots/uncommonschools.org/school-mobile.jpg`. The regional school pages, by contrast, are 670–836 words with hero, carousel, and campus detail. The main-domain versions are duplicate, empty, and outrank nothing; they should 301 to the regional page for the same school.

### 7.3 HS Curriculum Hub (unchanged findings, verified)
Separate install; `lang="en-CA"`; nav is Resources, How it Works, About, Contact Us with no link back to Uncommon Schools mission, careers, or giving; gated downloads via User Registration Pro; worst-performing pages on the network (collection page mobile score 24, CLS 0.835); 65 cookies. Strengths and recommendation from the writer audit stand: unique asset, keep as a subdomain, add brand continuity and a "Want to teach here?" path. Mary Ann's kickoff note: educators who train on or license Uncommon curriculum are an emerging, monetized audience; the Hub anchors it.

### 7.4 Uncommon Sense blog and content fragmentation (unchanged)
Lives at /uncommon-sense/; `/uncommon-sense-blog/` 404s; 100+ practitioner posts in essay format; no schema beyond Yoast Article; not linked to Sharing Our Practices, Books, or the Hub. Together these four assets would be a category-defining educator resource; today they are islands.

---

## 8. Content Audit: Page Inventory and Actions

### 8.1 Main domain (rendered word counts from August 26; quality judgments from the writer audit)

| Page | URL | Words | Meta | H1s | Audience | Judgment | Recommendation |
|---|---|---|---|---|---|---|---|
| Homepage | / | 425 | yes | 3 | All | Carousel-dependent; no audience gateway; 17MB | Rewrite: gateway + indexable mission + one hero CTA |
| About Us | /about-us/ | 701 | no | 0 | All | Good: mission, history, milestones | Keep; add H1, meta, Organization schema |
| Results | /results/ | 561 | yes | 0 | All | Good data, poor structure; 87MB of images; 96% stat is an unstyled H5 | Rewrite for skimmability and extraction; fix payload |
| Enroll | /enroll/ | 41 | no | 0 | Families | Region chooser only; four `http://` links | Rewrite: enrollment hub with steps, eligibility, FAQ |
| Careers | /careers/ | 469 | no | 0 | Staff | Rewritten since March; no longer duplicates Why Uncommon (0 shared 12-word spans) | Keep; add H1, meta |
| Why Uncommon? | /why-uncommon/ | 825 | no | 1 | Staff | Rewritten since March; 2 icons missing alt | Keep as flagship; fix alt |
| Search Jobs | /careers/jobs/ | 233 | no | 0 | Staff | SmartRecruiters proxy; 5 heading violations | Keep; rebuild proxy |
| Donate | /donate/ | 452 | yes | 1 | Donors | Tiered giving above the fold now; 5.7MB | Keep; fix payload |
| FAQ | /faq/ | 611 | no | 0 | Families | Good content; footer link only; no FAQPage schema | Promote to nav; add schema |
| Contact | /contact-us/ | 85 | no | 1 | All | Gravity Form gform_2 | Keep |
| Alumni | /alumni/ (via /uncommon-alumni/) | not audited | | | Donors | Fixed since March (was 404) | Review content; expand to full impact section |
| School pages (57) | /schools/[slug]/ | ~18 | no | 1 | Families | Empty template, 2018 | 301 to regional school pages |
| Regions (5) | /regions/[region]/ | archive | | | Families | Raw taxonomy archive | 301 to regionals |
| Uncommon Sense | /uncommon-sense/ | not audited | | | Educators | Active, high quality | Keep; restructure top 20 answer-first |
| Sharing Our Practices | /sharing-our-practices/ | not audited | | | Educators / Donors | Unique differentiator | Keep; cross-link |
| Books, Our Approach, Student Experience, Camp Uncommon, Media, Career Areas, Make a Referral | | not audited in browser | | | | Writer audit judgments stand (see March inventory) | Review |

### 8.2 Regional pages (all five follow the same template)

| Page | Words (nyc / bos / new / cam / roc) | Findings |
|---|---|---|
| Home | 426 / 929 / 619 / 456 / 443 | Entry popup; unnamed menu button; H1 present; 2.8–9MB |
| Enroll | 938 / 1,310 / 1,566 / 1,321 / 1,137 | Strongest content on the network: journey-map tabs, video carousel, FAQ accordion, external apply CTAs. Also the heaviest pages (Boston 60MB, Newark 38MB, Camden 21MB), with focus-invisible tabs, keyboard traps in accordions (Newark, Camden), 6–8 icons missing alt, and stale `_ga`/`http://` links. |
| Careers | 175 / 148 / 162 / 171 / 157 | Thin; 0 H1; links out to SmartRecruiters (Boston to itself) |
| Donate | 112 / 86 / 77 / 77 / 95 | Thin; 0 H1; FundraiseUp |
| School | 732 / 836 / 676 / 689 / 670 | Real content: hero, carousel, campus facts; 4–5MB |
| News | 153 / 110 / 149 / 171 / 125 | Worst performers: mobile 37–65, CLS 0.59–1.12, 9–10 sub-12px dates, 0 H1 |
| Contact | 206 / 107 / 135 / 127 / 138 | Gravity Form; labeled |
| /es/ home | 478 / 999 / 744 / 505 / 502 | Mostly Spanish; English blocks remain; "Escuelas no comunes" on Boston and Rochester |
| Campaign LP (10–12 each) | 394 / 378 / 352 / 346 / 520 | Interest form; indexed; contrast and label defects |

### 8.3 Keep / Rewrite / Consolidate / Cut / New (writer v2, updated)

**Keep:** About Us; Student Experience; Donate; Uncommon Sense posts; Sharing Our Practices; Careers and Why Uncommon (now rewritten); regional enroll and school page content (the copy is good; the container is not).

**Rewrite:** Homepage; main Enroll; Our Approach; Results; regional News templates; regional Careers and Donate pages (77–175 words is not a page).

**Consolidate:** `/regions/*` → regionals (301); 57 main-domain school pages → regional school pages (301); Uncommon Sense + Sharing Our Practices + Books + Hub → one "For Educators" hub; nav to a three-door architecture.

**Cut or fix:** `/alumni-impact/` legacy 404 (redirect); `/uncommon-sense-blog/` (redirect); Camden `/test/`; 24-25 and 25-26 campaign landing pages (retire when campaigns end; noindex all); 987 "social" sitemap URLs and 532 taxonomy URLs (assess for discard); press older than 3 years; PDF-only content.

**New:** 8–10 Answer Pages; native-Spanish enroll, FAQ, and homepage; Alumni Impact as an ongoing story stream; consent management; KPI dashboard.

### 8.4 Priority matrix (writer v2, adjusted for what's already fixed)

Already done since March: Enroll is a standalone nav item on all sites; Alumni link fixed; Careers/Why Uncommon rewritten; Spanish mostly serves Spanish.

**High impact / low effort:** promote FAQ to nav; FAQPage schema; meta descriptions on every page; one H1 per page; fix `http://` links; remove stale `_ga` parameters on Boston; fix Camden robots.txt; add GA4 to Camden; noindex campaign pages; delete /test/.

**High impact / medium effort:** Answer Pages; collapse dual architecture; native Spanish for enroll + FAQ + home; restructure Results; sitewide schema; convert images to WebP with responsive sets (this alone removes most of the page weight).

**High impact / high effort:** replace the Thrive popup and carousel patterns; rebuild 57 school pages from one template (writer v2 template spec, Section 8.5); For Educators hub; Alumni Impact section; homepage rewrite with audience gateway.

### 8.5 School page template (writer v2, unchanged)
Above the fold: school-specific hero photo, name, grades, location, one-line differentiator, primary CTA. Trust: 3–5 stats, principal bio + photo, "Why families choose [school]" in 3 points. Experience: sample day, 2–3 parent quotes with names and photos, 1 student quote, photo carousel. Programs: grade-specific programs, special-ed support at this campus, extracurriculars. Action: enroll CTA (region-specific link), tour signup, real phone/address/map. Governance: a school-level content owner per school; network provides template, voice, and photography standard; photography sprints of one school per day over ~3 months. Rollout: highest-enrollment schools first; 10–15 model pages at launch, the rest on a "coming soon" state filled monthly. Note: the regional school pages already implement roughly half of this (hero, carousel, campus facts, 670–836 words); the template should build from them, not from the empty main-domain versions.

---

## 9. Content Audit: Audience Mapping
### 9.1 Families
Path today: homepage (popup on regionals) → Enroll → region chooser → regional /enroll/ (popup) → external platform. Taps from a mobile homepage to an application form: 5 on the main domain; 1 via the popup or 4 via nav on each regional. The regional enroll pages are content-rich (938–1,566 words) with steps, FAQ, and video, which is a large improvement on the March "one sentence + city buttons." What's still missing: a Spanish track written by a native speaker; grade-level guidance; comparative campus information; a main-domain enrollment hub that explains the network before asking for a city. Friction rating: MEDIUM (was HIGH), driven now by page weight, the popup, and the mixed-protocol links rather than absent content.

### 9.2 Staff and educators
Careers and Why Uncommon on the main domain are rewritten and substantive (469 and 825 words). Regional careers pages are 148–175 words and hand off to SmartRecruiters immediately. Missing: educator-specific nav pathway; the thought-leadership-to-recruitment bridge (Teach Like a Champion readers, Uncommon Sense readers, Hub users have no "work with us" path); staff testimonials with substance. Friction rating: MEDIUM-HIGH.

### 9.3 Donors
Donate page is solid (tiered copy, form above the fold). Alumni link now resolves. Missing: annual/impact report; major donor pathway; donor FAQ; narrative giving data. Regional donate pages are 77–112 words. Friction rating: MEDIUM.

### 9.4 Additional audiences (kickoff)
Other educators and districts licensing Uncommon curriculum: emerging, monetized, above current families and below the primary audiences. Current families: not a target for this site.

### 9.5 Archetypes and audience-first architecture (creative and writer; unchanged)
The Searching Parent, The Mission Donor, The Educator. Families → find a school → Enroll; Educators → open roles, resources → Apply / Engage; Donors → impact → Give.

---

## 10. Content Audit: AI Search Visibility
### 10.1 Current visibility
Uncommon is consistently not the source AI engines cite for "best charter school network," "how to enroll in charter school NYC," "college prep charter school Newark," "teach at a charter school," "best schools for Black students college prep," or "what is a charter school." Candice is running AI-platform searches ahead of the October enrollment cycle; her results should be appended.

### 10.2 Root causes (verified)
Thin crawlable text on the homepage (425 words, most inside a carousel) and main-domain school pages (18 words); no FAQPage schema on 611 words of FAQ; no topic authority pages; essay-format blog; llms.txt serving Camden everywhere.

### 10.3 Ten topics to own
1. How to enroll in a charter school in [city]; 2. What is the Uncommon Schools model; 3. College acceptance rates at charter schools; 4. Charter vs public school; 5. AP courses at charter high schools; 6. Teaching jobs at charter schools; 7. How a charter lottery works; 8. Best college-prep schools for Black and Latino students; 9. Special-education support at charter schools; 10. Teach Like a Champion.

### 10.4 Answer Page spec (writer v2)
URL `nyc.uncommonschools.org/enroll/how-charter-enrollment-works`; H1 "How to Enroll in a Charter School in NYC (2026–2027)"; TL;DR box; six numbered H2 steps (eligibility, choose campus, NYC application, lottery, placement, paperwork); FAQ block with FAQPage schema; Article + FAQPage + BreadcrumbList + EducationalOrganization; cross-links to school finder and school pages. ~1 day writing + 1 day dev each; ten pages in ~4 weeks. Camden's existing `/what-is-a-charter-school/` (confirmed live) is the model.

### 10.5 Actions
Fix llms.txt per domain (Critical, Dev); noindex campaign URLs and remove from llms.txt (Critical); delete /test/ (Critical); FAQPage schema (High); 5–8 Answer Pages (High); promote the Camden charter-school page network-wide (High); restructure Uncommon Sense answer-first (Medium); EducationalOrganization + LocalBusiness schema (Medium).

---

## 11. Content Audit: Strategy, Voice, and Measurement
### 11.1 Five pillars
Proof (results, CREDO, QuestBridge); Experience (the school day); People (teachers, leaders, students, alumni); Expertise (Uncommon Sense, Teach Like a Champion, Hub, partnerships); Action (Enroll, Give, Join; every page knows which one it drives).

### 11.2 Voice
Direct, warm, conviction-filled. Written to a mother in Brooklyn deciding whether to enter the lottery or a teacher in Newark weighing a move. More "Your child will love school here. That's a promise, not a tagline." Less "Uncommon Schools leverages a rigorous academic framework to drive measurable outcomes." Families: warm, specific, ambitious on their kids' behalf. Educators: collegial, expert-to-expert. Donors: evidence-driven, confidence-based.

### 11.3 Thirteen patterns to adopt (writer + creative, merged)
Audience gateway on the homepage; CREDO claim as primary hero statement; full-arc student stories; answer-first structure; topic-first content library; schema on data-heavy pages; unified For Educators hub; differentiated school profiles; zip-code school finder landing on real profiles; impact data as storytelling; donor ecosystem depth; educator pipeline with a "Work with us" module on every post and book page; Spanish enrollment pathway.

### 11.4 Baselines to capture before relaunch (PENDING: GA4 and Search Console)
Organic sessions by domain (12 months); enroll-page-to-application-start conversion; top 25 landing and exit pages; school page time on page; homepage bounce; Search Console top 100 queries and CTR; pages with impressions and no clicks; referral traffic from books.google, TLAC, social; application starts by region from the five platforms; traffic by page for the last 2 years (Spinutech's keep/kill validation input); main-domain on-site search terms (new since March; regionals have none).

### 11.5 Post-launch KPIs (90/180/365 days)
Application starts +30% at 180 days; enroll-to-application 2x; Uncommon cited in AI answers for 8 of 10 priority topics; organic sessions to school pages +150%; 20+ featured snippets at 365 days; school page time on page 2x; homepage bounce −30%; Spanish-language traffic (new); careers-to-application +40%; Alumni page visits; donation conversion baseline and goal; +20% overall conversion in year one (external brief).

---

## 12. UX and Visual Audit
### 12.1 Verdict and ratings (creative audit, March; still applicable)
The mission is extraordinary; the site does not match it. Typography 6/10; color 6/10; photography 8/10; component consistency 4/10; brand cohesion across regions 3/10; overall 5/10. Since March the regionals moved to a shared `uncommon-region-theme`, which improves consistency among the five regionals, but the main domain still runs a different theme and reads as a different brand.

### 12.2 Navigation (current)
Main: About Us, Our Schools, Results, Sharing Our Practices, Careers + Enroll button (opens region chooser) + search. Regionals: Enroll, About [region], Student Experience, Campuses/Our Schools, Results, Family Resources, Donate. FAQ is footer-only on main. "Our Schools" still leads to `/regions/` archives. Mobile nav on every site: primary items are 46–83×20px (below the 24px target minimum); the menu toggle has no accessible name on regionals; the menu cannot be opened by a standard click while the entry popup is showing.

### 12.3 Conversion paths (measured)
Enroll: 5 taps from the main homepage on mobile; 1 (popup) or 4 (nav) on regionals. Donate: FundraiseUp above the fold on main; regional donate pages are 77–112 words. Careers: main jobs listing works; regionals hand off immediately.

### 12.4 Specific failures (updated)

| Failure | Status |
|---|---|
| Alumni Impact 404 | Fixed |
| Careers duplicates Why Uncommon | Fixed |
| Special education buried inside Our Approach | Unchanged |
| No site search | Fixed on main; absent on all regionals |
| Dual architecture | Unchanged |
| Carousel hover lock | OPEN ITEM (queued for Wenni per 8/24 standup) |
| Entry popup blocks keyboard users and the mobile menu | New; all five regionals |
| Regional news pages shift layout by 0.6–1.1 CLS | New |
| Enroll pages 20–60MB | New |

### 12.5 KIPP comparison (writer and creative; kickoff clarified the reference is kippnj.org, not kipp.org)
KIPP wins on audience-segmented content, regional depth, alumni testimonials, brand hierarchy, content footprint, and scale stat in the hero. Uncommon wins on the CREDO claim (a verifiable superlative KIPP cannot match, currently in body text on /about-us/), the 96% stat, and Teach Like a Champion / Uncommon Sense. KIPP's weaknesses: `/schools/` redirects to homepage, less prominent college data, uneven regional quality, JS-dependent homepage. Anthony's read of kippnj.org: things are easy to find; vibrant color pulls the eye to key buttons (slightly too much, but it works). Success Academy is a reference for its single-flow application only. The site should not look like any competitor. KIPP student count: OPEN ITEM (writer said 210,000+, creative 125K; KIPP's own figure is ~120,000).

### 12.6 Keep, elevate, rethink (creative; unchanged)
Keep the photography. Elevate "Close the college completion gap" and the CREDO claim to the top of every hierarchy. Rethink homepage (gateway + proof in the first viewport), Enroll (a product, not a chooser), navigation (audience-first), school pages (differentiated), donor section (full ecosystem).

### 12.7 Design direction (creative; unchanged)
Bold without aggression, warm without softness, academic not institutional. Grid-first, whitespace-generous, one job per module, large display type for performance claims, editorial scale. In-context, unposed, specific imagery with one direction across all regions. Restrained motion; no autoplay with audio; still hero with optional video; carousels replaced with intentional storytelling. Two nav concepts to develop: audience-first gateway; outcome-first hero. OPEN ITEM which Phase 02 creative deliverables (nav concepts, 10 template wireframes, 25 modules, UX flows, 3 archetypes, design tokens) stay internal vs go to Spinutech.

### 12.8 Mobile (measured; replaces the March "pending" note)
76% of conversions are mobile. Findings across all in-scope pages at 375×812: viewport meta correct and no horizontal scroll anywhere; sticky header consumes 7% of the viewport and the open mobile nav 93%; entry popup covers 100% on regionals; tap targets under 24px on every page (10–37 per page); sub-16px text concentrated on enroll pages (21–40 runs) and news dates; forms lack autocomplete and use generic `text` type for ZIP; 0 conversion events fire on Enroll tap on five of six sites. Spinutech's stated practice is desktop-first with dedicated mobile designs for the homepage and up to nine sub-pages; the five regional enroll pages, the main enroll hub, the jobs listing, and the donate page should be among those nine. Screenshots of every page at both viewports are in `01-audit/browser/screenshots/<domain>/`.

---

## 13. Immediate Fixes on the Current Site

These do not wait for the redesign. Ordered by severity.

| Priority | Fix | Owner |
|---|---|---|
| Critical | Regenerate llms.txt per domain (all six serve Camden) | Dev / SiteCare |
| Critical | Make the regional entry popup dismissible by Escape and Tab, and stop its overlay from blocking the menu button; or remove it | Dev |
| Critical | Add an accessible name to `button.site-header__toggle` on the regional theme | Dev |
| Critical | Fix accordion keyboard traps (roxburyprep FAQ, northstar and camdenprep enroll) and Camden homepage iframe trap | Dev |
| Critical | Add GA4 to camdenprep; instrument Enroll-click conversion events on all sites | Marketing / Dev |
| Critical | Noindex all 58 campaign landing pages; remove from sitemaps and llms.txt | Dev |
| Critical | Deploy a consent management platform on all seven domains; remove `handl_ip` | Dev / Legal |
| High | Convert the largest images to WebP and add responsive sets on /results/ (87MB), Boston enroll (60MB), Newark news (52MB), Newark enroll (38MB), main careers (21MB), Camden enroll (21MB), main home (17MB) | Dev |
| High | Fix `http://` internal links on main /enroll/, regional footers, Newark and Rochester apply CTAs | Content |
| High | Strip hardcoded `_ga=` parameters from Boston apply links | Content |
| High | Fix Camden robots.txt (`1User-agent`) and remove the duplicate `User-agent: *` block network-wide | Dev |
| High | Delete Camden `/test/`; redirect `/uncommon-sense-blog/` and `/alumni-impact/` | Dev |
| High | Add meta descriptions to every page; one H1 per page (add on the 0-H1 pages, remove extras on home and Camden) | Content / Dev |
| High | Fix the regional news template CLS | Dev |
| High | Exclude the brand name from machine translation; native-speaker pass on /es/ enroll and home | Content |
| Medium | Scope Thrive, Gravity Forms, and FundraiseUp assets to the pages that use them | Dev |
| Medium | Remove MonsterInsights; retire G-X5WHC48ND7 | Dev |
| Medium | Review the Hub's ad-tech tags (TikTok, LinkedIn, StackAdapt, Trade Desk, Xandr, Yahoo) and `lang="en-CA"` | Marketing / Dev |
| Approved (ET) | Remaining Critical / Very High compliance fixes with SiteCare | Courtney |

---

## 14. Platform Requirements for the New Build

The dev audit's Drupal/Pantheon recommendation is superseded by Spinutech's WordPress multisite proposal, and the site is already a multisite. The requirements below are what the audit evidence says the new build must satisfy regardless of platform.

- One codebase and one theme system across network and regional sites, with domain-level overrides (today: two themes that diverge)
- Shared content types (School, Person, Region, Impact Story, News Post, Career) with region tagging that surfaces content on the right subdomain automatically
- One content node per page with six language variants; native review for Spanish; brand name locked
- Block-based, reusable modules editors compose without a developer; no page-builder plugins (Thrive) layered on top
- Accessible components by default: named controls, one H1, heading order, pausable carousels or none, no interstitials, visible focus, 24px targets, labeled forms with autocomplete
- Image pipeline: WebP/AVIF, responsive `<picture>` sets, size limits enforced at upload
- CDN in front of the origin with cookie-independent caching; correct `cache-control` on HTML
- Consent management integrated with all tags; tag manager (not direct gtag) with one container and per-site GA4 streams; conversion events on every Enroll, Apply, Donate, and job click
- Site search on every domain
- One SEO plugin generating per-domain sitemaps, llms.txt, meta, and schema (Organization, EducationalOrganization, LocalBusiness, FAQPage, Article)
- SmartRecruiters job feed via a cached server-side proxy; region-specific enrollment CTAs managed as structured data, not hand-typed links
- Redirect map for ~6,767 URLs before launch; zero SEO regression
- Dev/Test/Live environments; automated core and plugin updates; WAF and DDoS protection; CSP, CORS, and SRI headers (all missing today)

**Security baseline (unchanged from dev audit):** HSTS keep; HTTP/2 keep; WAF + DDoS required; automated patching required; CSP, CORS, SRI add; AI-bot policy add; WCAG 2.2 AA as a workstream.

**Hosting:** OPEN ITEM with Spinutech; the current DigitalOcean/nginx arrangement has no CDN and inconsistent caching.

---

## 15. Migration Requirements

**Approach:** automated migration from the multisite database, not manual copy/paste. The site is already a multisite, which simplifies the source side.

| Content type | Volume (Aug 26) | Risk | Notes |
|---|---|---|---|
| Pages (main) | 623 | HIGH | Content-type mapping; define all types and fields first |
| Pages (regionals) | 299 | MEDIUM | Includes 58 campaign LPs to noindex, and enroll pages whose copy should carry over |
| News posts | 1,848 | MEDIUM | Automate entirely; Article schema |
| People profiles | 805 | MEDIUM | Assess which are still current |
| School profiles | 399 (57 EN) | MEDIUM | Consolidate main-domain versions into regional versions |
| Social | 987 | LOW | Likely discard |
| Impact blog | 259 | MEDIUM | Author and date must carry |
| Books | 63 | LOW | |
| Taxonomy URLs | 532 | LOW | Mostly discard; redirect region/level/role archives |
| Hub | 952 | HIGH | Separate install; gated content; decide whether it joins the multisite |
| **URLs needing a redirect decision** | **~6,767** | **HIGH** | |

Pre-migration: content model; URL audit with 2 years of traffic (the keep/kill/consolidate list); image audit and re-optimization; forms inventory (PENDING: WP admin); translation matrix (which of 6 languages is populated per page); tagging plan.

---

## 16. Change Log: March Audit vs Live Site

| Area | What changed |
|---|---|
| Platform | WP Engine + Cloudflare → nginx multisite at 134.209.175.171; Hub unchanged |
| Architecture | 5 installs → 1 multisite (IDs 2, 5, 6, 7, 8; 3 and 4 unaccounted) |
| Themes | Regionals moved to uncommon-region-theme |
| CDN | Bypassed → absent |
| Cookies | 9 HandL → 13 + `handl_ip`; FundraiseUp cookies sitewide |
| TTFB | Camden 1.4s outlier resolved; cache hits ~40ms, misses ~500–620ms |
| SEO plugins | Yoast on main + AIOSEO on regionals → Yoast v28.3 on five sites; AIOSEO v5 still on Camden sitemap and network llms.txt |
| robots.txt | Crawl-delay removed on network; Camden file corrupted with a stray "1" |
| Spanish | English under es-MX → mostly Spanish; titles and some blocks still English; brand mistranslated |
| Video hero | Autoplay video with audio → image carousel (still no pause) |
| Alt text | 4 missing on home → 3 on home + 2 on why-uncommon + 6–8 per regional enroll page |
| Unlabeled inputs | 8 claimed → 1 on main (ZIP); more on campaign forms and Hub |
| Nav | Enroll nested under Our Schools → standalone item everywhere; regionals linked from main header |
| Alumni | 404 → resolves at /alumni/ |
| Careers / Why Uncommon | Duplicate paragraphs → both rewritten |
| Site search | None → present on main and Hub; absent on regionals |
| School pages | 150–300 words → ~18 words on main; 670–836 on regionals |
| URL count | 3,843 → ~6,767 network-wide |
| Analytics | One GTM everywhere → GTM on Hub only; per-region GA4; Camden none; G-X5WHC48ND7 gone |
| Hotjar | Main → Hub only (new ID) |
| Lever | Referenced → gone |
| Campaign LPs | Camden only → 58 across five regionals |
| Results title | Entity bug → fixed |
| Gravity Forms / Thrive / TranslatePress / MonsterInsights | 2.9.29 / 10.8.8 / 3.1.2 / 10.1.0 → 2.10.5 / 10.9.3.2 / 3.3.3 / 11.1.3 |
| New defects found | Entry popup keyboard failure; unnamed menu button; accordion traps; 20–87MB pages; news CLS; stale `_ga` params; `http://` links; two Camden portals; Boston careers self-link; Hub 65 cookies and en-CA |

Full 75-row verification table with evidence: `01-audit/browser/00-CLAIMS-VERIFICATION.md`.

---

## 17. Open Items at Time of Audit

These facts could not be resolved from the site itself and are recorded as found. Uncommon will confirm each internally; none blocks the build from starting.

1. Hosting: the six network domains were migrated to a DigitalOcean nginx multisite after March 2026 by a party not identified in the project record. Current hosting arrangement and cost are unconfirmed.
2. Multisite IDs 3 and 4 exist in the network but are not public; their purpose is unconfirmed.
3. Camden links two enrollment portals (onecamden.org and camdenenrollment.org); which is current is unconfirmed.
4. Avela, Salesforce, and Formstack were named in earlier scoping but were not found on any page; whether they are used off-site in the enrollment or lead flow is unconfirmed.
5. The 58 campaign landing pages are treated as live media assets to be noindexed; whether to consolidate them into one lead form per region is a campaign decision still open.
6. The Curriculum Hub ad-tech tags (TikTok, LinkedIn, StackAdapt, Trade Desk, Xandr, Yahoo, two Google Ads accounts, Hotjar) are recorded as found; which are still wanted is unconfirmed.
7. AI-crawler policy (GPTBot, ClaudeBot, PerplexityBot) is undefined in robots.txt; the deck recommends an explicit allow policy pending Uncommon's decision.
8. The SiteCare/OCR accessibility spreadsheet sent separately is the authoritative violation list and is not reproduced here.
9. KIPP's student count is cited inconsistently in the source audits (125K vs 210K); KIPP's own published figure is roughly 120,000.
10. Which Phase 02 creative deliverables remain internal versus in agency scope is a scoping item for the project schedule.
11. Whether the Curriculum Hub joins the new multisite or stays a separate install is an architecture decision still open.
12. The regional carousel hover-lock fix was queued internally on August 24; completion is unconfirmed.
