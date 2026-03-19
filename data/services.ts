export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  gradient: string;
}

export const services: Service[] = [
  {
    id: 'full-stack-apps',
    title: 'Full-Stack Web Applications',
    description:
      'End-to-end web apps with React/Next.js frontend and Node.js backend. Includes admin dashboards, user authentication, REST APIs, and database integration. Built for performance and scalability.',
    icon: 'AppWindow',
    features: [
      'React/Next.js frontend',
      'Node.js + Express backend',
      'Admin dashboard panel',
      'PostgreSQL / MongoDB',
      'REST API design',
    ],
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    id: 'admin-dashboards',
    title: 'Admin Dashboards',
    description:
      'Custom internal tools and data dashboards tailored to your workflow. Real-time data, role-based access, charts, and tables - all in a clean, responsive UI.',
    icon: 'LayoutDashboard',
    features: [
      'Role-based access control',
      'Data tables & charts',
      'Real-time updates',
      'Export (CSV/PDF)',
      'Fully responsive',
    ],
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    id: 'wordpress-sites',
    title: 'WordPress Sites',
    description:
      'Professional WordPress websites with custom themes and plugins. From business landing pages to full content management setups, optimized for SEO and speed.',
    icon: 'Globe',
    features: [
      'Custom theme development',
      'Plugin development',
      'SEO optimization',
      'WooCommerce integration',
      'Performance tuning',
    ],
    gradient: 'from-sky-500 to-blue-600',
  },
  {
    id: 'ecommerce-stores',
    title: 'E-Commerce Stores',
    description:
      'Full e-commerce solutions on Shopify or WooCommerce. Product management, payment gateways, checkout flows, and conversion-focused design - ready to sell.',
    icon: 'ShoppingCart',
    features: [
      'Shopify & WooCommerce',
      'Custom storefront UI',
      'Payment gateway setup',
      'Inventory management',
      'Conversion optimization',
    ],
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'nextjs-websites',
    title: 'Next.js Websites',
    description:
      'Fast, SEO-friendly websites built with Next.js. Static generation, server-side rendering, and full Vercel/VPS deployment - ideal for portfolios, landing pages, and content sites.',
    icon: 'Zap',
    features: [
      'SSR & SSG support',
      'Lightning-fast load times',
      'SEO metadata & OG tags',
      'Tailwind CSS design',
      'Vercel or VPS deploy',
    ],
    gradient: 'from-orange-500 to-rose-600',
  },
];
