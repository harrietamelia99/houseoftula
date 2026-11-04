"use client";

import { useState } from "react";
import { deleteEvent } from "@/lib/cms/actions";
import { SubmitButton } from "./SubmitButton";

/** Two-step remove, so an event is never deleted by accident. */
export function ConfirmDelete({ id, title }: { id: string; title: string }) {
  const [asking, setAsking] = useState(false);
  if (!asking) {
    return (
      <button type="button" onClick={() => setAsking(true)} className="text-sm text-muted underline underline-offset-2 hover:text-[#9b3b22]">
        Remove
      </button>
    );
  }
  return (
    <form action={deleteEvent} className="flex flex-wrap items-center gap-3 rounded-lg bg-[#F6E9E2] px-3 py-2">
      <input type="hidden" name="id" value={id} />
      <span className="text-sm text-[#7a2f1b]">Remove &ldquo;{title}&rdquo;?</span>
      <SubmitButton busy="Removing…">Yes, remove</SubmitButton>
      <button type="button" onClick={() => setAsking(false)} className="text-sm text-muted underline underline-offset-2">
        Keep it
      </button>
    </form>
  );
}
