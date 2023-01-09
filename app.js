const express = require('express');
const app = express();
// const app = require('express')();

const port = 3000;

app.set('view engine', 'ejs'); //template engine

//MIDDLEWARE(static)
app.use(express.static('public')); //static dosyalar public klasörü içindedir

//ROUTES
app.get('/', (req, res) => {
  res.render('index', { page_name : 'index' });
});
app.get('/about', (req, res) => {
  res.render('about', { page_name : 'about' });
});

app.listen(port, () => {
  console.log(`${port} nolu port dinleniyor`);
});
