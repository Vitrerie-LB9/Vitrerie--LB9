import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { HERO_IMAGE } from "@/lib/data";
import { PhoneIcon } from "./icons";
import Eyebrow from "./eyebrow";

export default function Hero() {
  return (
    <section id="accueil" className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src={`/images/photos/${HERO_IMAGE.slug}.webp`}
          alt={HERO_IMAGE.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,.35) 0%, rgba(10,10,10,.05) 32%, rgba(10,10,10,.55) 78%, rgba(10,10,10,.88) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 pb-14 pt-32 text-paper sm:px-10 md:pb-24 md:pt-0">
        <Eyebrow onDark>Vitrier professionnel — région de Québec</Eyebrow>
        <h1 className="mb-5 max-w-[16ch] text-[clamp(2.1rem,7vw,4.6rem)] font-extrabold">
          Le vitrier de confiance dans la région de Québec
        </h1>
        <p className="font-mono mb-9 max-w-[52ch] text-[0.82rem] leading-[1.8] text-[#e7e4de] sm:text-[0.9rem]">
          Remplacement de thermos &nbsp;•&nbsp; Douches en verre &nbsp;•&nbsp; Portes commerciales
          &nbsp;•&nbsp; Garde-corps &nbsp;•&nbsp; Miroirs
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/#soumission"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 text-[0.95rem] font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-gold-light"
          >
            Demander une soumission
          </Link>
          <a
            href={`tel:${SITE.phoneLink}`}
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-paper/55 px-7 py-4 text-[0.95rem] font-semibold text-paper transition-colors hover:border-paper hover:bg-paper/10"
          >
            <PhoneIcon className="h-4 w-4" />
            Appeler maintenant
          </a>
        </div>
      </div>
    </section>
  );
}
