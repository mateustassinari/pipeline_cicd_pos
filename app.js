const express = require('express');

const app = express();
const createError = require('http-errors');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/hello', (req, res) => res.send('Hello World!'));

module.exports = app;
