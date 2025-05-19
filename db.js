const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',       
  user: 'root',   
  password: '1234@abcd', 
  database: 'LoginDB'  
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports=connection;
