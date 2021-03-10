const express = require("express");
const router = express.Router();
const productCategory = require("./productCategory-model");
 

router.get("/", async (req, res) => {
  productCategory
    .find()
    .exec()
    .then((product) => {
      res.status(200).json(product);
    });
});

router.post("/", async (req, res) => {
  const newProductCategory = req.body;

  new productCategory(newProductCategory).save().then((newCategory) => {
    res.status(200).json(newCategory);
  });
});


module.exports = router;