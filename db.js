const mysql = require('mysql2');

require('dotenv').config();

const connection = mysql.createConnection({
  // host: 'localhost',
  // user: 'root',
  // password: 'Gulshan@123',
  // database: 'Todo_db',
   host: process.env.DB_HOST,
  port: process.env.DB_PORT, // very important for Railway
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect(err => {
  if (err) throw err;
  console.log(' MySQL connetion succesfully');
});

module.exports = connection;
