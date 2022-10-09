import {View, Text} from 'react-native';
import React, {FC} from 'react';
import styles from './SplashScreen.style';
import fontsStyles from '../../Styles/Font.style';

interface ISplashScreen {
  navigation: any;
}
const SplashScreen: FC<ISplashScreen> = () => {
  return (
    <View style={styles.container}>
      <Text style={fontsStyles.body}>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;
