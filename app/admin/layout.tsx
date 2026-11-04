import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editing area | House of Tula",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="w-full grow font-body font-light">{children}</div>;
}
