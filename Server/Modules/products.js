const express = require('express');
const router = express.Router();
const connection = require('../db');

router.post('/', (req, res) => {
    const { name, price, fueltype, cartype, city, address, userid } = req.body;
    const sql = 'INSERT INTO products (name, price, fueltype, cartype, city, address, userid) VALUES (?,?,?,?,?,?,?)';

    connection.query(sql, [name, price, fueltype, cartype, city, address, userid], (err, result) => {
        if (err) {
            console.error('Error inserting product:', err);
            return res.status(500).json({ sqlMessage: 'Failed to insert product' });
        }
        res.status(201).json({ message: 'Product created successfully', result });
    });
});

router.put('/:productid', (req, res) => {
    const { productid } = req.params;
    const { name, price, fueltype, cartype, city, address } = req.body;
    const sql = 'UPDATE products SET name = ?, price = ?,cartype = ?,fueltype = ?, city = ?, address = ? WHERE productid = ?';

    connection.query(sql, [name, price, fueltype, cartype,  city, address, productid], (err, result) => {
        if (err) {
            console.error('Error updating product:', err);
            return res.status(500).json({ sqlMessage: 'Failed to update product' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product updated successfully' });
    });
});

module.exports = router;
