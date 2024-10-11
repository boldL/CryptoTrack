import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets';
const PARAMS = {
  vs_currency: 'usd',
  order: 'market_cap_desc',
  per_page: 20,
  page: 1,
  sparkline: false,
};

export const fetchCryptos = async () => {
  try {
    const response = await axios.get(API_URL, { params: PARAMS });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
