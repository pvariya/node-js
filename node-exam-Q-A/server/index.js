const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const userRoute = require("./routes/user");
const router = require("./routes/que");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRoute);
app.use("/api/questions", router);
app.listen(8090, () => {
  console.log("Server is running on port 8090");
  db();
});
