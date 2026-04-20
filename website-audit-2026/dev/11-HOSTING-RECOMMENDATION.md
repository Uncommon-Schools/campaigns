# 11 — Hosting Recommendation

> Pantheon vs Acquia for the Drupal 10 build. Cost estimates, capability comparison, and security baseline for the new build.

---

**[← Migration Complexity](./10-MIGRATION-COMPLEXITY.md) | [Next: Open Questions →](./12-OPEN-QUESTIONS.md)**

---

## Recommendation: Pantheon Performance Tier

**Estimated cost:** ~$200–400/month

Pantheon is a Drupal-native managed hosting platform. It directly solves several existing problems:

| Problem | How Pantheon Fixes It |
|---|---|
| 5 separate WP Engine instances | Single Pantheon account hosts all 6+ domains via multisite + custom domain routing |
| CDN bypass from UTM cookies | Pantheon Global CDN is **not cookie-dependent** — caches correctly regardless of cookie presence |
| No dev/staging environments | Built-in Dev/Test/Live workflow — no FTP, no cowboy deploys, no "hotfix to production" |
| Manual update process | Automated Drupal core + module updates with visual regression testing |

**Additional benefits:**
- Real-time TTFB monitoring dashboard
- Global CDN with proper cache invalidation
- Migration path: documented Pantheon + WP Engine migration runbook exists
- Eliminates 5 separate hosting bills — single invoice

**Estimated current cost (5 WP Engine instances):** $400–800+/month combined  
**Estimated Pantheon Performance:** $200–400/month — likely cheaper, definitely more capable

---

## Fallback: Acquia Cloud Next

**Estimated cost:** $1,000–2,000+/month

Drupal-native, enterprise SLA, dedicated infrastructure. The right choice if Uncommon has specific compliance requirements (SOC 2, PCI) that Pantheon's shared infrastructure does not satisfy. More infrastructure than this build requires — Pantheon is the appropriate tier unless compliance drives the decision.

---

## Security Baseline for New Build

| Item | Status | Action |
|---|---|---|
| HSTS | ✓ Already enforced | Keep |
| HTTP/2 | ✓ Already active | Keep |
| WAF + DDoS protection | — | Pantheon provides at Performance tier |
| Automated patching | — | Pantheon provides at Performance tier |
| CSP headers | ❌ Missing | Add in Phase 04 |
| CORS policy | ❌ Missing | Add in Phase 04 |
| SRI for external scripts | ❌ Missing | Add in Phase 04 |
| AI bot policy in robots.txt | ❌ Missing | Add explicit GPTBot, ClaudeBot, PerplexityBot directives |
| WCAG 2.2 AA | ⚠️ Partial | Bake into Phase 04 as a discrete workstream — not post-launch remediation |

---

→ See [09-CMS-EVALUATION.md](./09-CMS-EVALUATION.md) for the Drupal architecture the hosting supports.  
→ See [02-INFRASTRUCTURE.md](./02-INFRASTRUCTURE.md) for current hosting issues.

---

**[← Migration Complexity](./10-MIGRATION-COMPLEXITY.md) | [Next: Open Questions →](./12-OPEN-QUESTIONS.md)**
