const multer = require("multer");
const Movie = require("../models/movie.schem");

const getAllMovies = async (req, res) => {
  let data = await Movie.find();
  res.send(data);
};

const getMovieById = async (req, res) => {
  let data = await Movie.findById(req.params.id);
  res.send(data);
};

const addMovie = async (req, res) => {
    let { id } = req.cookies
    if (req.file) {
        req.body.img = req.file.path
    }
    req.body.userId = id
    let product = await Movie.create(req.body)
    res.send(product)
};

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

module.exports = { getAllMovies, getMovieById, addMovie, upload };
