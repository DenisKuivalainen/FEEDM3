const express = require('express');
const { Client } = require('pg');
const db = require('./db');
const qwr = require('./query')
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();
const cred = {
    connectionString: db.getDB(),
    ssl: {
      rejectUnauthorized: false
    }
};
const errRes = {
    top: 'No results...',
  dis: 'Sorry, no results were found... Please, try again... \nYou cannot give up just yet... \nStay DETERMINED!!!' 
}
 
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/recp', function (req, res) {
    let client = new Client(cred);
    client.connect();

    let text = qwr.t(req);
    let values = qwr.v(req);
    

    client.query(text, values, (err, resp) => {
        if (err) {
            console.log(err);
        }
        client.end();
        res.send(JSON.stringify((resp.rows[0] !== undefined) ? resp.rows[0] : errRes));
    });
});

app.get('/vue', function (req, res) {
    let client = new Client(cred);
    client.connect();

    let text = qwr.t(req);
    let values = qwr.v(req);
    

    client.query(text, values, (err, resp) => {
        if (err) {
            console.log(err);
        }
        client.end();
        res.send(JSON.stringify((resp.rows[0] !== undefined) ? resp.rows : errRes));
    });
});

 
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);