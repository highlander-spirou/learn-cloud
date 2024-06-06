import express from "express";
import os from "os";

const app = express();

// Function to get the server's IP address
function getServerIp() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Skip over non-ipv4 and internal (i.e., 127.0.0.1) addresses
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "IP not found";
}

// Route for the homepage
app.get("/", (req, res) => {
  res.send("Hello from the homepage!");
});

// Route for the about page
app.get("/about", (req, res) => {
  res.send(`Server is running on ${getServerIp()}:${port}`);
});

// Dynamic route for users with ID
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User with ID: ${userId}`);
});

// Start the server
const port = process.env.PORT || 3000; // Use environment variable for port or default to 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
