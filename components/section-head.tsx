import type { ReactNode } from "react";
import Eyebrow from "./eyebrow";

export default function SectionHead({
  eyebrow,
  title,
  description,
  onDark = false,
  center = false,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  onDark?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`mb-10 max-w-[640px] md:mb-16 ${center ? "mx-auto text-center" : ""} ${className}`}>
      <Eyebrow onDark={onDark} center={center}>
        {eyebrow}
      </Eyebrow>
      <h2
        className={`text-[clamp(1.7rem,4vw,2.3rem)] font-bold ${onDark ? "text-paper" : "text-ink"}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-[1.02rem] ${onDark ? "text-[#b9b6af]" : "text-gray"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
