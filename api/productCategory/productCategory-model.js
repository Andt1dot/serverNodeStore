const mongoose = require("mongoose");

const productCategorySchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

const productCategoryModel = mongoose.model(
  "ProductCategory",
  productCategorySchema
);


module.exports = productCategoryModel