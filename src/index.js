import ReactDom from 'react-dom';
import React from 'react';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { reactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

import firebase from '../../Firebase/Firebase';
import theme from './utils/theme';
import GlobalStyles from './utils/global';
import store from './store';

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  };

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
  }


ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
        <ThemeProvider theme={theme}>
            <reactReduxFirebaseProvider {...rrfProps}>
                <App />
                <GlobalStyles />
            </reactReduxFirebaseProvider>
        </ThemeProvider>
    </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);