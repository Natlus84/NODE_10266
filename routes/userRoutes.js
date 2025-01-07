import express from "express";
import {
  getRegistrationPage,
  registerUser,
  getLoginPage,
  loginUser,
  getDashboard,
  deleteUser,
  getEditPage,
  updateUser,
} from "../controllers/userController.js";
import { get } from "http";

const router = express.Router();

//root route
router.get("/", getRegistrationPage);
// Registration routes

router.get("/register", getRegistrationPage);
router.post("/register", registerUser);

// Login routes
router.get("/login", getLoginPage);
router.post("/login", loginUser);

// Dashboard routes
router.get("/dashboard", getDashboard);
router.delete("/dashboard/:id", deleteUser);

// Edit routes
router.get("/edit/:id", getEditPage);
router.post("/edit/:id", updateUser);

export default router;