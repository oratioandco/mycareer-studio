
# Rule: Interview Preparation (Strategic Question Anticipation)

## Goal
Prepare users for interviews by analyzing job requirements, user background, and potential concern areas to identify likely questions and develop strategic responses. Focus on building confidence through thorough preparation of both strength-based and challenging topics.

## System Context Integration
**MANDATORY FIRST STEP:** Load comprehensive user context to personalize preparation:

1. **Read Job Analysis**: `/data/job-analysis/[job-title]-analysis.md` for role-specific requirements and company context
2. **Read User Profile**: `/data/user-profile.md` for career stage, communication style, and identified strengths/gaps
3. **Read All Experience Files**: `/data/experiences/` for verified achievements and strategic positioning
4. **Read Verification Logs**: `/data/verification-log/` for interview-ready STAR stories and confidence levels
5. **Read Core System Prompt**: `/system-prompt/core-system-prompt.md` for IMPACT framework and positioning strategy

## Prerequisites
- Job analysis completed (`analyze-job-posting.mdc`)
- Experience verification completed (`verify-experience.mdc`)
- CV generated with strategic positioning

## WORKFLOW POSITION
This rule is Step 4 in the application sequence:
1. ✅ Job analysis (`analyze-job-posting.mdc`)
2. ✅ Experience verification (`verify-experience.mdc`)
3. ✅ CV generation (`generate-cv.mdc`)
4. ⏳ **CURRENT:** Interview preparation (`interview-prep.mdc`)
5. ⏭️ **OPTIONAL:** Mock interview (`mock-interview.mdc`)

## Interview Preparation Process

### Step 1: Comprehensive Question Analysis

#### Question Categories to Analyze

**1. Role-Specific Technical Questions**
Based on job requirements analysis from `/data/job-analysis/[job-title]-analysis.md`:
- Must-have skills and competencies from job posting
- Nice-to-have qualifications that may come up
- Industry-specific knowledge areas highlighted in posting
- Technical tools and methodologies mentioned
- Process and framework experience required
- Leadership and management capabilities (if applicable)
- Company-specific context and challenges identified

**2. Experience-Based Behavioral Questions**
Based on user's documented experience in `/data/experiences/`:
- Achievement-focused questions mapped to verified STAR stories
- Challenge and problem-solving scenarios from experience files
- Leadership and influence examples from verified experiences
- Collaboration and team work stories with documented outcomes
- Innovation and improvement initiatives with impact evidence
- Cross-reference with job requirements to predict likely behavioral questions

**3. Potential Concern Areas**
Based on profile analysis and experience gaps from job analysis:
- Career transitions and switches (identify from experience timeline)
- Short employment stints (flag positions < 18 months)
- Experience level mismatches (compare years required vs actual)
- Company size/stage differences (startup to enterprise, etc.)
- Geographic or industry changes (different markets/domains)
- Skills or experience gaps identified in verification process
- Education/certification gaps compared to job requirements

**4. Strategic Positioning Questions**
Based on target role alignment from job analysis:
- Why are you interested in this role/company? (company context from analysis)
- How does this fit your career trajectory? (progression narrative)
- What value would you bring to this position? (strength areas from verification)
- How do you see yourself growing in this role? (development areas identified)
- What differentiates you from other candidates? (unique value proposition)
- Questions about company culture fit based on job posting tone/values

### Step 2: Question Likelihood Assessment

#### High Probability Questions (90%+ likely)
Questions virtually guaranteed to be asked:
- "Tell me about yourself" (always asked)
- "Why are you interested in this role?" (based on job analysis)
- "What are your strengths?" (map to job requirements)
- Role-specific competency questions (from must-have requirements)
- Questions about recent experience and achievements (from CV)

#### Medium Probability Questions (60-80% likely)
Questions commonly asked based on role level and type:
- Behavioral questions about specific situations (STAR stories from experiences)
- Questions about career goals and trajectory (based on user profile career stage)
- Team collaboration and leadership examples (if leadership mentioned in job)
- Problem-solving and challenge scenarios (common for senior roles)
- Questions about company culture fit (based on job posting tone)

#### Concern-Based Questions (30-60% likely)
Questions that may arise based on profile analysis and experience gaps:

**Career Pattern Concerns:**
- Career change explanations (if industry/role switch detected)
- Short stint explanations (positions < 18 months from experience files)
- Employment gap explanations (gaps > 6 months in timeline)
- Frequent job changes (> 3 roles in 5 years pattern)

**Experience Level Concerns:**
- Experience level justifications (years required vs actual from profile)
- Skill gap acknowledgments (missing requirements from job analysis)
- Seniority level fit (junior applying for senior, senior to mid-level)
- Education/certification gaps (if mentioned in job requirements)

