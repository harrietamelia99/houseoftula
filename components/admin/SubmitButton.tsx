"use client";

import { useFormStatus } from "react-dom";
import { buttonClass } from "./styles";

export function SubmitButton({ children, busy = "Saving…" }: { children: React.ReactNode; busy?: string }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={buttonClass}>
      {pending ? busy : children}
    </button>
  );
}
