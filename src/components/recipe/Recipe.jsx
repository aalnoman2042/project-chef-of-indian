import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleRecipe from '../singleRecipe/SingleRecipe';

const Recipe = () => {
    const {id} = useParams()
    const ha = useLoaderData()
    const receipe = ha.chef.recipes
  
    return (
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 items-stretch content-center mx-4  ">
            
            
            {
                receipe.map(SR =><SingleRecipe recipe={SR}></SingleRecipe>)
            }
        </div>
    );
};

export default Recipe;