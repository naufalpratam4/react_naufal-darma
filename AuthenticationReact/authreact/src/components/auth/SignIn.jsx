import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const dummyUser = { username: "admin", password: "password123" };
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.password === password
    ) {
      localStorage.setItem("isLoggedIn", true);
      // Redirect to homepage after successful login
      window.location.href = "/homepage";
    } else if (
      username === dummyUser.username &&
      password === dummyUser.password
    ) {
      localStorage.setItem("user", JSON.stringify(dummyUser));
      localStorage.setItem("isLoggedIn", true);
      // Redirect to homepage after successful login
      window.location.href = "/homepage";
    } else {
      setErrorMessage("Username atau password tidak valid");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default Login;
