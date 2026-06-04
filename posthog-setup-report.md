<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of your project. PostHog is now initialized via `instrumentation-client.ts` (the recommended approach for Next.js 15.3+), with a reverse proxy configured in `next.config.ts` to route all PostHog traffic through `/ingest`. Three custom events are captured across the conversion funnel, and users are identified at signup.

| Event | Description | File |
|---|---|---|
| `cta_clicked` | User clicks a homepage CTA ("Start free trial" or "View pricing") — properties: `cta_label`, `destination` | `app/page.tsx` |
| `plan_selected` | User selects a pricing plan and is routed to signup — property: `plan` | `app/pricing/page.tsx` |
| `signup_completed` | User completes the signup form — properties: `plan`, `email`. Also calls `posthog.identify()` with the user's email | `app/signup/signup-form.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](https://us.posthog.com/project/441832/dashboard/1669364)
- [Signup conversion funnel](https://us.posthog.com/project/441832/insights/Vv51bBrs) — 3-step funnel: CTA click → plan selected → signup completed
- [Signups over time](https://us.posthog.com/project/441832/insights/6kyfJxLY) — daily trend of completed signups
- [Plan selection breakdown](https://us.posthog.com/project/441832/insights/oozqClsy) — which plans users choose, by day
- [Homepage CTA clicks](https://us.posthog.com/project/441832/insights/Kdnqt9uH) — "Start free trial" vs "View pricing" click trends

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
