import axios from 'axios';
import { FIXER_API_KEY, FIXER_API_URL, FIXER_BASE_CURRENCY } from '@env';

export const fetchExchangeRates = async () => {
  const response = await axios.get(`${FIXER_API_URL}?access_key=${FIXER_API_KEY}&base=${FIXER_BASE_CURRENCY}`);
  return response.data.rates;
};
