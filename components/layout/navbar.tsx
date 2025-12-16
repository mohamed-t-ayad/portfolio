'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Code2, Home, User, Briefcase, Rocket, CodeIcon,
  GraduationCap, Mail, Menu, X
} from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#experience', label: 'Experience', icon: Briefcase },
  { href: '/projects', label: 'Projects', icon: Rocket },
  { href: '#skills', label: 'Skills', icon: CodeIcon },
  { href: '#education', label: 'Education', icon: GraduationCap },
  { href: '#contact', label: 'Contact', icon: Mail },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-white/90 backdrop-blur-xl shadow-lg'
          : 'py-5 bg-white/90 backdrop-blur-xl shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-blue-600 text-2xl font-bold hover:text-blue-700 transition-colors"
          >
            <Code2 className="w-7 h-7" />
            <span>Mohamed Ayad</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className={`flex items-center gap-2 font-medium transition-all duration-300 relative group ${
                        isActive ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                      }`}
                    >
                      <Icon className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      <span>{link.label}</span>
                      <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full group-hover:w-full transition-all duration-300" />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`flex items-center gap-2 font-medium transition-all duration-300 relative group ${
                        isActive ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                      }`}
                    >
                      <Icon className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      <span>{link.label}</span>
                      <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full group-hover:w-full transition-all duration-300" />
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-900 hover:text-blue-600 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;

                return (
                  <li key={link.href}>
                    {link.href.startsWith('#') ? (
                      <button
                        onClick={() => handleLinkClick(link.href)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                          isActive
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{link.label}</span>
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                          isActive
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{link.label}</span>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
