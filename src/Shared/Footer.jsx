import React from "react";
import logo from "../assets/Thai Express logo.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div style={{ height: "350px",width:'100%' }} className="bg-black row p-5">
      <div className="col-md-4">
        <img style={{height:'100px',width:'300px'}} src={logo} alt="Thai-Express" />
        <p className="text-light">
          House Number 123/456, Ratchadaphisek Road <br /> Sub-district: Huai Khwang,
          District: Huai Khwang Bangkok 10140 Thailand
        </p>
      </div>
      <div  className="col-md-4 ps-5 text-light">
        <h4>Restaurant</h4> 
        <br />
        <Link to='/' className="text-decoration-none text-light"><p>Contact Us</p></Link>
        <Link to='/about' className="text-decoration-none text-light"><p>About</p></Link>
        <Link to='/blog' className="text-decoration-none text-light"><p>Blog</p></Link>
      </div>
      <div  className="col-md-4 text-center text-light">
        <h4>Descover Our App</h4> 
        <img  style={{height:'100px'}} src={google} alt="" />
            <img  style={{height:'100px'}} src={apple} alt="" />
      </div> 
      <div className="bg-dark rounded d-flex justify-content-center align-items-center pt-2">
      <p><span className="text-light ">Developed By </span> <a className="text-decoration-none" href="https://github.com/shakil-121">©Shahadat Hossain</a></p>
      </div>
    </div>
  );
};

export default Footer;
