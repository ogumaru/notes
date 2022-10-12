// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const githubUserConfig = {
  username: "ogumaru",
  repositoryDirname: "notes",
  siteName: "Notes"
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: githubUserConfig.siteName,
  url: `https://gh.ogumaru.dev`,
  baseUrl: `/`,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  projectName: "notes",
  organizationName: "ogumaru",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          routeBasePath: "/"
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
        title: githubUserConfig.siteName,
        items: [
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
