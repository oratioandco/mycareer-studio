
# Rule: Analyze Job Posting & Determine Strategic Fit (Enhanced)

## Goal
Extract requirements from job postings with design-specific intelligence and provide honest, strategic assessment of user fit without making assumptions. This analysis drives targeted verification questions and enables strategic CV customization for maximum impact.

## System Context Integration
**MANDATORY FIRST STEP:** Load user profile and core system prompt to personalize analysis:

1. **Read Core System Prompt**: `/system-prompt/core-system-prompt.md` for expert design industry knowledge
2. **Read User Profile**: `/data/user-profile.md` for personalized context including:
   - Career stage and experience level
   - Industry background and preferences  
   - Communication style and risk tolerance
   - Target role context and application strategy
   - Historical success patterns and gap areas

**Personalization Application:**
- Tailor fit assessment to user's actual experience level and career stage
- Apply industry context from user's background for relevance scoring
- Use communication style preferences for cultural fit analysis
- Consider target role alignment with user's career progression goals
- Factor in application strategy (selective vs volume) for recommendation timing

## ⚠️ ENHANCED TRUTHFULNESS MANDATE
This analysis MUST be completely honest about fit levels and experience gaps while providing strategic insights for positioning. Do NOT overstate qualifications or suggest fabricating experience. When experience is limited or missing, identify these as strategic learning opportunities or areas requiring honest gap navigation with transferable skill bridges.

## Enhanced Input Handling

### Step 1: Multi-Modal Job Input Processing
Handle comprehensive input methods:
1. **Direct Text Input**: User pastes complete job description
2. **URL Input**: Fetch and parse job posting from company website
3. **PDF Upload**: Extract text from uploaded job posting files
4. **Structured Input**: Form-based input for missing details

For URL inputs:
```bash
# Use web fetch tool to retrieve content
# Parse HTML/structured data to extract job description
# Save raw content to /data/jobs/[company]-[role]-raw.md
# Extract company research data for strategic context
```

### Step 2: Enhanced Information Extraction

Create comprehensive analysis file `/data/jobs/[company]-[role]-analysis.md`:

