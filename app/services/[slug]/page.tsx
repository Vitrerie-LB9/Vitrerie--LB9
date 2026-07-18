import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES, getServiceBySlug } from "@/lib/data";
import PageHero from "@/components/page-hero";
import ServiceDetail from "@/components/service-detail";
import CtaBand from "@/components/cta-band";
import OtherServices from "@/components/other-services";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title.replace(" | Vitrerie LB9", ""),
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        breadcrumbLabel={service.h1}
        title={service.h1}
        description={service.lead}
      />
      <ServiceDetail service={service} />
      <CtaBand />
      <OtherServices currentSlug={service.slug} />
    </>
  );
}
