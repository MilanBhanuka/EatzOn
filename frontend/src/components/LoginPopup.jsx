import { useState } from "react";
import { assets } from "../assets/assets";
import PropTypes from "prop-types";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="absolute z-50 w-full h-full bg-black bg-opacity-70  grid ">
      <form className="place-self-center max-w-max text-gray-400 bg-white flex flex-col gap-6 px-8 py-7 rounded-lg ">
        <div className="flex justify-between items-center text-black bg-">
          <h2 className="text-xl font-bold">{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="cross"
                className="w-3 cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-5 ">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              placeholder="Name"
              className="border-2 border-red-900 p-2 rounded-lg  "
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="border-2 border-red-900 p-2 rounded-lg  "
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-red-900 p-2 rounded-lg  "
          />
        </div>
        <button className="p-2 rounded-lg bg-red-500 text-black">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="flex  gap-2 ">
          <input type="checkbox" required />
          <p className="text-sm">
            By continuing, you agree to our User Agreement and Privacy Policy.
          </p>
        </div>
        {currState === "Login" ? (
          <p className="self-center">
            Create a new account?<span className="cursor-pointer text-red-500 hover:underline" onClick={()=>setCurrState("Sign Up")}> Click here</span>
          </p>
        ) : (
          <p className="self-center">
            Already have a account?<span className="cursor-pointer text-red-500 hover:underline" onClick={()=>setCurrState("Login")}> Login</span>
          </p>
        )}
      </form>
    </div>
  );
};

LoginPopup.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default LoginPopup;
