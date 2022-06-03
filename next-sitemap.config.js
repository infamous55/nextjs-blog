/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://infamous55.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
}

module.exports = config
