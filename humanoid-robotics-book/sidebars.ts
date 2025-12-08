import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['Introduction/README', 'Introduction/CLAUDE', 'Introduction/Introduction'],
    },
    {
      type: 'category',
      label: 'Humanoid Robotics Specification',
      items: [
        'Humanoid-Robotics/Plan',
        'Humanoid-Robotics/Specification',
        'Humanoid-Robotics/Checklist-Requirements',
      ],
    },
    {
      type: 'category',
      label: 'Project History Prompts',
      items: [
        'Project-History/Prompts/1', // Corrected ID based on available IDs
        'Project-History/Prompts/2', // Corrected ID based on available IDs
        'Project-History/Prompts/3', // Corrected ID based on available IDs
        'Project-History/Prompts/4', // Corrected ID based on available IDs
      ],
    },
  ],
};

export default sidebars;
