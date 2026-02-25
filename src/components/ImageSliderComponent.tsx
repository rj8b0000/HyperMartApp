import React, { useRef, useState } from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import { Radius, Spacing } from '../theme';
import responsive from '../styles/responsive';

type CusomSliderProps = {
  sliderData: any;
};
const { width } = Dimensions.get('window');
const SPACING = 18;
const ITEM_WIDTH = width * 0.84; // smaller than screen
const SIDE_SPACING = (width - ITEM_WIDTH) / 2;
const CustomSlider = ({ sliderData = [] }: CusomSliderProps) => {
  return (
    <FlatList
      data={sliderData}
      horizontal
      pagingEnabled
      snapToAlignment="center"
      disableIntervalMomentum
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      decelerationRate="fast"
      bounces={false}
      snapToInterval={SPACING + ITEM_WIDTH + SPACING}
      contentContainerStyle={{
        paddingHorizontal: SIDE_SPACING,
      }}
      ItemSeparatorComponent={() => <View style={{ width: SPACING }} />}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item} style={styles.image} />
        </View>
      )}
    />
  );
};

export default CustomSlider;

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  dot: {
    height: 14,
    width: 14,
    borderRadius: Radius.lg,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 4,
    // paddingHorizontal: Spacing.xs,
  },
  activeDot: {
    width: 28,
    backgroundColor: '#999',
    // paddingHorizontal: Spacing.sm,
  },
  card: {
    width: ITEM_WIDTH,
    height: responsive.height(170),
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 4,
  },

  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
