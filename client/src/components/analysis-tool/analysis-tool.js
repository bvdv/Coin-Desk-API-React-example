import React, { useState } from 'react';
import Header from '../includes/header/header';
import HtmlService from '../../services/get-html-service';

const AnalyseTool = () => {

  const [inputValue, setInputValue] = useState("");
  const [wrongUrlStatus, setWrongUrlStatus] = useState(false);
  const [allUniqTags, setAllUinqTags] = useState([]);
  const [mostCommonlyUsedTags, setMostCommonlyUsedTags] = useState([]);
  const wrongUrlMsg = "sorry, URL not found"

  const handleSubmit = event => {
    setWrongUrlStatus(false);
    HtmlService.getHtml(inputValue)
      .then(res => { analyzeTags(res) })
      .catch(err => setWrongUrlStatus(true));
    event.preventDefault();
  }

  const analyzeTags = (documentString) => {

    const parser = new DOMParser();
    const documentHtml = parser.parseFromString(documentString, "text/html");
    //const documentXml = parser.parseFromString(xmlString, "application/xml");

    let all = documentHtml.getElementsByTagName("*");
    let arrAllUniqTags = [];
    let arrMostCommonlyUsedTags = [];
    for (let i = 0, max = all.length; i < max; i++) {
      let tagname = all[i].tagName;
      if (arrAllUniqTags.indexOf(tagname) == -1) {
        arrAllUniqTags.push(tagname);
      }
    }

    for (let index = 0; index < arrAllUniqTags.length; index++) {
      let tag = arrAllUniqTags[index];
      arrMostCommonlyUsedTags.push(
        [tag, documentHtml.getElementsByTagName(`${tag}`).length]
      );
    }

    arrMostCommonlyUsedTags.sort((a, b) => {
      return a[1] - b[1];
    });

    setMostCommonlyUsedTags(arrMostCommonlyUsedTags.reverse());
    setAllUinqTags(arrAllUniqTags);
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
        <div>
          <p>All unique tags:</p>
          <p>
            {allUniqTags.map((item, index) => (
              <span key={index}>
                <span>{item}, </span>
              </span>
            ))}
          </p>
        </div>
        <hr/>
        <div>
          <p>Counted occurrence of a each tag, first one is most common used:</p>
          <p>
            {mostCommonlyUsedTags.map((item, index) => (
              <span key={index}>
                <span>{item[0]} - {item[1]}, </span>
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AnalyseTool;