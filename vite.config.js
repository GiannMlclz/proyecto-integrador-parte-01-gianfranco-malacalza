import { resolve } from 'path' /*  node */

export default {
    // config options
    css: {
        devSourcemap: true
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          contacto: resolve(__dirname, 'contacto.html')
        }
      }
    }
  }

