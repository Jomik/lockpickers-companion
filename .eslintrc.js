/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  ignorePatterns: ['dist/', 'coverage/'],
  extends: ['eslint:recommended', 'prettier'],
  overrides: [
    {
      // Handle js files, these runs on our local machine in node.
      files: '*.js',
      env: {
        node: true,
      },
    },
    {
      // Handle typescript files
      files: '*.ts',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json'],
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        '@typescript-eslint/switch-exhaustiveness-check': 'warn',
      },
    },
  ],
};

module.exports = config;
