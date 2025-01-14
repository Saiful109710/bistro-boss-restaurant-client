import React from "react";
import {
  FaBook,
  FaCalendar,
  FaComment,
  FaHome,
  FaList,
  FaPhoneAlt,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaUtensils,
  FaUtensilSpoon,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const DashBoard = () => {
  const [cart] = useCart();

  // Todo: get admin value from the database
  const isAdmin = true;
  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4 space-y-2">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  <FaUtensils></FaUtensils> Add Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook></FaBook> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUser></FaUser>All Users
                </NavLink>
              </li>
            </>
          ) : (
            <></>
          )}
          <div className="divider"></div>
          {/* shared menu */}
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch></FaSearch>Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaPhoneAlt></FaPhoneAlt> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard*/}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
