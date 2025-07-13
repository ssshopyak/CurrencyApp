import React, { useEffect, useState } from 'react';
import { FlatList, Text, ActivityIndicator, RefreshControl } from 'react-native';
import { showError, useExchangeRates } from '@utils';
import { CurrencyItem } from '@components';
import { getFavorites, toggleFavorite } from '@utils';

export default function CurrencyScreen () {
  const { rates, loading, error, reload } = useExchangeRates();
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    getFavorites().then(setFavorites);
  }, []);

  const handleToggleFavorite = async (currency: string) => {
    console.log('Toggling favorite for:', currency);
    try {
    const updated = await toggleFavorite(currency);
    console.log('Updated favorites:', updated);
    setFavorites(updated);
    } catch(err) {
        showError('Error toggling favorite');
    }
  };

  if (loading) return <ActivityIndicator style={{ flex: 1 }} />;
  if (error) return <Text>{error}</Text>;

  return (
    <FlatList
      data={Object.entries(rates)}
      keyExtractor={([currency]) => currency}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={reload} />}
      renderItem={({ item }) => (
        <CurrencyItem
          code={item[0]}
          rate={item[1]}
          isFavorite={favorites?.includes(item[0])}
          onToggleFavorite={() => handleToggleFavorite(item[0])}
        />
      )}
    />
  );
};
