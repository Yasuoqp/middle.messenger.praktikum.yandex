import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import handlebars from 'vite-plugin-handlebars';
import path from 'path';

const eslintPlugin = eslint as unknown as () => any;

export default defineConfig({
  plugins: [
    eslintPlugin(), // Используем исправленный ESLint
    handlebars({
      compileOptions: {
        noEscape: true,
      },
      partialDirectory: [
        path.resolve(__dirname, 'src/components'),
        path.resolve(__dirname, 'src/templates')
      ],
    }),
  ],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@style': path.resolve(__dirname, 'src/assets/styles'),
      '@templates': path.resolve(__dirname, 'src/templates'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  assetsInclude: ['**/*.hbs'],
});
