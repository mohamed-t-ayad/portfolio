export type AboutStat = {
  value: string;
  label: string;
  icon: 'award' | 'projects' | 'clients';
};

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  description: string;
};

export type CertificationItem = {
  title: string;
  subtitle: string;
  badge: string;
  gradient: string;
  url?: string;
  icon: 'graduation-cap' | 'code' | 'layers' | 'pen-tool' | 'database';
};

export const cvLinks = {
  frontend:
    'https://drive.google.com/file/d/1hKaS8_m_mX0tIK64zQkv76gWOl4y8Qro/view?usp=sharing',
  wordpress:
    'https://drive.google.com/file/d/1AT9Y7pMantekSC4FoU48RGjgBkd3fb7n/view?usp=sharing',
};

export const aboutStats: AboutStat[] = [
  { icon: 'award', value: '4+', label: 'Years Experience' },
  { icon: 'projects', value: '40+', label: 'Projects Completed' },
  { icon: 'clients', value: '30+', label: 'Happy Clients' },
];

export const aboutBio = [
  'I am a Front-End and full-stack-focused developer with 4+ years of experience building scalable websites, admin dashboards, custom web applications, and eCommerce platforms for real businesses.',
  'My main strength is translating business needs and design into production-ready interfaces using React.js, Next.js, and Tailwind CSS, while also supporting backend logic and APIs with Node.js when the project needs a complete full-stack solution.',
  'Alongside front-end engineering, I have strong hands-on experience with WordPress, Shopify, WooCommerce, Salla, Zid, and automation workflows using n8n. That gives me a practical edge when projects need both polished UI and business-ready execution.',
  'I have worked across freelancer projects, client-facing production systems, dashboards, and multi-platform stores, collaborating with designers, backend teams, and business stakeholders to ship stable work that performs well and scales over time.',
];

export const educationHistory: EducationItem[] = [
  {
    degree: "Bachelor's Degree in Computer Science",
    school: 'Faculty of Computer and Information, Menufia University, Egypt',
    period: '2017 - 2021',
    description:
      'Built a strong foundation in software engineering, database systems, algorithms, and full-stack development, while also strengthening problem-solving and analytical thinking.',
  },
];

export const certifications: CertificationItem[] = [
  {
    icon: 'graduation-cap',
    title: 'Computer Science',
    subtitle: 'Faculty of Computer and Information, Menufia, Egypt (2017-2021)',
    badge: "Bachelor's Degree",
    gradient: 'from-blue-400 to-purple-500',
  },
  {
    icon: 'code',
    title: 'HTML + CSS',
    subtitle: 'Professional Certification',
    badge: 'Certified',
    gradient: 'from-orange-400 to-red-500',
    url: 'https://drive.google.com/file/d/1O8Zp_92sYyX0L63HZIJnPEXtzJ73QVCo/view?usp=sharing',
  },
  {
    icon: 'code',
    title: 'JavaScript & ES6',
    subtitle: 'Advanced JavaScript Certification',
    badge: 'Certified',
    gradient: 'from-yellow-400 to-orange-500',
    url: 'https://drive.google.com/file/d/1xg8OiPlWAW0xxAIK2dFstelh4b6mfEfG/view?usp=sharing',
  },
  {
    icon: 'layers',
    title: 'MEAN Stack Developer',
    subtitle: 'Full-Stack Development',
    badge: 'Certified',
    gradient: 'from-green-400 to-teal-500',
    url: 'https://drive.google.com/file/d/1d1OTgjRg1T7scVyQF6TpshTjmqxjYVT5/view?usp=sharing',
  },
  {
    icon: 'pen-tool',
    title: 'UX Design',
    subtitle: 'User Experience Design',
    badge: 'Certified',
    gradient: 'from-pink-400 to-purple-500',
    url: 'https://drive.google.com/file/d/17BqArGsB3Q9vHgdo-ycsL0R8TNhcdjCl/view?usp=sharing',
  },
  {
    icon: 'database',
    title: 'Database Management',
    subtitle: 'Database Design & Implementation',
    badge: 'Certified',
    gradient: 'from-cyan-400 to-blue-500',
    url: 'https://drive.google.com/file/d/1HoQ2kU3az_YCi3kRiZfJl7hTrKMGhQQd/view?usp=sharing',
  },
];
