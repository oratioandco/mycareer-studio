
# Rule: Verify Experience (Enhanced Safety-First)

## Goal
Ask targeted questions to verify user's experience against job requirements without making assumptions or leading them to overstate qualifications. Focus heavily on extracting qualitative impacts, process improvements, and strategic positioning details that demonstrate value even without quantitative metrics.

## System Context Integration
**MANDATORY FIRST STEP:** Load user profile and core system prompt to personalize verification:

1. **Read Core System Prompt**: `/system-prompt/core-system-prompt.md` for IMPACT framework and truthfulness standards
2. **Read User Profile**: `/data/user-profile.md` for personalized verification approach:
   - Career stage determines question depth and leadership focus
   - Industry experience guides technical and domain-specific probing
   - Communication style affects question tone and risk tolerance
   - Gap analysis priorities from profile inform verification sequence
   - Interview confidence level shapes preparation depth needed

**Personalization Application:**
- Adapt question complexity to user's experience level and career stage
- Focus verification on profile-identified strength and development areas
- Match questioning style to user's communication preferences and confidence
- Prioritize verification areas based on target role alignment from profile
- Apply appropriate IMPACT framework depth for user's seniority level

## Prerequisites
- Job analysis completed (`analyze-job-posting.mdc`)
- Initial CV imported
- Gaps identified between requirements and current data

## WORKFLOW POSITION
This rule is Step 2 in the mandatory sequence:
1. ✅ Job analysis (`analyze-job-posting.mdc`)
2. ⏳ **CURRENT:** Experience verification (`verify-experience.mdc`)
3. ⏭️ **NEXT:** CV generation (`generate-cv.mdc`)
4. ⏭️ **OPTIONAL:** Cover letter (`generate-cover-letter.mdc`)

## Enhanced Verification Process

### Step 1: Load and Analyze Existing Documentation
**MANDATORY FIRST STEP:** Before generating any questions, systematically review all existing data files:

1. **Read All Experience Files**: Load content from `/data/experiences/` to understand documented work history
2. **Read User Profile**: Load `/data/user-profile.md` for personalization context
3. **Read Verification Logs**: Check `/data/verification-log/` for previously verified information
4. **Read Core System Prompt**: Load `/system-prompt/core-system-prompt.md` for IMPACT framework standards

#### Smart Question Generation Based on Existing Data
From this comprehensive data analysis, identify:
- **Fully Documented**: Experiences with complete IMPACT framework context - **SKIP THESE**
- **Partially Documented**: Skills mentioned in data files but lacking strategic depth - **ENHANCE WITH CONTEXT**
- **Gap Areas**: Must-have requirements with no verified match in existing data files - **DIRECT QUESTIONING**
- **Clarification Needed**: Experiences that could demonstrate strategic value but need qualification - **TARGETED PROBING**
- **Missing Context**: Process improvements, team collaboration, or technology implementation lacking business context - **CONTEXTUAL ENHANCEMENT**

#### Existing Data Integration Rules
**NEVER ASK ABOUT:**
- Information already fully documented with IMPACT framework context
- Experiences with complete before/after process descriptions
- Skills with verified examples and strategic positioning
- Company contexts already described with business model clarity
- Technology implementations with full adoption and impact details

**ALWAYS SHOW EXISTING KNOWLEDGE WHEN ASKING FOR ENHANCEMENT:**
- Display what's already documented before asking for additional context
- Reference specific files and previous answers
- Ask for clarification or additional depth, not repetition
- Build upon existing information rather than starting from scratch

### Step 2: Generate Enhanced Targeted Questions

#### Enhanced Question Categories

**1. Missing Requirements with Strategic Context**
For skills/experience not found in existing data files:
```
"The role requires [specific requirement]. I don't see this documented in your experience files. Let me ask about this strategically:

Direct Experience:
- Have you worked with this technology/process at any of your positions?
- If yes: Which company, what specific project, and what was your exact role?
- What was the business context - why was this needed?
- What challenge were you solving or improvement were you making?

Transferable Experience:
- Have you worked with similar tools/processes that demonstrate comparable skills?
- What adjacent experience do you have that shows similar thinking/approach?
- Any situations where you had to learn something similar quickly?

Impact Assessment:
- What was the outcome - how did things improve after your work?
- How did stakeholders (teammates, users, business) benefit?
- What would have happened if this work wasn't done?
- Any specific feedback you received about this contribution?"
```

