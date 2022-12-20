import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import monkey, { cdn } from 'vite-plugin-monkey'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        icon: 'https://weibo.com/favicon.ico',
        namespace: 'https://github.com/babybluue/delWeibo',
        author: 'plain',
        description: '批量删除新浪微博',
        match: ['*://weibo.com/u/*'],
        license: 'MIT',
      },
      build: {
        externalGlobals: {
          vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
        },
      },
    }),
  ],
})
