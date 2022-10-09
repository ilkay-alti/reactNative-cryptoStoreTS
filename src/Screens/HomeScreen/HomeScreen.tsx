import {Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './HomeScreen.style';

interface IHomeScreen {
  navigation: any;
}

const HomeScreen: FC<IHomeScreen> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
