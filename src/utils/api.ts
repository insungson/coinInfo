const BASE_URL = `https://api.coinpaprika.com/v1`;

export const fetchCoins = async () => {
  const response = await (await fetch(`${BASE_URL}/coins`)).json();
  return response;
};

export const fetchCoinInfo = async (coinId?: string) => {
  return await (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
};

// export function fetchCoinInfo(coinId: string) {
//   return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
//     response.json()
//   );
// }

export function fetchCoinTickers(coinId?: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`
  ).then((response) => response.json());
}
