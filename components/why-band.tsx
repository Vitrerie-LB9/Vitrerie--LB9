import type { ReactNode } from "react";
import { CheckIcon } from "./icons";
import { SITE } from "@/lib/constants";

const ITEMS: { tok: ReactNode; label: string }[] = [
  { tok: SITE.yearsExperience, label: "Ans d'expérience sur le terrain" },
  { tok: "QC", label: "Entreprise de la région de Québec" },
  { tok: "R+C", label: "Résidentiel et commercial" },
  { tok: <CheckIcon className="mx-auto h-6 w-6" />, label: "Travail garanti" },
  { tok: "48H", label: "Réponse à votre soumission" },
];

export default function WhyBand() {
  return (
    <div className="grid grid-cols-2 gap-px border border-ink/10 bg-ink/10 md:grid-cols-5">
      {ITEMS.map((item, i) => (
        <div key={i} className="bg-paper px-5 py-8 text-center">
          <div className="font-display mb-2 text-3xl font-black text-ink">{item.tok}</div>
          <div className="text-[0.84rem] leading-snug text-gray-dark">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
