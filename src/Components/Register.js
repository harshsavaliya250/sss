import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first, setFirst] = useState(false);
  var data;
  const register = () => {
    axios
      .post("http://localhost:5000/userRegister", {
        name: name,
        email: email,
        password: password,
      })
      .then(function (response) {
        // handle success
        data = response.data;
        console.log(data);
        if (data.id !== "") {
          setFirst(true);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  if (first) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="hold-transition register-page d-flex justify-content-center">
      <div className="register-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="../../index2.html" className="h1">
              <b>Admin</b>LTE
            </a>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Register a new membership</p>
            <form action="../../index.html" method="post">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      name="terms"
                      defaultValue="agree"
                    />
                    <label htmlFor="agreeTerms">
                      I agree to the <a href="#">terms</a>
                    </label>
                  </div>
                </div>
                {/* /.col */}
                <div className="col-4">
                  <button
                    type="button"
                    className="btn btn-primary btn-block"
                    onClick={register}
                  >
                    Register
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
            <div className="social-auth-links text-center">
              <a href="#" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2" />
                Sign up using Facebook
              </a>
              <a href="#" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2" />
                Sign up using Google+
              </a>
            </div>
            <Link to="/" className="text-center">
              I already have a membership
            </Link>
          </div>
          {/* /.form-box */}
        </div>
        {/* /.card */}
      </div>
    </div>
  );
};

export default Register;