**2. IMPACT Framework Enhancement**
For existing experiences needing strategic depth:
```
Original Data File Statement: "[Existing description from data/experiences/file.md]"

I need to understand the full impact of your work at [Company]. Let's break this down:

**Implementation Details:**
- What specifically did you build/design/create?
- What tools and technologies did you use?
- How long did this project take from start to finish?

**Methodology & Approach:**
- What process or framework did you follow?
- How did you approach this challenge - what was your strategy?
- What constraints or requirements did you work within?

**Partnership & Collaboration:**
- Who did you work with on this (PMs, engineers, stakeholders)?
- How did you coordinate across teams?
- What was your role in cross-functional decision-making?

**Achievement & Impact:**
- What improved after your work was completed?
- How do you know it was successful - what evidence do you have?
- What feedback did you get from users, teammates, or leadership?
- What would the situation look like if you hadn't done this work?

**Business Context:**
- Why was this important to the company at that time?
- How did this support business goals or user needs?
- What was the strategic value of this work?

**Technical Context:**
- What was the technical complexity or challenge?
- What did you learn or what skills did you develop?
- How did this work build on or connect to other projects?"
```

**3. Qualitative Impact Extraction**
For process improvements and efficiency gains:
```
"I want to understand the qualitative improvements you made at [Company]:

**Process Before vs After:**
- Walk me through how [specific process] worked before your involvement
- What problems or inefficiencies existed?
- What did you implement or change?
- How does the process work now?
- Who benefits from this improvement and how?

**Team Efficiency:**
- How did design delivery change after your improvements?
- What used to take [time period] that now takes [different time]?
- How did collaboration between design/product/engineering change?
- What feedback did teammates give about working with design after your changes?

**User Experience Impact:**
- What user pain points existed before your work?
- How do you know the user experience improved?
- What user feedback or behavior changes did you observe?
- What usability issues were resolved?

**System/Design Quality:**
- How did design consistency change after your work?
- What design debt or technical issues were resolved?
- How did your design system or components impact other designers?
- What quality improvements are you most proud of?"
```

**4. Strategic Leadership Assessment**
For leadership and strategic positioning:
```
"I want to understand your leadership impact at [Company]:

**Team Building & Management:**
- How did you build or scale the design team?
- What was your approach to hiring and onboarding designers?
- How did you structure team processes and workflows?
- What challenges did you face in team management and how did you address them?

**Stakeholder Influence:**
- How did you elevate design's influence in the organization?
- Describe a situation where you changed someone's mind about a design decision
- How did you communicate design value to non-design stakeholders?
- What resistance did you encounter and how did you overcome it?

**Strategic Decision-Making:**
- How were you involved in product strategy and roadmap planning?
- Describe a business decision you influenced through design thinking
- How did you balance user needs with business constraints?
- What strategic design decisions did you make that had lasting impact?

**Organizational Change:**
- How did design maturity change during your time at the company?
- What processes or standards did you establish that outlasted your tenure?
- How did you position design as a strategic function vs operational support?
- What cultural changes did you drive in how the company thinks about design?"
```

**5. Technology Innovation & Implementation**
For AI, automation, and technical implementation:
```
"Let's discuss your technology implementation work:

**Innovation Context:**
- What manual or inefficient process did your technology solution address?
- Why was this problem important to solve at that time?
- What research or evaluation did you do before implementing?

**Implementation Details:**
- Walk me through how you implemented [specific technology]
- What technical challenges did you encounter and solve?
- Who did you work with on the technical implementation?
- How long did implementation take and what were the phases?

**Adoption & Change Management:**
- How did you introduce this to the team?
- What resistance or hesitation did you encounter?
- How did you train others or encourage adoption?
- What was the adoption rate - how many people started using it?

**Impact Measurement:**
- How did this change the time required for [specific task]?
- What quality improvements resulted from this implementation?
- How did this affect team productivity or output?
- What business value was created through this innovation?

**Learning & Evolution:**
- What did you learn about implementing new technology in design teams?
- How did this experience influence your approach to future innovations?
- What would you do differently if implementing something similar again?"
```

