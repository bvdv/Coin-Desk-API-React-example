import React, { useState } from 'react';
import Header from '../includes/header/header';
import GetHtmlService from '../../services/get-html-service';
import AnalyzedTags from '../analyzed-tags/analyzed-tags';

const AnalyseToolPage = () => {

  const [inputValue, setInputValue] = useState("");
  const [wrongUrlStatus, setWrongUrlStatus] = useState(false);
  const [documentString, setDocumentString] = useState();
  const wrongUrlMsg = "sorry, URL not found"

  const handleSubmit = event => {
    setWrongUrlStatus(false);
    GetHtmlService.getHtml(inputValue)
      .then(res => { setDocumentString(res) })
      .catch(err => setWrongUrlStatus(true));
    event.preventDefault();
  }

  return (
    <div>
      <Header />
      <div className="container">
        <p>Please enter the link for analyse and press Analyse ( allowed only up to 3 URL checks per minute )</p>
        <p>example: http://google.com </p>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary" type="submit" value="Submit" id="button-addon1">Analyse</button>
            <input type="url" className="form-control" placeholder="" value={inputValue} onChange={(event) => setInputValue(event.target.value)} required />
          </div>
        </form>
        <p>{wrongUrlStatus && wrongUrlMsg}</p>
        <AnalyzedTags documentString={documentString}/>
      </div>
    </div>
  );
}

export default AnalyseToolPage;