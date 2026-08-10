import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://connietech.com',
  output: 'static',
  prefetch: true,
  vite: {
    build: { target: 'es2020' }
  }
});
