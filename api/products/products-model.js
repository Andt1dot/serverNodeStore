const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, require: true },
  description: String,
  initialPrice: { type: Number, require: true },
  finallPrice: { type: Number, require: true },
  foto: { type: String, require: true },
  categorId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "ProductCategory",
  },
});

const product = mongoose.model("Product", productSchema);

module.exports = product;

