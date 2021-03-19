import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Header from '../header/header';
import CoindeskApiService from '../../services/api-services';

const CurrencyPage = () => {

  /* TODO: 
  1) need add isLoaded for case whene response from API too slow
  2) useCallback() for Object.keys(items.bpi).map((k) => items.bpi[k])
  */

  const [time, setTime] = useState([]);
  const [bpi, setBpi] = useState([]);
  const [apiError, setStatus] = useState(false);

  const [sortNumber, setNumbersSort] = useState();

  const apiErrorMsg = `Sorry, We don't have any data, please wait a few minutes, 
  if still there is no data, please come back later`;

  useEffect(() => {
    getCurrenciesData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getCurrenciesData();
    }, 10000);
    return () => clearInterval(interval);
  }, [bpi])

  const getCurrenciesData = () => {
    CoindeskApiService.getMainCurrenciesPrices()
      .then(items => {
        setTime(items.time.updated);
        setBpi(Object.keys(items.bpi).map((k) => items.bpi[k]));
        setStatus(false);
      }).catch(
        error => setStatus(true)
      );
  }

  const displayCurrenciesData = () => {
    // switch (sortNumber) {
    //   case value:
    //     break;

    //   case value:
    //     break;

    //   default:
    //     break;
    // }
    return (
      <tbody>
        {bpi.map((item, index) => (
          <tr key={index}>
            <td>{item.code}</td>
            <td>${item.rate}</td>
          </tr>
        ))}
      </tbody>
    );
  };

  const sortedData = () => {
    let sort = bpi.sort((a, b) => {      
      return a.rate_float - b.rate_float;
    });
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div>
          <h4>This data was produced from the CoinDesk Bitcoin Price Index (USD).</h4>
          <p>Last update: {time} (updated every 10 sec)</p>
          <p className="text-info">{apiError ? apiErrorMsg : ''}</p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  Code
                </th>
                <th scope="col">
                  Rate <button className="btn btn-link" onClick={() => { sortedData() }}>
                    <span>&#129031;</span><span>&#129029;</span>
                  </button>
                </th>
              </tr>
            </thead>
            {displayCurrenciesData()}
          </table>
          <div>
            <p className="text-left">Powered by <a href="https://www.coindesk.com/price/bitcoin">CoinDesk</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencyPage;