const express = require('express');
const router = express.Router();
const pool = require('../db');


router.post('/', (req, res) => {
    const { name, email, phone, cnic, city, password } = req.body;
    const sql = 'INSERT INTO users (name, email,phone,cnic,city, password) VALUES ( ?, ?, ?, ?, ?, ?)';
    try {
        pool.query(sql, [name, email, phone, cnic, city, password], (err, result) => {
            res.status(201).json({ message: 'User created successfully', result });
        });
    } catch (err) {
        console.error('Unexpected error:', err);
        res.status(500).json({ sqlMessage: 'An unexpected error occurred' });
    }
});


router.get('/:userid', (req, res) => {
    const { userid } = req.params;
    try {
        const sql = `SELECT * FROM users WHERE userid = ?`;
        pool.query(sql, [userid], (err, result) => {
            if (err) {
                return res.status(500).send({ error: 'Database query failed' });
            }
            res.status(200).send(result);
        });
    } catch (err) {
        res.status(500).send({ error: 'Server error' });
    }
});

router.put('/:userid', (req, res) => {
    const { userid } = req.params;
    const { name, email, phone, cnic, city, password } = req.body;
    try {
        
        const sql = `UPDATE users SET name = ?, email = ?, phone = ?, cnic = ?, city = ?, password = ? WHERE userid = ?`;
        pool.query(sql, [name, email, phone, cnic, city, password, userid], (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.affectedRows === 0) {
                return res.status(404).send(err);
            }
            res.status(200).send(result);
        });
    } catch (err) {
        res.status(500).send({ error: 'Server error' });
    }
});


module.exports = router;