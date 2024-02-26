

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

//https://dev-api.dreamdelhi.com/api/operator/login [POST]
//https://dev-api.dreamdelhi.com/api/operator/get-games-list [POST]


//https://operatorBaseUrl/balance [POST]
app.post('/balance', (req, res) => {
    res.send('balance');
});

//https://operatorBaseUrl/betrequest [POST]
app.post('/betrequest', (req, res) => {
    res.send('betrequest');
});

https://operatorBaseUrl/resultrequest [POST]
app.post('/resultrequest', (req, res) => {
    res.send('resultrequest');
});

//https://operatorBaseUrl/rollbackrequest [POST]
app.post('/rollbackrequest', (req, res) => {
    res.send('rollbackrequest');
});



app.listen(port, () => {
    console.log('listening on port ${port}');
});


