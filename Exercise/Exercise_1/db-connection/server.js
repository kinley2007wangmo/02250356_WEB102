console.log("THIS IS MY SERVER FILE");
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('SERVER WORKING');
});

app.listen(3000, () => {
  console.log('Server running on 3000');
});