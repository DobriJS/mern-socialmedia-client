module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  'rules': {
    'no-unused-vars': 'warn',
    'indent': [
      'error', 2,
      { 'ignoredNodes': ['TemplateLiteral'] },
    ],
    'template-curly-spacing': 'off',
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 0 }],
  },
};
