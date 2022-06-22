import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/screens/redux/store';
import {persistedStore} from './src/screens/redux/store';
import Root from './src/routes/Root';
import {PersistGate} from 'redux-persist/integration/react';
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <Root />
      </PersistGate>
    </Provider>
  );
}
