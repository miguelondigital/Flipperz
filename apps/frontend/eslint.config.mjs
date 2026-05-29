import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import prettier from 'eslint-config-prettier'
import pluginVue from 'eslint-plugin-vue'
import vueparser from 'vue-eslint-parser'

export default [
  {
    files: ['src/**/*.vue'],
    languageOptions: {
      parser: vueparser,
      parserOptions: {
        parser: tsparser,
      },
    },
    plugins: {
      vue: pluginVue,
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...pluginVue.configs['flat/recommended'].rules,
      ...tseslint.configs.recommended.rules,
      ...prettier.rules,
    },
  },
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsparser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...prettier.rules,
    },
  },
]