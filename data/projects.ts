export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  company?: string;
  technologies: string[];
  category: string;
  gradient: string;
  // icon: string;
  logo: string;
  url?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "mark-haykalah",
    title: "Mark Haykalah",
    description:
      "A fully responsive, bilingual website built with React and Next.js, optimized for SEO and performance. Developed with a clean component architecture and deployed for production using modern front-end best practices.",
    company: "Mark",
    technologies: ["Next.js", "React", "Tailwind CSS", "Bilingual", "Vercel"],
    category: "next.js",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    // icon: "globe",
    logo: "images/projects/mark-logo.png",
    url: "https://mark.haykalah.com",
    featured: true,
  },
  {
    id: "gamila-store",
    title: "Gamila Store",
    description:
      "E-commerce platform offering essential care products for women, built with Shopify Liquid.",
    company: "Gamila",
    technologies: ["Shopify", "E-commerce", "Product Management"],
    category: "E-commerce",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    logo: "images/projects/gamila.me-logo.png",
    url: "https://gamila.me",
    featured: false,
  },
  {
    id: "torino-elevators",
    title: "Torino Elevators",
    description:
      "A fully responsive, multi-language WordPress website for an elevator company based in the UAE. Converted UI/UX Figma designs into a production-ready site using Astra, with performance and SEO improvements that increased traffic by 40%.",
    company: "Torino",
    technologies: [
      "WordPress",
      "SEO",
      "Multi-language",
      "Performance Optimization",
    ],
    category: "WordPress",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    logo: "images/projects/torino_logo.png",
    url: "https://torinoelevators.com",
    featured: true,
  },
  {
    id: "modely-landing",
    title: "Modely Landing Page",
    description:
      "Designed a custom Figma landing page aligned with the client’s brand identity and typography, then developed a fully responsive landing page using HTML, CSS, and JavaScript with pixel-perfect implementation.",
    company: "Modely",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Responsive Design",
    ],
    category: "Landing Page , Front-End",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    logo: "images/projects/modely.png",
    featured: false,
  },
  {
    id: "amdga",
    title: "Amdga",
    description:
      "Enhanced and extended an existing Laravel-based website by building new sections using Blade templates, implementing UI-driven layouts and interactive effects, and optimizing structure for maintainability and performance.",
    company: "Amdga",
    technologies: ["Laravel", "PHP", "MySQL", "Blade Templates"],
    category: "Laravel",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    logo: "images/projects/Amdga.png",
    featured: false,
  },
  {
    id: "hub49",
    title: "Hub49 Landing Page",
    description:
      "Converted a Figma UI design into a fully responsive landing page for a web application, ensuring clean structure, cross-browser compatibility, and smooth user experience.",
    company: "Hub49",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    category: "Landing Page , Front-End",
    gradient: "linear-gradient(135deg, #667db6 0%, #0082c8 100%)",
    logo: "images/projects/hub49_logo.png",
    url: "https://mohamedayad.com/Hub49/",
    featured: false,
  },
  {
    id: "british-institutes-group",
    title: "British Institutes Group",
    description:
      "Developed a fully responsive landing page by converting a PDF design into a structured Bootstrap layout with clean UI and consistent spacing across devices.",
    company: "British Institutes Group",
    technologies: ["HTML5", "CSS3", "Bootstrap", "Responsive Design"],
    category: "Landing Page , Front-End",
    gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    logo: "images/projects/british_institutes_group.png",
    url: "https://mohamedayad.com/British-Institutes-Group/",
    featured: false,
  },
  {
    id: "gamila-zid",
    title: "Gamila (Zid Store)",
    description:
      "E-commerce store built on Zid for women’s essential care products, including daily, monthly, and after-birth categories, with full store setup and customization.",
    company: "Gamila",
    technologies: ["Zid", "E-commerce", "Store Setup"],
    category: "E-commerce",
    gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
    logo: "images/projects/gamila.me-logo.png",
    url: "https://gamila.today/",
    featured: false,
  },
  {
    id: "yakuot",
    title: "Yakuot Store",
    description:
      "E-commerce store specializing in silver items and accessories, including payment integration, installment options, shipping setup, and full store configuration using Zid.",
    company: "Yakuot",
    technologies: ["Zid", "E-commerce", "Payments", "Shipping"],
    category: "E-commerce",
    gradient: "linear-gradient(135deg, #232526 0%, #414345 100%)",
    logo: "images/projects/yakuot_logo.png",
    url: "https://yakuot.com/",
    featured: false,
  },
  {
    id: "alhoot",
    title: "Alhoot Store",
    description:
      "Online seafood marketplace built using Salla, specializing in fresh fish and premium seafood with complete product, payment, and shipping setup.",
    company: "Alhoot",
    technologies: ["Salla", "E-commerce", "Product Management"],
    category: "E-commerce",
    gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 100%)",
    logo: "images/projects/alhoot-logo.jpeg",
    url: "https://alhootsa.com/",
    featured: false,
  },
  {
    id: "nasig-masr",
    title: "Nasig Masr",
    description:
      "Shopify-based e-commerce store for home textiles and furnishings, including product organization, theme customization, and performance optimization.",
    company: "Nasig Masr",
    technologies: ["Shopify", "E-commerce", "Theme Customization"],
    category: "E-commerce",
    gradient: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
    logo: "images/projects/nasigmasr.png",
    url: "https://nasigmasr.com/",
    featured: false,
  },
  {
    id: "eye-language",
    title: "Eye Language",
    description:
      "E-commerce store for contact lenses built with Salla, featuring customized product options, payment integration, and shipping configuration.",
    company: "Eye Language",
    technologies: ["Salla", "E-commerce", "Payments", "Shipping"],
    category: "E-commerce",
    gradient: "linear-gradient(135deg, #56ccf2 0%, #2f80ed 100%)",
    logo: "images/projects/eyelanguage.jpg",
    url: "https://shop.eyelanguage.sa/",
    featured: false,
  },
  {
    id: "movies-finder",
    title: "Movies Finder App",
    description:
      "A responsive movie search application built with Next.js that consumes an external API to fetch movie data, optimized for fast performance and deployed on Vercel.",
    technologies: ["Next.js", "API Integration", "Vercel"],
    category: "Next.js",
    gradient: "linear-gradient(135deg, #141e30 0%, #243b55 100%)",
    logo: "images/projects/movies-finder.png",
    url: "https://movie-search-app-two-pied.vercel.app/",
    featured: false,
  },
  {
    id: "admin-dashboard",
    title: "Admin Dashboard",
    description:
      "Fully responsive admin dashboard built using HTML and CSS, leveraging Flexbox and Grid layouts with multiple pages and reusable UI components.",
    technologies: ["HTML5", "CSS3", "Flexbox", "CSS Grid"],
    category: "Front-End",
    gradient: "linear-gradient(135deg, #434343 0%, #000000 100%)",
    logo: "images/projects/dashboard.png",
    url: "https://mohamedayad.com/Dashboard/",
    featured: false,
  },
  {
    id: "secure-road-services",
    title: "Secure Road Services",
    description:
      "Car insurance management system developed with Laravel, handling both front-end UI implementation and back-end logic including routing, controllers, and data flow.",
    company: "Secure Road Services",
    technologies: ["Laravel", "PHP", "MySQL", "Blade Templates"],
    category: "Backend",
    gradient: "linear-gradient(135deg, #141e30 0%, #243b55 100%)",
    logo: "images/projects/secure-road-services.png",
    url: "https://secureroad.net/",
    featured: false,
  },
  {
    id: "creative-landing",
    title: "Creative Landing Page",
    description:
      "Landing page built from a Figma design for a creative agency using WordPress, including SEO optimization, tracking setup, and essential plugin integrations.",
    technologies: ["WordPress", "Elementor", "Figma to WordPress"],
    category: "WordPress",
    gradient: "linear-gradient(135deg, #8360c3 0%, #2ebf91 100%)",
    logo: "images/projects/creative.svg",
    url: "https://creative.mohamedayad.com/",
    featured: false,
  },
  {
    id: "sami-eltamawy",
    title: "Sami Eltamawy",
    description:
      "Modern personal branding website built with WordPress and Elementor, focused on clean design, responsiveness, and easy content management.",
    company: "Sami Eltamawy",
    technologies: ["WordPress", "Elementor", "Responsive Design"],
    category: "WordPress",
    gradient: "linear-gradient(135deg, #232526 0%, #414345 100%)",
    logo: "images/projects/samieltamawy.webp",
    url: "https://www.samieltamawy.com/",
    featured: false,
  },
  {
    id: "mega-agency",
    title: "Mega Agency",
    description:
      "Multi-language WordPress website developed for a social media marketing agency, including SEO optimization, analytics tracking, and performance-focused structure.",
    company: "Mega Agency",
    technologies: ["WordPress", "Multi-language", "SEO"],
    category: "WordPress",
    gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 100%)",
    logo: "images/projects/mega.jpg",
    url: "https://mega-agency.mohamedayad.com/",
    featured: false,
  },
  {
    id: "trace-agency",
    title: "Trace Agency",
    description:
      "Responsive WordPress website developed for a social media marketing agency, featuring SEO best practices, tracking integration, and scalable content structure.",
    company: "Trace Agency",
    technologies: ["WordPress", "SEO", "Performance Optimization"],
    category: "WordPress",
    gradient: "linear-gradient(135deg, #3a1c71 0%, #d76d77 100%)",
    logo: "images/projects/trace.png",
    url: "https://trace-agency.com/",
    featured: false,
  },
  {
    id: "femu-store",
    title: "FEMU Store",
    description:
      "Shopify e-commerce store for cosmetics products, including store setup, theme customization, product management, and payment integration.",
    company: "FEMU",
    technologies: ["Shopify", "E-commerce", "Theme Customization" , "Ai Integration"],
    category: "E-commerce",
    gradient: "linear-gradient(135deg, #f83600 0%, #f9d423 100%)",
    logo: "images/projects/FEMU.png",
    url: "https://femu.me/",
    featured: true,
  },
  {
    id: "todo-app",
    title: "To-Do App",
    description:
      "Task management application built with React.js featuring state management, Context API, CRUD operations, routing, and localStorage persistence.",
    technologies: ["React.js", "Context API", "LocalStorage", "Bootstrap"],
    category: "Web Development",
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    logo: "images/projects/todo-app.png",
    url: "https://mohamedayad.com/ToDo-App/",
    featured: false,
  },
  {
    id: "fina-haykalah",
    title: "Fina Haykalah",
    description:
      "Modern bilingual portfolio website built with Next.js, focusing on clean UI, performance optimization, and SEO-friendly structure.",
    company: "Fina",
    technologies: ["Next.js", "React", "Bilingual", "SEO"],
    category: "Next.js",
    gradient: "linear-gradient(135deg, #4568dc 0%, #b06ab3 100%)",
    logo: "images/projects/fina_logo.svg",
    url: "https://fina.haykalah.com/",
    featured: true,
  },
  {
    id: "Haykalah",
    title: "Fina Haykalah",
    description:
      "Modern bilingual portfolio website built with Next.js, focusing on clean UI, performance optimization, and SEO-friendly structure.",
    company: "Haykalah",
    technologies: ["Next.js", "React", "Bilingual", "SEO"],
    category: "Next.js",
    gradient: "linear-gradient(135deg, #4568dc 0%, #b06ab3 100%)",
    logo: "images/projects/Haykalah-logo.png",
    url: "https://haykalah.com/",
    featured: false,
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getAllProjects = () => projects;
export const getProjectById = (id: string) => projects.find((p) => p.id === id);
