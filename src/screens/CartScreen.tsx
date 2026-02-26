import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../theme/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/Header';
import CartListComponent from '../components/CartListComponent';
import { Spacing } from '../theme';

const CartScreen = () => {
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <ScrollView>
        <View style={GlobalStyles.paddingInContainer}>
          <Header />
          <View style={{ marginTop: Spacing.md }}>
            <CartListComponent />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
