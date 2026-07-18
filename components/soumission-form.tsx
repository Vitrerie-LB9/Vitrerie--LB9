"use client";

import { useState, type FormEvent } from "react";

const SERVICE_OPTIONS = [
  "Remplacement de thermos",
  "Douche en verre sur mesure",
  "Garde-corps en verre",
  "Porte commerciale / vitrage commercial",
  "Miroir sur mesure",
  "Calfeutrage",
  "Autre",
];

export default function SoumissionForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);

    // ---------------------------------------------------------------
    // INTÉGRATION HUBSPOT
    // Remplacer ce bloc par l'appel à l'API Forms de HubSpot, ou par
    // le script d'intégration natif (Marketing > Formulaires > obtenir
    // le code d'intégration). Les champs ci-dessous (nom, tel,
    // courriel, service, details) correspondent aux valeurs à envoyer.
    // ---------------------------------------------------------------
  }

  if (submitted) {
    return (
      <div className="rounded-sm bg-paper px-5 py-12 text-center text-ink">
        <h3 className="font-display mb-2.5 text-xl font-bold">Demande envoyée ✓</h3>
        <p className="text-gray">Merci — Vitrerie LB9 vous recontacte sous 1 à 2 jours ouvrables.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-sm bg-paper p-7 text-ink sm:p-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="mb-4.5">
          <label htmlFor="nom" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray">
            Nom complet
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            required
            className="w-full rounded-sm border border-ink/10 bg-sand px-3.5 py-3 text-[0.97rem] transition-colors focus:border-gold focus:bg-paper focus:outline-none"
          />
        </div>
        <div className="mb-4.5">
          <label htmlFor="tel" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray">
            Téléphone
          </label>
          <input
            id="tel"
            name="tel"
            type="tel"
            required
            className="w-full rounded-sm border border-ink/10 bg-sand px-3.5 py-3 text-[0.97rem] transition-colors focus:border-gold focus:bg-paper focus:outline-none"
          />
        </div>
      </div>

      <div className="mb-4.5">
        <label htmlFor="courriel" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray">
          Courriel
        </label>
        <input
          id="courriel"
          name="courriel"
          type="email"
          required
          className="w-full rounded-sm border border-ink/10 bg-sand px-3.5 py-3 text-[0.97rem] transition-colors focus:border-gold focus:bg-paper focus:outline-none"
        />
      </div>

      <div className="mb-4.5">
        <label htmlFor="service" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray">
          Type de projet
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-sm border border-ink/10 bg-sand px-3.5 py-3 text-[0.97rem] transition-colors focus:border-gold focus:bg-paper focus:outline-none"
        >
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="mb-4.5">
        <label htmlFor="details" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray">
          Détails du projet
        </label>
        <textarea
          id="details"
          name="details"
          placeholder="Dimensions approximatives, adresse, disponibilités..."
          className="min-h-27.5 w-full resize-y rounded-sm border border-ink/10 bg-sand px-3.5 py-3 text-[0.97rem] transition-colors focus:border-gold focus:bg-paper focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-sm bg-ink py-4 text-base font-semibold text-paper transition-colors hover:bg-ink-3"
      >
        Envoyer ma demande
      </button>
      <p className="mt-3.5 text-center text-xs text-gray">
        Formulaire prêt à connecter à HubSpot (voir le commentaire dans soumission-form.tsx).
      </p>
    </form>
  );
}
