import axios from 'axios';
import {FIXER_API_KEY, FIXER_API_URL, FIXER_BASE_CURRENCY} from '@env';
import {IRatesResponse} from '@models';
import {showError} from '@utils';

export const fetchExchangeRates = async (): Promise<IRatesResponse> => {
  const response = await axios.get(`${FIXER_API_URL}?access_key=${FIXER_API_KEY}&base=${FIXER_BASE_CURRENCY}`);
  response.data.error && showError(response.data.error.info || 'Не вдалося завантажити курси валют');

  return {
    rates: response.data.rates,
    date: response.data.date,
  };
};
