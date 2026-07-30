export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  sections: { type: "h2" | "p" | "ul"; text?: string; items?: string[] }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "fenetre-embuee-thermos-ou-fenetre-complete",
    title: "Fenetre embuee : faut-il changer tout le cadre ou seulement le thermos ?",
    description:
      "Une fenetre embuee entre les vitres ne veut pas dire qu'il faut tout remplacer. Voici comment on evalue ca, et a quoi vous attendre.",
    date: "2026-07-29",
    sections: [
      {
        type: "p",
        text: "Une fenetre embuee entre les vitres, ou avec un anneau de buee qui ne part jamais, est l'un des problemes les plus frequents qu'on nous demande de regler a Quebec. La bonne nouvelle : dans la grande majorite des cas, il n'est pas necessaire de remplacer toute la fenetre. On peut simplement changer le thermos - l'unite scellee de verre - sans toucher au cadre.",
      },
      { type: "h2", text: "Qu'est-ce qu'un thermos, au juste ?" },
      {
        type: "p",
        text: "Le thermos (ou unite scellee) designe les deux ou trois panneaux de verre assembles ensemble avec un espace d'air (ou de gaz argon) entre eux, qui donnent a votre fenetre son pouvoir isolant. Quand le joint d'etancheite s'use avec le temps, l'humidite s'infiltre entre les vitres - c'est ce qui cause la buee permanente entre les deux vitres, un voile blanchatre, ou une perte visible d'efficacite energetique.",
      },
      { type: "h2", text: "Comment savoir si on peut juste changer le thermos" },
      {
        type: "p",
        text: "C'est la premiere chose qu'on verifie sur place. Le cadre reste en bon etat dans la grande majorite des cas - le bris d'un thermos est un probleme du vitrage, pas de la structure de la fenetre. On regarde l'etat du cadre, le type de vitrage d'origine, et les dimensions exactes.",
      },
      {
        type: "p",
        text: "Si le cadre est endommage (bois pourri, PVC fissure, deformation), on vous presente alors les options plutot que de simplement remplacer le vitrage sur un cadre compromis.",
      },
      { type: "h2", text: "Combien de temps ca prend" },
      {
        type: "p",
        text: "Pour une fenetre residentielle standard, l'installation elle-meme prend generalement entre 45 et 90 minutes, une fois l'unite recue. Le delai principal se situe plutot du cote de la commande et de la reception du verre aupres du fournisseur.",
      },
      {
        type: "p",
        text: "Le prix depend de la taille de la fenetre et du type de vitrage choisi. Chaque projet est different - la meilleure facon d'obtenir un prix exact reste de nous envoyer vos dimensions et une photo, sans engagement.",
      },
      { type: "h2", text: "Quand le remplacement complet devient necessaire" },
      {
        type: "ul",
        items: [
          "le cadre est structurellement endommage (pourriture, fissure importante, deformation)",
          "vous cherchez a changer le style ou le type d'ouverture de la fenetre",
          "l'age general de la fenetre justifie une mise a niveau complete",
        ],
      },
      {
        type: "p",
        text: "Dans tous les autres cas, remplacer uniquement le thermos est la solution la plus rapide et la plus economique.",
      },
    ],
  },
];
