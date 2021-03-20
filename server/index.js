const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
const fetch = require('node-fetch');

const cors = require('cors'); // devDependencies
app.use(cors()); // devDependencies
app.options('*', cors()); // devDependencies





app.post('/gethtml', (req, res, next) => {
  fetch(req.body.data)
    .then(response => { return response.text() })
    .then(result => res.send(result))
    .catch(err => res.status(404).send('Page Not Found'));
});

// express port
app.listen(port);