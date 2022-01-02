const express = require('express');
const dotenv = require('dotenv');
const app = express();

app.get('/', (req,res) => {
  res.send("Hello");
});

app.listen(process.env.PORT);
dotenv.config();
console.log('Web Server is listening at port '+ (process.env.PORT)); 
