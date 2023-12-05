/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "@aimerfan/vue-ts",
  ],
  ignorePatterns: ["node_modules/", "dist/"],
  overrides: [
    {
      files: [".eslintrc.cjs"],
    },
  ],
};
