
# Rule: Generate Customized Cover Letter

## Goal
Create a compelling, personalized cover letter that complements the customized CV by highlighting verified experience and demonstrating genuine interest in the specific role and company.

## System Context Integration
**MANDATORY FIRST STEP:** Load user profile and core system prompt for personalized cover letter generation:

1. **Read Core System Prompt**: `/system-prompt/core-system-prompt.md` for strategic communication excellence and industry knowledge
2. **Read User Profile**: `/data/user-profile.md` for personalized letter approach:
   - Communication style and tone preferences guide letter personality and voice
   - Career transition context shapes story arc (same role/level up/industry switch)
   - Cultural fit priorities affect company culture emphasis and values alignment
   - Risk tolerance determines positioning confidence and growth narrative approach
   - Target role context informs specific value proposition and fit demonstration

**Personalization Application:**
- Match letter tone and style to user's professional communication preferences
- Emphasize story elements most relevant to user's career transition goals
- Highlight cultural fit aspects based on user's company stage and values priorities
- Apply appropriate positioning confidence matching user's risk tolerance
- Focus value proposition on user's target role context and competitive advantages

## Prerequisites
- Job analysis completed (`analyze-job-posting.mdc`)
- Experience verification finished (`verify-experience.mdc`)
- CV generated (`generate-cv.mdc`)
- Company research (optional but recommended)

## WORKFLOW POSITION
This rule is Step 4 (optional) in the sequence:
1. ✅ Job analysis (`analyze-job-posting.mdc`)
2. ✅ Experience verification (`verify-experience.mdc`)
3. ✅ CV generation (`generate-cv.mdc`)
4. 🎯 **CURRENT:** Cover letter generation (`generate-cover-letter.mdc`)

## Cover Letter Strategy

### Structure Overview
1. **Opening**: Specific role + compelling hook
2. **Body Paragraph 1**: Most relevant verified experience
3. **Body Paragraph 2**: Additional qualifications + cultural fit
4. **Body Paragraph 3**: Company knowledge + enthusiasm
5. **Closing**: Clear next steps + professional sign-off

### Tone Matching
Based on job analysis, adapt tone:
- **Startup/Tech**: Enthusiastic, forward-thinking, results-oriented
- **Corporate**: Professional, structured, achievement-focused
- **Creative**: Engaging, innovative, portfolio-driven
- **Non-profit**: Mission-driven, impact-focused, collaborative

## Generation Process

### Step 1: Extract Key Elements

#### From Job Analysis
- Specific role title and department
- 2-3 most critical requirements
- Company values and culture indicators
- Hiring manager name (if available)
- Application context (referral, job board, etc.)

#### From Verification Log
- Strongest verified experiences matching requirements
- Quantified achievements relevant to role
- Transferable skills worth highlighting
- Cultural fit indicators from past roles

#### From Personal Data
- Current title and company
- Career motivation/goals
- Relevant personal projects or interests
- Geographic preferences

### Step 2: Craft Opening Paragraph

#### Template Structure
```
Dear [Hiring Manager/Hiring Team],

[Hook: Specific interest or connection] + [Role application] + [Brief value proposition based on strongest verified match]
```

#### Hook Options
- **Company Connection**: "Having followed [Company]'s work on [specific project/initiative]..."
- **Referral**: "[Contact name] recommended I reach out about..."  
- **Achievement Alignment**: "When I [specific verified achievement], I realized..."
- **Industry Insight**: "As someone who has [relevant experience], I'm excited by [company direction]..."

#### Example Opening
```
Dear [Hiring Manager],

Having followed GitLab's innovative approach to remote-first product development, I'm excited to apply for the Senior Product Designer position. My 15+ years designing enterprise B2B software and technical interfaces for distributed teams at companies like Datameer directly aligns with GitLab's needs for complex developer tools and admin interfaces.
```

### Step 3: Build Body Paragraphs

#### Paragraph 1: Primary Qualification
Lead with strongest verified experience:

```
[Transition to main qualification] + [Specific verified example with metrics] + [Direct connection to role requirements]
```

Example:
```
At Datameer, I led the design of complex data visualization interfaces used by technical teams at Fortune 500 companies. I redesigned the admin panel architecture, resulting in 40% faster task completion for platform administrators and 60% reduction in support tickets. This experience directly maps to GitLab's need for intuitive developer tools and technical interfaces that scale across diverse user skill levels.
```

#### Paragraph 2: Additional Value
Combine 2-3 supporting qualifications:

```
[Secondary verified skill] + [Cultural/team fit example] + [Growth mindset or learning ability]
```

Example:
```
Beyond technical design skills, my experience managing design teams at Staffbase and mentoring junior designers aligns with GitLab's collaborative culture. I've consistently worked in fast-paced, data-driven environments where user feedback directly shaped product decisions - an approach I see reflected in GitLab's transparent, iteration-focused development process.
```

#### Paragraph 3: Company Knowledge + Enthusiasm
Show specific interest and research:

```
[Specific company knowledge] + [Genuine enthusiasm] + [Value you bring to their mission]
```

