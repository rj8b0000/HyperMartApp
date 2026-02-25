import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppNavigator from './src/navigator/AppNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import './src/i18n';

const App = () => {
  return (
    <GestureHandlerRootView>
      <AppNavigator />
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
