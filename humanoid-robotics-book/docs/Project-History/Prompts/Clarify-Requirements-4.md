---
id: 4
title: Clarify Humanoid Robotics Book Requirements
stage: spec
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20250929
feature: humanoid-robotics-book
branch: 001-humanoid-robotics-book
user: null
command: /sp.clarify
labels: [clarification, requirements]
links:
  spec: specs/001-humanoid-robotics-book/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-humanoid-robotics-book/spec.md
tests:
  null
---

## Prompt

is running… Purpose:
Clarify the complete requirements of the Physical AI & Humanoid Robotics Hackathon based strictly on the
provided project description (PDF/text).

Your task is to CONFIRM understanding, not redesign or add assumptions.

Clarify and explicitly confirm the following:

1. Hackathon Core Requirements
- AI-native textbook creation using Spec-Kit Plus and Claude Code
- Book written in Markdown and built with Docusaurus
- Deployment to GitHub Pages or equivalent static hosting
- Embedded RAG chatbot integrated into the book using:
  - OpenAI Agents or ChatKit SDKs
  - FastAPI backend
  - Qdrant Cloud (free tier) as vector database
  - Neon Serverless Postgres for metadata and storage
- Chatbot must answer:
  - General questions about the whole book
  - Questions based ONLY on user-selected text
- Base scoring out of 100 points

2. Bonus Scoring Confirmation
- Up to 50 points for reusable intelligence:
  - Claude Code Subagents
  - Agent Skills
- Up to 50 points for authentication using Better-Auth
  - Signup and signin required
  - Collect user background (software + hardware experience)
- Up to 50 points for:
  - Logged-in user content personalization per chapter
- Up to 50 points for:
  - On-demand Urdu translation per chapter
- Bonus items are optional and additive

3. Course & Content Coverage Confirmation
Confirm understanding that the book must fully cover:
- Physical AI and Embodied Intelligence concepts
- ROS 2:
  - Nodes, Topics, Services, Actions
  - rclpy Python integration
  - URDF for humanoid robots
- Digital Twin:
  - Gazebo physics simulation
  - Unity visualization and interaction
  - Sensor simulation (LiDAR, depth camera, IMU)
- NVIDIA Isaac:
  - Isaac Sim
  - Isaac ROS
  - VSLAM and Nav2 navigation
  - Perception and manipulation pipelines
- Vision-Language-Action (VLA):
  - Voice-to-action using Whisper
  - LLM-based task planning
  - Multi-modal humanoid interaction
- Capstone:
  - Autonomous humanoid in simulation
  - Voice command to perception, navigation, and manipulation

4. Hardware Requirements Confirmation
Confirm understanding of:
- Digital Twin Workstation:
  - Ubuntu 22.04
  - RTX 4070 Ti minimum (3090/4090 ideal)
  - High RAM and CPU requirements
- Edge AI Kit:
  - NVIDIA Jetson Orin Nano or Orin NX
- Sensors:
  - Intel RealSense D435i or D455
  - IMU
  - Microphone/speaker array
- Robot Options:
  - Unitree Go2 (proxy robot)
  - Unitree G1 or similar humanoids
  - Budget humanoid kits (Hiwonder TonyPi) with limitations
- Cloud-based alternative (AWS / Omniverse Cloud) and its trade-offs

5. Book Structure Requirements
Confirm that the book must:
- Contain approximately 8 to 12 chapters
- Each chapter be roughly 500–1500 words
- Follow a consistent structure:
  - Chapter title
  - Learning objectives
  - Main explanation
  - Examples or code snippets
  - Student activity or exercise
  - Summary
- Include proper Docusaurus frontmatter
- Use APA-style citations

6. Technical and Editorial Constraints
Confirm adherence to:
- Valid Markdown only
- Working internal links
- GitHub Pages compatibility
- No invalid syntax or broken builds
- No emojis in chapter content
- No system prompt leakage or meta-commentary
- Clean, reproducible repository structure

Output Requirements:
- Produce a clear, structured clarification summary
- Explicitly confirm understanding of all deliverables, constraints, and expectations
- Do NOT introduce new requirements
- Base the clarification strictly on the provided hackathon description

## Response snapshot

## Clarification Summary: Physical AI & Humanoid Robotics Hackathon

I have reviewed the provided project description and confirm my understanding of the requirements as follows:

### 1. Hackathon Core Requirements
- **AI-native textbook creation**: Confirmed. The book will be created using Spec-Kit Plus and Claude Code.
- **Book format and build**: Confirmed. The book will be written in Markdown and built with Docusaurus.
- **Deployment**: Confirmed. Deployment will be to GitHub Pages or equivalent static hosting.
- **Embedded RAG chatbot**: Confirmed. The chatbot will be integrated into the book using OpenAI Agents or ChatKit SDKs, with a FastAPI backend, Qdrant Cloud (free tier) as vector database, and Neon Serverless Postgres for metadata and storage.
- **Chatbot functionality**: Confirmed. The chatbot must answer general questions about the whole book and questions based only on user-selected text.
- **Base scoring**: Confirmed. Base scoring is out of 100 points.

