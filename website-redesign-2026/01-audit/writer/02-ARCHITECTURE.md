# 02 — Architecture & Domain Map
**Phase 01: Content Audit | Uncommon Schools**

> Maps the full domain network, reconciles the page count discrepancy, and diagnoses the dual architecture problem that undermines the entire site.

← [01-EXECUTIVE-SUMMARY.md](./01-EXECUTIVE-SUMMARY.md) | → [03-CONTENT-INVENTORY.md](./03-CONTENT-INVENTORY.md)

---

## Domain Inventory

| Domain | Purpose | Est. Pages | Status |
|---|---|---|---|
| uncommonschools.org | Network flagship | ~300 | Primary domain, WordPress |
| nyc.uncommonschools.org | NYC region | ~80 | Active, partially duplicates main |
| roxburyprep.uncommonschools.org | Boston region | ~40 | Active — branded as Roxbury Prep, not "Uncommon Boston" |
| rochesterprep.uncommonschools.org | Rochester region | ~40 | Active |
| camdenprep.uncommonschools.org | Camden region | ~40 | Active — confirmed via llms.txt audit |
| [newark subdomain TBC] | Newark region | ~30 | URL unconfirmed |
| hscurriculum.uncommonschools.org | HS Curriculum Hub | ~200+ | Active, separate product — educator-facing |
| **Total** | | **~800–1,000+** | |

**Page count reconciliation:** Internal count of 384 = main domain only. Agency count of 795 = all subdomains but likely undercounts the HS Curriculum Hub library. Real total is 800–1,000+ pages across all domains.

---

## The Dual Architecture Problem

This is the most structurally damaging issue on the site.

**What exists today:**
- Main domain has `/regions/` taxonomy pages (e.g., `uncommonschools.org/regions/nyc/`) — WordPress archive pages that list school posts by regional tag
- Regional subdomains (e.g., `nyc.uncommonschools.org`) have full homepage content, enrollment info, local news, and school listings

**Neither is complete.** The main domain `/regions/` pages have no enrollment info. The regional subdomains aren't discoverable from the main site's navigation.

**The user experience result:**
- Family searching "Uncommon Schools NYC enroll" → may land on regional subdomain (good experience)
- Family starting at uncommonschools.org and clicking through nav → hits `/regions/nyc/` dead end (no enrollment info, no real content)

Two completely different experiences for the same user with the same intent.

**Additional problems:**
- Split domain authority — search engines and AI engines aren't sure which domain is canonical for NYC content
- Duplicate content signals across the two regional representations
- Regional subdomains have no discovery path from the main nav (invisible unless you know the URL)

### Recommendation

Collapse the dual architecture:
1. **Establish regional subdomains as canonical** for all regional content
2. **Remove or 301-redirect** all `/regions/` taxonomy pages on the main domain to the appropriate subdomain
3. **Add prominent regional entry points** from the main site nav — not archive pages, but actual cross-links to subdomain homepages
4. **Confirm Newark subdomain URL** — it's referenced in content but wasn't verifiable during this audit

---

## HS Curriculum Hub — Architectural Note

The Hub lives at `hscurriculum.uncommonschools.org` and is effectively a standalone product. It has its own brand presence, its own audience (educators nationally), and no connection to the main site. Full assessment in [08-STRATEGY-PREVIEW.md](./07-STRATEGY-PREVIEW.md).

**One architecture note here:** The Hub should remain a separate subdomain — collapsing it into the main domain would be wrong. But it needs brand continuity: an Uncommon Schools header, "Want to teach here?" CTA, and mission statement on every page.

---

→ Next: [03-CONTENT-INVENTORY.md — Full Page Inventory & K/C/Cut Decisions](./03-CONTENT-INVENTORY.md)
