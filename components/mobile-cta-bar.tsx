import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex gap-px bg-ink/10 sm:hidden">
      <a
        href={`tel:${SITE.phoneLink}`}
        className="flex-1 bg-ink py-3.5 text-center text-sm font-semibold text-paper"
      >
        Appeler
      </a>
      <Link
        href="/#soumission"
        className="flex-1 bg-gold py-3.5 text-center text-sm font-semibold text-paper"
      >
        Soumission
      </Link>
    </div>
  );
}
