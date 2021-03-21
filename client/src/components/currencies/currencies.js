import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Header from '../includes/header/header';
import CoindeskApiService from '../../services/coindesk-api-services';

const CurrencyPage = () => {

  /* TODO: 
      1) need add sorting
      2) useCallback() for Object.keys(items.bpi).map((k) => items.bpi[k])
  */

  const [time, setTime] = useState([]);
  const [bpi, setBpi] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [apiError, setApiErrorStatus] = useState(false);

  const [sortOrder, setSortOrder] = useState();

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
        setApiErrorStatus(false);
      }).then(
        setIsLoaded(true)
      ).catch(
        error => setApiErrorStatus(true)
      );
  }

  const displayCurrenciesData = () => {
    // switch (sortOrder) {
    //   case desc:
    //     break;

    //   case asce:
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
          <p>CoinDesk last update: {time} (updated every 10 sec)</p>
          <p className="text-info">{apiError ? apiErrorMsg : ''}</p>
          <p className="text-info">{isLoaded ? '' : 'please wait until result will be fully loaded'}</p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  Code
                </th>
                <th scope="col">
                  Rate
                </th>
                {/* <th scope="col">
                  Rate <button className="btn btn-link" onClick={() => { sortedData() }}>
                    <span>&#129031;</span><span>&#129029;</span>
                  </button>
                </th> */}
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