import {
  AppWindow,
  CheckCircle2,
  Globe,
  LayoutDashboard,
  LucideIcon,
  ShoppingCart,
  Zap,
} from 'lucide-react';
import type { Service } from '@/data/services';

const iconMap: Record<string, LucideIcon> = {
  AppWindow,
  LayoutDashboard,
  Globe,
  ShoppingCart,
  Zap,
};

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? AppWindow;

  return (
    <article className="group rounded-[32px] border border-gray-100 bg-white p-8 shadow-lg shadow-slate-200/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-6 flex items-start gap-5">
        <div
          className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-[22px] bg-gradient-to-br ${service.gradient} text-white shadow-lg`}
        >
          <Icon className="h-8 w-8" />
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            {service.title}
          </h2>
          <p className="leading-relaxed text-gray-600">{service.description}</p>
        </div>
      </div>

      <div className="h-1.5 w-full rounded-full bg-gray-100">
        <div
          className={`h-full w-[34%] rounded-full bg-gradient-to-r ${service.gradient}`}
        />
      </div>

      <ul className="mt-6 space-y-3">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-gray-700">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
