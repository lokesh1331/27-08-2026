import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "SHAIK AFROSE",
    email: "afrose@kluniversity.in",
    password: "12345678",
    confirmPassword: "12345678",
    phone: "1234567890",
    gender: "Male",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Registration successful!");
  };

  return (
    <div className="page">
      <div className="registration-card">

        <div className="title">
          <div className="user-logo">●</div>
          <h1>Registration Form</h1>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="form-group">
            <label>Name</label>
            <div className="input-box">
              <span className="icon">♙</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email</label>
            <div className="input-box">
              <span className="icon">✉</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>
            <div className="input-box">
              <span className="icon">🔒</span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label>Confirm Password</label>
            <div className="input-box">
              <span className="icon">🔒</span>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                required
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label>Phone Number</label>
            <div className="input-box">
              <span className="icon">⌕</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
              />
            </div>
          </div>

          {/* Gender */}
          <div className="form-group">
            <label>Gender</label>
            <div className="input-box select-box">
              <span className="icon">♙</span>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <span className="arrow">⌄</span>
            </div>
          </div>

          {/* Register Button */}
          <button type="submit" className="register-btn">
            <span>♟</span> Register
          </button>

        </form>

        {/* Login */}
        <div className="login-text">
          Already have an account?{" "}
          <a href="#login">Login</a>
        </div>

      </div>
    </div>
  );
}

export default App;