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
    title: "Fenêtre embuée : faut-il changer tout le cadre ou seulement le thermos ?",
    description:
      "Une fenêtre embuée entre les vitres ne veut pas dire qu'il faut tout remplacer. Voici comment on évalue ça, et à quoi vous attendre.",
    date: "2026-07-29",
    sections: [
      {
        type: "p",
        text: "Une fenêtre embuée entre les vitres, ou avec un anneau de buée qui ne part jamais, est l'un des problèmes les plus fréquents qu'on nous demande de régler à Québec. La bonne nouvelle : dans la grande majorité des cas, il n'est pas nécessaire de remplacer toute la fenêtre. On peut simplement changer le thermos - l'unité scellée de verre - sans toucher au cadre.",
      },
      { type: "h2", text: "Qu'est-ce qu'un thermos, au juste ?" },
      {
        type: "p",
        text: "Le thermos (ou unité scellée) désigne les deux ou trois panneaux de verre assemblés ensemble avec un espace d'air (ou de gaz argon) entre eux, qui donnent à votre fenêtre son pouvoir isolant. Quand le joint d'étanchéité s'use avec le temps, l'humidité s'infiltre entre les vitres - c'est ce qui cause la buée permanente entre les deux vitres, un voile blanchâtre, ou une perte visible d'efficacité énergétique.",
      },
      { type: "h2", text: "Comment savoir si on peut juste changer le thermos" },
      {
        type: "p",
        text: "C'est la première chose qu'on vérifie sur place. Le cadre reste en bon état dans la grande majorité des cas - le bris d'un thermos est un problème du vitrage, pas de la structure de la fenêtre. On regarde l'état du cadre, le type de vitrage d'origine, et les dimensions exactes.",
      },
      {
        type: "p",
        text: "Si le cadre est endommagé (bois pourri, PVC fissuré, déformation), on vous présente alors les options plutôt que de simplement remplacer le vitrage sur un cadre compromis.",
      },
      { type: "h2", text: "Combien de temps ça prend" },
      {
        type: "p",
        text: "Pour une fenêtre résidentielle standard, l'installation elle-même prend généralement entre 45 et 90 minutes, une fois l'unité reçue. Le délai principal se situe plutôt du côté de la commande et de la réception du verre auprès du fournisseur.",
      },
      {
        type: "p",
        text: "Le prix dépend de la taille de la fenêtre et du type de vitrage choisi. Chaque projet est différent - la meilleure façon d'obtenir un prix exact reste de nous envoyer vos dimensions et une photo, sans engagement.",
      },
      { type: "h2", text: "Quand le remplacement complet devient nécessaire" },
      {
        type: "ul",
        items: [
          "le cadre est structurellement endommagé (pourriture, fissure importante, déformation)",
          "vous cherchez à changer le style ou le type d'ouverture de la fenêtre",
          "l'âge général de la fenêtre justifie une mise à niveau complète",
        ],
      },
      {
        type: "p",
        text: "Dans tous les autres cas, remplacer uniquement le thermos est la solution la plus rapide et la plus économique.",
      },
    ],
  },{
    slug: "verre-trempe-vs-verre-feuillete",
    title: "Verre trempé ou verre feuilleté : quelle est la différence ?",
    description:
      "Les deux sont des verres de sécurité, mais ils ne réagissent pas pareil en cas de bris. Voici comment choisir selon votre projet.",
    date: "2026-08-02",
    sections: [
      {
        type: "p",
        text: "On nous pose souvent la question quand vient le temps de choisir le verre pour une douche, une porte ou une cloison. Le verre trempé et le verre feuilleté sont tous les deux des verres de sécurité, mais ils ne se comportent pas de la même façon en cas de bris — et ça change ce qui convient le mieux à votre projet.",
      },
      { type: "h2", text: "Le verre trempé" },
      {
        type: "p",
        text: "Chauffé puis refroidi rapidement, le verre trempé devient beaucoup plus résistant qu'un verre ordinaire. S'il finit par casser, il se fragmente en petits morceaux granuleux, peu coupants. C'est le choix le plus courant pour les portes de douche, les cloisons et les portes vitrées.",
      },
      { type: "h2", text: "Le verre feuilleté" },
      {
        type: "p",
        text: "Composé de deux épaisseurs de verre collées ensemble avec un film plastique entre les deux, le verre feuilleté reste en place même s'il se fissure — un peu comme un pare-brise d'auto. C'est le choix privilégié pour les garde-corps et tout endroit où une chute est possible, puisque le panneau ne s'effondre pas d'un coup s'il se brise.",
      },
      { type: "h2", text: "Lequel choisir ?" },
      {
        type: "p",
        text: "Pour une douche ou une porte intérieure, le verre trempé fait généralement le travail. Pour un garde-corps ou tout ce qui protège contre une chute, le verre feuilleté est le choix le plus sûr, parfois même exigé. On vous conseille le bon type selon votre projet lors de la visite de mesure.",
      },
    ],
  },
];