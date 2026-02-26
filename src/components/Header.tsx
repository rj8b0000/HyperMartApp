import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Icons } from '../../assets/svg';
import { Colors, Radius, Spacing, Typography } from '../theme';
import i18n from '../i18n';
import Modal from 'react-native-modal';
import { useTranslation } from 'react-i18next';
import RNRestart from 'react-native-restart';

const Header = () => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const { t } = useTranslation();
  const updateLang = (lang: string) => {
    i18n.changeLanguage(lang);
    setModalVisible(false);
    RNRestart.restart();
  };
  const categoryModal = () => {
    return (
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContainer}>
          <Text style={[Typography.headingBold, { color: Colors.black }]}>
            {t('selectLanguage')}
          </Text>
          <View style={styles.modalContentWrapper}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => updateLang('en')}
            >
              <Text style={[Typography.moreProducts, { color: Colors.white }]}>
                English
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => updateLang('hi')}
            >
              <Text style={[Typography.moreProducts, { color: Colors.white }]}>
                हिन्दी
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => updateLang('gu')}
            >
              <Text style={[Typography.moreProducts, { color: Colors.white }]}>
                ગુજરાતી
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => updateLang('ar')}
            >
              <Text style={[Typography.moreProducts, { color: Colors.white }]}>
                العربية
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Icons.Logo width={110} height={30} />
      </View>
      <View style={styles.rightSection}>
        {categoryModal()}
        <TouchableOpacity
          style={styles.langButton}
          // onPress={() => i18n.changeLanguage('hi')}
          onPress={() => toggleModal()}
        >
          <Text style={Typography.dmRegular}>{t('lang')}</Text>
          <Icons.Down width={16} height={16} />
        </TouchableOpacity>
        <View>
          <Icons.Notification width={50} height={50} />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoWrapper: {
    width: '30%',
  },
  rightSection: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  langButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  modalContainer: {
    width: '100%',
    // height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: Spacing.md,
  },
  modalContentWrapper: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 10,
  },
  modalButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.sm,
    backgroundColor: Colors.primary,
    borderRadius: Radius.md,
    marginBottom: Spacing.sm,
  },
});