**6. Company Context & Industry Understanding**
For strategic business positioning:
```
"I need to understand the business context of your work:

**Company & Market Context:**
- How would you describe [Company]'s business model in 3-6 words?
- What industry challenges was the company addressing?
- Who were the primary users/customers and what were their key needs?
- What competitive pressures or market dynamics affected your design work?

**Scale & Complexity:**
- What was the scale of the platform/product you worked on?
- How many users, countries, or transactions did the system handle?
- What regulatory or compliance requirements did you work within?
- How complex were the workflows or data structures you designed for?

**Design Challenges:**
- What made design challenging in this industry or business context?
- How did regulatory requirements affect your design decisions?
- What user types or personas did you design for?
- What technical constraints shaped your design approach?

**Business Impact:**
- How did design contribute to business goals during your time there?
- What revenue, efficiency, or user satisfaction impacts resulted from design work?
- How did design support the company's growth or transformation?
- What strategic business decisions were influenced by design research or recommendations?"
```

### Step 3: Progressive Question Sequencing

#### Strategic Priority Order with Progressive Delivery
1. **IMPACT Framework Gaps**: Recent experiences needing full strategic context
2. **Critical Missing Requirements**: Must-have skills with no current evidence
3. **Qualitative Impact Opportunities**: Process improvements and efficiency gains
4. **Leadership & Strategic Positioning**: Influence and decision-making examples
5. **Technology Innovation**: Implementation and change management experience
6. **Transferable Skills**: Adjacent experience that demonstrates relevant capabilities
7. **Company Context**: Business understanding and industry expertise
8. **Nice-to-Have Enhancement**: Preferred qualifications with potential matches

#### Progressive Question Management
The system should:
1. **Pre-generate All Questions**: Create complete question set with priorities
2. **Present Sequentially**: Show one question at a time with progress tracking
3. **Handle User Commands**: Process skip, back, status, and navigation requests
4. **Maintain State**: Track answers, current position, and completion status
5. **Provide Flexibility**: Allow users to control pacing and focus areas

#### User Navigation Commands
- **"skip"**: Move to next question without answering current one
- **"back"**: Return to previous question to modify answer
- **"status"**: Show detailed progress overview and remaining questions
- **"focus [category]"**: Jump to specific question category
- **"pause"**: Save current progress and resume later
- **"summary"**: Show what's been covered so far

#### Enhanced Safety Protocols
- Never suggest specific impacts or improvements
- Ask for concrete examples before general assessments
- Request timeline and context details, not just outcomes
- Probe for measurable changes without suggesting numbers
- Distinguish between individual contribution and team results
- Focus on learning and growth rather than claiming expertise
- **NEW**: Allow users to skip questions they're not ready to answer
- **NEW**: Provide clear progress indicators to reduce overwhelm

### Step 4: Progressive Question Delivery

#### Context-Aware Question Format with Progress Tracking
```
📋 Experience Verification: [Company] - [Role]
Progress: [Current Question] / [Total Questions]

I need to build a complete picture of your experience to ensure accurate, strategic representation in your CV. I'll ask one question at a time to keep this manageable.

📚 What I Already Know:
Based on your existing data files, I have this information:
- From `/data/experiences/[file].md`: "[Existing documented experience excerpt]"
- From `/data/user-profile.md`: "[Relevant profile context]"
- From previous verification: "[Any prior verification context]"

🔍 Current Question [X/Y]:

**[Question Category]** - Enhancement Request
[Single specific question that builds upon existing knowledge rather than repeating it]

📝 Please provide:
- Additional context beyond what's already documented
- Specific examples with clear before/after details
- Timeline details and collaboration specifics not yet captured
- Your exact role vs team contributions with new insights
- Concrete evidence of improvements or success not previously mentioned
- Honest assessment of your confidence level

💡 Options:
- Answer the question in detail
- Type "skip" to move to the next question
- Type "back" to return to the previous question
- Type "status" to see overall progress
- Type "already covered" if you feel this is fully documented

🎯 Goal: Building upon existing knowledge to create a complete narrative that shows your specific value and relevant experience patterns for the target role.
```

