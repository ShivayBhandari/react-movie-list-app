import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.release_date}</p>
      </div>

      <div>
        {/* <img src={movie.poster_path} alt={movie.original_title} /> */}
        <img src="https://via.placeholder.com/400" alt={movie.original_title} />
      </div>

      <div>
        <span>MOVIE</span>
        <h3>{movie.original_title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
