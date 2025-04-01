// server/server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Add after app.use(express.json());
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const pizzaRoutes = require("./routes/pizza");
app.use("/api/pizzas", pizzaRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Pizza Delivery Backend Running");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection failed:", err));
