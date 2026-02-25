import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from '../theme/styles';
import Header from '../components/Header';
import { Icons } from '../../assets/svg';
import { Colors, FontFamily, Spacing, Typography } from '../theme';
import UserLocation from '../components/UserLocation';
import { useTranslation } from 'react-i18next';
import SearchInput from '../components/SearchInput';
import CustomSlider from '../components/ImageSliderComponent';
import responsive from '../styles/responsive';
import { sliderData } from '../data/sliderData';
import Slider from '../components/SliderComponent';
import CategoriesComponent from '../components/CategoriesComponent';
import PreviousOrderComponent from '../components/PreviousOrderComponent';
import { ScrollView } from 'react-native-gesture-handler';
import PopularDealsComponent from '../components/PopularDealsComponent';

const HomeScreen = () => {
  const { t } = useTranslation();
  return (
    <>
      <SafeAreaView style={GlobalStyles.container}>
        <ScrollView>
          <View style={GlobalStyles.paddingInContainer}>
            <Header />
            <View style={{ marginTop: '2%' }}>
              <UserLocation currState={t('city')} landmark={t('landmark')} />
            </View>
            <View style={{ marginTop: '6%' }}>
              <SearchInput />
            </View>
          </View>

          <View style={styles.sliderContainer}>
            <CustomSlider sliderData={sliderData} />
            {/* <Slider /> */}
          </View>
          <View
            style={{
              width: '88%',
              alignSelf: 'center',
              marginTop: Spacing.xl,
              overflow: 'visible',
            }}
          >
            <CategoriesComponent />
          </View>
          <View
            style={{
              width: '88%',
              alignSelf: 'center',
              marginTop: Spacing.md,
            }}
          >
            <PreviousOrderComponent />
          </View>
          <View
            style={{
              width: '88%',
              alignSelf: 'center',
              marginTop: Spacing.xl,
            }}
          >
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
    // position: 'relative',
  },
});
