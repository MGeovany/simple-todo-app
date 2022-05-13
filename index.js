const express = require('express');

const app = express();
const path = require("path");

app.listen(3000, ()=>{
  console.log('connected');

})

app.use(express.static(path.join(__dirname, "src")));