Example:
```
I'm particularly drawn to GitLab's mission of democratizing software development through intuitive tools. Your recent expansion into CI/CD visualization features represents exactly the type of complex technical interface design challenges I've solved throughout my career. I'm excited to contribute to tools that empower development teams worldwide to ship better software faster.
```

### Step 4: Professional Closing

#### Standard Structure
```
[Enthusiasm for next steps] + [Interview availability] + [Professional sign-off]
```

Example:
```
I'd welcome the opportunity to discuss how my verified experience designing enterprise technical interfaces can contribute to GitLab's continued growth. I'm available for interviews at your convenience and happy to provide additional portfolio examples.

Best regards,
[Your name]
```

### Step 5: Generate Multiple Versions

Create three formats:

#### 1. HTML Interactive Version
File: `/outputs/cover-letters/[company]-[role]-cover-letter.html`
- Matches CV styling
- Inline editing enabled
- Print-optimized formatting
- Auto-save functionality

#### 2. PDF Version
File: `/outputs/cover-letters/[company]-[role]-cover-letter.pdf`
- Professional formatting
- Consistent with CV design
- Ready for email attachment

#### 3. Plain Text Version
File: `/outputs/cover-letters/[company]-[role]-cover-letter.txt`
- Email body ready
- ATS system compatible
- No formatting dependencies

## Quality Assurance

### Content Verification
- All achievements traceable to verification log
- No embellished claims or responsibilities
- Consistent with CV content
- Specific to target company and role

### Professional Standards
- Error-free grammar and spelling
- Appropriate tone and formality
- Proper business letter format
- Professional sign-off

### Customization Check
- Company name correct throughout
- Role title exactly as posted
- Specific requirements addressed
- Demonstrates genuine research/interest

## Template Structure

### HTML Template
```html
<!DOCTYPE html>
<html>
<head>
    <title>{{name}} - Cover Letter</title>
    <style>
        /* Match CV styling for consistency */
        body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 650px; margin: 0 auto; padding: 40px 20px; }
        .header { margin-bottom: 30px; }
        .date { margin-bottom: 20px; color: #666; }
        .recipient { margin-bottom: 20px; }
        .body { margin-bottom: 30px; }
        .closing { margin-top: 30px; }
        .editable { transition: all 0.2s; }
        .editing-enabled .editable:hover { background: rgba(52,152,219,0.1); }
    </style>
</head>
<body>
    <div class="toolbar">
        <button onclick="toggleEditing()">Enable Editing</button>
        <button onclick="saveToPDF()">Export PDF</button>
        <button onclick="saveData()">Save Changes</button>
    </div>
    
    <div class="letter">
        <div class="header">
            <h1>{{name}}</h1>
            <p>{{email}} | {{phone}}</p>
        </div>
        
        <div class="date editable" contenteditable="false">{{date}}</div>
        
        <div class="recipient editable" contenteditable="false">
            {{hiringManager}}<br>
            {{company}}<br>
            {{address}}
        </div>
        
        <div class="salutation editable" contenteditable="false">
            Dear {{salutation}},
        </div>
        
        <div class="body">
            <p class="editable" contenteditable="false">{{openingParagraph}}</p>
            <p class="editable" contenteditable="false">{{bodyParagraph1}}</p>
            <p class="editable" contenteditable="false">{{bodyParagraph2}}</p>
            <p class="editable" contenteditable="false">{{bodyParagraph3}}</p>
        </div>
        
        <div class="closing">
            <p class="editable" contenteditable="false">{{closingParagraph}}</p>
            <p class="editable" contenteditable="false">{{signOff}},<br>{{name}}</p>
        </div>
    </div>
    
    <script src="../templates/cover-letter-editor.js"></script>
</body>
</html>
```

## Output Summary

```
✅ Cover Letter Generated

📄 Files Created:
- Interactive: /outputs/cover-letters/[company]-[role]-cover-letter.html
- PDF: /outputs/cover-letters/[company]-[role]-cover-letter.pdf
- Text: /outputs/cover-letters/[company]-[role]-cover-letter.txt

📊 Content Analysis:
- Verified Claims: [X]/[X total claims]
- Company-Specific Details: [X mentioned]
- Requirements Addressed: [X]/[X key requirements]
- Word Count: [X words] (optimal: 250-400)

🎯 Customization Applied:
- Role-specific opening: ✅
- Verified experience emphasis: ✅
- Company research integration: ✅
- Cultural alignment: ✅

📝 Ready for:
- Email submission ✅
- Online application systems ✅
- PDF attachment ✅
- Final editing and review ✅

Next: Review both CV and cover letter for consistency, then submit application!
```

## Best Practices

### Content Guidelines
- Lead with strongest verified experience
- Include specific, quantified achievements
- Address 2-3 key job requirements explicitly
- Show genuine company knowledge
- Keep to one page maximum

### Tone Guidelines
- Match company culture and role level
- Be confident but not boastful
- Show enthusiasm without desperation
- Maintain professional formality
- Use active voice and strong verbs

### Technical Guidelines
- Consistent formatting with CV
- Professional email-ready versions
- ATS-compatible plain text backup
- Error-free spelling and grammar
- Proper business letter structure

This cover letter generation ensures authentic, compelling applications that complement your verified CV with genuine enthusiasm and company-specific customization.
