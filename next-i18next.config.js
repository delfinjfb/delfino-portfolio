module.exports = {
  i18n: {
    defaultLocale: 'en', // Default language
    locales: ['en', 'fr', 'es'], // Supported languages
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development', // Ensure updates in dev mode
};
