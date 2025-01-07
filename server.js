import express from "express";
import userRoutes from "./routes/userRoutes.js";
import path from "path";

const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Middleware to parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use user routes
app.use("/", userRoutes);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
