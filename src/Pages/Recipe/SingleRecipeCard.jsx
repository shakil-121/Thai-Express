import React from "react";
import Rating from "react-rating";
import { FaRegBookmark,FaRegStar,FaStar,FaEye } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleRecipeCard = ({ recipe }) => {
  const { recipies_name, ingradients, cooking_methods ,rating} = recipe;

  const likemost=()=>{ 
    toast('Favorite')
  }
  return (
    <div className="border border-2 rounded-3 p-4 mx-2">
      <h5>Recipe Name : {recipies_name}</h5>
      <hr />
      <p>
        <span className="fw-bold">Ingradients</span>:{" "}
        <small>{ingradients}</small>
      </p>
      <p>
        <span className="fw-bold">Cooking Methods</span>:{" "}
        <small>{cooking_methods}</small>
      </p>
      <hr />
      <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center ">
      <Rating 
           
            placeholderRating={rating}
            readonly
            emptySymbol={
                <FaRegStar></FaRegStar>
            }
            placeholderSymbol={
                <FaStar></FaStar>
            }
            fullSymbol={
                <FaStar></FaStar>
            }
          /> 
        <p className="mb-0 ps-2">{rating}</p>
      </div>
      <div>
        <button onClick={likemost} className="rounded text-primary"><FaRegBookmark></FaRegBookmark></button>
      </div>
      </div> 
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SingleRecipeCard;
