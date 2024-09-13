const book = require('../models/book_schema');
const multer = require('multer');


const storage = multer.diskStorage({
    detination: "uplode",
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage })


const getBookById = async (req, res) => {
    let { id } = req.params
    let data = await book.findOne({ id: id })
    if (data) {
        res.send(data)
    }
    else {
        // res.status(404).send('No books found');
        res.send("No books found")
    }
    // console.log("jdfj");

}

const addBook = async (req, res) => {
    let {
        title,
        author,
        category,
        publicationYear,
        pricer,
        quantity,
        description,
        imageUrl
    } = req.body

    let image
    if (req.file) {
        image = req.file.path
    }
    let bookData = {
        title,
        author,
        category,
        publicationYear,
        price: pricer,
        quantity,
        description,
        imageUrl
    }
    let data = await book.create(bookData)
    res.send(data)
}

const updateBook = async (req, res) => { }

const getAllBooks = async (req, res) => {
    let data = await book.find()
    res.send(data)
}
const deleteBook = async (req, res) => {
    const { id } = req.params;
    const deletedBook = await book.findByIdAndDelete({_id:id});
    if (!deletedBook) {
        return res.status(404).send('Book not found');
    }
    else {
        res.send(deleteBook)
    }
}


module.exports = { getBookById, addBook, updateBook, deleteBook, upload ,getAllBooks}   