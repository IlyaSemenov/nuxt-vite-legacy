# nuxt-vite-legacy

Nuxt module to make your Nuxt3 app compatible with legacy browsers.

Uses [@vitejs/plugin-legacy](https://www.npmjs.com/package/@vitejs/plugin-legacy) and applies a number of hacks that Nuxt.js team [decided to avoid](https://github.com/nuxt/nuxt/issues/15464#issuecomment-1596895289).

Tested on Nuxt 3.4 to 3.8, and also on Nuxt 3.13.

## Quick Setup

Install:

```sh
npm install nuxt-vite-legacy --save-dev
```

Add `nuxt-vite-legacy` to the `modules` section of `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ["nuxt-vite-legacy"],
  // Optionally, provide @vitejs/plugin-legacy options.
  // For example, for Chrome 49 you could use:
  legacy: {
    targets: ["chrome 49"],
    additionalLegacyPolyfills: [
      "mdn-polyfills/Element.prototype.getAttributeNames",
    ],
  },
})
```

## Caveats

The legacy build will be used for browsers that don't support `<script module>` which is enough most of the time.

However, this leaves incompatibility window for legacy browsers that **do** support modules but don't support modern features such as async generators (based on caniuse that would be e.g. Chrome 61-62). Vanilla `@vitejs/plugin-legacy` injects [special detection scripts](https://github.com/vitejs/vite/blob/535795a8286e4a9525acd2340e1d1d1adfd70acf/packages/plugin-legacy/src/snippets.ts) into SSR HTML, which this Nuxt module doesn't. PR's welcome!

## Upgrading

Nuxt and `@vitejs/plugin-legacy` are upgraded separately and the whole matrix is not well tested. The module may behave incorrectly with older Nuxt and newer `@vitejs/plugin-legacy` or vice versa.

Please report if you encounter issues; better yet, a PR adding the Github action testing matrix would be much appreciated.

## Development and Testing

Install Node 20, then:

```sh
corepack enable
pnpm i
pnpm dev:prepare
pnpm dev:build && pnpm dev:start
```

<http://localhost:3000> will run a Chrome 49-compatible version.
