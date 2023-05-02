import React from "react";
import { BiLike } from "react-icons/bi"; 
import './ChefCard.css'

const ChefCard = ({ chef }) => {
  const { ChefPicture, ChefName,Yearsofexperience,Numbersofrecipes,TotalLikes} = chef;
  return (
    <div className="col-lg-4 px-auto my-3">
      <div className="card rounded" style={{width:'18rem'}}>
        <img  src={ChefPicture} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{ChefName}</h5>
          <div className="d-flex justify-content-between">
            <p>Experience: {Yearsofexperience}</p>
            <p>Total Recipe: {Numbersofrecipes}</p>
          </div>
        </div>
        <div className="card-body border-top bg-dark">
          <div className="d-flex align-items-center">
             <p className="mb-0 text-light">{TotalLikes}</p>
             <BiLike className="text-primary"></BiLike>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
