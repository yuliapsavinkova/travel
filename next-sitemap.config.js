/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://sitterjourney.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/icon.tsx'], // Exclude dynamic route segments that aren't pages
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};

export default config;
