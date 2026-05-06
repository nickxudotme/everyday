import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://everyday.nickxu.me',
  trailingSlash: 'never',
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark'
      },
      defaultColor: false,
      wrap: true
    }
  }
});
