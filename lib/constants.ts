// Toutes les coordonnées et constantes globales du site.
// Modifier une valeur ici la met à jour partout (en-tête, pied de page,
// formulaire, métadonnées SEO, données structurées JSON-LD, etc.)

export const SITE = {
  name: "Vitrerie LB9",
  domain: "https://vitrerielb9.com",
  tagline: "Transparence et qualité",
  phoneDisplay: "581 888-7334",
  phoneLink: "+15818887334",
  email: "info@vitrerielb9.com",
  rbq: "5840-9038-01",
  serviceArea: "Québec et les environs",
  addressLocality: "Québec",
  addressRegion: "QC",
  addressCountry: "CA",
  founded: 2023,
  yearsExperience: "13+",
} as const;

export const NAV_LINKS = [
  { href: "/#accueil", label: "Accueil" },
  { href: "/#services", label: "Services" },
  { href: "/#realisations", label: "Réalisations" },
  { href: "/#apropos", label: "À propos" },
  { href: "/blog", label: "Conseils" },
  { href: "/#soumission", label: "Soumission" },
  { href: "/#contact", label: "Contact" },
] as const;