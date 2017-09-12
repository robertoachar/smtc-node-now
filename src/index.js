const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'It works!' });
});

app.get('/secret', (req, res) => {
  if (process.env.PASSWORD === 'S3CR3T') {
    res.json({ message: 'OK' });
  }
  else {
    res.json({ message: 'WRONG' });
  }
});

app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});
