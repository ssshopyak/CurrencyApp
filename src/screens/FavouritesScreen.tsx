import React, {useState, useCallback} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {getFavorites, toggleFavorite, useExchangeRates} from '@utils';
import {CurrencyItem, Header} from '@components';
import {globalStyles} from '../styles/globalStyle';

export default function FavoritesScreen() {
  const navigation = useNavigation();
  const {rates, loading: ratesLoading, error} = useExchangeRates();

  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const loadFavorites = async () => {
    setLoading(true);
    const favs = await getFavorites();
    setFavorites(favs);
    setLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, []),
  );

  const onToggleFavorite = async (currency: string) => {
    const updated = await toggleFavorite(currency);
    setFavorites(updated);
  };

  if (loading || ratesLoading) {
    return (
      <View style={globalStyles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <Header title="Улюблені валюти" onBack={() => navigation.goBack()} />

      {favorites.length === 0 ? (
        <View style={globalStyles.center}>
          <Text style={globalStyles.emptyText}>Немає улюблених валют</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={favorites}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <CurrencyItem code={item} rate={rates[item] || 0} onToggleFavorite={onToggleFavorite} isRemove />
            )}
            ItemSeparatorComponent={() => <View style={globalStyles.separator} />}
          />
          {error && <Text style={globalStyles.errorText}>{error}</Text>}
        </>
      )}
    </View>
  );
}
