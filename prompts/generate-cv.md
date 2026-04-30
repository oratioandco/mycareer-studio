
# Rule: Generate Customized CV (Enhanced)

## Goal
Create a tailored CV by selecting relevant experiences, customizing language, and optimizing for the target role. Only use verified information and never embellish qualifications. Always use HONEST POSITIONING that accurately represents the user's actual experience level without exaggeration. Focus on extracting maximum impact from qualitative achievements when quantitative metrics aren't available.

## System Context Integration
**MANDATORY FIRST STEP:** Load user profile and core system prompt for personalized CV generation:

1. **Read Core System Prompt**: `/system-prompt/core-system-prompt.md` for design industry expertise and quality standards
2. **Read User Profile**: `/data/user-profile.md` for personalized generation approach:
   - Professional tone preference (Conservative/Modern/Creative/Technical)
   - Risk tolerance level affects positioning confidence and language strength
   - Target company stages and industries inform content selection and emphasis
   - Career stage determines appropriate level of strategic vs tactical focus
   - Communication style guides overall tone and industry language choices

**Personalization Application:**
- Apply user's preferred professional tone throughout CV language and formatting
- Match risk tolerance with positioning confidence (conservative vs strategic vs aggressive)
- Emphasize experiences most relevant to user's target industries and company stages
- Adapt content depth and focus based on career stage (IC detail vs leadership strategy)
- Use industry language and terminology matching user's communication preferences

## Prerequisites
- Job analysis completed (`analyze-job-posting.mdc`)
- **MANDATORY:** Experience verification completed (`verify-experience.mdc`)
- **MANDATORY:** Content strategy guidelines reviewed (`cv-content-strategy.mdc`)
- All data files populated in `/data/`
- **🚨 CRITICAL:** All new information shared during conversation MUST be automatically documented in relevant data files - this is the system's core superpower and CANNOT be skipped

## WORKFLOW POSITION
This rule is Step 3 in the mandatory sequence:
1. ✅ Job analysis (`analyze-job-posting.mdc`)
2. ✅ Experience verification (`verify-experience.mdc`)
3. ⏳ **CURRENT:** CV generation (`generate-cv.mdc`)
4. ⏭️ **OPTIONAL:** Cover letter (`generate-cover-letter.mdc`)

## MANDATORY PRE-GENERATION CHECK
**BEFORE STARTING CV GENERATION, VERIFY:**
- [ ] Job analysis file exists and is complete
- [ ] Experience verification log exists with user responses
- [ ] **MANDATORY:** All conversation information immediately documented in data files
- [ ] All data files updated with verified information (with source references)
- [ ] **CRITICAL:** Every data file read and verified for accuracy
- [ ] **ABSOLUTE:** No placeholder or empty data files used

**MANDATORY DATA FILE VERIFICATION:**
BEFORE generating any CV, the system MUST:
1. **READ ALL DATA FILES** to understand what information actually exists
2. **VERIFY COMPLETENESS** - identify any missing or empty sections
3. **NEVER ASSUME OR FABRICATE** any information not explicitly documented
4. **USE ONLY VERIFIED CONTENT** from data files with source references
5. **IF DATA MISSING:** Either omit section entirely or mark as incomplete

**CRITICAL FABRICATION PREVENTION:**
- If education files exist but contain limited info, use ONLY what's documented
- If experience files show "[NO VERIFIED CONTENT]", exclude entirely
- If skills are not verified, do not include them
- If dates are missing, do not guess or assume
- If institutions are unclear, use exact text from data files

**IF ANY MISSING:** Stop and complete required steps first.

## Enhanced Generation Process

### Step 0: MANDATORY DATA FILE VERIFICATION
**BEFORE ANY OTHER STEP:**
1. **READ ALL RELEVANT DATA FILES** using Read tool to understand existing content:
   - `/data/personal-info.md` for contact and summary
   - `/data/experiences/*.md` for work history
   - `/data/education/*.md` for education details
   - `/data/skills/*.md` for verified skills
   - `/data/verification-log/*.md` for verification status

