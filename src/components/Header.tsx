import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Icons } from '../../assets/svg';
import { Typography } from '../theme';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View style={{ width: '30%' }}>
        <Icons.Logo width={110} height={30} />
      </View>
      <View
        style={{
          width: '30%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          <Text style={Typography.dmRegular}>Eng</Text>
          <Icons.Down width={16} height={16} />
        </View>
        <View>
          <Icons.Notification width={50} height={50} />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
