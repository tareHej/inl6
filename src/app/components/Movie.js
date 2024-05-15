const Movie = ({ movie, removeMovie }) => {
    return (
      <div>
        <span>{movie.title}</span>
        <span>
          {'★'.repeat(movie.rating)}
          {'☆'.repeat(5 - movie.rating)}
        </span>
        
        <button id="deleteKnapp" onClick={removeMovie}>❌</button>
      </div>
    );
  };
  
  export default Movie;
  