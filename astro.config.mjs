import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://everyday.nickxu.me',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  }
});