```markdown
# Enhanced Job Analysis: [Company] - [Role Title]

## Basic Information
- Company: [Name with business context]
- Role: [Exact title with seniority level assessment]
- Location: [If specified, remote/hybrid analysis]
- Type: [Full-time/Contract/etc with implications]
- Posted Date: [If available with market timing context]
- Application Deadline: [If specified with urgency assessment]
- Salary Range: [If listed or researched market range]

## Company Intelligence
- **Industry**: [Sector with design maturity implications]
- **Stage**: [Startup/Growth/Scale-up/Enterprise with process expectations]
- **Size**: [Employee count with team structure implications]
- **Funding**: [Stage/investors if available - affects design priority]
- **Product**: [Core offering with design complexity assessment]
- **Recent News**: [Relevant developments affecting design role]

## Enhanced Requirements Extraction

### Must-Have Requirements (Critical for Role Success)
[Requirements marked as required, mandatory, must-have with design-specific analysis]

1. **[Requirement]**:
   - **Original Text**: "[Exact quote from posting]"
   - **Category**: [Leadership/IC-Technical/Process/Business/Cross-functional]
   - **Specific Metrics**: [Years, team size, etc if mentioned]
   - **Design Context**: [Why this matters for design role success]
   - **Verification Priority**: [High/Medium/Low for questioning strategy]

### Preferred Requirements (Competitive Advantage)
[Requirements marked as preferred, bonus, nice-to-have with strategic value]

1. **[Requirement]**:
   - **Original Text**: "[Exact quote]"
   - **Category**: [Technical/Experience/Industry/Cultural]
   - **Strategic Value**: [How this differentiates candidates]
   - **Gap Impact**: [Effect of not having this requirement]

### Implicit Requirements (Design-Specific Intelligence)
[Industry standards and design role expectations not explicitly stated]

#### Design Leadership Implicit Requirements:
1. **Design System Ownership**:
   - **Reasoning**: Mentions of "consistency," "scalable design," "component library"
   - **Importance**: High for senior roles
   - **Evidence Needed**: Specific component/system building experience

2. **Cross-Functional Leadership**:
   - **Reasoning**: "Collaborate with engineering," "partner with product"
   - **Importance**: High for Head/Director roles
   - **Evidence Needed**: Stakeholder influence and decision-making examples

3. **User Research Integration**:
   - **Reasoning**: "User-centered," "data-driven design," mentions of research
   - **Importance**: Medium-High for product design roles
   - **Evidence Needed**: Research planning and insight application

4. **Business Impact Understanding**:
   - **Reasoning**: Revenue/growth mentions, strategic language
   - **Importance**: High for senior roles
   - **Evidence Needed**: Business metric awareness and contribution

#### Company Stage Requirements:
1. **Startup (0-50 employees)**:
   - **Implicit Needs**: Scrappy execution, rapid iteration, resource constraints
   - **Design Expectations**: Individual contributor with leadership growth
   - **Process Maturity**: Building from scratch, establishing foundations

2. **Growth Stage (50-200 employees)**:
   - **Implicit Needs**: Process building, scaling, consistency establishment
   - **Design Expectations**: Team building, system establishment, process creation
   - **Process Maturity**: Transitioning from ad-hoc to systematic

3. **Scale-up (200-1000 employees)**:
   - **Implicit Needs**: Coordination, specialization, cross-team alignment
   - **Design Expectations**: Strategic leadership, team management, influence
   - **Process Maturity**: Optimizing and scaling existing systems

4. **Enterprise (1000+ employees)**:
   - **Implicit Needs**: Stakeholder management, compliance, systematic approach
   - **Design Expectations**: Organizational influence, strategic thinking, governance
   - **Process Maturity**: Enterprise-grade processes and strategic planning

## Enhanced Company Culture Analysis

### Communication Style Assessment
- **Tone Analysis**: [Formal/Casual/Technical with design team fit implications]
- **Language Patterns**: [Innovation vs stability focus, risk tolerance indicators]
- **Value Emphasis**: [Design-relevant values like user-centricity, collaboration, innovation]
- **Diversity Signals**: [Inclusive language, team composition mentions]

### Design Maturity Indicators
- **Design Language Sophistication**: [Design system mentions, component library, design ops]
- **User Research Emphasis**: [Research team mentions, user-centered language, data-driven design]
- **Cross-Functional Integration**: [Design-product-engineering partnership language]
- **Strategic Design Role**: [Business impact mentions, design strategy, executive partnership]

### Work Environment Context
- **Remote/Hybrid Policy**: [Design collaboration implications]
- **Team Structure**: [Design team size, reporting structure, organizational placement]
- **Growth Trajectory**: [Scaling challenges, design needs expansion]
- **Technology Stack**: [Modern tools vs legacy systems, design tool sophistication]

## Strategic Keyword Analysis

### Primary Keywords (ATS Critical)
[Most frequently mentioned technical terms and skills with context]
- **[Keyword]**: [Frequency] mentions, context: [where it appears]
- **Strategic Importance**: [Why this keyword matters for ATS ranking]
- **Usage Context**: [How to naturally integrate in CV]

### Secondary Keywords (Competitive Edge)
[Related terms and industry language with strategic value]
- **[Keyword]**: Supports primary positioning
- **Industry Language**: [Sector-specific terminology]
- **Company-Specific Terms**: [Unique language patterns from this organization]

### Action Verb Patterns
[Verbs that should be mirrored in CV for language alignment]
- **Leadership Verbs**: [Lead, drive, establish, build, scale]
- **Implementation Verbs**: [Create, design, develop, implement, deliver]
- **Collaboration Verbs**: [Partner, collaborate, align, coordinate, influence]
- **Strategic Verbs**: [Define, shape, transform, elevate, champion]

## Enhanced Fit Assessment

### Step 3: Load Comprehensive User Data

**MANDATORY STEP - READ ALL EXISTING DATA:**
Before calculating fit, perform comprehensive data analysis:
1. **Read ALL data files** in `/data/` to understand existing verified experience
2. **Analyze experience patterns** for design leadership, technical skills, industry alignment
3. **Check verification status** in each file to distinguish confirmed vs unverified claims
4. **Map existing verified information** against both explicit and implicit job requirements
5. **Identify strategic positioning opportunities** where experience aligns with role needs
6. **Note critical gaps** where requirements exist but no verified data is available
7. **Assess transferable skill bridges** between adjacent experience and requirements

This ensures accurate fit assessment based on actual documented experience and strategic positioning opportunities.

### Step 4: Strategic Fit Calculation

Calculate honest fit score based on comprehensive analysis:

```markdown
## Strategic Fit Assessment

