import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { Button } from "flowbite-react";


const Header = () => {

  const {user, logout} = useContext(AuthContext)
  const imgURL = 'https://i.ibb.co/72YHGhP/logo.png'
 

  const handleLogout = ()=>{
    logout()
    .then()
    .catch(error => console.log(error))
  }
  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-[#9333EA]">
                <Link to='/'>Home</Link>
              </li>
              <li className="text-[#9333EA]">
              <Link to='/blog'>Blog</Link>
            </li>
              {/* <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li> */}
             
            </ul>
          </div>
          <div  className="w-20 rounded-full ">
            <img src={imgURL} alt="" />
          </div>
          <a className="btn btn-ghost normal-case text-xl text-[#9333EA] ">Chef-of-india</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-[#9333EA]">
            <Link to='/'>Home</Link>
            </li>
            {/* <li tabIndex={0}>
              <a>
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li> */}
            <li className="text-[#9333EA]">
              <Link to='/blog'>Blog</Link>
            </li>
          </ul>
        </div>
       
        <div className="navbar-end">
        {user && <p className="me-3 font-bold text-xs">{user?.displayName||user?.email}</p>}
        { user ? 
          <button onClick={handleLogout} className="btn bg-[#9333EA]">logout</button> :
         <Link to="/login">
          <button className="btn bg-[#9333EA]">login</button>
         </Link>
        }
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar mx-4">
        <div className="w-10 rounded-full">
          <img title={user?.displayName} src={user?.photoURL}/>
       
        
        </div>
      </label>
        </div>
      
      </div>
    </div>
  );
};

export default Header;
