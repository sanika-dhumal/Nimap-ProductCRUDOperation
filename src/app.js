const express = require('express');
const app = express();
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const path = require('path');
let bodyparser=require("body-parser")
app.use(express.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));


app.use("/",productRoutes); 
app.use("/",categoryRoutes);


module.exports = app;
