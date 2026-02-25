import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SectionHeader from './SectionHeader';
import { useTranslation } from 'react-i18next';
import { Colors, Radius, Spacing, Typography } from '../theme';
import responsive from '../styles/responsive';
import { Icons } from '../../assets/svg';
import { getProducts } from '../data/productData';

const PopularDealsComponent = () => {
  const { t } = useTranslation();
  const products = getProducts(t);
  const renderProducts = (item: any) => {
    return (
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image source={item.item.image} style={styles.image} />
        </View>
        <View style={styles.details}>
          <Text style={[Typography.productTitle, styles.productTitle]}>
            {item.item.productName}
          </Text>
          <View style={styles.row}>
            <Text style={Typography.productPrice}>{item.item.price}</Text>
            <View style={styles.ratingRow}>
              <Text style={styles.ratingText}>{item.item.ratings}</Text>
              <Icons.Star width={20} height={20} />
            </View>
          </View>
          <View style={styles.addBtn}>
            <Text style={styles.addBtnText}>{t('addToCart')}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <SectionHeader title={t('popularDeals')} showIcon={true} />
      <View style={styles.wrapper}>
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={item => renderProducts(item)}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
    </View>
  );
};

export default PopularDealsComponent;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Spacing.lg,
  },
  card: {
    borderWidth: 1,
    borderColor: Colors.lightGray,
    width: '48%',
    height: responsive.height(250),
    borderRadius: Radius.lg,
    marginBottom: Spacing.lg,
  },
  imageWrapper: {
    height: '52%',
    borderTopLeftRadius: Radius.lg,
    borderTopRightRadius: Radius.lg,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    height: '45%',
    paddingHorizontal: Spacing.md,
    justifyContent: 'space-around',
  },
  productTitle: {
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingRow: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  ratingText: {
    ...Typography.moreProducts,
    color: Colors.red,
  },
  addBtn: {
    borderWidth: 1,
    borderRadius: Radius.md,
    padding: Spacing.xs,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.yellow,
  },
  addBtnText: {
    ...Typography.moreProducts,
    color: Colors.yellow,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
});
