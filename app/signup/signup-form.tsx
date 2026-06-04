"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import posthog from "posthog-js";

export default function SignupForm() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") ?? "starter";

  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    posthog.identify(email, { email });
    posthog.capture("signup_completed", { plan, email });
    setDone(true);
  }

  if (done) {
    return (
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          You&apos;re in. 🎉
        </h1>
        <p className="text-neutral-600">
          Account created on the <strong>{plan}</strong> plan. This is where a
          real app would drop you into onboarding.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md">
      <h1 className="text-3xl font-semibold tracking-tight">
        Create your account
      </h1>
      <p className="mt-2 text-sm text-neutral-600">
        Selected plan: <strong className="capitalize">{plan}</strong>. 14 days
        free, no card required.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-medium">Work email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="rounded-md border border-neutral-300 px-3 py-2 outline-none focus:border-neutral-900"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-medium">Password</span>
          <input
            type="password"
            required
            minLength={6}
            placeholder="••••••••"
            className="rounded-md border border-neutral-300 px-3 py-2 outline-none focus:border-neutral-900"
          />
        </label>
        <button
          type="submit"
          className="mt-2 rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-700"
        >
          Create account
        </button>
      </form>
    </div>
  );
}
