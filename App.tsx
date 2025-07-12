import React, {JSX} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'mobx-react';
import CurrencyStore from './src/stores/currencyStore';
import {RootStackNavigator} from './src/navigations';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';

function App(): JSX.Element {

  return (
    <SafeAreaProvider>
          <NavigationContainer>
            <Provider store={CurrencyStore}>
              <RootStackNavigator />
              <FlashMessage position="top" />
            </Provider>
          </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
