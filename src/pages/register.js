import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/users/register", {
        name,
        email,
        password,
      });
      alert("Registration successful!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div className="body">
      <div
        style={{ padding: "30px", maxWidth: "500px", margin: "auto" }}
        className="register-container"
      >
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              required
              value={name}
              placeholder="Your Name"
              className="card-body"
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label>Email:</label>
            <input
              type="email"
              required
              value={email}
              placeholder="Your Email"
              className="card-body"
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label>Password:</label>
            <input
              type="password"
              required
              value={password}
              className="card-body"
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <button style={{ marginTop: "15px" }} type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
