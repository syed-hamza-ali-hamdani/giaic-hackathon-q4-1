$featureDescription = @"
Humanoid-Robotics-Book Target audience:
- BS/ADP AI students
- Robotics beginners
- Intermediate developers

Focus:
- Physical AI principles
- Embodied intelligence
- ROS 2, Gazebo, Unity, NVIDIA Isaac
- Vision-Language-Action (VLA) integration
- Humanoid robot simulation and real-world control

Success criteria:
- Covers all 4 modules in depth (ROS 2, Digital Twin, AI-Robot Brain, VLA)
- Provides practical examples and mini-projects for each module
- Explains hardware/software requirements clearly
- Students can simulate and control a humanoid robot by the end of the book
- Includes weekly learning plan for 13-week course
- Readers understand principles of embodied AI and physical robot deployment

Constraints:
- Word count: 5000–8000 words
- Format: Markdown with headings, tables, diagrams, and code examples
- Sources: Peer-reviewed articles, official ROS 2, Isaac, Gazebo, Unity documentation
- Timeline: Complete within 4 weeks

Not building:
- Full commercial robot manuals
- Ethics or policy discussions (separate paper)
- Detailed implementation guides beyond course scope
- Cloud deployment cost analysis (optional)
"@

& .specify/scripts/powershell/create-new-feature.ps1 -Number 1 -ShortName "humanoid-robotics-book" -FeatureDescription $featureDescription