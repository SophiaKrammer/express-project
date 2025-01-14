const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/contacts", require("./contactRoutes"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});