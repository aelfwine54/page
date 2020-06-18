const express = require('express');
const path = require('path');

const livres = require('../data/livres');

var router = express.Router();


router.get('/', function(req, res){
    res.send(livres)
});

router.get('/:id', function(req, res){
    res.send(livres[req.params['id']]);
});

module.exports = router