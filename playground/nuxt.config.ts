export default defineNuxtConfig({
  modules: ["../src/module"],
  legacy: {
    targets: ["chrome 49"],
    additionalLegacyPolyfills: [
      "mdn-polyfills/Element.prototype.getAttributeNames",
    ],
  },
})
