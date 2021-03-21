import React, { useEffect, useState } from 'react';

/*
 TODO:
  1) To decomposite/separate analyzeTags to separated service or class or components
*/

const AnalyzedTags = ({ documentString }) => {
  const [allUniqTags, setAllUinqTags] = useState([]);
  const [mostCommonlyUsedTags, setMostCommonlyUsedTags] = useState([]);

  useEffect(() => {
    if (documentString) {
      analyzeTags(documentString);
    }
    return () => { console.log("cleaned up");};
  }, [documentString]);

  const analyzeTags = (documentString) => {
    const parser = new DOMParser();
    const documentHtml = parser.parseFromString(documentString, "text/html");
    //const documentXml = parser.parseFromString(xmlString, "application/xml");

    let all = documentHtml.getElementsByTagName("*");
    let arrAllUniqTags = [];
    let arrMostCommonlyUsedTags = [];

    // find all uniq tags
    for (let i = 0, max = all.length; i < max; i++) {
      let tagname = all[i].tagName;
      if (arrAllUniqTags.indexOf(tagname) == -1) {
        arrAllUniqTags.push(tagname);
      }
    }

    // count usage of tags
    for (let index = 0; index < arrAllUniqTags.length; index++) {
      let tag = arrAllUniqTags[index];
      arrMostCommonlyUsedTags.push(
        [tag, documentHtml.getElementsByTagName(`${tag}`).length]
      );
    }

    // sort most used tag first
    arrMostCommonlyUsedTags.sort((a, b) => {
      return a[1] - b[1];
    });

    setMostCommonlyUsedTags(arrMostCommonlyUsedTags.reverse());
    setAllUinqTags(arrAllUniqTags);
  };

  return (
    <div>
      <div>
        <hr />
        <p>All unique tags:</p>
        <p>
          {allUniqTags.map((item, index) => (
            <span key={index}>
              <span>{item}, </span>
            </span>
          ))}
        </p>
      </div>
      <hr />
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
  );
}

export default AnalyzedTags;