
# Rule: Mock Interview Simulation (Realistic Interview Practice)

## Goal
Provide a realistic, adaptive interview simulation that mimics actual interview conditions, asks relevant questions based on job requirements and user background, provides real-time feedback, and delivers comprehensive post-interview analysis for improvement.

## System Context Integration
**MANDATORY FIRST STEP:** Load complete interview context:

1. **Read Job Analysis**: `/data/job-analysis/[job-title]-analysis.md` for company context and role requirements
2. **Read User Profile**: `/data/user-profile.md` for communication style and experience level
3. **Read Interview Preparation**: `/data/interview-prep/[job-title]-preparation.md` for prepared responses and confidence levels
4. **Read Experience Files**: `/data/experiences/` for background verification and follow-up question potential
5. **Read Verification Logs**: `/data/verification-log/` for STAR story details and confidence assessments
6. **Read Core System Prompt**: `/system-prompt/core-system-prompt.md` for evaluation framework

## Prerequisites
- Job analysis completed (`analyze-job-posting.mdc`)
- Experience verification completed (`verify-experience.mdc`)
- Interview preparation completed (`interview-prep.mdc`)

## WORKFLOW POSITION
This rule is Step 5 in the application sequence:
1. ✅ Job analysis (`analyze-job-posting.mdc`)
2. ✅ Experience verification (`verify-experience.mdc`)
3. ✅ CV generation (`generate-cv.mdc`)
4. ✅ Interview preparation (`interview-prep.mdc`)
5. ⏳ **CURRENT:** Mock interview simulation (`mock-interview.mdc`)

## Mock Interview Process

### Step 1: Interview Setup and Configuration

#### Interview Type Selection
```
🎭 Mock Interview Setup: [Company] - [Role]

Select your interview simulation type:

**STANDARD INTERVIEW** (45-60 minutes)
- Full interview experience with all question types
- Comprehensive evaluation and feedback
- Recommended for final preparation

**FOCUSED PRACTICE** (20-30 minutes)  
- Target specific areas from your preparation
- Concentrate on concern areas or technical topics
- Good for building confidence in weak spots

**RAPID-FIRE PRACTICE** (10-15 minutes)
- Quick succession of common questions
- Focus on response timing and fluency
- Ideal for last-minute preparation

**STRESS TEST** (30-45 minutes)
- Challenging questions and follow-ups
- Pressure scenarios and difficult topics
- Advanced preparation for senior roles

💡 Choose interview type or type "custom" to configure specific focus areas.
```

#### Interviewer Persona Development
Based on job analysis and company context:

**Company-Specific Interviewer Traits:**
- **Startup Environment**: Fast-paced, results-focused, informal tone, emphasis on adaptability
- **Enterprise Company**: Structured approach, process-oriented, formal tone, emphasis on scalability
- **Design Agency**: Creative focus, portfolio discussion, collaborative tone, emphasis on craft
- **Tech Company**: Technical depth, problem-solving focus, data-driven, emphasis on innovation
- **Consulting Firm**: Strategic thinking, case-study approach, analytical tone, emphasis on client impact

**Role-Specific Interviewer Approach:**
- **Senior Leadership Roles**: Strategic questions, vision assessment, leadership scenarios
- **Individual Contributor**: Technical depth, hands-on examples, skill demonstration
- **Management Roles**: Team building, decision-making, stakeholder management
- **Cross-Functional Roles**: Collaboration examples, adaptability, communication skills

### Step 2: Dynamic Interview Simulation

#### Interview Opening
```
🎭 [INTERVIEWER PERSONA ACTIVE]


Hi [Candidate Name], thanks for taking the time to speak with me today. I'm [Interviewer Name], [Title] here at [Company]. 

I've had a chance to review your background and I'm excited to learn more about your experience. We'll spend about [duration] together today covering your background, diving into some specific examples of your work, and discussing how you might contribute to our team here at [Company].

Sound good? Let's get started.

**[Interviewer Note: Warm but professional tone, setting realistic expectations]**

So tell me, how has your day been going so far?


💡 **[CANDIDATE INSTRUCTIONS]**
Respond naturally as you would in a real interview. The interviewer will:
- Ask follow-up questions based on your responses
- Probe for specific details and examples
- Adapt questioning based on your answers
- Provide realistic interview dynamics

Type your response to begin the simulation.
```

#### Question Sequencing Logic

**Phase 1: Opening & Background (5-10 minutes)**
1. **Ice Breaker**: Casual opening question
2. **Tell Me About Yourself**: Standard opening, assess communication style
3. **Background Verification**: 1-2 questions about recent experience

**Phase 2: Experience Deep-Dive (15-25 minutes)**
4. **STAR Story Prompts**: Behavioral questions targeting prepared examples
5. **Technical/Skill Assessment**: Role-specific competency questions
6. **Follow-Up Probing**: Drill down on interesting or concerning responses

