module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'th', 'ko', 'ja', 'zh'],
  },
  localePath: './public/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}