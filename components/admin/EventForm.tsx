"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { saveEvent } from "@/lib/cms/actions";
import type { CmsEvent } from "@/lib/cms/types";
import { PhotoPicker } from "./PhotoPicker";
import { SubmitButton } from "./SubmitButton";
import { inputClass, labelClass, quietButtonClass } from "./styles";

export function EventForm({ event }: { event?: CmsEvent }) {
  const [state, action] = useFormState(saveEvent, undefined);
  return (
    <form action={action} className="space-y-7 rounded-xl border border-border bg-[#FCFBF3] p-6 md:p-8">
      <input type="hidden" name="id" value={event?.id ?? ""} />
      <div>
        <label htmlFor="title" className={labelClass}>
          Name of the event
        </label>
        <input id="title" name="title" defaultValue={event?.title} required placeholder="For example: Restorative Yoga and Sound Bath" className={inputClass} />
      </div>
      <div className="grid gap-7 md:grid-cols-2">
        <div>
          <label htmlFor="date" className={labelClass}>
            Date
          </label>
          <input id="date" name="date" type="date" defaultValue={event?.date} required className={inputClass} />
        </div>
        <div>
          <label htmlFor="time" className={labelClass}>
            Time
          </label>
          <input id="time" name="time" defaultValue={event?.time} placeholder="For example: 7pm to 8.30pm" className={inputClass} />
        </div>
      </div>
      <div className="grid gap-7 md:grid-cols-2">
        <div>
          <label htmlFor="location" className={labelClass}>
            Where
          </label>
          <input id="location" name="location" defaultValue={event?.location} placeholder="For example: The studio, Chew Magna" className={inputClass} />
        </div>
        <div>
          <label htmlFor="price" className={labelClass}>
            Price <span className="text-muted">(optional)</span>
          </label>
          <input id="price" name="price" defaultValue={event?.price} placeholder="For example: £25" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="description" className={labelClass}>
          About the event
        </label>
        <textarea id="description" name="description" defaultValue={event?.description} rows={5} placeholder="A few sentences about what to expect." className={inputClass} />
      </div>
      <div>
        <p className={labelClass}>
          Photo <span className="text-muted">(optional)</span>
        </p>
        <div className="mt-3">
          <PhotoPicker mode="field" name="image" initial={event?.image} label="Choose a photo" />
        </div>
      </div>
      <p className="rounded-lg bg-surface/40 px-4 py-3 text-[0.95rem] text-forest">
        The event will show a <strong className="font-normal">Book on WhatsApp</strong> button. It opens a WhatsApp message to you
        with the event name and date already filled in. Events disappear from the website by themselves once the date has passed.
      </p>
      {state?.error ? <p className="text-[0.95rem] text-[#9b3b22]">{state.error}</p> : null}
      <div className="flex flex-wrap items-center gap-4">
        <SubmitButton>{event ? "Save changes" : "Add event"}</SubmitButton>
        <Link href="/admin/events" className={quietButtonClass}>
          Cancel
        </Link>
      </div>
    </form>
  );
}
