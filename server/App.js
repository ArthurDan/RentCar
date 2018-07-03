const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));


const c = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'rentcar',
});

c.connect();



app.all('*', (req, res, next) => {
  return res.send('page not found');
  next();
});

app.listen(8080);