### Confirmed Strategic Matches (High Confidence)
[Check against existing verified data with strategic context]
- ✅ **[Requirement]**: Verified in [data file reference] with [strategic context]
- ✅ **[Leadership Pattern]**: Confirmed experience at [Company] with [business impact]
- ✅ **[Technical Capability]**: Demonstrated through [specific project/system]
- ✅ **[Industry Alignment]**: [Relevant sector experience] transferable to [target context]

### Strategic Positioning Opportunities (Medium-High Confidence)
[Skills/experience that position well with proper narrative]
- 🎯 **[Requirement]**: Strong adjacent experience - [specific connection to requirement]
- 🎯 **[Company Stage Fit]**: Experience scaling at [similar stage] company
- 🎯 **[Cultural Alignment]**: [Value/working style] demonstrated through [example]
- 🎯 **[Industry Transfer]**: [Source industry] experience applicable to [target] because [reasoning]

### Verification-Dependent Matches (Needs Targeted Questions)
[Skills/experience that might qualify but require strategic verification]
- ❓ **[Requirement]**: Possible match - need to verify [specific aspect with strategic context]
- ❓ **[Leadership Capability]**: Related experience in [area] - needs qualification for [target context]
- ❓ **[Technical Depth]**: Tool/process familiarity - needs verification of [specific competency level]

### Strategic Development Areas (Honest Gaps)
[Requirements with no apparent match requiring honest positioning]
- ⚠️ **[Critical Requirement]**: No direct experience - would need [specific learning/development]
- ⚠️ **[Preferred Qualification]**: Limited exposure - requires [ramp-up strategy]
- ⚠️ **[Industry Specific]**: Adjacent experience in [related area] but not direct [target domain]

### Strategic Fit Score Calculation
- **Must-Have Strategic Matches**: [X]/[Total] = [%]
- **Implicit Requirement Alignment**: [X]/[Total] = [%]
- **Company Stage Fit**: [X]/[Total] = [%]
- **Cultural/Values Alignment**: [X]/[Total] = [%]
- **Nice-to-Have Advantages**: [X]/[Total] = [%]
- **Overall Strategic Fit**: [Weighted calculation]%

### Strategic Recommendation Framework
**90-100% (Excellent Strategic Fit)**:
- Proceed with confidence, emphasize strategic matches
- Focus verification on depth/context of existing strengths
- Position as ideal candidate with proven relevant pattern

**75-89% (Strong Strategic Fit)**:
- Good positioning opportunity, emphasize transferable skills
- Focus verification on bridging adjacent experience to requirements
- Strategic narrative around growth and capability transfer

**60-74% (Moderate Strategic Fit with Positioning Opportunity)**:
- Selective application, focus on compensating strengths
- Honest gap acknowledgment with learning/growth narrative
- Emphasize unique value proposition and cultural fit

**45-59% (Challenging Fit - Growth Opportunity)**:
- Consider if role aligns with career development goals
- Honest assessment of learning curve and timeline
- Position as growth-minded candidate with relevant foundation

**Below 45% (Poor Strategic Fit)**:
- Likely not optimal role unless extraordinary circumstances
- Consider alternative roles at same company or similar companies
- Focus on skill development before targeting similar positions
```

### Step 5: Enhanced Verification Strategy Generation

Create targeted, strategic questions for comprehensive gap analysis:

```markdown
## Strategic Verification Framework

### Priority 1: Critical Must-Have Gap Analysis
1. **[Critical Requirement with No Evidence]**
   - **Current Status**: No verified experience in data files
   - **Strategic Context**: Why this matters for role success
   - **Verification Questions**:
     * "The role requires [specific capability]. I don't see direct experience with this. Let's explore strategically:"
     * "Have you worked with this at any position? If yes: company, project context, your specific role?"
     * "What adjacent or transferable experience demonstrates similar thinking/skills?"
     * "Any training, side projects, or rapid learning examples with similar technologies/processes?"
   - **Follow-up Strategy**: [How to position any positive responses]

