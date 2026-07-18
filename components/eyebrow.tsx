import type { ReactNode } from "react";

export default function Eyebrow({
  children,
  onDark = false,
  center = false,
}: {
  children: ReactNode;
  onDark?: boolean;
  center?: boolean;
}) {
  return (
    <p
      className={`font-mono mb-4 flex items-center gap-2.5 text-[0.76rem] uppercase tracking-[0.14em] ${
        onDark ? "text-gold-light" : "text-gold"
      } ${center ? "justify-center" : ""}`}
    >
      {!center && <span className={`h-px w-5 ${onDark ? "bg-gold-light" : "bg-gold"}`} />}
      {children}
    </p>
  );
}
