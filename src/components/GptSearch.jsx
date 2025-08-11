import { NETFLIX_LOGIN_BACKGROUND } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <img
        src={NETFLIX_LOGIN_BACKGROUND}
        alt="netflix-login-background"
        className="fixed -z-10"
      />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
