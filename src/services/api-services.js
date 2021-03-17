  /*
    EndPoints
      https://api.coindesk.com/v1/bpi/currentprice.json
      https://api.coindesk.com/v1/bpi/currentprice/<CODE>.json

      historical data
      https://api.coindesk.com/v1/bpi/historical/close.json
      https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05
  */

  const apiBase = 'https://api.coindesk.com/v1/bpi/';

  const getResource = async (url) => {
    const res = await fetch(`${apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  const getMainCurrentPrice = async () => {
    const res = await getResource(`currentprice.json`);
    return res;
  };

  export default {
    getMainCurrentPrice
  };