#### Smart Question Templates

**For Partially Documented Experience:**
```
📚 Existing Documentation:
From `/data/experiences/[company].md`:
"[Exact quote from existing file]"

🔍 Enhancement Needed:
I need more strategic context about this experience. Based on what you've already shared, can you help me understand:
[Specific follow-up question that builds on existing info]
```

**For Missing Strategic Context:**
```
📚 Current Status:
You mention "[specific work/skill]" in your experience files, but I need to understand the strategic impact.

🔍 Context Request:
Without repeating what's already documented, can you help me understand:
[Targeted question about business impact/strategic value]
```

**For Gap Areas:**
```
📚 Gap Identified:
The target role requires "[specific requirement]" but I don't see this in your current experience files.

🔍 Direct Assessment:
[Question about whether user has this experience and in what context]
```

#### Progressive Question Queue Management
The system should:
1. **Analyze Existing Data First**: Load and review all data files before generating questions
2. **Generate Smart Question Set**: Create verification questions that build upon existing knowledge
3. **Present One at a Time**: Show single question with progress indicator and existing context
4. **Track Progress**: Maintain current position and completion status
5. **Allow Navigation**: Enable skip, back, status, and "already covered" commands
6. **Maintain Context**: Keep previous answers and existing documentation accessible for follow-up questions
7. **Avoid Redundancy**: Skip questions where information is already fully documented

#### Question Queue Structure
```
Verification Queue: [Total: X questions]
├── IMPACT Framework Questions [Priority: High]
│   ├── Q1: [Company A] - Strategic context for [Experience]
│   ├── Q2: [Company B] - Process improvement details
│   └── Q3: [Company C] - Technology implementation
├── Missing Requirements [Priority: High]
│   ├── Q4: [Skill X] - Direct experience assessment
│   └── Q5: [Skill Y] - Transferable experience
├── Qualitative Impact [Priority: Medium]
│   ├── Q6: Team efficiency improvements
│   └── Q7: User experience enhancements
└── Strategic Positioning [Priority: Medium]
    ├── Q8: Leadership influence examples
    └── Q9: Business context understanding
```

#### Progress Tracking Display
```
📊 Verification Progress Overview:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
████████████████████████████████████████████████████████████████████████████████████████████████ 65% Complete

✅ Completed (13/20):
- IMPACT Framework: 5/5 complete
- Missing Requirements: 3/5 complete  
- Qualitative Impact: 3/4 complete
- Strategic Positioning: 2/6 complete

⏳ Current: Strategic Leadership Assessment (Question 14/20)
📋 Remaining: 7 questions across 2 categories

🎯 Estimated completion: 10-15 minutes remaining
```

### Step 5: Progressive Response Processing

#### Handling User Commands
The system must recognize and process:
- **Answer Response**: User provides detailed answer to current question
- **Skip Command**: User types "skip" - mark question as skipped, move to next
- **Back Command**: User types "back" - return to previous question for revision
- **Status Command**: User types "status" - show comprehensive progress overview
- **Focus Command**: User types "focus [category]" - jump to specific question type
- **Pause Command**: User types "pause" - save progress for later resumption
- **Summary Command**: User types "summary" - show answers provided so far
- **Already Covered Command**: User types "already covered" - mark question as complete based on existing documentation

#### Skip Question Handling
When user skips a question:
```
⏭️ Question Skipped: [Question topic]
Reason: User chose to skip

You can return to this question later by typing "back" or "focus [category]"

Moving to next question...
```

#### Already Covered Response
When user indicates information is already documented:
```
✅ Question Marked as Complete: [Question topic]
Reason: Information already fully documented

Existing documentation reference: /data/experiences/[file].md
Status: Marked as strategically verified based on existing data

Moving to next question...
```

#### Progress State Management
The system should maintain:
- **Current Question Index**: Position in question queue
- **Answered Questions**: List of completed questions with responses
- **Skipped Questions**: List of questions user chose to skip
- **Available Commands**: Context-specific navigation options
- **Completion Status**: Overall progress percentage and remaining items

