const express = require('express');
const router = express.Router();
const pool = require('../db');
const bcrypt = require('bcrypt');

const saltRounds = 10;

router.post('/register', (req, res) => {
    const { name, email, phone, cnic, city, password } = req.body;

    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        if (err) {
            return res.status(500).json({ message: 'Error hashing the password' });
        }

        const sql = 'INSERT INTO users (name, email, phone, cnic, city, password) VALUES (?, ?, ?, ?, ?, ?)';
        pool.query(sql, [name, email, phone, cnic, city, hashedPassword], (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Database error', error: err });
            }
            res.status(201).json({ message: 'User created successfully', result });
        });
    });
});

router.put('/:userid', (req, res) => {
    const { userid } = req.params;
    const { name, email, phone, cnic, city, password } = req.body;

    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        if (err) {
            return res.status(500).json({ message: 'Error hashing the password' });
        }

        const sql = `UPDATE users SET name = ?, email = ?, phone = ?, cnic = ?, city = ?, password = ? WHERE userid = ?`;
        pool.query(sql, [name, email, phone, cnic, city, hashedPassword, userid], (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.affectedRows === 0) {
                return res.status(404).send({ message: 'User not found' });
            }
            res.status(200).send({ message: 'User updated successfully', result });
        });
    });
});

router.get('/:userid', (req, res) => {
    const { userid } = req.params;

    const sql = `SELECT * FROM users WHERE userid = ?`;
    pool.query(sql, [userid], (err, result) => {
        if (err) {
            return res.status(500).send({ error: 'Database query failed' });
        }
        res.status(200).send(result);
    });
});

router.get('/', (req, res) => {
    const userid = req.query.userid;

    const sql = `SELECT name, email, phone, city FROM users WHERE userid = ?`;
    pool.query(sql, [userid], (err, result) => {
        if (err) {
            return res.status(500).send('Error fetching product info');
        }
        res.json(result);
    });
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM users WHERE email = ?';
    pool.query(sql, [email], async (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Database error', error: err });
        }

        if (result.length === 0) {
            return res.status(404).json({ message: 'User does not exist' });
        }

        const user = result[0];
        console.log('Password from request:', password);
        console.log('Hashed password from database:', user.password);

        try {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                console.log('Password does not match');
                return res.status(401).json({ message: 'Invalid password' });
            } else {
                console.log('Password match successful');
                return res.status(200).json({ message: 'Login successful', user });
            }
        } catch (compareErr) {
            console.error('Password comparison error:', compareErr);
            return res.status(500).json({ message: 'Password comparison error', error: compareErr });
        }
    });
});



module.exports = router;
