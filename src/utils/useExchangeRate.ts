import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchExchangeRates } from '@api';

export const useExchangeRates = () => {
  const [rates, setRates] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadRates = async () => {
    try {
      setLoading(true);
      const data = await fetchExchangeRates();
      setRates(data);
      await AsyncStorage.setItem('cachedRates', JSON.stringify(data));
    } catch (e) {
      const cached = await AsyncStorage.getItem('cachedRates');
      if (cached) {
        setRates(JSON.parse(cached));
      } else {
        setError('No data available');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRates();
  }, []);

  return { rates, loading, error, reload: loadRates };
};
