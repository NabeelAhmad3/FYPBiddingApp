const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', (req, res) => {
  const { name, card_number, cvv, expiry_date,  userid } = req.body;
  const sql = 'INSERT INTO payment_setting (name, card_number, cvv, expiry_date, userid) VALUES (?, ?, ?, ?, ?)';
  
  pool.query(sql, [name, card_number, cvv, expiry_date, userid], (err, result) => {
    if (err) {
      console.error('Error inserting payment:', err);
      return res.status(500).json({ message: 'Failed to insert payment', error: err });
    }
    res.status(201).json({ message: 'Payment created successfully', result });
  });
});

module.exports = router;
