"use client";

import { useRouter } from "next/navigation";
import posthog from "posthog-js";

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: "$0",
    blurb: "For solo builders validating an idea.",
    features: ["1 feedback inbox", "100 items / mo", "Manual grouping"],
  },
  {
    id: "growth",
    name: "Growth",
    price: "$49",
    blurb: "For teams shipping every week.",
    features: ["Unlimited inboxes", "Auto-grouping", "Roadmap board", "Integrations"],
    featured: true,
  },
];

export default function PricingPage() {
  const router = useRouter();

  function selectPlan(planId: string) {
    posthog.capture("plan_selected", { plan: planId });
    router.push(`/signup?plan=${planId}`);
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight">
          Simple, honest pricing
        </h1>
        <p className="mt-2 text-neutral-600">
          Start free. Upgrade when feedback starts piling up.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`flex flex-col gap-5 rounded-xl border p-6 ${
              plan.featured
                ? "border-neutral-900 shadow-sm"
                : "border-neutral-200"
            }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{plan.name}</h2>
                {plan.featured && (
                  <span className="rounded-full bg-neutral-900 px-2 py-0.5 text-xs text-white">
                    Popular
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-neutral-600">{plan.blurb}</p>
            </div>

            <div className="text-3xl font-semibold">
              {plan.price}
              <span className="text-base font-normal text-neutral-500">
                {" "}
                / mo
              </span>
            </div>

            <ul className="flex flex-col gap-2 text-sm text-neutral-700">
              {plan.features.map((feature) => (
                <li key={feature}>· {feature}</li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => selectPlan(plan.id)}
              className={`mt-auto rounded-md px-4 py-2.5 text-sm font-medium ${
                plan.featured
                  ? "bg-neutral-900 text-white hover:bg-neutral-700"
                  : "border border-neutral-300 hover:bg-neutral-50"
              }`}
            >
              Select {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
