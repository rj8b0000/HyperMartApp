import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  Text,
  Dimensions,
} from 'react-native';

const DATA = [
  { id: '1', image: require('../../assets/Banner.png') },
  { id: '2', image: require('../../assets/Banner.png') },
  { id: '3', image: require('../../assets/Banner.png') },
];
const { width } = Dimensions.get('window');

const SPACING = 16;
const ITEM_WIDTH = width * 0.85; // smaller than screen
const SIDE_SPACING = (width - ITEM_WIDTH) / 2;
const Slider = () => {
  return (
    <FlatList
      data={DATA}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      snapToInterval={ITEM_WIDTH + SPACING}
      decelerationRate="fast"
      bounces={false}
      contentContainerStyle={{
        paddingHorizontal: SIDE_SPACING,
      }}
      ItemSeparatorComponent={() => <View style={{ width: SPACING }} />}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.image} style={styles.image} />
        </View>
      )}
    />
  );
};

export default Slider;
const styles = StyleSheet.create({
  card: {
    width: ITEM_WIDTH,
    height: 160,
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

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
});
