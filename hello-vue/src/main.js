const express = require('express');
const app = express();
app.use(express.json());

let userInputs = [];

app.post('/api/submit', (req, res) => {
  userInputs.push(req.body);
  if (userInputs.length === 4) {
    userInputs.sort((a, b) => b.value - a.value);
  }
  res.json(userInputs);
});

app.listen(3000, () => console.log('Server running on port 3000'));