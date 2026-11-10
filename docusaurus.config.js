
const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EverAfter Documentation',
  tagline: 'Simple guides for a better user experience',
  favicon: 'img/everafter-logo.png',

  future: {
    v4: true,
  },

  url: 'https://everafter-docs.vercel.app',
  baseUrl: '/',

  organizationName: 'Srinidhicheedalla',
  projectName: 'everafter-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/Srinidhicheedalla/everafter-docs/tree/main/',
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'EverAfter Docs',
      logo: {
        alt: 'EverAfter Matrimony Logo',
        src: 'img/everafter-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/Srinidhicheedalla/everafter-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started/overview',
            },
            {
              label: 'Account Management',
              to: '/docs/account-management/login',
            },
            {
              label: 'Help & Support',
              to: '/docs/help-support/faq',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/Srinidhicheedalla/everafter-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EverAfter Documentation. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

module.exports = config;
