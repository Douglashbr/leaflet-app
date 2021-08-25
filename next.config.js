/* eslint-disable */
const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')
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
      },
      images: {
        domains: ['media.graphcms.com']
      }
    }
  ]
])
