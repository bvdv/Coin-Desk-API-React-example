import React, { useState } from 'react';
import Header from '../includes/header/header';
import HtmlService from '../../services/get-html-service';

const AnalyseTool = () => {

  const [inputValue, setInputValue] = useState("");
  const [wrongUrl, setWrongUrlStatus] = useState(false);
  const wrongUrlMsg = "sorry, URL not found"

  const handleSubmit = event => {
    setWrongUrlStatus(false);
    let result = HtmlService.getHtml(inputValue)
    .then(res => {console.log('->', res)})
    .catch(err => setWrongUrlStatus(true));
    event.preventDefault();
  }

  return (
    <div>
      <Header />
      <div className="container">
        <p>Please enter the link for analyse and press Analyse ( allowed only 3 URL checks per minute )</p>
        <p>example: http://google.com </p>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary" type="submit" value="Submit" id="button-addon1">Analyse</button>
            <input type="url" className="form-control" placeholder="" value={inputValue} onChange={(event) => setInputValue(event.target.value)} required/>
          </div>
        </form>
        <p>{wrongUrl && wrongUrlMsg}</p>
      </div>
    </div>
  );
}

export default AnalyseTool;