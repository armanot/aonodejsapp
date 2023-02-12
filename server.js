'use strict';

const express = require('express');

// Constant
const PORT = 8881;
const HOST = '0.0.0.0';

//App
const app = express();
app.get('/', (req, res) => {
    res.send('Assalamualaikum...');
});


app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});