const express = require('express');
const app = express();
app.use(express.json());

const validateUser = (req, res, next) => {
  const user = req.body;
  if (!user || !user.name || !user.email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  next();
};

app.post('/users', validateUser, (req, res) => {
  const user = req.body;
  console.log('User:', user);
  res.status(201).json({ message: 'User created' });
});

app.listen(3000, () => console.log('Server listening on port 3000'));