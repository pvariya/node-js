const { Router } = require('express')
const { getBookById, deleteBook, getAllBooks, addBook } = require('../controllers/bookController')

const bookRoute = Router()

bookRoute.get('/book/:id', getBookById)
bookRoute.delete('/delete/:id',deleteBook)
bookRoute.get('/getBook/',getAllBooks)
bookRoute.post('/postBook',addBook)
module.exports = bookRoute;