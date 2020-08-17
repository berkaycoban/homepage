module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-custom-media': {
      importFrom: [
        {
          customMedia: { '--m': '(min-width: 768px)' }
        },
        {
          customMedia: { '--t': '(min-width: 980px)' }
        },
        {
          customMedia: { '--d': '(min-width: 1270px)' }
        }
      ]
    }
  }
}