**Company/Industry Fit Concerns:**
- Company stage/size fit discussions (startup experience to enterprise role)
- Industry transition explanations (different domain experience)
- Geographic relocation reasoning (if location change detected)
- Remote work experience (if job is remote/hybrid)

**Role-Specific Concerns:**
- Management readiness (if leadership role but limited management experience)
- Technical depth (if technical role but limited recent technical work)
- Strategic thinking (if senior role but primarily operational experience)
- Cultural fit (if company values significantly different from past employers)

### Step 3: Strategic Response Development

#### Response Framework
For each identified question topic:

**Strength-Based Responses:**
- Primary STAR story with full context
- Supporting examples and evidence
- Strategic positioning elements
- Confidence level and preparation depth

**Concern-Based Responses:**
- Honest acknowledgment approach
- Bridge to relevant experience
- Learning and growth narrative
- Enthusiasm and commitment demonstration

### Step 4: Interactive Preparation Session

#### Preparation Menu Format
```
🎯 Interview Preparation: [Company] - [Role]

Based on your profile and the job analysis, I've identified key areas for interview preparation:

📊 Analysis Complete:
✅ Job Requirements: [X] must-have skills analyzed
✅ Experience Mapping: [X] STAR stories identified  
✅ Concern Areas: [X] potential challenges flagged
✅ Strategic Positioning: [X] company-fit opportunities identified

🔍 Preparation Topics (Select to dive deeper):

**HIGH-PROBABILITY QUESTIONS** (90%+ likely to be asked)
1. "Tell me about yourself" - Personal pitch
   📄 Data source: User profile + recent experience
   Status: ✅ Strong foundation / ⚠️ Needs refinement
   Confidence: High/Medium/Low

2. "Why are you interested in this role?" - Role motivation  
   📄 Data source: Job analysis + career goals
   Status: ✅ Strong foundation / ⚠️ Needs refinement
   Confidence: High/Medium/Low

3. [Technical competency] - Core skill demonstration
   📄 Data source: Experience files + verification log
   Status: ✅ Strong STAR story ready / ⚠️ Needs development
   Confidence: High/Medium/Low

**MEDIUM-PROBABILITY QUESTIONS** (60-80% likely)
4. Leadership/collaboration example - Team impact story
   📄 Data source: [Specific experience file]
   Status: ✅ Verified story / 🔄 Needs strategic positioning
   Confidence: High/Medium/Low

5. Problem-solving scenario - Challenge overcome
   📄 Data source: [Specific experience file]  
   Status: ✅ Impact documented / 🔄 Needs interview packaging
   Confidence: High/Medium/Low

**CONCERN-BASED QUESTIONS** (30-60% likely - requires strategic response)
6. [Career transition] - Industry/role change explanation
   📄 Data source: Experience timeline analysis
   Status: ⚠️ Strategic response needed
   Confidence: Medium/Low - Priority for development

7. [Short stint] - [Company] 14-month tenure
   📄 Data source: Experience files + context
   Status: ⚠️ Requires tactful explanation
   Confidence: Medium/Low - Priority for development

8. [Experience gap] - [Specific skill] requirement
   📄 Data source: Job analysis gap identification
   Status: ⚠️ Bridge narrative needed
   Confidence: Low - Priority for development

**STRATEGIC POSITIONING TOPICS**
9. "What value would you bring?" - Unique value proposition
   📄 Data source: Verification log + strategic strengths
   Status: 🔄 Needs company-specific customization
   Confidence: Medium

10. "Where do you see yourself growing?" - Career trajectory
    📄 Data source: User profile + role analysis
    Status: 🔄 Needs development alignment
    Confidence: Medium

💡 Navigation Options:
- **Type 1-10** to deep-dive into specific topic
- **Type "strengths"** to focus on high-confidence areas
- **Type "concerns"** to address challenge areas first
- **Type "overview"** for complete preparation roadmap
- **Type "practice"** for rapid-fire question practice
- **Type "mock"** to proceed to full interview simulation

🎯 Recommendation: Start with concern-based topics (6-8) to build confidence, then reinforce strengths (1-5).
```

### Step 5: Deep-Dive Discussion Format

#### Individual Topic Exploration
When user selects a topic:

```
🎯 Deep Dive: [Selected Topic]

📚 What I Know:
Based on your verified experience and profile:
- [Relevant experience context]
- [Strategic positioning elements]
- [Confidence level assessment]

🎭 Likely Interview Scenarios:
This topic might come up as:
1. "[Potential question variation 1]"
2. "[Potential question variation 2]"
3. "[Potential question variation 3]"

💡 Current Response Strategy:
[Based on existing data, suggested approach]

🔍 Let's strengthen your preparation:
[Specific questions to enhance response quality]

📝 Please share:
- Your current thinking on how to approach this
- Any concerns or uncertainties you have
- Additional context that might be relevant
- How confident you feel discussing this topic
```

