const express = require("express");
const router = express.Router();
const Product = require("./products-model");

router.get("/", async (req, res) => {
  const getAllProducts = await product.find().populate("categorId");
  res.status(200).json(getAllProducts);
});

router.post("/", (req, res) => {
  const newProduct = req.body;
  new Product(req.body)
    .save()
    .then(() => {
      res.status(200).json(newProduct);
    })
    .catch((error) => {
      res.status(400).json({ status: "ERROR" });
    });
});

router.put("/:id", async (req, res) => {
  const productId = req.params.id;
  const changeProduct = req.body;

  await Product.findByIdAndUpdate(productId, changeProduct).exec();
  res.status(200).json(changeProduct);
});

router.get("/:id", async (req, res) => {
  const productId = req.params.id;

  Product.findById(productId)
    .exec()
    .then((product) => {
      res.status(200).json(product);
    });
});

module.exports = router;
