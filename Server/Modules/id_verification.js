const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', (req, res) => {
    const {  image1, image2, userid } = req.body;
    if (!image1 || !image2) {
        return res.status(400).json({ message: 'Images are required' });
    }
    const imageSql = 'INSERT INTO id_verification ( image1, image2 ,userid) VALUES (?,?,?)';
    try {
        pool.query(imageSql, [image1, image2, userid], (err, result) => {
            if (err) {
                console.error('Unexpected error:', err);
                return res.status(500).json(err.sqlMessage);
            }
            res.status(201).json({ message: 'Id verifecation submitted successfully', result });
        }
        );
    } catch (err) {
        console.error('Error processing request:', err);
        res.status(500).json(err.sqlMessage);
    }
});

module.exports = router;
