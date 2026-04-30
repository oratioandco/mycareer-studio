# Experience Entry Schema

Each experience lives in `data/experiences/{company-role-slug}.md`.

## Required Fields

```yaml
---
title: "Job Title (exact, as held)"
company: "Company Name"
location: "City, Country"
start_date: YYYY-MM
end_date: YYYY-MM or "present"
status: "ongoing" | "completed"
---
```

## Body Sections

### Company Context (required)
1-2 sentences describing the company's industry, scale, and relevant context. Must be accurate and verifiable.

### Role Summary (required)
2-3 sentences describing scope, team size, and primary responsibility. Use exact language from user.

### Key Achievements (required)
Bullet points using the IMPACT framework:
- **Implementation**: What was built/done
- **Method**: How it was approached
- **Partnership**: Who was involved
- **Achievement**: What outcome resulted
- **Context**: Why it mattered
- **Technology**: Tools/methods used

Each achievement must be:
- Traceable to user's exact words
- Defensible in an interview
- No longer than 25 words per bullet

### Technologies & Tools (optional)
List of specific tools, platforms, and methodologies used. Only include those explicitly mentioned by user.

## Verification Status

At the bottom of each file:
```yaml
## Verification
verified: false
verification_date: 
verification_log: data/verification-log/{slug}.md
confidence_level: "high" | "medium" | "low"
```

## Naming Convention
`{company-lowercase}-{role-kebab-case}.md`
Examples: `ninox-head-of-product-design.md`, `datameer-director-of-design.md`
