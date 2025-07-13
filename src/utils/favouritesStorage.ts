import {getData, storeData} from '../storage';
const FAVORITES_KEY = 'favoritesCurrencies';

export const getFavorites = async (): Promise<string[]> => {
  const stored = await getData(FAVORITES_KEY);
  return Array.isArray(stored) ? stored : [];
};

export const toggleFavorite = async (currency: string) => {
  const favorites = await getFavorites();
  const updated = favorites.includes(currency) ? favorites.filter(item => item !== currency) : [...favorites, currency];

  await storeData(updated, FAVORITES_KEY);
  return updated;
};
