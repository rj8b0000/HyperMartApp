import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SectionHeader from './SectionHeader';
import { useTranslation } from 'react-i18next';
import { Colors, Radius, Spacing, Typography } from '../theme';
import responsive from '../styles/responsive';
import { Icons } from '../../assets/svg';

const PreviousOrderComponent = () => {
  const { t } = useTranslation();
  return (
    <View>
      <SectionHeader title={t('previousOrders')} showIcon={false} />
      <View style={styles.card}>
        <View style={{ width: '90%' }}>
          <View style={styles.topSection}>
            <View style={styles.dateRow}>
              <Text style={[Typography.deliveredText, styles.deliveredPrimary]}>
                {t('delivered')}
              </Text>
              <Text style={[Typography.dmRegular]}>{t('date')}</Text>
            </View>
            <View style={styles.productsContainer}>
              <View style={styles.productImages}>
                <Icons.Product1 width={50} height={50} />
                <Icons.Product2 width={50} height={50} />
                <Icons.Product3 width={50} height={50} />
              </View>
              <View style={styles.moreCount}>
                <Text style={Typography.moreProducts}>
                  {' '}
                  +5 {'\n'} {t('more')}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomSection}>
            <View style={styles.bottomRow}>
              <View style={styles.orderInfo}>
                <Text style={Typography.deliveredText}>
                  {t('orderId')} : #28292999
                </Text>
                <Text style={Typography.headingBold}>
                  {t('fineTotal')} : ₹123
                </Text>
              </View>
              <View style={styles.actionArea}>
                <View style={styles.orderAgainBtn}>
                  <Text style={[Typography.dmRegular, styles.whiteText]}>
                    {t('orderAgain')}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.ribbon}>
          <Text
            numberOfLines={1}
            style={[Typography.offerTxt, styles.ribbonText]}
          >
            {t('orderAgainAndGetDiscount')}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PreviousOrderComponent;

const styles = StyleSheet.create({
  card: {
    marginTop: Spacing.md,
    height: responsive.height(180),
    flexDirection: 'row',
    borderWidth: 0.5,
    borderRadius: Radius.lg,
  },
  topSection: {
    height: '65%',
    paddingHorizontal: Spacing.md,
    justifyContent: 'flex-end',
  },
  dateRow: {
    height: '40%',
  },
  deliveredPrimary: {
    color: Colors.primary,
  },
  productsContainer: {
    height: '55%',
    borderRadius: Radius.md,
    backgroundColor: Colors.productOrderGray,
    flexDirection: 'row',
  },
  productImages: {
    width: '65%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: Spacing.sm,
  },
  moreCount: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    height: '35%',
  },
  bottomRow: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  orderInfo: {
    width: '60%',
    height: '100%',
    justifyContent: 'space-around',
    paddingVertical: Spacing.xs,
  },
  actionArea: {
    width: '40%',
    justifyContent: 'center',
  },
  orderAgainBtn: {
    backgroundColor: Colors.primary,
    padding: Spacing.sm,
    borderRadius: Radius.sm,
  },
  whiteText: {
    color: Colors.white,
  },
  ribbon: {
    width: '10%',
    backgroundColor: Colors.red,
    borderTopRightRadius: Radius.lg,
    borderBottomRightRadius: Radius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  ribbonText: {
    transform: [{ rotate: '-90deg' }],
    width: responsive.height(160),
    textAlign: 'left',
    includeFontPadding: false,
    color: '#fff',
  },
});
