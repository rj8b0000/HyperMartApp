import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList, RootStackParamList } from './types';
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
import { RouteProp, useNavigation } from '@react-navigation/native';
const BottomNavigator = () => {
  const Tab = createBottomTabNavigator<MainTabParamList>();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
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
        tabBarButton: props => (
          <Pressable
            {...(props as any)}
            android_ripple={{ color: 'transparent' }}
          />
        ),
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
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.cartOuter}>
              <View style={styles.cartInner}>
                <Icons.Cart width={32} height={32} />
              </View>
            </View>
          ),
          headerShown: false,
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
