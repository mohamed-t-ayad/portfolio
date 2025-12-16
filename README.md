# Mohamed Ayad - Portfolio Website

A modern, clean, and professional personal portfolio website built with Next.js 13, React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 13 (App Router)
- **UI Library:** React 18
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Icons:** Lucide React

## Project Structure

```
/app
  /layout.tsx              # Root layout with navbar and footer
  /page.tsx                # Home page with all sections
  /projects/page.tsx       # Projects listing page
  /globals.css             # Global styles and animations

/components
  /layout
    /navbar.tsx            # Navigation component
    /footer.tsx            # Footer component
  /sections
    /hero-section.tsx      # Hero section
    /about-section.tsx     # About/Experience section
    /experience-section.tsx # Professional timeline
    /featured-projects-section.tsx # Featured projects
    /skills-section.tsx    # Skills grid
    /education-section.tsx # Education & certifications
    /contact-section.tsx   # Contact form
  /ui
    /section.tsx           # Reusable section wrapper
    /project-card.tsx      # Project card component

/data
  /projects.ts             # Centralized project data

/public
  /images                  # Image assets
```

## Features

### Home Page
- Hero section with animated gradients
- About section with statistics
- Professional experience timeline
- Featured projects showcase
- Skills categorization
- Education & certifications
- Contact form with contact methods

### Projects Page
- Grid layout of all projects
- Project cards with:
  - Preview gradients and icons
  - Project details
  - Technology tags
  - Company information
  - External links

### Design System
- Clean, modern UI with smooth animations
- Gradient backgrounds and hover effects
- Mobile-first responsive design
- Professional color scheme (blue/purple gradients)
- Consistent spacing and typography

### Performance
- Static site generation (SSG)
- Optimized images with next/image
- Lazy loading components
- SEO-friendly meta tags
- Semantic HTML structure

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Customization

### Adding Projects

Edit `/data/projects.ts` to add or modify projects:

```typescript
{
  id: 'project-id',
  title: 'Project Name',
  description: 'Short description',
  company: 'Company Name',
  technologies: ['Tech1', 'Tech2'],
  category: 'Category',
  gradient: 'linear-gradient(...)',
  icon: 'icon-name',
  featured: true,
}
```

### Updating Content

- **Hero Section:** Edit `/components/sections/hero-section.tsx`
- **About Content:** Edit `/components/sections/about-section.tsx`
- **Experience:** Edit `/components/sections/experience-section.tsx`
- **Skills:** Edit `/components/sections/skills-section.tsx`

## Build Output

- All pages are statically generated
- Optimized bundle size
- Fast page loads with code splitting

## Browser Support

Modern browsers with ES6+ support
