import { I18nManager, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Typography } from '../theme';
import { Icons } from '../../assets/svg';

type SectionHeaderProps = {
  title: string;
  showIcon: boolean;
};
const SectionHeader = ({ title, showIcon }: SectionHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text
        style={Typography.categoryHeader}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
      {showIcon ? (
        <Icons.ArrowRight2
          height={24}
          width={24}
          style={{
            transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
          }}
        />
      ) : null}
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
