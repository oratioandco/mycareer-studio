---
name: mycareer-studio
description: "AI-powered career agent for design professionals. Analyze job postings, generate tailored CVs and cover letters, prepare portfolio case studies, scaffold an Astro portfolio site, and practice interviews. Use when: creating application materials, analyzing job fit, preparing for interviews, building portfolio case studies, scaffolding a portfolio website, managing career data. Commands: setup, analyze, verify, generate cv, generate cover-letter, scaffold portfolio, prepare portfolio, add case-study, prep interview, mock-interview, status."
---

# mycareer-studio

AI career agent for design professionals. Manages career data, analyzes job fit, generates tailored application materials, and scaffolds portfolio sites.

## Setup

### First-Time Setup

Run `mycareer setup` to initialize data directory and import existing CV data. The wizard:
1. Creates `data/` structure (experiences, skills, education, projects, case-studies, jobs)
2. Imports CV from PDF, pasted text, or LinkedIn export
3. Parses into structured markdown files
4. Sets preferences (writing style, target roles, language)

### Data Location

All user data lives in `data/` (gitignored). No database. No cloud. You own everything.

```
data/
├── personal-info.md          # Name, contact, professional summary
├── user-preferences.md       # Writing style, target roles, theme selections
├── strategic-positioning.md  # Career narrative and positioning
├── experiences/              # One .md file per role
├── skills/                   # Categorized skill inventory
├── education/                # Education entries
├── projects/                 # Project documentation
├── case-studies/             # JSON case studies + filter configs
│   └── filters/              # Per-application portfolio configs
├── verification-log/         # Verified experience details
└── jobs/                     # Saved job analyses
```

## Core Workflow: The Application Pipeline

```
1. ANALYZE  →  Paste/job URL → fit score + gap analysis
2. VERIFY   →  Interactive questions → defensible experience claims
3. GENERATE →  CV + Cover Letter → tailored HTML output
4. PREPARE  →  Portfolio → matched case studies + filter config
5. PRACTICE →  Interview prep → questions + mock interview
```

### Pipeline Dependencies

```
analyze → verify → generate cv → generate cover-letter
                ↘ prepare portfolio
                ↘ prep interview → mock-interview
```

Each step reads output from previous steps. Data flows through files, not parameters.

## Commands

### `mycareer setup`
Interactive setup wizard. Imports CV data, initializes directory structure, sets preferences.

- Reads: CV input (PDF, text, LinkedIn export)
- Writes: `data/personal-info.md`, `data/experiences/*.md`, `data/skills/*.md`, `data/user-preferences.md`

### `mycareer analyze --url <URL>` / `--paste`
Analyze a job posting. Calculates fit score (0-100), identifies gaps, maps against user's data.

- Reads: `data/experiences/`, `data/skills/`, `data/personal-info.md`, `prompts/analyze-job-posting.md`
- Writes: `data/jobs/{company-slug}.md`
- Output: Fit score, strong matches, gaps, risk areas, strategic positioning notes

### `mycareer verify --job <slug>`
Interactive experience verification. Asks targeted questions using IMPACT framework. Ensures every claim is defensible.

- Reads: `data/experiences/`, `data/jobs/{slug}.md`, `prompts/verify-experience.md`
- Writes: `data/verification-log/{slug}.md`
- Output: Verified achievement bullets, confidence levels, interview-ready STAR stories

### `mycareer generate cv --job <slug> [--template modern|technical|corporate|gambarino]`
Generate a tailored CV. Only includes verified experience. Applies IMPACT framework, ATS optimization, and writing quality gate.

- Reads: `data/personal-info.md`, `data/experiences/`, `data/skills/`, `data/education/`, `data/jobs/{slug}.md`, `data/verification-log/{slug}.md`, `templates/cv/{template}.html`, `prompts/generate-cv.md`, `rules/writing-quality-gate.md`, `rules/truthfulness-checklist.md`
- Writes: `outputs/cvs/{slug}-cv.html`
- Templates: modern (default), technical, corporate, gambarino
- Quality: Runs truthfulness checklist + writing quality gate before output

### `mycareer generate cover-letter --job <slug>`
Generate a matching cover letter. Maintains consistent voice with CV.

- Reads: Same as CV + `data/user-preferences.md`, `templates/cover-letter/standard.html`, `prompts/generate-cover-letter.md`
- Writes: `outputs/cover-letters/{slug}-cover.html`

### `mycareer scaffold portfolio [--theme default|minimal] [--dir <path>]`
Scaffold a new Astro portfolio site. Copies selected theme, personalizes from user data, optionally creates GitHub repo and deploys.