**Phase 3: Scenario & Problem-Solving (10-15 minutes)**
7. **Hypothetical Scenarios**: Role-relevant challenges
8. **Decision-Making**: Process and reasoning assessment
9. **Cultural Fit**: Values and working style alignment

**Phase 4: Motivation & Fit (5-10 minutes)**
10. **Role Interest**: Why this position appeals
11. **Company Fit**: Understanding of company context
12. **Career Goals**: Future trajectory alignment

**Phase 5: Closing (5 minutes)**
13. **Candidate Questions**: Opportunity for role reversal
14. **Next Steps**: Realistic interview conclusion

#### Dynamic Questioning System

**Adaptive Follow-Up Logic:**
- **Strong Response**: Ask for additional examples or deeper technical detail
- **Weak Response**: Probe for clarification or redirect to adjacent experience
- **Concerning Response**: Dig deeper to understand context and implications
- **Impressive Response**: Explore leadership potential or strategic thinking

**Example Question Progression:**
```
INTERVIEWER: "Tell me about a time you had to implement a new design system."

[User provides basic response]

FOLLOW-UP OPTIONS:
- If response shows strong impact: "That's impressive results. What resistance did you encounter during implementation and how did you overcome it?"
- If response lacks detail: "Help me understand the technical challenges better. What specific decisions did you make about component architecture?"
- If response reveals team dynamics: "It sounds like you worked with multiple stakeholders. How did you manage competing priorities between design and engineering?"
```

### Step 3: Real-Time Feedback System

#### Response Evaluation Criteria
For each response, assess:
- **Relevance**: How well does answer address the question
- **Specificity**: Level of concrete detail and examples
- **Structure**: Clarity and organization (STAR method for behavioral)
- **Impact**: Demonstration of value and outcomes
- **Authenticity**: Genuine and confident delivery
- **Strategic Thinking**: Understanding of broader context

#### Live Feedback Indicators
```
📊 **[LIVE ASSESSMENT - CANDIDATE VIEW]**

Question: "Tell me about a time you improved team efficiency"
Your Response: [User's answer]

**Quick Assessment:**
✅ **Structure**: Clear STAR format
⚠️ **Specificity**: Could use more concrete metrics
✅ **Relevance**: Directly addresses question
🔄 **Impact**: Good outcome, expand on broader implications

**Interviewer's likely next move**: Follow-up on quantifiable results


[Interview continues...]
```

#### Interviewer Reaction Simulation
Based on response quality:
- **Strong Response**: Enthusiastic follow-up, deeper probing, positive body language cues
- **Average Response**: Neutral follow-up, clarifying questions, professional tone
- **Weak Response**: Concerned follow-up, redirect attempts, possible skepticism

### Step 4: Interview Scenario Variations

#### Standard Interview Flow
```
🎭 **[30 minutes into standard interview]**

INTERVIEWER: "I'd like to shift gears and talk about a challenge you might face in this role. 

Imagine you're three months into the position and you discover that the design system you inherited has significant inconsistencies that are affecting development velocity. The engineering team is frustrated, but there's pressure to ship new features quickly. 

How would you approach this situation?"

**[Assessment Focus: Problem-solving, prioritization, stakeholder management]**
```

#### Stress Test Variation
```
🎭 **[STRESS TEST MODE ACTIVE]**

INTERVIEWER: "I notice you were at [Company] for only 14 months. That's pretty short. Then you switched industries entirely. And now you're applying for a role that typically requires more experience than what you have. 

Help me understand - are you someone who gets bored easily and moves on? How do I know you won't do the same thing here?"

**[Assessment Focus: Resilience, honesty, composure under pressure]**
```

#### Technical Deep-Dive
```
🎭 **[TECHNICAL FOCUS MODE]**

INTERVIEWER: "Let's get into the specifics of your design process. You mentioned implementing a design system at [Company]. 

Walk me through your decision-making process for component architecture. How did you decide what should be a primitive versus a compound component? What tools did you use for documentation? How did you handle versioning and breaking changes?"

**[Assessment Focus: Technical depth, process thinking, practical experience]**
```

### Step 5: Post-Interview Analysis

