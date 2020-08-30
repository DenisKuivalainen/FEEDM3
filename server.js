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
    dis: 'Sorry, no results were found... Please, try again... You cannot give up just yet... Stay DETERMINED!!!',
    pic: ''
}
 
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/recipe', function (req, res) {
    let client = new Client(cred);
    client.connect();

    let text = qwr.browserQuery();
    let values = qwr.browserVariables(req);
    

    client.query(text, values, (err, resp) => {
        if (err) {
            console.log(err);
        }
        client.end();

        var toClient = {};

        if (resp.rows[0] !== undefined) {
            toClient = {
                count: Math.ceil(eval(resp.rows[0].total / values[3])),
                recps: resp.rows.map(val => {
                    return {
                        top: val.top,
                        dis: val.dis,
                        pic: val.pic
                    };
                }),
            };
        } else {
            toClient = {
                count: 1,
                recps: errRes
            };
        }
        
        res.send(JSON.stringify(toClient));
    });
});

app.get('/vue', function (req, res) {
    let client = new Client(cred);
    client.connect();

    let text = qwr.t();
    let values = qwr.v(req);
    

    client.query(text, values, (err, resp) => {
        if (err) {
            console.log(err);
        }
        client.end();
        res.send(JSON.stringify((resp.rows[0] !== undefined) ? resp.rows : [errRes]));
    });
});

app.get('/download', function (req, res) {
    let file = "FEEDM3.apk";
    let fPath = path.join(__dirname, file);
    res.download(fPath);
});
 
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);