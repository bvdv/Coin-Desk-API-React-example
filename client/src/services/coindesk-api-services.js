  /*
    EndPoints
      https://api.coindesk.com/v1/bpi/currentprice.json
      https://api.coindesk.com/v1/bpi/currentprice/<CODE>.json

      historical data
      https://api.coindesk.com/v1/bpi/historical/close.json
      https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05

      TODO:
      add something against many concurrent async requests
  */

  const apiBase = 'https://api.coindesk.com/v1/bpi/';

  const getData = async (url) => {
    const res = await fetch(`${apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  const getMainCurrenciesPrices = async () => {
    const res = await getData(`currentprice.json`);
    return res;
  };

  const getCurrencyPrice = async (CODE = 'CNY') => {
    const res = await getData(`currentprice/${CODE}.json`);
    return res;
  };

  const getHistoricalData = async () => {
    const res = await getData(`historical/close.json`);
    return res;
  };

  export default {
    getMainCurrenciesPrices,
    getCurrencyPrice,
    getHistoricalData
  };
