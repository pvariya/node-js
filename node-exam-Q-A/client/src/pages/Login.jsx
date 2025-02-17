import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../Api/Axios";


const Login = () => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post('/user/login', formData);
      alert(res.data.message);
      localStorage.setItem('token', res.data.tokendata);
      navigate('/');
    } catch (error) {
    
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError('Network error or server is down');
      }
    }
  };
  

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="login"
          placeholder="Email or Username"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
