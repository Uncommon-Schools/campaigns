# 03 — CMS Assessment

> What's working and what's broken in the current WordPress setup. The core structural problem and why it's blocking everything else.

---

**[← Infrastructure](./02-INFRASTRUCTURE.md) | [Next: Integrations →](./04-INTEGRATIONS.md)**

---

## Current Setup

- **Platform:** WordPress with custom theme (`uncommon-theme`, Sage framework)
- **Hosting:** WP Engine managed hosting — no server access
- **Custom post types:** people, schools, impact-blog, books, regions, roles, levels
- **5 separate WP installs** — one per regional site, fully independent

---

## What's Working

- Solid CDN layer keeps TTFB fast when cache isn't bypassed (85–220ms cached)
- Custom post types are well-structured and map cleanly to Drupal content types
- Plugin stack is mature and familiar to editors
- Sitemap and HSTS configuration are solid

---

## What's Broken

### Structural

| Issue | Impact |
|---|---|
| **5 separate WP installs** | 5x maintenance overhead, 5x update surface, zero content sharing between network and regional sites |
| **No multisite** | Regional content can't reference or inherit from the network. Core architectural problem. |
| **Sage theme requires a build step** | Editors cannot touch theme files without a developer. Any template change needs dev involvement. |

### Performance & Bloat

| Issue | Impact |
|---|---|
| **Thrive Leads + Thrive Dashboard on every page** | Loads JS and dashboard overhead even on pages with no lead capture forms |
| **jQuery + jQuery Migrate loading sitewide** | Legacy dependencies; every page load carries this weight |
| **HTML payload: 110–125KB** | 2–4x over target (30–60KB). This is source-only — before any JS, CSS, or images load. |
| **No image optimization** | No lazy loading, no WebP, no `<picture>` tags across any install |
| **4 homepage images missing alt text** | Accessibility violation + minor SEO impact |
| **4 homepage images missing dimensions** | CLS risk — layout shift on page load |

---

## Migration Complexity

High — custom theme, custom CPTs, 5 installs, and 3,843+ URLs requiring 301 redirects. But it's scoped and achievable with the Drupal Migrate module.

→ See [10-MIGRATION-COMPLEXITY.md](./10-MIGRATION-COMPLEXITY.md) for the full content migration matrix.  
→ See [09-CMS-EVALUATION.md](./09-CMS-EVALUATION.md) for the replacement CMS recommendation.

---

**[← Infrastructure](./02-INFRASTRUCTURE.md) | [Next: Integrations →](./04-INTEGRATIONS.md)**
