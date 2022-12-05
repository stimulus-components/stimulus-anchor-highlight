const path = require('path')

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'stimulus-anchor-highlight'
    },
    rollupOptions: {
      external: ['@hotwired/stimulus'],
      output: {
        globals: {
          '@hotwired/stimulus': 'Stimulus'
        }
      }
    }
  }
}