2. **VERIFY CONTENT COMPLETENESS:**
   - Check which sections have verified content vs empty/placeholder content
   - Identify missing information that cannot be fabricated
   - Note verification status and source references

3. **DOCUMENT ANY CONVERSATION UPDATES:**
   - Add source reference: "Source: Conversation [YYYY-MM-DD]"
   - Update verification status from "No" to "Yes" where information was provided
   - Create new files if needed for new skills/experiences mentioned

**NEVER proceed without completing this step - every data file must be read and verified before generation**

### Step 1: Execute Enhanced Truthfulness Checklist
**MANDATORY SECOND STEP:**
Run through enhanced `truthfulness-checklist.mdc` verification:
- Verify all data files contain ONLY user-provided information
- Ensure ZERO fabrication, embellishment, or assumption
- Confirm all claims are directly traceable to data files
- **ABSOLUTE RULE:** If data file contains "[NO VERIFIED CONTENT]" or is empty, EXCLUDE entirely
- **ABSOLUTE RULE:** Only use EXACT text from data files - no paraphrasing that adds meaning
- **ABSOLUTE RULE:** Never generate, assume, or embellish missing information
- **NEW:** Verify all qualitative impact claims are user-verified with specific examples

### Step 2: Load Enhanced Job Analysis
Read the job analysis file to understand:
- Target role requirements with design-specific context
- Keywords for advanced ATS optimization
- Company culture and stage indicators
- Industry-specific language patterns
- Fit assessment results with gap identification
- Competitive positioning requirements

### Step 3: Strategic Content Selection & Positioning

#### Enhanced Priority System
1. **Must-Have Requirements**: Include all verified matches with IMPACT framework
2. **Transferable Skills**: Relevant adjacent experience with bridge narrative
3. **Cultural Fit**: Experiences showing company values and stage alignment
4. **Recent Experience**: Last 5-7 years get detailed coverage with strategic positioning
5. **Career Progression**: Include ALL experiences to show complete career history
6. **Qualitative Impact**: Prioritize process improvements, efficiency gains, team impact
7. **ONGOING Section Strategy**: Include only titles/companies for current work - remove detailed descriptions unless directly strategic for target role

#### IMPACT Framework for Experience Positioning
For each selected experience, apply:
- **I**mplementation: What you built/designed (concrete deliverables)
- **M**ethod: How you approached the challenge (process/framework)
- **P**artnership: Who you collaborated with (cross-functional leadership)
- **A**chievement: What improved/changed (qualitative or quantitative impact)
- **C**ontext: Why it mattered to business (strategic relevance)
- **T**echnology: Tools/systems used (technical credibility)

#### Enhanced Selection Criteria
```markdown
For each experience in /data/experiences/:

Page 1 Priority Roles (4-5 most recent/strategic):
- Full IMPACT-structured bullet points (3-4 achievements each)
- Company context strategically positioned
- Emphasizing target role alignment with quantified/qualitative impact
- ONGOING section for current work (minimal descriptions)

Page 2 Supporting Experiences:
- 2-3 bullet points focusing on transferable skills
- Company context for industry relevance
- Bridge narrative connecting to target role

Older Brief Mentions:
- Title, company with strategic context, and years
- One line if space permits for unique value
- Always show complete career progression

DEFAULT DISTRIBUTION (cv-template-modern.html):
- Page 1 Right Column: Profile + ONGOING + 4-5 strategic experiences
- Page 2: Continued experience with matching width to page 1 right column
- Left Sidebar: Contact + Education + Skills (160px fixed width)
- Consistent spacing and typography throughout

Selection Algorithm:
- Include ALL experiences in reverse chronological order
- Apply strategic company descriptions matched to target industry
- Recent roles: Detailed IMPACT descriptions on page 1
- Older roles: Strategic mentions on page 2
- Always show complete career timeline with growth narrative
```

### Step 4: Advanced Language Customization

