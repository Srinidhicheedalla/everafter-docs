
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
      label: 'Account Management',
      items: [
        'account-management/registration',
        'account-management/login',
        'account-management/forgot-password',
      ],
    },

    {
      type: 'category',
      label: 'Help & Support',
      items: ['help-support/faq'],
    },
  ],
};

module.exports = sidebars;
