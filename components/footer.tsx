import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { SERVICES } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-ink/10 bg-paper pb-7 pt-16">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-10">
        <div className="grid grid-cols-1 gap-10 border-b border-ink/10 pb-12 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:gap-10">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image src="/images/logo-mark.webp" alt="" width={36} height={36} className="h-9 w-auto rounded-sm" />
              <span className="font-display text-base font-extrabold">VITRERIE LB9</span>
            </div>
            <p className="max-w-[32ch] text-sm text-gray">
              Vitrier professionnel — région de Québec. Résidentiel et commercial.
            </p>
            <p className="font-mono mt-3.5 text-xs uppercase tracking-wide text-gold">
              {SITE.tagline}
            </p>
          </div>

          <div>
            <h5 className="font-mono mb-4 text-[0.7rem] uppercase tracking-wider text-gray">
              Coordonnées
            </h5>
            <ul className="flex flex-col gap-2.5 text-[0.92rem]">
              <li>
                <a href={`tel:${SITE.phoneLink}`} className="hover:text-gold">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-gold">
                  {SITE.email}
                </a>
              </li>
              <li>{SITE.addressLocality} ({SITE.addressRegion})</li>
              <li className="font-mono text-xs text-gray">RBQ {SITE.rbq}</li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono mb-4 text-[0.7rem] uppercase tracking-wider text-gray">
              Services
            </h5>
            <ul className="flex flex-col gap-2.5 text-[0.92rem]">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-gold">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-mono mb-4 text-[0.7rem] uppercase tracking-wider text-gray">
              Navigation
            </h5>
            <ul className="flex flex-col gap-2.5 text-[0.92rem]">
              <li><Link href="/#accueil" className="hover:text-gold">Accueil</Link></li>
              <li><Link href="/#realisations" className="hover:text-gold">Réalisations</Link></li>
              <li><Link href="/#apropos" className="hover:text-gold">À propos</Link></li>
              <li><Link href="/#soumission" className="hover:text-gold">Soumission</Link></li>
            </ul>
          </div>
        </div>

        <div className="font-mono flex flex-col gap-2 pt-6 text-xs text-gray sm:flex-row sm:justify-between">
          <span>© {year} {SITE.name} inc. — Incorporée en {SITE.founded}</span>
          <span>RBQ {SITE.rbq}</span>
        </div>
      </div>
    </footer>
  );
}
