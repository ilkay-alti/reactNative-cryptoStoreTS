import {StyleSheet} from 'react-native';
import Colors from '../../Styles/Colors';
import fontsStyle from '../../Styles/Font.style';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.defaultDarkPurple,

    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...fontsStyle.h1,
    color: Colors.defaultWhite,
  },
});
