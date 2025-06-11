/** @type {import('next').NextConfig} */
const { codeInspectorPlugin } = require('code-inspector-plugin')

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  devIndicators: {
    autoPrerender: false,
  },
  sassOptions: {},
  webpack: (config) => {
    config.plugins.push(codeInspectorPlugin({ bundler: 'webpack', editor: 'webstorm' }))
    return config
  },
}

module.exports = nextConfig
