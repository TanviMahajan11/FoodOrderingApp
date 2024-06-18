// Login.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../utils/userSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username) {
      dispatch(loginUser({ username }));
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        className="border border-gray-300  text-black rounded-md py-2 px-3"
        placeholder="Hello user ! "
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="bg-orange-400 hover:bg-blue-600 text-black py-2 px-4 rounded-lg"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
