export type JourneyEntry = {
  id: string;
  period: string;
  title: string;
  organization: string;
  location: string;
  type: 'education' | 'experience';
  description: string;
  image: string;
  imageAlt: string;
  logo?: string;
};

export const journey: JourneyEntry[] = [
  {
    id: 'paris-saclay',
    period: '2026 — 2027',
    title: 'Master 2 — Innovation, Markets and Data Science (IMSD) — Admitted',
    organization: 'Université Paris-Saclay',
    location: 'Évry-Courcouronnes, France',
    type: 'education',
    description:
      'Admitted to continue specializing in data science at the intersection of innovation and markets, alongside a 12-month work-study contract as a Data Scientist starting September 2026.',
    image:
      'https://images.pexels.com/photos/6424583/pexels-photo-6424583.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Colorful programming code on a dark monitor',
    logo: '/images/education/psl.png',
  },
  {
    id: 'ugecam-lam',
    period: '05/2026 — Present',
    title: 'Machine Learning Engineer Intern — Quantified Gait Analysis',
    organization: 'Centre de Réadaptation de Coubert — UGECAM (LAM)',
    location: 'Coubert, France',
    type: 'experience',
    description:
      'Designed Python metrics for gait quality assessment (GDI, GPS, MAP, GAS) from 3D motion capture data, trained a machine learning model to predict a clinical target (R² of 0.78, RMSE of 7.00°), and integrated the models into the lab’s analysis software.',
    image:
      'https://images.pexels.com/photos/34803969/pexels-photo-34803969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'A laptop displaying code in a dimly lit room',
  },
  {
    id: 'ensiie',
    period: '09/2025 — Present',
    title: 'Master 1 in Applied Mathematics',
    organization: 'ENSIIE',
    location: 'Évry-Courcouronnes, France',
    type: 'education',
    description:
      'Coursework in supervised and unsupervised learning, stochastic calculus, operations research and time series analysis, moving my studies from Cambodia to France.',
    image:
      'https://images.pexels.com/photos/159299/graphic-design-studio-tracfone-programming-html-159299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'A dual-screen developer workstation with code',
    logo: '/images/education/ensiie.png',
  },
  {
    id: 'motpt-rag-chatbot',
    period: '06/2025 — 09/2025',
    title: 'AI Development Intern — RAG Chatbot for Public Policy',
    organization: 'Ministry of Posts and Telecommunications',
    location: 'Phnom Penh, Cambodia',
    type: 'experience',
    description:
      'Built a Retrieval-Augmented Generation chatbot with LangChain and a PostgreSQL vector store, developing a full NLP pipeline — PDF parsing, chunking, vector indexing and contextual response generation — that cut manual document processing time by 75%.',
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&h=750&w=1100',
    imageAlt: 'A robotic hand reaching into a digital network',
  },
  {
    id: 'reda-lab',
    period: '10/2024 — 07/2025',
    title: 'Machine Learning Research Assistant Intern',
    organization: 'Institut de Technologie du Cambodge — ReDa Lab',
    location: 'Phnom Penh, Cambodia',
    type: 'experience',
    description:
      'Collected and preprocessed 2,500 Khmer sports articles via web scraping, then designed a hybrid pipeline combining custom attention mechanisms with pretrained Transformer models for automatic text summarization in a low-resource language.',
    image:
      'https://images.pexels.com/photos/17483871/pexels-photo-17483871.png?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Abstract 3D visualization of neural networks',
  },
  {
    id: 'motpt-data-analysis',
    period: '07/2024 — 09/2024',
    title: 'Data Analysis Intern',
    organization: 'Ministry of Posts and Telecommunications',
    location: 'Phnom Penh, Cambodia',
    type: 'experience',
    description:
      'Analyzed 5G spectrum auction fees and global market trends to produce strategic recommendations, and built Power BI dashboards from over 40,000 satellite frequency records.',
    image:
      'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Laptop showing an analytics dashboard with charts',
  },
  {
    id: 'itc-degree',
    period: '03/2022 — 2025',
    title: 'Engineering Degree in Applied Mathematics and Statistics',
    organization: 'Institut de Technologie du Cambodge',
    location: 'Phnom Penh, Cambodia',
    type: 'education',
    description:
      'Coursework spanning Machine Learning, Deep Learning, NLP, optimization, databases, Big Data and data visualization laid the foundation for my move into applied data science.',
    image:
      'https://images.pexels.com/photos/8199762/pexels-photo-8199762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Students studying together in a university library',
    logo: '/images/education/itc1.png',
  },
];

