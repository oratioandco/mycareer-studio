# CV Layout Specifications - Standard Format

## Critical Layout Requirements

### Page Dimensions
- **Page Size**: A4 (210mm x 297mm)
- **SVG ViewBox**: 0 0 794 1123 (matches A4 proportions)
- **Print Safe Area**: 20px margin on all sides

### Two-Column Layout Structure

#### Left Column (Contact & Supporting Info)
- **X Position**: 65px (start)
- **Width**: 215px (65px to 280px)
- **Content**:
  - Name (large header)
  - Contact information
  - Education
  - Languages
  - Current Project (if applicable)

#### Right Column (Main Content)
- **X Position**: 320px (start)
- **Width**: 399px (320px to 719px) - **CRITICAL: Never exceed 719px**
- **Content**:
  - Profile summary
  - Professional experience
  - Skills (if space allows)

### Experience Entry Format (MANDATORY)

**Structure for each job entry:**
```
Job Title                                    Date Range
Company Name (Business Description) • Location
• Bullet point description
• Bullet point description
```

**SVG Implementation:**
```svg
<!-- Job Title and Date on same line -->
<text x="320" y="[Y]" class="switzer job-title dark">Job Title</text>
<text x="580" y="[Y]" class="switzer job-date gray">YYYY-YYYY</text>

<!-- Company line with location -->
<text x="320" y="[Y+15]" class="switzer job-title gray">Company Name (Business Description) • Location</text>

<!-- Bullet points -->
<text x="320" y="[Y+32]" class="switzer job-bullet dark">• First responsibility/achievement</text>
<text x="320" y="[Y+47]" class="switzer job-bullet dark">• Second responsibility/achievement</text>
```

### Text Positioning Rules

#### Right Column Text Wrapping
- **Maximum line length**: 67 characters
- **Text must fit within**: 320px to 719px (399px width)
- **Line height**: 18px for body text, 15px for bullet points
- **Bullet spacing**: 15px between bullets

#### Date Positioning
- **Page 1 experiences**: x="580" (allows proper spacing)
- **Page 2 experiences**: x="400" (narrower due to full width usage)
- **Date format**: YYYY-YYYY or YYYY-Gegenwart

#### Location Requirements
- **Always include location** after company description
- **Format**: Company (Description) • Location
- **Common locations**: Berlin, Remote, Deutschland, USA, Leipzig

### Typography Specifications

#### Font Classes
```css
.name { font-size: 36px; font-weight: normal; }
.section-title { font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 2px; }
.job-title { font-size: 11px; font-weight: 500; }
.job-date { font-size: 9px; font-weight: 400; }
.job-bullet { font-size: 10px; line-height: 1.4; font-weight: 400; }
.profile-text { font-size: 11px; line-height: 1.6; font-weight: 400; }
```

#### Color Scheme
- **Blue accent**: #2f5f7f (headings, name, section titles)
- **Dark text**: #1a1a1a (main content)
- **Gray text**: #666 (supporting info, dates)
- **Light gray**: #999 (labels)

### Content Distribution

#### Page 1
- Left column: Contact, Education, Languages, Current Project
- Right column: Profile (8-9 lines max), Recent Experience (4 most recent roles)

#### Page 2
- Full width: Continued experience, Earlier career progression, Skills
- Skills section: Only if space allows after all experience entries

### Quality Assurance Checklist

Before finalizing any CV, verify:
- [ ] Right column text does not exceed 719px
- [ ] All job entries include location
- [ ] Dates are aligned consistently (580px page 1, 400px page 2)
- [ ] Text wraps properly within column constraints
- [ ] Profile section is 8-9 lines maximum
- [ ] Company descriptions are concise (under 50 characters)
- [ ] Bullet points are concise and fit on single lines when possible

### Language Considerations

#### German CVs
- Use proper German business terminology
- Include "• Deutschland" for German locations
- Section titles: ADRESSE, AUSBILDUNG, SPRACHEN, BERUFSERFAHRUNG, KERNKOMPETENZEN
- Date format: YYYY-YYYY or YYYY-Gegenwart

#### English CVs
- Section titles: ADDRESS, EDUCATION, LANGUAGES, EXPERIENCE, CORE COMPETENCIES
- Date format: YYYY-YYYY or YYYY-Present

## Mandatory Implementation Notes

1. **Text width calculation**: Always test text length before positioning
2. **Responsive considerations**: SVG must scale properly for PDF export
3. **Print optimization**: Ensure all text is within print safe areas
4. **Font fallbacks**: Include system font fallbacks for compatibility
5. **ATS compatibility**: Hidden text layer must include all visible content

This specification must be followed for ALL future CV generations to ensure consistent, professional layouts.