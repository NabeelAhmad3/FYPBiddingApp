const express = require('express');
const router = express.Router();
const pool = require('../db');

router.put('/createBid/:userid/:productid', (req, res) => {
    const { userid, productid } = req.params;
    const { price } = req.body;

    const updateSql = `UPDATE product_bid SET price = ? WHERE userid = ? AND productid = ?`;
    pool.query(updateSql, [price, userid, productid], (err, result) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).send({ error: 'Database query error' });
        }

        if (result.affectedRows === 0) {
            const insertSql = `INSERT INTO product_bid (price, userid, productid) VALUES (?, ?, ?)`;
            pool.query(insertSql, [price, userid, productid], (err, result) => {
                if (err) {
                    console.error('Database query error:', err);
                    return res.status(500).send({ error: 'Database query error' });
                }
                return res.status(200).send({ message: 'Price added successfully', result });
            });
        } else {
            return res.status(200).send({ message: 'Price updated successfully', result });
        }
    });
});

module.exports = router;
