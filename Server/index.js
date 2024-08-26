const express = require('express');
const cors = require('cors');
const connection = require('./db');
const users_endpoint = require ('./Modules/users');
const products_endpoint = require('./Modules/products');
const product_bid_endpoint = require('./Modules/product_bid');
const payment_setting_endpoint = require('./Modules/payment_setting');


connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

const index = express();
const port = 5000;

index.use(express.json());
index.use(cors());

index.use('/users', users_endpoint);
index.use('/products', products_endpoint);
index.use('/product_bid', product_bid_endpoint);
index.use('/payment_setting',payment_setting_endpoint);


index.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
