import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import lang from "../utils/languageConstants";
import ai from "../utils/oGeminiAi"; // Import the Gemini AI utility
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef("");

  // search movie return from gemini in TMDB

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const promptQuery =
      "Act as a movie recommendation system. " +
      searchText.current.value +
      ". Only give me list of 5 movies, comma seperated like the example result given ahead. Example result: 'Movie1, Movie2, Movie3, Movie4, Movie5'";

    const geminiResults = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: promptQuery,
    });
    // console.log(geminiResults.text);  ---> this is how gemini return the results

    if (!geminiResults.text) {
      console.error("No results returned from Gemini AI.");
      return;
      // complete error display box later
    }

    const gptMovies = geminiResults.text.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie)); // this will return an array of promises
    const tmdbResults = await Promise.all(promiseArray); // when all the promises resolved then we will get the tmdb results
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchplaceholder}
          className="p-4 m-4 rounded-md bg-white col-span-9"
        ></input>
        <button
          className="m-4 py-2 px-4 bg-red-700 text-white rounded-md cursor-pointer col-span-3 hover:bg-red-800 transition-colors duration-500"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].gptSearchButton}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