- Reads: `templates/portfolio/{theme}/`, `data/personal-info.md`, `data/case-studies/*.json`
- Writes: New Astro project in target directory
- Steps:
  1. Copy theme template
  2. Personalize (name, bio, colors from `data/personal-info.md`)
  3. Convert case study JSON → markdown content files
  4. Initialize git, optionally push to GitHub
  5. Optionally deploy to Vercel/Netlify

### `mycareer prepare portfolio --job <slug>`
Match case studies against job requirements. Generate filter config for dynamic portfolio URL. Identify gaps.

- Reads: `data/case-studies/*.json`, `data/jobs/{slug}.md`, `prompts/prepare-portfolio.md`
- Writes: `data/case-studies/filters/{slug}.json`
- Output: Matched case studies with relevance scores, filter config, gap analysis

### `mycareer add case-study [--from <experience>] [--focus <topic>]`
Create or update a portfolio case study. Interactive interview for content, then generates structured JSON.

- Reads: `data/experiences/{slug}.md`, `data/verification-log/`, `schemas/case-study.json`, `prompts/create-case-study.md`
- Writes: `data/case-studies/{id}.json`
- Format: 3-tier progressive disclosure (see `references/case-study-format.md`)

### `mycareer prep interview --job <slug>`
Prepare for an interview based on job analysis. Identify likely questions, prepare STAR stories, flag concern areas.

- Reads: `data/jobs/{slug}.md`, `data/experiences/`, `data/verification-log/{slug}.md`, `prompts/interview-prep.md`
- Output: Question probability matrix, STAR story suggestions, gap navigation strategies

### `mycareer mock-interview --job <slug>`
Run a mock interview simulation. Dynamic questioning, interviewer personas, real-time feedback, post-interview analysis.

- Reads: Same as interview prep + `prompts/mock-interview.md`
- Output: Live Q&A, real-time feedback, comprehensive post-interview scorecard

### `mycareer status`
Show current profile status, application pipeline, recent activity, and quick actions.

- Reads: All data files
- Output: Profile summary, experience count, case study status, active applications

## Templates

### CV Templates (`templates/cv/`)
- `modern.html` — Clean two-column layout (default)
- `technical.html` — SVG-based, detail-oriented
- `corporate.html` — Traditional single-column
- `gambarino.html` — Gambarino-style SVG template
- `layout-specifications.md` — Typography and spacing rules

### Cover Letter Templates (`templates/cover-letter/`)
- `standard.html` — Professional cover letter layout

### Portfolio Templates (`templates/portfolio/`)
- `default/` — Full Astro site with Tailwind CSS, case study cards, dynamic filtering
- `minimal/` — Simpler alternative (Phase 2)
- `custom/` — User-added themes. Override individual components by copying them here.

#### Theme Customization
1. **Quick**: Edit `tailwind.config.js` colors in the scaffolded site
2. **Component-level**: Copy any component from `default/src/components/` to `custom/`, edit freely
3. **Full theme**: Create a new directory in `templates/portfolio/`

## Quality Rules

### Writing Quality Gate (`rules/writing-quality-gate.md`)
All CV, cover letter, and case study output must pass:
- No AI slop (em-dash chains, filler intensifiers, buzzword stacking)
- No American startup bro language
- Max 60 words in profile, 25 words per bullet
- Human voice test: read it out loud
- Concrete and specific > vague and impressive

### Truthfulness Checklist (`rules/truthfulness-checklist.md`)
Zero embellishment policy:
- Every claim traceable to user's exact words
- No fabrication of metrics, titles, or responsibilities
- No enhancement of user's modest language
- Interview-defensibility required for every statement
- Better to understate honestly than overstate falsely

### CV Content Strategy (`rules/cv-content-strategy.md`)
Layout standards, content selection rules, experience organization principles.

## Philosophy

- **Truthful**: Never embellishes. Every claim verified and interview-defensible.
- **Privacy-first**: All data local. No cloud storage, no tracking, no database.
- **Design-focused**: Built for design professionals, by a design professional.
- **Progressive**: Improves with each application. Learns patterns.
- **Open**: MIT licensed. Fork it, adapt it, make it yours.

## Prompt Files

All AI interaction templates live in `prompts/`. Each command reads its corresponding prompt file. Prompts are portable — they work within OpenClaw sessions and can be used standalone in other AI tools.

Key prompts:
- `core-system-prompt.md` — Agent persona and methodology
- `analyze-job-posting.md` — Job analysis with design-specific intelligence
- `verify-experience.md` — IMPACT framework verification
- `generate-cv.md` — Strategic CV generation
- `generate-cover-letter.md` — Cover letter generation
- `create-case-study.md` — Case study creation from experience data
- `prepare-portfolio.md` — Portfolio matching and filtering
- `interview-prep.md` — Interview question preparation
- `mock-interview.md` — Mock interview simulation
