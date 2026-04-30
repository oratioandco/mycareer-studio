# Job Analysis Schema

Output of `mycareer analyze`. Saved to `data/jobs/{company-slug}.md`.

## Structure

```yaml
---
company: "Company Name"
role: "Job Title"
source_url: "https://..." or "pasted"
analysis_date: YYYY-MM-DD
fit_score: 0-100
status: "analyzed" | "applied" | "interview" | "offered" | "rejected" | "withdrawn"
---
```

## Body Sections

### Company Overview
- Industry, stage (startup/growth/scale-up/enterprise), size
- Product/service description
- Design team context (if known)

### Role Requirements
Organized by category:

#### Must-Have Requirements
- Required skills with match assessment (strong/moderate/gap)
- Required experience level
- Required education/certifications

#### Nice-to-Have Requirements
- Preferred skills
- Bonus qualifications

#### Soft Skills & Culture
- Leadership expectations
- Communication requirements
- Cultural fit indicators

### Fit Analysis

#### Strong Matches
Experiences/skills that directly align with requirements.

#### Moderate Matches
Experiences that partially align. Need verification or reframing.

#### Gaps
Requirements with no matching experience. Include honest assessment.

#### Risk Areas
Potential red flags from the hiring manager's perspective.

### Strategic Positioning Notes
How to frame the application for maximum relevance.

### Next Steps
Recommended verification questions and experience to highlight.

## Naming Convention
`{company-lowercase}-{role-kebab-case}.md`
Examples: `liveeo-senior-product-designer.md`, `ninox-head-of-design.md`
