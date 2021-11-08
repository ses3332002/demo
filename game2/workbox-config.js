module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{png,xml,jpg,html,js,webmanifest,css}'],
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  swDest: 'dist/sw.js',
};
