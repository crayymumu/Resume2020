import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'app',

  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },

  typescript: true,
  react: true,
  next: true,

  jsonc: false,
  yaml: false,

  // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
  ignores: [
    '**/fixtures',
    'README.md',
    // ...globs
  ],
  rules: {
    'node/prefer-global/process': 'off',
  },
})
