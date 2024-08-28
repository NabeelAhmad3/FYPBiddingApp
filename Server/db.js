const mysql = require('mysql');
require('dotenv').config();

const pool = mysql.createPool({
  connectionLimit: 10,  // Set connection pool limit
  host: process.env.db_host,
  user: process.env.db_user,
  password: process.env.db_pass,
  database: process.env.db_database,
  acquireTimeout: 30000,  
  connectTimeout: 30000
});

module.exports = pool;
