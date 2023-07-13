const express = require('express');
const app = express();

app.get('/random', (req, res) => {
  const random = Math.floor(Math.random() * 10) + 1;
  res.json({ random });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
