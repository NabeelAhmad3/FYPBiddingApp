const express = require('express');  
const router = express.Router();
const connection = require('../db');


router.post('/', (req, res) => {
    try {
        const { name, email, password } = req.body;
        const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
        connection.query(sql, [name, email, password], (err, result) => {
            res.status(201).json({ message: 'User created successfully', result });
        });
    } catch (err) {
        console.error('Unexpected error:', err);
        res.status(500).json({ sqlMessage: 'An unexpected error occurred' });
    }
});

module.exports = router;