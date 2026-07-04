import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  heading?: string;
  className?: string;
};

export function Section({ children, heading, className = "" }: SectionProps) {
  return (
    <section className={`py-12 ${className}`}>
      {heading && (
        <h2 className="mb-6 font-display text-2xl font-bold">{heading}</h2>
      )}
      {children}
    </section>
  );
}
