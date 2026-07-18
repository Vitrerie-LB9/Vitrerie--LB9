import Image from "next/image";
import type { Service } from "@/lib/data";
import { CheckIcon, ThermosIcon } from "./icons";

export default function ServiceDetail({ service }: { service: Service }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-11 px-5 sm:px-10 md:grid-cols-[1.1fr_0.9fr] md:gap-18">
        <div>
          {service.body.map((paragraph, i) => (
            <p key={i} className="mb-4.5 leading-relaxed text-gray-dark">
              {paragraph}
            </p>
          ))}
          <ul className="mt-2 flex flex-col border-t border-ink/10">
            {service.includes.map((item) => (
              <li
                key={item}
                className="flex gap-3.5 border-b border-ink/10 py-4 text-[0.96rem] text-gray-dark"
              >
                <CheckIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3.5">
          {service.photos.length === 0 ? (
            <div className="flex aspect-[4/5] flex-col items-center justify-center gap-3.5 rounded-sm border border-dashed border-ink/10 bg-sand p-7 text-center text-gray">
              <ThermosIcon className="h-8.5 w-8.5 text-gold" />
              <span className="font-mono text-[0.76rem] uppercase tracking-wide">
                Photos à venir
              </span>
            </div>
          ) : (
            service.photos.map((photo) => (
              <div key={photo.slug} className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                <Image
                  src={`/images/photos/${photo.slug}.webp`}
                  alt={photo.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
