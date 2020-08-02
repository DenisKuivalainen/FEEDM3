const { Client } = require('pg');
const db = require('./db');

const client = new Client({
  connectionString: db.getDB(),
  ssl: {
    rejectUnauthorized: false
  }
});

function getRes(req) {
    let a;

    let sql = 'SELECT * FROM food';

    client.connect();

    client.query(sql, (err, res) => {
        if (err) throw err;
        a = res.rows[0];
        client.end();console.log(1);
        console.log(JSON.stringify(a))
        return JSON.stringify(a);
    });
}

module.exports = {
    getRes
}