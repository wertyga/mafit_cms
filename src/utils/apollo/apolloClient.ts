import { useMemo } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

let apolloClient;

const createApolloClient = () => (
  new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createUploadLink({
      uri: process.env.API_GATEWAY,
    }),
    cache: new InMemoryCache(),
  })
);

export const initializeApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient();
  if (initialState) {
    const existingCache = _apolloClient.extract();
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  if (typeof window === 'undefined') return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
};

export const useApollo = (initialState) => (
  useMemo(() => initializeApollo(initialState), [initialState])
);
