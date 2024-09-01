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
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM payment_setting';
  
  pool.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching payment settings:', err);
      return res.status(500).json({ message: 'Failed to fetch payment settings', error: err });
    }
    res.status(200).json({ payments: results });
  });
});
router.delete('/:payment_id', (req, res) => {
  const cardId = req.params.payment_id;
  const sql = 'DELETE FROM payment_setting WHERE payment_id = ?';

  pool.query(sql, [cardId], (err, result) => {
    if (err) {
      console.error('Error deleting card:', err);
      res.status(500).json({ message: 'Error deleting card' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Card not found' });
    } else {
      res.status(200).json({ message: 'Card deleted successfully' });
    }
  });
});


module.exports = router;
