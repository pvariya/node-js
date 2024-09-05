const express = require('express')
const app = express()
const dbConnect = require('./db.js')
const User = require('./user.schema.js')

app.use(express.json())

app.get('/', async (req, res) => {
    res.send('Welcome to the API')
})

app.get('/students', async (req, res) => {
    const data = await User.find()
    res.send(data)
})

app.post('/studentsPost', async (req, res) => {
    let data = await User.create(req.body)
    res.send(data)
})

app.patch('/studentsUpdate/:id', async (req, res) => {
  let {id} = req.params;
  let data = await User.findByIdAndUpdate(id,req.body)
  res.send(data)
});


app.delete('/studentsDelete/:id', async (req, res) => {
  let {id} = req.params;
  let data = await User.findByIdAndDelete(id)
  res.send(data)
});

app.listen(8090, () => {
    console.log("listening on port 8090")
    dbConnect()
})