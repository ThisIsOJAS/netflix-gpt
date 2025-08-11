import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filteredTrailer = json.results.filter(
      (video) => video.name == "Official Trailer" // Finding exact clip which is official trailer
    );

    const trailer =
      filteredTrailer.length > 0 ? filteredTrailer[0] : json.results[0]; // if trailer received, pick first otherwise use whichever first clip available for that movie

    dispatch(addTrailerVideo(trailer)); // Dispatching the trailer video to the Redux store
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos(); // video key = UWMzKXsY9A4
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMovieTrailer;
