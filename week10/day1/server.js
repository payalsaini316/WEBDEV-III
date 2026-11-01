const express = require("express");

const { connection } = require("./db"); 
const { userRouter } = require("./routes/user.route");


const app = express();

app.get("/", (req, res) => {
  res.send("HOME PAGE");

});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});