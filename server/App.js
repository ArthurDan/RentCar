const express = require('express');
const session = require('cookie-session'); // Charge le middleware de sessions
const bodyParser = require('body-parser');
// Charge le middleware de gestion des paramètres
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();
const mysql = require('mysql');



const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'rentcar',
});


/* On utilise les sessions */
app.use(session({ secret: 'test' }))

.post('/', urlencodedParser, (req, res) => {

})

  .listen(8080);
