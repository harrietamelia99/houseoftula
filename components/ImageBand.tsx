import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { Lines, type LineText } from "@/components/Lines";

type ImageBandProps = {
  src: string;
  quote: LineText;
  attribution?: string;
};

/** Full-width landscape photograph with a large italic line over it. */
export function ImageBand({ src, quote, attribution }: ImageBandProps) {
  return (
    <section className="relative isolate flex min-h-[70svh] items-center justify-center overflow-hidden md:min-h-[82svh]">
      <Image src={src} alt="" fill sizes="100vw" className="photo-soft -z-20 object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-forest-slab/45" />
      <FadeIn className="site-frame mx-auto max-w-[56rem] text-center">
        <p className="font-heading text-[clamp(2rem,4.6vw,3.9rem)] font-light italic leading-[1.12] text-almond">
          <Lines text={quote} />
        </p>
        {attribution ? (
          <p className="mt-8 font-body text-[0.68rem] uppercase tracking-[0.32em] text-almond/75">{attribution}</p>
        ) : null}
      </FadeIn>
    </section>
  );
}
