import fs from "fs";
import path from "path";

const filePath = path.join("data", "users.json");

// Read users from JSON file
export const readUsers = () => {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};

// Write users to JSON file
export const writeUsers = (users) => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};

// Find user by ID
export const findUserById = (id) => {
  const users = readUsers();
  return users.find((user) => user.id === parseInt(id));
};
