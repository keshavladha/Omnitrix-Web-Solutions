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
    <Reveal className="mx-auto mb-20 max-w-3xl text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold text-white sm:text-6xl">
        {title}
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-slate-500">{copy}</p>
    </Reveal>
  );
}
