module.exports = {
  extends: "airbnb",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
  },
  plugins: [
    "no-only-tests",
  ],
  parser: "babel-eslint",
  rules: {
    "func-names": 0,
    "space-before-function-paren": 0,
    "function-paren-newline": 0,
    "no-use-before-define": 0,
    "class-methods-use-this": 0,
    "import/no-named-as-default": 0,
    "import/no-cycle": 0,
    "jsx-a11y/label-has-for": 0,
    "arrow-parens": ["error", "always"],
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "no-plusplus": [
      "error", {
        "allowForLoopAfterthoughts": true
      }
    ],
    "object-curly-newline": [
      "error", {
        "minProperties": 100,
        "consistent": true
      }
    ],
    "no-console": [
      "error",
      {
        allow: ["warn", "error"]
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.stories.js", "**/*.spec.js", "./guided-panel-scripts/**"]
      }
    ],
    "valid-jsdoc": [
      "error",
      {
        prefer: {
          arg: "param",
          argument: "param",
          class: "constructor",
          return: "returns",
          virtual: "abstract"
        },
        preferType: {
          Boolean: "boolean",
          Number: "number",
          object: "Object",
          String: "string"
        }
      }
    ],
    "no-only-tests/no-only-tests": "error",
    "template-curly-spacing": "off",
    indent: "off"
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src/"]
      }
    }
  }
};