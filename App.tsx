import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppNavigator from './src/navigator/AppNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import './src/i18n';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import i18n from 'i18next';

const App = () => {
  const [ready, setReady] = useState<boolean>(false);
  useEffect(() => {
    if (i18n.isInitialized) {
      setReady(true);
    } else {
      i18n.on('initialized', () => setReady(true));
    }
  }, []);
  if (!ready) {
    return null; // or custom splash component
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView>
          <AppNavigator />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
