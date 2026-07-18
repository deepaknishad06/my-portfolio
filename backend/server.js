const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = require("./config/db");

const contactRoutes = require("./routes/contactRoutes");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
