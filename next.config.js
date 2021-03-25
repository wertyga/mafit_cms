const withCSS = require('@zeit/next-css');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withCSS({
  env: {
    API_GATEWAY: isProd ? 'http://localhost:3000/graphql' : 'http://localhost:3000/graphql',
  },
});
