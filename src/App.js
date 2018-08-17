import { createStore, applyMiddleware, compose } from 'redux';
import { Root } from 'native-base';
import { Platform, StatusBar, YellowBox } from 'react-native';
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/integration/react';

import RootReducer from './redux/reducers/RootReducer';
import Navigator from './navigation/Navigator';

import createSagaMiddleware from 'redux-saga';
import RootSaga from './redux/sagas/RootSaga';

// (newer versions of?) react navigation will show these warnings multiple
// times, but they're not informative and not useful for us.
// I'm unsure whether this comes from react navigation or react native.
// https://github.com/react-navigation/react-navigation/issues/3956
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
  'Class RCTCxxModule',
]);

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// we use a persist reducer instead of the root reducer
const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
};
const myPersistReducer = persistReducer(persistConfig, RootReducer);

// create the store
const store = createStore(
  myPersistReducer, // this wraps the root reducer
  // give it the saga middleware
  compose(applyMiddleware(sagaMiddleware))
);

const persistor = persistStore(store);

// run the saga
sagaMiddleware.run(RootSaga);

export default class App extends Component {
  render() {
    StatusBar.setBarStyle('light-content', true);
    if (Platform.OS === 'android') {
      // For Android API >= 23.
      StatusBar.setBackgroundColor('#111111', true);
      // For Android API >= 23.
      // Translucent bar would render in front of the page
      StatusBar.setTranslucent(false);
    }
    return (
      <Root>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Navigator />
          </PersistGate>
        </Provider>
      </Root>
    );
  }
}
