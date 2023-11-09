/**
 * Copy of @vitejs/plugin-legacy. Keep in sync with upstream.
 *
 * It's not exported from @vitejs/plugin-legacy, so can't be re-exported by nuxt-vite-legacy even if picked with something like:
 *
 * ```ts
 * import legacy from "@vitejs/plugin-legacy"
 * type Options = Exclude<Parameters<typeof legacy>[0], undefined>
 * ```
 *
 * That gives TS build error:
 *
 * ```
 * src/module.ts(6,1): error TS4082: Default export of the module has or is using private name 'Options'.
 * ```
 */
export interface Options {
  /**
   * default: 'defaults'
   */
  targets?:
    | string
    | string[]
    | {
        [key: string]: string
      }
  /**
   * default: false
   */
  ignoreBrowserslistConfig?: boolean
  /**
   * default: true
   */
  polyfills?: boolean | string[]
  additionalLegacyPolyfills?: string[]
  /**
   * default: false
   */
  modernPolyfills?: boolean | string[]
  /**
   * default: true
   */
  renderLegacyChunks?: boolean
  /**
   * default: false
   */
  externalSystemJS?: boolean
}
