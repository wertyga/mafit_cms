const withCSS = require('@zeit/next-css');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withCSS({
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
});
