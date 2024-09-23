const {Router} = require('express');
const { getAllMovies, getMovieById, addMovie, upload } = require('../controllers/movie.contoller');

const movieRouter = Router()


movieRouter.get("/",getAllMovies)
movieRouter.get("/getMovieById/:id",getMovieById)
movieRouter.post("/addMovie",upload.single('img'), addMovie)

module.exports = movieRouter