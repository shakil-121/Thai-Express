import React from "react";
import "./HeroSection.css";
import img1 from "../../assets/banner-img.png";
import ReactiveButton from 'reactive-button';
const HeroSection = () => {
  return (
    <div>
      <div  className="banner  d-flex px-5">
        <div className="col-7 px-4 py-5">
          <h1 className="text-light mt-5">Thai Food</h1>
          <h1 style={{fontSize:'45px'}} className="text-light"><span className="font-style">Delicious </span><span className="text-warning font-style">Recipes</span></h1>
          <p className="text-light my-3 ">
            inappropriate behavior is often laughed off as “boys will be boys,”
            women face higher conduct standards especially in the workplace.
            That’s why it’s crucial that, as women.
          </p> 
          <ReactiveButton className="px-5 py-2 rounded fw-bold" color="yellow" shadow idleText={'All Recipes'}/>
        </div>
        <div style={{position:'relative'}} className="col-5">
          <img
            style={{ }}
            className="img-fluid  mx-auto"
            src={img1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
