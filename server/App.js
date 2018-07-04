const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const annonceDB = require('./api/annonceDB');

const userDB = require('./api/userDB');


app.use(bodyParser.json({ extended: false }));

app.post('/register', function(req, res, next) {
    userDB.register(req.body.name,req.body.email,req.body.mdp)
        
});

app.get('/delete', function(req, res, next) {
		userDB.de
        res.send(JSON.stringify(results));
   
});





app.listen(1345, () => {
 	console.log('Server running on port 1345...');
});