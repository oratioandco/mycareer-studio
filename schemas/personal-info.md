# Personal Info Schema

User profile data. Lives in `data/personal-info.md`.

## Structure

```yaml
---
name: "Full Name"
email: "email@example.com"
phone: "+1 234 567 8900"
location: "City, Country"
linkedin: "https://linkedin.com/in/..."
portfolio: "https://..."
github: "https://github.com/..."
---
```

## Body Sections

### Professional Summary
- 3 sentences max, 60 words max
- Honest positioning based on actual experience
- Must pass the writing quality gate

### Professional Headline
- LinkedIn-style headline
- Max 120 characters

### Work Arrangement Preferences
- Remote/hybrid/onsite experience
- Willingness to relocate

### Additional Profiles (optional)
- Twitter/X, Instagram, Dribbble, Behance
- Personal website URLs

## Validation Rules
- Name must match legal name (no nicknames in formal docs)
- Email must be professional (not personal/fun addresses)
- Location must include country
- Portfolio URL must be live and accessible
- Summary must not contain unverifiable claims
