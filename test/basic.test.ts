import { fileURLToPath } from "node:url"

import { $fetch, setup } from "@nuxt/test-utils"
import { describe, expect, it } from "vitest"

describe("ssr", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("./fixtures/basic", import.meta.url)),
  })

  it("adds nomodule legacy chunk", async () => {
    const html = await $fetch("/")
    expect(html).toMatch(
      /<script src="\/_nuxt\/polyfills-legacy\.\w+\.js" nomodule crossorigin>/
    )
  })
})
