// Source unique de vérité pour le contenu du site.
// Ajouter un service : ajouter un objet à SERVICES (une page /services/[slug]
// est générée automatiquement, avec son SEO et son entrée dans le sitemap).
// Ajouter une photo : ajouter un objet à GALLERY_PHOTOS.

export type IconName =
  | "thermos"
  | "douche"
  | "gardecorps"
  | "porte"
  | "miroir"
  | "calfeutrage";

export type GalleryCategory =
  | "thermos"
  | "douches"
  | "commercial"
  | "miroirs"
  | "garde-corps";

export interface ServicePhoto {
  /** Nom de fichier sans extension, dans /public/images/photos/ */
  slug: string;
  alt: string;
}

export interface Service {
  slug: string;
  navLabel: string;
  icon: IconName;
  shortDescription: string;
  /** Balise <title> */
  title: string;
  metaDescription: string;
  h1: string;
  lead: string;
  body: string[];
  includes: string[];
  photos: ServicePhoto[];
}

export interface GalleryPhoto {
  slug: string;
  alt: string;
  caption: string;
  categories: GalleryCategory[];
  wide: boolean;
}

export const HERO_IMAGE = {
  slug: "hero-porte-coulissante",
  alt: "Porte coulissante vitrée sur mesure installée par Vitrerie LB9",
};

export const GALLERY_FILTERS: { key: "tous" | GalleryCategory; label: string }[] = [
  { key: "tous", label: "Tous" },
  { key: "thermos", label: "Thermos" },
  { key: "douches", label: "Douches" },
  { key: "commercial", label: "Commercial" },
  { key: "miroirs", label: "Miroirs" },
  { key: "garde-corps", label: "Garde-corps" },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  { slug: "porte-coulissante-verre", alt: "Porte coulissante vitrée à quadrillage noir, séparation intérieure", caption: "Porte coulissante · sur mesure", categories: [], wide: true },
  { slug: "portes-vitrees-hall-commercial", alt: "Portes vitrées commerciales, hall d'entrée", caption: "Portes vitrées · hall commercial", categories: ["commercial"], wide: false },
  { slug: "garde-corps-verre-terrasse", alt: "Garde-corps en verre sur une terrasse en montagne", caption: "Garde-corps · terrasse", categories: ["garde-corps"], wide: false },
  { slug: "pose-fenetre-residentiel", alt: "Pose de fenêtre résidentielle", caption: "Pose de fenêtre · résidentiel", categories: ["thermos"], wide: true },
  { slug: "levage-mur-rideau", alt: "Grue télescopique installant un mur-rideau commercial", caption: "Levage · mur-rideau", categories: ["commercial"], wide: false },
  { slug: "mur-rideau-installation", alt: "Mur-rideau vitré en cours d'installation", caption: "Mur-rideau · en pose", categories: ["commercial"], wide: false },
  { slug: "facade-vitree-commerciale", alt: "Façade vitrée complétée sur bâtiment commercial", caption: "Façade vitrée · complétée", categories: ["commercial"], wide: true },
  { slug: "garde-corps-verre-interieur", alt: "Garde-corps en verre intérieur avec main courante", caption: "Garde-corps · intérieur", categories: ["garde-corps"], wide: false },
  { slug: "porte-commerciale-pose", alt: "Porte commerciale vitrée en installation", caption: "Porte commerciale · en pose", categories: ["commercial"], wide: false },
  { slug: "miroir-salle-de-bain", alt: "Miroir de salle de bain sur mesure", caption: "Miroir · salle de bain", categories: ["miroirs"], wide: false },
  { slug: "portes-entree-vitrees", alt: "Portes d'entrée doubles vitrées, immeuble résidentiel", caption: "Portes d'entrée · résidentiel", categories: ["commercial"], wide: true },
  { slug: "miroir-arque", alt: "Miroir arqué sur mesure", caption: "Miroir arqué · sur mesure", categories: ["miroirs"], wide: false },
  { slug: "miroir-ovale-installation", alt: "Miroir ovale sur mesure en installation", caption: "Miroir ovale · installation", categories: ["miroirs"], wide: false },
  { slug: "fenetre-commerciale-posee", alt: "Grande fenêtre commerciale posée sur mur de brique", caption: "Fenêtre commerciale · posée", categories: ["commercial"], wide: false },
  { slug: "grand-miroir-double-vanite", alt: "Grand miroir sur mesure au-dessus d'une double vanité", caption: "Grand miroir · double vanité", categories: ["miroirs"], wide: true },
  { slug: "cloison-vitree-bureau-commercial", alt: "Cloison vitrée de bureau en installation, immeuble commercial", caption: "Cloison vitrée · bureau", categories: ["commercial"], wide: true },
  { slug: "fenetres-chalet-vue-montagne", alt: "Grandes fenêtres en installation, chalet avec vue sur la montagne", caption: "Fenêtres · vue montagne", categories: ["thermos"], wide: false },
  { slug: "porte-vitree-commerciale-installation", alt: "Porte vitrée commerciale en installation", caption: "Porte vitrée · en pose", categories: ["commercial"], wide: false },
  { slug: "entree-vitree-accessible-commercial", alt: "Entrée vitrée commerciale avec accès universel", caption: "Entrée vitrée · accès universel", categories: ["commercial"], wide: false },
  { slug: "garde-corps-escalier-interieur", alt: "Garde-corps de verre le long d'un escalier intérieur", caption: "Garde-corps · escalier", categories: ["garde-corps"], wide: true },
  { slug: "miroir-double-vanite-retroeclaire", alt: "Miroir sur mesure rétroéclairé au-dessus d'une double vanité", caption: "Miroir rétroéclairé · double vanité", categories: ["miroirs"], wide: false },
  { slug: "garde-corps-terrasse-toit-commercial", alt: "Garde-corps de verre sur une terrasse de toit commerciale", caption: "Garde-corps · terrasse commerciale", categories: ["garde-corps", "commercial"], wide: true },
  { slug: "puits-lumiere-toit-mansarde-detail", alt: "Puits de lumière vitrés en installation sur un toit mansardé", caption: "Puits de lumière · détail", categories: ["thermos"], wide: false },
  { slug: "puits-lumiere-toit-mansarde-ensemble", alt: "Ensemble de puits de lumière vitrés sur un toit mansardé", caption: "Puits de lumière · ensemble", categories: ["thermos"], wide: true },
  { slug: "miroir-arque-console-bois", alt: "Miroir arqué sur mesure au-dessus d'une console en bois", caption: "Miroir arqué · console", categories: ["miroirs"], wide: false },
  { slug: "fenetres-noires-mur-pierre", alt: "Grandes fenêtres à cadre noir dans un mur de pierre", caption: "Fenêtres · mur de pierre", categories: ["thermos", "commercial"], wide: true },
  { slug: "fenetre-panoramique-vue-ville", alt: "Fenêtre panoramique avec vue sur le Vieux-Québec enneigé", caption: "Fenêtre panoramique · vue sur ville", categories: ["thermos"], wide: false },
  { slug: "porte-double-vitree-commerce-hiver", alt: "Porte double vitrée commerciale, façade en hiver", caption: "Porte double vitrée · commerce", categories: ["commercial"], wide: false },
  { slug: "douche-verre-cadre-dore-large", alt: "Douche en verre avec cadre doré et carrelage à motifs, vue large", caption: "Douche · cadre doré", categories: ["douches"], wide: true },
  { slug: "douche-verre-cadre-dore-face", alt: "Douche en verre avec cadre doré, vue de face", caption: "Douche · vue de face", categories: ["douches"], wide: false },
  { slug: "garde-corps-courbe-nuit", alt: "Garde-corps de verre courbé avec main courante incurvée, vue de nuit", caption: "Garde-corps courbé · vue de nuit", categories: ["garde-corps"], wide: false },
];

