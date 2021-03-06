module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jsdoc/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prefer-arrow"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/unified-signatures": "off",
    "jsdoc/newline-after-description": "off",
    "prefer-arrow/prefer-arrow-functions": "error",
    "complexity": "off",
    "max-classes-per-file": "off",
    "max-len": "off",
    "no-bitwise": "off",
    "no-console": "warn",
    "valid-typeof": "off",
    "quote-props": ["error", "consistent"],
  },
};
