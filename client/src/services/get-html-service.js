/*
TODO:
  1) Nginx should protect agains to many request
  2) if res.status === 404 - page not found, 
     if res status === 503 - please only 3 request per min
*/

const apiBase = 'http://localhost:3000/gethtml';

const getHtml = async (url = '') => {
  const res = await fetch(`${apiBase}`, {
    method: 'POST', 
    mode: 'cors',
    cache: 'no-cache', 
    credentials: 'omit', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({ data: url })
  });

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}` +
      `, received ${res.status}`);
  }

  return await res.text();
};

export default {
  getHtml
}