#### Advanced Verification Levels
- **Strategic Verified**: Specific examples with full IMPACT context, interview-ready
- **Operational Verified**: Clear examples with basic context and outcomes
- **Basic Experience**: General experience with some detail but limited depth
- **Adjacent/Transferable**: Related experience that demonstrates relevant capabilities
- **Learning/Emerging**: Exposure or training but limited hands-on experience
- **No Relevant Experience**: Honest gap identification

#### Enhanced Documentation Format
For each verified item, create comprehensive entry in `/data/verification-log/[job-title]-verification.md`:

```markdown
# Enhanced Verification Log: [Company] - [Role]

## Verification Date: [Date]
## Verification Method: Structured IMPACT Interview

## Strategic Experience Verification

### [Requirement/Experience 1]
- **Verification Level**: Strategic Verified
- **IMPACT Framework**:
  - **Implementation**: [Specific deliverables and technical details]
  - **Method**: [Approach, process, framework used]
  - **Partnership**: [Cross-functional collaboration details]
  - **Achievement**: [Verified improvements and outcomes]
  - **Context**: [Business relevance and strategic importance]
  - **Technology**: [Tools, systems, technical stack]
- **Company Context**: [3-6 word business description]
- **Timeline**: [Duration and phases]
- **Evidence/Feedback**: [Specific validation of success]
- **Interview Confidence**: High (ready with detailed STAR examples)
- **Strategic Positioning**: [How this positions candidate for target role]

### [Process Improvement Example]
- **Verification Level**: Operational Verified
- **Before State**: [Specific process inefficiencies]
- **Implementation**: [Exact changes made]
- **After State**: [Improved process description]
- **Impact Evidence**: [How improvement was measured/observed]
- **Stakeholder Benefit**: [Who benefited and how]
- **Business Value**: [Strategic importance to organization]
- **Interview Confidence**: High
- **Positioning Value**: [Relevance to target role]

## Qualitative Impact Summary
- **Process Improvements**: [X documented with before/after context]
- **Team Efficiency Gains**: [X examples with specific collaboration improvements]
- **User Experience Enhancements**: [X instances with user benefit evidence]
- **Technology Implementations**: [X innovations with adoption and impact data]
- **Strategic Contributions**: [X business-level impacts with context]

## Leadership & Strategic Assessment
- **Team Building Experience**: [Scale, approach, outcomes]
- **Stakeholder Influence**: [Examples of changing minds/driving decisions]
- **Organizational Impact**: [Systems/processes that outlasted tenure]
- **Strategic Decision-Making**: [Product/business strategy involvement]
- **Change Management**: [Innovation adoption and culture change]

## Gap Analysis & Honest Assessment
- **Confirmed Gaps**: [Requirements with no relevant experience]
  - [Requirement]: No experience, will need learning/development
  - [Requirement]: Limited exposure, would require ramp-up time
- **Transferable Skills**: [Adjacent experience with bridge narrative]
  - [Skill]: Experience with [related area], transferable because [connection]
- **Learning Readiness**: [Candidate's approach to filling gaps]

## Company Context Verification
- **[Company 1]**: [Strategic business description] serving [user base] with [complexity factors]
- **[Company 2]**: [Strategic business description] in [industry] with [scale indicators]
- **Industry Pattern**: [Relevant experience across industries/sectors]
- **Regulatory Experience**: [Compliance, security, data protection contexts]

## Strategic Positioning Strategy
- **Primary Value Proposition**: [Core strength for target role]
- **Differentiation Factor**: [Unique combination of experiences]
- **Growth Narrative**: [Clear progression story]
- **Cultural Fit Indicators**: [Company stage/culture alignment evidence]
- **Interview Strategy**: [Key stories to emphasize, potential concerns to address]

## Interview Preparation Framework
### Top 5 STAR Stories Ready:
1. [Achievement 1]: [Context/Impact summary for interview prep]
2. [Achievement 2]: [Context/Impact summary for interview prep]
3. [Process Improvement]: [Before/After story with business impact]
4. [Leadership Example]: [Team building or stakeholder influence story]
5. [Innovation Implementation]: [Technology adoption with change management]

### Gap Navigation Strategy:
- **Direct Question Approach**: [How to honestly address skill gaps]
- **Learning Demonstration**: [Examples of quickly acquiring new capabilities]
- **Transferable Skill Bridge**: [How to connect adjacent experience to requirements]
- **Growth Mindset Positioning**: [Framing gaps as development opportunities]

## Next Steps & Action Items
- [ ] Update all data files with verified IMPACT framework content
- [ ] Document strategic positioning elements in experience files
- [ ] Add company context descriptions to all roles
- [ ] Flag interview-ready stories in data files
- [ ] Note areas requiring additional preparation or research
```

