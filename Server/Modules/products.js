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
router.put('/updateProduct/:productid/:userid', (req, res) => {
    const { productid,userid } = req.params;
    const { carname, price, fueltype, cartype, description, city, address } = req.body;
    const sql = 'UPDATE products SET carname = ?, price = ?,fueltype = ?, cartype = ?,description = ?, city = ?, address = ? WHERE productid = ? AND userid = ?';

    pool.query(sql, [carname, price, fueltype, cartype, description, city, address, productid, userid], (err, result) => {
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
                 INNER JOIN product_bid ON products.productid = product_bid.productid`;

    pool.query(sql, (err, result) => {
        if (err) {
            console.error('Error fetching products:', err);
            return res.status(500).json({ error: 'Database query error' });
        }
        res.status(200).json(result);
    });
});
router.get('/productsInfo/:id', (req, res) => {
    const productId = req.params.id; 
    const sql = `SELECT * FROM products WHERE productid = ?`;

    pool.query(sql, [productId], (err, results) => {
        if (err) {
            console.error('Error fetching product:', err);
            return res.status(500).json({ error: 'Database query error' });
        }
        if (results.length > 0) {
            res.status(200).json(results[0]);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
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

router.get('/myProducts/:userid', (req, res) => {
    const { userid } = req.params;
    const sql = `SELECT * FROM products WHERE userid = ?`;

    pool.query(sql, [userid], (err, results) => {  
        if (err) {
            console.error('Error fetching products:', err);
            return res.status(500).json({ error: 'Database query error' });
        }
        res.status(200).json(results);
    });
});
router.delete('/deleteProduct/:productid/:userid', (req, res) => {
    const { productid, userid } = req.params; // Get both productid and userid from the request parameters
    const sql = `DELETE FROM products WHERE productid = ? AND userId = ?`; // Use productid in the query

    pool.query(sql, [productid, userid], (err, results) => {  
        if (err) {
            console.error('Error deleting product:', err); // Log the error for debugging
            return res.status(500).json({ error: 'Database query error' });
        }
        
        // Check if any rows were affected
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Product not found or does not belong to the user' });
        }
        
        res.status(200).json({ message: 'Product deleted successfully' });
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
