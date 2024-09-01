const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes.js");
const dbConnect = require("./db.js");
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/users", userRoutes);

app.listen(9009, () => {
  console.log("Server is running on port 9009! ���������");
  dbConnect();
});
