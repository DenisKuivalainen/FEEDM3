const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const db = require('./db');
const port = process.env.PORT || 8080;
 
const app = express();
 
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/back', function (req, res) {
    console.log(1)
    res.send();
});

app.get('/test', function (req, res) {
var connection = mysql.createConnection(db.getDB());

    connection.connect(function(err){
        if (err) {
          return console.error("Ошибка: " + err.message);
        }
        else{
          console.log("Подключение к серверу MySQL успешно установлено");
        }
     });
     // закрытие подключения
     connection.end(function(err) {
      if (err) {
        return console.log("Ошибка: " + err.message);
      }
      console.log("Подключение закрыто");
    });
    res.send();
});
 
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
app.listen(port);