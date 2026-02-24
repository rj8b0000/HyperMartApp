import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from '../theme/styles';
import Header from '../components/Header';

const HomeScreen = () => {
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Header />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
