import { redirect } from "next/navigation";
import { LoginForm } from "@/components/admin/LoginForm";
import { isSignedIn } from "@/lib/cms/auth";

export default function LoginPage() {
  if (isSignedIn()) redirect("/admin");
  return (
    <div className="flex min-h-screen items-center justify-center bg-forest-slab px-5 py-16">
      <div className="w-full max-w-[26rem] rounded-2xl bg-almond p-8 shadow-xl md:p-10">
        <p className="text-sm uppercase tracking-[0.25em] text-sienna">House of Tula</p>
        <h1 className="mt-3 font-heading text-[2.4rem] font-light leading-tight text-forest">Editing area</h1>
        <p className="mt-2 text-muted">Sign in to update your website.</p>
        <LoginForm />
      </div>
    </div>
  );
}
