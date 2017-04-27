'use strict';

const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser')
const app = express();


app.use(volleyball);

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json());

app.use(express.static(__dirname));

app.listen(8888, function () {
  console.log('Server listening on port', 8888);
});