// ============================================================
// "My Journey" 
// ============================================================

export type TimelineEntry = {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  coursework?: string[];
  image: string;
  imageAlt: string;
};

export const timelineHighlights: TimelineEntry[] = [
  {
    id: 'ensiie-m1',
    period: '2025 – Present',
    title: 'Master M1 Applied Mathematics',
    organization: 'ENSIIE (France)',
    description:
      "Studying Applied Mathematics and Artificial Intelligence at École Nationale Supérieure d'Informatique pour l'Industrie et l'Entreprise, Évry-Courcouronnes.",
    coursework: [
      'Machine Learning & Data Analysis',
      'Stochastic Processes & Calculus',
      'Operations Research',
      'Time Series',
      'Advanced Programming (C++)',
      'Simulation Methods',
      'Differential Equations',
    ],
    image:
      '/images/timelines/nan.JPG',
    imageAlt: 'A dual-screen developer workstation with code',
  },
  {
    id: 'itc-degree-highlight',
    period: '2022 – 2025',
    title: 'Engineering Degree',
    organization: 'Institute of Technology of Cambodia',
    description:
      'Completed 4-year engineering program in Applied Mathematics & Statistics.',
    coursework: [
      'Machine Learning & Deep Learning',
      'Natural Language Processing',
      'Statistical Analysis',
      'Database Systems',
      'Discrete Mathematics & Algorithms',
      'Data Science Programming',
      'Optimization',
    ],
    image:
      '/images/timelines/itc.JPG',
    imageAlt: 'Students studying together in a university library',
  },
  {
    id: 'cpe2025-safeveri',
    period: '2025',
    title: 'CPE2025 Winner — SafeVeri AI',
    organization: 'Télécom SudParis & Institut Mines-Télécom (France)',
    description:
      'Winner of Télécom SudParis & Institut Mines-Télécom entrepreneurship program. Designed SafeVeri, a regulatory-compliant AI KYC system detecting synthetic identity fraud for neobanks.',
    image:
      '/images/timelines/cpe.JPG',
    imageAlt: 'Laptop showing an analytics dashboard with charts',
  },
  {
    id: 'dsc-advanced',
    period: '2025',
    title: 'UNESCO UNITWIN Data Science Camp — Advanced Level',
    organization: 'UNESCO UNITWIN',
    description:
      'Business Analysis & Hackathon program organized with the Korean Ministry of Education.',
    image:
      '/images/timelines/dscamp-advanced.JPG',
    imageAlt: 'Colorful programming code on a dark monitor',
  },
  {
    id: 'dsc-intermediate',
    period: '2024',
    title: 'UNESCO UNITWIN Data Science Camp — Intermediate Level',
    organization: 'UNESCO UNITWIN',
    description:
      'Focused on Machine Learning concepts and applied data projects.',
    image:
      '/images/timelines/dscamp-intermediate.JPG',
    imageAlt: 'Abstract 3D visualization of neural networks',
  },
  {
    id: 'dsc-standard',
    period: '2023',
    title: 'UNESCO UNITWIN Data Science Camp — Standard Level',
    organization: 'UNESCO UNITWIN',
    description:
      'Introduction to Data Science fundamentals and practical analytics training.',
    image:
      '/images/timelines/dscamp-standard.HEIC',
    imageAlt: 'A laptop displaying code in a dimly lit room',
  },
];
