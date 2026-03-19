import React from "react";
import {
  Briefcase,
  Calendar,
  Code2,
  LaptopMinimal,
  ShoppingBag,
} from "lucide-react";
import { Section, SectionHeader } from "../ui/section";

const experiences = [
  {
    icon: LaptopMinimal,
    period: "2024 - 2025",
    title: "Front-End, Full-Stack & eCommerce Developer",
    company: "Mark",
    description:
      "Built production-ready websites, dashboards, and full web applications for real business workflows. I worked across React.js and Next.js frontends while also delivering Node.js-powered backend logic, integrations, and scalable app architecture alongside eCommerce implementations.",
    technologies: ["React.js", "Next.js", "Node.js", "Shopify", "Salla", "Zid"],
  },
  {
    icon: ShoppingBag,
    period: "2022 - Present",
    title: "Freelance eCommerce & Web App Developer",
    company: "Freelance",
    description:
      "Delivered freelance work across eCommerce stores, internal dashboards, and custom web apps. My projects included frontend implementation, dashboard interfaces, app workflows, third-party integrations, and scalable solutions tailored to how each business actually operates.",
    technologies: ["Shopify", "Salla", "Zid", "Dashboards", "Web Apps"],
  },
  {
    icon: Code2,
    period: "2021 - Present",
    title: "Freelance WordPress Developer",
    company: "Freelance",
    description:
      "Designed, built, and customized WordPress websites using Elementor, custom themes, and plugin integrations. Delivered SEO-optimized and high-performance WooCommerce solutions tailored to client business goals.",
    technologies: ["WordPress", "Elementor", "WooCommerce", "SEO"],
  },
  {
    icon: Code2,
    period: "2020 - Present",
    title: "Freelance Front-End Developer",
    company: "Freelance",
    description:
      "Managed the full front-end development lifecycle, from gathering requirements and planning site structure to analyzing competitors and delivering responsive, pixel-perfect interfaces based on Figma and PSD designs.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Laravel Blade"],
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <Section id="experience" gray>
      <SectionHeader tag="My Journey" title="Professional Experience" />

      <div className="max-w-6xl mx-auto relative">
        <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full hidden md:block" />

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className="flex gap-6 sm:gap-6 md:gap-8 relative group"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center text-blue-600 z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Icon className="w-8 h-8" />
                </div>

                <div className="flex-1 bg-white p-6 sm:p-6 md:p-6 rounded-2xl shadow-lg border-l-4 border-blue-600 group-hover:translate-x-2 group-hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-3">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.title}
                  </h3>

                  <div className="flex items-center gap-2 text-blue-600 font-semibold mb-4 text-lg">
                    <Briefcase className="w-5 h-5" />
                    {exp.company}
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
