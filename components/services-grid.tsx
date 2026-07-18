import Link from "next/link";
import { SERVICES } from "@/lib/data";
import { SERVICE_ICONS, ArrowIcon } from "./icons";

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((service) => {
        const Icon = SERVICE_ICONS[service.icon];
        return (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group flex flex-col bg-paper p-9 transition-colors hover:bg-sand"
          >
            <Icon className="mb-5.5 h-7.5 w-7.5 text-gold" />
            <h3 className="mb-2.5 text-[1.15rem] font-extrabold">{service.navLabel}</h3>
            <p className="mb-5 flex-grow text-sm leading-relaxed text-gray">
              {service.shortDescription}
            </p>
            <span className="font-mono inline-flex items-center gap-1.5 text-[0.76rem] uppercase tracking-wide">
              En savoir plus
              <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
