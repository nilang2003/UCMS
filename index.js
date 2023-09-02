const express = require("express");
const cors = require("cors"); // Import the cors package
const connecToMongo = require("./db");

const app = express();
const port = 4000;

connecToMongo();

app.use(cors()); // Use cors middleware
app.use(express.json());

// Api Routes
app.use("/api/register", require("./routes/register"));

app.listen(port, () => {
    console.log("Connected on port ", port);
});
