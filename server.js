const express = require('express');
const bodyParser = require('body-parser');

const Db=require("./db.js");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';

  Db.query(sql, [username, password], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send('Internal server error');
    }

    if (results.length > 0) {
      res.send('Login successful!');
    } else {
      res.status(401).send('Invalid username or password');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
