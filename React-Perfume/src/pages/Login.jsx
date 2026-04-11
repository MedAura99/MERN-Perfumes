import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(
        "https://mern-perfumes-production.up.railway.app/api/auth/login",
        {
          username: username.trim(),
          password: password.trim(),
        }
      );

      console.log("LOGIN RESPONSE:", res.data);

      if (!res.data.admin) {
        alert("Invalid server response");
        return;
      }

      localStorage.setItem("admin", JSON.stringify(res.data.admin));

      alert("Login Successful");

      navigate("/admin");
    } catch (error) {
      console.log("LOGIN ERROR:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Invalid login");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Admin Login</h1>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;