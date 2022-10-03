import React from "react";
import "./style.css";
import { useState } from "react";

const initialLoginState = {email: "", password: ""}

function Login() {

  const [ loginForm, setLoginForm ] = useState(initialLoginState);
  const [ error, setError ] = useState("");


  const handleSubmit = (events) => {
    events.preventDefault();
    if (loginForm.email === "" || loginForm.password === "")
    return setError("Input is required");
    setError("");
    console.log(loginForm);       
    setLoginForm(initialLoginState); 
  }

  const handleChange = (events) => {
    const { name, value } = events.target;
    setLoginForm((key) => ({...key, [name]: value}));
  }

  return (
    <div className="myHomeIsMyLogin">
      {error && <div className="inputRequired">{error}</div>}
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">Email</label>
        <input className="email" onChange={handleChange} value={loginForm.email} name="email" type="text"></input>

        <label className="label">Password</label>
        <input className="password" onChange={handleChange} value={loginForm.password} name="password" type="text"></input>

        <div className="rememberme-forgotpassword-con">
          <input type="checkbox" checked="checked"></input>
          <label className="check-box">Remember Me</label>
          <a className="fogot-password">Forgot Password</a>
        </div>

        <button className="get-started">Get Started</button>
      </form>
    </div>
  );
}

export default Login;
