Attempted structure to follow:

- makes sense because of @/import/references: https://nextjs.org/docs/app/building-your-application/configuring/absolute-imports-and-module-aliases
- is monorepo focussed - allows multiple ppl to be focused on single features / areas of repo
- follows some best practice examples:
  - https://github.com/microsoft/azurechatgpt/tree/main/src/features/chat
  - https://github.com/vercel-labs/ai-chatbot/blob/main/app/actions.ts

```
├── public
├── src
│   ├── app
│   │   ├── (routes) (pages and layouts)
│   │   ├── _actions (server actions)
│   │   └── api
│   │       └── auth
│   │       │   └── [...nextauth]
│   │       ├── trpc -
│   ├── config (configuation such as site metadata)
├── components
│   ├── ui
├── features - refer example https://github.com/microsoft/azurechatgpt/tree/main/src/features/chat
│   ├── auth
│   ├── theme
│   ├── [feature]
│   │   └── [feature]-services - if more than one [feature]-service.ts file is required
│   └── ui
│       └── components
├── lib (Utilities, hooks, library wrappers, etc...)
├── providers (React context providers)
└── styles (globals.css file with color scheme)
└── types
```

---

# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
