/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://kmvishnu.vercel.app', 
    generateRobotsTxt: true,
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 7000,
    exclude: ['/404', '/500'], 
  };
  