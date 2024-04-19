import nuxt from '@nuxt/eslint-config/flat';

export default nuxt({
  features: {
    stylistic: {
      semi: false,
      indent: 2, // 4 or 'tab'
      quotes: 'double',
      // ... and more
    },
  },
});
