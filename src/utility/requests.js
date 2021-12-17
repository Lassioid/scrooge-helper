import {
  toUnixEpoch,
  toSeconds,
  toMidnightPrices,
  toMidnightVolumes,
} from "./functions";

const apiUrl = "https://api.coingecko.com/api/v3/coins";

const marketRangeUrl = (id, start, end) => `${apiUrl}/${id}/market_chart/range?vs_currency=eur&from=${start}&to=${end}`;

/// get list of crypto coins
const getCoins = () => fetch(apiUrl).then(res => res.json());

/// get specific crypto coin
const getCoin = (id) => 
  fetch(`${apiUrl}/${id}`)
    .then((response) => response.json())
    .then(({ id, name, image, symbol }) => ({ id, name, image, symbol }));

/// get targeted coin market range data by providing its id and start and end date in unix timestamp format */    
const getDaysPrices = (id, start, end) => {
  const startDate = toUnixEpoch(start);
  const endDate = toUnixEpoch(end);

  return fetch(marketRangeUrl(id, toSeconds(startDate), toSeconds(endDate)))
    .then((res) => res.json())
    .then(({ prices }) => toMidnightPrices(prices, startDate));  
}

/// get targeted coin trading volumes by providing its id and start and end date in unix timestamp format */
const getDailyTradingVolumes = (id, start, end) => {
  const startDate = toUnixEpoch(start);
  const endDate = toUnixEpoch(end);

  return fetch(marketRangeUrl(id, toSeconds(startDate), toSeconds(endDate)))
    .then(res => res.json())
    .then(({ total_volumes }) => toMidnightVolumes(total_volumes, startDate)) 
};

export { 
  getCoins, 
  getCoin, 
  getDaysPrices, 
  getDailyTradingVolumes 
};
