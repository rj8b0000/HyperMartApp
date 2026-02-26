import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SectionHeader from './SectionHeader';
import { Colors, Radius, Spacing, Typography } from '../theme';
import responsive from '../styles/responsive';
import { Icons } from '../../assets/svg';
import { useAppSelector } from '../redux/hooks';
import { increaseQty, decreaseQty } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

const CartListComponent = () => {
  const cartItems = useAppSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <View>
      <SectionHeader title={t('cart')} showIcon={false} />
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }: any) => {
          return (
            <View style={styles.cartCard}>
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.productImage} />
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.productName}>{item.productName}</Text>
                <Text style={styles.productPrice}>₹ {item.price}</Text>
                <View style={styles.ratingCounterRow}>
                  <View style={styles.ratingRow}>
                    <Text style={styles.ratingText}>{'4.8'}</Text>
                    <Icons.Star width={20} height={20} />
                  </View>
                  <View style={styles.plusMinusContainer}>
                    <TouchableOpacity
                      style={styles.minusBtn}
                      onPress={() => dispatch(decreaseQty(item.id))}
                    >
                      <Icons.Minus width={8} height={8} />
                    </TouchableOpacity>
                    <Text style={styles.countText}>{item.quantity}</Text>
                    <TouchableOpacity
                      style={styles.plusBtn}
                      onPress={() => dispatch(increaseQty(item.id))}
                    >
                      <Icons.Plus width={8} height={8} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CartListComponent;

const styles = StyleSheet.create({
  cartCard: {
    marginTop: Spacing.md,
    flexDirection: 'row',
    padding: Spacing.sm,
    height: responsive.height(120),
    backgroundColor: Colors.cartGrey,
    borderRadius: Radius.md,
  },
  imageContainer: {
    width: '32%',
  },
  productImage: {
    width: '100%',
    height: '100%',
    borderRadius: Radius.sm,
  },
  detailsContainer: {
    width: '68%',
    padding: Spacing.sm,
    justifyContent: 'space-around',
  },
  productName: {
    ...Typography.categoryHeader,
    color: Colors.black,
  },
  productPrice: {
    ...Typography.categoryHeader,
    color: Colors.black,
  },
  ratingCounterRow: {
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
    color: Colors.black,
  },
  minusBtn: {
    width: 30,
    height: 30,
    borderRadius: Radius.sm,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.red,
  },
  plusBtn: {
    width: 30,
    height: 30,
    borderRadius: Radius.sm,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  plusMinusContainer: {
    borderRadius: Radius.md,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: Colors.black,
    flexDirection: 'row',
    width: '50%',
  },
  countText: {
    ...Typography.moreProducts,
    color: Colors.black,
  },
});