### 2. Bonus Scoring Confirmation
- **Reusable intelligence**: Confirmed. Up to 50 points for Claude Code Subagents and Agent Skills.
- **Authentication**: Confirmed. Up to 50 points for authentication using Better-Auth, requiring signup and signin, and collecting user background (software + hardware experience).
- **Content personalization**: Confirmed. Up to 50 points for logged-in user content personalization per chapter.
- **Urdu translation**: Confirmed. Up to 50 points for on-demand Urdu translation per chapter.
- **Bonus items**: Confirmed. Bonus items are optional and additive.

### 3. Course & Content Coverage Confirmation
- **Physical AI and Embodied Intelligence**: Confirmed. The book must fully cover these concepts.
- **ROS 2**: Confirmed. Coverage includes Nodes, Topics, Services, Actions, rclpy Python integration, and URDF for humanoid robots.
- **Digital Twin**: Confirmed. Coverage includes Gazebo physics simulation, Unity visualization and interaction, and sensor simulation (LiDAR, depth camera, IMU).
- **NVIDIA Isaac**: Confirmed. Coverage includes Isaac Sim, Isaac ROS, VSLAM and Nav2 navigation, and perception and manipulation pipelines.
- **Vision-Language-Action (VLA)**: Confirmed. Coverage includes Voice-to-action using Whisper, LLM-based task planning, and multi-modal humanoid interaction.
- **Capstone**: Confirmed. The capstone involves an autonomous humanoid in simulation with voice command to perception, navigation, and manipulation.

### 4. Hardware Requirements Confirmation
- **Digital Twin Workstation**: Confirmed. Requires Ubuntu 22.04, RTX 4070 Ti minimum (3090/4090 ideal), and high RAM and CPU.
- **Edge AI Kit**: Confirmed. Requires NVIDIA Jetson Orin Nano or Orin NX.
- **Sensors**: Confirmed. Includes Intel RealSense D435i or D455, IMU, and microphone/speaker array.
- **Robot Options**: Confirmed. Includes Unitree Go2 (proxy robot), Unitree G1 or similar humanoids, and budget humanoid kits (Hiwonder TonyPi) with limitations.
- **Cloud-based alternative**: Confirmed. Awareness of AWS / Omniverse Cloud and its trade-offs.

### 5. Book Structure Requirements
- **Chapter count**: Confirmed. Approximately 8 to 12 chapters.
- **Chapter length**: Confirmed. Each chapter roughly 500–1500 words.
- **Consistent structure**: Confirmed. Each chapter must include Title, Learning objectives, Main explanation, Examples or code snippets, Student activity or exercise, and Summary.
- **Docusaurus frontmatter**: Confirmed. Proper Docusaurus frontmatter is required.
- **Citations**: Confirmed. APA-style citations are required.

### 6. Technical and Editorial Constraints
- **Valid Markdown**: Confirmed. Only valid Markdown is allowed.
- **Working internal links**: Confirmed. Internal links must be working.
- **GitHub Pages compatibility**: Confirmed. The project must be compatible with GitHub Pages.
- **No invalid syntax or broken builds**: Confirmed.
- **No emojis**: Confirmed. No emojis in chapter content.
- **No system prompt leakage or meta-commentary**: Confirmed.
- **Clean, reproducible repository structure**: Confirmed.

All points in the clarification request are understood and align with the existing specification. No ambiguities were detected that require further questioning.

**Coverage Summary:**
- Functional Scope & Behavior: Clear
- Domain & Data Model: Clear
- Interaction & UX Flow: Clear
- Non-Functional Quality Attributes: Clear
- Integration & External Dependencies: Clear
- Edge Cases & Failure Handling: Clear
- Constraints & Tradeoffs: Clear
- Terminology & Consistency: Clear
- Completion Signals: Clear
- Misc / Placeholders: Clear

Ready to proceed to `/sp.plan`.

## Outcome

- ✅ Impact: Clarified and confirmed understanding of all hackathon requirements.
- 🧪 Tests: N/A
- 📁 Files: N/A (no changes to spec.md, only confirmation)
- 🔁 Next prompts: Proceed to `/sp.plan`.
- 🧠 Reflection: Successfully clarified requirements. `create-phr.sh` script not found, used agent-native method.

## Evaluation notes (flywheel)

- Failure modes observed: `create-phr.sh` script not found.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Confirm `create-phr.sh` path.
