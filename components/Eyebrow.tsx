/** Small spaced capitals with a short rule, used above headings. */
export function Eyebrow({
  children,
  className = "",
  tone = "dark",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  const colour = tone === "light" ? "text-almond/75" : "text-muted";
  const rule = tone === "light" ? "bg-almond/50" : "bg-sienna";

  return (
    <p className={`flex items-center gap-4 font-body text-[0.68rem] uppercase tracking-[0.32em] ${colour} ${className}`}>
      <span aria-hidden className={`h-px w-8 ${rule}`} />
      {children}
    </p>
  );
}
