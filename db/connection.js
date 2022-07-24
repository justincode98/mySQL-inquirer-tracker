const mysql = require('mysql2');
require('dotenv').config();
//uses env file

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: process.env.DB_USER,
  // Your MySQL password
  password: process.env.DB_PW,
  database: 'tracker'
});

module.exports = db;
