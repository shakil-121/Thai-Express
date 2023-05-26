import React, { useContext } from "react";
import logo from "../assets/Thai Express logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Image } from "react-bootstrap";
import "./Nav.css";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut().then().catch();
  };

  const navStyles = ({ isActive }) => {
    return {
      fontWight: isActive ? "fw-bold" : "none",
    };
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light px-5">
        <div class="container-fluid ">
          <div className="d-md-flex align-items-center">
            <img style={{ width: "200px" }} src={logo} alt="" />
            <div>
              <NavLink
                style={navStyles}
                className="ps-3 text-decoration-none text-dark"
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                style={navStyles}
                className="text-decoration-none text-dark px-3"
                to="/about"
              >
                About
              </NavLink>

              <NavLink
                style={navStyles}
                className="text-decoration-none text-dark "
                to="/blog"
              >
                Blog
              </NavLink>
              {user ? (
                <></>
              ) : (
                <>
                  <NavLink
                    style={navStyles}
                    className="text-decoration-none px-3 text-dark "
                    to="/registration"
                  >
                    Registration
                  </NavLink>
                </>
              )}
            </div>
          </div>
          <div>
            {user ? (
              <div className="d-flex justify-content-center align-items-center">
                <Link to="/profile">
                  <Image
                    title={user.displayName}
                    style={{
                      height: "50px",
                      width: "50px",
                      border: "5px solid black",
                    }}
                    src={user.photoURL}
                    roundedCircle
                  />
                </Link>
                {/* <h5 className="mb-0 ms-2">{user.displayName}</h5> */}
                <button
                  onClick={handleLogout}
                  class="btn btn-outline-primary ms-2"
                  type="submit"
                >
                  <Link className="text-decoration-none text-dark" to="/login">
                    Log Out
                  </Link>
                </button>
              </div>
            ) : (
              <>
                <button class="btn btn-outline-primary" type="submit">
                  <Link className="text-decoration-none text-dark" to="/login">
                    Login
                  </Link>
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

/**
 * <NavLink style={navStyles} className="text-decoration-none text-dark ps-3" to="/">
                  Home
                </NavLink>
         
 * 
 *  <NavLink style={navStyles}
                  className="text-decoration-none text-dark px-3"
                  to="/about"
                >
                  About
                </NavLink>


                <NavLink style={navStyles} className="text-decoration-none text-dark " to="/blog">
                  Blog
                </NavLink>
 * 
 * 
 */
