import React, { useContext } from "react";
import logo from "../assets/Thai Express logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Image } from "react-bootstrap";
const Nav = () => {
  const { user,logOut } = useContext(AuthContext); 
  const handleLogout=()=>{
    logOut()
    .then()
    .catch()
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light px-5">
        <div class="container-fluid">
          <img style={{ width: "200px" }} src={logo} alt="" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className="text-decoration-none text-dark ps-3" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className="text-decoration-none text-dark px-3"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link className="text-decoration-none text-dark " to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
             {
              user?<div className="d-flex justify-content-center align-items-center">
              <Image title={user.displayName} style={{height:'50px',width:'50px',border:'5px solid black'}} src={user.photoURL}  roundedCircle />
             {/* <h5 className="mb-0 ms-2">{user.displayName}</h5> */}
              <button onClick={handleLogout} class="btn btn-outline-primary ms-2" type="submit">
              <Link className="text-decoration-none text-dark" to="/login">
                Log Out
              </Link>
            </button></div>:<><button class="btn btn-outline-primary" type="submit">
              <Link className="text-decoration-none text-dark" to="/login">
                Login
              </Link>
            </button></>
             }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
