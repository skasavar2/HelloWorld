

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const port = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json(), cors());

app.get('/', (req, res) => {
    res.send('Welcome to NodeJs API Project');
});

app.get('/hello', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log('listening on port ${port}');
});


