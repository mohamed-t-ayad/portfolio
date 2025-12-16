export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  company?: string;
  technologies: string[];
  category: string;
  gradient: string;
  icon: string;
  url?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'mark-haykalah',
    title: 'Mark Haykalah',
    description: 'A fully responsive, bilingual portfolio website using Next.js, showcasing web development and design expertise.',
    company: 'Mark',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Bilingual', 'SSR'],
    category: 'Web Development',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: 'globe',
    featured: true,
  },
  {
    id: 'gamila-store',
    title: 'Gamila Store',
    description: 'E-commerce platform offering essential care products for women, built with Shopify and Zid platforms.',
    company: 'Gamila',
    technologies: ['Shopify', 'E-commerce', 'Zid', 'Product Management'],
    category: 'E-commerce',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    icon: 'shopping-bag',
    featured: true,
  },
  {
    id: 'torino-elevators',
    title: 'Torino Elevators',
    description: 'Multi-language WordPress site with strong SEO, increased traffic by 40% through performance enhancements.',
    company: 'Torino',
    technologies: ['WordPress', 'SEO', 'Multi-language', 'Performance Optimization'],
    category: 'WordPress',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    icon: 'building',
    featured: true,
  },
  {
    id: 'modely-landing',
    title: 'Modely Landing Page',
    description: 'Clean, responsive landing page built from scratch with HTML, CSS, and JavaScript reflecting brand identity.',
    company: 'Modely',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    category: 'Landing Page',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    icon: 'paint-brush',
    featured: true,
  },
  {
    id: 'amdga',
    title: 'Amdga',
    description: 'Backend development with Laravel, optimized routing and controller logic for enhanced performance.',
    company: 'Amdga',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Backend', 'REST API'],
    category: 'Backend',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    icon: 'server',
    featured: true,
  },
  {
    id: 'corporate-website',
    title: 'Corporate Website',
    description: 'Professional corporate website with custom CMS integration and advanced contact forms.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'Web Development',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    icon: 'briefcase',
    featured: false,
  },
  {
    id: 'restaurant-app',
    title: 'Restaurant Management App',
    description: 'Full-stack restaurant management system with ordering, inventory, and analytics features.',
    technologies: ['React', 'Laravel', 'MySQL', 'Real-time'],
    category: 'Web Application',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    icon: 'utensils',
    featured: false,
  },
  {
    id: 'portfolio-theme',
    title: 'Portfolio WordPress Theme',
    description: 'Custom WordPress theme for creative professionals with drag-and-drop page builder integration.',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'Elementor'],
    category: 'WordPress',
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    icon: 'palette',
    featured: false,
  },
  {
    id: 'booking-system',
    title: 'Online Booking System',
    description: 'Appointment booking platform with calendar integration and automated email notifications.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    category: 'Web Application',
    gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
    icon: 'calendar',
    featured: false,
  },
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getAllProjects = () => projects;
export const getProjectById = (id: string) => projects.find(p => p.id === id);
