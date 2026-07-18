import Link from "next/link";
import Eyebrow from "./eyebrow";
import { getOtherServices } from "@/lib/data";

export default function OtherServices({ currentSlug }: { currentSlug: string }) {
  const others = getOtherServices(currentSlug);

  return (
    <section className="pb-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-10">
        <div className="mb-6">
          <Eyebrow>Autres services</Eyebrow>
        </div>
        <ul className="flex flex-wrap gap-2.5">
          {others.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="inline-block rounded-full border border-ink/10 px-4.5 py-2.5 text-sm text-gray-dark transition-colors hover:border-ink hover:text-ink"
              >
                {s.navLabel}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