#### Comprehensive Performance Review
```
📊 **Mock Interview Analysis: [Company] - [Role]**
Interview Duration: [X] minutes | Interview Type: [Standard/Focused/etc.]
Completion Date: [Date]

## Overall Performance Summary

**Overall Rating**: ⭐⭐⭐⭐☆ (4.2/5.0)
**Interview Readiness**: 85% - Strong candidate, minor improvements needed
**Hiring Recommendation**: Likely Advance - Positive impression with some development areas

## Detailed Performance Breakdown

### Communication & Presence
**Score**: 4.5/5.0 ✅ **Strength Area**
- **Clarity**: Responses were well-structured and easy to follow
- **Confidence**: Projected appropriate confidence without arrogance  
- **Engagement**: Maintained good energy and interest throughout
- **Professional Presence**: Appropriate tone for company culture

**Improvement Opportunities**:
- Consider varying response length - some answers were slightly long for the question scope
- Practice more concise opening statements for behavioral questions

### Technical/Role Competency
**Score**: 4.0/5.0 ✅ **Strength Area**
- **Depth of Knowledge**: Demonstrated solid understanding of [relevant skills]
- **Practical Application**: Good examples of applying skills in real scenarios
- **Problem-Solving**: Showed logical approach to challenges
- **Industry Awareness**: Clear understanding of current trends and practices

**Improvement Opportunities**:
- Provide more specific metrics and measurable outcomes
- Prepare additional examples for [specific technical area]

### Behavioral Examples (STAR Stories)
**Score**: 3.8/5.0 🔄 **Development Area**
- **Structure**: Generally followed STAR method effectively
- **Relevance**: Examples matched question intent well
- **Impact**: Good demonstration of outcomes and value

**Specific Feedback by Story**:
- **Leadership Example**: Strong situation and action, result could be more compelling
- **Problem-Solving Story**: Excellent technical detail, needed more context on stakeholder impact
- **Collaboration Example**: Good team dynamics, expand on your specific contribution

### Concern Area Management
**Score**: 4.2/5.0 ✅ **Strength Area**
- **[Career Transition]**: Handled question about industry switch very well - honest, strategic, compelling
- **[Short Stint]**: Good explanation of [Company] departure - factual and forward-focused
- **[Experience Gap]**: Effectively positioned adjacent experience as transferable

### Company/Role Fit
**Score**: 3.5/5.0 🔄 **Development Area**
- **Role Interest**: Clear enthusiasm and logical career progression
- **Company Understanding**: Basic understanding of company context
- **Cultural Alignment**: Good alignment with stated company values

**Improvement Opportunities**:
- Research more specific company initiatives and recent news
- Prepare more detailed questions about team structure and growth opportunities
- Connect your experience more explicitly to current company challenges

## Question-by-Question Analysis

### Q1: "Tell me about yourself"
**Rating**: 4/5 ✅
**Response Quality**: Well-structured, appropriate length, good transition to role
**Feedback**: Strong opening hook and clear progression narrative. Consider ending with more specific connection to this role.

### Q2: "Why are you interested in this position?"
**Rating**: 3.5/5 🔄
**Response Quality**: Good company alignment, role fit somewhat generic
**Feedback**: Company research was evident, but role-specific interest could be more compelling. Research team's current challenges.

### Q3: "Tell me about a time you improved team efficiency"
**Rating**: 4.5/5 ✅
**Response Quality**: Excellent STAR structure, clear impact, good detail
**Feedback**: Outstanding example with specific outcomes. This is interview-ready.

### Q4: "How would you handle conflicting stakeholder priorities?"
**Rating**: 3/5 🔄
**Response Quality**: Logical process, but theoretical rather than experience-based
**Feedback**: Framework was sound, but prepare a specific example of managing this situation.

### Q5: "What questions do you have for me?"
**Rating**: 4/5 ✅
**Response Quality**: Thoughtful questions showing genuine interest
**Feedback**: Good variety of questions. Consider adding one about team challenges or growth opportunities.

## Areas of Excellence
1. **Professional Communication**: Articulate, confident, appropriate tone
2. **Authentic Examples**: Stories felt genuine and were well-detailed
3. **Problem-Solving Approach**: Logical thinking process clearly explained
4. **Growth Mindset**: Good demonstration of learning from challenges

## Priority Improvement Areas
1. **Quantifiable Results**: Add more specific metrics to impact statements
2. **Company Research Depth**: More specific knowledge of company context and challenges  
3. **Response Conciseness**: Some answers could be more direct and focused
4. **Follow-Up Example Preparation**: Additional stories for common behavioral questions

## Recommended Next Steps

### Immediate Actions (Before Real Interview):
- [ ] **Research Company Specifics**: Recent news, team structure, current initiatives
- [ ] **Prepare 2-3 Additional Examples**: Focus on quantifiable impact stories
- [ ] **Practice Response Timing**: Aim for 90-120 seconds for behavioral questions
- [ ] **Develop Thoughtful Questions**: 4-5 questions showing strategic thinking about role

### Practice Recommendations:
- [ ] **Mock Interview #2**: Focus on company-specific scenarios and deeper technical questions
- [ ] **STAR Story Refinement**: Add more specific metrics to your top 5 stories
- [ ] **Response Timing Practice**: Record yourself answering key questions
- [ ] **Company Culture Research**: Understand team dynamics and working style

## Interview Prediction
**Likelihood of Advancing**: 75-80%
**Strongest Selling Points**: Technical competency, problem-solving approach, authentic communication
**Potential Concerns**: Need for more specific metrics, depth of company research
**Interviewer's Likely Follow-Up**: Technical deep-dive, specific examples of business impact

## Overall Assessment
You demonstrated strong interview skills and would likely make a positive impression. Your communication style is professional and engaging, and your examples show real value creation. The main opportunities are in preparation depth - more specific company research, additional quantifiable examples, and refined response timing.

You're very close to being fully interview-ready. One more focused practice session addressing the specific areas above should position you excellently for the real interview.

**Confidence Level for Real Interview**: 85% - High confidence recommended
```

