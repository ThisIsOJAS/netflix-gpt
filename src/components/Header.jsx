import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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
        console.error("Sign out error: ", error); // just dummy, we will properly implement it in error page
        navigate("/error"); // we haven't made this error page yet (near the end of netflix ep-1)
      });
  };

  return (
    <>
      <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-44" src={NETFLIX_LOGO} alt="netflix-logo" />
        {user && (
          <div className="flex items-center gap-4">
            <img
              className="w-10"
              src={user.photoURL}
              alt="netflix-profile-logo"
            />
            <p className="text-white font-semibold">{user.displayName}</p>
            <button
              className="p-2 rounded-lg bg-black text-white border-2 border-gray-600 hover:bg-gray-800 transition-colors duration-500 cursor-pointer"
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
