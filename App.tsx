import React, {JSX} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigator} from './src/navigations';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';

function App(): JSX.Element {

  return (
    <SafeAreaProvider>
          <NavigationContainer>
              <RootStackNavigator />
              <FlashMessage position="top" />
          </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
