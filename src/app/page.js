'use client';
import { useState, useEffect } from 'react';
import UserInput from './components/UserInput';
import MovieList from './components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

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

  return (
    <div>
      <h1>Min filmlista</h1>
      <UserInput addMovie={addMovie} />
      <h2>Inlagda filmer:</h2>
      <MovieList movies={movies} removeMovie={removeMovie} />
    </div>
  );
};

export default Home;
