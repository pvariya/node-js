const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(cors())

let course = []
app.get('/', (req, res) => {
    res.send("exam 4 courses from")
})

// app.get('/index', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// });

// app.get('/courses', (req, res) => {
//     res.sendFile(__dirname + 'addCourse.html')
// })

app.post('/postCourse', (req, res) => {
    let { name, category, instructor, duration } = req.body
    const newCourse = {
        id: Date.now(),
        name,
        category,
        instructor,
        duration: Number(duration)
    }
    course.push(newCourse)
    res.send(course)
})


app.get('/courses', (req, res) => {
    res.json(course);
});

app.delete('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedCourses = course.filter(course => course.id !== id);
    course = updatedCourses;
    res.json(course);
});
app.listen(8090, () => {
    console.log("listen on 8090");

})

let cours = []