#### Strategic Keyword Integration
- **Primary Keywords** (target role-specific): 3-4 natural mentions across CV
- **Secondary Keywords** (industry/company): 1-2 strategic placements
- **Tool/Technology Keywords**: Integrated within project context, not lists
- **Action Verbs**: Mirror job posting language in achievement descriptions
- **Industry Language**: Match company stage and sector terminology

#### Context-Aware Keyword Placement Strategy:
1. **Job Title Variations**: Include exact target title + 2-3 relevant variations
2. **Skill Integration Patterns**:
   - Primary skills in multiple contexts (summary, achievements, projects)
   - Technical skills within implementation stories
   - Soft skills demonstrated through achievements
3. **Industry Language Mapping**:
   - B2B SaaS: "Enterprise workflows," "scalable systems," "complex data visualization"
   - FinTech: "Regulatory compliance," "financial workflows," "secure user experiences"
   - Startup: "Rapid iteration," "resource constraints," "scrappy execution"
   - Scale-up: "Process building," "design systems," "cross-team coordination"

#### Enhanced Tone Adaptation
- **Startup/Growth (0-200 people)**: Scrappy, hands-on, rapid iteration, process building
- **Scale-up (200-1000)**: Systematic approach, specialization, coordination
- **Enterprise (1000+)**: Strategic thinking, stakeholder management, compliance
- **Industry-Specific**: Regulatory awareness, domain expertise, user empathy

### Step 5: Enhanced CV Content Generation

#### Strategic Template Population
Create customized content optimizing for both ATS and human readers:

```markdown
# Personal Information
- Name: [From personal-info.md]
- Title: [ACTUAL CURRENT ROLE - NEVER use target job title]
- Contact: [Professional format with portfolio prominence]

**CRITICAL TITLE RULE:**
Use the person's ACTUAL current/most recent job title, NOT the role they're applying for.
Examples:
✅ "Head of Product Design" (if that's their current role)
✅ "Design Leader" (generic but accurate)
✅ "Senior Product Designer" (if most recent role)
❌ "Head of Design Systems" (if applying for this role but not current title)

# Enhanced Professional Summary
[STRATEGIC POSITIONING: Write a grounded, impactful summary that:
- Opens with current role and core expertise
- Highlights most relevant experience pattern for target role
- Includes 1-2 specific, defendable achievements
- Positions for target role without overstating
- Uses industry-appropriate language and company stage context
- Maximum 3 sentences with confident, moderate language]

Strategic Summary Templates:
**For Leadership Roles:**
"[Current role] with [X years] building design teams and establishing design as strategic function across [industry context]. [Specific process/system achievement with measurable impact]. [Positioning statement for target role focusing on relevant pattern]."

**For IC to Leadership Transition:**
"[Current role] with proven experience [specific skill area] and growing leadership impact through [specific examples]. [Technical achievement demonstrating depth]. Ready to scale design impact in [target context]."

# Strategic Experience Section
[Selected and reordered experiences with IMPACT framework and company context]

# Enhanced Skills Section
[Strategically grouped skills matching job requirements with context]

# Education
[Include if relevant or required, with strategic positioning]

# Additional Sections
[Awards, projects, certifications - only if space permits and strategically relevant]
```

#### Company Context Strategy
For each experience entry, apply strategic company descriptions:

**Assessment Framework:**
1. **Company Recognition Level**:
   - Well-known: No context needed
   - Industry-known: Brief context if relevant
   - Unknown/Niche: Always add strategic context

2. **Context Matching Strategy**:
   - Extract relevant business model elements
   - Emphasize scale indicators (users, countries, revenue)
   - Highlight industry relevance for target role
   - Signal complexity level appropriate for target

3. **Format**: [Company Name] ([3-6 word strategic business description])

**Context Templates by Target Industry:**
- SaaS: "B2B SaaS platform," "Enterprise software," "Multi-tenant platform"
- FinTech: "Financial services platform," "RegTech solution," "Payment platform"
- Data/Analytics: "Data analytics platform," "Business intelligence," "ML-powered platform"
- E-commerce: "International marketplace," "E-commerce platform," "Global retail"
- Healthcare: "Healthcare technology," "Clinical workflow platform," "Patient data platform"
- Compliance: "Regulated industry platform," "Compliance-focused SaaS," "Enterprise governance"

