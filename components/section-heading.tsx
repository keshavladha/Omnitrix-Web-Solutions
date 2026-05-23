import { Reveal } from "@/components/motion";

export function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-blue-600">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-500">{copy}</p>
    </Reveal>
  );
}
