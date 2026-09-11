"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Eye, EyeOff, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

function Mark() {
  return (
    <div className="relative z-10 flex items-center gap-3">
      <div className="relative grid size-12 place-items-center overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-[0_8px_30px_rgba(96,165,250,.3)] backdrop-blur-xl">
        <div className="absolute -right-1 -top-1 size-6 rounded-full bg-coral-400" />
        <span className="relative text-[17px] font-black tracking-[-.08em] text-white">VL</span>
      </div>
      <span className="text-[26px] font-bold tracking-[-.045em]">Vellum</span>
    </div>
  );
}

const proof = [
  ["$18.2m", "Revenue guided"],
  ["14 hrs", "Saved weekly"],
  ["4.9/5", "Merchant rating"],
];

export default function AuthPage({ mode }: { mode: "login" | "signup" }) {
  const signup = mode === "signup";
  const [show, setShow] = useState(false);
  const router = useRouter();

  function enterApp() {
    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-canvas p-3 sm:p-5">
      <div className="grid min-h-[calc(100vh-1.5rem)] overflow-hidden rounded-[26px] border border-ink-200 bg-white shadow-sm sm:min-h-[calc(100vh-2.5rem)] md:grid-cols-[1.05fr_.95fr]">
        <section className="relative hidden overflow-hidden bg-gradient-to-br from-[#082d63] via-[#0b4fa3] to-[#2563eb] p-8 text-white md:flex md:flex-col md:justify-between lg:p-12">
          <div className="absolute -left-24 bottom-8 size-80 rounded-full bg-coral-300/35 blur-[85px]" />
          <div className="absolute -right-20 -top-12 size-96 rounded-full bg-white/20 blur-[110px]" />
          <div className="absolute inset-6 rounded-[30px] border border-white/10 bg-white/[.035] shadow-[inset_0_1px_0_rgba(255,255,255,.12)] backdrop-blur-[2px]" />
          <Mark />

          <div className="relative max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-white/65">
              <Sparkles size={13} className="text-coral-400" />
              AI-native commerce operations
            </span>
            <h1 className="mt-6 text-3xl font-bold leading-[1.08] tracking-[-.055em] lg:text-[42px]">
              Clarity for every commerce decision.
            </h1>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/50">
              Vellum connects your products, customers, and performance into a single
              intelligent view—so the next move is always in focus.
            </p>
            <div className="mt-9 flex items-center gap-3">
              <div className="flex -space-x-2">
                {["SA", "MC", "ER", "+"].map((initials, index) => (
                  <span
                    key={initials}
                    className="grid size-8 place-items-center rounded-full border-2 border-ink-950 bg-white/10 text-[9px] font-bold"
                    style={{ backgroundColor: ["#2563eb", "#0f766e", "#f97316"][index] }}
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-white/45">
                <b className="text-white/80">2,400+ teams</b> found their edge
              </p>
            </div>
          </div>

          <div className="relative grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
            {proof.map(([value, label]) => (
              <div key={value}>
                <b className="block text-sm">{value}</b>
                <span className="text-[10px] text-white/35">{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-[410px]">
            <div className="mb-10 flex justify-between md:hidden">
              <Mark />
              <Link href={signup ? "/login" : "/signup"} className="text-xs font-bold text-coral-600">
                {signup ? "Sign in" : "Create account"}
              </Link>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[.16em] text-coral-600">
                {signup ? "Start building" : "Welcome back"}
              </p>
              <h2 className="mt-3 text-[28px] font-bold tracking-[-.045em] text-ink-950">
                {signup ? "Create your workspace" : "Sign in to Vellum"}
              </h2>
              <p className="mt-2 text-sm text-ink-400">
                {signup ? "A clearer way to run your store starts here." : "Your commerce workspace is ready."}
              </p>
            </div>

            <button
              type="button"
              onClick={enterApp}
              className="mt-7 flex h-11 w-full items-center justify-center gap-3 rounded-xl border border-ink-200 text-sm font-semibold text-ink-700 transition hover:bg-ink-50"
            >
              <span className="text-base font-black text-[#2563eb]">G</span>
              Continue with Google
            </button>

            <div className="my-5 flex items-center gap-3">
              <span className="h-px flex-1 bg-ink-100" />
              <span className="text-[10px] uppercase tracking-wider text-ink-300">or continue with email</span>
              <span className="h-px flex-1 bg-ink-100" />
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                enterApp();
              }}
              className="space-y-4"
            >
              {signup && (
                <div className="grid gap-2">
                  <label className="text-xs font-bold text-ink-700">Full name</label>
                  <input className="input" placeholder="Olivia Hart" />
                </div>
              )}

              <div className="grid gap-2">
                <label className="text-xs font-bold text-ink-700">Work email</label>
                <input type="email" className="input" placeholder="you@company.com" />
              </div>

              <div className="grid gap-2">
                <div className="flex justify-between">
                  <label className="text-xs font-bold text-ink-700">Password</label>
                  {!signup && (
                    <button type="button" className="text-[11px] font-semibold text-coral-600">
                      Forgot password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    className="input pr-11"
                    placeholder="Any password—or leave blank"
                  />
                  <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400"
                    aria-label={show ? "Hide password" : "Show password"}
                  >
                    {show ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {signup && (
                <label className="flex items-start gap-2.5 text-[11px] leading-5 text-ink-400">
                  <input type="checkbox" className="mt-1 accent-[#2563eb]" />
                  I agree to the Terms of Service and Privacy Policy.
                </label>
              )}

              <Button type="submit" variant="coral" size="lg" className="w-full">
                {signup ? "Create free account" : "Sign in"}
                <ArrowRight size={15} />
              </Button>
            </form>

            <p className="mt-6 text-center text-xs text-ink-400">
              {signup ? "Already have an account?" : "New to Vellum?"}{" "}
              <Link
                className="font-bold text-ink-800 hover:text-coral-600"
                href={signup ? "/login" : "/signup"}
              >
                {signup ? "Sign in" : "Create an account"}
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
