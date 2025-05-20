/** @type {import('next').NextConfig} */
const { codeInspectorPlugin } = require('code-inspector-plugin');

const nextConfig = {
  output: 'export',
  devIndicators: {
    autoPrerender: false,
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/en': { page: '/en' }
    }
  },
  sassOptions: {
    additionalData: `$var: red;`,
  },
  webpack: (config, { dev, isServer }) => {
    config.plugins.push(codeInspectorPlugin({ bundler: 'webpack', editor: 'webstorm' }));
    return config;
  },
};

module.exports = nextConfig;
