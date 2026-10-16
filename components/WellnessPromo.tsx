"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { homeContent } from "@/content/home";
import { siteContentFrame } from "@/lib/siteLayout";

const storageKey = "tula-wellness-promo-dismissed";

export function WellnessPromo() {
  const promo = homeContent.wellnessPromo;
  const [visible, setVisible] = useState<boolean>(homeContent.showWellnessPromo);

  useEffect(() => {
    if (!homeContent.showWellnessPromo) return;
    try {
      if (sessionStorage.getItem(storageKey) === "1") setVisible(false);
    } catch {
      /* storage can be blocked; keep the note visible */
    }
  }, []);

  if (!homeContent.showWellnessPromo || !visible) return null;

  function dismiss() {
    try {
      sessionStorage.setItem(storageKey, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  return (
    <aside className="border-y border-border/80 bg-surface/70" aria-label="Wellness at Work">
      <div className={`${siteContentFrame} flex items-start justify-between gap-4 py-4 md:items-center md:py-5`}>
        <p className="font-body text-sm font-light leading-relaxed text-text md:text-[0.9375rem]">
          {promo.lead}{" "}
          <Link
            href={promo.href}
            className="border-b border-forest/30 pb-px text-forest transition-colors duration-layout ease-out-soft hover:border-forest"
          >
            {promo.linkLabel}
          </Link>
        </p>
        <button
          type="button"
          className="tap-target -mr-2 inline-flex shrink-0 items-center justify-center px-2 font-body text-sm text-muted transition-colors duration-layout ease-out-soft hover:text-text"
          onClick={dismiss}
          aria-label="Dismiss Wellness at Work note"
        >
          Close
        </button>
      </div>
    </aside>
  );
}
