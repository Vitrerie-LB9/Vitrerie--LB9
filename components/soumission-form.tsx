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

  const [error, setError] = useState<string | null>(null);
const [loading, setLoading] = useState(false);

async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setError(null);
  setLoading(true);

  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    const response = await fetch("/api/soumission", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: formData.get("nom"),
        lastName: "",
        email: formData.get("courriel"),
        phone: formData.get("tel"),
        message: `Service: ${formData.get("service")}\n\n${formData.get("details")}`,
      }),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de l'envoi");
    }

    setSubmitted(true);
  } catch (err) {
    setError("Une erreur est survenue. Veuillez réessayer ou nous appeler directement.");
  } finally {
    setLoading(false);
  }
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

{error && (
  <p className="mb-3 text-sm text-red-600">{error}</p>
)}
<button
  type="submit"
  disabled={loading}
  className="w-full rounded-sm bg-ink py-4 text-base font-semibold text-paper transition-colors hover:bg-ink-3 disabled:opacity-60"
>
  {loading ? "Envoi en cours..." : "Envoyer ma demande"}
</button>

    </form>
  );
}