#### Response Development Process
1. **User shares current thinking**
2. **System provides strategic suggestions**
3. **Collaborative refinement of response**
4. **Practice and confidence building**
5. **Documentation of enhanced response**

### Step 6: Concern Area Strategic Development

#### Career Transition Responses
For career changes and pivots:
```
🔄 Career Transition Strategy

📊 Situation Analysis:
- Previous role: [Role/Industry]
- Target role: [New Role/Industry]
- Transition rationale: [Strategic reasoning]

💡 Response Framework:
1. **Acknowledge the Change**: "I'm transitioning from [X] to [Y]"
2. **Explain the Logic**: "This move aligns with my [goal/passion/growth]"
3. **Bridge the Experience**: "My background in [X] brings valuable [skills/perspective]"
4. **Demonstrate Commitment**: "I've prepared by [specific actions taken]"
5. **Show Future Vision**: "I see this as the next step toward [career goals]"

🎯 Your Specific Approach:
[Customized response based on user's actual situation]
```

#### Short Stint Explanations
For brief employment periods:
```
⏰ Short Stint Strategy

📊 Situation Analysis:
- Position: [Role at Company]
- Duration: [Time period]
- Reason for leaving: [Factual reason]

💡 Response Framework:
1. **Be Factual**: "I was at [Company] for [duration]"
2. **Provide Context**: "The situation was [brief, honest explanation]"
3. **Show Learning**: "I gained valuable experience in [specific areas]"
4. **Demonstrate Growth**: "This experience taught me [insight/skill]"
5. **Redirect Forward**: "I'm now looking for [what you want next]"

🎯 Your Specific Approach:
[Customized response based on user's actual situation]
```

#### Experience Level Positioning
For experience gaps or mismatches:
```
📈 Experience Level Strategy

📊 Gap Analysis:
- Required experience: [Job requirement]
- Your experience: [Actual background]
- Gap area: [Specific difference]

💡 Response Framework:
1. **Acknowledge Honestly**: "I have [X years] experience in [area]"
2. **Highlight Transferable Skills**: "My background in [Y] provides [relevant skills]"
3. **Show Learning Agility**: "I've successfully learned [example of quick skill acquisition]"
4. **Demonstrate Enthusiasm**: "I'm excited to grow my expertise in [area]"
5. **Offer Value**: "I can contribute [specific value] while developing [skill]"

🎯 Your Specific Approach:
[Customized response based on user's actual situation]
```

### Step 7: Knowledge Base Enhancement

#### Automatic Documentation
During preparation sessions, system must:
1. **Update User Profile**: Add interview preparation progress and confidence areas
2. **Enhance Experience Files**: Add refined STAR stories and strategic positioning
3. **Create Prep Log**: Document developed responses and practice areas in `/data/interview-prep/[job-title]-preparation.md`
4. **Update Verification Data**: Mark interview-ready topics and confidence levels
5. **Cross-Reference Updates**: Ensure all new information enhances existing data files consistently