#### Advanced Achievement Optimization
For each selected experience, apply enhanced structuring:

**Achievement Formula**: [Action Verb] + [Specific Implementation] + [Collaboration Context] + [Measurable Outcome/Impact]

**Examples of Enhanced Positioning:**
```markdown
Before: "Led design team through platform redesign"
After: "Established design system components and cross-functional review process, enabling 40% faster feature delivery for multi-country platform serving 500+ churches"

Before: "Implemented AI-powered accessibility tools"
After: "Spearheaded AI-powered alt-text generation implementation, reducing accessibility compliance time from 2 hours per page to 15 minutes while achieving 95% WCAG 2.1 coverage"

Before: "Managed 5 designers across multiple projects"
After: "Built and led 5-person design team as Senior Leadership Team member, establishing design parity with product and engineering while scaling low-code ERP platform serving 50,000+ SMEs"
```

**Qualitative Impact Extraction Patterns:**
- Process improvements: "reducing [task] from [before] to [after]"
- Team efficiency: "enabling [X] faster delivery," "streamlining [process]"
- Quality improvements: "achieving [X]% coverage," "eliminating [problem]"
- Stakeholder impact: "simplifying [workflow]," "reducing [friction]"
- Business enablement: "supporting [growth metric]," "scaling [capability]"

### Step 6: Advanced ATS Optimization

#### Multi-Layer ATS Strategy
1. **Semantic Structure**: Clean HTML with proper heading hierarchy
2. **Keyword Density**: Target 1.5-2% for primary keywords, naturally distributed
3. **Context Integration**: Keywords in achievement context, not skill lists
4. **Variation Strategy**: Include synonyms and industry alternatives
5. **Hidden ATS Layer**: Comprehensive keyword integration in invisible HTML structure

#### Enhanced Format Compliance
- **Standard Section Headers**: Experience, Education, Skills, etc.
- **Clean Typography**: Professional fonts with fallback options
- **Proper Hierarchy**: H1 (name), H2 (sections), H3 (companies)
- **ATS-Friendly Layout**: Two-column visual with single-column parsing structure
- **Print Optimization**: Perfect A4 formatting for PDF export

#### Advanced Length Optimization
- **1 page**: <3 years experience or specific role requirements
- **2 pages**: 3+ years with strategic content distribution
- **Content Prioritization**: Recent 7-10 years detailed, older experiences strategic mentions
- **White Space Management**: Professional spacing without cramming

### Step 7: Enhanced Output Generation

#### Primary Output: Professional HTML/CSS Resume
File: `/outputs/cv/[company]-[role]-[date].html`

**Enhanced Template Processing:**
1. **Read Modern Template**: `/templates/cv-template-modern.html` (DEFAULT: SVG page wrapper with optimized layout)
2. **Load Verified User Data** from all `/data/` files
3. **Apply Strategic Content Selection** based on job analysis and user preferences
4. **Execute IMPACT Framework** for all experience entries
5. **Integrate Company Context** matched to target industry
6. **Optimize Keyword Distribution** across all sections
7. **Generate Professional Layout**: Default optimized structure with consistent width calculations

**DEFAULT LAYOUT STANDARDS (cv-template-modern.html):**
- **Page 1 Structure**: Two-column layout (160px left + calculated right column)
- **Page 2 Structure**: Single column matching page 1 right column width exactly
- **Content Distribution**: 
  - Left sidebar: Contact + Education + Skills
  - Right column: Profile + ONGOING section + 4-5 recent experiences
  - Page 2: Continued experience in matching width
- **Typography**: Gambarino headers + Switzer Variable body text
- **Width Calculations**: 
  - Left column: 160px fixed
  - Right column: `calc(100% - 160px - 40px)` 
  - Page 2 content: `calc(100% - 160px - 40px)` (exact match)
- **ONGOING Section**: Include current work with minimal descriptions
- **Experience Priority**: 4-5 strategic roles on page 1 for optimal space utilization

