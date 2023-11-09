import { addServerPlugin, createResolver, defineNuxtModule } from "@nuxt/kit"
import legacy from "@vitejs/plugin-legacy"

import type { Options as LegacyOptions } from "./vitejs-plugin-legacy"

/** `@vitejs/plugin-legacy` options (excluding `renderLegacyChunks` and `externalSystemJS`) */
export type ModuleOptions = Omit<
  LegacyOptions,
  "renderLegacyChunks" | "externalSystemJS"
>

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-vite-legacy",
    configKey: "legacy",
  },
  async setup(options, nuxt) {
    nuxt.options.vite ??= {}
    nuxt.options.vite.plugins ??= []
    nuxt.options.vite.plugins.unshift(legacy(options))

    // Put the polyfills chunk to 1st position and remove module attribute from legacy chunks
    // See https://github.com/nuxt/nuxt/issues/15464
    nuxt.hook("build:manifest", (manifest) => {
      const key = Object.keys(manifest).find((key) =>
        key.endsWith("/legacy-polyfills-legacy"),
      )
      if (!key) {
        if (!nuxt.options.dev) {
          console.warn(
            `nuxt-vite-legacy didn't find legacy-polyfills-legacy chunk. Legacy build will not work.`,
          )
        }
        return
      }

      // Copy manifest.
      const copy: typeof manifest = { ...manifest }
      // Clear manifest.
      for (const key of Object.keys(manifest)) {
        delete manifest[key]
      }
      // Fill manifest again from the copy, put legacy chunk to the 1st position.
      Object.assign(manifest, { [key]: copy[key] }, copy)

      // Remove module attribute from legacy chunks.
      for (const key of Object.keys(manifest)) {
        if (key.match(/-legacy(\.|$)/)) {
          manifest[key].module = false
        }
      }
    })

    const { resolve } = createResolver(import.meta.url)
    addServerPlugin(resolve("./runtime/server-plugin"))
  },
})
