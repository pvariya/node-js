const express = require("express");
const dbConnect = require("./config/db");
const userRouter = require("./route/user.route");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/user", userRouter);
app.listen(8090, () => {
  console.log("Server is running on port 8090");
  dbConnect();
});
