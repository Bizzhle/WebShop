import React, { useState } from "react";

function Register() {
  // const [error, setError] = useState("");
  // const [name, setName] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="login">
      <div className="login_wrapper">
        <h1>REGISTER</h1>
        <form action="" className="form">
          <input type="text" value="" placeholder="name" />
          <input type="text" value="" placeholder="lastname" />

          <input
            type="text"
            value=""
            placeholder="username"
            // onChange={(e) => setUsername(e.target.value)}
          />
          <input type="text" value="" placeholder="email" />

          <input
            type="password"
            value=""
            placeholder="password"
            // onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            value=""
            placeholder="confirm password"
            // onChange={(e) => setPassword(e.target.value)}
          />

          <span className="agreement">
            {" "}
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>

          <button className="button">CREATE</button>
          {/* {error && <p className="error">Something went wrong...</p>} */}
          {/* <a>DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a>CREATE A NEW ACCOUNT</a> */}
        </form>
      </div>
    </div>
  );
}

export default Register;
