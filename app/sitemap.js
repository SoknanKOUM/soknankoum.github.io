export default function sitemap() {
  return [
    {
      url: "https://soknankoum.github.io",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://soknankoum.github.io/about",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://soknankoum.github.io/cv",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://soknankoum.github.io/blog",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}