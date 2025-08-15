import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signing in or signing up
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when the component unmounts
    // This is important to prevent memory leaks and unwanted behavior
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.error("Sign out error: ", error);
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <>
      <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img
          className="w-44 mx-auto md:mx-0"
          src={NETFLIX_LOGO}
          alt="netflix-logo"
        />
        {user && (
          <div className="flex justify-between md:items-center gap-4">
            {showGptSearch && (
              <select
                className="py-2 pl-2 pr-4 rounded-sm border-2 border-amber-50 bg-red-700 text-white cursor-pointer"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.key} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="flex items-center py-2 px-4 bg-amber-50 text-black rounded-md border-2 border-red-600 hover:bg-gray-400 transition-colors duration-500 cursor-pointer"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? (
                "Home"
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 48 48"
                  >
                    <radialGradient
                      id="oDvWy9qKGfkbPZViUk7TCa_eoxMN35Z6JKg_gr1"
                      cx="-670.437"
                      cy="617.13"
                      r=".041"
                      gradientTransform="matrix(128.602 652.9562 653.274 -128.6646 -316906.281 517189.719)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#1ba1e3"></stop>
                      <stop offset="0" stopColor="#1ba1e3"></stop>
                      <stop offset=".3" stopColor="#5489d6"></stop>
                      <stop offset=".545" stopColor="#9b72cb"></stop>
                      <stop offset=".825" stopColor="#d96570"></stop>
                      <stop offset="1" stopColor="#f49c46"></stop>
                    </radialGradient>
                    <path
                      fill="url(#oDvWy9qKGfkbPZViUk7TCa_eoxMN35Z6JKg_gr1)"
                      d="M22.882,31.557l-1.757,4.024c-0.675,1.547-2.816,1.547-3.491,0l-1.757-4.024	c-1.564-3.581-4.378-6.432-7.888-7.99l-4.836-2.147c-1.538-0.682-1.538-2.919,0-3.602l4.685-2.08	c3.601-1.598,6.465-4.554,8.002-8.258l1.78-4.288c0.66-1.591,2.859-1.591,3.52,0l1.78,4.288c1.537,3.703,4.402,6.659,8.002,8.258	l4.685,2.08c1.538,0.682,1.538,2.919,0,3.602l-4.836,2.147C27.26,25.126,24.446,27.976,22.882,31.557z"
                    ></path>
                    <radialGradient
                      id="oDvWy9qKGfkbPZViUk7TCb_eoxMN35Z6JKg_gr2"
                      cx="-670.437"
                      cy="617.13"
                      r=".041"
                      gradientTransform="matrix(128.602 652.9562 653.274 -128.6646 -316906.281 517189.719)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#1ba1e3"></stop>
                      <stop offset="0" stopColor="#1ba1e3"></stop>
                      <stop offset=".3" stopColor="#5489d6"></stop>
                      <stop offset=".545" stopColor="#9b72cb"></stop>
                      <stop offset=".825" stopColor="#d96570"></stop>
                      <stop offset="1" stopColor="#f49c46"></stop>
                    </radialGradient>
                    <path
                      fill="url(#oDvWy9qKGfkbPZViUk7TCb_eoxMN35Z6JKg_gr2)"
                      d="M39.21,44.246l-0.494,1.132	c-0.362,0.829-1.51,0.829-1.871,0l-0.494-1.132c-0.881-2.019-2.467-3.627-4.447-4.506l-1.522-0.676	c-0.823-0.366-0.823-1.562,0-1.928l1.437-0.639c2.03-0.902,3.645-2.569,4.511-4.657l0.507-1.224c0.354-0.853,1.533-0.853,1.886,0	l0.507,1.224c0.866,2.088,2.481,3.755,4.511,4.657l1.437,0.639c0.823,0.366,0.823,1.562,0,1.928l-1.522,0.676	C41.677,40.619,40.091,42.227,39.21,44.246z"
                    ></path>
                  </svg>
                  GPT
                </>
              )}
            </button>
            <img
              className="hidden md:block w-10"
              src={user.photoURL}
              alt="netflix-profile-logo"
            />
            <p className="hidden md:block text-white font-semibold">
              {user.displayName}
            </p>
            <button
              className="p-2 rounded-lg bg-black text-white border-2 border-red-600 hover:bg-gray-800 transition-colors duration-500 cursor-pointer"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
