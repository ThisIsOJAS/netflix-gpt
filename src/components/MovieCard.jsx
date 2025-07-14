import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48">
      <img
        alt="Movie Card"
        src={IMAGE_CDN_URL + posterPath}
        className="cursor-pointer transform hover:scale-110 transition-transform duration-300"
      />
    </div>
  );
};

export default MovieCard;
