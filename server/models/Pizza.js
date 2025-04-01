const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    category: String, // e.g., Veg, Non-Veg
    prices: {
      small: Number,
      medium: Number,
      large: Number,
    },
    image: String, // URL of the pizza image
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pizza", pizzaSchema);
