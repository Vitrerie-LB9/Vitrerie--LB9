"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { PhoneIcon, CloseIcon } from "./icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
  }, [menuOpen]);

  const textColor = scrolled ? "text-ink" : "text-paper";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[background-color,padding,border-color] duration-300 ${
          scrolled
            ? "bg-paper/90 backdrop-blur-md border-b border-ink/10 py-3"
            : "bg-transparent border-b border-transparent py-4"
        }`}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-5 px-5 sm:px-10">
          <Link href="/#accueil" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/images/logo-mark.webp"
              alt="Vitrerie LB9"
              width={32}
              height={32}
              className="h-8 w-auto rounded-sm"
              priority
            />
            <span className={`font-display text-[0.98rem] font-extrabold tracking-tight ${textColor}`}>
              VITRERIE LB9
            </span>
          </Link>

          <ul className="hidden gap-8 text-sm font-medium lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`opacity-90 transition-colors hover:text-gold-light hover:opacity-100 ${textColor}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${SITE.phoneLink}`}
              aria-label={`Appeler ${SITE.name}`}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                scrolled ? "border-ink/10 hover:bg-sand" : "border-paper/30 hover:bg-paper/10"
              } ${textColor}`}
            >
              <PhoneIcon className="h-4 w-4" />
            </a>
            <Link
              href="/#soumission"
              className="hidden rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-gold-light sm:inline-flex"
            >
              Demander une soumission
            </Link>
            <button
              type="button"
              aria-label="Ouvrir le menu"
              onClick={() => setMenuOpen(true)}
              className={`flex h-10 w-10 items-center justify-center rounded-full border lg:hidden ${
                scrolled ? "border-ink/10" : "border-paper/30"
              } ${textColor}`}
            >
              <span className="relative block h-2.5 w-4">
                <span className="absolute inset-x-0 top-0 h-px bg-current" />
                <span className="absolute inset-x-0 bottom-0 h-px bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Menu plein écran mobile */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-ink p-5 text-paper transition-transform duration-[400ms] ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between pb-10 pt-2">
          <span className="font-display text-base font-extrabold">VITRERIE LB9</span>
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={() => setMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/15"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        </div>
        <ul className="flex flex-col gap-6 px-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-3xl font-bold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-col gap-3 px-1 pb-4 pt-8">
          <a
            href={`tel:${SITE.phoneLink}`}
            className="rounded-sm bg-paper py-4 text-center font-semibold text-ink"
          >
            Appeler — {SITE.phoneDisplay}
          </a>
          <Link
            href="/#soumission"
            onClick={() => setMenuOpen(false)}
            className="rounded-sm bg-gold py-4 text-center font-semibold text-paper"
          >
            Demander une soumission
          </Link>
        </div>
      </div>
    </>
  );
}
