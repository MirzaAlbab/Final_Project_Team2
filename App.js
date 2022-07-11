import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/screens/redux/store';
import {persistedStore} from './src/screens/redux/store';
import Root from './src/routes/Root';
import CodePush from 'react-native-code-push';
import {PersistGate} from 'redux-persist/integration/react';
const CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
};
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <Root />
      </PersistGate>
    </Provider>
  );
}
export default CodePush(CodePushOptions)(App);
