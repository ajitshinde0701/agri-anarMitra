import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [extraField, setExtraField] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login Successful!");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <label>Select Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">--Select Role--</option>
            <option value="farmer">Farmer</option>
            <option value="fertilizer-store">Fertilizer Store</option>
            <option value="merchant">Merchant</option>
            <option value="advisor">Advisor</option>
          </select>

          {(role === "merchant" || role === "fertilizer-store") && (
            <>
              <label>Store Name</label>
              <input
                type="text"
                placeholder="Enter Store Name"
                value={extraField}
                onChange={(e) => setExtraField(e.target.value)}
                required
              />
            </>
          )}

          {role === "advisor" && (
            <>
              <label>Specialization</label>
              <input
                type="text"
                placeholder="Enter Your Specialization"
                value={extraField}
                onChange={(e) => setExtraField(e.target.value)}
                required
              />
            </>
          )}

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
