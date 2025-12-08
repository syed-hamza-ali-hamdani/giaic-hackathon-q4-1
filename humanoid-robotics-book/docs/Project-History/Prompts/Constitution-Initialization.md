---
id: 1
title: Initialize Project Constitution
stage: constitution
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: main
user: null
command: /sp.constitution
labels: [constitution, initialization]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
  null
---

## Prompt

Project Constitution

Project Title
AI-Generated Educational Book — built with Spec-Kit Plus and Claude Code, documented with Docusaurus, and deployed to GitHub Pages.

Purpose
Create a structured, accurate, and beginner-friendly educational book suitable for school and early university students. All content must be produced following Spec-Kit Plus and Claude Code standards and be ready to compile in Docusaurus without errors.

Core Principles

Accuracy First
All explanations must be correct, conceptually sound, and consistent with standard textbooks.

Student-Friendly Language
Use simple, clear language appropriate f
or Grade 8–10 readers.

Consistency
Maintain a uniform tone, structure, and formatting across every chapter.

AI-Native Workflow
Generate content following Spec-Kit Plus specifications and Claude Code standards.

Documentation-Ready
Every file must be valid Docusaurus Markdown with correct frontmatter and compile cleanly.

Content Standards

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

Technical Standards

Adhere to Docusaurus Markdown syntax and frontmatter rules.

Ensure internal links are correct and use relative paths suitable for GitHub Pages.

Use properly nested headings (##, ###, etc.).

Do not include invalid Markdown, broken frontmatter, or stray characters that break the build.

Structure the repository so the Docusaurus site deploys successfully to GitHub Pages.

Constraints

Total chapters: 8–12.

Length per chapter: 500–1500 words.

No placeholder or incomplete sections — every required section must be fully written.

Do not reference internal system prompts, private API tokens, or tooling internals.

Avoid emojis and informal symbols in formal content.

Quality Rules

Prefer clarity over verbosity.

Explain concepts step-by-step and include real-world examples when helpful.

Assume learners are beginners; define new terms when introduced.

Do not invent facts or cite nonexistent sources. If a citation is required, use verifiable references.

Ensure every chapter is self-contained and can be understood without external context.

Output Rules

Produce content only — no meta explanations or system instructions.

Strictly follow this constitution when generating chapters.

Ensure each generated chapter fully complies with the structure and constraints above.

Validation Checklist (before finalizing any chapter)

 Markdown frontmatter is valid.

 Title, Learning Objectives, Main Explanation, Examples, Activity, and Summary are present and complete.

 Word count within 500–1500 words.

 Headings properly nested and internal links tested.

 Language is grade-appropriate and accurate.

 No placeholders, emojis, or references to internal prompts.

## Response snapshot

Initialized the project constitution to version 1.0.0, including core principles, content, technical standards, constraints, quality, and output rules, with a validation checklist and governance section.

## Outcome

- ✅ Impact: Constitution defined for AI-Generated Educational Book project.
- 🧪 Tests: N/A
- 📁 Files: Updated `.specify/memory/constitution.md`
- 🔁 Next prompts: Sync dependent templates (plan, spec, tasks) and documentation.
- 🧠 Reflection: Successfully updated the constitution and generated a sync impact report. PHR created using agent-native flow due to script not found.

## Evaluation notes (flywheel)

- Failure modes observed: `create-phr.sh` script not found.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Investigate `create-phr.sh` script path/availability.
