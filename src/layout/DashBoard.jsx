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
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCart();

  // Todo: get admin value from the database
  const [isAdmin] = useAdmin();
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
                <NavLink to="/dashboard/addItems">
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
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaComment></FaComment> Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaList></FaList> My Bookings
                </NavLink>
              </li>
            </>
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
