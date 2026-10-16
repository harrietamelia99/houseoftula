import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SitePhoto } from "@/components/SitePhoto";
import { VeinDivider } from "@/components/VeinDivider";
import { eventFallbackImage, events, eventsPage } from "@/content/events";
import { buildPageMeta } from "@/lib/metadata";
import { siteContentFrame, sitePageHeaderTop, siteSectionY } from "@/lib/siteLayout";

export const metadata = buildPageMeta({
  title: eventsPage.title,
  description: eventsPage.seoDescription,
  path: "/events",
});

export default function EventsPage() {
  return (
    <>
      <header className={`bg-almond ${sitePageHeaderTop} pb-2`}>
        <div className={siteContentFrame}>
          <FadeIn className="max-w-3xl">
            <p className="font-tag font-body uppercase tracking-[0.28em] text-muted">Events</p>
            <h1 className="font-heading mt-4 text-h2 font-light text-forest">{eventsPage.title}</h1>
            <p className="mt-6 max-w-measure font-body font-light leading-[1.75] text-muted">{eventsPage.intro}</p>
          </FadeIn>
        </div>
      </header>

      <VeinDivider />

      <section className={`bg-almond ${siteSectionY} pt-0`}>
        <div className={siteContentFrame}>
          {events.length === 0 ? (
            <FadeIn className="max-w-measure">
              <p className="font-body font-light leading-[1.75] text-muted">{eventsPage.empty.message}</p>
              <Link
                href={eventsPage.empty.link.href}
                className="mt-8 inline-flex border-b border-forest/30 pb-px font-body font-light text-forest transition-colors duration-layout ease-out-soft hover:border-forest"
              >
                {eventsPage.empty.link.label}
              </Link>
            </FadeIn>
          ) : (
            <ul className="grid gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
              {events.map((event) => (
                <li key={`${event.title}-${event.date}`}>
                  <FadeIn>
                    <article className="flex h-full flex-col">
                      <SitePhoto
                        src={event.image ?? eventFallbackImage}
                        alt=""
                        aspect="landscape"
                        sizes="(min-width: 768px) 45vw, 100vw"
                      />
                      <p className="font-tag mt-6 font-body uppercase tracking-[0.22em] text-muted">
                        {event.date}
                        {event.time ? ` · ${event.time}` : ""}
                      </p>
                      <h2 className="font-heading mt-3 text-h3 font-light text-forest">{event.title}</h2>
                      <p className="mt-3 font-body font-light text-text">{event.location}</p>
                      <p className="mt-1 font-body text-sm font-light text-muted">
                        Up to {event.capacity} places
                      </p>
                      <p className="mt-4 flex-1 font-body font-light leading-[1.75] text-muted">{event.description}</p>
                      <a
                        href={event.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tap-target mt-8 inline-flex min-h-[3rem] w-full items-center justify-center rounded-full border border-forest/30 bg-forest px-8 py-3 font-tag font-body text-[0.65rem] uppercase tracking-[0.32em] text-almond transition-[transform,background-color,border-color] duration-layout ease-out-soft hover:-translate-y-0.5 hover:border-sienna hover:bg-sienna sm:w-auto sm:self-start"
                      >
                        {eventsPage.bookLabel}
                      </a>
                    </article>
                  </FadeIn>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
