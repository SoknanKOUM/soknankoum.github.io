module.exports = {
  // Site metadata
  name: "Chonky Cat",
  title: "Chonky Site",
  description: "Bonjour to my chonky website",

  // SEO & Metadata
  siteUrl: "https://userwebsite.github.io", // Your site URL (for SEO)
  author: "Chonky Cat", // Author name (for SEO)
  keywords: ["portfolio", "blog", "machine learning", "AI"], // Keywords for SEO

  // Favicon & Icons (optional - customize if needed)
  // By default, Next.js uses app/favicon.ico automatically
  // To customize, create icon files and update these paths:
  // - favicon.ico (32x32 or 16x16) - Standard favicon
  // - icon.png (512x512) - Modern browsers & PWA
  // - apple-icon.png (180x180) - Apple devices
  // You can place custom icons in public/ folder or use app/icon.png, app/apple-icon.png
  favicon: "/images/favicon.ico", // Set to "/custom-favicon.ico" if using custom
  icon: null,    // Set to "/icon.png" if using custom
  appleIcon: null, // Set to "/apple-icon.png" if using custom

  // Profile picture (optional)
  // Place your image in public/images/ folder (e.g., public/images/profile.jpg)
  // Then set: profileImage: "/images/profile.jpg"
  // Leave as null to show initial letter instead
  profileImage: "/images/profile.png",

  // Current role and affiliation
  role: "Your Student Position",
  affiliation: "Your University",

  // About section configuration
  aboutSection: {
    show: true,                      // Set to false to hide the About section
    title: "Hello, I'm a Cool Cat 😼",                  // Customize the section heading (e.g., "Bonjour", "Hello", "Introduction")
    content: `Your Introduction into Meow`     // Your introduction text (supports line breaks with \n\n)
  },

  // Contact section configuration
  contactSection: {
    show: true,  // Set to false to hide the entire Contact section on home page
    title: "Contact",  // Customize the section heading
    showEmail: true,  // Set to false to hide email
    showGithub: true,  // Set to false to hide GitHub
    showLinkedin: true,  // Set to false to hide LinkedIn
    showTwitter: true,  // Set to false to hide Twitter
  },

  // Profile section configuration (home page sidebar)
  profileSection: {
    show: true,  // Set to false to hide entire profile sidebar
    showImage: true,  // Set to false to hide profile image
    showName: true,  // Set to false to hide name
    showRole: true,  // Set to false to hide role
    showAffiliation: true,  // Set to false to hide affiliation
    showInterests: true,  // Set to false to hide interests section
    imageShape: "circle",  // Shape options:
                            // "rounded" - Rounded corners (default)
                            // "square" - Sharp corners
                            // "circle" - Full circle
                            // "blob" - Organic blob shape
                            // "hexagon" - Hexagonal shape
                            // "diamond" - Diamond/rotated square
                            // "squircle" - Apple-style squircle
    imageSize: "large"  // "small" (64px), "medium" (80px), "large" (112px)
  },

  // Layout configuration
  layout: {
    sidebarPosition: "left",  // "left" or "right"
    contentWidth: "6xl",  // "4xl", "5xl", "6xl", "7xl" - max width of content
    showSidebar: true  // Set to false to hide sidebar completely (full-width layout)
  },

  // Footer configuration
  footer: {
    show: true,  // Set to false to hide footer
    text: null,  // Custom footer text (null uses default: "© 2024 Your Name")
    showSocialLinks: true,  // Set to false to hide social icons in footer
    customLinks: []  // Add custom links: [{ text: "Privacy", url: "/privacy" }]
  },

  // Research interests or topics
  // You can use a string for plain text, or an object with { name, icon } to add lucide-react icon names
  interests: [
    { name: "Machine Learning", icon: "Brain" },
    { name: "Natural Language Processing", icon: "MessageSquare" },
    { name: "AI Development", icon: "Code" },
    { name: "Eating Fish", icon: "Fish"}
  ],

  // Navigation Configuration
  // Set useDynamicNavigation to true to auto-generate navigation from content folders
  // Set to false to use manual navigation items defined below
  useDynamicNavigation: false,  // true = auto-generate from /content folders, false = use manual list below

  // Manual navigation items (only used when useDynamicNavigation is false)
  // Optional: Add icon field with any Lucide React icon name
  navigation: [
    { title: "Home", path: "/", icon: "Home" },
    { title: "CV", path: "/cv", icon: "FileText" },
    { title: "Blog", path: "/blog", icon: "BookOpen" },
  ],

  // Social links for footer
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "your.email@example.com"
  },

  // CV Display Options
  // Option 1: Use a PDF file - will be embedded with download button
  // Place your PDF in public/cv/ folder (e.g., public/cv/resume.pdf)
  // Then set: cvFile: "/cv/resume.pdf"
  //
  // Option 2: Use an image (PNG/JPG) - will be displayed as image
  // Place your image in public/cv/ folder (e.g., public/cv/resume.png)
  // Then set: cvFile: "/cv/resume.png"
  //
  // Option 3: Leave as null to render from content/cv.md (markdown)
  // The markdown option provides the best SEO and accessibility
  cvFile: "/cv/cv.png",

  // CV Page Configuration
  cvConfig: {
    showDownloadButton: false,  // Set to false to hide the download button
    showPrintButton: false,     // Set to false to hide the print button

    // CV Page Styling
    style: {
      headerStyle: "professional",  // "professional" | "minimal" | "creative"
      showBadge: true,              // Show "Curriculum Vitae" badge
      badgeColor: "gray",           // "gray" | "blue" | "green" | "purple"
      showDivider: true,            // Show divider line under header
      contentPadding: "tight",      // "tight" | "normal" | "relaxed"
    }
  },

  // Page Display Configuration
  // Configure how each page should display content
  // Each page can have:
  //   - mode: "simple" (single markdown) or "grid" (card grid) or "list" (vertical list)
  //   - itemsPerPage: number of items per page for pagination (only for grid/list)
  //   - columns: number of columns for grid mode (1, 2, 3, or 4)
  pages: {
    blog: {
      mode: "grid",          // "simple" | "grid" | "list"
      itemsPerPage: 6,       // For grid/list mode pagination
      columns: 4            // For grid mode: 1, 2, 3, or 4 columns
    },
    cv: {
      mode: "simple",          // "simple" | "grid" | "list"
    },
    // Add more pages here as needed:
    // pagename: { mode: "grid", itemsPerPage: 9, columns: 3 }
  },

  // Home Page Content Configuration
  // Configure what content sections appear on the home page
  // Each section can show latest items from a specific page (blog, projects, etc.)
  homeSections: [
    {
      type: "blog",           // Type of content to display (matches folder name in content/)
      title: "Latest Posts",  // Section title
      count: 3,              // Number of items to show
      showViewAll: true,     // Show "View All" button
      viewAllText: "View All Posts",
      viewAllLink: "/blog"
    }
  ]
}
