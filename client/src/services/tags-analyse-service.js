import GetHtmlService from '../services/get-html-service';

export default class TagsAnalyseService {
  constructor(url = '') {
    this.documentForAnalyse = getHtmlStringFromUrl(url);
  }

  getHtmlStringFromUrl = url => {
    GetHtmlService.getHtml(url)
      .then(res => { return parseStringToHtmlXml(res) })
      .catch(err => { return false });
  }

  parseStringToHtmlXml = documentString => {
    const parser = new DOMParser();
    const documentHtml = parser.parseFromString(documentString, "text/html");
    //const documentXml = parser.parseFromString(xmlString, "application/xml");

    return documentHtml;
  }

  getAllUniqTags = () => {
    let all = this.documentForAnalyse.getElementsByTagName("*");
    let arrAllUniqTags = [];

    for (let i = 0, max = all.length; i < max; i++) {
      let tagname = all[i].tagName;
      if (arrAllUniqTags.indexOf(tagname) == -1) {
        arrAllUniqTags.push(tagname);
      }
    }

    return arrAllUniqTags;
  }

  getMostCommonlyUsedTags = () => {
    let arrMostCommonlyUsedTags = [];
    for (let index = 0; index < getAllUniqTags().length; index++) {
      let tag = getAllUniqTags()[index];
      arrMostCommonlyUsedTags.push(
        [tag, documentHtml.getElementsByTagName(`${tag}`).length]
      );
    }

    arrMostCommonlyUsedTags.sort((a, b) => {
      return a[1] - b[1];
    });

    return arrMostCommonlyUsedTags.reverse();
  }
}