import React, { useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const doLogin = () => {
    if (username?.length && password?.length) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user Signed in", user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
      console.log(`Username: ${username}, Password: ${password}`);
    } else {
      alert("Please fill all feilds");
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            value={username}
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            className="input-field"
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="input-field"
            onChange={handlePasswordChange}
          />
        </div>
        <Link className="btn-login" onClick={() => doLogin()} to={""}>
          Login
        </Link>
      </form>
    </div>
  );
}

export default Login;
