# 08 — Performance

> Server-side TTFB benchmarks, HTML payload analysis, and the CDN bypass root cause. Browser Lighthouse (LCP/CLS/TBT) is queued for Phase 02.

---

**[← Accessibility](./07-ACCESSIBILITY.md) | [Next: CMS Evaluation →](./09-CMS-EVALUATION.md)**

---

## TTFB by Domain

Measured via direct HTTP. WP Engine internal cache active (`x-cache: HIT`).

| Domain | TTFB | Status |
|---|---|---|
| uncommonschools.org | 186ms | ✓ |
| uncommonschools.org/enroll/ | 247ms | ✓ |
| uncommonschools.org/careers/ | 189ms | ✓ |
| uncommonschools.org/donate/ | 121ms | ✓ |
| nyc.uncommonschools.org | 283ms | ✓ |
| northstar.uncommonschools.org | 216ms | ✓ |
| rochesterprep.uncommonschools.org | 198ms | ✓ |
| **camdenprep.uncommonschools.org** | **1,418ms** | ❌ **CRITICAL** |

Camden is 7–10x slower than every other site. The WP Engine instance appears cold, uncached, or misconfigured. This cannot ship as-is.

---

## HTML Payload

Source-only measurement — before any JavaScript, CSS, or images load.

| Page | Measured | Target | Status |
|---|---|---|---|
| Homepage | 118KB | 30–60KB | ❌ 2–4x overweight |
| /careers/ | 122KB | 30–60KB | ❌ 2–4x overweight |
| /donate/ | 119KB | 30–60KB | ❌ 2–4x overweight |

**Primary contributors:** Thrive Leads + jQuery loaded sitewide regardless of page type.

---

## CDN Bypass (All Sites)

All domains return `cf-cache-status: DYNAMIC`. The Cloudflare CDN layer is not caching anything. All 141K monthly visitors bypass the edge and hit WP Engine origin directly.

**Root cause:** handl UTM Grabber sets 9 cookies on every request. Cloudflare treats any cookied request as dynamic/personalized and routes to origin.

**Impact:** WP Engine origin handles the full traffic load. Edge performance benefits (reduced latency, global routing) are entirely lost.

**Fix:** Replace handl UTM Grabber with client-side GTM + localStorage tracking. Zero cookies = normal CDN caching behavior restored.

→ See [02-INFRASTRUCTURE.md](./02-INFRASTRUCTURE.md) for full CDN bypass detail.

---

## Other Flags

- **Cache TTL:** 600s (10 min) — should be 86,400s+ for static marketing pages
- **`vary: Accept-Encoding` appears 4×** — duplicate headers from misconfigured middleware layer
- No WebP images across any install
- No lazy loading or `<picture>` tags
- 4 homepage images missing dimension attributes (CLS risk)

---

## Phase 02 Pending

- Full Lighthouse audit (LCP, CLS, TBT, FID) on all domains — requires rendered browser testing
- Mobile vs desktop performance comparison
- Camden Prep investigation — determine root cause of 1,418ms TTFB

---

**[← Accessibility](./07-ACCESSIBILITY.md) | [Next: CMS Evaluation →](./09-CMS-EVALUATION.md)**
