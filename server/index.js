const express = require('express');
const app = express();
const parser = require('body-parser');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/src'));

app.listen(3000, () => {
  console.log('LISTENING AT PORT 3000');
});
