import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import classes from "./Login.module.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      alert("Email Required");
    } else {
      dispatch(
        login({
          name: name,
          email: email,
          password: password,
          loggedIn: true,
        })
      );
    }
  };
  return (
    <div className={classes.login}>
      <h1>Login Here</h1>
      <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={`btn ${classes.loginBtn}`} onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
