import Link from "next/link";

export default function PageHero({
  breadcrumbLabel,
  title,
  description,
}: {
  breadcrumbLabel: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-ink pb-16 pt-38 text-paper md:pb-24 md:pt-45">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-10">
        <p className="font-mono mb-4.5 text-[0.72rem] uppercase tracking-wide text-[#9c9992]">
          <Link href="/" className="hover:text-gold-light">Accueil</Link>
          {" / "}
          <Link href="/#services" className="hover:text-gold-light">Services</Link>
          {" / "}
          {breadcrumbLabel}
        </p>
        <h1 className="max-w-[18ch] text-[clamp(2rem,5vw,3.2rem)] font-extrabold">{title}</h1>
        <p className="mt-4.5 max-w-[56ch] text-[1.05rem] text-[#c7c4bd]">{description}</p>
      </div>
    </section>
  );
}
