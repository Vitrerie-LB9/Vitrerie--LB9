"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_FILTERS, GALLERY_PHOTOS, type GalleryCategory } from "@/lib/data";

export default function Gallery() {
  const [active, setActive] = useState<"tous" | GalleryCategory>("tous");

  const visible =
    active === "tous"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.categories.includes(active));

  return (
    <div>
      <div className="mb-9 flex flex-wrap gap-2">
        {GALLERY_FILTERS.map((filter) => (
          <button
            key={filter.key}
            type="button"
            onClick={() => setActive(filter.key)}
            className={`font-mono rounded-full border px-4.5 py-2.5 text-[0.74rem] uppercase tracking-wide transition-colors ${
              active === filter.key
                ? "border-ink bg-ink text-paper"
                : "border-ink/10 text-gray-dark hover:border-ink"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="rounded-sm border border-dashed border-ink/10 px-5 py-16 text-center text-gray">
          <p className="text-[0.95rem]">Aucune photo dans cette catégorie pour l&rsquo;instant — à venir bientôt.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3.5">
          {visible.map((photo) => (
            <div
              key={photo.slug}
              className={`group relative overflow-hidden rounded-sm bg-sand ${
                photo.wide ? "col-span-2 aspect-[16/10] max-sm:aspect-[4/5]" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={`/images/photos/${photo.slug}.webp`}
                alt={photo.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent px-3.5 py-3 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="font-mono text-[0.7rem] uppercase tracking-wide text-paper">
                  {photo.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
