const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/recipes',
        permanent: true,
      },
    ];
  },
  env: {
    API_GATEWAY: isProd ? 'http://localhost:3000/graphql' : 'http://localhost:3000/graphql',
  },
};

module.exports = withPlugins(
  [[withCSS]],
  nextConfig,
);