### Step 6: Knowledge Base Enhancement

#### Interview Performance Documentation
Create comprehensive interview records in `/data/mock-interviews/[job-title]-mock-[date].md`:

```markdown
# Mock Interview Record: [Company] - [Role]

## Interview Details
- **Date**: [Date]
- **Duration**: [X] minutes  
- **Type**: [Standard/Focused/Stress Test]
- **Interviewer Persona**: [Company-appropriate persona used]
- **Overall Rating**: [X.X/5.0]

## Performance Metrics
- **Communication**: [Score]/5.0
- **Technical Competency**: [Score]/5.0  
- **Behavioral Examples**: [Score]/5.0
- **Concern Management**: [Score]/5.0
- **Company Fit**: [Score]/5.0

## Key Responses Practiced
### [Question 1]
**User Response**: "[Actual response given]"
**Assessment**: [Rating and feedback]
**Improvements**: [Specific recommendations]

### [Question 2]
**User Response**: "[Actual response given]"
**Assessment**: [Rating and feedback]
**Improvements**: [Specific recommendations]

## Areas of Excellence
1. [Strength 1]: [Specific evidence]
2. [Strength 2]: [Specific evidence]

## Priority Development Areas  
1. [Area 1]: [Specific improvement needed]
2. [Area 2]: [Specific improvement needed]

## Follow-Up Actions Completed
- [ ] [Action 1]: [Completion status]
- [ ] [Action 2]: [Completion status]

## Next Mock Interview Focus
Based on this session, next practice should emphasize:
- [Focus area 1]
- [Focus area 2]
- [Focus area 3]
```

#### Profile and Experience Enhancement
Update relevant data files with:
- **Refined STAR Stories**: Improved versions based on feedback
- **New Examples Developed**: Additional stories created during simulation
- **Confidence Level Updates**: Adjusted based on performance
- **Interview Readiness Status**: Current preparation level assessment

## Enhanced Simulation Features

### Realistic Interview Dynamics
- **Natural Conversation Flow**: Questions build on previous responses
- **Interviewer Personality**: Consistent persona throughout simulation
- **Time Pressure**: Realistic pacing and time management
- **Unexpected Questions**: Curveballs based on user's background
- **Energy Management**: Fatigue simulation for longer interviews

### Advanced Feedback Mechanisms
- **Real-Time Coaching**: Immediate feedback on response quality
- **Pattern Recognition**: Identification of recurring issues
- **Comparative Analysis**: Performance against interview best practices
- **Confidence Building**: Positive reinforcement for strong responses
- **Strategic Advice**: Specific recommendations for improvement

### Adaptive Difficulty
- **Beginner Mode**: Supportive questioning with hints and guidance
- **Standard Mode**: Realistic interview pressure and expectations
- **Advanced Mode**: Challenging follow-ups and stress scenarios
- **Expert Mode**: Senior-level strategic thinking and leadership assessment

## Completion Checklist

Before concluding mock interview session:
- ✅ **Full Interview Simulation**: Complete question sequence executed
- ✅ **Real-Time Feedback**: Performance assessment provided throughout
- ✅ **Comprehensive Analysis**: Detailed post-interview review completed
- ✅ **Improvement Plan**: Specific next steps identified
- ✅ **Knowledge Base Updates**: All data files enhanced with session results
- ✅ **Confidence Assessment**: Updated readiness level documented
- ✅ **Follow-Up Recommendations**: Next practice session focus defined

## Integration with Interview Preparation

The mock interview system builds directly on the interview preparation work:
- **Prepared Topics**: Tests responses developed in preparation phase
- **Concern Areas**: Validates strategic approaches to challenging questions
- **STAR Stories**: Evaluates interview-ready examples under realistic conditions
- **Company Fit**: Assesses positioning and cultural alignment messaging
- **Confidence Building**: Provides safe environment to practice and refine responses

This comprehensive mock interview simulation provides realistic practice that mirrors actual interview conditions while delivering actionable feedback for continuous improvement and confidence building.
