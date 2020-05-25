const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const static_pages = require('./routes/static_pages');

app.use(express.static('client'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/index.html'));
});

app.use('/static_pages', static_pages);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));