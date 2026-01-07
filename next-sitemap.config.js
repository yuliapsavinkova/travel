/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://sitterjourney.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/icon', '/apple-icon', '/_next', '/404'],
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
