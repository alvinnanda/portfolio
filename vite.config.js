import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  server: {
    proxy: {
      '/api/experiences': {
        target: 'http://localhost:5173',
        handler: (req, res) => {
          import('./src/api/experiences.js')
            .then(module => module.GET())
            .then(response => response.json())
            .then(data => {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(data));
            })
            .catch(error => {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: error.message }));
            });
        }
      }
    }
  }
});