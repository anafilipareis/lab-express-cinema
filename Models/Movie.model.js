const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({   // creates a schema:  structure of documents that can be stored in a MongoDB collection
  title: { type: String, required: true },
  director: { type: String, required: true },  // Each movie document will have fields such as title, director, stars, etc
  stars: { type: [String], required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  showtimes: { type: [String], required: true },
});

const Movie = mongoose.model('Movie', movieSchema); // creates the Movie model based on that schema. Modelo foi definido. Usar primeira letra grande no nome do modelo

module.exports = Movie; // Movie model is exported to be used in other parts of the application