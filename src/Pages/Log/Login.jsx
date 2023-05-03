import React from "react";
import { Link } from "react-router-dom"; 
import { FaGoogle,FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <div
        style={{ width: "30%", margin: "auto", border: "1px solid gray" }}
        className="loginForm p-4 rounded"
      >
        <h6 className="fw-bold text-center">LOG IN WITH EMAIL & PASSWORD</h6>
        <hr className="text-primary fw-bolder" />
        <br />
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              class="form-control"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
            <Link className="text-decoration-none">
              <small>Forget Password</small>
            </Link>
          </div>
          <div>
            <label class="form-check-label" for="exampleCheck1">
              Are you new ? please
              <Link to="/registration" className="text-decoration-none">
                Registration
              </Link>
            </label>
          </div>
          <div className="d-flex justify-content-center">
          <button type="submit" class="btn btn-primary px-4 my-3">
            Login
          </button>
          </div>
        </form>  
        <div>
            <p className="text-center">Or</p>
            <hr />
        </div>
        <div className=" rounded mt-3 py-2 px-3 bg-primary text-light d-flex  justify-content-center align-items-center">
            <FaGoogle></FaGoogle>
            <p className="ps-2 mb-0">Sign-in With Google</p>
        </div>
        <div className="rounded mt-3 py-2 px-3 bg-primary text-light d-flex  justify-content-center align-items-center">
            <FaGithub></FaGithub>
            <p className="ps-2 mb-0">Sign-in With GitHub</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
