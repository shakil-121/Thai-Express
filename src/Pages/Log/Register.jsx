import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [accepted,setAccepted]=useState(false)


    const acceptTrams=(event)=>{ 
        setAccepted(event.target.checked)
       }
    return (
        <div
      style={{ width: "35%", margin: "auto", border: "1px solid gray" }}
      className="loginForm p-4 rounded mt-4"
    >
      <h6 className="fw-bold text-center">Registration Form</h6>
      <hr className="text-primary fw-bolder" />
      <br />
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input type="text" name="name" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Photo Url
          </label>
          <input type="text" name="photo" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input type="email" name="email" class="form-control" />
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
        </div>
        <div class="mb-3 form-check">
          <input onClick={acceptTrams} type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Accept{" "}
            <Link to="/trams-condition" className="text-decoration-none">
              Trams & Condition
            </Link>
          </label>
        </div> 
         <div className="d-flex justify-content-center">
         <button disabled={!accepted} type="submit" className="btn btn-primary">
          Registration
        </button>
         </div>
        <div className="pt-3 text-center">
        <small >Already have an account <Link to='/login'> Login</Link></small>
        </div> 
      </form>
    </div>
    );
};

export default Register;