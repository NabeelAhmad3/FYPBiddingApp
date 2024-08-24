const express = require('express');
const router = express.Router();
const connection = require('../db');

router.post('/', (req, res) => {
  const { name, card_number, cvv, expiry_date, type, method, userid } = req.body;

  if (!name || !card_number || !cvv || !expiry_date || !userid) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const sql = 'INSERT INTO payment_setting (name, card_number, cvv, expiry_date, type, method, userid) VALUES (?, ?, ?, ?, ?, ?, ?)';
  
  connection.query(sql, [name, card_number, cvv, expiry_date, type, method, userid], (err, result) => {
    if (err) {
      console.error('Error inserting payment:', err);
      return res.status(500).json({ message: 'Failed to insert payment', error: err });
    }
    res.status(201).json({ message: 'Payment created successfully', result });
  });
});

module.exports = router;
