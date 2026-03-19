import React from 'react';
import Link from 'next/link';
import {
  AppWindow,
  ArrowRight,
  Globe,
  LayoutDashboard,
  ShoppingCart,
  Zap,
  LucideIcon,
} from 'lucide-react';
import { Section, SectionHeader } from '../ui/section';
import { services } from '@/data/services';

const iconMap: Record<string, LucideIcon> = {
  AppWindow,
  LayoutDashboard,
  Globe,
  ShoppingCart,
  Zap,
};

export const ServicesPreviewSection: React.FC = () => {
  const previewServices = services.slice(0, 3);

  return (
    <Section gray>
      <SectionHeader tag="What I Offer" title="Services" />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {previewServices.map((service) => {
          const Icon = iconMap[service.icon] ?? AppWindow;

          return (
            <article
              key={service.id}
              className="rounded-3xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40"
        >
          View All Services
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </Section>
  );
};
