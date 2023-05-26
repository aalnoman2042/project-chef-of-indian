import React from "react";
import { Link } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazy-load";

const Chef = ({chefID, chef}) => {
    const {name, picture,years_of_experience,num_recipes, likes} = chef

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl my-4 mx-8">
        <figure>
         <LazyLoad height={310}  offset={300} className="md:w-2/4 sm:w-full  p-2 rounded-lg">
         <img
           
            src={picture}
            alt="pic"
          />
         </LazyLoad>
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl text-[#9333EA]">{name}</h2>
          <p className="font-semibold">experience of {years_of_experience} years</p>
          <p className="font-semibold"> recipes: {num_recipes}</p>
          <p className="font-semibold flex gap-1 items-center ">likes: {likes} <span><FaThumbsUp></FaThumbsUp></span> </p>
          <div className="card-actions justify-end ">
           <Link to={`/chefdetails/${chefID}`}><button className="btn">View Recipes</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
