# nuxt-vite-legacy

Nuxt module to make your Nuxt3 app compatible with legacy browsers.

Uses [@vitejs/plugin-legacy](https://www.npmjs.com/package/@vitejs/plugin-legacy) and applies a number of hacks that Nuxt.js team [decided to avoid](https://github.com/nuxt/nuxt/issues/15464#issuecomment-1596895289).

## Quick Setup

Install:

```sh
npm install nuxt-vite-legacy
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
      "abortcontroller-polyfill/dist/polyfill-patch-fetch",
      "intersection-observer",
      "mdn-polyfills/Element.prototype.getAttributeNames",
    ],
  },
})
```
