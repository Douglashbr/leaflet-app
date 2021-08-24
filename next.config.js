// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPlugins = require('next-compose-plugins')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')([
  'react-leaflet',
  '@react-leaflet/core'
])
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPlugins([
  [
    withTM,
    {
      future: {
        webpack5: true
      }
    }
  ],
  [
    withPWA,
    {
      pwa: {
        dest: 'public',
        disable: !isProd
      }
    }
  ]
])
