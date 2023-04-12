# Demo Setup for Micro Frontends in a Monorepo

This is a demo setup for an app or apps using micro frontends in a monorepo. On top we use single spa and module federation. Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## What's inside?

This monorepo uses [turborepo](https://turbo.build/) with [pnpm](https://pnpm.io) as a package manager. It includes the following packages / apps:

### Apps (micro frontends)

- `search`: a [React](https://react.dev/) app / parcel that enables the search for movies on [themobiedb.com](https://api.themoviedb.org). Movies can then be selected and stored inside a Redux store.
- `playlist`: a [React](https://react.dev/) app / parcel is also connected to
- `example`: a [React](https://react.dev/) app that includes the other apps as micro frontends

### Packages (libraries)

- `store`: a Redux store using [Redux Toolkit](https://redux-toolkit.js.org/). Redux is in fact a bad choice for a shared store between micro frontends: the bigger the store, the bigger the interdependencies between the apps. This is in fact an anti-pattern and can potentially lead to a lot of problems. An atomic store like [Jotai](https://jotai.org/) or [Recoil](https://recoiljs.org/) would in fact be more suitable and a better choice.
- `ui`: a stub React component library using styled components and themes shared by the `example`, `search` and `playlist` applications. Checkout (run) the `search` and `playlist` apps individual to see the theme(s) in action.
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

### Build

To build all apps and packages, run the following command from the root of the monorepo:

```
pnpm run build
```

### Develop

To develop all apps and packages, run the following command from the root of the monorepo:

```
pnpm run dev
```
