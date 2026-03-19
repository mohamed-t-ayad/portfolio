"use client";

import Link from "next/link";
import React from "react";
import {
  Award,
  FolderKanban,
  GitBranch,
  LaptopMinimal,
  Users,
} from "lucide-react";
import { Section, SectionHeader } from "../ui/section";
import { aboutBio, aboutStats } from "@/data/about";

const statIconMap = {
  award: Award,
  projects: FolderKanban,
  clients: Users,
};

export const AboutSection: React.FC = () => {
  return (
    <Section id="about">
      <SectionHeader tag="Get to know me" title="About Me" />

      <div className="grid gap-16 lg:grid-cols-5 lg:items-center">
        <div className="relative p-6 lg:col-span-2">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-3">
            <LaptopMinimal className="h-32 w-32 md:h-40 md:w-40" />
          </div>

          <div className="absolute top-2 right-2 h-24 w-24 rounded-2xl bg-gradient-to-br from-pink-400 to-red-500 text-white shadow-xl animate-float flex items-center justify-center sm:top-3 sm:right-3 lg:-top-5 lg:-right-5">
            <GitBranch className="h-10 w-10" />
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="mb-6 text-xl font-semibold leading-relaxed text-gray-900 md:text-2xl">
            Front-End Developer focused on fast, scalable, conversion-ready web
            experiences.
          </p>

          <div className="space-y-5 text-gray-600">
            {aboutBio.slice(0, 2).map((paragraph) => (
              <p key={paragraph} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mb-8 mt-8 grid grid-cols-3 gap-6">
            {aboutStats.map((stat) => {
              const Icon = statIconMap[stat.icon];

              return (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <Icon className="mx-auto mb-2 h-10 w-10 text-blue-600" />
                  <h3 className="mb-1 text-3xl font-extrabold text-gray-900 md:text-4xl">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40"
          >
            Read Full Bio
          </Link>
        </div>
      </div>
    </Section>
  );
};
