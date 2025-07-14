import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchplaceholder}
          className="p-4 m-4 rounded-md bg-white col-span-9"
        ></input>
        <button className="m-4 py-2 px-4 bg-red-700 text-white rounded-md cursor-pointer col-span-3 hover:bg-red-800 transition-colors duration-500">
          {lang[langKey].gptSearchButton}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
