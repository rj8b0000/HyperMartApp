import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Colors, Radius, Spacing, Typography } from '../theme';
import { Icons } from '../../assets/svg';
import responsive from '../styles/responsive';
import { useTranslation } from 'react-i18next';
import { getCategories } from '../data/categoryData';
import SectionHeader from './SectionHeader';

const CategoriesComponent = () => {
  const { t } = useTranslation();
  useEffect(() => {
    console.log(categories);
  }, []);
  const categories = getCategories(t);
  const bgColors = [Colors.primary, Colors.blue, Colors.magenta, Colors.purple];
  const renderCategories = (item: any) => {
    const backgroundColor = bgColors[item.index % bgColors.length];

    return (
      <View style={[styles.item, { backgroundColor: backgroundColor }]}>
        <item.item.icon width={35} height={35} style={styles.icon} />
        <Text style={[Typography.dmSmall, styles.itemText]}>
          {item.item.title}
        </Text>
      </View>
    );
  };
  return (
    <View>
      <SectionHeader title={t('categories')} showIcon={true} />
      <View style={styles.wrapper}>
        <FlatList
          data={categories}
          keyExtractor={item => item.id.toString()}
          horizontal
          style={styles.list}
          showsHorizontalScrollIndicator={false}
          renderItem={item => renderCategories(item)}
        />
      </View>
    </View>
  );
};

export default CategoriesComponent;

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: Spacing.md,
  },
  list: {
    marginRight: -Spacing.md,
  },
  item: {
    width: responsive.width(85),
    height: responsive.height(90),
    borderRadius: Radius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  icon: {
    marginVertical: Spacing.sm,
  },
  itemText: {
    color: '#fff',
  },
});
