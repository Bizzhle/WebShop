import React, { useState } from "react";
import Footer from "../components/Footer";

function Login() {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className=" login_wrapper">
        <h1>SIGN IN</h1>
        <form action="" className="form">
          <input
            type="text"
            value="name"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            value="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button">LOGIN</button>
          {error && <p className="error">Something went wrong...</p>}
          <a>DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a>CREATE A NEW ACCOUNT</a>
        </form>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Login;
