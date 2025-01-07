import {
    readUsers,
    writeUsers,
    findUserById,
  } from "../models/userModel.js";
  
  // Render registration page
  export const getRegistrationPage = (req, res) => {
    res.render("registration");
  };
  
  // Register a new user
  export const registerUser = (req, res) => {
    const users = readUsers();
    const { name, email, password } = req.body;
    const newUser = {
      id: users.length ? users[users.length - 1].id + 1 : 1,
      name,
      email,
      password,
    };
    users.push(newUser);
    writeUsers(users);
    res.redirect("/dashboard");
  };
  
  // Render login page
  export const getLoginPage = (req, res) => {
    res.render("login");
  };
  
  // Handle user login
  export const loginUser = (req, res) => {
    const { email, password } = req.body;
    const users = readUsers();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      res.redirect("/dashboard");
    } else {
      res.status(401).send("Invalid credentials");
    }
  };
  
  // Render dashboard page
  export const getDashboard = (req, res) => {
    const users = readUsers();
    res.render("dashboard", { users });
  };
  
  // Delete a user
  export const deleteUser = (req, res) => {
    const users = readUsers();
    const filteredUsers = users.filter(
      (user) => user.id !== parseInt(req.params.id)
    );
    writeUsers(filteredUsers);
    res.sendStatus(200);
  };
  
  // Render edit page
  export const getEditPage = (req, res) => {
    const user = findUserById(req.params.id);
    if (user) {
      res.render("edit", { user });
    } else {
      res.status(404).send("User not found");
    }
  };
  
  // Update user details
  export const updateUser = (req, res) => {
    const users = readUsers();
    const { name, password } = req.body;
    const userIndex = users.findIndex(
      (user) => user.id === parseInt(req.params.id)
    );
    if (userIndex !== -1) {
      users[userIndex].name = name;
      users[userIndex].password = password;
      writeUsers(users);
      res.redirect("/dashboard");
    } else {
      res.status(404).send("User not found");
    }
  };
  