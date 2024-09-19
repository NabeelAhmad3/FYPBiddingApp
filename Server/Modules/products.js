const express = require('express');
const router = express.Router();
const pool = require('../db');


router.post('/addProducts', (req, res) => {
    const { carname, price, fueltype, cartype, description, city, address, userid, images } = req.body;
    const sql = 'INSERT INTO products (carname, price, fueltype, cartype,description, city, address, userid) VALUES (?,?,?,?,?,?,?,?)';
    pool.query(sql, [carname, price, fueltype, cartype, description, city, address, userid], (err, result) => {
        if (err) {
            console.error('Unexpected error:', err);
            return res.status(500).json({ sqlMessage: 'An unexpected error occurred' });
        }
        const productId = result.insertId;
        if (images && images.length > 0) {
            const imageSql = 'INSERT INTO product_images (productid, image) VALUES ?';
            const imageValues = images.map(image => [productId, image]);

            pool.query(imageSql, [imageValues], (imgErr) => {
                if (imgErr) {
                    console.error('Error inserting images:', imgErr);
                    return res.status(500).json({ sqlMessage: 'Error inserting images' });
                }

                res.status(201).json({ message: 'Product and images added successfully', result });
            });
        } else {
            res.status(201).json({ message: 'Product added successfully', result });
        }
    });
});
router.put('/:productid', (req, res) => {
    const { productid } = req.params;
    const { carname, price, fueltype, cartype, description, city, address } = req.body;
    const sql = 'UPDATE products SET carname = ?, price = ?,fueltype = ?, cartype = ?,description = ?, city = ?, address = ? WHERE productid = ?';

    pool.query(sql, [carname, price, fueltype, cartype, description, city, address, productid], (err, result) => {
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

router.get('/livelistings', (req, res) => {
    const sql = `SELECT products.productid, products.carname, products.city, product_bid.price 
                 FROM products 
                 LEFT JOIN product_bid ON products.productid = product_bid.productid`;

    pool.query(sql, (err, result) => {
        if (err) {
            console.error('Error fetching products:', err);
            return res.status(500).json({ error: 'Database query error' });
        }
        res.status(200).json(result);
    });
});

router.get('/allData', (req, res) => {
    const sql = `SELECT * FROM products`;

    pool.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching products:', err);
            return res.status(500).json({ error: 'Database query error' });
        }
        res.status(200).json(results);
    });
});

router.get('/search', (req, res) => {
    const searchQuery = req.query.carname;
    if (!searchQuery) {
        return res.status(400).json({ message: 'Search query is required' });
    }
    const sql = 'SELECT * FROM products WHERE carname LIKE ?';

    pool.query(sql, [`%${searchQuery}%`], (err, results) => {
        if (err) {
            console.error('Error searching for product:', err);
            return res.status(500).json({ error: 'Database query error' });
        }
        res.status(200).json(results);
    });
});

module.exports = router;
