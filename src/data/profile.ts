export const profile = {
  name: 'Soknan Koum',
  role: 'Data Scientist & Machine Learning Engineer',
  intro:
    'I turn data and machine learning into tools that support real decisions, from clinical gait analysis to AI-powered public services.',
  longIntro:
    'I am a Master’s student in Applied Mathematics and Data Science, currently seeking a 12-month work-study contract as a Data Scientist starting September 2026. My work spans machine learning, NLP and data visualization, applied to fields as varied as clinical biomechanics, public policy and low-resource language processing.',
  location: 'France',
  email: 'koumsoknan096@gmail.com',
  phone: '+33 7 52 04 98 07',
  socials: {
    email: 'mailto:koumsoknan096@gmail.com',
    linkedin: 'https://www.linkedin.com/in/soknan-koum/',
    github: 'https://github.com/SoknanKOUM',
  },
  cvUrl: '/resume/Soknan_KOUM.pdf',
  portrait:
    '/images/about/Soknan.jpg',
};

export type NavItem = { label: string; to: string };

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About Me', to: '/about' },
  { label: 'My Projects', to: '/projects' },
  { label: 'My Blog', to: '/blog' },
  { label: 'Get in Touch', to: '/contact' },
];
