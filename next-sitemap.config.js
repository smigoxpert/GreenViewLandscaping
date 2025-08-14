/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://greenthumb-landscaping.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://greenthumb-landscaping.vercel.app/sitemap.xml',
    ],
  },
  exclude: ['/api/*', '/admin/*'],
  changefreq: 'weekly',
  priority: 0.7,
}
