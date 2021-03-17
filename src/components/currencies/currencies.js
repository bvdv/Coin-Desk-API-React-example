import React, { useState, useEffect } from 'react';
import Header from '../header/header';
import CoindeskApiService from '../../services/api-services';

const CurrencyPage = () => {

  const [list, setList] = useState([]);

  //need add isLoaded

  useEffect(() => {
    let mounted = true;
    CoindeskApiService.getMainCurrentPrice()
      .then(items => {
        if (mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div>currencyPage</div>
        <div>
          <h1>Rates</h1>
          <ul>
            {JSON.stringify(list)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CurrencyPage;