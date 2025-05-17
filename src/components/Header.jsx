import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
        <img
          className="w-44"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
        />
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
