import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from './types';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import CartScreen from '../screens/CartScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Spacing } from '../theme';
import { Colors } from '../theme';
import responsive from '../styles/responsive';
import { Icons } from '../../assets/svg';
const BottomNavigator = () => {
  const Tab = createBottomTabNavigator<MainTabParamList>();
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          if (route.name == 'Home') {
            return <Icons.Home width={22} height={22} />;
          }
          if (route.name == 'Products') {
            return <Icons.Product width={20} height={20} />;
          }
          if (route.name == 'Profile') {
            return <Icons.Profile width={24} height={24} />;
          }
          if (route.name == 'Favourite') {
            return <Icons.Favourite width={24} height={24} />;
          }
        },
        tabBarStyle: [styles.tabBarStyle, { paddingBottom: insets.bottom }],
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarShowLabel: false, headerShown: false }}
      />
      <Tab.Screen
        name="Products"
        component={ProductScreen}
        options={{ tabBarShowLabel: false, headerShown: false }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity>
              <View style={styles.cartOuter}>
                <View style={styles.cartInner}>
                  <Icons.Cart width={32} height={32} />
                </View>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{ tabBarShowLabel: false, headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarShowLabel: false, headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    paddingTop: 10,
  },
  cartOuter: {
    width: responsive.width(74),
    height: responsive.width(74),
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.xxxl + 10,
    borderWidth: 0.5,
    borderColor: '#c5c5c5',
  },
  cartInner: {
    width: responsive.width(60),
    height: responsive.width(60),
    backgroundColor: Colors.yellow,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