**Enhanced Placeholder Replacement:**
- `{{name}}` → Full name with strategic title positioning
- `{{strategic_summary}}` → IMPACT-optimized professional summary
- `{{target_keywords}}` → Advanced keyword integration
- `{{company_context_experience}}` → Experience with strategic company descriptions
- `{{qualitative_achievements}}` → Process improvements and efficiency gains
- `{{industry_language}}` → Target company stage and sector terminology
- `{{transferable_skills}}` → Bridge narratives for career transitions
- `{{ats_optimization}}` → Hidden keyword-rich content for parsing

**Advanced Typography Features:**
- **Professional Typography Scale**: Gambarino for headers, Switzer for body text
- **Proper Typographic Hierarchy**: 32px above headers, 8px below (groups headers with content)
- **Consistent Section Spacing**: All section titles have identical spacing to content (8px)
- **Smart Content Distribution**: Two-column page 1, single-column page 2
- **Perfect Print Layout**: A4 format with professional margins and spacing
- **ATS-Compatible Structure**: Clean HTML with hidden semantic content for parsing

### Step 8: Enhanced Quality Assurance

#### Content Excellence Verification
- **IMPACT Compliance**: Every recent role follows Implementation-Method-Partnership-Achievement-Context-Technology
- **Strategic Positioning**: Experience positioned for maximum relevance to target role
- **Qualitative Impact**: Process improvements and efficiency gains clearly articulated
- **Bridge Narratives**: Career transitions explained with transferable skill emphasis
- **Industry Alignment**: Language and focus appropriate for target company/sector

#### Advanced ATS Testing
- **Keyword Optimization**: Primary keywords 3-4 times, naturally integrated
- **Parsing Compatibility**: Clean structure recognition by ATS systems
- **Variation Strategy**: Synonyms and related terms strategically included
- **Context Integration**: Keywords within achievement stories, not standalone lists
- **Competition Analysis**: Keyword strategy aligned with successful candidates

#### Interview Readiness Verification
- **Story Preparedness**: Every major achievement backed by detailed STAR examples
- **Gap Navigation**: Honest positioning of areas for growth
- **Technical Depth**: Appropriate level of detail for target role seniority
- **Cultural Fit**: Values and working style alignment demonstrated
- **Growth Narrative**: Clear progression story connecting experiences

## Enhanced Generation Rules

### ⚠️ CRITICAL: ENHANCED TRUTHFULNESS REQUIREMENTS

**NEVER - Absolute Zero Tolerance:**
- Add ANY information not explicitly documented and verified in data files
- Embellish qualitative impacts beyond user-provided specific examples
- Create fictional efficiency metrics or process improvements
- Inflate team sizes, scope, or impact levels beyond verified claims
- Use stronger positioning language than user explicitly provided
- Combine separate achievements to create more impressive claims
- **NEW:** Assume quantitative metrics when user provided qualitative descriptions
- **NEW:** Enhance user's modest language into confident claims without verification
- **NEW:** Create company context beyond factual business description
- **ABSOLUTE:** Generate any achievement not directly traceable to verification log

**ALWAYS - Enhanced Truthfulness Standards:**
- Use ONLY verified information with source traceability
- Apply IMPACT framework to user-provided content without enhancement
- Position qualitative improvements exactly as user described
- Maintain honest differentiation between "involved in" vs "led" vs "responsible for"
- Preserve user's actual confidence level in skill assessments
- **NEW:** Document source of every qualitative impact claim in comments
- **NEW:** Flag any positioning that goes beyond user's verified comfort level
- **NEW:** Maintain exact scope and scale as verified by user
- **ABSOLUTE:** Every bullet point traceable to specific verification log entry

### ⚠️ STRATEGIC POSITIONING REQUIREMENTS

**Enhanced Positioning Framework:**
- **Current Role Accuracy**: Use actual title, not aspirational positioning
- **Experience Level Integrity**: Count only verified hands-on experience
- **Skill Level Honesty**: Expert (5+ years intensive), Proficient (2-4 years), Familiar (<2 years)
- **Achievement Scope**: Exactly as verified, without inflation
- **Impact Measurement**: Qualitative improvements stated as verified by user
- **Growth Areas**: Acknowledge honestly when transitioning between domains