## Enhanced Verification Guidelines

### NEVER:
- Suggest specific improvements or impacts
- Encourage exaggeration of scope or results
- Accept vague generalizations without concrete examples
- Allow unverifiable or undefendable claims
- Lead user toward desired responses or bigger numbers
- **NEW:** Assume business context without verification
- **NEW:** Suggest company descriptions beyond user knowledge
- **NEW:** Imply leadership experience beyond verified scope
- **NEW:** Enhance modest achievements into strategic wins

### ALWAYS:
- Ask for specific before/after examples with context
- Probe for concrete evidence of improvements
- Distinguish individual contribution from team achievements
- Request timeline and collaboration details
- Document exact user language without enhancement
- **NEW:** Verify business context and strategic understanding
- **NEW:** Assess stakeholder relationship and influence patterns
- **NEW:** Confirm technology implementation and adoption details
- **NEW:** Test interview readiness with follow-up scenario questions

### Enhanced Question Techniques

#### Excellent Verification Questions
- "Walk me through exactly how [process] worked before and after your changes"
- "What specific feedback did you receive that showed this was working?"
- "How did you know this was an improvement - what evidence convinced you?"
- "What would have happened if you hadn't done this work?"
- "Who were the key stakeholders and how did they respond to your approach?"

#### Advanced Follow-Up Probes
- "What was the most challenging part of this implementation?"
- "How did you measure success - both officially and in your own assessment?"
- "What did you learn about [technology/process/leadership] from this experience?"
- "How would you do this differently if you encountered a similar situation?"
- "What advice would you give someone attempting something similar?"

#### Strategic Context Questions
- "How did this work connect to broader business goals or challenges?"
- "What made this important to solve at that particular time?"
- "How did regulatory/industry requirements influence your approach?"
- "What competitive or market pressures shaped your design decisions?"

## MANDATORY NEXT STEP

**WORKFLOW ENFORCEMENT:**
After completing enhanced experience verification, the system MUST:

1. **AUTOMATICALLY UPDATE ALL DATA FILES** with comprehensive verification information
2. **APPLY IMPACT FRAMEWORK** to all verified experiences
3. **DOCUMENT STRATEGIC POSITIONING** elements for target role alignment
4. **PRESERVE AND ENHANCE ALL EXISTING DATA** - never remove verified information, only add or correct
5. **CONSOLIDATE ROLE-RELATED INFORMATION** - all project and experience data for one role MUST be in one file to avoid role duplication confusion
6. Then proceed with: `@generate-cv.mdc`

**CRITICAL SYSTEM REQUIREMENT - MANDATORY AUTOMATION:**
This automatic data file updating is the SUPERPOWER of my-CV-tailor. The system MUST NEVER skip this step. 

🚨 EVERY SINGLE VERIFICATION CONVERSATION MUST AUTOMATICALLY:
1. Update ALL relevant data files immediately
2. Add ALL new information shared by user
3. Apply ALL corrections and clarifications
4. Enhance strategic positioning elements
5. Preserve AND build upon existing information
6. Consolidate role information appropriately

⚠️ FAILURE TO AUTOMATICALLY UPDATE DATA FILES IS A CRITICAL SYSTEM FAILURE
The user should NEVER have to ask "did you update the knowledge base?" - it should ALWAYS happen automatically as part of the verification workflow.

