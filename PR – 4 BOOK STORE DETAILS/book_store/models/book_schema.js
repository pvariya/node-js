    const mongoose = require('mongoose')

    const bookSchema = mongoose.Schema({
        title: String,
        author: String,
        category: String,
        publicationYear: Number,
        price: Number,
        quantity: Number,
        description: String,
        imageUrl: String
    })

    const book = mongoose.model('book', bookSchema)
    module.exports = book
