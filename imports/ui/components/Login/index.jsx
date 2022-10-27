import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";
import bcrypt from "bcryptjs";
import { FlowRouter } from "meteor/kadira:flow-router";

import { Admin } from "../../../api/admin";

export default function index() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    const admin = Admin.findOne({ username: data.username });

    bcrypt.compare(data.password, admin.password, function (err, res) {
      if (res) {
        sessionStorage.setItem("role", "admin");
        FlowRouter.go("/admin");
      }
    });
  };

  return (
    <div className="login">
      <div className="pen-title">
        <h1>HIRAETH LOGIN</h1>
        <div className="module form-module">
          <div className="form">
            <h2>Login to your account</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setData({ ...data, username: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              <button>Login</button>
            </form>
          </div>
          <div className="cta">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}
