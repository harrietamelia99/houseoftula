import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { siteContentFrame, siteSectionY } from "@/lib/siteLayout";

type ComingSoonPageProps = {
  title: string;
};

export function ComingSoonPage({ title }: ComingSoonPageProps) {
  return (
    <div className={`flex min-h-[min(50vh,calc(100svh-var(--site-header-height)-12rem))] flex-col justify-center bg-almond ${siteSectionY}`}>
      <div className={siteContentFrame}>
        <FadeIn className="mx-auto max-w-md text-center">
          <p className="font-tag font-body uppercase tracking-[0.28em] text-muted">{title}</p>
          <h1 className="font-heading mt-6 text-h2 font-light text-forest">Coming soon</h1>
          <p className="mt-6 font-body font-light leading-[1.75] text-muted">
            This page is being prepared. You&apos;re welcome to explore the homepage in the meantime.
          </p>
          <Link
            href="/"
            className="tap-target mt-10 inline-flex min-h-[3rem] items-center justify-center rounded-full border border-olive/45 px-8 py-2.5 font-tag font-body text-[0.6875rem] uppercase tracking-[0.28em] text-olive-dark transition-[transform,background-color,border-color,color] duration-layout ease-out-soft hover:border-olive hover:bg-surface hover:text-forest active:translate-y-0"
          >
            Back to home
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
