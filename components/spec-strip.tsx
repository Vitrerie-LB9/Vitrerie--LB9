import { SITE } from "@/lib/constants";

const ITEMS = [
  "Mesure confirmée sur place",
  "Contact direct avec le vitrier",
  "Verre trempé & feuilleté",
  "Région de Québec",
  `RBQ ${SITE.rbq}`,
];

export default function SpecStrip() {
  return (
    <div className="border-t border-paper/10 bg-ink">
      <div className="grid grid-cols-2 gap-px bg-paper/10 md:grid-cols-5">
        {ITEMS.map((item) => (
          <div key={item} className="bg-ink px-4 py-6 text-center">
            <span className="font-mono text-[0.68rem] uppercase tracking-wide text-paper">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
