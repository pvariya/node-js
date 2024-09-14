const { Router } = require('express')
const { getBookById, deleteBook, getAllBooks, addBook ,uploade, updateBook} = require('../controllers/bookController')
const bookRoute = Router()

bookRoute.get('/book/:id', getBookById)
bookRoute.delete('/delete/:id', deleteBook)
bookRoute.get('/getBook/', getAllBooks)
bookRoute.post('/postBook', uploade.single('img'), addBook)
bookRoute.patch('/update/:id',updateBook);

module.exports = bookRoute;
