import axios from "axios";
import { data } from "jquery";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[message,setMessage]=useState('');
    const [first, setFirst] = useState(false);

    const login=()=>{
      let data;
      axios
      .post("http://localhost:5000/userLogin",{
          email:email,
          password:password
      })
      .then(function(response){
        data=response.data
        console.log(data)
        if(data._id!==' '){
          localStorage.setItem("Username",data.name)
          localStorage.setItem("userId", data._id);
          alert("data match")
          setFirst(true)
        }
      })
      .catch(function(error){
        console.log(error)
        setMessage('You Are Not Registerd')
      })
    }
  if(first){
    return <Navigate to='/dashboard'/>
  }
  else{
  return (
    <>
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <a className="h1">
                <b>Admin</b>LTE
              </a>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              {message === "" ? (
                <></>
              ) : (
                <div
                  className="alert alert-danger fs-5 d-flex justify-content-center align-items-center"
                  role="alert"
                >
                  <svg
                    className="bi flex-shrink-0 me-2"
                    width={24}
                    height={24}
                    role="img"
                    aria-label="Danger:"
                  >
                    <use xlinkHref="#exclamation-triangle-fill" />
                  </svg>
                  <div className="opacity-100">{message}</div>
                </div>
              )}

              <form action="../../index3.html" method="post">
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
                      <span className="fas fa-envelope"></span>
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
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                  </div>

                  <div className="col-4">
                    <button
                      type="button"
                      onClick={login}
                      className="btn btn-primary btn-block"
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </form>

              <div className="social-auth-links text-center mt-2 mb-3">
                <a className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2"></i> Sign in using
                  Facebook
                </a>
                <a className="btn btn-block btn-danger">
                  <i className="fab fa-google mr-2"></i> Sign in using Google
                </a>
              </div>

              <p className="mb-1">
                <a>I forgot my password</a>
              </p>
              <p className="mb-0">
                <Link to="/register" className="text-center">
                  Register a new membership
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
};

export default Login;
