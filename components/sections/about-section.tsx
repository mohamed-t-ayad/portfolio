"use client";

import { useState } from "react";

import React from "react";
import {
  Award,
  FolderKanban,
  Users,
  LaptopMinimal,
  GitBranch,
  Download,
  ChevronDown,
} from "lucide-react";
import { Section, SectionHeader } from "../ui/section";

export const AboutSection: React.FC = () => {
  const stats = [
    { icon: Award, value: "4+", label: "Years Experience" },
    { icon: FolderKanban, value: "50+", label: "Projects Completed" },
    { icon: Users, value: "30+", label: "Happy Clients" },
  ];
  const CV_LINKS = {
    frontend:
      "https://drive.google.com/file/d/1myS-kTNfIl61qnpIOaB8nsVityHahC1h/view?usp=sharing",
    wordpress:
      "https://drive.google.com/file/d/19Srd-dqMps6ZOxZrCjOqXL34yfpXDApT/view?usp=sharing",
  };
  const [open, setOpen] = useState(false);
  return (
    <Section id="about">
      <SectionHeader tag="Get to know me" title="My Experience" />

      <div className="grid lg:grid-cols-5 gap-16 items-center">
        <div className="lg:col-span-2 relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-2xl hover:scale-105 hover:rotate-3 transition-all duration-500">
            <LaptopMinimal className="w-32 h-32 md:w-40 md:h-40" />
          </div>

          <div className="absolute -top-5 -right-5 w-24 h-24 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl flex items-center justify-center text-white shadow-xl animate-float">
            <GitBranch className="w-10 h-10" />
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 leading-relaxed">
            Front-End Developer with 4+ years of experience delivering scalable,
            high-performance web applications and eCommerce platforms.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            I specialize in building modern, responsive user interfaces using
            React.js, Next.js, and Tailwind CSS, with a strong focus on clean
            component architecture, accessibility, and Core Web Vitals
            optimization. I translate Figma designs into pixel-perfect,
            production-ready interfaces that are fast, maintainable, and
            SEO-friendly.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Alongside front-end development, I have extensive experience with
            WordPress and Shopify, developing custom themes, optimizing
            WooCommerce and Shopify stores, and building conversion-focused
            eCommerce solutions. I work confidently with Liquid, Elementor, and
            custom integrations to support real business goals.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            I have contributed to production-ready applications used by real
            clients, collaborated with designers and backend teams, and deployed
            projects using modern workflows (Git, Vercel, VPS, CI-friendly
            setups). My work consistently prioritizes performance, usability,
            and long-term maintainability.
          </p>

          <div className="grid grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-blue-600 mx-auto mb-2" />
                  <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>
          <div className="relative inline-block">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>

            {open && (
              <div className="absolute left-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
                <a
                  href={CV_LINKS.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-4 text-gray-800 hover:bg-gray-50 transition-colors font-medium"
                >
                  Front-End CV
                </a>

                <a
                  href={CV_LINKS.wordpress}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-4 text-gray-800 hover:bg-gray-50 transition-colors font-medium"
                >
                  WordPress CV
                </a>
              </div>
            )}
          </div>
          {/* <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download CV
          </button> */}
        </div>
      </div>
    </Section>
  );
};
