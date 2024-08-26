const express = require('express');
const router = express.Router();
const connection = require('../db');
router.put('/:userid/:productid', (req, res) => {
    const { userid, productid } = req.params;
    const { price } = req.body;

    try {
        const updateSql = `UPDATE product_bid SET price = ? WHERE userid = ? AND productid = ?`;
        connection.query(updateSql, [price, userid, productid], (err, result) => {
            if (err) {
                return res.status(500).send({ error: 'Database query error' });
            }

            if (result.affectedRows === 0) {
                // No rows were updated, so insert the new record
                const insertSql = `INSERT INTO product_bid (price, userid, productid) VALUES (?, ?, ?)`;
                connection.query(insertSql, [price, userid, productid], (err, result) => {
                    if (err) {
                        return res.status(500).send({ error: 'Database query error' });
                    }
                    return res.status(200).send({ message: 'Price added successfully', result });
                });
            } else {
                // Rows were updated
                return res.status(200).send({ message: 'Price updated successfully', result });
            }
        });
    } catch (err) {
        res.status(500).send({ error: 'Server error' });
    }
});

module.exports = router;
