module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2, { ignoredNodes: ['TemplateLiteral'] }],
    'template-curly-spacing': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'eol-last': ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'arrow-parens': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0 }],
  },
};
