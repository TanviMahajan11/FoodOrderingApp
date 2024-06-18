import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { logoutUser } from "../utils/userSlice";
import Login from "./Login";

const Header = () => {
  const status = useOnlineStatus();
  const dispatch = useDispatch();
  const loggedUser = useSelector((store) => store.user.loggedUser);
  const cartItems = useSelector((store) => store.cart.items);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div className="flex shadow-md justify-between items-center p-4 bg-gray-600 sticky top-0 z-10">
      <div className="flex items-center">
        <img className="w-20 h-20" src={LOGO_URL} alt="Logo" />
        <div className="ml-4 text-xl italic font-semibold text-yellow-300 leading-tight">
          <span>Streamlining meal ordering</span><br />
          <span>for busy lifestyles</span>
        </div>
      </div>

      <div className="flex items-center ml-auto">
        <ul className="flex space-x-6 text-lg text-white">
          <li className="px-4 hover:text-yellow-400">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-yellow-400">
            <Link to="/contacts">Contact Us</Link>
          </li>
          <li className="px-4 font-bold relative hover:text-yellow-400">
            <Link to="/cart">
              Cart&nbsp;
              {cartItems.length > 0 && (
                <span className="bg-yellow-500 text-black px-2 py-1 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>
          <li className="px-4 relative">
            {loggedUser ? (
              <>
                <span className="text-lg text-white mr-4">Hello, {loggedUser}</span>
                <button
                  className="text-lg text-white px-4 py-2 hover:text-orange-500"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <Login /> 
            )}
          </li>
          <li className="px-4 relative items-center space-x-2 flex">
            <span className="text-sm">{status ? "🟢" : "🔴"}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
