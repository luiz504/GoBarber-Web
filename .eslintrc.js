module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  extends: [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    __DEV__:true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "react",
    "jsx-a11y",
    "import",
    "react-hooks",
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".js"] }],
    "no-console": ["error", { allow: ["tron"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
       "react/jsx-props-no-spreading": ["error", { allow: ["rest"] }],
    "import/prefer-default-export": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": ["error",{ allow: ["_id"] }],
    'camelcase': 'off'
  },
  settings:{
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: "src"
      }
    }
  }
};
