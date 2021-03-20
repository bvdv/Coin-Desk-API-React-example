import React, { useState } from 'react';
import Header from '../includes/header/header';
import HtmlService from '../../services/get-html-service';

const AnalyseTool = () => {

  const [inputValue, setInputValue] = useState("");
  const [wrongUrl, setWrongUrlStatus] = useState(false);
  const [resultHtml, setResultHtml] = useState([]);
  const wrongUrlMsg = "sorry, URL not found"

  const handleSubmit = event => {
    setWrongUrlStatus(false);
    HtmlService.getHtml(inputValue)
      .then(res => { analyzeTags(res) })
      .catch(err => setWrongUrlStatus(true));
    event.preventDefault();
  }

  const analyzeTags = (htmlString) => {

    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(htmlString, "text/html");

    var all = htmlDocument.getElementsByTagName("*");
    var tags = [];
    for (var i = 0, max = all.length; i < max; i++) {
      var tagname = all[i].tagName;
      if (tags.indexOf(tagname) == -1) {
        tags.push(tagname);
      }
    }

    setResultHtml(tags);
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
            <input type="url" className="form-control" placeholder="" value={inputValue} onChange={(event) => setInputValue(event.target.value)} required />
          </div>
        </form>
        <p>{wrongUrl && wrongUrlMsg}</p>
        <div>
          <p>All unique tags:</p>
          <p>
            {resultHtml.map((item, index) => (
              <span key={index}>
                <span>{item}, </span>
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AnalyseTool;