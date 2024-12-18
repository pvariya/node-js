const express = require("express");
const connectDb = require("./config/db");
const userRoute = require("./routes/user.controler");
const app = express();
const PORT = 8090
// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("Welcome to the Express");
});

app.use('/user',userRoute)
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDb()
});