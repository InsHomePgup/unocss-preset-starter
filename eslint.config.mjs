import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
}, {
  rules: {
    'no-console': 'off',
    'vue/html-indent': ['error', 2],
    'indent': ['error', 2],
    'style/indent': ['error', 2],
    'vue/block-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
    'vue/attribute-hyphenation': ['error', 'never'],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 5,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/html-self-closing': 'off',
  },
})
