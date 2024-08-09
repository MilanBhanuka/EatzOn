import { useContext, useState } from "react";
import { assets } from "./../assets/assets";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { StoreContext } from "../context/StoreContext";

const Navbar = ({setShowLogin}) => {

        const [ menu, setMenu ] = useState("home");

        const {getTotalCartAmount,getTotalCartItems} = useContext(StoreContext);

  return (
    <div className="bg-red-200 px-5 py-0 flex justify-between items-center">
      <Link to='/' >
      <img src={assets.logoo} alt="logo" className="h-20" />
      </Link>

      <ul className="flex list-none gap-5 text-red-500 text-lg cursor-pointer">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"pb-1  border-b-2 border-red-500":""}>Home</Link>
        <a href="#explore-menu" onClick={()=>setMenu("menu")} className={menu==="menu"?"pb-1  border-b-2 border-red-500":""}>Menu</a>
        <a href="#app-download" onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"pb-1  border-b-2 border-red-500":""}>Mobile-app</a>
        <a href="#footer" onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"pb-1  border-b-2 border-red-500":""}>Contact us</a>
      </ul>
      <div className="flex items-center gap-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 fill-red-950 hover:fill-red-500"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
            clipRule="evenodd"
          />
        </svg>

        <div className=" relative">
          <Link to='/cart'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 fill-red-950 hover:fill-red-500"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>
          </Link>
          <div className={getTotalCartAmount()===0?"":"absolute min-w-4 min-h-3 bg-red-700 text-white rounded-full -top-2 -right-2 text-xs justify-center text-center"}>
            {getTotalCartItems()===0?"":getTotalCartItems()}
          </div>
        </div>

        <button onClick={()=>setShowLogin(true)} className="bg-red-950 text-white px-5 py-2 rounded-full hover:bg-red-500 ">
          sign in
        </button>
      </div>
    </div>
  );
};


Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired
};

export default Navbar;
