
const sidebars = {
  tutorialSidebar: [
    'intro',

    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/overview'],
    },

    {
      type: 'category',
      label: 'Installation Guide',
      items: ['installation-guide/installation'],
    },

    {
      type: 'category',
      label: 'Account Management',
      items: [
        'account-management/registration',
        'account-management/login',
        'account-management/forgot-password',
      ],
    },

    {
      type: 'category',
      label: 'API Reference',
      items: ['api-reference/user-registration-api'],
    },

    {
      type: 'category',
      label: 'Release Notes',
      items: ['release-notes/version-1'],
    },

    {
      type: 'category',
      label: 'Project Management',
      items: ['project-management/sprint-1'],
    },

    {
      type: 'category',
      label: 'Help & Support',
      items: ['help-support/faq'],
    },
  ],
};

module.exports = sidebars;