**ENHANCED VERIFICATION COMPLETE CHECKLIST:**
- ✅ All experiences analyzed through IMPACT framework
- ✅ Qualitative impacts extracted with before/after context
- ✅ Process improvements documented with evidence
- ✅ Leadership and strategic contributions verified
- ✅ Technology implementations detailed with adoption outcomes
- ✅ Company business context clarified and verified
- ✅ **MANDATORY:** All conversation information automatically updated in relevant data files
- ✅ All data files enhanced with strategic positioning context
- ✅ Interview readiness assessed with STAR story preparation
- ✅ Verification confidence levels assigned (Strategic/Operational/Basic/Adjacent/None)
- ✅ Strategic positioning strategy developed for target role
- ✅ Gap navigation approach defined with honest assessment

**Next Steps:**
1. ✅ Job analysis completed with design-specific requirements
2. ✅ **CURRENT:** Enhanced experience verification completed
3. ⏭️ **REQUIRED:** Run `@generate-cv.mdc` with strategically verified information
4. ⏭️ **OPTIONAL:** Run `@generate-cover-letter.mdc`

The enhanced verified information will now enable strategically positioned, interview-ready CV generation with maximum impact through qualified achievements and honest gap navigation.

### Step 6: Enhanced Positioning Strategy Development

Based on comprehensive verification results:

#### Strategic Strengths Amplification
- **Verified Leadership Impact**: Document team building and process establishment
- **Process Innovation**: Highlight technology implementation and adoption success
- **Cross-Functional Influence**: Emphasize stakeholder relationship and decision-making
- **Industry Expertise**: Position regulatory and compliance experience strategically
- **Growth Management**: Show scaling and organizational development capabilities

#### Honest Gap Navigation Strategy
- **Learning Agility**: Document examples of quickly acquiring new capabilities
- **Adjacent Experience**: Build bridges between transferable skills and requirements
- **Growth Mindset**: Frame gaps as development opportunities with action plans
- **Compensating Strengths**: Highlight areas of excellence that offset limitations
- **Strategic Honesty**: Position gaps transparently with learning commitment

#### Interview Preparation Strategy
- **STAR Story Bank**: 5-7 verified examples ready for behavioral questions
- **Technical Depth**: Appropriate detail level for hands-on vs strategic discussions
- **Cultural Alignment**: Evidence of values and working style fit
- **Vision Articulation**: Strategic understanding of design role in business context
- **Growth Narrative**: Clear progression story with future trajectory

## Enhanced Output Summary

```
✅ Strategic Experience Verification Complete

📊 Comprehensive Verification Results:
- IMPACT Framework Applications: [X] experiences fully detailed
- Qualitative Improvements Documented: [X] process/efficiency gains
- Strategic Leadership Examples: [X] stakeholder influence instances
- Technology Implementations: [X] innovation adoption stories
- Company Context Verified: [X] business descriptions confirmed
- Interview-Ready STAR Stories: [X] prepared with full context

📈 Strategic Positioning Assessment:
- Primary Value Proposition: [Strategic strength for target role]
- Differentiation Factor: [Unique experience combination]
- Cultural Fit Score: [Company stage/values alignment]
- Gap Navigation Strategy: [Honest approach to limitations]
- Interview Confidence: [High/Medium with preparation areas]

🎯 Next Phase Readiness:
- CV Generation: Ready with strategic positioning framework
- Company Context: Strategic business descriptions prepared
- Achievement Language: IMPACT framework applied to all experiences
- Keyword Strategy: Industry language and technical terms verified
- Interview Preparation: STAR examples and gap navigation prepared

📝 Quality Assurance:
- Truthfulness: 100% verified claims with source documentation
- Defensibility: Every example backed by specific context and evidence
- Strategic Relevance: All content positioned for target role requirements
- Interview Readiness: Detailed preparation for behavioral and technical questions

Ready to generate your strategically positioned, interview-ready CV with maximum impact through verified achievements and honest professional positioning!
```

This enhanced verification process ensures every claim in your CV can be confidently defended in interviews while maximizing the strategic positioning value of your actual experience. The focus on qualitative impacts means you can demonstrate significant value even without traditional quantitative metrics, building a compelling narrative based on process improvements, team efficiency gains, and stakeholder relationship success.
