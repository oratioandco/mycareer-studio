
# Rule: Prepare Portfolio for Application

## Goal
Analyze the target job's requirements, inventory existing case studies, identify gaps, recommend which case studies to feature, create missing drafts, and generate a filter configuration — producing a ready-to-share portfolio URL.

## Prerequisites
- Job analysis completed (`analyze-job-posting.mdc`)
- Experience verification completed (`verify-experience.mdc`)
- Case study schema available at `data/case-studies/schema.json`
- Filter schema available at `data/case-studies/filter-schema.json`

## WORKFLOW POSITION
This rule runs between verification and CV generation:
1. ✅ Job analysis (`analyze-job-posting.mdc`)
2. ✅ Experience verification (`verify-experience.mdc`)
3. ⏳ **CURRENT:** Portfolio preparation (`prepare-portfolio.mdc`)
4. ⏭️ CV generation (`generate-cv.mdc`)
5. ⏭️ Cover letter (`generate-cover-letter.mdc`)

## Process

### Step 1: Load Job Requirements
Read the job analysis file. Extract:
- Must-have requirements and their categories (enterprise, data, AI, leadership, etc.)
- Company industry and context
- Key themes the CV is targeting
- Implicit requirements from company intelligence

### Step 2: Inventory Existing Case Studies
Read all JSON files in `data/case-studies/` (excluding schema and filter files). For each:
- Check `status` (draft/review/published/archived)
- Read `tags` for relevance matching
- Read `sections` for completeness (are there images? metrics? or just text?)
- Note `meta.confidential` flag
- Note missing screenshots (images with placeholder paths)

### Step 3: Gap Analysis
Compare job requirements against existing case studies:
- Which requirements have strong case study coverage?
- Which requirements have weak or missing case study coverage?
- Which existing case studies are drafts needing completion?
- Which experiences/projects have NO case study at all?

Output a structured assessment:

```markdown
## Portfolio Gap Analysis for [Company]

### Strong Coverage (ready to feature)
- ✅ datameer-data-dense-analytics → covers: enterprise, data-dense, regulated
- ✅ churchdesk-booking-system → covers: measurable-impact, customer-collaboration

### Weak Coverage (exists but needs work)
- ⚠️ bibeltv-design-system → status: draft, missing screenshots

### Missing Coverage (no case study exists)
- ❌ ninox-org-building → would cover: org-building, leadership, hiring
- ❌ spreadshirt-user-research → would cover: user-research, strategy

### Unnecessary for This Application
- ⊘ aperto-ai-translation → not relevant for this role's requirements
```

### Step 4: Recommend Case Study Selection
Based on the gap analysis, recommend:
1. **Featured** (2-3 case studies shown immediately) — strongest matches, published status preferred
2. **Browseable** (1-2 behind "show more") — good but secondary
3. **Hidden** (available but not surfaced) — less relevant for this application

For each recommendation, state why it matches this specific application.

### Step 5: Create Missing Case Studies
For any gap identified as critical for this application:
1. Run `create-case-study.mdc` logic
2. Pull content from `data/experiences/` and `data/verification-log/`
3. Generate draft JSON following schema
4. Flag where screenshots are needed
5. Set status to `draft`

**Writing quality gate applies**: Follow `rules/writing-quality-gate.md`. Case studies should read like a human designer telling the story of their work — not like AI-generated marketing copy.

### Step 6: Generate Filter Configuration
Create `data/case-studies/filters/{company-slug}.json`:
- Map case study IDs to visibility levels
- Set display order
- Apply format overrides per case study (in-depth for anchor stories, executive for supporting)
- Validate against `filter-schema.json`

### Step 7: Output Portfolio URL
Provide the portfolio URL for inclusion in the CV and cover letter:
```
treppmann.design/work?{company-slug}
```

### Step 8: Update Knowledge Base
Document the portfolio preparation in the verification log:
- Which case studies were recommended and why
- Any new case studies created
- Any existing case studies updated
- Filter configuration details

## Case Study Quality Checklist
Before marking any case study as `review` or `published`:
- [ ] Has a compelling title that poses a question or states a transformation
- [ ] Includes hero image (or placeholder with clear description)
- [ ] Has at least 3 narrative/process sections
- [ ] Includes outcome metrics or measurable results
- [ ] Has at least 2 image placeholders (screenshots expected)
- [ ] Passes writing quality gate — no AI slop
- [ ] Has an executive variant (2-min read)
- [ ] Related case studies are linked
- [ ] Confidentiality status is set

## Automation Notes
- This rule CAN be run independently: `@prepare-portfolio.mdc`
- If no job analysis exists, it will ask for a target company/role
- It can also be run as a maintenance pass: "check all case studies for completeness"
- New case study drafts should be reviewed by the user before status changes to `review`
