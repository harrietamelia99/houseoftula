/**
 * Display text that breaks where the meaning breaks.
 *
 * Pass a plain string, or an array of phrases. Each phrase starts on a new line,
 * and if a phrase still has to wrap (on a phone), it wraps evenly rather than
 * leaving a single word on its own line.
 *
 * In the content files, write display lines like:
 *   heading: ["A studio that", "asks very little"]
 */
export type LineText = string | readonly string[];

const NBSP = "\u00a0";

/**
 * Typesetting for display text:
 * - short words (a, an, the, of, to, in, by, +) stay with the word after them,
 *   so a line never ends on "a" or "of";
 * - the last two words are tied together, so a phrase never ends with one word alone.
 */
export function typeset(phrase: string) {
  let out = phrase.replace(/(^|\s)(a|an|the|of|to|in|by|\+)\s/gi, (_m, lead: string, word: string) => `${lead}${word}${NBSP}`);
  const words = out.trim().split(" ");
  if (words.length >= 4) {
    const last = words.pop();
    out = `${words.join(" ")}${NBSP}${last}`;
  }
  return out;
}

export function Lines({ text, from }: { text: LineText; from?: "md" }) {
  if (typeof text === "string") return <>{typeset(text)}</>;

  // `from="md"`: long statements flow as one evenly balanced block on phones,
  // and only take their phrase-by-phrase breaks on wider screens.
  const display = from === "md" ? "md:block" : "block";

  return (
    <>
      {text.map((phrase, index) => (
        <span key={`${index}-${phrase}`} className={`${display} text-balance`}>
          {typeset(phrase)}
          {from === "md" && index < text.length - 1 ? " " : null}
        </span>
      ))}
    </>
  );
}

/** Plain-text version for alt text, aria labels and keys. */
export function linesToString(text: LineText) {
  return typeof text === "string" ? text : text.join(" ");
}
