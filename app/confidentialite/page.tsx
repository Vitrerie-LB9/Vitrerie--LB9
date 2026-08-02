import { SITE } from "@/lib/constants";

export const metadata = {
  title: `Politique de confidentialité | ${SITE.name}`,
};

export default function ConfidentialitePage() {
  return (
    <main className="mx-auto max-w-[760px] px-5 py-24 sm:px-10">
      <h1 className="mb-3 mt-4 font-display text-3xl font-extrabold text-ink">
        Politique de confidentialité
      </h1>
      <p className="mb-10 text-sm text-gray-500">
        Dernière mise à jour : 30 juillet 2026
      </p>

      <div className="flex flex-col gap-5 text-ink/90 leading-relaxed">
        <p>
          {SITE.name} respecte votre vie privée et s&apos;engage à protéger les
          renseignements personnels que vous nous confiez, conformément à la
          Loi sur la protection des renseignements personnels dans le secteur
          privé (Loi 25) du Québec.
        </p>

        <h2 className="mt-4 text-xl font-semibold text-ink">
          Renseignements que nous recueillons
        </h2>
        <p>
          Lorsque vous remplissez notre formulaire de soumission ou nous
          contactez, nous pouvons recueillir votre nom, votre numéro de
          téléphone, votre adresse courriel, votre adresse (pour l&apos;évaluation
          des travaux) et les détails de votre projet.
        </p>

        <h2 className="mt-4 text-xl font-semibold text-ink">
          Utilisation des renseignements
        </h2>
        <p>
          Ces renseignements sont utilisés uniquement pour préparer votre
          soumission, communiquer avec vous au sujet de votre projet, et
          assurer le suivi de nos services. Nous ne vendons ni ne louons vos
          renseignements personnels à des tiers.
        </p>

        <h2 className="mt-4 text-xl font-semibold text-ink">
          Partage avec des tiers
        </h2>
        <p>
          Nous utilisons la plateforme HubSpot pour gérer nos communications
          et le suivi de nos soumissions. Vos renseignements peuvent donc être
          traités par ce fournisseur, dans le seul but de vous servir.
        </p>

        <h2 className="mt-4 text-xl font-semibold text-ink">Conservation</h2>
        <p>
          Vos renseignements sont conservés aussi longtemps que nécessaire
          pour répondre à votre demande ou remplir nos obligations légales et
          comptables, puis supprimés de façon sécuritaire.
        </p>

        <h2 className="mt-4 text-xl font-semibold text-ink">Vos droits</h2>
        <p>
          Vous pouvez en tout temps demander l&apos;accès, la rectification ou la
          suppression de vos renseignements personnels en nous contactant à{" "}
          <a href={`mailto:${SITE.email}`} className="underline hover:text-gold">
            {SITE.email}
          </a>{" "}
          ou au{" "}
          <a href={`tel:${SITE.phoneLink}`} className="underline hover:text-gold">
            {SITE.phoneDisplay}
          </a>
          .
        </p>

        <h2 className="mt-4 text-xl font-semibold text-ink">
          Nous joindre
        </h2>
        <p>
          Pour toute question concernant cette politique, communiquez avec
          nous à {SITE.email}.
        </p>
      </div>
    </main>
  );
}