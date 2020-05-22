const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('client'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/index.html'));
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));