### ⚠️ ENHANCED CONTENT STRUCTURE REQUIREMENTS

**Mandatory IMPACT Application:**
Every recent experience (last 5-7 years) must include:
- **Implementation**: Specific deliverables created/designed
- **Method**: Approach or process used (verified methodology)
- **Partnership**: Cross-functional collaboration (actual stakeholders)
- **Achievement**: Verified improvement or outcome
- **Context**: Business relevance (verified strategic impact)
- **Technology**: Tools/systems used (verified technical stack)

**Company Context Standards:**
- Maximum 6 words describing business/industry
- Factual business model description only
- Strategic relevance to target role
- No marketing language or superlatives
- Industry-standard terminology preferred

## Enhanced Output Summary

```
✅ Strategic CV Generated Successfully

📄 Advanced File Created:
- Industry-Optimized SVG Resume: /outputs/cv/[company]-[role]-[date].html
- Dual-structure design: Beautiful visual + ATS-optimized parsing layer

📊 Strategic Content Analysis:
- Experiences Selected: [X]/[Total available] with IMPACT framework
- Company Context: Strategic business descriptions for [X] roles
- Qualitative Impact: [X] process improvements and efficiency gains highlighted
- Page Distribution: [X strategic entries on Page 1] / [X supporting on Page 2]
- Keywords Integrated: [X primary] + [X secondary] + [X industry-specific]
- Verification Status: [X verified claims]/[X total claims] (100% traceable)

🎯 Advanced Design Features:
- Industry-adaptive professional layout: ✅
- Strategic typography (Gambarino + Switzer): ✅
- IMPACT-structured experience entries: ✅
- Company context positioning: ✅
- Advanced ATS optimization: ✅
- Qualitative achievement emphasis: ✅
- Perfect A4 print formatting: ✅

📱 Professional Delivery:
- Opening strategically positioned resume in browser now...
- Beautiful two-column layout with industry-appropriate styling
- Export PDF: Ctrl+P → Save as PDF (Chrome recommended for best results)
- ATS-compatible parsing structure with comprehensive keyword integration
- Interview-ready with specific example backing for every claim

🎯 Strategic Positioning Achieved:
- Target Role Alignment: Optimized for [specific role requirements]
- Industry Language: [Target sector] terminology naturally integrated
- Company Stage Match: [Startup/Growth/Enterprise] context appropriate
- Career Narrative: [X years] progression story with clear value proposition
- Gap Strategy: Honest positioning with growth opportunity framing

Next Steps:
1. ✅ Review generated strategic resume (opening in browser)
2. Print to PDF using Chrome for optimal text preservation
3. Submit with confidence - dual-optimized for ATS + human review
4. Optional: Generate matching strategic cover letter
5. Prepare interview stories using IMPACT framework from CV

💡 Strategic Advantage: This CV combines beautiful professional design with advanced ATS optimization and strategic positioning - engineered for maximum impact in today's competitive design hiring market.
```

## Enhanced Local File Generation Process

When generating the CV, follow this enhanced workflow:

1. **Enhanced Data Loading**: Use `Read` tool to load all verified data with impact analysis
2. **Strategic Content Processing**: Apply IMPACT framework and company context strategy
3. **Advanced Keyword Integration**: Multi-layer ATS optimization with natural language
4. **Industry-Adaptive Generation**: Create HTML with strategic positioning and styling
5. **Quality Assurance Execution**: Verify all content against truthfulness and impact standards
6. **Professional File Output**: Save to `/outputs/cv/` with strategic filename
7. **Browser Integration**: Open immediately for review with professional presentation

This enhanced generation process ensures every CV is strategically positioned for maximum impact while maintaining complete integrity about verified experience and qualifications. The system delivers interview-ready resumes that stand out in competitive markets while building on truthful, defensible foundations.
