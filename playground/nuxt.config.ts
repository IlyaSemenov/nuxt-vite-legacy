export default defineNuxtConfig({
  modules: ["../src/module"],
  legacy: {
    targets: ["chrome 49"],
    modernPolyfills: true,
    additionalLegacyPolyfills: [
      "mdn-polyfills/Element.prototype.getAttributeNames",
    ],
  },
})
