/** @type {import('eslint').Linter.Config} */
module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'script',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  env: {
    node: true,
    es2020: true,
  },
  extends: [
    '@jamesonknutson/eslint-config',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  root: true
}
