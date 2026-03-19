"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Code2,
  Home,
  Mail,
  Menu,
  Newspaper,
  Rocket,
  Settings,
  User,
  X,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: Settings },
  { href: "/projects", label: "Projects", icon: Rocket },
  { href: "/blogs", label: "Blogs", icon: Newspaper },
  { href: "/about", label: "About", icon: User },
  { href: "/#contact", label: "Contact", icon: Mail },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href.includes("#")) {
      const hash = href.slice(href.indexOf("#"));

      if (pathname !== "/") {
        window.location.href = href;
      } else {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 py-3 shadow-lg backdrop-blur-xl"
          : "bg-white/90 py-5 shadow-sm backdrop-blur-xl"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-blue-600 transition-colors hover:text-blue-700"
          >
            <Code2 className="h-7 w-7" />
            <span>Mohamed Ayad</span>
          </Link>

          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isHashLink = link.href.includes("#");
              const isActive = !isHashLink && pathname === link.href;

              return (
                <li key={link.href}>
                  {isHashLink ? (
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className={`group relative flex items-center gap-2 font-medium transition-all duration-300 ${
                        isActive
                          ? "text-blue-600"
                          : "text-gray-900 hover:text-blue-600"
                      }`}
                    >
                      <Icon className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                      <span>{link.label}</span>
                      <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 group-hover:w-full" />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`group relative flex items-center gap-2 font-medium transition-all duration-300 ${
                        isActive
                          ? "text-blue-600"
                          : "text-gray-900 hover:text-blue-600"
                      }`}
                    >
                      <Icon className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                      <span>{link.label}</span>
                      <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-900 transition-colors hover:text-blue-600 lg:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-4 border-t border-gray-200 py-4 lg:hidden">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isHashLink = link.href.includes("#");
                const isActive = !isHashLink && pathname === link.href;

                return (
                  <li key={link.href}>
                    {isHashLink ? (
                      <button
                        onClick={() => handleLinkClick(link.href)}
                        className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 font-medium transition-all ${
                          isActive
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{link.label}</span>
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 font-medium transition-all ${
                          isActive
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
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
