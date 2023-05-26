import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiError } from "react-icons/bi";
import { GithubAuthProvider, GoogleAuthProvider, sendPasswordResetEmail } from "firebase/auth";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  const [error, setError] = useState(""); 
  useTitle('Login');
  const location=useLocation(); 
  const navigate=useNavigate()
  const from=location.state?.from?.pathname || '/'
  const { Loginprocess,passwordreset,loginWithGoogle,loginWithGithub } = useContext(AuthContext); 
  const emailRef=useRef() 
  const googleProvider=new GoogleAuthProvider(); 
  const githubProvider=new GithubAuthProvider();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");

    Loginprocess(email, password)
      .then((result) => {
        const loggeduser = result.user;
        console.log(loggeduser);
        toast("Login Successfully !!");
        setError("");
        navigate(from,{replace:true})
      })
      .catch((error) => {
        setError(error.message);
      });
  }; 

  const handelResetPassword=()=>{
    const email=emailRef.current.value; 
    if(!email)
    {
        alert('Enter your Email')
    } 
    passwordreset(email)
    .then(()=>{
        alert('Check your E-mail')
    })
    .catch(error=>{
        console.log(error);
    })
  } 

   const handlesigninGoogle=()=>{
    loginWithGoogle(googleProvider)
    .then((result)=>{ 
        const loggeduser=result.user;
        toast('Login Successfully with Google') 
        setError('')
    }) 
    .catch(error=>{ 
        setError(error.message)
    })
   }

  const handleSigninGithub=()=>{ 
    loginWithGithub(githubProvider)
    .then((result)=>{ 
        const loggeduser=result.user;
        toast('Login Successfully with GitHub') 
        setError('')
    }) 
    .catch(error=>{ 
        setError(error.message)
    })

  }



  return (
    <div>
      <div
        style={{ width: "30%", margin: "auto", border: "1px solid gray" }}
        className="loginForm p-4 rounded my-5"
      >
        <h6 className="fw-bold text-center">LOG IN WITH EMAIL & PASSWORD</h6>
        <hr className="text-primary fw-bolder" />
        <br />
        <form onSubmit={handleLogin}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input ref={emailRef} type="email" name="email" class="form-control" />
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
            <Link  className="text-decoration-none">
              <small onClick={handelResetPassword}>Forget Password</small>
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
        <Link onClick={handlesigninGoogle} className="text-decoration-none rounded mt-3 py-2 px-3 bg-primary text-light d-flex  justify-content-center align-items-center">
          <FaGoogle></FaGoogle>
          <p className="ps-2 mb-0">Sign-in With Google</p>
        </Link>
        <Link  onClick={handleSigninGithub} className="text-decoration-none rounded mt-3 py-2 px-3 bg-primary text-light d-flex  justify-content-center align-items-center">
        <FaGithub></FaGithub>
          <p className="ps-2 mb-0">Sign-in With GitHub</p>
        </Link>
        <div className="d-flex text-danger justify-content-center align-items-center">
          {/* <BiError></BiError> */}
          <p className="mb-0">{error}</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
