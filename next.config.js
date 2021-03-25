const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  env: {
    API_GATEWAY: isProd ? 'http://localhost:3000/graphql' : 'http://localhost:3000/graphql',
  },
};
