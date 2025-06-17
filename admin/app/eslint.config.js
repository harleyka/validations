import { createConfigForNuxt } from '@nuxt/eslint-config'

export default createConfigForNuxt({}).append({
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'no-unused-vars': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'eslint-disable': 'off',
  },
})
