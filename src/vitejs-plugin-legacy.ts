/**
 * Copy of `@vitejs/plugin-legacy@4.1.1` options. Keep in sync with upstream.
 *
 * When using with older @vitejs/plugin-legacy versions, keep in mind their type definitions
 * (e.g. `renderModernChunks` was only added in 4.1).
 *
 * Rationale: this type isn't exported by `@vitejs/plugin-legacy`, so it can't be re-exported
 * by nuxt-vite-legacy even if picked with something like:
 *
 * ```ts
 * import legacy from "@vitejs/plugin-legacy"
 * type Options = Exclude<Parameters<typeof legacy>[0], undefined>
 * ```
 *
 * which would give TS build error:
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
  /**
   * default: true
   */
  renderModernChunks?: boolean
}
