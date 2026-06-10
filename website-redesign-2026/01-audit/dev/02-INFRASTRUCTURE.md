# 02 — Infrastructure

> Current hosting setup, CDN configuration, domain inventory, and the root cause of the CDN bypass issue.

---

**[← Executive Summary](./01-EXECUTIVE-SUMMARY.md) | [Next: CMS Assessment →](./03-CMS-ASSESSMENT.md)**

---

## Hosting

- **Platform:** WP Engine (managed WordPress) + Cloudflare CDN
- **CDN IPs:** 141.193.213.10/11
- **Architecture:** 5 completely separate WordPress installs — one per regional site, no multisite, no shared configuration
- **HSTS:** Enforced ✓
- **HTTPS:** Sitewide ✓
- **HTTP/2:** Confirmed across all domains ✓
- **Cache TTL:** 600s (10 min) — too short for static marketing pages; should be 86,400s+

---

## CRITICAL: CDN Bypass

**Every page on every domain returns `cf-cache-status: DYNAMIC`. Cloudflare is not caching anything.**

**Root cause:** The **handl UTM Grabber v3** plugin sets 9 cookies on every request:
`handl_url`, `handl_ref`, `handl_ip`, `organic_source`, and 5 others.

Cookie presence signals to Cloudflare that every request is personalized/dynamic — so it bypasses edge caching entirely and forwards all traffic to WP Engine origin. All 141K monthly visitors hit origin directly. The CDN is effectively decorative.

**Fix (Drupal build):** Replace handl UTM Grabber with GTM + localStorage for client-side UTM persistence. No cookies = CDN caches normally.

**Other flags:**
- `vary: Accept-Encoding` appears 4× on responses — duplicate headers from misconfigured middleware
- WP Engine internal cache (`x-cache: HIT`) works correctly — the problem is exclusively at the CDN layer

---

## Domain Inventory

| Domain | Regional Site | Status |
|---|---|---|
| `uncommonschools.org` | Main network | ✓ Confirmed |
| `nyc.uncommonschools.org` | New York City | ✓ Confirmed |
| `camdenprep.uncommonschools.org` | Camden | ✓ Confirmed — **CRITICAL performance issues** |
| `rochesterprep.uncommonschools.org` | Rochester | ✓ Confirmed |
| `northstar.uncommonschools.org` | Newark / North Star | ✓ Confirmed |
| Boston regional | Boston | ❌ **NOT FOUND** — URL needed from Anthony |
| Domains 7–9 | Unknown | ❌ **UNCONFIRMED** — brief mentions 9 domains; 4 unaccounted for |

---

→ See [12-OPEN-QUESTIONS.md](./12-OPEN-QUESTIONS.md) for the blocking questions on domain inventory.  
→ See [08-PERFORMANCE.md](./08-PERFORMANCE.md) for per-domain TTFB benchmarks.

---

**[← Executive Summary](./01-EXECUTIVE-SUMMARY.md) | [Next: CMS Assessment →](./03-CMS-ASSESSMENT.md)**
