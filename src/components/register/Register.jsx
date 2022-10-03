import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import Axios from "axios";

const initialRegisterState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  repeatPassword: "",
};

function Register() {
  const [form, setForm] = useState(initialRegisterState);
  const [error, setError] = useState("");
  const [passwordVisibility, setpasswordVisibility] = useState(false);

  const handleSubmit = async (events) => {
    events.preventDefault();
    try {
      if (form.first_name === "" || form.last_name === "" || form.email === "" || form.password === "" || form.repeatPassword !== form.password)
      return setError("All fields is required");
      setError("");

      const response = await Axios.post("http://localhost:3000/register", {
        firstName: form.first_name,
        lastName: form.last_name,
        email: form.email,
        password: form.password,
        repeatPassword: form.password,
      })

      console.log(response);

    //   console.log(form);
      setForm(initialRegisterState);
    } catch (error) {
        const errors = error.response.data
        console.log({ err: errors })
    }
  };

  const handleChange = (events) => {
    events.preventDefault();
    const { name, value } = events.target;
    setForm((input) => ({ ...input, [name]: value }));
  };

  const handlepasswordVisibility = () => {
    setpasswordVisibility(passwordVisibility ? false : true);
  };

  useEffect(() => {
    document.title = form.first_name + " " + form.last_name;
  });

  return (
    <>
      <div className="registerCon">
        <h1 className="wlc">Welcome</h1>
        <p className="cyAccount">Create Your Account</p>
        {error && <div className="error">{error}</div>}
        <form className="registerForm">
          <label className="registerLabel">First Name</label>
          <input
            className="registerEmail"
            onChange={handleChange}
            value={form.first_name}
            name="first_name"
            type="text"
          ></input>

          <label className="registerLabel">Last Name</label>
          <input
            className="registerEmail"
            onChange={handleChange}
            value={form.last_name}
            name="last_name"
            type="text"
          ></input>

          <label className="registerLabel">Email</label>
          <input
            className="registerEmail"
            onChange={handleChange}
            value={form.email}
            name="email"
            type="text"
          ></input>

          <label className="registerLabel">Password</label>
          <input
            className="registerPassword"
            onChange={handleChange}
            value={form.password}
            name="password"
            type={passwordVisibility ? "text" : "password"}
          ></input>

          <label className="registerLabel">Confirm Password</label>
          <input
            className="registerPassword"
            onChange={handleChange}
            value={form.repeatPassword}
            name="repeatPassword"
            type={passwordVisibility ? "text" : "password"}
          />

          <input
            type="checkbox"
            className="visibility"
            onClick={handlepasswordVisibility}
          ></input>
          <input
            type="checkbox"
            className="visibilityConfirm"
            onClick={handlepasswordVisibility}
          ></input>

          <button
            className="registerGet-started"
            type="submit"
            onClick={handleSubmit}
          >
            Get Started
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
