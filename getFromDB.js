const { Client } = require('pg');
const db = require('./db');
const qwr = require('./query');

const credentials = {
    connectionString: db.getDB(),
    ssl: {
      rejectUnauthorized: false
    }
};

const errRes = {
    top: 'No results...',
    dis: 'Sorry, no results were found... Please, try again... You cannot give up just yet... Stay DETERMINED!!!',
    pic: 'https://st3.depositphotos.com/8687680/16636/i/450/depositphotos_166369074-stock-photo-glitch-psychedelic-background-old-tv.jpg'
}

async function responceForWebApp(req) {
    let client = new Client(credentials);
    client.connect();

    let text = qwr.browserQuery();
    let values = qwr.browserVariables(req);

    return client.query(text, values)
    .then(resp => {
        client.end();

        var toClient = {};

        if (resp.rows[0] !== undefined) { // checks if any results
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
                recps: [errRes]
            };
        }

        return JSON.stringify(toClient);
    })
    .catch(e => console.error(e.stack))
}

function responceForMobileApp(req) {
    let client = new Client(credentials);
    client.connect();

    let text = qwr.mobileQuery();
    let values = qwr.mobileVariables(req);

    return client.query(text, values)
    .then(resp => {
        client.end();

        return JSON.stringify((resp.rows[0] !== undefined) ? resp.rows : [errRes]);
    })
    .catch(e => console.error(e.stack))
}

module.exports = {
    responceForWebApp, responceForMobileApp
}