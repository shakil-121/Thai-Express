import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");
  const { registration } = useContext(AuthContext); 
  useTitle('Registration')

  const handelregistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value; 

    if(password.length<6)
    {
        alert('Error :Your Password must be 6+ character')
        return;
    }

    registration(email, password)
      .then((result) => {
        const loggeduser = result.user;
        toast("Successfully Registered !!");
        event.target.reset();
        setError("");
        updateprofiledata(loggeduser, name, photo); 
        console.log(loggeduser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const updateprofiledata = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then()
      .catch();
  };

  const acceptTrams = (event) => {
    setAccepted(event.target.checked);
  };
  return (
    <div
      style={{ width: "370px", margin: "auto", border: "1px solid gray" }}
      className="loginForm p-4 rounded my-4"
    >
      <h6 className="fw-bold text-center">Registration Form</h6>
      <hr className="text-primary fw-bolder" />
      <br />
      <form onSubmit={handelregistration}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input type="text" name="name" class="form-control" required />
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
          <input type="email" name="email" class="form-control" required />
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
            required
          />
        </div>
        <div class="mb-3 form-check">
          <input
            onClick={acceptTrams}
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
          />
          <label class="form-check-label" for="exampleCheck1">
            Accept{" "}
            <Link to="/trams" className="text-decoration-none">
              Trams & Condition
            </Link>
          </label>
        </div>
        <div className="d-flex justify-content-center">
          <button
            disabled={!accepted}
            type="submit"
            className="btn btn-primary"
          >
            Registration
          </button>
        </div>
        <div className="pt-3 text-center">
          <small>
            Already have an account <Link to="/login"> Login</Link>
          </small>
        </div>
        <p className="text-danger text-center pt-2">{error}</p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