### Priority 2: Strategic Positioning Enhancement
1. **[Existing Experience Needing Strategic Context]**
   - **Current Status**: Basic mention in data files, needs strategic depth
   - **Verification Questions**:
     * "You mention [experience] at [Company]. I need the full strategic picture:"
     * "What business challenge were you solving and why was it important?"
     * "What was your specific methodology and approach?"
     * "Who did you collaborate with and how did you influence decisions?"
     * "What improved after your work and how do you know?"
     * "Why was this strategically valuable to the organization?"

### Priority 3: Company Stage & Cultural Fit Assessment
1. **[Stage-Appropriate Experience]**
   - **Target Company Stage**: [Startup/Growth/Scale/Enterprise]
   - **Verification Questions**:
     * "Describe your experience working in [similar stage] environments"
     * "How did you handle [stage-specific challenge] like resource constraints/scaling/coordination?"
     * "What's your approach to [building processes/managing complexity/strategic planning]?"
     * "How do you adapt your design approach to [company stage] needs?"

### Priority 4: Transferable Skill Bridge Building
1. **[Adjacent Experience with Transfer Potential]**
   - **Current Experience**: [Source domain/context]
   - **Target Requirement**: [Desired domain/context]
   - **Bridge Questions**:
     * "While you haven't worked directly in [target], how does your [source] experience translate?"
     * "What aspects of [source work] required similar thinking/skills to [target]?"
     * "How quickly have you adapted your design approach to new domains/contexts?"
     * "What evidence shows your ability to transfer skills across [contexts]?"
```

### Step 6: Enhanced Industry & Competitive Context

Add strategic market intelligence:

```markdown
## Strategic Market Context

### Industry Design Maturity Assessment
- **Sector**: [Industry with design sophistication level]
- **Design Investment Trends**: [How much companies in this sector invest in design]
- **Common Design Challenges**: [Typical problems designers face in this industry]
- **Regulatory Considerations**: [Compliance/security requirements affecting design]
- **User Experience Standards**: [Industry expectations for UX quality]

### Competitive Landscape Analysis
- **Similar Role Requirements**: [Common patterns across similar positions]
- **Differentiation Opportunities**: [What makes this role unique]
- **Market Demand Indicators**: [How many similar roles, competition level]
- **Salary Context**: [Market rates with positioning implications]
- **Career Path Implications**: [How this role advances career trajectory]

