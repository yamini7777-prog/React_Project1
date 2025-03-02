
//! login.jsx Component
import React, { useContext, useState } from "react";
import { Services } from "../Services/Services";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { ContextApi } from "../Context/Context";

const Login = () => {
  let { globaldata, setGlobaldata } = useContext(ContextApi);
  let [state, setState] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    let { email, password } = state;
    let payload = { email, password };

    let user = await Services.userlogin(payload);
    console.log(globaldata);
    if (user) {
      setGlobaldata(user);
      navigate("/ainotes");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginContainer}>
        <h2>Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" name="email" onChange={handleChange} required />
          </div>

          <div>
            <label>Password:</label>
            <input type="password" name="password" onChange={handleChange} required />
          </div>

          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
