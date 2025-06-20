import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {
  NETFLIX_LOGIN_BACKGROUND,
  USER_PROFILE_LOGO,
} from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  // const [loading, setLoading] = useState(false);  // might use later for personal addition to avoid multi clicks
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the form data
    const message = checkValidData(
      isSignInForm ? null : name.current?.value,
      email.current?.value,
      password.current?.value
    );

    setErrorMessage(message);

    if (message) {
      return;
    }

    // Sign In/Sign Up Logic here

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_PROFILE_LOGO,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser; // when we create a new user, displayName and photoURL are not updated quickly hence we have to pass dispatch action again to create a new user on top of it using its firebase name "auth.currentUser"
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " : " + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " : " + errorMessage);
        });
    }
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img src={NETFLIX_LOGIN_BACKGROUND} alt="netflix-login-background" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute py-4 px-8 bg-black/85 sm:w-1/2  xl:w-3/12 m-auto right-0 left-0 mt-28 rounded-lg flex flex-col text-white"
      >
        <h1 className="font-bold text-4xl mt-2 p-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="m-2 p-4 rounded-md border-2 border-gray-600"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="m-2 p-4 rounded-md border-2 border-gray-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="m-2 p-4 rounded-md border-2 border-gray-600"
        />
        <p className="font-semibold text-lg p-2 text-red-600">{errorMessage}</p>
        <button
          className="m-2 p-2 bg-red-600 rounded-md cursor-pointer hover:bg-red-700 transition-colors duration-500"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="m-2 py-2 underline cursor-pointer text-center"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix ? Sign up Now"
            : "Already a Netflix member? Sign In"}
        </p>
      </form>
    </>
  );
};

export default Login;
