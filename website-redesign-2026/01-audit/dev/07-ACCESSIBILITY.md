# 07 — Accessibility

> WCAG 2.2 AA gap analysis. Title II ADA compliance is a legal requirement for this organization.

---

**[← AI Readiness](./06-AI-READINESS.md) | [Next: Performance →](./08-PERFORMANCE.md)**

---

## Compliance Requirement

Uncommon Schools has a **Title II ADA compliance requirement** — WCAG 2.2 AA is not optional. The current site has confirmed violations and a number of items that require browser-level testing to fully assess.

---

## Current Status

| Check | Status |
|---|---|
| Skip navigation link | ✓ Present |
| HTML `lang` attribute | ✓ `en-US` |
| ARIA landmarks | ✓ `main` ×1, `nav` ×3 |
| Accessibility Checker + Pro plugins installed | ✓ |
| Images missing alt text (homepage) | ❌ 4 found |
| Images missing width/height dimensions | ❌ 4 found — CLS risk + screen reader context gap |
| Form inputs potentially unlabeled | ❌ 8 found — requires browser-level validation to confirm |
| WebP images | ❌ None across any install |
| Responsive `<picture>` tags | ❌ None |
| Color contrast | ⚠️ Requires browser testing — queued Phase 02 |
| Keyboard trap audit | ⚠️ Requires browser testing — queued Phase 02 |
| Focus ring visibility | ⚠️ Requires browser testing — queued Phase 02 |

---

## Phase 02 Actions

- Run browser-based Lighthouse accessibility audit on all 5 domains
- Validate form labels with rendered DOM inspection
- Test keyboard navigation end-to-end (enroll flow, careers flow, donate flow)
- Validate color contrast ratios across all brand color pairings

---

## Phase 04 Recommendation

**Bake accessibility QA into Phase 04 as a discrete workstream — not a post-launch remediation task.**

Drupal's core and contributed modules (Webform, Layout Builder, core theme system) have strong WCAG compliance patterns built in. The new theme build must include: semantic HTML, proper heading hierarchy, labeled forms, focus management, and WebP + responsive images from day one.

Post-launch accessibility remediation on a 3,843-page site is significantly more expensive than building it right the first time.

---

→ See [03-CMS-ASSESSMENT.md](./03-CMS-ASSESSMENT.md) for the image and HTML payload issues contributing to performance/CLS.  
→ See [09-CMS-EVALUATION.md](./09-CMS-EVALUATION.md) for how Drupal supports WCAG compliance natively.

---

**[← AI Readiness](./06-AI-READINESS.md) | [Next: Performance →](./08-PERFORMANCE.md)**
