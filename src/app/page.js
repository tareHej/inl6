'use client';
import { useState, useEffect } from 'react';
import UserInput from './components/UserInput';
import MovieList from './components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [sortBy, setSortBy] = useState('title');

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    setMovies(storedMovies);
  }, []);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const removeMovie = (index) => {
    const newMovies = movies.filter((_, i) => i !== index);
    setMovies(newMovies);
  };


  const sortMovies = (movies, option) => {
    return [...movies].sort((a, b) => {
      if (option === 'title') {
        return a.title.localeCompare(b.title);
      } else if (option === 'rating') {
        return b.rating - a.rating;
      }
    });
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div>
      <h1>Min filmlista</h1>
      <UserInput addMovie={addMovie} />


      <h2>Inlagda filmer:</h2>
      <label>Sortera efter: </label>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="title">Titel</option>
        <option value="rating">Betyg</option>
      </select>

      <MovieList movies={sortMovies(movies, sortBy)} removeMovie={removeMovie} />
    </div>
  );
};

export default Home;
