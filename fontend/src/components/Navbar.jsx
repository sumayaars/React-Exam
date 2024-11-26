import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from 'react-toastify';

export default function Navbar() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Logged in successfully!");
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    loginWithRedirect();
  };
  
  const handleLogout = () => {
    toast.success("Logged out successfully!");
    logout({ returnTo: window.location.origin });
  };


  
  
  return (
    <>
      <div className="navbar bg-gray-100 shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow-lg"
            >
              <li><NavLink to="/" className="text-sm font-medium text-gray-800  px-4 py-2  rounded-md  hover:bg-gray-800 hover:text-white">Home</NavLink></li>
              <li><NavLink to="/about" className="text-sm font-medium text-gray-800  px-4 py-2  rounded-md  hover:bg-gray-800 hover:text-white">About</NavLink></li>
              {/* {isAuthenticated && (
              <li>
             <button onClick={() => logout({ returnTo: window.location.origin })} className="justify-between w-full flex items-center">
              Log Out
             </button>
            </li>
            )} */}
            </ul>
          </div>
          <NavLink className="btn btn-ghost text-xl" to="/">SUMA_YA</NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            <li><NavLink to="/" className=" text-sm font-medium text-gray-800  px-4 py-2  rounded-md  hover:bg-gray-800 hover:text-white ">Home</NavLink></li>
            <li><NavLink to="/about" className="text-sm font-medium text-gray-800  px-4 py-2  rounded-md  hover:bg-gray-800 hover:text-white">About</NavLink></li>
          </ul>
        </div>

        <div className="flex-none ml-4">

  {isAuthenticated ? (
  
    <div className="dropdown dropdown-end ml-2">
      <div tabIndex={0} role="button" className="btn btn-ghost avatar">
        <div className="w-8 rounded-full">
          <img
            alt="User Avatar"
            src={user.picture || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-32 p-2 shadow z-50"
      >
        <li className="w-full">
          <NavLink to="/profile" className="justify-between w-full flex items-center">My Profile</NavLink>
        </li>
        <li className="w-full">
          <button onClick={handleLogout} className="justify-between w-full flex items-center">Log Out</button>
        </li>
      </ul>
    </div>
  ) : (
    <button className=' text-sm font-medium text-gray-800  px-4 py-2  rounded-md  hover:bg-gray-800 hover:text-white  ' onClick={handleLogin}>Log In</button>
  )}
</div>

      </div>
      
    </>
  
  );
}
