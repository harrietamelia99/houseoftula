import { LOTUS_PATH } from "@/components/lotusPath";

/**
 * Divider between main sections: Emma's lotus from her cards, with a fine line either side.
 * Colour comes from the olive brand token.
 */
export function VeinDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center px-6 py-10 md:py-14 ${className}`} aria-hidden="true">
      <svg viewBox="0 0 400 100" className="h-auto w-60 text-olive md:w-[320px]">
        <path d="M8 62H92M308 62H392" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
        <g transform="translate(106.5 0)">
          <path d={LOTUS_PATH} fill="currentColor" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}
