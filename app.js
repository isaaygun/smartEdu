const express=require('express');
const app=express();
// const app = require('express')();

const port = 3000;

app.get('/', (req, res) => {
  res.status(200).send('merhaba index sayfası');
});

app.listen(port, () => {
  console.log(`${port} nolu port dinleniyor`);
});
