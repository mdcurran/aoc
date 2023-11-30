module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  ignorePatterns: [".eslintrc.cjs", "node_modules/"],
  rules: {
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
  },
};
