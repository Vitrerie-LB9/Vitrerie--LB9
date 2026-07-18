import { SITE } from "@/lib/constants";
import Eyebrow from "./eyebrow";
import Reveal from "./reveal";
import SoumissionForm from "./soumission-form";
import { CheckIcon, PhoneIcon } from "./icons";

export default function SoumissionSection() {
  return (
    <section id="soumission" className="border-y border-paper/10 bg-ink py-16 text-paper md:py-24">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-5 sm:px-10 md:grid-cols-[0.85fr_1.15fr] md:gap-18">
        <Reveal>
          <Eyebrow onDark>Demande de soumission</Eyebrow>
          <h2 className="mb-4 text-[clamp(1.8rem,3.6vw,2.4rem)] font-extrabold">
            Montrez-nous le projet.
          </h2>
          <p className="max-w-[46ch] text-[#b9b6af]">
            Décrivez les travaux, ajoutez les dimensions approximatives et, si possible,
            quelques photos. On confirme la mesure exacte sur place avant toute commande
            de verre.
          </p>
          <div className="mt-7 flex flex-col gap-3.5">
            <span className="flex items-center gap-3 text-sm text-[#d6d3cc]">
              <CheckIcon className="h-4 w-4 shrink-0 text-gold-light" />
              Réponse sous 1 à 2 jours ouvrables
            </span>
            <span className="flex items-center gap-3 text-sm text-[#d6d3cc]">
              <CheckIcon className="h-4 w-4 shrink-0 text-gold-light" />
              Visite de mesure sans frais
            </span>
            <a
              href={`tel:${SITE.phoneLink}`}
              className="flex items-center gap-3 text-sm text-[#d6d3cc] hover:text-paper"
            >
              <PhoneIcon className="h-4 w-4 shrink-0 text-gold-light" />
              {SITE.phoneDisplay}
            </a>
          </div>
        </Reveal>
        <Reveal>
          <SoumissionForm />
        </Reveal>
      </div>
    </section>
  );
}