#### Preparation Log Format
Create comprehensive preparation documentation:
```markdown
# Interview Preparation Log: [Company] - [Role]

## Preparation Date: [Date]
## Job Analysis Reference: /data/job-analysis/[job-title]-analysis.md
## Preparation Status: In Progress / Complete

## High-Probability Topics Prepared

### 1. "Tell me about yourself" - Personal Pitch
**Status**: ✅ Response developed
**Confidence Level**: High
**Data Sources**: 
- User profile: [specific elements used]
- Recent experience: [experience file references]
**Response Framework**:
- Hook: [opening statement]
- Current role context: [brief current situation]
- Relevant experience: [2-3 key experiences]
- Transition to role: [connection to target opportunity]
**Practice Notes**: [user feedback and refinements]

### 2. "Why are you interested in this role?" - Role Motivation
**Status**: ✅ Response developed
**Confidence Level**: High
**Data Sources**:
- Job analysis: [specific company/role elements]
- Career goals: [profile alignment]
**Response Framework**:
- Company alignment: [specific company aspects that attract]
- Role fit: [how role matches career trajectory]
- Value creation: [what user can contribute]
**Practice Notes**: [user feedback and refinements]

## Medium-Probability Topics Prepared

### 3. [Technical Competency] - Core Skill Demonstration
**Status**: ✅ STAR story ready
**Confidence Level**: High
**Data Sources**: 
- Experience file: [specific file and context]
- Verification log: [confidence assessment]
**STAR Structure**:
- Situation: [context and challenge]
- Task: [specific responsibility]
- Action: [detailed approach and methods]
- Result: [measurable outcome and impact]
**Practice Notes**: [user feedback and refinements]

## Concern-Based Topics Addressed

### 4. [Career Transition] - Industry/Role Change
**Status**: ✅ Strategic response developed
**Confidence Level**: Medium → High (after practice)
**Concern Type**: Career transition from [previous field] to [target field]
**Data Sources**:
- Experience timeline: [transition rationale]
- Verification notes: [preparation evidence]
**Response Strategy**:
- Acknowledge: [honest recognition of change]
- Explain rationale: [strategic reasoning]
- Bridge experience: [transferable skills]
- Demonstrate commitment: [preparation actions]
- Future vision: [growth trajectory]
**Practice Notes**: [user feedback and confidence building]

## Strategic Positioning Topics

### 5. "What value would you bring?" - Unique Value Proposition
**Status**: ✅ Company-specific response developed
**Confidence Level**: High
**Data Sources**:
- Verification log: [strategic strengths]
- Job analysis: [company needs alignment]
**Value Proposition Elements**:
- Primary strength: [core competency match]
- Unique differentiator: [what sets candidate apart]
- Specific contribution: [how value applies to role]
- Growth potential: [future value creation]
**Practice Notes**: [user feedback and refinements]

## Overall Preparation Assessment

### Confidence Summary:
- **High Confidence Topics**: [X] topics ready for interview
- **Medium Confidence Topics**: [X] topics need practice
- **Low Confidence Topics**: [X] topics require additional work

### Key Strengths to Emphasize:
1. [Strength 1]: [context and evidence]
2. [Strength 2]: [context and evidence]
3. [Strength 3]: [context and evidence]

### Areas Requiring Additional Practice:
1. [Area 1]: [specific development needed]
2. [Area 2]: [specific development needed]

### Next Steps:
- [ ] Practice high-confidence responses for timing
- [ ] Develop additional examples for medium-confidence topics
- [ ] Schedule mock interview for final preparation
- [ ] Review company research for culture fit questions

## Interview Day Preparation

### Key Messages to Reinforce:
1. **Primary Value**: [core value proposition]
2. **Growth Narrative**: [career progression story]
3. **Cultural Fit**: [alignment with company values]
4. **Enthusiasm**: [genuine interest in role/company]

### Potential Follow-Up Questions Prepared:
- [Question 1]: [brief response approach]
- [Question 2]: [brief response approach]
- [Question 3]: [brief response approach]

### Pre-Interview Checklist:
- [ ] Review company recent news/updates
- [ ] Prepare thoughtful questions for interviewer
- [ ] Practice key responses one final time
- [ ] Prepare specific examples for potential deep-dive questions
```

#### Preparation Progress Tracking
```
📊 Interview Preparation Progress

✅ Completed Preparation:
- [Topic 1]: Response developed, high confidence
- [Topic 2]: STAR story refined, ready to practice
- [Topic 3]: Strategic positioning clarified

🔄 In Progress:
- [Topic 4]: Response framework developed, needs practice
- [Topic 5]: Concern area addressed, building confidence

⏳ Pending:
- [Topic 6]: Needs deep-dive discussion
- [Topic 7]: Requires strategic response development

🎯 Next Steps:
1. Practice responses for completed topics
2. Continue development of in-progress areas
3. Schedule mock interview for final preparation
```

## Enhanced Preparation Guidelines

### Response Quality Standards
- **Authenticity**: All responses must be truthful and defensible
- **Relevance**: Answers should directly address the question asked
- **Impact**: Stories should demonstrate clear value and outcomes
- **Conciseness**: Responses should be structured and time-appropriate
- **Confidence**: Delivery should be practiced and natural

### Strategic Positioning Principles
- **Value Proposition**: Every response should reinforce candidate value
- **Growth Narrative**: Answers should show progression and learning
- **Cultural Fit**: Responses should demonstrate company alignment
- **Future Focus**: Answers should show commitment and vision
- **Differentiation**: Stories should highlight unique strengths

### Practice Recommendations
- **STAR Method**: Structure all behavioral responses clearly
- **Timing**: Practice responses for appropriate interview length
- **Variation**: Prepare multiple examples for key competencies
- **Confidence Building**: Focus extra practice on concern areas
- **Authenticity**: Maintain genuine voice and personality

## Completion Checklist

Before proceeding to mock interview:
- ✅ All high-priority topics have developed responses
- ✅ Concern areas have strategic approaches
- ✅ STAR stories are practice-ready
- ✅ Strategic positioning is clear and compelling
- ✅ Confidence levels are assessed and documented
- ✅ User profile and experience files are enhanced
- ✅ Preparation progress is tracked and documented

## Next Steps
1. **Complete Preparation**: Ensure all topics are adequately developed
2. **Practice Session**: Review and rehearse key responses
3. **Mock Interview**: Proceed to realistic interview simulation
4. **Final Refinement**: Adjust responses based on mock interview feedback

The interview preparation process ensures comprehensive coverage of likely questions while building confidence through strategic response development and thorough practice preparation.
