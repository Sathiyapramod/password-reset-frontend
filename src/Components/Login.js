import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../General";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function makeLogin() {
    const newLogin = {
      username,
      password,
    };
    console.log(newLogin);
    const attemptLogin = await fetch(`${API}/password/signin`, {
      method: "POST",
      body: JSON.stringify(newLogin),
      headers: {
        "content-type": "application/json",
      },
    });
    if (attemptLogin.status === 401) {
      alert("Invalid Credentials !! ");
      navigate("/");
    } else {
      const result = await attemptLogin.json();
      // console.log(result);
      localStorage.setItem("token", result.token);
      navigate("/home");
    }
  }

  return (
    <div>
      <div className="border border-tertiary loginform mx-auto shadow">
        <div className="fs-1">Login</div>
        <div className="row mx-auto align-items-center gap-3">
          <div className="row mx-auto align-items-center">
            <div className="col-4">
              <label className="form-label">Username</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                className="form-control me-2"
                autoComplete="username"
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
          </div>
          <div className="row mx-auto align-items-center">
            <div className="col-4">
              <label className="form-label">Password</label>
            </div>
            <div className="col-8">
              <input
                type="password"
                autoComplete="current-password"
                className="form-control me-2"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              className="btn btn-outline-primary"
              onClick={() => makeLogin()}
            >
              Login
            </button>
          </div>
          <div>
            <button
              className="btn btn-outline-danger"
              onClick={() => navigate("/forgotpassword")}
            >
              Forgot Password
            </button>
          </div>
          <div>
            New to App. Register Here.....
            <Link to="/signup">Register as New User</Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
