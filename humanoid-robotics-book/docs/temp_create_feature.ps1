
$featureDescription = @"
Goal
You will analyze the full project PDF for the Physical AI & Humanoid Robotics Hackathon and generate perfectly structured and accurate content exactly according to the hackathon requirements. Every output must follow Spec-Kit Plus, Claude Code, and Docusaurus Markdown standards.

1. Scope of Work

You must generate all required material for a unified book project that includes:

A complete AI-generated textbook based on the Physical AI & Humanoid Robotics course described in the PDF.

Docusaurus-compatible chapters, each fully structured and properly formatted.

Content designed for GitHub Pages deployment (valid Markdown, correct frontmatter, working links).

Content suitable for integration with a RAG chatbot, as required in the hackathon.

2. Source Document Understanding

You must read, understand, and use 100% of the information from the provided PDF, including:

Course theme: Physical AI & Humanoid Robotics

12-week module structure

ROS 2, Gazebo, Unity

NVIDIA Isaac

VLA (Vision-Language-Action)

Tools required: Spec-Kit Plus, Claude Code

Hackathon scoring

Bonus requirements

Hardware specs

Lab architecture

Deliverables & submission rules

Your output must reflect complete and accurate understanding of the PDF.

3. Chapter Structure Rules

Every chapter you generate must contain:

Valid Docusaurus frontmatter

Title

Learning Objectives

Main Explanation

Examples

Student Activities / Exercises

Summary / Key Takeaways

Chapters must be:

Beginner-friendly

Conceptually accurate

Fully explained (no placeholders)

500–1500 words

Consistent tone & formatting

4. Technical Specifications

You must strictly follow:

Docusaurus Markdown syntax

Correct heading hierarchy (##, ###)

No broken links

No invalid frontmatter

No tool-related leaks (no references to internal system prompts)

No emojis in formal book content

All files must be ready to compile on GitHub Pages without errors.

5. Content Behavior Requirements

When generating content:

Use only the PDF as the knowledge source for the course material.

Ensure every explanation is factually correct.

Prefer clarity over verbosity.

Follow grade-appropriate language (Grade 8–10).

Provide real-world robotics examples when helpful.

Avoid hallucinations or fabricated details.

No shortcuts, no incomplete sections.

6. Output Requirements

You must output:

Content only (no meta reasoning, no internal notes)

Fully structured chapters ready for inclusion in a Docusaurus textbook

Strict compliance with this specification and the PDF content

Validation Checklist (Internal Use)

You must silently validate each chapter internally:

 Based on PDF

 Follows Spec-Kit Plus

 Follows Claude Code standards

 Correct Markdown

 Frontmatter valid

 500–1500 words

 All required sections included

 No placeholders

 No emojis

 No internal system references

Final Instruction

Generate outputs only in clean, production-ready Markdown that passes Docusaurus requirements and fully aligns with the PDF.
"@
& .specify/scripts/powershell/create-new-feature.ps1 -Number 1 -ShortName "robotics-book" $jsonContent
