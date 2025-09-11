const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

const hostname = "https://yourdomain.com"; // 👉 replace with your real domain

// All your React Router paths
const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/services/web-development", changefreq: "weekly", priority: 0.9 },
  { url: "/services/Services2", changefreq: "weekly", priority: 0.9 },
  { url: "/services/Services3", changefreq: "weekly", priority: 0.9 },
  { url: "/services/Services4", changefreq: "weekly", priority: 0.9 },
  { url: "/services/Services5", changefreq: "weekly", priority: 0.9 },
  { url: "/services/Services6", changefreq: "weekly", priority: 0.9 },
  { url: "/services/Services7", changefreq: "weekly", priority: 0.9 },
  { url: "/services/Services8", changefreq: "weekly", priority: 0.9 },
  { url: "/services/Services9", changefreq: "weekly", priority: 0.9 },
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname });
  const writeStream = createWriteStream("./public/sitemap.xml");

  sitemap.pipe(writeStream);
  links.forEach((link) => sitemap.write(link));
  sitemap.end();

  await streamToPromise(sitemap);
  console.log("✅ Sitemap generated at /public/sitemap.xml");
}

generateSitemap();
