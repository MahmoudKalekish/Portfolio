// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://mahmoud-kalekish.vercel.app',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    additionalSitemaps: [
      'https://mahmoud-kalekish.vercel.app/image-sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const customConfig = {
      loc: path,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };

    // Higher priority for main pages
    if (path === '/') {
      customConfig.priority = 1.0;
      customConfig.changefreq = 'daily';
    }
    
    if (path === '/resume') {
      customConfig.priority = 0.9;
      customConfig.changefreq = 'monthly';
    }

    // Project pages
    if (path.includes('/netflix') || path.includes('/need') || path.includes('/avon')) {
      customConfig.priority = 0.8;
    }

    return customConfig;
  },
};