import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Hero from "@/components/hero";
import SpecStrip from "@/components/spec-strip";
import SectionHead from "@/components/section-head";
import ServicesGrid from "@/components/services-grid";
import Gallery from "@/components/gallery";
import WhyBand from "@/components/why-band";
import AboutSection from "@/components/about-section";
import SoumissionSection from "@/components/soumission-section";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "Vitrier à Québec | Thermos, douches et verre sur mesure",
  description:
    "Vitrerie LB9 réalise vos travaux de verre résidentiels et commerciaux à Québec : remplacement de thermos, douches, garde-corps, portes commerciales et miroirs sur mesure.",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  image: `${SITE.domain}/images/og-vitrerie-lb9.jpg`,
  telephone: SITE.phoneLink,
  email: SITE.email,
  areaServed: `${SITE.addressLocality}, ${SITE.addressRegion}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.addressLocality,
    addressRegion: SITE.addressRegion,
    addressCountry: SITE.addressCountry,
  },
  url: `${SITE.domain}/`,
  slogan: SITE.tagline,
};

export default function HomePage() {
  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <SpecStrip />

      <section id="services" className="py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-10">
          <Reveal>
            <SectionHead
              eyebrow="Services"
              title={
                <>
                  Le résidentiel soigné.
                  <br />
                  Le commercial solide.
                </>
              }
              description="Des petites interventions aux installations complètes — chaque service a sa propre page, avec ce qui est inclus."
            />
          </Reveal>
          <Reveal>
            <ServicesGrid />
          </Reveal>
        </div>
      </section>

      <section id="realisations" className="bg-sand py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-10">
          <Reveal>
            <SectionHead
              eyebrow="Réalisations"
              title="De vraies photos. De vrais chantiers."
              description="Pas de banque d'images. Un aperçu de vitrages posés récemment, filtrable par type de projet."
            />
          </Reveal>
          <Reveal>
            <Gallery />
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-10">
          <Reveal>
            <SectionHead
              eyebrow="Pourquoi Vitrerie LB9"
              title="Un vitrier qui prend les mesures deux fois."
              center
            />
          </Reveal>
          <Reveal>
            <WhyBand />
          </Reveal>
        </div>
      </section>

      <AboutSection />
      <SoumissionSection />
    </>
  );
}
