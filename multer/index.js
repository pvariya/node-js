// require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./routes/userRoute');

const PORT = process.env.PORT || 8090;
app.use(express.json());
app.use(express.urlencoded({ extended: true }))



app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
