// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Teachmint documentation',
  url: 'https://docs.teachmint.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'teachmint',
  projectName: 'teachmint-api-docs',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Teachmint Logo',
          src: 'img/TeachstackLogo_Dark.svg',
          srcDark: 'img/TeachstackLogo_Light.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'api/intro',
            position: 'left',
            label: 'Video Service API',
          },
          {
            type: 'doc',
            docId: 'android_sdk/getting_started',
            position: 'left',
            label: 'Android SDK',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Video Service API',
                to: 'api',
              },
              {
                label: 'Android SDK',
                to: 'android_sdk',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Teachmint',
                href: 'https://teachmint.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/parth-agr/teachmint-api-docs/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Teachmint Technologies Pvt. Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['http'],
      },
    }),
};

module.exports = config;
