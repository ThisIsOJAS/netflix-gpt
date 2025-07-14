import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (movies == null) return; // Early return if movies are not available

  return (
    <div>
      <h1 className="text-3xl font-bold py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll overflow-y-hidden">
        <div className="flex gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
