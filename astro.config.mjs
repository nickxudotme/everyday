import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://everyday.nickxu.me',
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
