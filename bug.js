const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing error handling if 'user' or its properties are invalid
  console.log('User:', user); // Log the user to check if data is received
  res.status(201).send();
});
app.listen(3000, () => console.log('Server listening on port 3000'));