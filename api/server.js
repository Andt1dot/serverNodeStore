require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./products/products-router");
const productCategoryRouter = require ('./productCategory/productCategory-router')

mongoose.connect(
  `mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@cluster0.zxvho.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
);

const server = express();
server.use(express.json());

server.use("/api/products", productRouter);
server.use('/api/productCategory',productCategoryRouter);
module.exports = server;

//Mongo Express React Node 


