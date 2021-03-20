/*
TODO:
  1) nginx should protect agains to many request
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

