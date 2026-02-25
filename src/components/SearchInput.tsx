import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import { Colors, Spacing, Typography } from '../theme';
import { Icons } from '../../assets/svg';
import { useTranslation } from 'react-i18next';

const SearchInput = () => {
  const { t } = useTranslation();
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: Colors.searchInputGray,
        paddingVertical: Spacing.sm,
        paddingHorizontal: Spacing.xs,
        borderRadius: 10,
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: '15%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Icons.Search width={25} height={25} />
      </View>
      <View style={{ width: '70%' }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <TextInput
            placeholder={t('searchPlaceholder')}
            placeholderTextColor={Colors.gray}
            style={Typography.dmRegular}
          />
        </TouchableWithoutFeedback>
      </View>
      <View
        style={{
          borderLeftWidth: 2,
          justifyContent: 'center',
          alignItems: 'center',
          height: 25,
          borderColor: Colors.lightGray,
        }}
      />
      <View
        style={{
          width: '15%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Icons.Mic width={25} height={25} />
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
