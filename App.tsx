import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/Screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from './src/Screens/SplashScreen';
import {Provider} from 'react-redux';
import {persistor, store} from './src/Redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="SplashScreen"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
