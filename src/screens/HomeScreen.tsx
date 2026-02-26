import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from '../theme/styles';
import Header from '../components/Header';
import { Spacing } from '../theme';
import UserLocation from '../components/UserLocation';
import { useTranslation } from 'react-i18next';
import SearchInput from '../components/SearchInput';
import CustomSlider from '../components/ImageSliderComponent';
import { sliderData } from '../data/sliderData';
import CategoriesComponent from '../components/CategoriesComponent';
import PreviousOrderComponent from '../components/PreviousOrderComponent';
import { ScrollView } from 'react-native-gesture-handler';
import PopularDealsComponent from '../components/PopularDealsComponent';

const HomeScreen = () => {
  const { t } = useTranslation();
  return (
    <>
      <SafeAreaView style={GlobalStyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={GlobalStyles.paddingInContainer}>
            <Header />
            <View style={styles.locationContainer}>
              <UserLocation currState={t('city')} landmark={t('landmark')} />
            </View>
            <View style={styles.searchContainer}>
              <SearchInput />
            </View>
          </View>

          <View style={styles.sliderContainer}>
            <CustomSlider sliderData={sliderData} />
          </View>
          <View style={styles.categoriesWrapper}>
            <CategoriesComponent />
          </View>
          <View style={styles.previousWrapper}>
            <PreviousOrderComponent />
          </View>
          <View style={styles.dealsWrapper}>
            <PopularDealsComponent />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  sliderContainer: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    marginTop: '5%',
  },
  locationContainer: {
    marginTop: '2%',
  },
  searchContainer: {
    marginTop: '6%',
  },
  categoriesWrapper: {
    width: '88%',
    alignSelf: 'center',
    marginTop: Spacing.xl,
    overflow: 'visible',
  },
  previousWrapper: {
    width: '88%',
    alignSelf: 'center',
    marginTop: Spacing.md,
  },
  dealsWrapper: {
    width: '88%',
    alignSelf: 'center',
    marginTop: Spacing.xl,
  },
});