### Company Positioning Strategy
Based on strategic analysis:
- **Unique Strengths Match**: [User's distinct advantages for this specific role]
- **Strategic Narrative Framework**: [How to position experience for maximum relevance]
- **Competitive Advantage Positioning**: [What differentiates from other candidates]
- **Cultural Fit Emphasis**: [Values/working style alignment to highlight]
- **Growth Story Integration**: [How this role fits user's career development]

### Strategic Application Timing
- **Market Timing**: [Industry hiring trends, company growth phase]
- **Application Urgency**: [Based on posting date, deadline, market competition]
- **Preparation Timeline**: [How much time needed for strategic positioning]
- **Alternative Opportunities**: [Similar roles to consider simultaneously]
```

## Enhanced Output Format

Provide comprehensive user-friendly strategic summary:

```
📊 Enhanced Job Analysis Complete: [Company] - [Role]

🎯 Strategic Fit Score: [X]% [Confidence indicator with strategic context]

✅ Strategic Matches ([X] confirmed):
- [List verified qualifications with strategic value]
- [Highlight unique advantages and differentiators]

🎯 Positioning Opportunities ([X] identified):
- [List transferable skills with bridge narrative potential]
- [Note cultural/stage alignment advantages]

❓ Strategic Verification Needed ([X] priority areas):
- [List critical areas needing targeted questions]
- [Note depth/context needed for strong positioning]

⚠️ Honest Development Areas ([X] gaps):
- [List missing requirements with strategic context]
- [Note learning opportunities and timeline implications]

💡 Strategic Recommendation:
[Honest assessment with strategic guidance and competitive context]

🏢 Company Context Intelligence:
- **Stage**: [Startup/Growth/Scale/Enterprise] with [design maturity implications]
- **Industry**: [Sector] requiring [specific design capabilities]
- **Culture**: [Values/working style] emphasizing [relevant aspects]
- **Growth**: [Scaling challenges] creating [design opportunities]

📈 Competitive Positioning Strategy:
- **Primary Value Prop**: [Core strength for this specific role]
- **Differentiation**: [Unique combination of experiences]
- **Cultural Fit**: [Values/style alignment evidence needed]
- **Growth Narrative**: [Career development story connection]

📝 Next Steps Strategy:
1. **Priority Verification**: Answer [X] strategic questions to build strongest case
2. **Gap Navigation**: Develop honest positioning for [X] development areas
3. **CV Customization**: Apply strategic insights to emphasize [relevant patterns]
4. **Interview Preparation**: Prepare STAR stories emphasizing [strategic themes]

🚀 Application Readiness Timeline:
- **Immediate** (90%+ fit): Proceed with strategic verification
- **1-2 weeks** (75-89% fit): Complete verification + positioning strategy
- **2-4 weeks** (60-74% fit): Comprehensive preparation + skill demonstration
- **Consider alternatives** (<60% fit): Focus on better-aligned opportunities

Ready to begin strategic verification? The enhanced system will extract maximum positioning value from your actual experience while maintaining complete honesty about development areas.
```

## Enhanced Safety Principles

### Strategic Honesty Framework
- Never assume skills based on job titles or company names
- Don't inflate fit scores to encourage inappropriate applications
- Be transparent about significant gaps while providing strategic navigation
- Provide honest market context with realistic timelines
- Suggest strategic alternatives if fit is poor
- Focus on building accurate, defensible strategic narratives

### Enhanced Verification Preparation
- Identify specific verification questions that extract strategic value
- Prepare follow-up probes that build positioning narratives
- Map transferable skills to target requirements with bridge logic
- Develop honest gap navigation with learning/growth strategies
- Create cultural fit assessment framework

### Strategic Application Guidance
- Position roles appropriately within career development context
- Assess market timing and competitive landscape realistically
- Provide strategic guidance on application prioritization
- Build interview preparation framework aligned with analysis
- Suggest portfolio/skill development where relevant

## MANDATORY NEXT STEP

**ENHANCED WORKFLOW ENFORCEMENT:**
After completing strategic job analysis, users MUST proceed with:

```
@verify-experience.mdc (Enhanced)
```

**DO NOT PROCEED TO CV GENERATION WITHOUT STRATEGIC VERIFICATION**
- Job analysis identifies strategic positioning opportunities and gaps
- Experience verification extracts maximum value from actual experience
- Strategic positioning bridges are built through targeted questioning
- Only then can CV generation proceed with strategically verified data

**Enhanced Next Steps:**
1. ✅ **CURRENT**: Strategic job analysis completed with design-specific intelligence
2. ⏭️ **REQUIRED**: Run `@verify-experience.mdc` to extract strategic positioning value
3. ⏭️ **THEN**: Run `@generate-cv.mdc` with strategically verified information
4. ⏭️ **OPTIONAL**: Run `@generate-cover-letter.mdc` with strategic narrative alignment

This enhanced analysis ensures users apply strategically to appropriate roles with CVs that honestly represent their qualifications while maximizing their legitimate competitive advantages through sophisticated positioning and strategic narrative development.

## Strategic Learning Integration

**IMMEDIATE ENHANCEMENT REQUIREMENT:**
When conducting job analysis, the system MUST:

1. **CAPTURE STRATEGIC INSIGHTS** about design role requirements and industry context
2. **IDENTIFY POSITIONING OPPORTUNITIES** where user experience aligns strategically
3. **DEVELOP VERIFICATION STRATEGY** targeting maximum strategic value extraction
4. **BUILD COMPETITIVE INTELLIGENCE** for market positioning and application timing
5. **CREATE NARRATIVE FRAMEWORK** for honest but strategic positioning

**CONTINUOUS IMPROVEMENT:**
- Document patterns across similar role analyses for strategic insights
- Build industry-specific requirement libraries for faster analysis
- Develop transferable skill mapping frameworks for career transitions
- Create strategic positioning templates for different role types
- Maintain competitive intelligence database for market context

This enhanced analysis process ensures every application is strategically positioned for maximum impact while maintaining complete integrity about actual qualifications and realistic development timelines.
