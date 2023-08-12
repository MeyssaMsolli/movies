import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';

function App() {
  const [movies, setMovies] = useState([]);
  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState('');

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const handleTitleFilterChange = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleRateFilterChange = (event) => {
    setRateFilter(event.target.value);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      (rateFilter === '' || movie.rating >= parseFloat(rateFilter))
    );
  });

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter
        onTitleFilterChange={handleTitleFilterChange}
        onRateFilterChange={handleRateFilterChange}
      />
      <MovieList movies={filteredMovies} />
      <button
        className="add-movie-btn"
        onClick={() => {
          const title = prompt('Enter movie title:');
          const description = prompt('Enter movie description:');
          const posterURL = prompt('Enter poster URL:');
          const rating = parseFloat(prompt('Enter movie rating:'));
          if (title && description && posterURL && !isNaN(rating)) {
            addMovie({
              title,
              description,
              posterURL,
              rating,
            });
          } else {
            alert('Invalid input. Movie not added.');
          }
        }}
      >
        Add Movie
      </button>
    </div>
  );
}

export default App;
