import { I18nManager, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Typography } from '../theme';
import { Icons } from '../../assets/svg';

type UserLocationProps = {
  currState: string;
  landmark: string;
};
const UserLocation = ({ currState, landmark }: UserLocationProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Icons.Location width={50} height={50} />
        <View style={styles.textContainer}>
          <Text style={[Typography.dmSmall]}>{currState}</Text>
          <Text style={Typography.dmRegular}>{landmark}</Text>
        </View>
      </View>
      <Icons.ArrowRight
        width={20}
        height={20}
        style={{
          transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
        }}
      />
    </View>
  );
};

export default UserLocation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    width: '58%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    justifyContent: 'space-around',
  },
});
