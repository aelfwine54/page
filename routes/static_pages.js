const express = require('express');
const path = require('path');

var router = express.Router();


router.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/../client/accueil.html'));
});

router.get('/lire', function(req, res){
    res.sendFile(path.join(__dirname + '/../client/lire.html'));
});

router.get('/series', function(req, res){
    res.sendFile(path.join(__dirname + '/../client/series.html'));
});


module.exports = router