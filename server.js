const express = require('express');
const app = express();
const server = app.listen(3000, onServer);

function onServer() {
  console.log('server is on');
}

app.use(express.static('public'));