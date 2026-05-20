export function SectionRule({ className = "" }: { className?: string }) {
  return <div className={`h-px w-full bg-border ${className}`} aria-hidden />;
}
