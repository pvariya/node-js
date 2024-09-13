require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const dbConnect = require('./config/db');
const bookRoute = require('./routes/book_route');

const PORT = process.env.PORT || 8090;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.send("welcome to the book store");
})


app.use('/books',bookRoute)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  dbConnect()
});
