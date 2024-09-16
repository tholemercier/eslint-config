module.exports = {
  env: {
      browser: true,
      es6: true,
      node: true,
  },

  settings: {
      "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
          typescript: true,
          node: true,
      },
      react: {
          version: "detect", // to be replace with the actual react version
      }
  },

  ignorePatterns: ['dist', '.eslintrc.js', '.eslintrc.cjs', 'postcss.config.js'],

  plugins: ["@typescript-eslint", "import"],

  extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
      "plugin:prettier/recommended",
      "plugin:import/recommended",
      "plugin:import/typescript",
  ],

  rules: {
      "@typescript-eslint/keyword-spacing": "off",
      "no-await-in-loop": "off",
      "guard-for-in": "off",
      "max-len": ["warn", 200],
      "no-plusplus": "off",
      "no-restricted-syntax": "off",
      "no-param-reassign": "off",
      "no-underscore-dangle": ["warn", { allow: ["_id", "_text"] }],
      "no-console": "off",
      "no-continue": "off",
      "no-cond-assign": ["error", "except-parens"],
      "no-multi-assign": "off",
      "func-names": ["warn", "as-needed"],
      "consistent-return": "off",
      "max-classes-per-file": ["error", 4],
      "import/no-mutable-exports": "off",
      "import/prefer-default-export": "off",
      "no-loop-func": "off",
      "@typescript-eslint/no-loop-func": "off",
      "class-methods-use-this": "warn",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/comma-dangle": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/restrict-plus-operands": "off",
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "import/order": [
        "warn",
        {
          "newlines-between": "always-and-inside-groups",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import/no-named-as-default-member": "off",
      "import/no-named-as-default": "off",
      "@typescript-eslint/consistent-type-imports": "error",
      ...(process.env.NODE_ENV === "lint" || process.env.CI
        ? {
            "@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: false }],
            "@typescript-eslint/no-unsafe-argument": "warn",
            "@typescript-eslint/no-unnecessary-type-assertion": "warn",
          }
        : {
            // These rules are all very slow
            "@typescript-eslint/unbound-method": "off",
            "@typescript-eslint/no-misused-promises": "off",
            "@typescript-eslint/no-unsafe-argument": "off",
            "@typescript-eslint/no-unnecessary-type-assertion": "off",
            "import/namespace": "off",
            "prettier/prettier": "off",
          }
      ),
  }
}