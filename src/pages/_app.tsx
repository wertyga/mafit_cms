import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { getOrInitializeStore } from 'redux/initializeStore';
import { getInitialState } from 'redux/getInitialState';
import { useApollo } from 'utils/apollo/apolloClient';

import { App as RootComponent } from 'components/App/App';

import 'antd/dist/antd.css';
import 'assets/variables.css';
import 'assets/global.css';

const MafitApp = ({ Component, pageProps, reduxProps }) => {
  const reduxStore = getOrInitializeStore(reduxProps);
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={reduxStore}>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link rel="shortcut icon" href="/public/favicon.ico" type="image/png" />
        </Head>
        <RootComponent>
          <Component />
        </RootComponent>
      </Provider>
    </ApolloProvider>
  );
};

MafitApp.getInitialProps = async (appContext) => {
  const [appProps, reduxProps] = await Promise.all([
    App.getInitialProps(appContext),
    appContext.ctx.req && getInitialState(appContext.ctx.req),
  ]);

  return { ...appProps, reduxProps };
};

export default MafitApp;
