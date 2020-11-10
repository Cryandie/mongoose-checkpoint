const express = require("express");
const app = express();
const router = require("./routes/person");

const connectDB = require("./config/connectDB");

//middleware routing
app.use(express.json());
app.use("/persons", router);

//DB:
connectDB();

//Server:
const port = process.env.PORT || 4000;
app.listen(port, (error) => {
  error
    ? console.log("Connection lost")
    : console.log(`Connected to port ${port}`);
});
