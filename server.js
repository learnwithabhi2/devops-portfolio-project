// server.js
const express = require("express");
const path = require("path");

const app = express();
app.use(express.json()); // to parse incoming JSON
app.use(express.urlencoded({ extended: true })); // to parse form data

// Serve static files (like our index.html) from views
app.use(express.static(path.join(__dirname, "views")));

// Store data in memory (for simplicity)
const users = [];

// Handle form submission
app.post("/add-user", (req, res) => {
  const { name, number, age, biodata } = req.body;

  if (!name) {
    return res.status(400).send({ error: "Name is required!" });
  }

  users.push({ name, number, age, biodata });
  res.redirect("/users"); // Redirect to view all users
});

// View all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
