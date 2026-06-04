"use client";

import Link from "next/link";
import posthog from "posthog-js";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-8">
      <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
        Customer feedback, organized
      </span>
      <h1 className="max-w-2xl text-5xl font-semibold tracking-tight">
        Turn scattered feedback into a clear product roadmap.
      </h1>
      <p className="max-w-xl text-lg text-neutral-600">
        Flowbackdesk collects feedback from every channel, groups it automatically,
        and shows you what to build next. No spreadsheets, no guessing.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/signup"
          onClick={() =>
            posthog.capture("cta_clicked", {
              cta_label: "Start free trial",
              destination: "/signup",
            })
          }
          className="rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700"
        >
          Start free trial
        </Link>
        <Link
          href="/pricing"
          onClick={() =>
            posthog.capture("cta_clicked", {
              cta_label: "View pricing",
              destination: "/pricing",
            })
          }
          className="rounded-md border border-neutral-300 px-5 py-2.5 text-sm font-medium hover:bg-neutral-50"
        >
          View pricing
        </Link>
      </div>

      <div className="mt-8 grid w-full gap-6 sm:grid-cols-3">
        {[
          {
            title: "Collect everywhere",
            body: "Pull feedback from email, chat, reviews, and calls into one inbox.",
          },
          {
            title: "Auto-group themes",
            body: "Similar requests cluster together so signal beats noise.",
          },
          {
            title: "Prioritize with data",
            body: "See reach and revenue behind every request before you build.",
          },
        ].map((f) => (
          <div
            key={f.title}
            className="rounded-lg border border-neutral-200 p-5"
          >
            <h3 className="text-sm font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{f.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
