require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT

app.listen(port, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`connected to localhost:${port}...`);
  }
})