// Import required module
const express = require('express');

// Initialize the Express application
const app = express();

// Configure Express
app.use(express.urlencoded({ extended: true }));

// Define routes
app.get('/login', function(req, res) {
  res.send('<form action="/login" method="post"><div><label>Username:</label><input type="text" name="username"/></div><div><label>Password:</label><input type="password" name="password"/></div><div><input type="submit" value="Log In"/></div></form>');
});

app.post('/login', function(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  // Here you would typically look up the user in your database
  // For this example, we'll just check if the username and password are 'admin'
  if (username === 'admin' && password === 'admin') {
    res.redirect('/');
  } else {
    res.redirect('/login');
  }
});

app.get('/', function(req, res) {
  res.send('Welcome, admin');
});

// Start the server
app.listen(3000, function() {
  console.log('App listening on port 3000');
});

