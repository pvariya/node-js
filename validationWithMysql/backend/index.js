const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./config/db');
const router = require('./routes/index');


(async () => {
    try {
        await db.authenticate();
        console.log('Database connected');
        await db.sync();
        console.log('Database synced');
    } catch (error) {
        console.error('Error connecting to the database: ', error);
    }
})()


app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to the validation API!');
})


app.use('/api', router);
app.listen(8090, () => {
    console.log('Server is running on port 8090');
})