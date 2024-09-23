const { default: mongoose } = require("mongoose")

const movieschema = new mongoose.Schema({
  title: String,
  release_year: Number,
  director: String,
  rating: Number,
  moviePhoto: String,
  userId: String,
  catagory: String,
});

const Movie = mongoose.model("Movie", movieschema);
module.exports = Movie;
