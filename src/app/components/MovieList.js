import Movie from './Movie';

const MovieList = ({ movies, removeMovie }) => {
  return (
    <div>
      {movies.map((movie, index) => (
        <Movie key={index} movie={movie} removeMovie={() => removeMovie(index)} />
      ))}
    </div>
  );
};

export default MovieList;
