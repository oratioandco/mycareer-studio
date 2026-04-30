
# Rule: Create Case Study

## Goal
Generate a complete, structured case study JSON from the knowledge base — pulling content from experience files, verification logs, and project documentation. The result is a draft case study ready for screenshot additions and user review.

## Prerequisites
- At least one experience file exists in `data/experiences/`
- Case study schema available at `data/case-studies/schema.json`
- Writing quality gate available at `rules/writing-quality-gate.md`

## When to Run
- As part of `prepare-portfolio.mdc` (automatic, for missing case studies)
- Independently via `@create-case-study.mdc` (user-initiated)
- As an update pass: `@create-case-study.mdc datameer` (enrich existing)

## Process

### Step 0: Identify Target
If run independently, ask:
1. "Which experience should this case study cover?" (list available from `data/experiences/`)
2. "Any specific angle or focus?" (optional — e.g., "focus on the AI workflow")

If run from `prepare-portfolio.mdc`, the target is already determined.

### Step 1: Load Source Material
Read and synthesize from:

1. **Experience file**: `data/experiences/{experience}.md`
   - Company context, responsibilities, achievements
   - IMPACT framework details
   - Cultural impact notes

2. **Verification log**: `data/verification-log/{job}-verification.md` (if exists)
   - STAR stories identified
   - Verified claims and evidence
   - Strategic positioning recommendations
   - Honest gaps acknowledged

3. **Project files**: `data/projects/{project}.md` (if relevant)
   - Technical details, stack, URLs
   - Status and verification

4. **Conversation context**: Any additional details from recent conversations stored in experience/project files with "Source: Conversation" annotations

### Step 2: Determine Case Study Structure
Based on the experience type and available material, choose:

| Experience Type | Primary Format | Section Flow |
|----------------|---------------|-------------|
| Major product redesign | `design-case-study` | hero → context → challenge → approach → outcome → gallery → reflection |
| Team/org building | `leadership-story` | hero → situation → approach → transformation → reflection |
| Measurable feature impact | `design-case-study` | hero → challenge → process → outcome (with metrics) → takeaway |
| AI/technical workflow | `technical-deep-dive` | hero → context → technical challenge → solution → result → code/demo |
| Strategy/consulting | `business-process` | hero → situation → analysis → recommendation → impact |
| Ongoing/current work | `executive-summary` | hero → context → key initiatives → early results |

### Step 3: Write Case Study Content

#### Title
- Pose a question OR state a transformation
- Max 80 characters
- ✅ "How do you make big data feel simple?"
- ✅ "From execution to strategy: Building a design function at Ninox"
- ❌ "Datameer Redesign Case Study"
- ❌ "UX Improvements for Analytics Platform"

#### Narrative Sections
Follow portfolio storytelling best practices:
1. **Start with the human problem**, not the company
2. **Build tension** — what was hard? What was at stake?
3. **Show the process** — how did you think about it?
4. **Deliver the outcome** — what changed? What evidence?
5. **Reflect** — what did you learn? Why does it matter?

**Writing quality gate is MANDATORY**:
- No AI slop — read every paragraph out loud
- No buzzwords, no filler intensifiers
- Concrete and specific
- Max 25 words per sentence in narrative sections
- German/European professional tone
- Honest about team size, scope, and limitations

#### Metrics
Include quantitative data where available:
- Percentage improvements
- Before/after states
- Team size, user count, market reach
- Time-to-completion changes

Where quantitative data isn't available, use qualitative outcomes honestly:
- "Design moved from execution-only to strategic partner"
- "Earned exec-sponsored research access into regulated environments"
- "Customers reported qualitatively different engagement"

#### Image Placeholders
For every key screen or artifact that should appear:
1. Create an image entry with a descriptive path
2. Write detailed alt text and caption
3. Note in the image description what the screenshot should show
4. Mark with a comment if it needs to be created or found in Figma

Example:
```json
{
  "src": "/images/datameer/uncertainty-feedback.png",
  "alt": "Sample uncertainty feedback showing confidence indicators in query preview",
  "caption": "Sample-uncertainty feedback — keeping users calibrated on data approximation vs full execution"
}
```

### Step 4: Create Format Variants
Generate at minimum an `executive` variant:
- Summary: 1-2 sentences, max 200 characters
- Angle: What's the one-sentence hook?
- Sections: Which 2-3 sections to include for a 2-minute read
- Max read time: "2 min"

Optionally create a `blog` variant if the story has a strong narrative angle.

### Step 5: Set Metadata
- `status`: `draft` (always start here)
- `last_updated`: today's date
- `meta.read_time_minutes`: estimate based on word count
- `meta.confidential`: true if the company/project is under NDA or contains sensitive data
- `meta.confidentiality_note`: explain what needs verification before publishing
- `meta.source`: list the source files used

### Step 6: Link Related Case Studies
Check other existing case studies and link IDs that share:
- Same company (different angle)
- Same skills demonstrated
- Same industry/domain
- Complementary narratives

### Step 7: Validate and Save
1. Validate the JSON against `data/case-studies/schema.json`
2. Save to `data/case-studies/{id}.json`
3. Report any validation errors
4. List required screenshots with descriptions

## Output Report
After creating/updating a case study, provide:

```markdown
## Case Study: {title}
**Status:** draft | **File:** data/case-studies/{id}.json

### Sections Created
- Hero ✅
- Context/Challenge ✅
- Approach ✅
- Outcome ✅
- Gallery ✅
- Reflection ✅

### Screenshots Needed
- [ ] hero-dashboard.png — "The redesigned analytics dashboard"
- [ ] pivot-table.png — "Big-data pivot table with aggregated JSON views"
- [ ] filter-logic.png — "Comprehensive filter system"
- [ ] uncertainty-feedback.png — "Sample-uncertainty feedback design"
- [ ] design-system.png — "Design system components in Figma"

### Variants
- ✅ Executive (2 min read)
- ✅ Blog (5 min read, angle: "sample uncertainty problem")

### Next Steps
1. Add screenshots from Figma
2. Review narrative for accuracy
3. Set status to `review` when ready
4. Create filter config for target application
```

## Updating an Existing Case Study
When run with an existing case study ID:
1. Read the current JSON
2. Check for new information in source files (look for "Source: Conversation" entries newer than `last_updated`)
3. Identify sections that could be enriched
4. Add new content without overwriting existing narrative
5. Update `last_updated` date
6. Report what changed

## Quality Checklist
- [ ] Title is engaging, not generic
- [ ] Opens with a human problem, not a company description
- [ ] Includes at least one moment of tension or difficulty
- [ ] Outcomes are honest — no embellishment
- [ ] At least 3 image placeholders with descriptions
- [ ] Executive variant exists
- [ ] Passes writing quality gate
- [ ] Related case studies linked
- [ ] Confidentiality assessed
