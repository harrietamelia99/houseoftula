"use client";

import { usePathname } from "next/navigation";

/** Hides the public header and footer inside Emma's editing area. */
export function SiteChrome({
  header,
  footer,
  children,
}: {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}) {
  const admin = usePathname()?.startsWith("/admin");
  if (admin) return <>{children}</>;
  return (
    <>
      {header}
      <main className="relative w-full min-h-0 grow overflow-x-clip">{children}</main>
      {footer}
    </>
  );
}
