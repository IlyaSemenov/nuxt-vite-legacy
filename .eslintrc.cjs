module.exports = {
  root: true,
  ignorePatterns: [".nuxt/", ".output/", "/dist/"],
  extends: ["@nuxt/eslint-config", "plugin:prettier/recommended"],
  plugins: ["simple-import-sort"],
  rules: {
    "prettier/prettier": "warn",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
  },
}
