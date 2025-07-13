import React, {useCallback, useState} from 'react';
import {FlatList, View, Text, ActivityIndicator, RefreshControl, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/RootStackNavigator';
import {useExchangeRates} from '@utils';
import {getFavorites, toggleFavorite} from '@utils';
import {Header, CurrencyItem} from '@components';
import {globalStyles, COLORS} from '../styles/globalStyle';
import {useFocusEffect} from '@react-navigation/native';

export default function CurrencyScreen() {
  const {rates = {}, loading, error, reload, lastUpdate} = useExchangeRates();
  const [favorites, setFavorites] = useState<string[]>([]);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onToggleFavorite = async (currency: string) => {
    const updated = await toggleFavorite(currency);
    setFavorites(updated);
  };

  useFocusEffect(
    useCallback(() => {
      getFavorites().then(setFavorites);
    }, []),
  );

  return (
    <View style={globalStyles.container}>
      <Header
        title="Валюти"
        rightButton={
          <TouchableOpacity onPress={() => navigation.navigate('Favorites')} style={globalStyles.buttonPrimary}>
            <Text style={globalStyles.buttonPrimaryText}>⭐</Text>
          </TouchableOpacity>
        }
      />

      {loading && <ActivityIndicator style={{marginTop: 20}} size="large" color={COLORS.primary} />}

      {error && <Text style={globalStyles.errorText}>{error}</Text>}

      {!loading && !error && (
        <>
          <FlatList
            data={Object.entries(rates)}
            keyExtractor={([code]) => code}
            refreshControl={<RefreshControl refreshing={loading} onRefresh={reload} />}
            renderItem={({item: [code, rate]}) => (
              <CurrencyItem
                code={code}
                rate={rate}
                isFavorite={favorites.includes(code)}
                onToggleFavorite={onToggleFavorite}
              />
            )}
            ListFooterComponent={lastUpdate ? <Text style={{}}>Оновлено: {lastUpdate}</Text> : null}
          />
        </>
      )}
    </View>
  );
}
