# Case Study Format: 3-Tier Progressive Disclosure

## Overview

Portfolio case studies follow a 3-tier progressive disclosure model. Each tier serves a different audience and attention span.

## The Three Tiers

### Tier 1: The Hook (Card View)
What someone sees on the portfolio landing page. Must compel them to click.

- **Title**: Short, engaging. Poses a question or states a transformation.
- **Subtitle**: One-line context setter. Who, what, where.
- **Tags**: 2-4 relevant tags for filtering.
- **Hero image**: Optional visual teaser.

**Constraints**: Title ≤80 chars. Subtitle ≤150 chars. Tags from controlled vocabulary.

### Tier 2: The Story (Full Case Study)
The main case study page. Tells the complete narrative.

**Structure** (use `sections` in JSON schema):

1. **Hero** — Visual + title + context
2. **Narrative** — The story. What happened, why it matters. Written in first person.
3. **Process** — How you approached it. Steps, methods, decisions.
4. **Outcome** — Results. Metrics, before/after, impact.
5. **Reflection** — What you learned. Honest, specific.
6. **Key Decisions** — The moments that mattered. "I chose X over Y because..."
7. **The Tension** — The hardest part. What was at stake.

**Key Decisions** and **The Tension** are the differentiators. They show judgment, not just output.

### Tier 3: The Deep Dive (Extended Detail)
For readers who want more. Can include:

- Process artifacts (wireframes, journey maps)
- Data tables
- Code samples
- Video walkthroughs
- Comparison views

Accessed via "Read more" or direct links. Not shown by default.

## Format Variants

Each case study can have multiple presentation formats:

- **in-depth** (default): Full narrative with all sections
- **executive**: Short summary, metrics-focused, ≤2 min read
- **blog**: Conversational tone, opinionated, process-heavy
- **process**: Step-by-step, methodical, educational
- **narrative**: Story-driven, emotional arc, first-person

Set `format_priority` in the JSON to define which formats a case study supports.

## Writing Rules

1. First person, active voice
2. Specific > vague ("40 components" > "a large design system")
3. Honest about challenges and failures
4. No jargon without context
5. Every claim must be interview-defensible
6. Pass the writing quality gate

## JSON Schema

See `schemas/case-study.json` for the complete schema definition.
