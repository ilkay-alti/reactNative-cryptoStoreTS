import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import styles from './SplashScreen.style';
import LogoIcon from '../../../assets/svg/Logo';
import {useSelector} from 'react-redux';
import {getThemeDark} from '../../Redux/themeSlice';

interface ISplashScreen {
  navigation: any;
}
const SplashScreen: FC<ISplashScreen> = () => {
  const themeDark = useSelector(getThemeDark);
  console.log(themeDark);

  return (
    <SafeAreaView style={styles.container}>
      <LogoIcon color="red" width={100} height={100} />

      <Text style={styles.text}>Cryptostore</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
