const express = require('express'); // import the express module.
const router = express.Router();  // creates a new router instance. 

const Movie = require('../Models/Movie.model'); // Import the Movie model


router.get('/', (req, res, next) => res.render('index')); // define route for the home page & faz aparecer o conteúdo?

router.get('/movies', async (req, res, next) => {
    try {
      
      const movies = await Movie.find();  // obter todos os filmes da base de dados através do modelo Movie
      
  console.log('Movies:', movies);
      res.render('movies', { movies }); // faz aparecer o conteúdo quando um GET request é feito?
    }
    
    catch (error) {
         next(error); 
    }
  });


  // New route for displaying movie details
router.get('/movies/:id', async (req, res, next) => {
    try {
      const movieId = req.params.id;
      const movie = await Movie.findById(movieId);
      console.log('Movie details:', movie); 
  
      if (!movie) {
        return res.status(404).render('not-found'); // Movie not found
      }
  
      res.render('movie-details', { movie });
    } catch (error) {
      console.error('Error fetching movie details:', error);
      next(error);
    }
  });

module.exports = router;
