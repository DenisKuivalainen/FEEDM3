const express = require('express');
const path = require('path');
const gfdb = require('./getFromDB');

const port = process.env.PORT || 8080;
const app = express();

 
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

// API for web app
app.get('/recipe', function (req, res) {
    gfdb.responceForWebApp(req).then((resp) => res.send(resp));
});

// API for mobile app
app.get('/vue', function (req, res) {
    gfdb.responceForMobileApp(req).then((resp) => res.send(resp))
});

// download mobile app
app.get('/download', function (req, res) {
    let file = "FEEDM3.apk";
    let fPath = path.join(__dirname, file);
    res.download(fPath);
});
 
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);