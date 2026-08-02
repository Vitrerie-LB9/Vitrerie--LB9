// components/JsonLd.tsx
// Données structurées (JSON-LD) pour Vitrerie LB9 — schéma "Glazier" (vitrier)
// À COMPLÉTER avant déploiement : les 3 champs marqués « À REMPLIR » ci-dessous.

export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Glazier', // type officiel schema.org pour un vitrier
    '@id': 'https://vitrerielb9.com/#entreprise',
    name: 'Vitrerie LB9',
    slogan: 'Transparence et qualité',
    description:
      "Vitrier de confiance dans la région de Québec. Plus de 13 ans d'expérience : remplacement de thermos, douches en verre sur mesure, garde-corps en verre, portes commerciales, miroirs et calfeutrage. Résidentiel et commercial. Licence RBQ.",
    url: 'https://vitrerielb9.com',
    logo: 'https://vitrerielb9.com/images/logo-full.webp', // ← vérifier le chemin réel du logo
    image: 'https://vitrerielb9.com/images/logo-full.webp',
    telephone: '+1-581-888-7334',
    email: 'info@vitrerielb9.com',
    foundingDate: '2023-05-21',
    priceRange: '$$',
   address: {
  '@type': 'PostalAddress',
  addressLocality: 'Québec',
  addressRegion: 'QC',
  postalCode: 'G2K 1C3',
  addressCountry: 'CA',
},
    areaServed: [
      { '@type': 'City', name: 'Québec' },
      { '@type': 'City', name: 'Lévis' },
      { '@type': 'AdministrativeArea', name: 'Région de Québec' },
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Licence RBQ',
    },
    makesOffer: [
      'Remplacement de thermos',
      'Douches en verre sur mesure',
      'Garde-corps en verre',
      'Portes de verre et portes commerciales',
      'Miroirs sur mesure',
      'Calfeutrage',
      'Réparation et ajustement de portes',]
    .map((service) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: service },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
