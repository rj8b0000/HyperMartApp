import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import SectionHeader from './SectionHeader';
import { useTranslation } from 'react-i18next';
import { Colors, Radius, Spacing, Typography } from '../theme';
import responsive from '../styles/responsive';
import { Icons } from '../../assets/svg';
import { productData } from '../data/productData';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addToCart, increaseQty, decreaseQty } from '../redux/cartSlice';

const PopularDealsComponent = () => {
  const { t } = useTranslation();
  const products = useAppSelector(state => state.product.products);
  const cartItems = useAppSelector(state => state.cart.items);
  const dispact = useAppDispatch();

  useEffect(() => {
    console.log('Products: ', products);
    console.log('CartItems: ', cartItems);
  }, [products, cartItems]);
  const renderProducts = ({ item }: any) => {
    const cartItem = cartItems.find(ci => ci.id === item.id);
    return (
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.details}>
          <Text style={[Typography.productTitle, styles.productTitle]}>
            {item.productName}
          </Text>
          <View style={styles.row}>
            <Text style={Typography.productPrice}>₹ {item.price}</Text>
            <View style={styles.ratingRow}>
              <Text style={styles.ratingText}>{item.ratings}</Text>
              <Icons.Star width={20} height={20} />
            </View>
          </View>
          {!cartItem ? (
            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => dispact(addToCart(item))}
            >
              <Text style={styles.addBtnText}>{t('addToCart')}</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.plusMinusContainer}>
              <TouchableOpacity
                style={styles.minusBtn}
                onPress={() => dispact(decreaseQty(item.id))}
              >
                <Icons.Minus width={10} height={10} />
              </TouchableOpacity>
              <Text style={styles.countText}>{cartItem.quantity}</Text>
              <TouchableOpacity
                style={styles.plusBtn}
                onPress={() => dispact(increaseQty(item.id))}
              >
                <Icons.Plus width={12} height={12} />
              </TouchableOpacity>
            </View>
          )}
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
  plusMinusContainer: {
    borderRadius: Radius.md,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: Colors.black,
    flexDirection: 'row',
  },
  addBtnText: {
    ...Typography.moreProducts,
    color: Colors.yellow,
  },
  countText: {
    ...Typography.moreProducts,
    color: Colors.black,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  minusBtn: {
    width: 36,
    height: 36,
    borderRadius: Radius.sm,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.red,
  },
  plusBtn: {
    width: 36,
    height: 36,
    borderRadius: Radius.sm,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
});
