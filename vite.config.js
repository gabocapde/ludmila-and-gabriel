import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
        // The vendored Bootstrap 3 sass (src/sass/bootstrap/) uses old syntax
        // (@import, legacy color functions, / division) that Dart Sass still
        // supports but warns about ahead of its 2.0/3.0 removal.
        silenceDeprecations: ['import', 'global-builtin', 'slash-div', 'color-functions', 'if-function'],
      },
    },
  },
});
