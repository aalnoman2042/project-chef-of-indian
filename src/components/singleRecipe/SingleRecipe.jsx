
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SingleRecipe = ({ recipe }) => {
  const { name ,ingredients,description,instructions,image} = recipe;
  const [seebutton, setSeeButton] = useState(true)

 const notify = () =>{
setSeeButton(false)
   toast.success("Added to favourite")
 } 
  return (
    <div>
      
<div className="lg:w-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-[#cbcbcb] dark:border-gray-700 my-2">
    <a href="#">
        <img className="rounded-t-lg h-[300px] w-[500px]" src={image} alt="recepie image" />
    </a>
    <div className="p-5">
        {seebutton?<p className="text-2xl cursor-pointer"  onClick={notify}><FaHeart></FaHeart></p>:""}
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#9333EA]">{name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold dark:text-gray-600">description:</span>{description}</p>
        <p><span className="font-bold">instructions:</span>{instructions}</p>
        {/* <p><span className="font-bold">ingredients:</span>{ingredients}</p> */}
        <h1 className="font-bold">ingredients:</h1>

       {/* <ol>
        <li>{ ingredients.map(i =><IngreList i={i} ></IngreList>  )}</li>
       </ol>
    */}
  <ul>
      {ingredients.map((ingredi, index) => (
        <li key={index}>{ingredi},</li>
      ))}
    </ul>
       
    </div>
</div>

    </div>
  );
};

export default SingleRecipe;
