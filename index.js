const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({ name: 'ec2-app', version: '1.0.0', description: 'EC2 Aplication' });
  res.end();
});

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});
