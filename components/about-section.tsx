import Image from "next/image";
import Eyebrow from "./eyebrow";
import Reveal from "./reveal";

export default function AboutSection() {
  return (
    <section id="apropos" className="bg-ink py-16 text-paper md:py-24">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-11 px-5 sm:px-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src="/images/photos/levage-mur-rideau.webp"
              alt="Installation d'un vitrage commercial à l'aide d'une grue télescopique"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal>
          <Eyebrow onDark>À propos</Eyebrow>
          <h2 className="mb-5 text-[clamp(1.7rem,3.4vw,2.4rem)] font-extrabold">
            Une petite équipe avec un niveau d&rsquo;exigence élevé.
          </h2>
          <p className="mb-4 leading-relaxed text-[#c7c4bd]">
            Vitrerie LB9 travaille autant chez les particuliers que sur des chantiers
            commerciaux, dans la grande région de Québec. Le même vitrier qui discute du
            projet est directement impliqué dans la mesure, la préparation et
            l&rsquo;installation.
          </p>
          <p className="leading-relaxed text-[#c7c4bd]">
            Plus de 13 ans d&rsquo;expérience sur le terrain, et une entreprise incorporée
            depuis 2023 — assez de rigueur pour les chantiers commerciaux, assez de
            disponibilité pour un seul panneau de douche.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
