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
    const { productid, userid } = req.params;
    const updatedProductData = req.body;
    
    pool.query(
      'UPDATE products SET ? WHERE productid = ? AND userid = ?',
      [updatedProductData, productid, userid],
      (err, result) => {
        if (err) {
          console.error('Database error:', err);
          return res.status(500).send({ message: 'Error updating product' });
        }
        if (result.affectedRows === 0) {
          return res.status(404).send({ message: 'Product not found or not owned by user' });
        }
        res.send({ message: 'Product updated successfully' });
      }
    );
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
router.get('/productsInfo/:productid', (req, res) => {
    const { productid } = req.params;
    const sql = `SELECT products.carname,products.productid, products.city, products.price,products.cartype,products.fueltype,products.address,products.description, products.created_at, 
                    product_bid.price AS bid_price, users.name AS seller_name, users.city AS seller_city FROM products 
                    LEFT JOIN product_bid ON products.productid = product_bid.productid
                    LEFT JOIN users ON products.userid = users.userid
                    WHERE products.productid = ?`;

    pool.query(sql, [productid], (err, results) => {
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
    const { productid, userid } = req.params;
    const deleteBidsSql = `DELETE FROM product_bid WHERE productid = ?`;

    pool.query(deleteBidsSql, [productid], (err, results) => {
        if (err) {
            console.error('Error deleting related bids:', err);
            return res.status(500).json({ error: 'Error deleting related bids' });
        }

        const deleteProductSql = `DELETE FROM products WHERE productid = ? AND userid = ?`;

        pool.query(deleteProductSql, [productid, userid], (err, results) => {
            if (err) {
                console.error('Error deleting product:', err);
                return res.status(500).json({ error: 'Database query error' });
            }
            if (results.affectedRows === 0) {
                return res.status(404).json({ error: 'Product not found or does not belong to the user' });
            }

            res.status(200).json({ message: 'Product deleted successfully' });
        });
    });
});
router.get('/search', (req, res) => {
    const carname = req.query.carname;
    const productid = parseInt(req.query.productid, 10); 
    
    if (!carname && isNaN(productid)) {
        return res.status(400).json({ message: 'Search query is required' });
    }

    let sql = 'SELECT * FROM products WHERE ';
    const queryParams = [];

    if (carname) {
        sql += 'carname LIKE ? ';
        queryParams.push(`%${carname}%`);
    }

    if (!isNaN(productid)) {
        if (carname) {
            sql += 'OR '; 
        }
        sql += 'productid = ? '; 
        queryParams.push(productid);
    }

    pool.query(sql, queryParams, (err, results) => {
        if (err) {
            console.error('Error searching for product:', err);
            return res.status(500).json({ error: 'Database query error' });
        }

        if (results.length === 0) {
            return res.status(200).json([]);  
        }

        res.status(200).json(results);
    });
});

module.exports = router;

