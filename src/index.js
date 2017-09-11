const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'It works!' });
});

app.listen(3000, () => {
  console.log('Express is running on port 3000');
});
