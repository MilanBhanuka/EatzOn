import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import PropTypes from "prop-types";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {

  const {url,setToken} = useContext(StoreContext)

  const [currState, setCurrState] = useState("Login");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };



  const onLogin = async (event) => {
    event.preventDefault();
    let newURL = url;
    if(currState==="Login"){
      newURL += "/api/user/login"
    }else{
      newURL += "/api/user/register"
    }

    const response = await axios.post(newURL,data);
    console.log(response.data)

    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token)
      setShowLogin(false)
    }else{
      alert(response.data.message)
    }
  }



  return (
    <div className="absolute z-50 w-full h-full bg-black bg-opacity-70  grid ">
      <form onSubmit={onLogin} className="place-self-center max-w-max text-gray-400 bg-white flex flex-col gap-6 px-8 py-7 rounded-lg ">
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
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Name"
              className="border-2 border-red-900 p-2 rounded-lg  "
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Email"
            className="border-2 border-red-900 p-2 rounded-lg  "
          />
          <input
            name="password"
            onChange={onChangeHandler}
            type="password"
            placeholder="Password"
            className="border-2 border-red-900 p-2 rounded-lg  "
          />
        </div>
        <button type="submit" className="p-2 rounded-lg bg-red-500 text-black">
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
