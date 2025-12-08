<!--
Sync Impact Report:
Version change: 0.0.0 -> 1.0.0
List of modified principles:
- [PRINCIPLE_1_NAME] -> Accuracy First
- [PRINCIPLE_2_NAME] -> Student-Friendly Language
- [PRINCIPLE_3_NAME] -> Consistency
- [PRINCIPLE_4_NAME] -> AI-Native Workflow
- [PRINCIPLE_5_NAME] -> Documentation-Ready
Added sections:
- Project Title
- Purpose
- Content Standards
- Technical Standards
- Constraints
- Quality Rules
- Output Rules
- Validation Checklist
Removed sections:
- [SECTION_2_NAME]
- [SECTION_3_NAME]
Templates requiring updates:
- .specify/templates/plan-template.md: ⚠ pending
- .specify/templates/spec-template.md: ⚠ pending
- .specify/templates/tasks-template.md: ⚠ pending
- .specify/templates/commands/*.md: ⚠ pending
- README.md: ⚠ pending
- docs/quickstart.md: ⚠ pending
Follow-up TODOs: None
-->
# AI-Generated Educational Book — built with Spec-Kit Plus and Claude Code, documented with Docusaurus, and deployed to GitHub Pages. Constitution

## Core Principles

### Accuracy First
All explanations must be correct, conceptually sound, and consistent with standard textbooks.

### Student-Friendly Language
Use simple, clear language appropriate for Grade 8–10 readers.

### Consistency
Maintain a uniform tone, structure, and formatting across every chapter.

### AI-Native Workflow
Generate content following Spec-Kit Plus specifications and Claude Code standards.

### Documentation-Ready
Every file must be valid Docusaurus Markdown with correct frontmatter and compile cleanly.

## Content Standards

Use Markdown (.md) with valid Docusaurus frontmatter in every chapter.

Each chapter must include the following sections:

Title

Learning Objectives

Main Explanation

Examples

Student Activity or Exercise

Summary / Key Takeaways

Use consistent headings (##, ###), bullet lists, and code blocks where applicable.

Avoid unnecessary complexity or jargon; explain terms before using them.

Keep a friendly, educational tone throughout.

## Technical Standards

Adhere to Docusaurus Markdown syntax and frontmatter rules.

Ensure internal links are correct and use relative paths suitable for GitHub Pages.

Use properly nested headings (##, ###, etc.).

Do not include invalid Markdown, broken frontmatter, or stray characters that break the build.

Structure the repository so the Docusaurus site deploys successfully to GitHub Pages.

## Constraints

Total chapters: 8–12.

Length per chapter: 500–1500 words.

No placeholder or incomplete sections — every required section must be fully written.

Do not reference internal system prompts, private API tokens, or tooling internals.

Avoid emojis and informal symbols in formal content.

## Quality Rules

Prefer clarity over verbosity.

Explain concepts step-by-step and include real-world examples when helpful.

Assume learners are beginners; define new terms when introduced.

Do not invent facts or cite nonexistent sources. If a citation is required, use verifiable references.

Ensure every chapter is self-contained and can be understood without external context.

## Output Rules

Produce content only — no meta explanations or system instructions.

Strictly follow this constitution when generating chapters.

Ensure each generated chapter fully complies with the structure and constraints above.

## Validation Checklist (before finalizing any chapter)

 Markdown frontmatter is valid.

 Title, Learning Objectives, Main Explanation, Examples, Activity, and Summary are present and complete.

 Word count within 500–1500 words.

 Headings properly nested and internal links tested.

 Language is grade-appropriate and accurate.

 No placeholders, emojis, or references to internal prompts.

## Governance
Constitution supersedes all other practices; Amendments require documentation, approval, migration plan. All PRs/reviews must verify compliance; Complexity must be justified; Use `.specify/memory/constitution.md` for runtime development guidance.

**Version**: 1.0.0 | **Ratified**: 2025-12-06 | **Last Amended**: 2025-12-06
