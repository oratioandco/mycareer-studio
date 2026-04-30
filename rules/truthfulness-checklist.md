
# WORKFLOW INTEGRATION
This checklist is automatically invoked as Step 1 of `generate-cv.mdc` and must be completed before any CV generation begins.

## CRITICAL UPDATE: ZERO EMBELLISHMENT POLICY
After system learning issues identified 2025-06-25, this checklist now enforces ABSOLUTE ZERO TOLERANCE for any enhancement, improvement, or embellishment of user-provided information. Every word must be traceable to exact user input.

# Rule: Truthfulness Verification Checklist

## Purpose
This checklist MUST be completed before any CV generation to ensure complete accuracy and prevent fabrication.

## Pre-Generation Verification

### Step 1: Data File Audit
**Check each section against source files:**

#### Personal Information
- [ ] Name matches `/data/personal-info.md` exactly
- [ ] Contact details verified in personal-info.md
- [ ] Professional title reflects actual experience level, not aspirational
- [ ] Location information accurate

#### Professional Summary
- [ ] Every claim traceable to experience files with EXACT language
- [ ] Years of experience calculated accurately from actual roles
- [ ] NO superlatives (proven, extensive, deep) unless exact user words
- [ ] NO action verbs stronger than user provided (e.g., "led" when user said "instrumental")
- [ ] Industry/domain experience matches actual background exactly
- [ ] NO synthesis of separate experiences into stronger combined claims

#### Experience Entries
For each role included:
- [ ] Job title matches actual title held EXACTLY (not idealized version)
- [ ] Company name and dates verified EXACTLY as documented
- [ ] Responsibilities use EXACT user language without enhancement
- [ ] Achievements based ONLY on documented outcomes with user's exact words
- [ ] Technologies/tools ONLY those explicitly mentioned by user
- [ ] NO paraphrasing that adds meaning not explicitly stated
- [ ] NO combination of related experiences to create stronger claims
- [ ] NO improvement of user's modest language (e.g., "helped with" → "led")

#### Skills Section
- [ ] All skills present in verified skill files
- [ ] Proficiency levels match evidence provided
- [ ] No skills claimed without supporting experience
- [ ] Methodology experience (Agile, Scrum) verified through actual roles

#### Education Section
- [ ] Only include if education data files exist
- [ ] Degrees, institutions, dates verified
- [ ] **IF NO EDUCATION FILES EXIST: OMIT SECTION ENTIRELY**

#### Projects Section
- [ ] All projects documented in `/data/projects/` files
- [ ] Timeline, budget, scope claims verified
- [ ] Role in project accurately represented

### Step 2: Cross-Reference Check
**Verify consistency across files:**
- [ ] Date ranges don't overlap impossibly
- [ ] Skill claims supported by role experience
- [ ] Company descriptions match actual context
- [ ] Achievement metrics based on documented evidence

### Step 3: Aspiration vs. Reality Check
**Ensure no forward-looking claims:**
- [ ] No "Senior" titles for fields user is transitioning into
- [ ] No expertise claims for emerging interests
- [ ] No project leadership claims without verified leadership role
- [ ] Clear distinction between "learning" and "experienced"

### Step 4: Conversation Integration Check
**Verify new information is documented:**
- [ ] All conversation details added to relevant data files
- [ ] Project information captured in project files
- [ ] Experience updates reflected in role files
- [ ] Skills verified and documented appropriately

## Fabrication Red Flags
**STOP GENERATION if any of these appear:**
- Education entries with no source files
- Job titles that don't match actual experience
- Technical skills without supporting role evidence
- Years of experience that don't add up
- Company descriptions not provided by user
- Project details not verified in conversation
- Achievement metrics without source documentation

## Verification Confirmation
Before generating CV, confirm:
- [ ] All information sourced from verified data files
- [ ] No assumptions made about background
- [ ] User would be comfortable defending every claim in interview
- [ ] CV represents actual experience, not aspirational goals
- [ ] Truthfulness prioritized over compelling presentation

## Documentation Requirement
Each CV generation must include:
- Source file reference for each claim
- Verification date for each data point
- Clear indication of any qualifying language used

**PRINCIPLE: Better to understate qualifications honestly than overstate them falsely.**
