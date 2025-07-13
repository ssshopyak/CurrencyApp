import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchExchangeRates} from '@api';
import {IRatesResponse} from '@models';
import {showError} from './flashMessages';

const CACHE_KEY = 'cachedRates';

export function useExchangeRates() {
  const [rates, setRates] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<string | null>(null);

  const loadRates = async () => {
    setLoading(true);
    setError(null);
    try {
      const data: IRatesResponse = await fetchExchangeRates();
      setRates(data.rates);
      setLastUpdate(data.date);
      await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(data));
    } catch (e) {
      const cached = await AsyncStorage.getItem(CACHE_KEY);
      if (cached) {
        const data: IRatesResponse = JSON.parse(cached);
        console.log(data);
        setRates(data.rates);
        setLastUpdate(data.date);
        showError('Показані кешовані дані через відсутність мережі');
      } else {
        setError('Не вдалося завантажити курси валют');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRates();
  }, []);

  return {rates, loading, error, reload: loadRates, lastUpdate};
}
