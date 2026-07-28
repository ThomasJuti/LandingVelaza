import eslintPluginAstro from "eslint-plugin-astro";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { ignores: ["dist/**", ".astro/**"] },
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs["flat/recommended"],
  {
    files: ["**/*.astro/*.js", "**/*.astro"],
    languageOptions: {
      globals: globals.browser,
    },
  },
];
