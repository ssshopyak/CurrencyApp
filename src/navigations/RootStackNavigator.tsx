import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { CurrencyScreen, FavouritesScreen } from '@screens';

export type RootStackParamList = {
    Currency: undefined;
    Favourites: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
          <Stack.Screen name="Currency" component={CurrencyScreen} />
          <Stack.Screen name="Favourites" component={FavouritesScreen} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
