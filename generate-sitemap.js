const { createSitemap } = require('sitemap');
const fs = require('fs');

const sitemap = createSitemap({
  hostname: 'https://www.jcinagpurfortune.in/', // Replace with your actual domain
  cacheTime: 600000, // 600 sec - cache purge period
  urls: [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/aboutjci', changefreq: 'monthly', priority: 0.8 },
    { url: '/aboutjciindia', changefreq: 'monthly', priority: 0.8 },
    { url: '/aboutjcinagpurfortune', changefreq: 'daily', priority: 1.0 },
    { url: '/npcorner', changefreq: 'monthly', priority: 0.8 },
    { url: '/downloads', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'daily', priority: 1.0 },
    { url: '/ourteam', changefreq: 'monthly', priority: 0.8 },
    { url: '/ourjcimembers', changefreq: 'monthly', priority: 0.8 },

    { url: '/events', changefreq: 'daily', priority: 1.0 },
    { url: '/gallery', changefreq: 'monthly', priority: 0.8 },
   
    // Add more routes as needed
  ],
});

// Write sitemap to the public folder
fs.writeFileSync('./public/sitemap.xml', sitemap.toString());
console.log('Sitemap created: public/sitemap.xml');
