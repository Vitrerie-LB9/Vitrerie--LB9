import Link from "next/link";
import { SITE } from "@/lib/constants";
import { PhoneIcon } from "./icons";

export default function CtaBand() {
  return (
    <section className="bg-sand py-16 text-center">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-10">
        <h2 className="mb-4 text-[clamp(1.6rem,3.4vw,2.3rem)] font-extrabold">
          Prêt à commencer votre projet ?
        </h2>
        <p className="mx-auto mb-8 max-w-[52ch] text-gray">
          Décrivez vos besoins et on vous répond sous 1 à 2 jours ouvrables, avec une
          visite de mesure sans frais.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/#soumission"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-7 py-4 text-[0.95rem] font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-ink-3"
          >
            Demander une soumission
          </Link>
          <a
            href={`tel:${SITE.phoneLink}`}
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-ink px-7 py-4 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            <PhoneIcon className="h-4 w-4" />
            Appeler maintenant
          </a>
        </div>
      </div>
    </section>
  );
}
