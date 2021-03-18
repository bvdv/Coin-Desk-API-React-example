import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Header from '../header/header';
import CoindeskApiService from '../../services/api-services';

const CurrencyPage = () => {

  // TODO: need add isLoaded for case whene response from API too slow

  const [time, setTime] = useState([]);
  const [bpi, setBpi] = useState([]);
  const [apiError, setStatus] = useState(false);

  const [sortNumber, setNumbersSort] = useState();

  const apiErrorMsg = `Sorry, We don't have any data, please wait a few minutes, 
  if still there is no data, please come back later`;

  useEffect(() => {
    getCurrenciesData();
    setInterval(() => {
      getCurrenciesData();
    }, 10000);
  }, []);

  const getCurrenciesData = () => {
    CoindeskApiService.getMainCurrenciesPrices()
      .then(items => {
        setTime(items.time.updated);
        setBpi(items.bpi);
        setStatus(false);
      }).catch(
        error => setStatus(true)
      );
  }

  const getSortedData = () => {
    let arr = Object.entries(bpi);
    let arrCodeRate = [];
    for (let index = 0; index < arr.length; index++) {
      arrCodeRate.push({ 
        id:index,
        code:arr[index][1].code, 
        rate:arr[index][1].rate_float 
      });
    }
    console.log('--->', arrCodeRate);
    return(
      <tbody>
        {arrCodeRate.map((item) => (
          <tr key={item.id}>
            <td>{item.code}</td>
            <td>${item.rate}</td>
          </tr>
        ))}
      </tbody>
    );
  };

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
                  Rate <button className="btn btn-link" onClick={() => { setNumbersSort() }}>
                            <span>&#129031;</span><span>&#129029;</span>
                        </button>
                </th>
              </tr>
            </thead>
            { getSortedData() }
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