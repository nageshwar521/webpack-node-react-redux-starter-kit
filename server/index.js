const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { getCartData, updateCartData } = require('./cart');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/getCart', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const cartData = getCartData();
  res.send(JSON.stringify(cartData));
});

app.put('/updateCart', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const updatedCartData = updateCartData(JSON.parse(req.body.data));
  if (updatedCartData.status === 'success') {
    res.status(200);
    res.send(JSON.stringify(updatedCartData));
  } else {
    res.status(400);
    res.send(JSON.stringify(updatedCartData));
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log('api running on port ' + PORT);
});
