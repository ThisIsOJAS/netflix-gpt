import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_large.jpg"
          alt="netflix-login-background"
        />
      </div>
      <form className="absolute py-4 px-8 bg-black/85 w-3/12 h-3/4 m-auto right-0 left-0 mt-28 rounded-lg flex flex-col text-white">
        <h1 className="font-bold text-4xl mt-2 p-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="m-2 p-4 rounded-md border-2 border-gray-600"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="m-2 p-4 rounded-md border-2 border-gray-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="m-2 p-4 rounded-md border-2 border-gray-600"
        />
        <button className="m-2 p-2 bg-red-600 rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="m-2 py-2 underline cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix ? Sign up Now"
            : "Already a Netflix member? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
