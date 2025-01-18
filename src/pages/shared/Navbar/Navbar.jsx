import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [cart] = useCart();
  const [isAdmin] = useAdmin()

  const handleLogOutBtn = () => {
    logOutUser()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Order Food</NavLink>
      </li>
      {
        user && isAdmin &&  <li>
        <NavLink to="/dashboard/adminHome">AdminHome</NavLink>
      </li>
      }
      {
        user && !isAdmin &&  <li>
        <NavLink to="/dashboard/userHome">User Home</NavLink>
      </li>
      }
      <li>
        <Link to='/dashboard/cart'>
          <button className="btn">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-30 text-white bg-opacity-50 max-w-screen-xl  bg-black">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button onClick={handleLogOutBtn} className="btn btn-ghost">
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-ghost">Log In</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
