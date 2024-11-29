import { message } from "antd";
import axios from "axios";
import React from "react";
// import { useState, } from "react";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";
import { useDispatch } from "react-redux";
import API_URL from "../../config";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post(`${API_URL}/admin-login`, user);
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.success);
        localStorage.setItem("token", JSON.stringify(response.data));
        // window.location.href = '/admin';
        navigate("/admin");
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <div className="w-96 flex flex-col gap-6 p-8 shadow-lg rounded-lg border border-gray-400 bg-white">
        <h1 className="text-3xl font-semibold text-gray-800 text-center opacity-85">
          Portfolio - Admin Login
        </h1>
        <hr className="border-t-2 border-gray-300" />

        <input
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Username"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
        />

        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
        />

        <button
          className="bg-primary text-white p-3 rounded-md font-semibold hover:bg-primary-dark transition duration-200"
          onClick={login}
        >
          Login
        </button>
        <button
          className="bg-white text-primary border border-primary p-3 rounded-md font-semibold hover:bg-primary hover:text-white transition duration-200 " 
          onClick={()=>navigate(`/`)} 
        >
          Return
        </button>
      </div>
    </div>
  );
}

export default Login;
