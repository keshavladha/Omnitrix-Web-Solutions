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
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold text-white sm:text-6xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-400">{copy}</p>
    </Reveal>
  );
}