export const SERVICES: Service[] = [
  {
    slug: "remplacement-thermos",
    navLabel: "Remplacement de thermos",
    icon: "thermos",
    shortDescription: "Unités scellées embuées ou fissurées, remplacées dans le cadre existant.",
    title: "Remplacement de thermos à Québec | Vitrerie LB9",
    metaDescription: "Fenêtre embuée ou fissurée ? Vitrerie LB9 remplace vos thermos (unités scellées) dans la région de Québec, sans changer le cadre existant.",
    h1: "Remplacement de thermos",
    lead: "Une unité scellée embuée ou fissurée ne veut pas dire une nouvelle fenêtre au complet. Dans la majorité des cas, on remplace seulement le vitrage, dans le cadre existant.",
    body: [
      "Le « thermos » désigne l'unité scellée — les deux ou trois panneaux de verre séparés par un espace d'air ou de gaz qui isolent votre fenêtre. Avec le temps, le joint d'étanchéité peut céder : de la buée ou des traces blanchâtres apparaissent entre les vitres, signe que l'unité a perdu son efficacité.",
      "On mesure l'ouverture existante, on commande le nouveau vitrage aux bonnes dimensions et on l'installe directement dans le cadre en place — plus rapide et plus abordable qu'un remplacement complet de fenêtre, pour un résultat tout aussi étanche.",
    ],
    includes: [
      "Mesure exacte de l'unité scellée existante",
      "Verre double ou triple selon le besoin d'isolation",
      "Installation dans le cadre actuel, sans remplacer toute la fenêtre",
      "Vérification de l'étanchéité et calfeutrage après la pose",
    ],
    photos: [
      { slug: "pose-fenetre-residentiel", alt: "Pose de fenêtre résidentielle" },
      { slug: "fenetres-chalet-vue-montagne", alt: "Grandes fenêtres en installation, vue sur la montagne" },
      { slug: "puits-lumiere-toit-mansarde-ensemble", alt: "Puits de lumière vitrés sur un toit mansardé" },
    ],
  },
  {
    slug: "douches-en-verre",
    navLabel: "Douches en verre",
    icon: "douche",
    shortDescription: "Panneaux fixes et portes en verre trempé, mesurés sur mesure.",
    title: "Douches en verre sur mesure à Québec | Vitrerie LB9",
    metaDescription: "Portes et panneaux de douche en verre trempé, mesurés et installés sur mesure par Vitrerie LB9, vitrier de la région de Québec.",
    h1: "Douches en verre sur mesure",
    lead: "Panneaux fixes, portes pivotantes ou coulissantes — chaque douche est mesurée sur place pour s'ajuster exactement à votre salle de bain.",
    body: [
      "Aucune salle de bain n'a exactement les mêmes dimensions, ni le même angle de mur. Plutôt que d'installer une cabine préfabriquée, on prend les mesures sur place et on fait fabriquer le verre trempé aux dimensions exactes de votre espace.",
      "Le choix de la quincaillerie — chromée, noire mate ou laiton — et de l'épaisseur du verre (3/8 po ou 1/2 po) se fait selon la configuration : panneau fixe seul, porte pivotante, ou combinaison des deux pour une douche plus grande.",
    ],
    includes: [
      "Prise de mesure sur place avant fabrication",
      "Verre trempé de 3/8 po ou 1/2 po selon la configuration",
      "Quincaillerie chromée, noire mate ou laiton",
      "Installation étanche, calfeutrage inclus",
    ],
    photos: [
      { slug: "douche-verre-cadre-dore-large", alt: "Douche en verre avec cadre doré et carrelage à motifs" },
      { slug: "douche-verre-cadre-dore-face", alt: "Douche en verre avec cadre doré, vue de face" },
    ],
  },
  {
    slug: "garde-corps-verre",
    navLabel: "Garde-corps en verre",
    icon: "gardecorps",
    shortDescription: "Terrasses, balcons et escaliers, ancrages et finition soignée.",
    title: "Garde-corps en verre à Québec | Vitrerie LB9",
    metaDescription: "Garde-corps en verre trempé pour terrasses, balcons et escaliers. Installation soignée par Vitrerie LB9 dans la région de Québec.",
    h1: "Garde-corps en verre",
    lead: "Pour une terrasse, un balcon ou un escalier intérieur — un garde-corps de verre dégage la vue sans compromettre la sécurité.",
    body: [
      "Deux méthodes de fixation sont possibles selon la structure : sur poteaux (posts) ou directement sur un rail de base ancré au plancher. Le choix dépend du support disponible et du rendu visuel recherché — le rail de base donne un effet plus épuré, sans poteaux visibles.",
      "Le verre utilisé est du verre trempé de sécurité, aux coins polis, conforme aux exigences résidentielles et commerciales. Une main courante en acier inoxydable peut être ajoutée en option, à l'intérieur comme à l'extérieur.",
    ],
    includes: [
      "Fixation sur poteaux ou rail de base, selon le support",
      "Verre trempé de sécurité, coins polis",
      "Main courante en acier inoxydable en option",
      "Installation extérieure (terrasse, balcon) et intérieure (escalier, mezzanine)",
    ],
    photos: [
      { slug: "garde-corps-verre-terrasse", alt: "Garde-corps en verre sur une terrasse" },
      { slug: "garde-corps-escalier-interieur", alt: "Garde-corps en verre le long d'un escalier intérieur" },
      { slug: "garde-corps-courbe-nuit", alt: "Garde-corps de verre courbé, vue de nuit" },
      { slug: "garde-corps-terrasse-toit-commercial", alt: "Garde-corps en verre sur une terrasse de toit commerciale" },
    ],
  },
  {
    slug: "portes-commerciales",
    navLabel: "Portes commerciales",
    icon: "porte",
    shortDescription: "Portes vitrées, cloisons et murs-rideaux pour commerces.",
    title: "Portes commerciales et vitrées à Québec | Vitrerie LB9",
    metaDescription: "Portes de verre, cloisons et portes commerciales installées par Vitrerie LB9, vitrier résidentiel et commercial dans la région de Québec.",
    h1: "Portes et vitrage commercial",
    lead: "Halls d'entrée, cloisons de bureau, façades — Vitrerie LB9 installe et répare le vitrage commercial pour les entreprises de la région.",
    body: [
      "Le vitrage commercial couvre un éventail large : portes vitrées d'entrée avec quincaillerie lourde (ferme-porte, barre anti-panique), cloisons intérieures de bureau, murs-rideaux et façades vitrées.",
      "On travaille aussi bien sur des projets neufs, en coordination avec d'autres corps de métier sur le chantier, que sur des appels de service pour ajuster ou réparer une porte existante — charnières usées, ferme-porte déréglé, vitrage à remplacer.",
    ],
    includes: [
      "Portes vitrées commerciales et quincaillerie (ferme-porte, barre anti-panique)",
      "Cloisons de bureau et murs-rideaux",
      "Ajustement et réparation de portes existantes",
      "Appels de service pour commerces et immeubles à logements",
    ],
    photos: [
      { slug: "portes-vitrees-hall-commercial", alt: "Portes vitrées commerciales, hall d'entrée" },
      { slug: "cloison-vitree-bureau-commercial", alt: "Cloison vitrée de bureau en installation" },
      { slug: "fenetres-noires-mur-pierre", alt: "Grandes fenêtres à cadre noir dans un mur de pierre" },
    ],
  },
  {
    slug: "miroirs-sur-mesure",
    navLabel: "Miroirs sur mesure",
    icon: "miroir",
    shortDescription: "Miroirs découpés sur mesure pour salle de bain, gym ou commerce.",
    title: "Miroirs sur mesure à Québec | Vitrerie LB9",
    metaDescription: "Miroirs sur mesure pour salle de bain, gym ou commerce, mesurés et installés par Vitrerie LB9 dans la région de Québec.",
    h1: "Miroirs sur mesure",
    lead: "Un miroir pleine longueur, arqué ou aux coins arrondis — chaque forme est découpée sur mesure selon votre espace.",
    body: [
      "Rectangulaire, arqué, ovale ou aux coins arrondis : la forme du miroir est découpée selon vos dimensions exactes, pas selon un format standard. C'est particulièrement utile pour les vanités doubles, les miroirs pleine hauteur ou les projets décoratifs avec une forme précise en tête.",
      "La fixation murale est faite de façon sécuritaire, avec des attaches adaptées au poids et à la surface du mur — céramique, gypse ou béton.",
    ],
    includes: [
      "Découpe sur mesure : rectangulaire, arquée, ovale, coins arrondis",
      "Miroir simple ou double épaisseur",
      "Fixation murale sécurisée, adaptée à la surface",
      "Salle de bain, gym, commerce ou projet décoratif",
    ],
    photos: [
      { slug: "miroir-arque", alt: "Miroir arqué sur mesure" },
      { slug: "miroir-double-vanite-retroeclaire", alt: "Miroir sur mesure rétroéclairé au-dessus d'une double vanité" },
      { slug: "grand-miroir-double-vanite", alt: "Grand miroir au-dessus d'une double vanité" },
    ],
  },
  {
    slug: "calfeutrage",
    navLabel: "Calfeutrage",
    icon: "calfeutrage",
    shortDescription: "Étanchéité à l'air et à l'eau autour du vitrage et des cadres.",
    title: "Calfeutrage de vitrage à Québec | Vitrerie LB9",
    metaDescription: "Calfeutrage professionnel de vitrage et de cadres pour l'étanchéité à l'air et à l'eau, par Vitrerie LB9 dans la région de Québec.",
    h1: "Calfeutrage",
    lead: "Un calfeutrage usé ou mal posé laisse passer l'air et l'eau. On refait l'étanchéité autour de vos fenêtres, portes et vitrages.",
    body: [
      "Un calfeutrage qui craquelle, durcit ou se décolle n'assure plus l'étanchéité prévue à l'origine — ce qui se traduit souvent par un courant d'air perçu près d'une fenêtre, ou pire, une infiltration d'eau qui finit par endommager le cadre ou le mur.",
      "On retire l'ancien scellant, on nettoie la surface et on applique un produit adapté au support — verre, aluminium ou bois — pour restaurer une étanchéité complète à l'air et à l'eau. Ce travail se fait souvent en complément d'un remplacement de thermos ou d'une réparation de porte.",
    ],
    includes: [
      "Retrait complet de l'ancien calfeutrage",
      "Scellant adapté au support (verre, aluminium, bois)",
      "Étanchéité à l'air et à l'eau",
      "Combinable avec un remplacement de thermos ou une réparation de porte",
    ],
    photos: [],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getOtherServices(currentSlug: string): Service[] {
  return SERVICES.filter((s) => s.slug !== currentSlug);
}
