const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', (req, res) => {
    const { name, price, fueltype, cartype,description, city, address, userid, images } = req.body;
    const sql = 'INSERT INTO products (name, price, fueltype, cartype,description, city, address, userid) VALUES (?,?,?,?,?,?,?,?)';
    pool.query(sql, [name, price, fueltype, cartype,description, city, address, userid], (err, result) => {
        if (err) {
            console.error('Unexpected error:', err);
            return res.status(500).json({ sqlMessage: 'An unexpected error occurred' });
        }
        const productId = result.insertId;
        if (images && images.length > 0) {
            const imageSql = 'INSERT INTO product_images (productid, image) VALUES ?';
            const imageValues = images.map(image => [productId, image]);

            pool.query(imageSql, [imageValues], (imgErr, imgResult) => {
                console.log(imageValues);
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
    const { name, price, fueltype, cartype,description, city, address } = req.body;
    const sql = 'UPDATE products SET name = ?, price = ?,fueltype = ?, cartype = ?,description = ?, city = ?, address = ? WHERE productid = ?';

    pool.query(sql, [name, price, fueltype, cartype,description, city, address, productid], (err, result) => {
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
router.get('/product/:id/images', (req, res) => {
    const productId = req.params.id;
    const sql = 'SELECT * FROM product_images WHERE productid = ?';
    pool.query(sql, [productId], (err, results) => {
        if (err) {
            console.error('Error fetching images:', err);
            return res.status(500).json({ sqlMessage: 'Error fetching images' });
        }
        if (results.length > 0) {
            const images = results.map(result => {
                return {
                    image: Buffer.from(result.image).toString('base64')
                };
            });
            res.json(images);
        } else {
            res.status(404).json({ message: 'No images found' });
        }
    });
});
router.get('/', (req, res) => {
    const sql = `SELECT productid, name, price, fueltype, cartype,description, city, address FROM products`;
  
    pool.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching products:', err);
        return res.status(500).json({ error: 'Database query error' });
      }
      res.status(200).json(results);
    });
  });
  router.get('/', (req, res) => {
    const sql = `SELECT p.status, p.name, p.price, p.city, p.eyeTxt FROM products p`;

    pool.query(sql, (err, results) => {
        if (err) {
            console.error('Unexpected error:', err);
            return res.status(500).json({ sqlMessage: 'An unexpected error occurred' });
        }

        res.status(200).json(results);
    });
});
router.get('/', (req, res) => {
    const productid = req.query.productid; 
    const sql = `SELECT name, city, status, deliveryFee, price, currentBid, created_at FROM products WHERE productid = ?`;
  
    pool.query(sql, [productid], (err, result) => {
      if (err) {
        return res.status(500).send('Error fetching product info');
      }
      res.json(result); 
    });
  });
  
  router.get('/search', (req, res) => {
    const searchQuery = req.query.name;
    if (!searchQuery) {
        return res.status(400).json({ message: 'Search query is required' });
    }
    const sql = 'SELECT * FROM products WHERE name LIKE ?';

    pool.query(sql, [`%${searchQuery}%`], (err, results) => {
        if (err) {
            console.error('Error searching for product:', err);
            return res.status(500).json({ error: 'Database query error' });
        }
        res.status(200).json(results);
    });
});

module.exports = router;
