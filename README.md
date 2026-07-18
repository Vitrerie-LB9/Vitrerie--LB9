# Vitrerie LB9 — site Next.js

Site vitrine de Vitrerie LB9 (Québec), construit avec Next.js 15 (App Router),
React 19, TypeScript et Tailwind CSS 4.

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Build de production

```bash
npm run build
npm run start
```

> **Important** : ce projet a été généré dans un environnement sans accès
> réseau, donc `npm install` et `npm run build` n'ont pas pu être exécutés
> pour valider le tout de bout en bout. Le code a été vérifié ligne par
> ligne (syntaxe TypeScript/JSX, cohérence des imports, classes Tailwind).
> Lancez `npm run build` en premier — si une erreur apparaît, copiez le
> message ici et on la corrige tout de suite.

## Déployer sur Vercel

1. Poussez ce dossier dans un dépôt Git (GitHub, GitLab ou Bitbucket).
2. Sur [vercel.com](https://vercel.com), cliquez **Add New → Project** et
   importez le dépôt.
3. Vercel détecte Next.js automatiquement — aucune configuration requise.
4. Une fois déployé, dans **Settings → Domains**, ajoutez `vitrerielb9.com`
   et suivez les instructions pour pointer les DNS depuis Namecheap.

## Structure du projet

```
app/
  layout.tsx              mise en page racine (polices, métadonnées, en-tête/pied de page)
  page.tsx                page d'accueil
  services/[slug]/page.tsx  gabarit unique qui génère les 6 pages de service
  sitemap.ts              plan de site généré automatiquement
  robots.ts               robots.txt généré automatiquement
components/               composants React réutilisables
lib/
  data.ts                 CONTENU DU SITE : services, photos de la galerie
  constants.ts            coordonnées et liens de navigation
public/images/            logo, favicons, photos (déjà optimisées en .webp)
```

## Modifier le contenu

Tout le contenu texte (services, textes des pages, légendes de photos) est
centralisé dans **`lib/data.ts`**. C'est le seul fichier à modifier pour :

- **Changer le texte d'un service** : modifier l'objet correspondant dans le
  tableau `SERVICES`.
- **Ajouter un 7e service** : ajouter un objet à `SERVICES` avec un nouveau
  `slug` — une page `/services/<slug>` est générée automatiquement, avec son
  propre titre SEO et son entrée dans le plan de site.
- **Ajouter une photo à la galerie** : ajouter un objet à `GALLERY_PHOTOS`,
  puis déposer le fichier `.webp` correspondant dans `public/images/photos/`.
- **Changer le téléphone, le courriel ou le numéro RBQ** : tout se trouve
  dans **`lib/constants.ts`** (`SITE`), répercuté automatiquement partout
  (en-tête, pied de page, formulaire, données structurées SEO).

## Formulaire de soumission

Le formulaire (`components/soumission-form.tsx`) affiche une confirmation
à l'écran mais n'envoie rien pour l'instant. Un commentaire dans le fichier
indique où brancher HubSpot (script d'intégration natif ou appel à l'API
Forms de HubSpot).

## Notes techniques

- **Images** : toutes les photos passent par `next/image` (optimisation,
  lazy loading, formats AVIF/WebP automatiques).
- **Polices** : chargées via `next/font/google` (Libre Franklin, Public
  Sans, Space Mono) — auto-hébergées, aucune requête externe.
- **Rendu** : toutes les pages sont statiques (SSG) — aucune donnée n'est
  chargée à la requête, donc temps de réponse quasi instantané une fois
  déployé sur Vercel.
- **SEO** : métadonnées par page, `sitemap.xml` et `robots.txt` générés
  automatiquement, données structurées JSON-LD (LocalBusiness) sur la
  page d'accueil.
