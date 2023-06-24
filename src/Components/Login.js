import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsername, setPassword } from "../store/authslice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setname] = useState("");
  const [password, setPass] = useState("");

  const handleSubmit = () => {
    // console.log(username, password);
    dispatch(setUsername(username));
    dispatch(setPassword(password));
    setTimeout(function () {
      navigate("/profile");
    }, 2000);
  };

  return (
    <div className="mx-auto vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      <h2>User login</h2>
      <div className="d-flex flex-column justify-content-center align-items-center gap-3">
        <div className="form-floating col">
          <input
            id="name"
            type="text"
            className="form-control"
            onChange={(event) => setname(event.target.value)}
            placeholder="Enter your Name"
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-floating col">
          <input
            id="password"
            type="password"
            className="form-control"
            onChange={(event) => setPass(event.target.value)}
            placeholder="Enter your Password"
          />
          <label htmlFor="password">Password</label>
        </div>
        <button className="btn btn-outline-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <br />
      <span className="bg-tertiary border border-1 p-2 rounded-2">
        For Demo credentials, use{" "}
        <span className="fw-bolder">Username:admin & password :123456</span>
      </span>
    </div>
  );
}

export default Login;
