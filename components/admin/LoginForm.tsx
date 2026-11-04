"use client";

import { useFormState } from "react-dom";
import { signIn } from "@/lib/cms/actions";
import { SubmitButton } from "./SubmitButton";
import { inputClass, labelClass } from "./styles";

export function LoginForm() {
  const [state, action] = useFormState(signIn, undefined);
  return (
    <form action={action} className="mt-8 space-y-6">
      <div>
        <label htmlFor="password" className={labelClass}>
          Password
        </label>
        <input id="password" name="password" type="password" autoComplete="current-password" required className={inputClass} />
      </div>
      {state?.error ? <p className="text-[0.95rem] text-[#9b3b22]">{state.error}</p> : null}
      <SubmitButton busy="Signing in…">Sign in</SubmitButton>
    </form>
  );
}
