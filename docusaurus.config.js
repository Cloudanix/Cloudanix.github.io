module.exports = {
  title: 'Cloudanix Docs',
  description: 'cloudanix documentation',
  tagline: '',
  url: 'https://docs.cloudanix.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'cloudanix', // Usually your GitHub org/user name.
  projectName: 'cloudanix.github.io', // Usually your repo name.
  deploymentBranch: 'main',
  themeConfig: {
    navbar: {
      title: 'Documentation',
      logo: {
        alt: 'Cloudanix Docs',
        src: 'img/logo.png',
      },
      items: [
        {to: 'https://blog.cloudanix.com', label: 'Blog', position: 'left'},
        {
          href: 'https://www.cloudanix.com?ref=docs',
          label: 'Cloudanix Home',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Blog',
          items: [
            {
              label: 'Blog',
              href: 'https://blog.cloudanix.com',
            },
          ],
        },
        {
          title: 'Github',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/cloudanix',
            }
          ],
        },
        {
          title: 'Twitter',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/cloudanix',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cloudanix. Assembled using Clouds.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // Set this value to '/'.
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
};
