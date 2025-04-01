const express = require("express");
const {
  getAllPizzas,
  addPizza,
  updatePizza,
  deletePizza,
} = require("../controllers/pizzaController");

const router = express.Router();

// Public route
router.get("/", getAllPizzas);

// Admin routes
router.post("/", addPizza);
router.put("/:id", updatePizza);
router.delete("/:id", deletePizza);

module.exports = router;
